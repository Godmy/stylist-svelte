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
			options: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'danger'],
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
		<section class="_c1">
			<div class="_c2">
				<div class="_c3">
					<div>
						<p class="_c4 tracking-[0.24em]">Document Preview</p>
						<h3 class="_c5">Readable block copy</h3>
					</div>
					<span class="_c6">
						line clamp: {values.lineClamp || 'off'}
					</span>
				</div>

				<div class="_c7">
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

				<div class="_c8">
					Paragraph keeps document semantics while sharing the same token model as `Text` and
					`Heading`.
				</div>
			</div>

			<div class="_c9">
				<div class="_c10">
					<h3 class="_c11">Reading Scale</h3>
					<div class="_c12">
						{#each sizeExamples as size}
							<div class="_c13">
								<p class="_c14 tracking-[0.2em]">
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

				<div class="_c15">
					<h3 class="_c11">Editorial Compare</h3>
					<div class="_c16">
						<Paragraph tone="secondary">
							Secondary tone works well for supporting explanations and system guidance.
						</Paragraph>
						<Paragraph tone="info" fontWeight="medium">
							Info tone can spotlight one key paragraph without turning it into a heading.
						</Paragraph>
					</div>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1280px) {
		._c1 {
			grid-template-columns: minmax(0, 1.1fr) minmax(20rem, 0.9fr);
		}
	}
	._c10 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c11 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c12 {
		margin-top: 1rem;
		display: grid;
		gap: 1rem;
	}
	._c13 {
		border-radius: 0.75rem;
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c14 {
		margin-bottom: 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
	}
	._c15 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c16 {
		margin-top: 1rem;
		display: grid;
		gap: 0.75rem;
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.75rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.75rem;
	}
	._c4 {
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
	}
	._c5 {
		margin-top: 0.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c6 {
		border-radius: 9999px;
		background-color: var(--color-background-secondary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		color: var(--color-text-secondary);
	}
	._c7 {
		margin-top: 1.5rem;
		border-radius: 1.5rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.25rem;
	}
	._c8 {
		margin-top: 1.5rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c9 {
		display: grid;
		gap: 1.5rem;
	}
</style>
