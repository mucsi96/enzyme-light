import { ReactWrapper } from './ReactWrapper';

export class Serializer {
  test(value: ReactWrapper): boolean {
    return value instanceof ReactWrapper;
  }
  
  serialize(val: ReactWrapper, config: any): string {
    const json = val.toJSON();
    const plugin = config.plugins.find((p: any) => p != this && p.test(json));
    return plugin.serialize(json, ...[...arguments].slice(1));
  }
}
