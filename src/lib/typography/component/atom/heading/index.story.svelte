<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Heading from './index.svelte';

	const controls: SlotStory[] = [
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
		<section class="_c1">
			<div class="_c2">
				<div class="_c3">
					<div>
						<p class="_c4 tracking-[0.24em]">Hierarchy Preview</p>
						<h3 class="_c5">Interactive heading</h3>
					</div>
					<span class="_c6">
						h{values.level}
					</span>
				</div>

				<div class="_c7">
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

				<div class="_c8">
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

			<div class="_c9">
				<div class="_c10">
					<h3 class="_c11">Semantic Ladder</h3>
					<div class="_c12">
						{#each levelExamples as level}
							<Heading {level} fontSize={level <= 2 ? '8' : level <= 4 ? '5' : '4'}>
								Heading level {level}
							</Heading>
						{/each}
					</div>
				</div>

				<div class="_c13">
					<h3 class="_c11">Placement Guidance</h3>
					<p class="_c14">
						Use `Heading` when the text contributes to document structure. Keep `Text` for inline
						copy and `Paragraph` for reading blocks.
					</p>
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
			grid-template-columns: minmax(0, 1.15fr) minmax(22rem, 0.85fr);
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
		gap: 0.75rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-primary);
		padding: 1.25rem;
	}
	._c13 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c14 {
		margin-top: 0.75rem;
		color: var(--color-text-secondary);
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
		padding: 1.5rem;
	}
	._c8 {
		margin-top: 1.5rem;
		display: grid;
		gap: 0.75rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	@media (min-width: 640px) {
		._c8 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	._c9 {
		display: grid;
		gap: 1.5rem;
	}
</style>
