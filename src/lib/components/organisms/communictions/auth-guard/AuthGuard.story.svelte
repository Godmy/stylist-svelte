<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AuthGuard from './AuthGuard.svelte';

  type Props = {
    isAuthenticated: boolean;
    redirectUrl: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'isAuthenticated',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'redirectUrl',
      type: 'text',
      defaultValue: '/login'
    }
  ];
</script>

<Story
  id="molecules-auth-guard"
  title="AuthGuard"
  component={AuthGuard}
  category="Molecules"
  description="A component that guards routes based on authentication status."
  tags={['auth', 'route', 'guard']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Authentication Guard</h2>
      <div class="max-w-md mx-auto border rounded-lg p-6">
        <p class="mb-4">Authentication Status: {props.isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p>
        <AuthGuard isAuthenticated={props.isAuthenticated} redirectUrl={props.redirectUrl}>
          <div class="bg-green-100 p-4 rounded text-center">
            <p>You have access to this protected content!</p>
          </div>
        </AuthGuard>
      </div>
    </div>
  {/snippet}
</Story>