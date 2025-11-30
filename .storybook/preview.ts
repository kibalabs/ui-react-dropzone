import type { Preview } from '@storybook/react-vite';
import '@kibalabs/ui-react/styles/reset';
import '@kibalabs/ui-react/styles/colors';
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
