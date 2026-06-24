<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createSearchFormState from '$stylist/form/function/state/search-form/index.svelte';
	import { SEARCH_ICON_NAME } from '$stylist/form/const/value/search-icon-name';

	const props = $props();
	const state = createSearchFormState(props);
</script>

<form class={state.rootClass} {...props}>
	<BaseIcon name={SEARCH_ICON_NAME} class={state.iconClass} />
	<input class={state.inputClass} placeholder={props.placeholder} value={props.query} />
	<button class={state.submitButtonClass} type="submit">Search</button>
</form>

<style>
</style>
