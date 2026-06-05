<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Link from './index.svelte';

	const appearanceOptions = [
		'default',
		'primary',
		'secondary',
		'success',
		'warning',
		'danger',
		'error',
		'info',
		'solid',
		'outline',
		'ghost',
		'link',
		'subtle',
		'neutral',
		'gray',
		'dark',
		'light',
		'elevated',
		'flat'
	];

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'href',
			label: 'Href',
			description: 'Destination URL for the anchor.',
			type: 'text',
			defaultValue: 'https://example.com/design-system'
		},
		{
			name: 'variant',
			label: 'Variant',
			description: 'Appearance token currently supported by the typography link.',
			type: 'select',
			defaultValue: 'primary',
			options: appearanceOptions
		},
		{
			name: 'size',
			label: 'Size',
			description: 'Supports regular and fractional layout size tokens.',
			type: 'select',
			defaultValue: 'md',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '1/3', '1/2', '2/3', 'full']
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
	description="Typography link renderer with appearance, sizing, underline, target, and disabled states."
	tags={['navigation', 'link', 'anchor']}
	{controls}
>
	{#snippet children(values: any)}
		<section class="grid w-full gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)]">
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
							Inline navigation link
						</h3>
					</div>
					<span
						class="rounded-full bg-[--color-background-secondary] px-3 py-1 text-xs font-semibold text-[--color-text-secondary]"
					>
						{values.variant}
					</span>
				</div>

				<div
					class="mt-6 rounded-[1.5rem] border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-5"
				>
					<p class="mb-4 text-sm text-[--color-text-secondary]">
						The link below updates every visible prop of the component.
					</p>
					<Link
						href={values.href}
						variant={values.variant}
						size={values.size}
						disabled={values.disabled}
						underline={values.underline}
						target={values.target}
						text={values.text}
					/>
				</div>

				<div
					class="mt-6 rounded-[1.5rem] bg-[--color-background-secondary] p-4 text-sm leading-7 text-[--color-text-secondary]"
				>
					Use it inline inside copy:
					<Link
						href={values.href}
						variant={values.variant}
						underline={values.underline}
						text="embedded reference"
					/>
					to connect paragraphs, labels, and rich text fragments.
				</div>
			</div>

			<div class="grid gap-6">
				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Appearance Rail</h3>
					<div class="mt-4 grid gap-3 rounded-[1.5rem] bg-[--color-background-primary] p-5">
						{#each appearanceOptions as appearance}
							<Link
								href="#"
								variant={appearance as any}
								underline={appearance !== 'ghost' &&
									appearance !== 'outline' &&
									appearance !== 'elevated'}
								text={`variant: ${appearance}`}
							/>
						{/each}
					</div>
				</div>

				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Size Rail</h3>
					<div class="mt-4 flex flex-col gap-3">
						{#each ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as size}
							<Link href="#" size={size as any} variant="default" text={`size: ${size}`} />
						{/each}
					</div>
				</div>

				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Usage Note</h3>
					<p class="mt-3 text-[--color-text-secondary]">
						Use `Link` for navigational text and inline references. If the surface starts behaving
						like a full CTA, it likely belongs in another domain instead of typography.
					</p>
				</div>
			</div>
		</section>
	{/snippet}
</Story>
