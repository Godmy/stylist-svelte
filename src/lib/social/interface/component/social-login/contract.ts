import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type SocialLoginProvider = 'google' | 'facebook' | 'github' | 'twitter' | 'linkedin' | 'apple' | 'microsoft' | 'slack';

export type SocialLoginContract = RecordArchitectureMerge<
	[
		{
			providers?: SocialLoginProvider[];
			showEmailForm?: boolean;
			showPasswordForm?: boolean;
			showSignUp?: boolean;
			showForgotPassword?: boolean;
			title?: string;
			description?: string;
			buttonClass?: string;
			formClass?: string;
			inputClass?: string;
			onLogin?: (provider: SocialLoginProvider) => void;
			onEmailLogin?: (email: string, password: string) => void;
			onSignUp?: () => void;
			onForgotPassword?: () => void;
			onError?: (error: string) => void;
			locale?: string;
			socialLoginText?: string;
			emailLoginText?: string;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
