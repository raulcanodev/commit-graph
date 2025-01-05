import React, { useState, useEffect } from 'react';
import { themes } from '../constants/themes';
import { fetchGithubContributions } from '../api/github';
// import { styles } from '../styles/contributionGraph';
import { getColorForDots } from '../utils/colorDots';
import '../styles/styles.css'

const ContributionGraph = ({
  username,
  token,
  theme = 'dark',
  customColorScheme,
  loadingComponent = ""
}) => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentTheme = themes[theme] || themes.light;
  const colorScheme = customColorScheme || currentTheme.colorScheme;

  useEffect(() => {
    const getContributions = async () => {
      try {
        const data = await fetchGithubContributions(username, token);
        setContributions(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch contribution data');
        setLoading(false);
        console.error('Error fetching contributions:', err);
      }
    };

    getContributions();
  }, [username, token]);

  if (loading) {
    return loadingComponent;
  }
  
  if (error) {
    return <div style={styles.error(currentTheme)}>{error}</div>;
  }

  const days = Array(7).fill(null);
  const transposedData = days.map((_, dayIndex) => 
    contributions.weeks?.map(week => 
      week.contributionDays.find(day => new Date(day.date).getDay() === dayIndex) || null
    ).filter(Boolean)
  );

  return (
    <div className="contribution-graph" style={{ backgroundColor: currentTheme.background }}>
      <div className="contribution-wrapper">
        {transposedData.map((row, rowIndex) => (
          <div key={rowIndex} className="contribution-row">
            {row.map((day, dayIndex) => (
              <div
                key={`${rowIndex}-${dayIndex}`}
                className="contribution-square"
                style={{ backgroundColor: getColorForDots(day.contributionCount, colorScheme) }}
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