import { expect } from 'vitest';
import { Serializer } from '../src';

expect.addSnapshotSerializer(new Serializer());
