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
			options: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'danger'],
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
		'info',
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
		<section class="_c1">
			<div class="_c2">
				<div class="_c3">
					<div>
						<p class="_c4 tracking-[0.24em]">Interactive Preview</p>
						<h3 class="_c5">Base text surface</h3>
					</div>
					<span class="_c6">
						{values.block ? 'block' : 'inline'}
					</span>
				</div>

				<div class="_c7">
					<p class="_c8">
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

				<div class="_c9">
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

			<div class="_c10">
				<div class="_c11">
					<h3 class="_c12">Tone Spectrum</h3>
					<div class="_c13">
						{#each toneExamples as tone}
							<div class="_c14">
								<Text {tone} fontWeight="medium">
									{tone}: typography color without wrapping it in a richer component.
								</Text>
							</div>
						{/each}
					</div>
				</div>

				<div class="_c15">
					<h3 class="_c12">Inline In Context</h3>
					<p class="_c16">
						Use <Text tone="info" fontWeight="semibold">Text</Text> inside richer layouts when you
						need token-driven emphasis without promoting the content to a paragraph or a heading.
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
			grid-template-columns: minmax(0, 1.15fr) minmax(20rem, 0.85fr);
		}
	}
	._c10 {
		display: grid;
		gap: 1.5rem;
	}
	._c11 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c12 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c13 {
		margin-top: 1rem;
		display: grid;
		gap: 0.75rem;
	}
	._c14 {
		border-radius: 0.75rem;
		background-color: var(--color-background-primary);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
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
		margin-top: 0.75rem;
		line-height: 1.75rem;
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
		padding: 1.25rem;
	}
	._c8 {
		margin-bottom: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c9 {
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
		._c9 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
