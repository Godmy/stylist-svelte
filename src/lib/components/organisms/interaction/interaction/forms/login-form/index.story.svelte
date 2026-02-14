<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import LoginForm from './index.svelte';
</script>
<Story id="organisms-login-form" title="Organisms / Interaction / Forms / Login Form" component={LoginForm} category="Organisms/Interaction/Forms">
  {#snippet children()}<div class="sb-organisms-login-form p-4 max-w-sm"><LoginForm /></div>{/snippet}
</Story>
