import { TeamMemberCardStyleManager } from '$stylist/management/class/style-manager/team-member-card';
import type { TeamMemberCardStateProps } from '$stylist/management/interface/recipe/team-member-card';

export function createTeamMemberCardState(props: TeamMemberCardStateProps) {
	// Props with defaults
	const name = $derived(props.name);
	const role = $derived(props.role);
	const model = $derived(props.model);
	const avatar = $derived(props.avatar);
	const badges = $derived(props.badges ?? []);
	const description = $derived(props.description);
	const achievements = $derived(props.achievements ?? []);
	const variant = $derived(props.variant ?? 'default');

	// Computed classes
	const classes = $derived(TeamMemberCardStyleManager.getBaseClasses(variant as any, props.class ?? ''));
	const headerClasses = $derived(TeamMemberCardStyleManager.getHeaderClasses());
	const avatarContainerClasses = $derived(TeamMemberCardStyleManager.getAvatarContainerClasses());
	const avatarClasses = $derived(TeamMemberCardStyleManager.getAvatarClasses());
	const infoContainerClasses = $derived(TeamMemberCardStyleManager.getInfoContainerClasses());
	const nameClasses = $derived(TeamMemberCardStyleManager.getNameClasses());
	const roleClasses = $derived(TeamMemberCardStyleManager.getRoleClasses());
	const modelClasses = $derived(TeamMemberCardStyleManager.getModelClasses());
	const badgeContainerClasses = $derived(TeamMemberCardStyleManager.getBadgeContainerClasses());
	const descriptionClasses = $derived(TeamMemberCardStyleManager.getDescriptionClasses());
	const achievementsContainerClasses = $derived(
		TeamMemberCardStyleManager.getAchievementsContainerClasses()
	);
	const achievementsTitleClasses = $derived(
		TeamMemberCardStyleManager.getAchievementsTitleClasses()
	);
	const achievementItemClasses = $derived(TeamMemberCardStyleManager.getAchievementItemClasses());
	const achievementTitleClasses = $derived(
		TeamMemberCardStyleManager.getAchievementTitleClasses()
	);
	const achievementDescriptionClasses = $derived(
		TeamMemberCardStyleManager.getAchievementDescriptionClasses()
	);

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			name: _name,
			role: _role,
			model: _model,
			avatar: _avatar,
			badges: _badges,
			description: _description,
			achievements: _achievements,
			variant: _variant,
			...rest
		} = props;
		return rest;
	});

	return {
		get name() {
			return name;
		},
		get role() {
			return role;
		},
		get model() {
			return model;
		},
		get avatar() {
			return avatar;
		},
		get badges() {
			return badges;
		},
		get description() {
			return description;
		},
		get achievements() {
			return achievements;
		},
		get variant() {
			return variant;
		},
		get classes() {
			return classes;
		},
		get headerClasses() {
			return headerClasses;
		},
		get avatarContainerClasses() {
			return avatarContainerClasses;
		},
		get avatarClasses() {
			return avatarClasses;
		},
		get infoContainerClasses() {
			return infoContainerClasses;
		},
		get nameClasses() {
			return nameClasses;
		},
		get roleClasses() {
			return roleClasses;
		},
		get modelClasses() {
			return modelClasses;
		},
		get badgeContainerClasses() {
			return badgeContainerClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get achievementsContainerClasses() {
			return achievementsContainerClasses;
		},
		get achievementsTitleClasses() {
			return achievementsTitleClasses;
		},
		get achievementItemClasses() {
			return achievementItemClasses;
		},
		get achievementTitleClasses() {
			return achievementTitleClasses;
		},
		get achievementDescriptionClasses() {
			return achievementDescriptionClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createTeamMemberCardState;
