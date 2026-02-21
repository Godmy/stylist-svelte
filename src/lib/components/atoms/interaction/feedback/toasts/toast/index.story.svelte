<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Toast from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'type', type: 'select', defaultValue: 'info', options: ['info', 'success', 'warning', 'error'] },
		{ name: 'visible', type: 'boolean', defaultValue: true },
		{ name: 'duration', type: 'number', defaultValue: 0, min: 0, max: 10000, step: 500 },
		{ name: 'titleText', type: 'text', defaultValue: 'Build finished' },
		{ name: 'descriptionText', type: 'text', defaultValue: 'Your deployment completed successfully.' }
	];
</script>

<Story component={Toast} title="Toast" description="Transient notification with semantic variants and auto-dismiss." {controls}>
	{#snippet children(values: any)}
		<div class="max-w-xl">
			<Toast type={values.type} visible={values.visible} duration={values.duration}>
				{#snippet title()}
					{values.titleText}
				{/snippet}
				{#snippet description()}
					{values.descriptionText}
				{/snippet}
			</Toast>
		</div>
	{/snippet}
</Story>
