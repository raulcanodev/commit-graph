declare module '@raulcanodev/react-github-dots' {
  export interface ContributionGraphProps {
    username: string;
    token?: string;
    theme?: 'dark' | 'light' | string;
    customColorScheme?: string[];
    loadingComponent?: React.ReactNode;
  }

  export default function ContributionGraph(props: ContributionGraphProps): JSX.Element;
}