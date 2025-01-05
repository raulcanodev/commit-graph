# Commit Graph

React component that generates contribution/commit visualization graphs similar to GitHub contributions. Perfect for portfolios and activity tracking.

![npm version](https://img.shields.io/npm/v/commit-graph)
![license](https://img.shields.io/npm/l/commit-graph)

## Features

- 📊 GitHub-style contribution graph
- 🌓 Light and dark theme support
- 🎨 Customizable color schemes
- 🔄 Real-time GitHub data integration
- 📱 Responsive design

## Installation

```bash
npm install commit-graph
```

## Usage

```jsx
import { ContributionGraph } from 'commit-graph';

function App() {
  return (
    <ContributionGraph 
      username="your-github-username"
      token="your-github-token"
      theme="dark" // or "light"
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `username` | string | required | GitHub username |
| `token` | string | required | GitHub personal access token |
| `theme` | 'light' \| 'dark' | 'light' | Color theme |
| `customColorScheme` | object | null | Custom color configuration |
| `loadingComponent` | ReactNode | null | Custom loading component |

### Custom Color Scheme

You can provide your own color scheme:

```jsx
<ContributionGraph 
  username="your-github-username"
  token="your-github-token"
  customColorScheme={{
    0: '#ebedf0', // No contributions
    1: '#ff9b9b', // 1-3 contributions
    2: '#ff4040', // 4-6 contributions
    3: '#ff0000', // 7-9 contributions
    4: '#990000'  // 10+ contributions
  }}
/>
```

## Development

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/commit-graph.git
cd commit-graph
```

2. Install dependencies:
```bash
npm install
```

3. Build the package:
```bash
npm run build
```

### Testing with a Local React App

1. In the package directory, link the package:
```bash
npm link
```

2. Create a test React app and link to the package:
```bash
cd your-test-app
npm link commit-graph
```

3. Use the component in your test app:
```jsx
import { ContributionGraph } from 'commit-graph';
```
---

### Development Workflow

1. In the package directory, run the build with watch mode:
```bash
npm run watch
```

2. In your react test app, keep your development server running:
```bash
npm run dev
```
By doing this, you can see the changes in real-time.


If changes aren't reflecting, try unlinking and relinking in the react test app:
```bash
npm unlink commit-graph
npm link commit-graph
```

## GitHub Token

To use this component, you need a GitHub Personal Access Token with the `read:user` scope. You can create one at: https://github.com/settings/tokens?type=beta

## License

MIT © Raul Cano commit-graph
