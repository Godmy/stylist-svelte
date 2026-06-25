import type { Provider } from '$stylist/social/type/struct/social-login/provider';
import type { RestProps } from '$stylist/social/type/struct/social-login/rest-props';

export type Props = RestProps & {
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
