<script lang="ts">
	import pkg from '../../package.json';
	import {
		Badge,
		BaseCard,
		Button,
		Container,
		Heading,
		Hero,
		Label,
		MetricCard,
		Paragraph,
		Stack
	} from '$stylist';

	const title = pkg.name || 'Stylist Svelte UI';
	const version = pkg.version || '';
	const description =
		pkg.description || 'A Svelte UI component library for expressive and production-ready interfaces.';

	const heroStats = [
		{ label: 'Core components', value: 70 },
		{ label: 'Theme presets', value: 2 },
		{ label: 'SSR ready', value: 1 }
	];

	const metrics = [
		{ title: 'Adoption', value: 90, max: 100, percentage: 90, description: 'Ship production UI quickly.', variant: 'success' },
		{ title: 'Consistency', value: 88, max: 100, percentage: 88, description: 'Token-first visual language.', variant: 'info' },
		{ title: 'Maintainability', value: 92, max: 100, percentage: 92, description: 'Reusable components at scale.', variant: 'warning' }
	] as const;

	const highlights = [
		{
			badge: 'Token-first',
			title: 'Unified visual rhythm',
			text: 'Spacing, typography, and radii stay consistent across product surfaces.'
		},
		{
			badge: 'Production-safe',
			title: 'Practical for real apps',
			text: 'Components target SSR, accessibility, and long-term maintainability.'
		},
		{
			badge: 'Composable',
			title: 'From atoms to pages',
			text: 'Build simple screens or complex flows using the same design primitives.'
		}
	];

	const quickSteps = [
		{ label: 'Install package', command: 'npm i stylist-svelte' },
		{ label: 'Import styles', command: "import 'stylist-svelte/styles.css'" },
		{ label: 'Use components', command: "import { Button } from 'stylist-svelte'" }
	];

	function openStorybook() {
		window.location.href = '/storybook';
	}

	function openNpm() {
		window.open('https://www.npmjs.com/package/stylist-svelte', '_blank', 'noopener,noreferrer');
	}
</script>

<Container class="mx-auto min-h-screen max-w-6xl px-6 py-12 sm:py-14 lg:px-12 lg:py-16">
	<Stack class="gap-6 lg:gap-8">
		<Hero
			title={title}
			subtitle={description}
			stats={heroStats}
			backgroundVariant="gradient"
			backgroundImage=""
			height="medium"
			primaryCTA={{ label: 'Open Storybook', onClick: openStorybook }}
			secondaryCTA={{ label: 'View package', onClick: openNpm }}
		>
			{#if version}
				<Badge variant="secondary">Version {version}</Badge>
			{/if}
		</Hero>

		<Stack class="grid gap-4 md:grid-cols-3">
			{#each metrics as metric}
				<MetricCard
					title={metric.title}
					value={metric.value}
					max={metric.max}
					percentage={metric.percentage}
					description={metric.description}
					variant={metric.variant}
				/>
			{/each}
		</Stack>

		<Stack class="grid gap-4 lg:grid-cols-3">
			{#each highlights as item}
				<BaseCard variant="default" title={item.title}>
					<Stack class="gap-3">
						<Badge variant="primary">{item.badge}</Badge>
						<Paragraph>{item.text}</Paragraph>
					</Stack>
				</BaseCard>
			{/each}
		</Stack>

		<Stack class="grid gap-4 lg:grid-cols-2">
			<BaseCard title="Quick start" description="Use only library components to build pages.">
				<Stack class="gap-3">
					{#each quickSteps as step, idx}
						<BaseCard variant="outline" title={`Step ${idx + 1}: ${step.label}`}>
							<Paragraph class="font-mono text-sm">{step.command}</Paragraph>
						</BaseCard>
					{/each}
					<Stack class="flex flex-wrap gap-2 pt-2">
						<Button variant="primary" onclick={openStorybook}>Open Storybook</Button>
						<Button variant="outline" onclick={openNpm}>View package</Button>
					</Stack>
				</Stack>
			</BaseCard>

			<BaseCard title="Workflow" description="A practical path from setup to scalable UI.">
				<Stack class="gap-3">
					<Label text="1. Start with primitives" />
					<Paragraph>Use core layout and typography components to define stable foundations.</Paragraph>
					<Label text="2. Apply themes and tokens" />
					<Paragraph>Keep visual behavior consistent across pages through shared tokens.</Paragraph>
					<Label text="3. Compose product screens" />
					<Paragraph>Scale from simple cards to full dashboards with reusable building blocks.</Paragraph>
					{#if version}
						<Heading class="text-lg">Version {version}</Heading>
					{/if}
				</Stack>
			</BaseCard>
		</Stack>
	</Stack>
</Container>
