<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeDesignTokens from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'theme', type: 'select', options: ['light', 'dark'], defaultValue: 'light' },
			{ name: 'showColorPalette', type: 'boolean', defaultValue: true },
			{ name: 'showSpacing', type: 'boolean', defaultValue: true },
			{ name: 'showTypography', type: 'boolean', defaultValue: true },
			{ name: 'showShadows', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	type Section = { label: string; copy: string; prop: string };

	const sections: Section[] = [
		{
			label: 'Colors',
			copy: 'Brand palettes, neutrals, and contextual hues used for UI surfaces.',
			prop: 'showColorPalette'
		},
		{
			label: 'Spacing',
			copy: 'Scale that keeps paddings and gaps in sync across breakpoints.',
			prop: 'showSpacing'
		},
		{
			label: 'Typography',
			copy: 'Font sizes for headings, paragraphs, and utility text.',
			prop: 'showTypography'
		},
		{
			label: 'Border radius',
			copy: 'Curvature system used for chips, cards, and dialogs.',
			prop: 'showBorderRadius'
		},
		{
			label: 'Shadows',
			copy: 'Elevation levels for states, flyouts, and modals.',
			prop: 'showShadows'
		}
	];

	function handleSectionClick(section: string) {
		console.log('Section clicked:', section);
	}
</script>

<Story {id} {title} {description} component={RecipeDesignTokens} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-design-tokens _c1">
			<div class="_c2">
				<p class="_c3">Primary Design Tokens Example</p>
				<p class="_c4">Interactive design tokens with customizable options.</p>

				<div class="_c5">
					<RecipeDesignTokens
						theme={values.theme}
						showColorPalette={values.showColorPalette}
						showSpacing={values.showSpacing}
						showTypography={values.showTypography}
						showShadows={values.showShadows}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Design Tokens Variations</h3>
				<p class="_c8">Different design tokens configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Dark Theme</p>
						<div>
							<RecipeDesignTokens theme="dark" showColorPalette={true} />
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Colors Only</p>
						<div>
							<RecipeDesignTokens
								theme="light"
								showColorPalette={true}
								showSpacing={false}
								showTypography={false}
								showShadows={false}
							/>
						</div>
					</article>
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
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr;
		}
	}
	._c10 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c11 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
	}
	._c6 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c9 {
		margin-top: 1.25rem;
	}
	._c9 > * + * {
		margin-top: 1rem;
	}
</style>
