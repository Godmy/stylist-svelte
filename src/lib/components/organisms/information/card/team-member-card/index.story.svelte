<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import TeamMemberCard from './index.svelte';
  import type { ITeamMemberCardProps } from '$stylist/design-system/props/team-member-card';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'name', type: 'text', defaultValue: 'Claude' },
      { name: 'role', type: 'text', defaultValue: 'Content Strategist' },
      { name: 'variant', type: 'select', options: ['default', 'featured'], defaultValue: 'default' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample data for the team member card
  const sampleTeamMembers: ITeamMemberCardProps[] = [
    {
      name: 'Claude',
      role: 'Content Strategist',
      model: 'Claude Sonnet 4.5',
      avatar: '/avatars/claude.svg',
      badges: ['Content', 'Architecture', 'Analysis'],
      description: 'Specializes in documentation, content strategy, and architectural analysis. Known for deep research and critical thinking.',
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
      variant: 'featured'
    }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={TeamMemberCard}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-team-member-card grid w-full gap-8 lg:grid-cols-[1fr_1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Claude (Content Strategist)
        </p>
        <p class="mt-1 text-[--color-text-primary]">Specializes in documentation and architectural analysis.</p>

        <div class="mt-6">
          <TeamMemberCard {...sampleTeamMembers[0]} />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Qwen (Tech Lead)
        </p>
        <p class="mt-1 text-[--color-text-primary]">Leads technical implementation and architectural decisions.</p>

        <div class="mt-6">
          <TeamMemberCard {...sampleTeamMembers[1]} />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Gemini (Scrum Master)
        </p>
        <p class="mt-1 text-[--color-text-primary]">Facilitates team collaboration and Scrum practices.</p>

        <div class="mt-6">
          <TeamMemberCard {...sampleTeamMembers[2]} />
        </div>
      </div>
    </section>
  {/snippet}
</Story>


