<script lang="ts">
	import type { TeamMemberCardStateProps } from '$stylist/management/interface/recipe/team-member-card';
	import createTeamMemberCardState from './state.svelte';
	import Avatar from '$stylist/user/component/atom/avatar/index.svelte';
	import Badge from '$stylist/information/component/atom/badge/index.svelte';

	let props: TeamMemberCardStateProps = $props();
	const state = createTeamMemberCardState(props);
</script>

<div class="c-team-member-card ${state.classes}">
	<div class="team-member-card__header">
		<div class="team-member-card__avatar-container">
			<Avatar src={state.avatar} size="lg" class="team-member-card__avatar" />
			<div class="team-member-card__info-container">
				<h3 class="team-member-card__name">{state.name}</h3>
				<p class="team-member-card__role">{state.role}</p>
				<p class="team-member-card__model">{state.model}</p>
			</div>
		</div>

		<div class="team-member-card__badge-container">
			{#each state.badges as badge}
				<Badge variant="secondary">{badge}</Badge>
			{/each}
		</div>
	</div>

	<p class="team-member-card__description">{state.description}</p>

	<div class="team-member-card__achievements-container">
		<h4 class="team-member-card__achievements-title">Key Achievements</h4>
		{#each state.achievements as achievement}
			<div class="team-member-card__achievement-item">
				<h5 class="team-member-card__achievement-title">{achievement.title}</h5>
				<p class="team-member-card__achievement-description">{achievement.description}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.team-member-card__base {
		overflow: hidden;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.team-member-card__header {
		padding: 1.5rem;
		padding-bottom: 1rem;
	}

	.team-member-card__avatar-container {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
	}

	.team-member-card__avatar {
		margin-right: 1rem;
		height: 4rem;
		width: 4rem;
		border-radius: 9999px;
		object-fit: cover;
	}

	.team-member-card__info-container {
		min-width: 0;
		flex: 1 1 0%;
	}

	.team-member-card__name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.team-member-card__role {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.team-member-card__model {
		margin-top: 0.25rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-tertiary);
	}

	.team-member-card__badge-container {
		margin-top: 0.75rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.team-member-card__description {
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-bottom: 1rem;
		padding-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.team-member-card__achievements-container {
		padding: 1.5rem;
		padding-top: 1rem;
	}

	.team-member-card__achievements-title {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.team-member-card__achievement-item {
		margin-bottom: 0.5rem;
	}
	.team-member-card__achievement-item:last-child {
		margin-bottom: 0;
	}

	.team-member-card__achievement-title {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.team-member-card__achievement-description {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
</style>
