import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { AccountSettings } from '$stylist/management/type/struct/settings/account-settings';

export interface AccountSettingsFormElementProps extends StructIntersectAll<[InteractionHTMLAttributes<HTMLFormElement> ]> {
	showEmailChange?: boolean;
	showPasswordChange?: boolean;
	showDeleteAccount?: boolean;
	showTwoFactor?: boolean;
	loading?: boolean;
	class?: string;
	onSubmit?: (settings: AccountSettings) => void;
	onDeleteAccount?: () => void;
}
