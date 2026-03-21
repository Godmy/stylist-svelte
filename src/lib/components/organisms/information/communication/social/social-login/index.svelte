<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const UserRoundPlus = 'user-round-plus';
const Github = 'github';
const Chrome = 'chrome';
const Apple = 'apple';
const Mail = 'mail';
const Lock = 'lock';
const Facebook = 'facebook';
const Twitter = 'twitter';
const Linkedin = 'linkedin';
const Slack = 'slack';
const Laptop2 = 'laptop-2';
const Loader2 = 'loader-2';

  import { Button } from '$lib/components/atoms';

  type Provider = 'google' | 'facebook' | 'github' | 'twitter' | 'linkedin' | 'apple' | 'microsoft' | 'slack';

  type ProviderConfig = {
    id: Provider;
    name: string;
    icon: any;
    color: string;
    textColor: string;
    borderColor: string;
  };

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
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

  let {
    providers = ['google', 'github', 'apple'],
    showEmailForm = true,
    showPasswordForm = true,
    showSignUp = true,
    showForgotPassword = true,
    title = 'Sign in to your account',
    description = 'Choose your preferred sign in method',
    class: hostClass = '',
    buttonClass = '',
    formClass = '',
    inputClass = '',
    onLogin,
    onEmailLogin,
    onSignUp,
    onForgotPassword,
    onError,
    locale = 'en-US',
    socialLoginText = 'Or continue with',
    emailLoginText = 'Or sign in with email',
    ...restProps
  }: Props = $props();

  let email = $state('');
  let password = $state('');
  let rememberMe = $state(false);
  let isLoading = $state(false);

  let providerConfigs: Record<Provider, ProviderConfig> = {
    google: {
      id: 'google',
      name: 'Google',
      icon: Chrome,
      color: 'bg-[var(--color-background-primary)]',
      textColor: 'text-[var(--color-text-primary)]',
      borderColor: 'border-[var(--color-border-primary)]'
    },
    facebook: {
      id: 'facebook',
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-[var(--color-primary-600)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-primary-600)]'
    },
    github: {
      id: 'github',
      name: 'GitHub',
      icon: Github,
      color: 'bg-[var(--color-neutral-900)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-border-primary)]'
    },
    twitter: {
      id: 'twitter',
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-[var(--color-primary-400)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-primary-400)]'
    },
    apple: {
      id: 'apple',
      name: 'Apple',
      icon: Apple,
      color: 'bg-[var(--color-neutral-900)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-border-primary)]'
    },
    linkedin: {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-[var(--color-primary-700)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-primary-700)]'
    },
    microsoft: {
      id: 'microsoft',
      name: 'Microsoft',
      icon: Laptop2,
      color: 'bg-[var(--color-success-600)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-success-600)]'
    },
    slack: {
      id: 'slack',
      name: 'Slack',
      icon: Slack,
      color: 'bg-[var(--color-secondary-600)]',
      textColor: 'text-[var(--color-text-inverse)]',
      borderColor: 'border-[var(--color-secondary-600)]'
    }
  };

  async function handleSocialLogin(provider: Provider) {
    isLoading = true;
    try {
      onLogin?.(provider);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'An error occurred during login';
      onError?.(errorMsg);
    } finally {
      isLoading = false;
    }
  }

  async function handleEmailLogin() {
    if (!email || !password) {
      onError?.('Please enter both email and password');
      return;
    }

    isLoading = true;
    try {
      onEmailLogin?.(email, password);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'An error occurred during login';
      onError?.(errorMsg);
    } finally {
      isLoading = false;
    }
  }

  function handleForgotPassword() {
    onForgotPassword?.();
  }

  function handleSignUp() {
    onSignUp?.();
  }
</script>

<div class={`social-login ${hostClass}`} {...restProps}>
  <div class="max-w-md mx-auto bg-[var(--color-background-primary)] p-8 rounded-lg shadow-md">
    <div class="text-center">
      <div class="mx-auto h-12 w-12 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center">
        <BaseIcon name={UserRoundPlus} class="h-6 w-6 text-[var(--color-primary-600)]" />
      </div>
      <h2 class="mt-4 text-2xl font-bold text-[var(--color-text-primary)]">{title}</h2>
      {#if description}
        <p class="mt-2 text-[var(--color-text-secondary)]">{description}</p>
      {/if}
    </div>

    {#if providers.length > 0}
      <div class="mt-8">
        <p class="text-center text-sm font-medium text-[var(--color-text-primary)] mb-4">{socialLoginText}</p>
        
        <div class="grid grid-cols-1 gap-3">
          {#each providers as provider}
            {@const config = providerConfigs[provider]}
            <button
              type="button"
              class={`w-full inline-flex justify-center py-2 px-4 border ${config.borderColor} ${config.color} rounded-md shadow-sm text-sm font-medium hover:opacity-[var(--opacity-90)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${buttonClass}`}
              onclick={() => handleSocialLogin(provider)}
              disabled={isLoading}
              aria-label={`Sign in with ${config.name}`}
            >
              {#if config.icon}
                <config.icon class={`h-5 w-5 mr-2 ${config.textColor === 'text-[var(--color-text-inverse)]' ? 'text-[var(--color-text-inverse)]' : 'text-[var(--color-text-primary)]'}`} />
              {/if}
              Continue with {config.name}
            </button>
          {/each}
        </div>
      </div>
    {/if}
    
    {#if showEmailForm || showPasswordForm}
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-[var(--color-border-primary)]"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-[var(--color-background-primary)] text-[var(--color-text-secondary)]">{emailLoginText}</span>
          </div>
        </div>

        <form
          class={`mt-6 space-y-6 ${formClass}`}
          onsubmit={(event) => {
            event.preventDefault();
            handleEmailLogin();
          }}
        >
          <div>
            <label for="email" class="block text-sm font-medium text-[var(--color-text-primary)]">Email address</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BaseIcon name={Mail} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class={`focus:ring-blue-500 focus:border-[var(--color-primary-500)] block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md ${inputClass}`}
                placeholder="name@company.com"
                value={email}
                oninput={(e) => email = (e.target as HTMLInputElement).value}
              />
            </div>
          </div>

          {#if showPasswordForm}
            <div>
              <label for="password" class="block text-sm font-medium text-[var(--color-text-primary)]">Password</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BaseIcon name={Lock} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class={`focus:ring-blue-500 focus:border-[var(--color-primary-500)] block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md ${inputClass}`}
                  placeholder="вЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂў"
                  value={password}
                  oninput={(e) => password = (e.target as HTMLInputElement).value}
                />
              </div>
            </div>
            
            {#if showForgotPassword}
              <div class="flex items-center justify-end">
                <button
                  type="button"
                  class="text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]"
                  onclick={handleForgotPassword}
                >
                  Forgot your password?
                </button>
              </div>
            {/if}
          {/if}

          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-[var(--color-primary-600)] focus:ring-blue-500 border-[var(--color-border-primary)] rounded"
              bind:checked={rememberMe}
            />
            <label for="remember-me" class="ml-2 block text-sm text-[var(--color-text-primary)]">
              Remember me
            </label>
          </div>

          <div>
            <button
              type="submit"
              class={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isLoading ? 'opacity-[var(--opacity-75)] cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              {#if isLoading}
                <BaseIcon name={Loader2} class="h-4 w-4 mr-2 animate-spin" />
                Signing in...
              {:else}
                Sign in
              {/if}
            </button>
          </div>
        </form>
      </div>
    {/if}
    
    {#if showSignUp}
      <div class="mt-6 text-center">
        <p class="text-sm text-[var(--color-text-secondary)]">
          Don't have an account?{' '}
          <button
            type="button"
            class="font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]"
            onclick={handleSignUp}
          >
            Sign up
          </button>
        </p>
      </div>
    {/if}
  </div>
</div>





