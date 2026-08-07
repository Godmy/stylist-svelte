<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import WbdLandingPage from './index.svelte';

	function placeholder(label: string): string {
		const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'><rect width='640' height='360' fill='%23142028'/><text x='50%' y='50%' fill='%236b8c7a' font-family='sans-serif' font-size='22' text-anchor='middle' dominant-baseline='middle'>${label}</text></svg>`;
		return `data:image/svg+xml,${svg}`;
	}

	const controls: SlotStory[] = [];

	const content = {
		metaTitle: 'WeOracle — Wideband Delphi for executive decisions',
		metaDescription:
			'WeOracle gathers anonymous expert consensus for CAPEX, technology roadmaps, budgets, contract prices, and industrial schedules.',
		nav: { cases: 'Cases', method: 'Method', about: 'About', signIn: 'Sign in' },
		hero: {
			eyebrow: 'Wideband Delphi platform',
			title: 'Expert consensus for decisions where mistakes are expensive',
			lead: 'WeOracle gathers independent estimates from domain experts, exposes disagreement, and turns uncertainty into ranges, priorities, and a committee-ready decision.',
			create: 'Create session',
			cases: 'View cases'
		},
		metrics: [
			['3 rounds', 'enough structure to reduce noise and reveal stable consensus'],
			['P10-P90', 'decision ranges instead of one decorative precise number'],
			['Anonymous', 'experts can name risks without career pressure']
		] as [string, string][],
		definition: {
			eyebrow: 'What it is',
			title: 'Wideband Delphi: a collective forecast without the illusion of consensus',
			paragraphs: [
				'Wideband Delphi is a method for producing a group forecast or expert estimate in which participants respond anonymously, see the spread of other opinions, and refine their position over several rounds.',
				'The name comes from software engineering: "wideband" means a wide estimation range (minimum-expected-maximum), and "Delphi" refers to the ancient Greek oracle.'
			],
			comparisonTitle: 'Why it beats a regular poll or a vote',
			comparisonColumns: ['Regular poll', 'Open discussion', 'Wideband Delphi'] as [
				string,
				string,
				string
			],
			comparisonCriteria: ['Anonymity', 'Accounts for uncertainty', 'Protection from anchoring'],
			comparisonRows: [
				['Usually not', 'No', 'Yes'],
				['No', 'Sometimes', 'Yes (min-max range)'],
				['No', 'No', 'Yes']
			] as [string, string, string][]
		},
		intro: {
			eyebrow: 'Decision intelligence',
			title: 'Not a survey. A decision artifact.',
			body: 'When history is thin, teams defend their plans, and external forecasts diverge, one expert opinion is not enough. WeOracle captures independent estimates, highlights conflicting assumptions, and guides the group toward a transparent decision.'
		},
		casesHeading: { eyebrow: 'TOP-5 use cases', title: 'Where the method is easiest to value' },
		cases: [
			{
				kicker: '01 / Capital projects',
				title: 'CAPEX and schedule estimates for major projects',
				body: 'Gather independent consensus from engineering, procurement, project controls, and finance.',
				result: 'CAPEX range, schedule range, critical dependencies, and key deviation drivers.',
				image: placeholder('case-01'),
				alt: 'Capital project planning dashboard'
			},
			{
				kicker: '02 / Technology roadmap',
				title: 'Technology maturity and creation forecasts',
				body: 'Estimate which technologies will mature, when they become usable, and which barriers must be removed.',
				result:
					'Maturity map, technical success probability, time-to-readiness, and cost to advance.',
				image: placeholder('case-02'),
				alt: 'Technology goal tree'
			},
			{
				kicker: '03 / Resource allocation',
				title: 'Budget allocation across strategic initiatives',
				body: 'Turn competing department requests into a prioritized portfolio based on anonymous expert judgment.',
				result:
					'Recommended budget allocation, priority scores, and scenarios for different limits.',
				image: placeholder('case-03'),
				alt: 'Portfolio allocation interface'
			},
			{
				kicker: '04 / Long-term contracts',
				title: 'Price corridors for long-term contracts',
				body: 'Use a working price range for LTA, procurement, and negotiation instead of relying on one forecast.',
				result: 'Price corridor, scenario boundaries, and contract formula review triggers.',
				image: placeholder('case-04'),
				alt: 'Price corridor analytics screen'
			},
			{
				kicker: '05 / Turnaround',
				title: 'Maintenance shutdown and turnaround schedules',
				body: 'Align a realistic maintenance window across production, contractors, procurement, and finance.',
				result: 'Critical path, schedule compression risks, and the cost of each compromise.',
				image: placeholder('case-05'),
				alt: 'Turnaround planning dashboard'
			}
		],
		workflow: {
			eyebrow: 'How it works',
			title: 'Five steps from scattered estimates to a decision range',
			steps: [
				'The facilitator defines the question, scales, participants, and consensus criteria.',
				'Experts independently submit three-point estimates, rationale, and assumptions.',
				'WeOracle aggregates answers and highlights spread and disagreement hotspots.',
				'After focused discussion, the next round refines the disputed estimates.',
				'The team receives ranges, priorities, risks, and a committee-ready decision brief.'
			]
		},
		result: {
			eyebrow: 'Final output',
			title: 'The output is not a chat or spreadsheet. It is a decision brief.',
			body: 'The final result is usable in an investment committee, budget session, technology council, or operations review.',
			cta: 'Open WeOracle'
		},
		labels: {
			nav: 'Primary navigation',
			metrics: 'Core method properties',
			definition: 'What Wideband Delphi is',
			cases: 'WeOracle cases',
			workflow: 'Wideband Delphi process',
			result: 'Session result'
		}
	};
</script>

<Story
	{controls}
	component={WbdLandingPage}
	title="WbdLandingPage"
	description="Full-page template for the weoracle.online marketing landing page, composed from placeholder content so responsive layout can be checked in the sandbox device preview before real data and real images are wired in weoracle.online."
>
	{#snippet children()}
		<WbdLandingPage
			{content}
			heroImageSrc={placeholder('hero')}
			heroImageAlt="Decision room hero illustration"
			workflowImageSrc={placeholder('workflow')}
			workflowImageAlt="Wideband Delphi workflow illustration"
			resultImageSrc={placeholder('result')}
			resultImageAlt="Decision brief illustration"
		>
			{#snippet brand()}
				<span class="nav__brand">WeOracle</span>
			{/snippet}
			{#snippet languageControl()}
				<span class="lang-stub">EN</span>
			{/snippet}
		</WbdLandingPage>
	{/snippet}
</Story>

<style>
	.lang-stub {
		font-size: 0.8rem;
		opacity: 0.75;
	}
</style>
