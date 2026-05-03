<script lang="ts">
	// @ts-nocheck
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import { Card } from '$stylist/layout/component/molecule/card';
	import { HorizontalLayout } from '$stylist/layout/component/atom/horizontal-layout';
	import { Spacer } from '$stylist/layout/component/atom/spacer';
	import { SplitLayout } from '$stylist/layout/component/molecule/split-layout';
	import { StackedLayout } from '$stylist/layout/component/molecule/stacked-layout';
	import { StickyLayout } from '$stylist/layout/component/molecule/sticky-layout';
	import SidebarLayout from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'side', type: 'select', defaultValue: 'left', options: ['left', 'right'] },
		{ name: 'sidebarWidth', type: 'select', defaultValue: 'sm', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'gap', type: 'select', defaultValue: 'sm', options: ['none', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'collapsed', type: 'boolean', defaultValue: false },
		{ name: 'responsive', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	component={SidebarLayout}
	title="SidebarLayout"
	description="Workspace-shell scenario with sticky framing, weighted content, and a compact navigation rail."
	{controls}
>
	{#snippet children(values: any)}
		<SidebarLayout
			side={values.side}
			sidebarWidth={values.sidebarWidth}
			gap={values.gap}
			collapsed={values.collapsed}
			responsive={values.responsive}
			sidebarLabel="Workspace navigation"
			class="story-shell"
		>
			{#snippet sidebar()}
				<StackedLayout direction="vertical" gap="sm" class="story-sidebar">
					{#snippet children()}
						<p class="story-label">Workspace</p>
						{#each ['Overview', 'Telemetry', 'Incidents', 'Releases', 'Settings'] as item}
							<div class="story-nav-item">{item}</div>
						{/each}
					{/snippet}
				</StackedLayout>
			{/snippet}

			{#snippet children()}
				<StickyLayout fillHeight headerShadow footerShadow class="story-main">
					{#snippet header()}
						<HorizontalLayout gap="sm" alignItems="center" class="story-header">
							{#snippet children()}
								<div>
									<p class="story-title">Sidebar playground shell</p>
									<p class="story-subtitle">A realistic composition instead of a placeholder panel.</p>
								</div>
								<Spacer />
								<div class="story-tag">Live layout</div>
							{/snippet}
						</HorizontalLayout>
					{/snippet}

					{#snippet children()}
						<div class="story-content">
							<div class="story-metrics">
								{#each ['142 req/s', '07 pending', '84 ms'] as metric}
									<Card shape="rounded" elevation={2}>
										{#snippet children()}
											<p class="story-metric-label">Metric</p>
											<strong class="story-metric-value">{metric}</strong>
										{/snippet}
									</Card>
								{/each}
							</div>

							<SplitLayout primarySize="2/3" secondarySize="1/3" gap="sm" responsive={false}>
								{#snippet primary()}
									<Card shape="rounded" elevation={2}>
										{#snippet header()}
											<div class="story-card-header">
												<p class="story-title">Primary workspace</p>
												<p class="story-subtitle">Main analytical area inside the shell.</p>
											</div>
										{/snippet}
										{#snippet children()}
											<div class="story-chart">
												<div class="story-bar" style="height: 44%"></div>
												<div class="story-bar" style="height: 70%"></div>
												<div class="story-bar" style="height: 58%"></div>
												<div class="story-bar" style="height: 82%"></div>
											</div>
										{/snippet}
									</Card>
								{/snippet}

								{#snippet secondary()}
									<StackedLayout direction="vertical" gap="sm">
										{#snippet children()}
											<Card shape="rounded" elevation={1}>
												{#snippet children()}
													<p class="story-metric-label">Pinned note</p>
													<p class="story-subtitle">Use this area for alerts, filters, or guided actions.</p>
												{/snippet}
											</Card>
											<Card shape="rounded" elevation={1}>
												{#snippet children()}
													<p class="story-metric-label">Secondary rail</p>
													<p class="story-subtitle">Collapsed mode still keeps this shell readable.</p>
												{/snippet}
											</Card>
										{/snippet}
									</StackedLayout>
								{/snippet}
							</SplitLayout>
						</div>
					{/snippet}

					{#snippet footer()}
						<div class="story-footer">Pair this story with StickyLayout and SplitLayout stories for the full shell system.</div>
					{/snippet}
				</StickyLayout>
			{/snippet}
		</SidebarLayout>
	{/snippet}
</Story>

<style>
	:global(.story-shell) {
		height: 42rem;
		border-radius: 1.25rem;
	}

	:global(.story-sidebar),
	:global(.story-main) {
		height: 100%;
	}

	:global(.story-sidebar) {
		padding: 1rem 0.85rem;
		border-radius: 1rem;
		background: linear-gradient(180deg, #10263f, #214667);
	}

	.story-label,
	.story-title,
	.story-subtitle,
	.story-metric-label,
	.story-metric-value,
	.story-footer {
		margin: 0;
	}

	.story-label,
	.story-metric-label {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.story-label {
		color: rgba(255, 255, 255, 0.65);
	}

	.story-nav-item {
		padding: 0.55rem 0.7rem;
		border-radius: 0.65rem;
		background: rgba(255, 255, 255, 0.06);
		color: rgba(255, 255, 255, 0.86);
		font-size: 0.84rem;
	}

	:global(.story-header),
	:global(.story-footer) {
		padding: 1rem;
		background: rgba(255, 255, 255, 0.92);
	}

	:global(.story-header) {
		border-bottom: 1px solid rgba(18, 32, 51, 0.08);
	}

	.story-footer {
		border-top: 1px solid rgba(18, 32, 51, 0.08);
		font-size: 0.78rem;
		color: #617385;
	}

	.story-title {
		font-size: 0.95rem;
		font-weight: 700;
		color: #122033;
	}

	.story-subtitle {
		font-size: 0.78rem;
		line-height: 1.55;
		color: #617385;
	}

	.story-tag {
		padding: 0.28rem 0.65rem;
		border-radius: 999px;
		background: rgba(12, 97, 187, 0.12);
		color: #0c61bb;
		font-size: 0.72rem;
		font-weight: 700;
	}

	.story-content {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		background: linear-gradient(180deg, rgba(242, 247, 250, 0.9), rgba(235, 242, 246, 0.9));
	}

	.story-metrics {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
	}

	.story-metric-label {
		color: #4b6179;
	}

	.story-metric-value {
		font-size: 1.15rem;
		color: #122033;
	}

	.story-card-header {
		display: grid;
		gap: 0.25rem;
	}

	.story-chart {
		height: 14rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.75rem;
		align-items: end;
	}

	.story-bar {
		border-radius: 999px;
		background: linear-gradient(180deg, rgba(12, 97, 187, 0.72), rgba(246, 146, 94, 0.9));
	}
</style>


