<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	let {
		title = 'Why Stylist?',
		subtitle = 'A readable operating surface for a component library that is organized by architecture, not by screenshots alone.',
		features = [
			{
				title: 'Atomic Design architecture',
				description:
					'Atoms, molecules, organisms and templates stay visible inside their domain context, so composition rules remain easy to inspect.',
				palette: 'fg-palette-orange',
				iconBg: 'fg-icon-orange',
				icon: 'git-branch'
			},
			{
				title: 'Readable navigation',
				description:
					'The workspace exposes domains, clusters, joints and families as navigation primitives instead of flattening the library into one long list.',
				palette: 'fg-palette-sky',
				iconBg: 'fg-icon-sky',
				icon: 'navigation'
			},
			{
				title: 'Story-first review',
				description:
					'Stories sit next to source files, markdown notes and JSON structure, so review starts from the component and keeps its implementation context nearby.',
				palette: 'fg-palette-violet',
				iconBg: 'fg-icon-violet',
				icon: 'sparkles'
			},
			{
				title: 'Domain diagnostics',
				description:
					'Diagnostics, backlog signals and generated manifests give the library a maintenance loop, not just a showcase page.',
				palette: 'fg-palette-emerald',
				iconBg: 'fg-icon-emerald',
				icon: 'diagnostics'
			}
		],
		class: className = ''
	} = $props();
</script>

<section class={`c-marketing-feature-grid ${className}`}>
	<div class="fg-header">
		<h2 class="fg-title">{title}</h2>
		<p class="fg-subtitle">{subtitle}</p>
	</div>

	<div class="fg-grid">
		{#each features as feature}
			<div class={`fg-card ${feature.palette}`}>
				<div class={`fg-icon-box ${feature.iconBg}`}>
					<BaseIcon name={feature.icon} style="width:1.75rem;height:1.75rem;color:#fff" />
				</div>
				<h3 class="fg-card-title">{feature.title}</h3>
				<p class="fg-card-desc">{feature.description}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.c-marketing-feature-grid {
		padding-top: 2.5rem;
		padding-bottom: 2.5rem;
	}

	.fg-header {
		margin-bottom: 2.5rem;
		text-align: center;
	}
	.fg-title {
		margin-bottom: 0.75rem;
		font-size: 2.25rem;
		font-weight: 900;
		color: var(--color-text-primary);
	}

	.fg-subtitle {
		margin-left: auto;
		margin-right: auto;
		max-width: 48rem;
		font-size: 1.125rem;
		color: var(--color-text-secondary);
	}

	.fg-grid {
		display: grid;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.fg-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.fg-card {
		border-radius: 24px;
		border: 2px solid;
		padding: 1.75rem;
	}

	.fg-palette-orange {
		background: linear-gradient(
			to bottom right,
			color-mix(in srgb, #fff7ed 55%, var(--color-background-primary) 45%),
			color-mix(in srgb, #fef2f2 55%, var(--color-background-primary) 45%)
		);
		border-color: color-mix(in srgb, #fed7aa 55%, var(--color-border-primary) 45%);
	}

	.fg-palette-sky {
		background: linear-gradient(
			to bottom right,
			color-mix(in srgb, #f0f9ff 55%, var(--color-background-primary) 45%),
			color-mix(in srgb, #ecfeff 55%, var(--color-background-primary) 45%)
		);
		border-color: color-mix(in srgb, #bae6fd 55%, var(--color-border-primary) 45%);
	}

	.fg-palette-violet {
		background: linear-gradient(
			to bottom right,
			color-mix(in srgb, #f5f3ff 55%, var(--color-background-primary) 45%),
			color-mix(in srgb, #fdf4ff 55%, var(--color-background-primary) 45%)
		);
		border-color: color-mix(in srgb, #ddd6fe 55%, var(--color-border-primary) 45%);
	}

	.fg-palette-emerald {
		background: linear-gradient(
			to bottom right,
			color-mix(in srgb, #ecfdf5 55%, var(--color-background-primary) 45%),
			color-mix(in srgb, #f0fdf4 55%, var(--color-background-primary) 45%)
		);
		border-color: color-mix(in srgb, #a7f3d0 55%, var(--color-border-primary) 45%);
	}

	.fg-icon-box {
		margin-bottom: 1.25rem;
		display: flex;
		width: 3.5rem;
		height: 3.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
	}

	.fg-icon-orange {
		background-color: #ea580c;
	}
	.fg-icon-sky {
		background-color: #0284c7;
	}
	.fg-icon-violet {
		background-color: #7c3aed;
	}
	.fg-icon-emerald {
		background-color: #059669;
	}

	.fg-card-title {
		margin-bottom: 0.75rem;
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.fg-card-desc {
		color: var(--color-text-secondary);
	}
</style>
