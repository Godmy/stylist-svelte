<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ChatStatusIndicator from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'status', type: 'select', defaultValue: 'online', options: ['online', 'offline', 'away', 'typing'] },
		{ name: 'size', type: 'select', defaultValue: 'sm', options: ['sm', 'md', 'lg'] },
		{ name: 'showLabel', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={ChatStatusIndicator}
	title="ChatStatusIndicator"
	category="Atoms/Interaction/Chat"
	description="User presence indicator for chat interfaces"
>
	{#snippet children(values: any)}
		<div class="rounded border border-slate-200 bg-slate-50 p-4">
			<ChatStatusIndicator
				status={values.status as 'online' | 'offline' | 'away' | 'typing'}
				size={values.size as 'sm' | 'md' | 'lg'}
				showLabel={values.showLabel as boolean}
			/>
		</div>
	{/snippet}
</Story>
