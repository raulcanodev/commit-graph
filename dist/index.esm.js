// src/components/ContributionGraph.jsx
import React, { useState, useEffect } from "react";

// src/constants/themes.js
var themes = {
  light: {
    background: "#ffffff",
    text: "#24292f",
    loading: "#666666",
    error: "#ff0000",
    colorScheme: {
      0: "#ebedf0",
      1: "#9be9a8",
      2: "#40c463",
      3: "#30a14e",
      4: "#216e39"
    }
  },
  dark: {
    background: "#0d1117",
    text: "#c9d1d9",
    loading: "#8b949e",
    error: "#f85149",
    colorScheme: {
      0: "#161b22",
      1: "#0e4429",
      2: "#006d32",
      3: "#26a641",
      4: "#39d353"
    }
  }
};

// src/api/github.js
var GITHUB_API_URL = "https://api.github.com/graphql";
var CONTRIBUTIONS_QUERY = `
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
var fetchGithubContributions = async (username, token) => {
  if (!username || !token) {
    throw new Error("Please provide both username and token");
  }
  const response = await fetch(GITHUB_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: CONTRIBUTIONS_QUERY,
      variables: { username }
    })
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }
  const contributionData = result.data?.user?.contributionsCollection?.contributionCalendar;
  if (!contributionData) {
    throw new Error("No contribution data found");
  }
  return contributionData;
};

// src/styles/contributionGraph.js
var styles = {
  container: {
    maxWidth: "100%",
    overflowX: "auto",
    padding: "8px",
    borderRadius: "6px"
  },
  graphWrapper: {
    display: "inline-flex",
    flexDirection: "column",
    gap: "4px"
  },
  row: {
    display: "flex",
    gap: "4px"
  },
  square: {
    width: "12px",
    height: "12px",
    borderRadius: "2px",
    transition: "background-color 0.2s ease"
  },
  loading: (theme) => ({
    color: theme.loading
  }),
  error: (theme) => ({
    color: theme.error
  })
};

// src/utils/colorDots.js
var getColorForDots = (count, colorScheme) => {
  if (count === 0)
    return colorScheme[0];
  if (count <= 3)
    return colorScheme[1];
  if (count <= 6)
    return colorScheme[2];
  if (count <= 9)
    return colorScheme[3];
  return colorScheme[4];
};

// src/components/ContributionGraph.jsx
var ContributionGraph = ({
  username,
  token,
  theme = "light",
  customColorScheme,
  showLoadingState = true
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
        setError(err.message || "Failed to fetch contribution data");
        setLoading(false);
        console.error("Error fetching contributions:", err);
      }
    };
    getContributions();
  }, [username, token]);
  if (loading && showLoadingState)
    return /* @__PURE__ */ React.createElement("div", { style: styles.loading(currentTheme) }, "Loading contributions...");
  if (error)
    return /* @__PURE__ */ React.createElement("div", { style: styles.error(currentTheme) }, error);
  const days = Array(7).fill(null);
  const transposedData = days.map(
    (_, dayIndex) => contributions.weeks?.map(
      (week) => week.contributionDays.find((day) => new Date(day.date).getDay() === dayIndex) || null
    ).filter(Boolean)
  );
  return /* @__PURE__ */ React.createElement("div", { style: {
    ...styles.container,
    backgroundColor: currentTheme.background
  } }, /* @__PURE__ */ React.createElement("div", { style: styles.graphWrapper }, transposedData.map((row, rowIndex) => /* @__PURE__ */ React.createElement("div", { key: rowIndex, style: styles.row }, row.map((day, dayIndex) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: `${rowIndex}-${dayIndex}`,
      style: {
        ...styles.square,
        backgroundColor: getColorForDots(day.contributionCount, colorScheme)
      },
      title: `${day.date}: ${day.contributionCount} contributions`
    }
  ))))));
};
var ContributionGraph_default = ContributionGraph;
export {
  ContributionGraph_default as ContributionGraph,
  themes
};
