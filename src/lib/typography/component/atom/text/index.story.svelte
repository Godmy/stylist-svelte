<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Text from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'content',
			label: 'Content',
			description: 'Inline copy rendered by the component.',
			type: 'text',
			defaultValue:
				'Design clarity grows when tokens, spacing, and emphasis all follow the same visual rhythm.'
		},
		{
			name: 'tone',
			label: 'Tone',
			description: 'Semantic text color token.',
			type: 'select',
			options: ['primary', 'secondary', 'tertiary', 'accent', 'success', 'warning', 'danger'],
			defaultValue: 'primary'
		},
		{
			name: 'fontSize',
			label: 'Font Size',
			description: 'Typography scale token.',
			type: 'select',
			options: ['3', '4', '5', '6', '8', '10', '12', '16', '20'],
			defaultValue: '4'
		},
		{
			name: 'fontWeight',
			label: 'Font Weight',
			description: 'Weight token applied to the text run.',
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
			defaultValue: 'normal'
		},
		{
			name: 'fontFamily',
			label: 'Font Family',
			description: 'Choose between the shipped typography families.',
			type: 'select',
			options: ['sans', 'serif', 'mono'],
			defaultValue: 'sans'
		},
		{
			name: 'lineHeight',
			label: 'Line Height',
			description: 'Useful when the text becomes block-like.',
			type: 'select',
			options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
			defaultValue: 'normal'
		},
		{
			name: 'letterSpacing',
			label: 'Letter Spacing',
			description: 'Tracking control for headlines or data labels.',
			type: 'select',
			options: ['narrow', 'tight', 'normal', 'wide', 'wider', 'expanded'],
			defaultValue: 'normal'
		},
		{
			name: 'textTransform',
			label: 'Transform',
			description: 'Uppercase, lowercase, capitalize, or none.',
			type: 'select',
			options: ['none', 'uppercase', 'lowercase', 'capitalize'],
			defaultValue: 'none'
		},
		{
			name: 'textAlign',
			label: 'Align',
			description: 'Visible when block mode is enabled.',
			type: 'select',
			options: ['left', 'center', 'right', 'justify'],
			defaultValue: 'left'
		},
		{
			name: 'lineClamp',
			label: 'Line Clamp',
			description: 'Clamp to a fixed number of lines. `0` keeps the full text.',
			type: 'range',
			min: 0,
			max: 4,
			step: 1,
			defaultValue: 0
		},
		{
			name: 'block',
			label: 'Block Mode',
			description: 'Switch from inline span behavior to block rendering.',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'disabled',
			label: 'Disabled',
			description: 'Preview the muted disabled presentation.',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'ariaLabel',
			label: 'Aria Label',
			description: 'Optional accessibility label for the wrapper.',
			type: 'text',
			defaultValue: ''
		}
	];

	const toneExamples = [
		'primary',
		'secondary',
		'tertiary',
		'accent',
		'success',
		'warning',
		'danger'
	] as const;
</script>

<Story
	id="typography-text"
	title="Text"
	component={Text}
	category="Atoms/Typography"
	description="The base inline typography primitive. Use it for semantic copy, labels, and token-driven text surfaces."
	tags={['inline', 'copy', 'tokens']}
	{controls}
>
	{#snippet children(values: any)}
		<section class="grid w-full gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-7 shadow-sm"
			>
				<div class="flex flex-wrap items-start justify-between gap-3">
					<div>
						<p
							class="text-xs font-semibold tracking-[0.24em] text-[--color-text-tertiary] uppercase"
						>
							Interactive Preview
						</p>
						<h3 class="mt-2 text-xl font-semibold text-[--color-text-primary]">
							Base text surface
						</h3>
					</div>
					<span
						class="rounded-full bg-[--color-background-secondary] px-3 py-1 text-xs font-semibold text-[--color-text-secondary]"
					>
						{values.block ? 'block' : 'inline'}
					</span>
				</div>

				<div
					class="mt-6 rounded-[1.5rem] border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-5"
				>
					<p class="mb-4 text-sm text-[--color-text-secondary]">
						The sample below reacts to every typography token exposed by the component.
					</p>
					<Text
						text={values.content}
						tone={values.tone}
						fontSize={values.fontSize}
						fontWeight={values.fontWeight}
						fontFamily={values.fontFamily}
						lineHeight={values.lineHeight}
						letterSpacing={values.letterSpacing}
						textTransform={values.textTransform}
						textAlign={values.textAlign}
						lineClamp={values.lineClamp > 0 ? values.lineClamp : undefined}
						block={values.block}
						disabled={values.disabled}
						ariaLabel={values.ariaLabel || undefined}
					/>
				</div>

				<div
					class="mt-6 grid gap-3 rounded-[1.5rem] bg-[--color-background-secondary] p-4 text-sm text-[--color-text-secondary] sm:grid-cols-2"
				>
					<p>fontSize: {values.fontSize}</p>
					<p>fontWeight: {values.fontWeight}</p>
					<p>fontFamily: {values.fontFamily}</p>
					<p>lineHeight: {values.lineHeight}</p>
					<p>letterSpacing: {values.letterSpacing}</p>
					<p>transform: {values.textTransform}</p>
					<p>align: {values.textAlign}</p>
					<p>lineClamp: {values.lineClamp || 'off'}</p>
				</div>
			</div>

			<div class="grid gap-6">
				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Tone Spectrum</h3>
					<div class="mt-4 grid gap-3">
						{#each toneExamples as tone}
							<div class="rounded-xl bg-[--color-background-primary] px-4 py-3">
								<Text {tone} fontWeight="medium">
									{tone}: typography color without wrapping it in a richer component.
								</Text>
							</div>
						{/each}
					</div>
				</div>

				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Inline In Context</h3>
					<p class="mt-3 leading-7 text-[--color-text-secondary]">
						Use <Text tone="accent" fontWeight="semibold">Text</Text> inside richer layouts when you
						need token-driven emphasis without promoting the content to a paragraph or a heading.
					</p>
				</div>
			</div>
		</section>
	{/snippet}
</Story>
