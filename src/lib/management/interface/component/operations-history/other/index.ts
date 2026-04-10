import type { Operation, OperationsHistoryEvents } from '$stylist/management/function/state/operations-history';

export interface OperationsHistoryProps {
  operations?: Operation[];
  class?: string;
}
