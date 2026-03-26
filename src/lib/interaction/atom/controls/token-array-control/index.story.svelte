<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import TokenArrayControl from './index.svelte';

	const tokens = ['React', 'Vue', 'Svelte', 'Angular', 'Solid'];

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Frameworks' },
		{ name: 'dedupe', type: 'boolean', defaultValue: true },
		{ name: 'selected', type: 'select', defaultValue: '', options: ['', 'React', 'Vue', 'Svelte', 'Angular', 'Solid'] }
	];
</script>

<Story
	{controls}
	component={TokenArrayControl}
	title="Token Array Control"
	category="Atoms/Interaction/Controls"
	description="Контрол для выбора одного значения из массива токенов"
	tags={['token', 'array', 'select', 'control']}
>
	{#snippet children(values: any)}
		<TokenArrayControl
			title={values.title as string}
			tokens={tokens}
			dedupe={values.dedupe as boolean}
			value={values.selected as string || undefined}
			onSelect={(token: string) => console.log('Selected:', token)}
		/>
	{/snippet}
</Story>

