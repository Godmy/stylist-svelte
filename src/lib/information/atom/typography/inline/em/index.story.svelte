<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import Em from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'text', type: 'text', defaultValue: 'edge cases and prototypes' },
		{
			name: 'tone',
			type: 'select',
			options: ['default', 'accent', 'warning'],
			defaultValue: 'default'
		}
	];

	function toneClass(tone: 'default' | 'accent' | 'warning') {
		switch (tone) {
			case 'accent':
				return 'text-[var(--color-primary-600)]';
			case 'warning':
				return 'text-amber-600';
			default:
				return 'text-[var(--color-text-primary)] dark:text-[var(--color-neutral-50)]';
		}
	}
</script>

<Story
	{controls}
	component={Em}
	title="Em"
	category="Atoms/Information/Typography/Inline"
	description="Inline emphasis element rendered with italic treatment."
	tags={['emphasis', 'typography', 'inline']}
>
	{#snippet children(values: any)}
		<div class="space-y-6">
			<p
				class="rounded-2xl border border-[var(--color-border-primary)]/80 bg-[var(--color-background-primary)]/80 p-5 text-base text-[var(--color-text-primary)] shadow-sm dark:border-[var(--color-border-primary)] dark:bg-[var(--color-neutral-900)]/40 dark:text-[var(--color-neutral-200)]"
			>
				Ship confidently by carving time for <Em class={toneClass(values.tone)}>
					{values.text}
				</Em> before
				launch.
			</p>

			<p class="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-text-tertiary)]">
				Use {'<Em>'} when you need voice or tone emphasis without changing semantics.
			</p>
		</div>
	{/snippet}
</Story>










