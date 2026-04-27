<script lang="ts">
  import type { Provider, ProviderConfig, RestProps, Props } from '$stylist/social/type/struct/social-login';
  import { Icon as BaseIcon } from '$stylist';
  import { TOKEN_SOCIAL_ICON } from '$stylist/social/const/enum/icon';
  import { Button } from '$lib';
  import { createSocialLoginState } from '$stylist/social/function/state/social-login';

  let props: Props = $props();
  const state = createSocialLoginState(props);
</script>

<div class={`social-login ${state.hostClass}`} {...props}>
  <div class="max-w-md mx-auto bg-[var(--color-background-primary)] p-8 rounded-lg shadow-md">
    <div class="text-center">
      <div class="mx-auto h-12 w-12 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center">
        <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'user-round-plus') ?? 'user-round-plus'} class="h-6 w-6 text-[var(--color-primary-600)]" />
      </div>
      <h2 class="mt-4 text-2xl font-bold text-[var(--color-text-primary)]">{props.title ?? 'Sign in to your account'}</h2>
      {#if props.description}
        <p class="mt-2 text-[var(--color-text-secondary)]">{props.description}</p>
      {/if}
    </div>

    {#if (props.providers ?? []).length > 0}
      <div class="mt-8">
        <p class="text-center text-sm font-medium text-[var(--color-text-primary)] mb-4">{props.socialLoginText ?? 'Or continue with'}</p>

        <div class="grid grid-cols-1 gap-3">
          {#each props.providers ?? [] as provider}
            {@const config = state.providerConfigs[provider]}
            <button
              type="button"
              class={`w-full inline-flex justify-center py-2 px-4 border ${config.borderColor} ${config.color} rounded-md shadow-sm text-sm font-medium hover:opacity-[var(--opacity-90)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${state.buttonClass}`}
              onclick={() => state.handleSocialLogin(provider)}
              disabled={state.isLoading}
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

    {#if props.showEmailForm || props.showPasswordForm}
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-[var(--color-border-primary)]"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-[var(--color-background-primary)] text-[var(--color-text-secondary)]">{props.emailLoginText ?? 'Or sign in with email'}</span>
          </div>
        </div>

        <form
          class={`mt-6 space-y-6 ${state.formClass}`}
          onsubmit={(event) => {
            event.preventDefault();
            state.handleEmailLogin();
          }}
        >
          <div>
            <label for="email" class="block text-sm font-medium text-[var(--color-text-primary)]">Email address</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'mail') ?? 'mail'} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class={`focus:ring-blue-500 focus:border-[var(--color-primary-500)] block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md ${state.inputClass}`}
                placeholder="name@company.com"
                value={state.email}
                oninput={(e) => state.email = (e.target as HTMLInputElement).value}
              />
            </div>
          </div>

          {#if props.showPasswordForm}
            <div>
              <label for="password" class="block text-sm font-medium text-[var(--color-text-primary)]">Password</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'lock') ?? 'lock'} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class={`focus:ring-blue-500 focus:border-[var(--color-primary-500)] block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md ${state.inputClass}`}
                  placeholder="••••••••"
                  value={state.password}
                  oninput={(e) => state.password = (e.target as HTMLInputElement).value}
                />
              </div>
            </div>

            {#if props.showForgotPassword}
              <div class="flex items-center justify-end">
                <button
                  type="button"
                  class="text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]"
                  onclick={state.handleForgotPassword}
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
              bind:checked={state.rememberMe}
            />
            <label for="remember-me" class="ml-2 block text-sm text-[var(--color-text-primary)]">
              Remember me
            </label>
          </div>

          <div>
            <button
              type="submit"
              class={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                state.isLoading ? 'opacity-[var(--opacity-75)] cursor-not-allowed' : ''
              }`}
              disabled={state.isLoading}
            >
              {#if state.isLoading}
                <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'loader-2') ?? 'loader-2'} class="h-4 w-4 mr-2 animate-spin" />
                Signing in...
              {:else}
                Sign in
              {/if}
            </button>
          </div>
        </form>
      </div>
    {/if}

    {#if props.showSignUp}
      <div class="mt-6 text-center">
        <p class="text-sm text-[var(--color-text-secondary)]">
          Don't have an account?{' '}
          <button
            type="button"
            class="font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]"
            onclick={state.handleSignUp}
          >
            Sign up
          </button>
        </p>
      </div>
    {/if}
  </div>
</div>
