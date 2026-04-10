import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type Provider = 'google' | 'facebook' | 'github' | 'twitter' | 'linkedin' | 'apple' | 'microsoft' | 'slack';

export type ProviderConfig = {
  id: Provider;
  name: string;
  icon: any;
  color: string;
  textColor: string;
  borderColor: string;
};

export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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
