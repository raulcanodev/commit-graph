declare module '@raulcanodev/react-github-dots' {
  import { ReactNode } from 'react';
  
  export interface ContributionGraphProps {
    username: string;
    token: string;
    theme?: 'light' | 'dark';
    customColorScheme?: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
    };
    loadingComponent?: ReactNode;
  }

  export function ContributionGraph(props: ContributionGraphProps): JSX.Element;
}