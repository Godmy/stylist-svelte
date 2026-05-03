<script lang="ts">
	import type { TeamMemberCardStateProps } from '$stylist/management/interface/recipe/team-member-card';
	import { TeamMemberCardStyleManager } from '$stylist/management/class/style-manager/team-member-card';
	import { createTeamMemberCardState } from '$stylist/management/function/state/team-member-card';
	import Avatar from '$stylist/media/component/atom/avatar/index.svelte';
	import Badge from '$stylist/typography/component/atom/badge/index.svelte';

	let props: TeamMemberCardStateProps = $props();
	const state = createTeamMemberCardState(props);
</script>

<div class={`c-team-member-card ${state.classes}`}>
	<div class={state.headerClasses}>
		<div class={state.avatarContainerClasses}>
			<Avatar src={state.avatar} size="lg" class={state.avatarClasses} />
			<div class={state.infoContainerClasses}>
				<h3 class={state.nameClasses}>{state.name}</h3>
				<p class={state.roleClasses}>{state.role}</p>
				<p class={state.modelClasses}>{state.model}</p>
			</div>
		</div>

		<div class={state.badgeContainerClasses}>
			{#each state.badges as badge}
				<Badge variant="secondary">{badge}</Badge>
			{/each}
		</div>
	</div>

	<p class={state.descriptionClasses}>{state.description}</p>

	<div class={state.achievementsContainerClasses}>
		<h4 class={state.achievementsTitleClasses}>Key Achievements</h4>
		{#each state.achievements as achievement}
			<div class={state.achievementItemClasses}>
				<h5 class={state.achievementTitleClasses}>{achievement.title}</h5>
				<p class={state.achievementDescriptionClasses}>{achievement.description}</p>
			</div>
		{/each}
	</div>
</div>

