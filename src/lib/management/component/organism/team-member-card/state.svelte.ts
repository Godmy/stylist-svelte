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
	const classes = $derived(props.class == null ? undefined : String(props.class));

	// Computed classes

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
		get restProps() {
			return restProps;
		}
	};
}

export default createTeamMemberCardState;
