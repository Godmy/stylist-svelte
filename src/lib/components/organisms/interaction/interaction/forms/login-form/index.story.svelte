<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import { FormStyleManager } from '$stylist/design-system/styles';
  import LoginForm from './index.svelte';
</script>

<Story
  id="organisms-login-form"
  title="Organisms / Interaction / Forms / Login Form"
  component={LoginForm}
  category="Organisms/Interaction/Forms"
  description="A login form component for user authentication with email and password fields."
  tags={['form', 'login', 'authentication', 'signin']}
>
  {#snippet children(values: any)}
    <div class={FormStyleManager.container('sb-organisms-login-form p-4')}>
      <h1 class="text-lg font-semibold mb-4">LoginForm Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive LoginForm</h2>
        <div class="max-w-sm mx-auto">
          <LoginForm
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

