declare module '@raulcanodev/react-github-dots' {
  import React from 'react';

  type Theme = 'dark' | 'light' | string;

  interface ContributionDay {
    date: string;
    contributionCount: number;
  }

  interface Week {
    contributionDays: ContributionDay[];
  }

  interface Contributions {
    weeks: Week[];
  }

  interface ContributionGraphProps {
    username: string;
    token: string;
    theme?: Theme;
    customColorScheme?: string[];
    loadingComponent?: React.ReactNode;
  }

  const ContributionGraph: React.FC<ContributionGraphProps>;

  export default ContributionGraph;
}
