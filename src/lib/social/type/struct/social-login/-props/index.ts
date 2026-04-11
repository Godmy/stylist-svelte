import type { Provider } from '../provider';
import type { RestProps } from '../rest-props';

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
