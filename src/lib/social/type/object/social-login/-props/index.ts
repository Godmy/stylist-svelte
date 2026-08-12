import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
﻿import type { Provider } from '$stylist/social/type/object/social-login/provider';

export type Props = (Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography) & {
	providers?: Provider[];
	showEmailForm?: boolean;
	showPasswordForm?: boolean;
	showSignUp?: boolean;
	showForgotPassword?: boolean;
	title?: string;
	description?: string;
	class?: string;
	buttonClass?: string;
	formClass?: string;
	inputClass?: string;
	onLogin?: (provider: Provider) => void;
	onEmailLogin?: (email: string, password: string) => void;
	onSignUp?: () => void;
	onForgotPassword?: () => void;
	onError?: (error: string) => void;
	locale?: string;
	socialLoginText?: string;
	emailLoginText?: string;
};
