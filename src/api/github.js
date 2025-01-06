const GITHUB_API_URL = 'https://api.github.com/graphql';
const CACHE_KEY = 'github_contributions_cache';

const CONTRIBUTIONS_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

const isCacheValid = (cachedData, cacheTime) => {
  if (!cachedData) return false;

  const { timestamp } = cachedData;
  if (!timestamp) return false;

  const now = new Date().getTime();
  const cacheAge = now - timestamp;
  
  return cacheAge < cacheTime;
};

const getCachedData = (username) => {
  try {
    const cacheKey = `${CACHE_KEY}_${username}`;
    const cachedData = localStorage.getItem(cacheKey);
    if (!cachedData) return null;

    return JSON.parse(cachedData);
  } catch (error) {
    console.error('Error reading from cache:', error);
    return null;
  }
};

const setCachedData = (username, data) => {
  try {
    const cacheKey = `${CACHE_KEY}_${username}`;
    const cacheData = {
      data,
      timestamp: new Date().getTime()
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error saving to cache:', error);
  }
};

export const fetchGithubContributions = async (username, token, cacheTime = 24 * 60 * 60 * 1000) => {
  if (!username) {
    throw new Error('Please provide the Github username');
  }

  if (!token) {
    throw new Error('Please provide the Github personal token');
  }

  // Check cache first
  const cachedData = getCachedData(username);
  if (cachedData && isCacheValid(cachedData, cacheTime)) {
    return cachedData.data;
  }

  // If cache is invalid or missing, fetch fresh data
  const response = await fetch(GITHUB_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: CONTRIBUTIONS_QUERY,
      variables: { username }
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  const contributionData = result.data?.user?.contributionsCollection?.contributionCalendar;
  if (!contributionData) {
    throw new Error('No contribution data found');
  }

  // Cache the new data
  setCachedData(username, contributionData);

  return contributionData;
};