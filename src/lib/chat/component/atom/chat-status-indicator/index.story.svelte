<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ChatStatusIndicator from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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
		<div class="rounded border border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] p-4">
			<ChatStatusIndicator
				status={values.status as 'online' | 'offline' | 'away' | 'typing'}
				size={values.size as 'sm' | 'md' | 'lg'}
				showLabel={values.showLabel as boolean}
			/>
		</div>
	{/snippet}
</Story>




