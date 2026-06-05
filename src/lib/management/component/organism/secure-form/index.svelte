<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	const Lock = 'lock';

	import createSecureFormState from '$stylist/management/function/state/secure-form/index.svelte';
	import type { SlotSecureForm as SecureFormProps } from '$stylist/form/interface/slot/secure-form';

	let props: SecureFormProps = $props();
	const state = createSecureFormState(props);
</script>

<form class={state.containerClasses} {...state.restProps}>
	<div class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
		<BaseIcon name={Lock} class="h-4 w-4" /> Secure Form
	</div>
	<input class="w-full rounded border px-2 py-1" type="password" placeholder="Sensitive value" />
	<input type="hidden" value={state.token} />
	<button
		class="rounded bg-[var(--color-primary-600)] px-3 py-1 text-[var(--color-text-inverse)]"
		type="submit">Submit securely</button
	>
</form>
