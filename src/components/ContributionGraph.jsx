import * as React from 'react';
import { themes } from '../constants/themes';
import { fetchGithubContributions } from '../api/github';
import { getColorForDots } from '../utils/colorDots';
import '../styles/styles.css';

const ContributionGraph = ({
  username,
  token,
  theme = 'dark',
  customColorScheme,
  loadingComponent = '',
  cacheTime = '1d', // Default to 1 day, can be false | '2h' | '8h' | '1d'
}) => {
  const [contributions, setContributions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const currentTheme = themes[theme] || themes.light;
  const colorScheme = customColorScheme || currentTheme.colorScheme;

  React.useEffect(() => {
    const getContributions = async () => {
      try {
        const data = await fetchGithubContributions(username, token, cacheTime);
        setContributions(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch contribution data');
        setLoading(false);
        console.error('Error fetching contributions:', err);
      }
    };

    getContributions();
  }, [username, token, cacheTime]);

  if (loading) {
    return loadingComponent || null;
  }

  if (error) {
    return <div style={{ color: currentTheme.error }}>{error}</div>;
  }

  const days = Array(7).fill(null);
  const transposedData = days.map((_, dayIndex) =>
    (contributions.weeks || [])
      .map(
        (week) =>
          week.contributionDays.find(
            (day) => new Date(day.date).getDay() === dayIndex
          ) || null
      )
      .filter(Boolean)
  );

  return (
    <div className="contribution-container">
      <div
        className="contribution-graph"
        style={{ backgroundColor: currentTheme.background }}>
        <div className="contribution-wrapper">
          {transposedData.map((row, rowIndex) => (
            <div key={rowIndex} className="contribution-row">
              {row.map((day, dayIndex) => (
                <div className="contribution-square"
                  key={`${rowIndex}-${dayIndex}`}
                  style={{
                    backgroundColor: getColorForDots(
                      day?.contributionCount || 0,
                      colorScheme
                    ),
                  }}
                  title={
                    day
                      ? `${day.date}: ${day.contributionCount} contributions`
                      : ''
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;
