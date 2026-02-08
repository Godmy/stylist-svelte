<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import NotificationBadge from './index.svelte';

	type Props = {
		count: number;
		maxCount: number;
		variant: 'dot' | 'number';
	};

	const controls: ControlConfig[] = [
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
			name: 'variant',
			type: 'select',
			defaultValue: 'number',
			options: ['dot', 'number']
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
	{#snippet children(props: Props)}
		<div class="p-6">
			<h2 class="mb-6 text-xl font-semibold">Notification Badge</h2>
			<div class="flex items-center justify-center space-x-8">
				<div class="relative">
					<div class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
						Icon
					</div>
					<NotificationBadge
						count={props.count}
						maxCount={props.maxCount}
						variant={props.variant}
					/>
				</div>

				<div class="relative">
					<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-300">
						Button
					</div>
					<NotificationBadge count={props.count} maxCount={props.maxCount} variant="dot" />
				</div>
			</div>
		</div>
	{/snippet}
</Story>
