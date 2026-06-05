<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Heading from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'content',
			label: 'Content',
			description: 'Displayed heading copy.',
			type: 'text',
			defaultValue: 'Typography that reads like a system, not a collection of tags.'
		},
		{
			name: 'level',
			label: 'Level',
			description: 'Semantic heading rank from h1 to h6.',
			type: 'select',
			options: ['1', '2', '3', '4', '5', '6'],
			defaultValue: '2'
		},
		{
			name: 'tone',
			label: 'Tone',
			description: 'Semantic heading color.',
			type: 'select',
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'tertiary', 'accent', 'success', 'warning', 'danger']
		},
		{
			name: 'fontSize',
			label: 'Font Size',
			description: 'Override the default heading scale.',
			type: 'select',
			defaultValue: '6',
			options: ['3', '4', '5', '6', '8', '10', '12', '16', '20']
		},
		{
			name: 'fontWeight',
			label: 'Font Weight',
			description: 'Visual weight token for the heading.',
			type: 'select',
			options: [
				'thin',
				'extralight',
				'light',
				'normal',
				'medium',
				'semibold',
				'bold',
				'extrabold',
				'black'
			],
			defaultValue: 'bold'
		},
		{
			name: 'fontFamily',
			label: 'Font Family',
			description: 'Family token applied to the heading.',
			type: 'select',
			options: ['sans', 'serif', 'mono'],
			defaultValue: 'sans'
		},
		{
			name: 'lineHeight',
			label: 'Line Height',
			description: 'Useful for multi-line headlines.',
			type: 'select',
			options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
			defaultValue: 'tight'
		},
		{
			name: 'letterSpacing',
			label: 'Letter Spacing',
			description: 'Tracking control for display headings.',
			type: 'select',
			options: ['narrow', 'tight', 'normal', 'wide', 'wider', 'expanded'],
			defaultValue: 'normal'
		},
		{
			name: 'textTransform',
			label: 'Transform',
			description: 'Case transformation for the heading.',
			type: 'select',
			options: ['none', 'uppercase', 'lowercase', 'capitalize'],
			defaultValue: 'none'
		},
		{
			name: 'textAlign',
			label: 'Align',
			description: 'Horizontal alignment in the preview surface.',
			type: 'select',
			options: ['left', 'center', 'right', 'justify'],
			defaultValue: 'left'
		},
		{
			name: 'lineClamp',
			label: 'Line Clamp',
			description: 'Restrict the number of heading lines. `0` disables it.',
			type: 'range',
			min: 0,
			max: 4,
			step: 1,
			defaultValue: 0
		},
		{
			name: 'disabled',
			label: 'Disabled',
			description: 'Muted heading appearance.',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'ariaLabel',
			label: 'Aria Label',
			description: 'Optional accessibility label.',
			type: 'text',
			defaultValue: ''
		}
	];

	const levelExamples = [1, 2, 3, 4, 5, 6] as const;
</script>

<Story
	id="atoms-heading"
	title="Heading"
	component={Heading}
	category="Atoms/Typography"
	description="Semantic document headings with token-driven scale, alignment, spacing, and accessibility control."
	tags={['heading', 'document', 'hierarchy']}
	{controls}
>
	{#snippet children(values: any)}
		<section class="grid w-full gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]">
			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-7 shadow-sm"
			>
				<div class="flex flex-wrap items-start justify-between gap-3">
					<div>
						<p
							class="text-xs font-semibold tracking-[0.24em] text-[--color-text-tertiary] uppercase"
						>
							Hierarchy Preview
						</p>
						<h3 class="mt-2 text-xl font-semibold text-[--color-text-primary]">
							Interactive heading
						</h3>
					</div>
					<span
						class="rounded-full bg-[--color-background-secondary] px-3 py-1 text-xs font-semibold text-[--color-text-secondary]"
					>
						h{values.level}
					</span>
				</div>

				<div
					class="mt-6 rounded-[1.5rem] border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-6"
				>
					<Heading
						text={values.content}
						level={Number(values.level) as 1 | 2 | 3 | 4 | 5 | 6}
						tone={values.tone}
						fontSize={values.fontSize}
						fontWeight={values.fontWeight}
						fontFamily={values.fontFamily}
						lineHeight={values.lineHeight}
						letterSpacing={values.letterSpacing}
						textTransform={values.textTransform}
						textAlign={values.textAlign}
						lineClamp={values.lineClamp > 0 ? values.lineClamp : undefined}
						disabled={values.disabled}
						ariaLabel={values.ariaLabel || undefined}
					/>
				</div>

				<div
					class="mt-6 grid gap-3 rounded-[1.5rem] bg-[--color-background-secondary] p-4 text-sm text-[--color-text-secondary] sm:grid-cols-2"
				>
					<p>level: h{values.level}</p>
					<p>fontSize: {values.fontSize}</p>
					<p>fontWeight: {values.fontWeight}</p>
					<p>fontFamily: {values.fontFamily}</p>
					<p>lineHeight: {values.lineHeight}</p>
					<p>letterSpacing: {values.letterSpacing}</p>
					<p>transform: {values.textTransform}</p>
					<p>align: {values.textAlign}</p>
				</div>
			</div>

			<div class="grid gap-6">
				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Semantic Ladder</h3>
					<div class="mt-4 grid gap-3 rounded-[1.5rem] bg-[--color-background-primary] p-5">
						{#each levelExamples as level}
							<Heading {level} fontSize={level <= 2 ? '8' : level <= 4 ? '5' : '4'}>
								Heading level {level}
							</Heading>
						{/each}
					</div>
				</div>

				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Placement Guidance</h3>
					<p class="mt-3 text-[--color-text-secondary]">
						Use `Heading` when the text contributes to document structure. Keep `Text` for inline
						copy and `Paragraph` for reading blocks.
					</p>
				</div>
			</div>
		</section>
	{/snippet}
</Story>
