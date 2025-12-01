<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Eye, EyeOff } from 'lucide-svelte';
  import { LoginFormStyleManager } from './LoginForm.styles';

  type Props = {
    class?: string;
    title?: string;
    subtitle?: string;
    showTitle?: boolean;
    showRememberMe?: boolean;
    showForgotPassword?: boolean;
    forgotPasswordHref?: string;
    buttonLabel?: string;
    additionalActions?: boolean;
    additionalLinks?: Array<{ text: string; href: string }>;
  } & HTMLAttributes<HTMLFormElement>;

  let {
    class: className = '',
    title = 'Sign in to your account',
    subtitle = 'Or continue with',
    showTitle = true,
    showRememberMe = true,
    showForgotPassword = true,
    forgotPasswordHref = '/forgot-password',
    buttonLabel = 'Sign in',
    additionalActions = true,
    additionalLinks = [
      { text: 'Sign up', href: '/sign-up' },
      { text: 'Privacy Policy', href: '/privacy-policy' }
    ],
    ...restProps
  }: Props = $props();

  let email = $state('');
  let password = $state('');
  let rememberMe = $state(false);
  let showPassword = $state(false);
  let loading = $state(false);

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    loading = true;

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Dispatch custom event with form data
    const event = new CustomEvent('submit', {
      detail: { email, password, rememberMe },
      bubbles: true
    });

    // Reset loading state after a short delay
    setTimeout(() => {
      loading = false;
    }, 300);

    // Dispatch the event
    if (e.currentTarget) {
      e.currentTarget.dispatchEvent(event);
    }
  }

  // Generate CSS classes using the style manager
  const formClass = $derived(LoginFormStyleManager.getFormClass(className));
  const titleSectionClass = $derived(LoginFormStyleManager.getTitleSectionClass());
  const titleClass = $derived(LoginFormStyleManager.getTitleClass());
  const subtitleClass = $derived(LoginFormStyleManager.getSubtitleClass());
  const fieldClass = $derived(LoginFormStyleManager.getFieldClass());
  const labelClass = $derived(LoginFormStyleManager.getLabelClass());
  const passwordFieldContainerClass = $derived(LoginFormStyleManager.getPasswordFieldContainerClass());
  const passwordToggleClass = $derived(LoginFormStyleManager.getPasswordToggleClass());
  const eyeIconClass = $derived(LoginFormStyleManager.getEyeIconClass());
  const rememberMeContainerClass = $derived(LoginFormStyleManager.getRememberMeContainerClass());
  const rememberMeLabelClass = $derived(LoginFormStyleManager.getRememberMeLabelClass());
  const submitButtonClass = $derived(LoginFormStyleManager.getSubmitButtonClass());
  const loadingIconClass = $derived(LoginFormStyleManager.getLoadingIconClass());
  const separatorSectionClass = $derived(LoginFormStyleManager.getSeparatorSectionClass());
  const separatorClass = $derived(LoginFormStyleManager.getSeparatorClass());
  const separatorLineClass = $derived(LoginFormStyleManager.getSeparatorLineClass());
  const separatorBorderClass = $derived(LoginFormStyleManager.getSeparatorBorderClass());
  const separatorTextContainerClass = $derived(LoginFormStyleManager.getSeparatorTextContainerClass());
  const separatorTextClass = $derived(LoginFormStyleManager.getSeparatorTextClass());
  const socialLoginContainerClass = $derived(LoginFormStyleManager.getSocialLoginContainerClass());
  const socialLoginButtonClass = $derived(LoginFormStyleManager.getSocialLoginButtonClass());
  const socialIconClass = $derived(LoginFormStyleManager.getSocialIconClass());
  const socialTextMarginClass = $derived(LoginFormStyleManager.getSocialTextMarginClass());
  const forgotPasswordLinkClass = $derived(LoginFormStyleManager.getForgotPasswordLinkClass());
  const additionalLinksSectionClass = $derived(LoginFormStyleManager.getAdditionalLinksSectionClass());
  const additionalLinksContainerClass = $derived(LoginFormStyleManager.getAdditionalLinksContainerClass());
  const additionalLinkClass = $derived(LoginFormStyleManager.getAdditionalLinkClass());
  const linkSeparatorClass = $derived(LoginFormStyleManager.getLinkSeparatorClass());
</script>

<form class={formClass} onsubmit={handleSubmit} {...restProps}>
  {#if showTitle}
    <div class={titleSectionClass}>
      <h2 class={titleClass}>{title}</h2>
      <p class={subtitleClass}>{subtitle}</p>
    </div>
  {/if}

  <div class="mb-[--spacing-md]">
    <label for="email" class={labelClass}>Email address</label>
    <input
      id="email"
      type="email"
      class={fieldClass.replace('mb-[--spacing-md]', '')}
      placeholder="you@example.com"
      bind:value={email}
      required
    />
  </div>

  <div class="mb-[--spacing-md]">
    <div class="flex justify-between items-center mb-[--spacing-xs]">
      <label for="password" class={labelClass}>Password</label>
      {#if showForgotPassword}
        <a href={forgotPasswordHref} class={forgotPasswordLinkClass}>Forgot password?</a>
      {/if}
    </div>
    <div class={passwordFieldContainerClass}>
      <input
        id="password"
        type={showPassword ? 'text' : 'password'}
        class={fieldClass.replace('mb-[--spacing-md]', '')}
        placeholder="••••••••"
        bind:value={password}
        required
      />
      <button
        type="button"
        class={passwordToggleClass}
        onclick={() => showPassword = !showPassword}
      >
        {#if showPassword}
          <EyeOff class={eyeIconClass} />
        {:else}
          <Eye class={eyeIconClass} />
        {/if}
      </button>
    </div>
  </div>

  {#if showRememberMe}
    <div class={rememberMeContainerClass}>
      <input
        id="remember-me"
        type="checkbox"
        class="h-4 w-4 text-[--color-primary-600] border-[--color-border-primary] rounded focus:ring-[--color-primary-500]"
        bind:checked={rememberMe}
      />
      <label for="remember-me" class={rememberMeLabelClass}>Remember me</label>
    </div>
  {/if}

  <button
    type="submit"
    class={submitButtonClass}
    disabled={loading}
  >
    {#if loading}
      <svg class={loadingIconClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Signing in...
    {:else}
      {buttonLabel}
    {/if}
  </button>

  {#if additionalActions}
    <div class={separatorSectionClass}>
      <div class={separatorClass}>
        <div class={separatorLineClass}>
          <div class={separatorBorderClass}></div>
        </div>
        <div class={separatorTextContainerClass}>
          <span class={separatorTextClass}>Or continue with</span>
        </div>
      </div>

      <div class={socialLoginContainerClass}>
        <button
          type="button"
          class={socialLoginButtonClass}
        >
          <svg class={socialIconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.129 22 16.99 22 12z" clip-rule="evenodd"></path>
          </svg>
          <span class={socialTextMarginClass}>Facebook</span>
        </button>

        <button
          type="button"
          class={socialLoginButtonClass}
        >
          <svg class={socialIconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
          </svg>
          <span class={socialTextMarginClass}>Google</span>
        </button>
      </div>
    </div>
  {/if}

  {#if additionalLinks.length > 0}
    <div class={additionalLinksSectionClass}>
      <div class={additionalLinksContainerClass}>
        {#each additionalLinks as link, i}
          <a href={link.href} class={additionalLinkClass}>{link.text}</a>
          {#if i < additionalLinks.length - 1}
            <span class={linkSeparatorClass}>|</span>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
</form>
