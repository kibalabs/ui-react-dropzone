import React from 'react';

import { Dropzone } from '.';

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Dropzone {...args} />;
}

export default {
  component: Dropzone,
  title: 'Dropzone',
};

export const Default = {
  render: Template.bind({}),
  name: 'Default',
  args: {},
};

export const WithText = {
  render: () => (
    <Dropzone>
      <p>Pick a card</p>
    </Dropzone>
  ),

  name: 'With text',
};
