<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Paragraph from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'content',
			label: 'Content',
			description: 'Long-form copy rendered as a semantic paragraph.',
			type: 'text',
			defaultValue:
				'Great product paragraphs do more than fill space. They establish rhythm, carry meaning, and keep the reader oriented through dense interfaces.'
		},
		{
			name: 'tone',
			label: 'Tone',
			description: 'Semantic paragraph color token.',
			type: 'select',
			options: ['primary', 'secondary', 'tertiary', 'accent', 'success', 'warning', 'danger'],
			defaultValue: 'primary'
		},
		{
			name: 'fontSize',
			label: 'Font Size',
			description: 'Paragraph scale token.',
			type: 'select',
			options: ['3', '4', '5', '6', '8', '10', '12', '16', '20'],
			defaultValue: '4'
		},
		{
			name: 'fontWeight',
			label: 'Font Weight',
			description: 'Paragraph weight token.',
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
			description: 'Choose the paragraph family.',
			type: 'select',
			options: ['sans', 'serif', 'mono'],
			defaultValue: 'sans'
		},
		{
			name: 'lineHeight',
			label: 'Line Height',
			description: 'Important for long-form reading comfort.',
			type: 'select',
			options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
			defaultValue: 'relaxed'
		},
		{
			name: 'letterSpacing',
			label: 'Letter Spacing',
			description: 'Tracking for special paragraph styles.',
			type: 'select',
			options: ['narrow', 'tight', 'normal', 'wide', 'wider', 'expanded'],
			defaultValue: 'normal'
		},
		{
			name: 'textTransform',
			label: 'Transform',
			description: 'Usually none for paragraphs, but still supported.',
			type: 'select',
			options: ['none', 'uppercase', 'lowercase', 'capitalize'],
			defaultValue: 'none'
		},
		{
			name: 'textAlign',
			label: 'Align',
			description: 'Paragraph alignment.',
			type: 'select',
			options: ['left', 'center', 'right', 'justify'],
			defaultValue: 'left'
		},
		{
			name: 'lineClamp',
			label: 'Line Clamp',
			description: 'Trim to a fixed number of lines. `0` disables clamping.',
			type: 'range',
			min: 0,
			max: 6,
			step: 1,
			defaultValue: 0
		},
		{
			name: 'disabled',
			label: 'Disabled',
			description: 'Muted state for inactive or unavailable copy.',
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

	const sizeExamples = ['3', '4', '5', '6'] as const;
</script>

<Story
	id="typography-paragraph"
	title="Paragraph"
	component={Paragraph}
	category="Molecules/Typography"
	description="Semantic block copy for reading flows, cards, editorial layouts, and long-form UI descriptions."
	tags={['paragraph', 'body-copy', 'document']}
	{controls}
>
	{#snippet children(values: any)}
		<section class="grid w-full gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-7 shadow-sm"
			>
				<div class="flex flex-wrap items-start justify-between gap-3">
					<div>
						<p
							class="text-xs font-semibold tracking-[0.24em] text-[--color-text-tertiary] uppercase"
						>
							Document Preview
						</p>
						<h3 class="mt-2 text-xl font-semibold text-[--color-text-primary]">
							Readable block copy
						</h3>
					</div>
					<span
						class="rounded-full bg-[--color-background-secondary] px-3 py-1 text-xs font-semibold text-[--color-text-secondary]"
					>
						line clamp: {values.lineClamp || 'off'}
					</span>
				</div>

				<div
					class="mt-6 rounded-[1.5rem] border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-5"
				>
					<Paragraph
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
						disabled={values.disabled}
						ariaLabel={values.ariaLabel || undefined}
					/>
				</div>

				<div
					class="mt-6 rounded-[1.5rem] bg-[--color-background-secondary] p-4 text-sm text-[--color-text-secondary]"
				>
					Paragraph keeps document semantics while sharing the same token model as `Text` and
					`Heading`.
				</div>
			</div>

			<div class="grid gap-6">
				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Reading Scale</h3>
					<div class="mt-4 grid gap-4">
						{#each sizeExamples as size}
							<div class="rounded-xl bg-[--color-background-primary] p-4">
								<p
									class="mb-2 text-xs font-semibold tracking-[0.2em] text-[--color-text-tertiary] uppercase"
								>
									font size {size}
								</p>
								<Paragraph fontSize={size} lineHeight="relaxed">
									Body copy should remain breathable and stable across cards, docs, and dense
									panels.
								</Paragraph>
							</div>
						{/each}
					</div>
				</div>

				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Editorial Compare</h3>
					<div class="mt-4 grid gap-3">
						<Paragraph tone="secondary">
							Secondary tone works well for supporting explanations and system guidance.
						</Paragraph>
						<Paragraph tone="accent" fontWeight="medium">
							Accent tone can spotlight one key paragraph without turning it into a heading.
						</Paragraph>
					</div>
				</div>
			</div>
		</section>
	{/snippet}
</Story>
