import { ReactElement } from 'react';
import { create } from 'react-test-renderer';
import { ReactWrapper } from './ReactWrapper';

export function mount(element: ReactElement): ReactWrapper {
  return new ReactWrapper(create(element));
}
