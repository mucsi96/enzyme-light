import { ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';
import { toJSON } from './toJSON';

export class ReactWrapper {
  private rootRenderer: ReactTestRenderer;
  private instances?: ReactTestInstance[];

  constructor(
    rootRenderer: ReactTestRenderer,
    instances?: ReactTestInstance[]
  ) {
    this.rootRenderer = rootRenderer;
    this.instances = instances;
  }

  toJSON() {
    return this.instances?.length
      ? toJSON(this.instances[0])
      : this.rootRenderer.toJSON();
  }

  find<T>(selector: React.ElementType<T>) {
    return new ReactWrapper(
      this.rootRenderer,
      this.rootRenderer.root.findAllByType(selector)
    );
  }

  exists() {
    return (this.instances?.length ?? 0) > 0;
  }
}
