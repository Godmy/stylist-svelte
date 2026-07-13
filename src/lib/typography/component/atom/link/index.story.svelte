<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import type { TokenFontSize } from '$stylist/theme/type/alias/font-size';
	import { TOKEN_FONT_SIZE } from '$stylist/theme/const/object/font-size';
	import { TOKEN_COLOR_TONE } from '$stylist/theme/const/array/color-tone';
	import Link from './index.svelte';

	const toneOptions = [...TOKEN_COLOR_TONE];
	const fontSizeOptions = Object.keys(TOKEN_FONT_SIZE) as TokenFontSize[];

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'href',
			label: 'Href',
			description: 'Destination URL for the anchor.',
			type: 'text',
			defaultValue: 'https://example.com/design-system'
		},
		{
			name: 'tone',
			label: 'Tone',
			description: 'Typography tone token currently supported by the link.',
			type: 'select',
			defaultValue: 'primary',
			options: toneOptions
		},
		{
			name: 'fontSize',
			label: 'Font Size',
			description: 'Typography font-size token currently supported by the link.',
			type: 'select',
			defaultValue: '4',
			options: fontSizeOptions
		},
		{
			name: 'disabled',
			label: 'Disabled',
			description: 'Removes href interaction and mutes the anchor.',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'underline',
			label: 'Underline',
			description: 'Toggle underline rendering.',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'target',
			label: 'Target',
			description: 'Anchor browsing context.',
			type: 'select',
			defaultValue: '_self',
			options: ['_self', '_blank', '_parent', '_top']
		},
		{
			name: 'text',
			label: 'Link Text',
			description: 'Visible anchor label.',
			type: 'text',
			defaultValue: 'Open the design system reference'
		}
	];
</script>

<Story
	id="atoms-link"
	title="Link"
	category="Atoms/Typography"
	component={Link}
	description="Typography link renderer with tone, font size, underline, target, and disabled states."
	tags={['navigation', 'link', 'anchor']}
	{controls}
>
	{#snippet children(values: any)}
		<section class="_c1">
			<div class="_c2">
				<div class="_c3">
					<div>
						<p class="_c4 tracking-[0.24em]">Interactive Preview</p>
						<h3 class="_c5">Inline navigation link</h3>
					</div>
					<span class="_c6">
						{values.tone}
					</span>
				</div>

				<div class="_c7">
					<p class="_c8">The link below updates every visible prop of the component.</p>
					<Link
						href={values.href}
						tone={values.tone}
						fontSize={values.fontSize}
						disabled={values.disabled}
						underline={values.underline}
						target={values.target}
						text={values.text}
					/>
				</div>

				<div class="_c9">
					Use it inline inside copy:
					<Link
						href={values.href}
						tone={values.tone}
						fontSize={values.fontSize}
						underline={values.underline}
						text="embedded reference"
					/>
					to connect paragraphs, labels, and rich text fragments.
				</div>
			</div>

			<div class="_c10">
				<div class="_c11">
					<h3 class="_c12">Tone Rail</h3>
					<div class="_c13">
						{#each toneOptions as tone}
							<Link
								href="#"
								tone={tone}
								underline={tone !== 'default'}
								text={`tone: ${tone}`}
							/>
						{/each}
					</div>
				</div>

				<div class="_c14">
					<h3 class="_c12">Font Size Rail</h3>
					<div class="_c15">
						{#each fontSizeOptions as fontSize}
							<Link href="#" fontSize={fontSize} tone="primary" text={`font-size: ${fontSize}`} />
						{/each}
					</div>
				</div>

				<div class="_c11">
					<h3 class="_c12">Usage Note</h3>
					<p class="_c16">
						Use `Link` for navigational text and inline references. If the surface starts behaving
						like a full CTA, it likely belongs in another domain instead of typography.
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
			grid-template-columns: minmax(0, 1.08fr) minmax(22rem, 0.92fr);
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
		border-radius: 1.5rem;
		background-color: var(--color-background-primary);
		padding: 1.25rem;
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
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	._c16 {
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
		border-radius: 1.5rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
		font-size: 0.875rem;
		line-height: 1.75rem;
		color: var(--color-text-secondary);
	}
</style>
