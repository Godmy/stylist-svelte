<script lang="ts">
  import { createLoginFormState } from '$stylist/form/function/state/login-form';

  const props = $props();
  const state = createLoginFormState(props);
</script>
<form class={state.rootClass} {...props}>
  <input class={state.inputClass} placeholder="Email" value={props.email} />
  <input class={state.inputClass} type="password" placeholder="Password" />
  <label class={state.checkboxLabelClass}><input type="checkbox" checked={props.rememberMe} /> Remember me</label>
  <button class={state.submitButtonClass} type="submit">Sign in</button>
</form>







