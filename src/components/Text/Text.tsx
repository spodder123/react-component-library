import React from 'react';

import { type TextProps } from './Text.types';

const Text = (props: TextProps): JSX.Element => {
  return <label>{props.text}</label>;
};

export default Text;
