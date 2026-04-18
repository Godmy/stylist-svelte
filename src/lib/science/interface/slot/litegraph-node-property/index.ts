import type { LiteGraphPort } from '$stylist/science/interface/slot/litegraph-port';

export interface LiteGraphNodeProperty {
  id: string;
  name: string;
  type: string;
  value: unknown;
  label?: string;
  description?: string;
  options?: Record<string, unknown>[];
}
