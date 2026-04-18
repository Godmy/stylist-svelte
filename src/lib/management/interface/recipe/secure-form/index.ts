import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotSecureForm as SecureFormProps } from '$stylist/form/interface/slot/secure-form';

export interface SecureFormStateProps extends StructIntersectAll<[SecureFormProps]> {}
