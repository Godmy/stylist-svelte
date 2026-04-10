<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { createSearchFormState, SEARCH_ICON_NAME } from '$stylist/form/function/state/search-form';

  const props = $props();
  const state = createSearchFormState(props);
</script>
<form class={state.rootClass} {...props}>
  <BaseIcon name={SEARCH_ICON_NAME} class={state.iconClass} />
  <input class={state.inputClass} placeholder={props.placeholder} value={props.query} />
  <button class={state.submitButtonClass} type="submit">Search</button>
</form>








