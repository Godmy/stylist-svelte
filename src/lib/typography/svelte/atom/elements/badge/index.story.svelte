<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import Badge from './index.svelte';

	const variantOptions = ['default', 'success', 'warning', 'danger', 'info'] as const;
	const sizeOptions = ['sm', 'md', 'lg'] as const;

	type BadgeStoryProps = {
		label: string;
		variant: (typeof variantOptions)[number];
		size: (typeof sizeOptions)[number];
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'label',
			type: 'text',
			defaultValue: 'New'
		},
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'default',
			options: [...variantOptions]
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: [...sizeOptions]
		}
	];
</script>

<Story
	id="atoms-badge"
	title="Badge"
	component={Badge}
	category="Atoms"
	description="Pill-shaped badge for quick status indicators."
	tags={['status', 'label']}
	{controls}
>
	{#snippet children(values: any)}
		{#snippet badgeLabel()}
			{(values as BadgeStoryProps).label || 'New'}
		{/snippet}

		<div class="flex flex-col gap-4">
			<Badge variant={(values as BadgeStoryProps).variant} size={(values as BadgeStoryProps).size}>
				{@render badgeLabel()}
			</Badge>

			<div class="grid gap-2 text-sm text-[var(--color-text-secondary)]">
				<p>Variants demonstrate different semantic contexts.</p>
				<p>Use size to match surrounding typography.</p>
			</div>
		</div>
	{/snippet}
</Story>





