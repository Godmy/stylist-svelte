<script lang="ts">
  /**
   * @component TeamMemberCard
   * @description Team member card for displaying team member information
   *
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles team member card display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any team member card
   * - Interface Segregation: Minimal interface via ITeamMemberCardProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   *
   * Atomic Design: Molecule - Composes atoms into a meaningful team member unit
   */

  import type { ITeamMemberCardProps } from '$stylist/design-system/props/team-member-card';
  import { TeamMemberCardStyleManager } from '$stylist/design-system/styles/team-member-card';
  import Avatar from '$stylist/components/atoms/information/media/avatar/index.svelte';
  import Badge from '$stylist/components/atoms/information/typography/elements/badge/index.svelte';

  // Define component props using the interface
  let {
    name,
    role,
    model,
    avatar,
    badges,
    description,
    achievements,
    variant = 'default',
    class: className = ''
  }: ITeamMemberCardProps = $props();

  // Get CSS classes from style manager
  let classes = $derived(TeamMemberCardStyleManager.getBaseClasses(variant, className));
  let headerClasses = $derived(TeamMemberCardStyleManager.getHeaderClasses());
  let avatarContainerClasses = $derived(TeamMemberCardStyleManager.getAvatarContainerClasses());
  let avatarClasses = $derived(TeamMemberCardStyleManager.getAvatarClasses());
  let infoContainerClasses = $derived(TeamMemberCardStyleManager.getInfoContainerClasses());
  let nameClasses = $derived(TeamMemberCardStyleManager.getNameClasses());
  let roleClasses = $derived(TeamMemberCardStyleManager.getRoleClasses());
  let modelClasses = $derived(TeamMemberCardStyleManager.getModelClasses());
  let badgeContainerClasses = $derived(TeamMemberCardStyleManager.getBadgeContainerClasses());
  let descriptionClasses = $derived(TeamMemberCardStyleManager.getDescriptionClasses());
  let achievementsContainerClasses = $derived(TeamMemberCardStyleManager.getAchievementsContainerClasses());
  let achievementsTitleClasses = $derived(TeamMemberCardStyleManager.getAchievementsTitleClasses());
  let achievementItemClasses = $derived(TeamMemberCardStyleManager.getAchievementItemClasses());
  let achievementTitleClasses = $derived(TeamMemberCardStyleManager.getAchievementTitleClasses());
  let achievementDescriptionClasses = $derived(TeamMemberCardStyleManager.getAchievementDescriptionClasses());
</script>

<div class={`c-team-member-card ${classes}`}>
  <div class={headerClasses}>
    <div class={avatarContainerClasses}>
      <Avatar src={avatar} size="lg" class={avatarClasses} />
      <div class={infoContainerClasses}>
        <h3 class={nameClasses}>{name}</h3>
        <p class={roleClasses}>{role}</p>
        <p class={modelClasses}>{model}</p>
      </div>
    </div>

    <div class={badgeContainerClasses}>
      {#each badges as badge}
        <Badge variant="secondary">{badge}</Badge>
      {/each}
    </div>
  </div>

  <p class={descriptionClasses}>{description}</p>

  <div class={achievementsContainerClasses}>
    <h4 class={achievementsTitleClasses}>Key Achievements</h4>
    {#each achievements as achievement}
      <div class={achievementItemClasses}>
        <h5 class={achievementTitleClasses}>{achievement.title}</h5>
        <p class={achievementDescriptionClasses}>{achievement.description}</p>
      </div>
    {/each}
  </div>
</div>


