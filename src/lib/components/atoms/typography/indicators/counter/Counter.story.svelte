<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import Counter from '$lib/components/atoms/typography/indicators/counter/Counter.svelte';

	const variantOptions = ['primary', 'secondary', 'danger', 'success', 'warning', 'info'] as const;
	const sizeOptions = ['sm', 'md', 'lg'] as const;

	type Props = {
		count: number;
		max: number;
		variant: (typeof variantOptions)[number];
		size: (typeof sizeOptions)[number];
	};

	const controls: ControlConfig[] = [
		{ name: 'count', type: 'number', defaultValue: 5 },
		{ name: 'max', type: 'number', defaultValue: 99 },
		{ name: 'variant', type: 'select', defaultValue: 'primary', options: [...variantOptions] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: [...sizeOptions] }
	];
</script>

<Story
	id="atoms-feedback-counter"
	title="Counter"
	component={Counter}
	category="Atoms"
	description="A small badge to display numerical counts, often used for notifications."
	controls={controls}
>
	{#snippet children(props: Props)}
		<div class="flex items-center space-x-4">
			<Counter count={props.count} max={props.max} variant={props.variant} size={props.size} />
			<span class="text-gray-700">Notifications</span>
		</div>

		<h3 class="mt-8 mb-4 text-lg font-bold">Different Counts and Variants</h3>
		<div class="flex flex-wrap items-center gap-4">
			<Counter count={1} variant="primary" />
			<Counter count={15} variant="secondary" />
			<Counter count={100} max={99} variant="danger" />
			<Counter count={5} variant="success" size="sm" />
			<Counter count={25} variant="warning" size="lg" />
		</div>
	{/snippet}
</Story>
