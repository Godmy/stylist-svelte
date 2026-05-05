<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import { AspectRatio } from '$stylist/layout/component/atom/aspect-ratio';
	import { Background } from '$stylist/layout/component/atom/background';
	import { Border } from '$stylist/layout/component/atom/border';
	import { Container } from '$stylist/layout/component/atom/container';
	import { Divider } from '$stylist/layout/component/atom/divider';
	import { Grid as GridSvg } from '$stylist/layout/component/atom/grid';
	import { GridLayout } from '$stylist/layout/component/atom/grid-layout';
	import { HorizontalLayout } from '$stylist/layout/component/atom/horizontal-layout';
	import { Spacer } from '$stylist/layout/component/atom/spacer';
	import { GradientBackground as FlowGradientBackground } from '$stylist/layout/component/molecule/gradient-background';
	import { Grid } from '$stylist/layout/component/molecule/grid';
	import { Card } from '$stylist/layout/component/molecule/card';
	import { ContainerQuery } from '$stylist/layout/component/molecule/container-query';
	import { OverlayLayout } from '$stylist/layout/component/molecule/overlay-layout';
	import { Popover } from '$stylist/layout/component/molecule/popover';
	import { SplitLayout } from '$stylist/layout/component/molecule/split-layout';
	import { StackedLayout } from '$stylist/layout/component/molecule/stacked-layout';
	import { StickyLayout } from '$stylist/layout/component/molecule/sticky-layout';
	import { ThemeSurface } from '$stylist/layout/component/molecule/theme-surface';
	import { VerticalLayout } from '$stylist/layout/component/molecule/vertical-layout';
	import { WidgetContainer } from '$stylist/layout/component/molecule/widget-container';
	import { ThemeProvider } from '$stylist/theme';
	import SidebarLayout from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'side', type: 'select', defaultValue: 'left', options: ['left', 'right'] },
		{ name: 'sidebarWidth', type: 'select', defaultValue: 'sm', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'gap', type: 'select', defaultValue: 'sm', options: ['none', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'collapsed', type: 'boolean', defaultValue: false },
		{ name: 'responsive', type: 'boolean', defaultValue: false }
	];

	const heroStats = [
		{ label: 'Atoms', value: '9' },
		{ label: 'Molecules', value: '24' },
		{ label: 'Visible components', value: '33' },
		{ label: 'State builders', value: '23' }
	];

	const shellMetrics = [
		{ label: 'Throughput', value: '142 req/s', tone: 'accent' },
		{ label: 'Queue', value: '07 pending', tone: 'neutral' },
		{ label: 'Latency', value: '84 ms', tone: 'neutral' },
		{ label: 'Uptime', value: '99.98%', tone: 'accent' }
	];

	const breakpoints = [
		{ bp: 'xs', width: '0px', prefix: 'base' },
		{ bp: 'sm', width: '640px', prefix: 'sm:' },
		{ bp: 'md', width: '768px', prefix: 'md:' },
		{ bp: 'lg', width: '1024px', prefix: 'lg:' },
		{ bp: 'xl', width: '1280px', prefix: 'xl:' },
		{ bp: '2xl', width: '1536px', prefix: '2xl:' }
	];
</script>

<Story
	component={SidebarLayout}
	title="SidebarLayout"
	description="Full layout workbench: hero composition, operational shell, primitives coverage, and token rhythm in one story."
	{controls}
>
	{#snippet children(values: any)}
		<ThemeProvider initialMode="light" initialScheme="minimal">
			<div class="layout-story">
				<section class="hero">
					<div class="hero-backdrop"></div>
					<Container>
						{#snippet children()}
							<div class="hero-grid">
								<div class="hero-copy">
									<p class="eyebrow">Layout Domain</p>
									<h1>Layout primitives that scale from atoms to application shells.</h1>
									<p class="lede">
										This story absorbs the former route-level layout showcase and keeps the domain
										useful as one assembled workbench instead of scattered isolated cards.
									</p>

									<div class="hero-stats">
										{#each heroStats as stat}
											<div class="stat-pill">
												<strong>{stat.value}</strong>
												<span>{stat.label}</span>
											</div>
										{/each}
									</div>
								</div>

								<div class="hero-preview">
									<FlowGradientBackground variant="dynamic" class="hero-preview-surface">
										{#snippet children()}
											<OverlayLayout overlayAlign="top-left" overlayZIndex={2}>
												{#snippet base()}
													<AspectRatio ratio={16 / 11} class="hero-preview-ratio">
														{#snippet children()}
															<SplitLayout
																primarySize="2/3"
																secondarySize="1/3"
																gap="sm"
																responsive={false}
																class="hero-split"
															>
																{#snippet primary()}
																	<Card shape="rounded" elevation={4} class="hero-panel">
																		{#snippet children()}
																			<VerticalLayout gap="sm">
																				{#snippet children()}
																					<div class="hero-line hero-line--wide"></div>
																					<div class="hero-line"></div>
																					<div class="hero-chart">
																						<div class="hero-bar" style="height: 42%"></div>
																						<div class="hero-bar" style="height: 68%"></div>
																						<div class="hero-bar" style="height: 54%"></div>
																						<div class="hero-bar" style="height: 80%"></div>
																					</div>
																				{/snippet}
																			</VerticalLayout>
																		{/snippet}
																	</Card>
																{/snippet}

																{#snippet secondary()}
																	<StackedLayout direction="vertical" gap="sm" class="h-full">
																		{#snippet children()}
																			<Card shape="rounded" elevation={2} class="hero-panel hero-panel--compact">
																				{#snippet children()}
																					<div class="hero-line hero-line--wide"></div>
																					<div class="hero-chip-row">
																						<div class="hero-chip"></div>
																						<div class="hero-chip"></div>
																					</div>
																				{/snippet}
																			</Card>
																			<Card shape="rounded" elevation={2} class="hero-panel hero-panel--compact">
																				{#snippet children()}
																					<div class="hero-line hero-line--wide"></div>
																					<div class="hero-line"></div>
																					<div class="hero-line hero-line--short"></div>
																				{/snippet}
																			</Card>
																		{/snippet}
																	</StackedLayout>
																{/snippet}
															</SplitLayout>
														{/snippet}
													</AspectRatio>
												{/snippet}

												{#snippet overlay()}
													<div class="floating-note">OverlayLayout + SplitLayout + Card</div>
												{/snippet}
											</OverlayLayout>
										{/snippet}
									</FlowGradientBackground>
								</div>
							</div>
						{/snippet}
					</Container>
				</section>

				<section class="story-section">
					<div class="section-heading">
						<p class="section-kicker">Composition</p>
						<h2>Operational shell</h2>
						<p>Persistent navigation, sticky framing, split content and compact metric cards.</p>
					</div>

					<div class="demo-card demo-card--shell">
						<SidebarLayout
							side={values.side}
							sidebarWidth={values.sidebarWidth}
							gap={values.gap}
							collapsed={values.collapsed}
							responsive={values.responsive}
							sidebarLabel="Operational navigation"
							class="shell-layout"
						>
							{#snippet sidebar()}
								<VerticalLayout gap="xs" class="shell-sidebar">
									{#snippet children()}
										<p class="sidebar-label">Workspace</p>
										{#each ['Overview', 'Telemetry', 'Incidents', 'Releases', 'Settings'] as item}
											<div class="sidebar-item">{item}</div>
										{/each}
									{/snippet}
								</VerticalLayout>
							{/snippet}

							{#snippet children()}
								<StickyLayout fillHeight headerShadow footerShadow class="shell-sticky">
									{#snippet header()}
										<HorizontalLayout gap="sm" alignItems="center" class="shell-header">
											{#snippet children()}
												<div>
													<p class="shell-title">Operations board</p>
													<p class="shell-subtitle">Composite demo built from layout primitives only.</p>
												</div>
												<Spacer />
												<Popover title="View options" position="bottom">
													{#snippet trigger()}
														<button class="demo-btn">Layout controls</button>
													{/snippet}
													{#snippet content()}
														<VerticalLayout gap="xs">
															{#snippet children()}
																<button class="popover-action">Dense spacing</button>
																<button class="popover-action">Balanced spacing</button>
																<button class="popover-action">Presentation mode</button>
															{/snippet}
														</VerticalLayout>
													{/snippet}
												</Popover>
											{/snippet}
										</HorizontalLayout>
									{/snippet}

									{#snippet children()}
										<div class="shell-content">
											<Grid cols={4} gap="sm" responsive={false}>
												{#snippet children()}
													{#each shellMetrics as metric}
														<Card shape="rounded" elevation={metric.tone === 'accent' ? 4 : 1} class="metric-card">
															{#snippet children()}
																<span class="metric-label">{metric.label}</span>
																<strong class="metric-value">{metric.value}</strong>
															{/snippet}
														</Card>
													{/each}
												{/snippet}
											</Grid>

											<SplitLayout primarySize="2/3" secondarySize="1/3" gap="sm" responsive={false}>
												{#snippet primary()}
													<Card shape="rounded" elevation={2} class="analysis-card">
														{#snippet header()}
															<div class="card-header">
																<p class="card-title">Queue distribution</p>
																<p class="card-copy">GridLayout handles spanning tiles inside a card shell.</p>
															</div>
														{/snippet}
														{#snippet children()}
															<GridLayout
																aria-label="Queue distribution"
																items={[
																	{ content: 'Critical', colSpan: 2 },
																	{ content: 'Stable' },
																	{ content: 'Backlog' },
																	{ content: 'Escalated', colSpan: 2 }
																]}
																class="grid-cols-3 gap-3"
															/>
														{/snippet}
													</Card>
												{/snippet}

												{#snippet secondary()}
													<StackedLayout direction="vertical" gap="sm">
														{#snippet children()}
															<Card shape="rounded" elevation={1}>
																{#snippet children()}
																	<VerticalLayout gap="xs">
																		{#snippet children()}
																			<span class="metric-label">Pinned note</span>
																			<p class="card-copy">StickyLayout keeps navigation and actions visible.</p>
																		{/snippet}
																	</VerticalLayout>
																{/snippet}
															</Card>
															<ContainerQuery containerType="inline-size" containerName="signal-panel">
																{#snippet children()}
																	<Card shape="rounded" elevation={1}>
																		{#snippet children()}
																			<p class="metric-label">Container responsive panel</p>
																			<div class="cq-panel">
																				<div class="demo-block">Inbound</div>
																				<div class="demo-block demo-block--accent">Recovered</div>
																			</div>
																		{/snippet}
																	</Card>
																{/snippet}
															</ContainerQuery>
														{/snippet}
													</StackedLayout>
												{/snippet}
											</SplitLayout>
										</div>
									{/snippet}

									{#snippet footer()}
										<div class="shell-footer">
											<Divider />
											<p>Use this as the assembled baseline story for the layout domain.</p>
										</div>
									{/snippet}
								</StickyLayout>
							{/snippet}
						</SidebarLayout>
					</div>
				</section>

				<section class="story-section">
					<div class="section-heading">
						<p class="section-kicker">Coverage</p>
						<h2>Primitives and higher-order containers</h2>
						<p>The route-only runtime examples now live inside one story.</p>
					</div>

					<div class="demo-grid demo-grid--wide">
						<article class="demo-card">
							<div class="card-head">
								<p class="kicker">Background + Border</p>
								<h3>Surface primitives</h3>
								<p class="copy">Atoms shown in a meaningful composition.</p>
							</div>
							<div class="preview">
								<Background
									gradient="linear-gradient(135deg, rgba(18, 99, 179, 0.16), rgba(255, 145, 91, 0.2))"
									class="coverage-surface"
								>
									{#snippet children()}
										<Border
											borderStyle="dashed"
											borderColor="rgba(18, 32, 51, 0.28)"
											borderRadius="1rem"
											class="coverage-border"
										>
											{#snippet children()}
												<span class="coverage-label">Background wrapped by Border</span>
											{/snippet}
										</Border>
									{/snippet}
								</Background>
							</div>
						</article>

						<article class="demo-card">
							<div class="card-head">
								<p class="kicker">Grid SVG</p>
								<h3>Canvas grid atom</h3>
								<p class="copy">The SVG grid stays distinct from layout grid molecules.</p>
							</div>
							<div class="preview">
								<div class="grid-svg-frame">
									<GridSvg gridSize={18} zoom={1} visible color="rgba(18, 99, 179, 0.38)" />
									<div class="grid-svg-card">atom/grid</div>
								</div>
							</div>
						</article>

						<article class="demo-card">
							<div class="card-head">
								<p class="kicker">Direct molecules</p>
								<h3>Grid + GradientBackground</h3>
								<p class="copy">Fast balanced groupings without the full shell overhead.</p>
							</div>
							<div class="preview">
								<FlowGradientBackground variant="static" class="flow-gradient-demo">
									{#snippet children()}
										<Grid cols={3} gap="sm" responsive={false}>
											{#snippet children()}
												<div class="demo-block text-center">A</div>
												<div class="demo-block text-center">B</div>
												<div class="demo-block text-center">C</div>
											{/snippet}
										</Grid>
									{/snippet}
								</FlowGradientBackground>
							</div>
						</article>

						<article class="demo-card demo-card--wide">
							<div class="card-head">
								<p class="kicker">ThemeSurface + WidgetContainer</p>
								<h3>Higher-order wrappers</h3>
								<p class="copy">Context-aware containers with a visible runtime example.</p>
							</div>
							<div class="preview">
								<ThemeSurface class="theme-surface-demo">
									{#snippet header(themeContext)}
										<p class="surface-title">Theme surface</p>
										<p class="surface-mode">{themeContext?.themeMode ?? 'theme pending'}</p>
									{/snippet}
									{#snippet content(themeContext)}
										<WidgetContainer
											title="Widget frame"
											subtitle={themeContext?.themeScheme ?? 'layout domain'}
											collapsible
											draggable
											maximizable
										>
											{#snippet content()}
												<Grid cols={3} gap="sm" responsive={false}>
													{#snippet children()}
														<div class="demo-block">Header</div>
														<div class="demo-block demo-block--accent">Body</div>
														<div class="demo-block">Actions</div>
													{/snippet}
												</Grid>
											{/snippet}
										</WidgetContainer>
									{/snippet}
									{#snippet footer(themeContext)}
										<p class="surface-mode">mode: {themeContext?.themeMode ?? 'unknown'}</p>
									{/snippet}
								</ThemeSurface>
							</div>
						</article>
					</div>
				</section>

				<section class="story-section">
					<div class="section-heading">
						<p class="section-kicker">Tokens</p>
						<h2>Grid, spacing and breakpoint rhythm</h2>
						<p>Composition quality depends on predictable sizing and responsive language.</p>
					</div>

					<div class="demo-grid demo-grid--wide">
						<article class="demo-card demo-card--wide">
							<div class="card-head">
								<p class="kicker">Breakpoints</p>
								<h3>Responsive prefixes</h3>
								<p class="copy">Same breakpoint language for utility classes and container-aware composition.</p>
							</div>
							<div class="preview">
								<Grid cols={6} gap="sm" responsive={false}>
									{#snippet children()}
										{#each breakpoints as breakpoint}
											<VerticalLayout gap="none" class="breakpoint-pill">
												{#snippet children()}
													<span class="metric-label">{breakpoint.bp}</span>
													<span class="breakpoint-width">{breakpoint.width}</span>
													<span class="breakpoint-prefix">{breakpoint.prefix}</span>
												{/snippet}
											</VerticalLayout>
										{/each}
									{/snippet}
								</Grid>
							</div>
						</article>

						<article class="demo-card">
							<div class="card-head">
								<p class="kicker">Grid</p>
								<h3>Simple uniform matrix</h3>
								<p class="copy">Balanced groupings before switching to richer shell contracts.</p>
							</div>
							<div class="preview">
								<Grid cols={3} gap="sm" responsive={false}>
									{#snippet children()}
										{#each Array(6) as _, index}
											<div class="demo-block text-center">Cell {index + 1}</div>
										{/each}
									{/snippet}
								</Grid>
							</div>
						</article>

						<article class="demo-card">
							<div class="card-head">
								<p class="kicker">ContainerQuery</p>
								<h3>Local responsiveness</h3>
								<p class="copy">Adapt to the container rather than the viewport.</p>
							</div>
							<div class="preview">
								<ContainerQuery containerType="inline-size" containerName="token-panel">
									{#snippet children()}
										<div class="token-panel-copy">Resize the surface and keep the adaptation local.</div>
										<div class="cq-panel">
											<div class="demo-block">Filters</div>
											<div class="demo-block demo-block--accent">Results</div>
										</div>
									{/snippet}
								</ContainerQuery>
							</div>
						</article>
					</div>
				</section>
			</div>
		</ThemeProvider>
	{/snippet}
</Story>

<style>
	.layout-story {
		display: grid;
		gap: 3rem;
		padding: 0 0 2rem;
		background:
			radial-gradient(circle at top, rgba(213, 238, 255, 0.9), transparent 32rem),
			linear-gradient(180deg, #f7fbff 0%, #edf4f8 54%, #f6f3ec 100%);
		color: #122033;
		border-radius: 1.75rem;
	}

	.hero {
		position: relative;
		padding: 2rem 1rem 0;
		overflow: clip;
	}

	.hero-backdrop {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(140deg, rgba(8, 58, 111, 0.08), transparent 40%),
			radial-gradient(circle at 85% 15%, rgba(255, 150, 86, 0.18), transparent 18rem);
		pointer-events: none;
	}

	.hero-grid {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
		gap: 1.5rem;
		align-items: stretch;
	}

	.hero-copy {
		padding: 1.5rem 0;
		display: grid;
		gap: 1.25rem;
	}

	.eyebrow,
	.section-kicker,
	.kicker,
	.metric-label,
	.sidebar-label {
		margin: 0;
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.eyebrow,
	.section-kicker,
	.kicker,
	.metric-label {
		color: #48607c;
	}

	h1,
	h2,
	h3,
	p {
		margin: 0;
	}

	h1 {
		max-width: 14ch;
		font-size: clamp(2.4rem, 5vw, 4.8rem);
		line-height: 0.92;
		letter-spacing: -0.05em;
	}

	h2 {
		font-size: clamp(1.6rem, 3vw, 2.5rem);
		letter-spacing: -0.04em;
	}

	h3 {
		font-size: 1.12rem;
		letter-spacing: -0.03em;
	}

	.lede,
	.copy,
	.card-copy,
	.shell-subtitle,
	.surface-mode,
	.breakpoint-width,
	.token-panel-copy,
	.shell-footer p,
	.section-heading p {
		line-height: 1.6;
		color: #54667a;
	}

	.hero-stats {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.stat-pill {
		display: grid;
		gap: 0.15rem;
		padding: 0.85rem 1rem;
		min-width: 9rem;
		border: 1px solid rgba(18, 32, 51, 0.08);
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.72);
		backdrop-filter: blur(12px);
	}

	.stat-pill strong {
		font-size: 1rem;
		color: #0a5cb5;
	}

	.stat-pill span {
		font-size: 0.76rem;
		color: #54667a;
	}

	:global(.hero-preview-surface),
	:global(.hero-preview-ratio),
	:global(.hero-split),
	:global(.hero-panel) {
		height: 100%;
	}

	:global(.hero-preview-surface) {
		min-height: 26rem;
		border-radius: 2rem;
		padding: 1rem;
		box-shadow: 0 24px 60px rgba(16, 33, 52, 0.12);
	}

	:global(.hero-panel) {
		background: rgba(255, 255, 255, 0.92);
	}

	:global(.hero-panel--compact) {
		min-height: 8rem;
	}

	.hero-line,
	.hero-chip,
	.hero-bar {
		border-radius: 999px;
	}

	.hero-line {
		height: 0.7rem;
		background: rgba(43, 90, 137, 0.16);
	}

	.hero-line--wide {
		width: 76%;
	}

	.hero-line--short {
		width: 48%;
	}

	.hero-chart {
		height: 100%;
		min-height: 11rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.75rem;
		align-items: end;
	}

	.hero-bar {
		background: linear-gradient(180deg, rgba(18, 95, 176, 0.6), rgba(255, 136, 81, 0.85));
	}

	.hero-chip-row {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.75rem;
	}

	.hero-chip {
		width: 4rem;
		height: 1.9rem;
		background: rgba(43, 90, 137, 0.1);
	}

	.floating-note {
		margin: 1rem;
		padding: 0.45rem 0.7rem;
		border-radius: 999px;
		background: rgba(12, 23, 36, 0.82);
		color: #fff;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.story-section {
		padding: 0 1rem;
		display: grid;
		gap: 1.25rem;
	}

	.section-heading {
		max-width: 48rem;
		display: grid;
		gap: 0.45rem;
	}

	.demo-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		gap: 1rem;
		align-items: start;
	}

	.demo-grid--wide {
		grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
	}

	.demo-card {
		display: grid;
		gap: 1rem;
		padding: 1.2rem;
		border: 1px solid rgba(18, 32, 51, 0.08);
		border-radius: 1.6rem;
		background: rgba(255, 255, 255, 0.82);
		backdrop-filter: blur(18px);
		box-shadow: 0 16px 42px rgba(18, 32, 51, 0.08);
	}

	.demo-card--wide {
		grid-column: span 2;
	}

	.demo-card--shell {
		padding: 0.8rem;
	}

	.card-head,
	.card-header {
		display: grid;
		gap: 0.3rem;
	}

	.preview {
		padding: 1rem;
		border-radius: 1.2rem;
		background: linear-gradient(180deg, rgba(242, 247, 250, 0.9), rgba(235, 242, 246, 0.9));
		border: 1px solid rgba(18, 32, 51, 0.06);
	}

	:global(.shell-layout) {
		height: min(46rem, 76vh);
	}

	:global(.shell-sidebar),
	:global(.shell-sticky) {
		height: 100%;
	}

	:global(.shell-sidebar) {
		padding: 1rem 0.85rem;
		border-radius: 1.1rem;
		background: linear-gradient(180deg, rgba(14, 34, 57, 0.98), rgba(28, 55, 86, 0.94));
	}

	.sidebar-label {
		color: rgba(255, 255, 255, 0.65);
		margin-bottom: 0.45rem;
	}

	.sidebar-item {
		padding: 0.55rem 0.75rem;
		border-radius: 0.7rem;
		color: rgba(255, 255, 255, 0.86);
		background: rgba(255, 255, 255, 0.05);
		font-size: 0.86rem;
	}

	:global(.shell-header),
	.shell-footer {
		padding: 1rem 1.1rem;
		background: rgba(255, 255, 255, 0.92);
	}

	:global(.shell-header) {
		border-bottom: 1px solid rgba(18, 32, 51, 0.08);
	}

	.shell-footer {
		display: grid;
		gap: 0.6rem;
		border-top: 1px solid rgba(18, 32, 51, 0.08);
	}

	.shell-title,
	.card-title,
	.surface-title {
		font-size: 0.95rem;
		font-weight: 700;
		color: #122033;
	}

	.demo-btn {
		padding: 0.65rem 0.95rem;
		border: 1px solid rgba(18, 32, 51, 0.08);
		border-radius: 999px;
		background: #fff;
		font-size: 0.82rem;
		font-weight: 700;
		cursor: pointer;
		color: #122033;
	}

	.popover-action {
		width: 100%;
		padding: 0.5rem 0.65rem;
		border: none;
		border-radius: 0.65rem;
		background: transparent;
		text-align: left;
		font-size: 0.82rem;
		color: #122033;
		cursor: pointer;
	}

	.popover-action:hover {
		background: rgba(18, 32, 51, 0.05);
	}

	.shell-content {
		padding: 1.1rem;
		display: grid;
		gap: 1rem;
		background: rgba(244, 249, 252, 0.9);
	}

	.metric-value {
		font-size: 1.2rem;
		letter-spacing: -0.04em;
		color: #122033;
	}

	.cq-panel {
		display: block;
		margin-top: 0.75rem;
	}

	.demo-block {
		padding: 0.65rem 0.75rem;
		border-radius: 0.85rem;
		border: 1px solid rgba(18, 32, 51, 0.08);
		background: rgba(255, 255, 255, 0.86);
		font-size: 0.82rem;
		color: #4a5e75;
	}

	.demo-block--accent {
		background: rgba(255, 140, 92, 0.12);
		border-color: rgba(255, 140, 92, 0.3);
		color: #9e4f1d;
	}

	:global(.coverage-surface) {
		min-height: 11rem;
		padding: 1rem;
		border-radius: 1.1rem;
		display: grid;
		place-items: center;
	}

	:global(.coverage-border) {
		width: 100%;
		min-height: 7rem;
		display: grid;
		place-items: center;
		background: rgba(255, 255, 255, 0.74);
	}

	.coverage-label {
		font-weight: 800;
		color: #122033;
	}

	.grid-svg-frame {
		position: relative;
		min-height: 12rem;
		overflow: hidden;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.8);
		border: 1px solid rgba(18, 32, 51, 0.08);
	}

	.grid-svg-frame :global(svg) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}

	.grid-svg-card {
		position: absolute;
		inset: auto 1rem 1rem 1rem;
		padding: 0.75rem 0.85rem;
		border-radius: 0.85rem;
		background: rgba(255, 255, 255, 0.9);
		border: 1px solid rgba(18, 32, 51, 0.08);
		font-size: 0.82rem;
		font-weight: 800;
		color: #123250;
	}

	:global(.flow-gradient-demo) {
		min-height: 10rem;
		border-radius: 1rem;
		padding: 1rem;
	}

	:global(.theme-surface-demo) {
		border-radius: 1rem;
		overflow: hidden;
		border: 1px solid rgba(18, 32, 51, 0.08);
	}

	:global(.breakpoint-pill) {
		padding: 0.8rem;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.82);
		border: 1px solid rgba(18, 32, 51, 0.08);
		text-align: center;
	}

	.breakpoint-prefix {
		font-family: monospace;
		font-size: 0.76rem;
		color: #0a61bb;
	}

	@container signal-panel (min-width: 22rem) {
		.cq-panel {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0.5rem;
		}
	}

	@container token-panel (min-width: 22rem) {
		.cq-panel {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0.5rem;
		}
	}

	@media (max-width: 70rem) {
		.hero-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 48rem) {
		.layout-story {
			gap: 2rem;
		}

		.demo-card--wide {
			grid-column: span 1;
		}

		:global(.shell-layout) {
			height: auto;
		}
	}
</style>
