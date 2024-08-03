import * as React from 'react';
import { DateFormat, fade } from './utils';

export const useNotPaid = (date: DateFormat, deadline: number) => {
  const opacity = fade(date, deadline);
  const body = React.useRef<null | HTMLBodyElement>(document.getElementsByTagName('body')[0]);
  body.current.style.opacity = opacity.toString();
};
