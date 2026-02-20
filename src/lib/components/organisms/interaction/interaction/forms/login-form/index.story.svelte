<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { LoginFormProps, LoginCredentials } from '$stylist/design-system/props';
  import { FormStyleManager } from '$stylist/design-system/styles';
  import LoginForm from './index.svelte';

  type Props = {
    showRememberMe: boolean;
    showForgotPassword: boolean;
    showSignUp: boolean;
    loading: boolean;
    errorMessage: string;
  };

  const controls: ControlConfig[] = [
    { name: 'showRememberMe', type: 'boolean', defaultValue: true },
    { name: 'showForgotPassword', type: 'boolean', defaultValue: true },
    { name: 'showSignUp', type: 'boolean', defaultValue: true },
    { name: 'loading', type: 'boolean', defaultValue: false },
    { name: 'errorMessage', type: 'text', defaultValue: '' }
  ];

  function handleSubmit(credentials: LoginCredentials) {
    console.log('Login submitted:', credentials);
    alert(`Login submitted for: ${credentials.email}`);
  }

  function handleForgotPassword() {
    console.log('Forgot password clicked');
    alert('Forgot password flow initiated');
  }

  function handleSignUp() {
    console.log('Sign up clicked');
    alert('Sign up flow initiated');
  }
</script>

<Story
  id="organisms-login-form"
  title="Organisms / Interaction / Forms / Login Form"
  component={LoginForm}
  category="Organisms/Interaction/Forms"
  description="A login form component for user authentication with email and password fields."
  tags={['form', 'login', 'authentication', 'signin']}
  controls={controls}
>
  {#snippet children(props)}
    <div class={FormStyleManager.container('sb-organisms-login-form p-4')}>
      <h1 class="text-lg font-semibold mb-4">LoginForm Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive LoginForm</h2>
        <div class="max-w-sm mx-auto">
          <LoginForm 
            showRememberMe={props.showRememberMe}
            showForgotPassword={props.showForgotPassword}
            showSignUp={props.showSignUp}
            loading={props.loading}
            errorMessage={props.errorMessage}
            onSubmit={handleSubmit}
            onForgotPassword={handleForgotPassword}
            onSignUp={handleSignUp}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

