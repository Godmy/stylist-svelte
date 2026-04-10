import type { Provider, ProviderConfig, Props } from '$stylist/social/type/struct/social-login';
import {
  SOCIAL_LOGIN_GITHUB,
  SOCIAL_LOGIN_CHROME,
  SOCIAL_LOGIN_APPLE,
  SOCIAL_LOGIN_MAIL,
  SOCIAL_LOGIN_LOCK,
  SOCIAL_LOGIN_FACEBOOK,
  SOCIAL_LOGIN_TWITTER,
  SOCIAL_LOGIN_LINKEDIN,
  SOCIAL_LOGIN_SLACK,
  SOCIAL_LOGIN_LAPTOP_2,
  SOCIAL_LOGIN_LOADER_2
} from '$stylist/social/const/map/social-login';

export type SocialLoginState = ReturnType<typeof createSocialLoginState>;

export function createSocialLoginState(props: Props) {
  let email = $state('');
  let password = $state('');
  let rememberMe = $state(false);
  let isLoading = $state(false);

  const providerConfigs: Record<Provider, ProviderConfig> = {
    google: {
      id: 'google',
      name: 'Google',
      icon: SOCIAL_LOGIN_CHROME,
      color: 'bg-[var(--color-background-primary)]',
      textColor: 'text-[var(--color-text-primary)]',
      borderColor: 'border-[var(--color-border-primary)]'
    },
    facebook: {
      id: 'facebook',
      name: 'Facebook',
      icon: SOCIAL_LOGIN_FACEBOOK,
      color: 'bg-[var(--color-primary-600)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-primary-600)]'
    },
    github: {
      id: 'github',
      name: 'GitHub',
      icon: SOCIAL_LOGIN_GITHUB,
      color: 'bg-[var(--color-neutral-900)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-border-primary)]'
    },
    twitter: {
      id: 'twitter',
      name: 'Twitter',
      icon: SOCIAL_LOGIN_TWITTER,
      color: 'bg-[var(--color-primary-400)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-primary-400)]'
    },
    apple: {
      id: 'apple',
      name: 'Apple',
      icon: SOCIAL_LOGIN_APPLE,
      color: 'bg-[var(--color-neutral-900)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-border-primary)]'
    },
    linkedin: {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: SOCIAL_LOGIN_LINKEDIN,
      color: 'bg-[var(--color-primary-700)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-primary-700)]'
    },
    microsoft: {
      id: 'microsoft',
      name: 'Microsoft',
      icon: SOCIAL_LOGIN_LAPTOP_2,
      color: 'bg-[var(--color-success-600)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-success-600)]'
    },
    slack: {
      id: 'slack',
      name: 'Slack',
      icon: SOCIAL_LOGIN_SLACK,
      color: 'bg-[var(--color-secondary-600)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-secondary-600)]'
    }
  };

  const handleSocialLogin = async (provider: Provider) => {
    isLoading = true;
    try {
      props.onLogin?.(provider);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'An error occurred during login';
      props.onError?.(errorMsg);
    } finally {
      isLoading = false;
    }
  };

  const handleEmailLogin = async () => {
    if (!email || !password) {
      props.onError?.('Please enter both email and password');
      return;
    }

    isLoading = true;
    try {
      props.onEmailLogin?.(email, password);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'An error occurred during login';
      props.onError?.(errorMsg);
    } finally {
      isLoading = false;
    }
  };

  const handleForgotPassword = () => {
    props.onForgotPassword?.();
  };

  const handleSignUp = () => {
    props.onSignUp?.();
  };

  const hostClass = $derived(props.class ?? '');
  const buttonClass = $derived(props.buttonClass ?? '');
  const formClass = $derived(props.formClass ?? '');
  const inputClass = $derived(props.inputClass ?? '');

  return {
    email,
    password,
    rememberMe,
    isLoading,
    providerConfigs,
    handleSocialLogin,
    handleEmailLogin,
    handleForgotPassword,
    handleSignUp,
    hostClass,
    buttonClass,
    formClass,
    inputClass,
  };
}

export default createSocialLoginState;
