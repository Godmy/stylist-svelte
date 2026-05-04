<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import DomainListHeader from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Entities' },
		{ name: 'count', type: 'number', defaultValue: 12 }
	];
</script>

<Story
	{controls}
	component={DomainListHeader}
	title="DomainListHeader"
	description="List header with a compact title and entity count."
>
	{#snippet children(values: any)}
		<div class="rounded-2xl border border-slate-200 bg-white">
			<DomainListHeader label={values.label as string} count={Number(values.count)} />
		</div>
	{/snippet}
</Story>
