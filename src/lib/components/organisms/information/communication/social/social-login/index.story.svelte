<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import SocialLogin from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showEmailForm', type: 'boolean', defaultValue: true },
      { name: 'showPasswordForm', type: 'boolean', defaultValue: true },
      { name: 'showSignUp', type: 'boolean', defaultValue: true },
      { name: 'showForgotPassword', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  type Provider = 'google' | 'facebook' | 'github' | 'twitter' | 'linkedin' | 'apple' | 'microsoft' | 'slack';

  const providers: Provider[] = ['google', 'github', 'apple'];

  function handleProviderClick(provider: Provider) {
    console.log('Provider clicked:', provider);
  }

  function handleEmailLogin() {
    console.log('Email login');
  }

  function handleSignUp() {
    console.log('Sign up');
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={SocialLogin}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-social-login grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Social Login Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive social login with customizable options.</p>

        <div class="mt-6 max-w-md mx-auto">
          <SocialLogin
            providers={providers}
            showEmailForm={values.showEmailForm}
            showPasswordForm={values.showPasswordForm}
            showSignUp={values.showSignUp}
            showForgotPassword={values.showForgotPassword}
            onEmailLogin={handleEmailLogin}
            onSignUp={handleSignUp}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Social Login Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different social login configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Social Only</p>
            <div class="max-w-md mx-auto">
              <SocialLogin
                providers={providers}
                showEmailForm={false}
                showPasswordForm={false}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Email Only</p>
            <div class="max-w-md mx-auto">
              <SocialLogin
                providers={[]}
                showEmailForm={true}
                showPasswordForm={true}
                onEmailLogin={handleEmailLogin}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

