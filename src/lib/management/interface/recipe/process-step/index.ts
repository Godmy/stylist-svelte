import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotProcessStep as IProcessStepProps } from '$stylist/management/interface/slot/process-step';

export interface ProcessStepStateProps extends StructIntersectAll<[IProcessStepProps]> {}
