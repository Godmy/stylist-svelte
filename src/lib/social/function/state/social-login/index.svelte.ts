import type { Provider, ProviderConfig, Props } from '$stylist/social/type/struct/social-login';

export function createSocialLoginState(props: Props) {
	let isLoading = $state(false);
	let email = $state('');
	let password = $state('');
	let rememberMe = $state(false);

	const providerConfigs: Record<Provider, ProviderConfig> = {
		google: { id: 'google', name: 'Google', icon: null, color: 'bg-[var(--color-background-primary)]', textColor: 'text-[var(--color-text-primary)]', borderColor: 'border-[var(--color-border-primary)]' },
		facebook: { id: 'facebook', name: 'Facebook', icon: null, color: 'bg-[var(--color-background-primary)]', textColor: 'text-[var(--color-text-primary)]', borderColor: 'border-[var(--color-border-primary)]' },
		github: { id: 'github', name: 'GitHub', icon: null, color: 'bg-[var(--color-background-primary)]', textColor: 'text-[var(--color-text-primary)]', borderColor: 'border-[var(--color-border-primary)]' },
		twitter: { id: 'twitter', name: 'Twitter', icon: null, color: 'bg-[var(--color-background-primary)]', textColor: 'text-[var(--color-text-primary)]', borderColor: 'border-[var(--color-border-primary)]' },
		linkedin: { id: 'linkedin', name: 'LinkedIn', icon: null, color: 'bg-[var(--color-background-primary)]', textColor: 'text-[var(--color-text-primary)]', borderColor: 'border-[var(--color-border-primary)]' },
		apple: { id: 'apple', name: 'Apple', icon: null, color: 'bg-[var(--color-background-primary)]', textColor: 'text-[var(--color-text-primary)]', borderColor: 'border-[var(--color-border-primary)]' },
		microsoft: { id: 'microsoft', name: 'Microsoft', icon: null, color: 'bg-[var(--color-background-primary)]', textColor: 'text-[var(--color-text-primary)]', borderColor: 'border-[var(--color-border-primary)]' },
		slack: { id: 'slack', name: 'Slack', icon: null, color: 'bg-[var(--color-background-primary)]', textColor: 'text-[var(--color-text-primary)]', borderColor: 'border-[var(--color-border-primary)]' }
	};

	return {
		get hostClass() { return props.class ?? ''; },
		get buttonClass() { return props.buttonClass ?? ''; },
		get formClass() { return props.formClass ?? ''; },
		get inputClass() { return props.inputClass ?? ''; },
		providerConfigs,
		get isLoading() { return isLoading; },
		get email() { return email; },
		set email(value: string) { email = value; },
		get password() { return password; },
		set password(value: string) { password = value; },
		get rememberMe() { return rememberMe; },
		set rememberMe(value: boolean) { rememberMe = value; },
		handleSocialLogin: (provider: Provider) => props.onLogin?.(provider),
		handleEmailLogin: () => props.onEmailLogin?.(email, password),
		handleForgotPassword: () => props.onForgotPassword?.(),
		handleSignUp: () => props.onSignUp?.()
	};
}

export default createSocialLoginState;
