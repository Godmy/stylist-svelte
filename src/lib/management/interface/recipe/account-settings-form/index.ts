import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotAccountSettingsForm as AccountSettingsFormProps } from '$stylist/form/interface/slot/account-settings-form';

export interface AccountSettingsFormStateProps extends StructIntersectAll<[AccountSettingsFormProps]> {}
