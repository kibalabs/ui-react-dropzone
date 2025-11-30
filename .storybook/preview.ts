import type { Preview } from '@storybook/react-vite';
import '@kibalabs/ui-react/dist/index.css';
import '../src/styles.scss';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
