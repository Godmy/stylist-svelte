<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import AuthGuard from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'isAuthenticated', type: 'boolean', defaultValue: false },
    { name: 'requiredRole', type: 'text', defaultValue: 'admin' },
    { name: 'redirectUrl', type: 'text', defaultValue: '/login' }
  ];
</script>

<Story
  id="organisms-auth-guard"
  title="Auth Guard"
  component={AuthGuard}
  category="Organisms"
  description="Protects content based on authentication and role requirements."
  tags={['auth', 'permissions', 'security']}
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-auth-guard grid gap-6 rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
      <AuthGuard
        isAuthenticated={values.isAuthenticated}
        requiredRole={values.requiredRole}
        userRoles={values.isAuthenticated ? ['member', 'admin'] : []}
        redirectUrl={values.redirectUrl}
      >
        <article class="rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-5">
          <h3 class="text-[--text-size-lg] font-[--font-weight-semibold] text-[--color-text-primary]">Protected panel</h3>
          <p class="mt-2 text-[--text-size-sm] text-[--color-text-secondary]">
            This content is visible only when the user is authenticated and has the required role.
          </p>
        </article>
      </AuthGuard>
    </section>
  {/snippet}
</Story>




