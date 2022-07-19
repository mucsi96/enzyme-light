import { ElementType } from 'react';

export function getComponentNameFromType(type: ElementType): string {
  if (typeof type === 'function') {
    return (type as any).displayName || type.name || 'null';
  }

  if (typeof type === 'string') {
    return type;
  }
  return 'null';
}
