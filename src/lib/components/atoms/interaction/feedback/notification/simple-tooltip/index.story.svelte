<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import SimpleTooltip from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'position',
			type: 'select',
			defaultValue: 'top',
			options: ['top', 'right', 'bottom', 'left']
		},
		{ name: 'show', type: 'boolean', defaultValue: true },
		{ name: 'text', type: 'text', defaultValue: 'Elegant contextual hint with theming support' }
	];

	type Props = {
		position: 'top' | 'right' | 'bottom' | 'left';
		show: boolean;
		text: string;
	};

	const positionPresets: Array<Props & { label: string }> = [
		{ label: 'Top', position: 'top', show: true, text: 'Appears above the element' },
		{ label: 'Right', position: 'right', show: true, text: 'Follows the right edge' },
		{ label: 'Bottom', position: 'bottom', show: true, text: 'Sits comfortably below' },
		{ label: 'Left', position: 'left', show: true, text: 'Anchored to the left side' }
	];
</script>

<Story
	id="atoms-overlays-simple-tooltip"
	title="SimpleTooltip"
	component={SimpleTooltip}
	category="Atoms"
	description="Subtle, theme-aware tooltip used for brief contextual hints."
	{controls}
>
	{#snippet children(props: Record<string, unknown>)}
		{@const position =
			typeof props.position === 'string' ? (props.position as Props['position']) : 'top'}
		{@const show = typeof props.show === 'boolean' ? props.show : true}
		{@const text =
			typeof props.text === 'string' ? props.text : 'Elegant contextual hint with theming support'}
		<section class="grid w-full gap-8 lg:grid-cols-[1.2fr_1fr]">
			<div
				class="relative isolate flex h-72 flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] px-6 text-center shadow-sm"
			>
				<span class="text-sm font-medium text-[--color-text-secondary]">Hover target</span>
				<div class="relative mt-6 inline-flex items-center justify-center">
					<button
						class="relative rounded-full border border-transparent bg-[--color-primary-600] px-6 py-2 text-sm font-semibold text-[--color-text-inverse] shadow-[--color-primary-600]/25 shadow-lg transition hover:-translate-y-0.5 hover:bg-[--color-primary-500]"
					>
						Stylish Button
					</button>
					<SimpleTooltip {position} {show} {text} />
				</div>
				<p class="mt-8 max-w-xs text-xs text-[--color-text-secondary]">
					Use the controls to explore each anchor direction, toggle visibility, or customize the
					copy.
				</p>
			</div>

			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-5 shadow-sm"
			>
				<p class="mb-4 text-sm font-medium text-[--color-text-secondary]">
					Quick preview for every anchor direction:
				</p>
				<div class="grid gap-4">
					{#each positionPresets as preset}
						<div
							class="relative rounded-2xl border border-dashed border-[--color-border-primary] p-4"
						>
							<div class="flex items-center justify-between">
								<span class="text-sm font-semibold text-[--color-text-primary]">{preset.label}</span
								>
								<span class="text-xs tracking-wide text-[--color-text-secondary] uppercase">
									{preset.position}
								</span>
							</div>
							<div class="relative mt-4 flex h-16 items-center justify-center">
								<div class="relative inline-flex items-center gap-2">
									<span
										class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[--color-secondary-200] text-xs font-semibold text-[--color-text-primary]"
									>
										i
									</span>
									<SimpleTooltip
										position={preset.position}
										show={preset.show}
										text={preset.text}
									/>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/snippet}
</Story>



