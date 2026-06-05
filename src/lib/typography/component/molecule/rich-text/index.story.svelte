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
			options: ['primary', 'secondary', 'tertiary', 'accent', 'success', 'warning', 'danger']
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
		<section class="grid w-full gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)]">
			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-7 shadow-sm"
			>
				<p class="text-xs font-semibold tracking-[0.24em] text-[--color-text-tertiary] uppercase">
					Display-Only Range Formatting
				</p>
				<h3 class="mt-2 text-xl font-semibold text-[--color-text-primary]">
					Word-like display renderer
				</h3>
				<p class="mt-2 text-[--color-text-secondary]">
					One text node, multiple overlapping modifiers.
				</p>

				<div
					class="mt-6 rounded-[1.5rem] border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-5"
				>
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

				<div
					class="mt-6 grid gap-3 rounded-[1.5rem] bg-[--color-background-secondary] p-4 text-sm text-[--color-text-secondary] sm:grid-cols-2"
				>
					<p>preset: {values.preset}</p>
					<p>fontSize: {values.fontSize}</p>
					<p>fontWeight: {values.fontWeight}</p>
					<p>disabled: {values.disabled ? 'true' : 'false'}</p>
				</div>
			</div>

			<div class="grid gap-6">
				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Range Recipe Gallery</h3>
					<p class="text-sm text-[--color-text-secondary]">
						Links, emphasis, code, and highlight can live in one renderer without nesting separate
						typography atoms.
					</p>

					<div class="mt-5 grid gap-4 rounded-[1.5rem] bg-[--color-background-primary] p-5">
						<div class="rounded-xl bg-[--color-background-secondary] p-4">
							<RichText text={documentText} marks={documentMarks} tone="primary" block />
						</div>
						<div class="rounded-xl bg-[--color-background-secondary] p-4">
							<RichText text={numericText} marks={numericMarks} tone="accent" block />
						</div>
					</div>
				</div>

				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Usage Note</h3>
					<p class="mt-3 text-[--color-text-secondary]">
						`RichText` is for display-only annotated text. Keep editing, selection logic, and
						document mutation out of this domain and in a separate input/editor surface.
					</p>
				</div>
			</div>
		</section>
	{/snippet}
</Story>
