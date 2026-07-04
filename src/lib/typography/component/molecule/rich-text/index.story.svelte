<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RichText from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'preset',
			label: 'Preset',
			description: 'Choose which rich text composition to preview.',
			type: 'select',
			defaultValue: 'document',
			options: ['numeric', 'document', 'workflow']
		},
		{
			name: 'tone',
			label: 'Tone',
			description: 'Base wrapper tone token.',
			type: 'select',
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'danger']
		},
		{
			name: 'fontSize',
			label: 'Font Size',
			description: 'Wrapper font size token.',
			type: 'select',
			defaultValue: '4',
			options: ['3', '4', '5', '6', '8', '10']
		},
		{
			name: 'fontWeight',
			label: 'Font Weight',
			description: 'Base weight for unmarked text.',
			type: 'select',
			defaultValue: 'normal',
			options: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold']
		},
		{
			name: 'lineHeight',
			label: 'Line Height',
			description: 'Useful for multi-line rich blocks.',
			type: 'select',
			defaultValue: 'normal',
			options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose']
		},
		{
			name: 'letterSpacing',
			label: 'Letter Spacing',
			description: 'Tracking for the wrapper.',
			type: 'select',
			defaultValue: 'normal',
			options: ['narrow', 'tight', 'normal', 'wide', 'wider', 'expanded']
		},
		{
			name: 'accentColor',
			label: 'Accent Color',
			description: 'Used by the preset marks.',
			type: 'color',
			defaultValue: '#2563eb'
		},
		{
			name: 'highlightColor',
			label: 'Highlight Color',
			description: 'Used by highlighted ranges.',
			type: 'color',
			defaultValue: '#fde68a'
		},
		{
			name: 'disabled',
			label: 'Disabled',
			description: 'Preview the disabled wrapper behavior.',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'block',
			label: 'Block Mode',
			description: 'Switch wrapper element between inline and block.',
			type: 'boolean',
			defaultValue: true
		}
	];

	const numericText = '0123456789';
	const documentText =
		'RichText can combine semantic ranges, highlights, links, and code inside a single display-only renderer.';
	const workflowText =
		'Review the brief, approve the content, publish the update, and monitor feedback across channels.';

	function createPresetMarks(values: any) {
		if (values.preset === 'numeric') {
			return [
				{ start: 0, end: 5, color: '#dc2626' },
				{ start: 2, end: 3, bold: true },
				{ start: 4, end: 5, underline: true },
				{ start: 5, end: 6, superscript: true },
				{ start: 6, end: 7, subscript: true }
			];
		}

		if (values.preset === 'workflow') {
			return [
				{ start: 0, end: 6, bold: true },
				{ start: 18, end: 25, color: values.accentColor },
				{ start: 27, end: 34, highlight: true, backgroundColor: values.highlightColor },
				{
					start: 36,
					end: 43,
					underline: true,
					href: 'https://example.com/publish',
					target: '_blank'
				},
				{ start: 49, end: 56, strikeThrough: true },
				{ start: 61, end: 69, italic: true }
			];
		}

		return [
			{ start: 0, end: 8, bold: true },
			{
				start: 17,
				end: 25,
				color: values.accentColor,
				underline: true,
				href: 'https://example.com',
				target: '_blank'
			},
			{ start: 27, end: 36, highlight: true, backgroundColor: values.highlightColor },
			{ start: 49, end: 53, code: true },
			{ start: 65, end: 77, italic: true, color: '#0f766e' }
		];
	}

	function createPresetText(values: any) {
		if (values.preset === 'numeric') {
			return numericText;
		}

		if (values.preset === 'workflow') {
			return workflowText;
		}

		return documentText;
	}

	const numericMarks = [
		{ start: 0, end: 5, color: '#dc2626' },
		{ start: 2, end: 3, bold: true },
		{ start: 4, end: 5, underline: true },
		{ start: 5, end: 6, superscript: true },
		{ start: 6, end: 7, subscript: true }
	];
	const documentMarks = [
		{ start: 0, end: 8, bold: true },
		{
			start: 17,
			end: 25,
			color: '#2563eb',
			underline: true,
			href: 'https://example.com',
			target: '_blank'
		},
		{ start: 27, end: 36, highlight: true },
		{ start: 49, end: 53, code: true },
		{ start: 65, end: 77, italic: true, color: '#0f766e' }
	];
</script>

<Story
	id="typography-rich-text"
	title="RichText"
	component={RichText}
	category="Molecules/Typography"
	description="Display-only rich text renderer with overlapping range modifiers and token-driven wrapper styling."
	tags={['rich-text', 'ranges', 'display-only']}
	{controls}
>
	{#snippet children(values: any)}
		{@const activeText = createPresetText(values)}
		{@const activeMarks = createPresetMarks(values)}
		<section class="_c1">
			<div class="_c2">
				<p class="_c3 tracking-[0.24em]">Display-Only Range Formatting</p>
				<h3 class="_c4">Word-like display renderer</h3>
				<p class="_c5">One text node, multiple overlapping modifiers.</p>

				<div class="_c6">
					<RichText
						text={activeText}
						marks={activeMarks}
						tone={values.tone}
						fontSize={values.fontSize}
						fontWeight={values.fontWeight}
						lineHeight={values.lineHeight}
						letterSpacing={values.letterSpacing}
						disabled={values.disabled}
						block={values.block}
					/>
				</div>

				<div class="_c7">
					<p>preset: {values.preset}</p>
					<p>fontSize: {values.fontSize}</p>
					<p>fontWeight: {values.fontWeight}</p>
					<p>disabled: {values.disabled ? 'true' : 'false'}</p>
				</div>
			</div>

			<div class="_c8">
				<div class="_c9">
					<h3 class="_c10">Range Recipe Gallery</h3>
					<p class="_c11">
						Links, emphasis, code, and highlight can live in one renderer without nesting separate
						typography atoms.
					</p>

					<div class="_c12">
						<div class="_c13">
							<RichText text={documentText} marks={documentMarks} tone="primary" block />
						</div>
						<div class="_c13">
							<RichText text={numericText} marks={numericMarks} tone="info" block />
						</div>
					</div>
				</div>

				<div class="_c14">
					<h3 class="_c10">Usage Note</h3>
					<p class="_c15">
						`RichText` is for display-only annotated text. Keep editing, selection logic, and
						document mutation out of this domain and in a separate input/editor surface.
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
			grid-template-columns: minmax(0, 1.08fr) minmax(20rem, 0.92fr);
		}
	}
	._c10 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c11 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c12 {
		margin-top: 1.25rem;
		display: grid;
		gap: 1rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-primary);
		padding: 1.25rem;
	}
	._c13 {
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c14 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c15 {
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
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 0.5rem;
		color: var(--color-text-secondary);
	}
	._c6 {
		margin-top: 1.5rem;
		border-radius: 1.5rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.25rem;
	}
	._c7 {
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
		._c7 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	._c8 {
		display: grid;
		gap: 1.5rem;
	}
	._c9 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
</style>
