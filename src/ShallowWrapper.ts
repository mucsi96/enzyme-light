import { ReactElement } from 'react';
import { ReactTestInstance } from 'react-test-renderer';
import { toJSON } from './toJSON';

export class ShallowWrapper {
  private renderOutput: ReactElement;
  private instances?: ReactTestInstance[];

  constructor(
    renderOutput: ReactElement,
    instances?: ReactTestInstance[]
  ) {
    this.renderOutput = renderOutput
    this.instances = instances;
  }

  toJSON() {
    return this.instances?.length
      ? toJSON(this.instances[0])
      : this.renderOutput;
  }

  // find<T>(selector: React.ElementType<T>) {
  //   return new ShallowWrapper(
  //     this.renderOutput,
  //     this.rootRenderer.root.findAllByType(selector)
  //   );
  // }

  exists() {
    return (this.instances?.length ?? 0) > 0;
  }
}
