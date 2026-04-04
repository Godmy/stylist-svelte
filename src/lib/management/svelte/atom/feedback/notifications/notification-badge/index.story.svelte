<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import NotificationBadge from './index.svelte';

	type Props = {
		count: number;
		maxCount: number;
		marker: 'dot' | 'number' | 'letter' | 'check' | 'x';
		appearance: 'danger' | 'primary' | 'secondary' | 'success' | 'warning' | 'info';
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'count',
			type: 'number',
			defaultValue: 3,
			min: 0,
			max: 100
		},
		{
			name: 'maxCount',
			type: 'number',
			defaultValue: 99,
			min: 1,
			max: 999
		},
		{
			name: 'marker',
			type: 'select',
			defaultValue: 'number',
			options: ['dot', 'number', 'letter', 'check', 'x']
		},
		{
			name: 'appearance',
			type: 'select',
			defaultValue: 'danger',
			options: ['danger', 'primary', 'secondary', 'success', 'warning', 'info']
		}
	];
</script>

<Story
	id="molecules-notification-badge"
	title="NotificationBadge"
	component={NotificationBadge}
	category="Molecules"
	description="A badge component to display notification counts."
	tags={['badge', 'count', 'notification']}
	{controls}
>
	{#snippet children(values: any)}
		{@const storyProps = values as Partial<Props>}
		{@const count = typeof storyProps.count === 'number' ? storyProps.count : 3}
		{@const maxCount = typeof storyProps.maxCount === 'number' ? storyProps.maxCount : 99}
		{@const marker = storyProps.marker ?? 'number'}
		{@const appearance = storyProps.appearance ?? 'danger'}
		<div class="p-6">
			<h2 class="mb-6 text-xl font-semibold">Notification Badge</h2>
			<div class="flex items-center justify-center space-x-8">
				<div class="relative">
					<div class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-background-tertiary)]">
						Icon
					</div>
					<NotificationBadge
						{count}
						{maxCount}
						{marker}
						{appearance}
					/>
				</div>

				<div class="relative">
					<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-background-tertiary)]">
						Button
					</div>
					<NotificationBadge {count} {maxCount} marker="dot" appearance="danger" />
				</div>
			</div>
		</div>
	{/snippet}
</Story>








