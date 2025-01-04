const GITHUB_API_URL = 'https://api.github.com/graphql';

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

export const fetchGithubContributions = async (username, token) => {
  if (!username || !token) {
    throw new Error('Please provide both username and token');
  }

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

  return contributionData;
};