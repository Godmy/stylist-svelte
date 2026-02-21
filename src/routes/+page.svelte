<script lang="ts">
	import pkg from '../../package.json';
	import {
		Badge,
		BaseCard,
		Blockquote as BlockquoteAtom,
		Button,
		Container,
		Heading,
		Hero,
		Highlight as HighlightAtom,
		InlineCode,
		Kbd as KbdAtom,
		MetricCard,
		Paragraph,
		Separator,
		Stack,
		Strong
		,
		Subscript as SubscriptAtom,
		Superscript as SuperscriptAtom,
		Text as TextAtom
	} from '$stylist';
	import * as AtomComponents from '$stylist/components/atoms';

	const title = pkg.name || 'Stylist Svelte UI';
	const version = pkg.version || '1.0.0';
	const description =
		pkg.description || 'A Svelte UI component library for expressive and production-ready interfaces.';

	const chapters = [
		{
			title: 'Chapter 1: Foundation',
			text: 'Atoms are the smallest reusable UI units. They define visual consistency at scale.'
		},
		{
			title: 'Chapter 2: Composition',
			text: 'Molecules and organisms build on atoms, but quality starts from atomic primitives.'
		},
		{
			title: 'Chapter 3: Velocity',
			text: 'A complete atomic layer removes rework and accelerates delivery for every screen.'
		}
	];

	const atomNames = Object.keys(AtomComponents).sort((a, b) => a.localeCompare(b));
	const atomCount = atomNames.length;
	const atomEntries = atomNames.map((name) => ({
		name,
		component: (AtomComponents as Record<string, any>)[name]
	}));

	function getDemoProps(name: string): Record<string, unknown> {
		switch (name) {
			case 'Label':
				return { text: 'Label demo' };
			case 'CountBadge':
				return { count: 12, max: 99 };
			case 'Counter':
				return { count: 128, max: 999 };
			case 'StatusIndicator':
				return { status: 'online', label: 'online' };
			case 'CopyButton':
				return { text: 'stylist-svelte', label: 'Copy' };
			case 'InputEmail':
				return { placeholder: 'email@example.com' };
			case 'InputText':
				return { placeholder: 'Type text' };
			case 'InputPassword':
				return { placeholder: 'Password' };
			case 'InputField':
				return { label: 'Field', placeholder: 'Enter value' };
			case 'TextArea':
				return { placeholder: 'Write here...', rows: 3 };
			case 'Radio':
				return { checked: true };
			case 'Checkbox':
				return { checked: true };
			case 'Switch':
				return { checked: true };
			case 'SwitchWithLabel':
				return { label: 'Enabled', checked: true };
			case 'ProgressBar':
				return { value: 72, max: 100 };
			case 'ProgressBarWithLabel':
				return { value: 72, max: 100, label: 'Progress' };
			case 'Rating':
				return { value: 4 };
			case 'PageEllipsis':
				return {};
			case 'MessageStatus':
				return { status: 'sent' };
			case 'MessageTimestamp':
				return { timestamp: new Date().toISOString() };
			case 'NotificationBadge':
				return { count: 3 };
			case 'Notification':
				return { title: 'Notification', message: 'Demo message', type: 'info' };
			case 'Table':
				return {};
			case 'TableHeader':
				return {};
			case 'TableBody':
				return {};
			case 'TableRow':
				return {};
			default:
				return {};
		}
	}

	const qualityMetrics = [
		{ title: 'Atoms listed', value: atomCount, max: atomCount, percentage: 100, description: 'Full atomic export catalog on this page.', variant: 'success' },
		{ title: 'Narrative chapters', value: chapters.length, max: chapters.length, percentage: 100, description: 'Storytelling structure around the library.', variant: 'info' },
		{ title: 'Version', value: Number(version.split('.')[0] || 1), max: 10, percentage: 70, description: `Current package version: ${version}.`, variant: 'warning' }
	] as const;

	function openStorybook() {
		window.location.href = '/storybook';
	}

	function openNpm() {
		window.open('https://www.npmjs.com/package/stylist-svelte', '_blank', 'noopener,noreferrer');
	}
</script>

<Container class="mx-auto min-h-screen max-w-7xl px-6 py-10 sm:py-12 lg:px-12 lg:py-14">
	<Stack class="gap-6 lg:gap-8">
		<Hero
			title={`${title} • Atomic Story`}
			subtitle={description}
			stats={[
				{ label: 'All atoms', value: atomCount },
				{ label: 'Chapters', value: chapters.length },
				{ label: 'Version', value: version }
			]}
			backgroundVariant="gradient"
			backgroundImage=""
			height="medium"
			primaryCTA={{ label: 'Open Storybook', onClick: openStorybook }}
			secondaryCTA={{ label: 'View package', onClick: openNpm }}
		>
			<Badge variant="secondary">v{version}</Badge>
		</Hero>

		<Stack class="grid gap-4 lg:grid-cols-3">
			{#each chapters as chapter}
				<BaseCard title={chapter.title}>
					<Paragraph>{chapter.text}</Paragraph>
				</BaseCard>
			{/each}
		</Stack>

		<Stack class="grid gap-4 lg:grid-cols-3">
			{#each qualityMetrics as metric}
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

		<BaseCard title={`All Atoms (${atomCount})`} description="Vertical live preview of every atom exported by stylist-svelte.">
			<Stack class="gap-3">
				{#each atomEntries as atom, index}
					<BaseCard title={atom.name}>
						<Stack class="gap-2">
							<Badge variant="primary">#{index + 1}</Badge>
							<Stack class="rounded-xl border border-black/10 p-3">
								<svelte:boundary>
									{#if atom.name === 'Badge'}
										<Badge variant="primary">Badge demo</Badge>
									{:else if atom.name === 'Button'}
										<Button variant="primary">Button demo</Button>
									{:else if atom.name === 'Heading'}
										<Heading>Heading demo</Heading>
									{:else if atom.name === 'Paragraph'}
										<Paragraph>Paragraph demo text.</Paragraph>
									{:else if atom.name === 'Text'}
										<TextAtom>Text demo</TextAtom>
									{:else if atom.name === 'Strong'}
										<Strong>Strong demo</Strong>
									{:else if atom.name === 'Subscript'}
										<SubscriptAtom>2</SubscriptAtom>
									{:else if atom.name === 'Superscript'}
										<SuperscriptAtom>2</SuperscriptAtom>
									{:else if atom.name === 'InlineCode'}
										<InlineCode>npm i stylist-svelte</InlineCode>
									{:else if atom.name === 'Kbd'}
										<KbdAtom>Ctrl</KbdAtom>
									{:else if atom.name === 'Highlight'}
										<HighlightAtom>Highlight demo</HighlightAtom>
									{:else if atom.name === 'Blockquote'}
										<BlockquoteAtom>Design system quote</BlockquoteAtom>
									{:else if atom.name === 'PageButton'}
										<svelte:component this={atom.component} {...getDemoProps(atom.name)}>1</svelte:component>
									{:else if atom.name === 'TableHeader'}
										<table>
											<svelte:component this={atom.component} {...getDemoProps(atom.name)} />
										</table>
									{:else if atom.name === 'TableBody'}
										<table>
											<svelte:component this={atom.component} {...getDemoProps(atom.name)} />
										</table>
									{:else if atom.name === 'TableRow'}
										<table>
											<tbody>
												<svelte:component this={atom.component} {...getDemoProps(atom.name)} />
											</tbody>
										</table>
									{:else if atom.name === 'TableCell'}
										<table>
											<tbody>
												<tr>
													<svelte:component this={atom.component} {...getDemoProps(atom.name)}>Cell</svelte:component>
												</tr>
											</tbody>
										</table>
									{:else if atom.name === 'Tag'}
										<svelte:component this={atom.component} {...getDemoProps(atom.name)}>Tag</svelte:component>
									{:else}
										<svelte:component this={atom.component} {...getDemoProps(atom.name)} />
									{/if}

									{#snippet failed(_error)}
										<Stack class="gap-2">
											<Badge variant="warning">Needs context</Badge>
											<Paragraph class="text-sm">
												This atom requires parent state/props and cannot be rendered standalone.
											</Paragraph>
										</Stack>
									{/snippet}
								</svelte:boundary>
							</Stack>
							<InlineCode>{atom.name}</InlineCode>
						</Stack>
					</BaseCard>
				{/each}
			</Stack>
		</BaseCard>

		<Separator />

		<BaseCard title="Narrative Footer" description="Atomic layer as a single source of UI truth.">
			<Stack class="gap-3">
				<Paragraph>
					This page lists <Strong>{atomCount}</Strong> atoms in one continuous vertical flow.
				</Paragraph>
				<Paragraph>
					Use <InlineCode>import * as AtomComponents from '$stylist/components/atoms'</InlineCode>
					to access the same export set in your app.
				</Paragraph>
				<Stack class="flex flex-wrap gap-2">
					<Button variant="primary" onclick={openStorybook}>Explore stories</Button>
					<Button variant="outline" onclick={openNpm}>Open npm package</Button>
				</Stack>
			</Stack>
		</BaseCard>
	</Stack>
</Container>
