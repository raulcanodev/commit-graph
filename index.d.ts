declare module '@raulcanodev/react-github-dots' {
  export interface ContributionGraphProps {
    username: string;
    token: string;
    theme?: 'dark' | 'light' | string;
    customColorScheme?: string[];
    loadingComponent?: React.ReactNode;
    cacheTime?: '2h' | '8h' | '1d' | false;
  }

  export default function ContributionGraph(props: ContributionGraphProps): JSX.Element;
}