<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Em from './index.svelte';
	import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

	const controls = [
		{ name: 'text', type: CONTROL_TYPES.TEXT, defaultValue: 'edge cases and prototypes' },
		{
			name: 'tone',
			type: CONTROL_TYPES.SELECT,
			options: ['default', 'accent', 'warning'],
			defaultValue: 'default'
		}
	];

	function toneClass(tone: 'default' | 'accent' | 'warning') {
		switch (tone) {
			case 'accent':
				return 'text-indigo-600';
			case 'warning':
				return 'text-amber-600';
			default:
				return 'text-gray-900 dark:text-gray-50';
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
				class="rounded-2xl border border-gray-200/80 bg-white/80 p-5 text-base text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900/40 dark:text-gray-200"
			>
				Ship confidently by carving time for <Em class={toneClass(values.tone)}>
					{values.text}
				</Em> before
				launch.
			</p>

			<p class="text-sm text-gray-500 dark:text-gray-400">
				Use {'<Em>'} when you need voice or tone emphasis without changing semantics.
			</p>
		</div>
	{/snippet}
</Story>
