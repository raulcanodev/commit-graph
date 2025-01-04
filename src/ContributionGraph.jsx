import React, { useState, useEffect } from 'react';

const themes = {
  light: {
    background: '#ffffff',
    text: '#24292f',
    loading: '#666666',
    error: '#ff0000',
    colorScheme: {
      0: '#ebedf0',
      1: '#9be9a8',
      2: '#40c463',
      3: '#30a14e',
      4: '#216e39'
    }
  },
  dark: {
    background: '#0d1117',
    text: '#c9d1d9',
    loading: '#8b949e',
    error: '#f85149',
    colorScheme: {
      0: '#161b22',
      1: '#0e4429',
      2: '#006d32',
      3: '#26a641',
      4: '#39d353'
    }
  }
};

const ContributionGraph = ({
  username,
  token,
  theme = 'light',
  customColorScheme,
  showLoadingState = true
}) => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentTheme = themes[theme] || themes.light;
  const colorScheme = customColorScheme || currentTheme.colorScheme;

  useEffect(() => {
    const fetchContributions = async () => {
      if (!username || !token) {
        setError('Please provide both username and token');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                user(login: "${username}") {
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
            `
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

        setContributions(contributionData);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch contribution data');
        setLoading(false);
        console.error('Error fetching contributions:', err);
      }
    };

    fetchContributions();
  }, [username, token]);

  const getColorForCount = (count) => {
    if (count === 0) return colorScheme[0];
    if (count <= 3) return colorScheme[1];
    if (count <= 6) return colorScheme[2];
    if (count <= 9) return colorScheme[3];
    return colorScheme[4];
  };

  if (loading && showLoadingState) 
    return <div style={{ color: currentTheme.loading }}>Loading contributions...</div>;
  if (error) 
    return <div style={{ color: currentTheme.error }}>{error}</div>;

  // Transpose the data for horizontal layout
  const days = Array(7).fill(null); // 7 days in a week
  const transposedData = days.map((_, dayIndex) => 
    contributions.weeks?.map(week => 
      week.contributionDays.find(day => new Date(day.date).getDay() === dayIndex) || null
    ).filter(Boolean)
  );

  return (
    <div style={{ 
      maxWidth: '100%', 
      overflowX: 'auto',
      backgroundColor: currentTheme.background,
      padding: '8px',
      borderRadius: '6px'
    }}>
      <div style={{ 
        display: 'inline-flex', 
        flexDirection: 'column', 
        gap: '4px'
      }}>
        {transposedData.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', gap: '4px' }}>
            {row.map((day, dayIndex) => (
              <div
                key={`${rowIndex}-${dayIndex}`}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '2px',
                  backgroundColor: getColorForCount(day.contributionCount),
                  transition: 'background-color 0.2s ease'
                }}
                title={`${day.date}: ${day.contributionCount} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributionGraph;