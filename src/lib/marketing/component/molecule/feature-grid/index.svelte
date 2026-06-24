<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	let {
		title = 'Why Stylist?',
		subtitle = 'A marketing layer for the library itself, not just for demo pages.',
		features = [
			{
				title: 'Atomic structure',
				description:
					'Components stay grouped by domain, cluster, joint and family, even when the landing page gets richer.',
				palette: 'fg-palette-orange',
				iconBg: 'fg-icon-orange',
				icon: 'git-branch'
			},
			{
				title: 'Readable navigation',
				description:
					'The homepage can explain the system while the workspace keeps direct access to implementation details.',
				palette: 'fg-palette-sky',
				iconBg: 'fg-icon-sky',
				icon: 'navigation'
			},
			{
				title: 'Story-first review',
				description:
					'Visual review, markdown notes, JSON structure and debug issue capture stay connected in one flow.',
				palette: 'fg-palette-violet',
				iconBg: 'fg-icon-violet',
				icon: 'sparkles'
			},
			{
				title: 'Domain diagnostics',
				description:
					'The same surface can sell the library and still lead straight into diagnostics and backlog maintenance.',
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
		color: #111827;
	}

	.fg-subtitle {
		margin-left: auto;
		margin-right: auto;
		max-width: 48rem;
		font-size: 1.125rem;
		color: #4b5563;
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
		background: linear-gradient(to bottom right, #fff7ed, #fef2f2);
		border-color: #fed7aa;
	}

	.fg-palette-sky {
		background: linear-gradient(to bottom right, #f0f9ff, #ecfeff);
		border-color: #bae6fd;
	}

	.fg-palette-violet {
		background: linear-gradient(to bottom right, #f5f3ff, #fdf4ff);
		border-color: #ddd6fe;
	}

	.fg-palette-emerald {
		background: linear-gradient(to bottom right, #ecfdf5, #f0fdf4);
		border-color: #a7f3d0;
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
		color: #111827;
	}

	.fg-card-desc {
		color: #4b5563;
	}
</style>
