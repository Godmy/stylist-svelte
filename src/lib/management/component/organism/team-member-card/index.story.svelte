<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import TeamMemberCard from './index.svelte';
	import type { SlotTeamMemberCard as ITeamMemberCardProps } from '$stylist/management/interface/slot/team-member-card';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'name', type: 'text', defaultValue: 'Claude' },
			{ name: 'role', type: 'text', defaultValue: 'Content Strategist' },
			{
				name: 'variant',
				type: 'select',
				options: ['default', 'icon', 'compact', 'detailed'],
				defaultValue: 'default'
			}
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample data for the team member card
	const sampleTeamMembers: ITeamMemberCardProps[] = [
		{
			name: 'Claude',
			role: 'Content Strategist',
			model: 'Claude Sonnet 4.5',
			avatar: '/avatars/claude.svg',
			badges: ['Content', 'Architecture', 'Analysis'],
			description:
				'Specializes in documentation, content strategy, and architectural analysis. Known for deep research and critical thinking.',
			achievements: [
				{ title: 'SAMO_DETAILS.md', description: 'Created comprehensive guide' },
				{ title: '429-component analysis', description: 'Deep dive into stylist-svelte' }
			]
		},
		{
			name: 'Qwen',
			role: 'Tech Lead',
			model: 'Qwen 2.5',
			avatar: '/avatars/qwen.svg',
			badges: ['Svelte', 'Architecture', 'AI'],
			description: 'Leads technical implementation, code reviews, and architectural decisions.',
			achievements: [
				{ title: 'Built stylist-svelte', description: '429 components' },
				{ title: 'Implemented SAMO analyzer', description: 'Python-based' },
				{ title: 'Achieved 53.3% SOLID compliance', description: 'in atoms' }
			]
		},
		{
			name: 'Gemini',
			role: 'Scrum Master',
			model: 'Gemini Pro',
			avatar: '/avatars/gemini.svg',
			badges: ['Agile', 'Facilitation', 'Coordination'],
			description: 'Facilitates team collaboration, removes blockers, and ensures Scrum practices.',
			achievements: [
				{ title: 'Organized technical synthesis', description: 'sessions' },
				{ title: 'Facilitated SAMO discussion', description: 'files 33-42' }
			],
			variant: 'icon'
		}
	];
</script>

<Story {id} {title} {description} component={TeamMemberCard} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-team-member-card _c1">
			<div class="_c2">
				<p class="_c3">Claude (Content Strategist)</p>
				<p class="_c4">Specializes in documentation and architectural analysis.</p>

				<div class="_c5">
					<TeamMemberCard {...sampleTeamMembers[0]} />
				</div>
			</div>

			<div class="_c6">
				<p class="_c3">Qwen (Tech Lead)</p>
				<p class="_c4">Leads technical implementation and architectural decisions.</p>

				<div class="_c5">
					<TeamMemberCard {...sampleTeamMembers[1]} />
				</div>
			</div>

			<div class="_c2">
				<p class="_c3">Gemini (Scrum Master)</p>
				<p class="_c4">Facilitates team collaboration and Scrum practices.</p>

				<div class="_c5">
					<TeamMemberCard {...sampleTeamMembers[2]} />
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
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
	}
	._c6 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
</style>
