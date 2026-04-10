<script lang="ts">
  import { createFormWithValidationState } from '$stylist/form/function/state/form-with-validation';

  const props = $props();
  const state = createFormWithValidationState(props);
</script>
<form class={state.rootClass} {...props}>
  <input class={state.inputClass} placeholder="Email" value={props.email} />
  <div class={state.emailValidClass}>{state.emailValidText}</div>
  <input class={state.inputClass} type="password" placeholder="Password" value={props.password} />
  <div class={state.passwordValidClass}>{state.passwordValidText}</div>
</form>







