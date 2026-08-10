import type { UserCardProps } from '$stylist/commerce/interface/recipe/user-card-props';

export function createUserCardState(props: UserCardProps) {
	const size = $derived(props.size ?? 'md');
	const showEmail = $derived(props.showEmail ?? true);
	const showRole = $derived(props.showRole ?? true);
	const showAvatar = $derived(!!props.user?.avatar || !!props.user?.name);
	const hasAvatar = $derived(!!props.user?.avatar);
	const avatarInitial = $derived(props.user?.name?.charAt(0)?.toUpperCase() ?? '?');

	const rootClass = $derived(`user-card__root user-card--${size} ${props.class ?? ''}`.trim());
	const restProps = $derived.by(() => {
		const {
			class: _class,
			size: _size,
			showEmail: _showEmail,
			showRole: _showRole,
			user: _user,
			...rest
		} = props;
		return rest;
	});
	const avatarContainerClass = $derived('user-card__avatar-container');
	const avatarClass = $derived('user-card__avatar');
	const avatarPlaceholderClass = $derived('user-card__avatar-placeholder');
	const avatarInitialsClass = $derived('user-card__avatar-initials');
	const statusIndicatorClass = $derived('user-card__status-indicator');
	const contentClass = $derived('user-card__content');
	const nameContainerClass = $derived('user-card__name-container');
	const nameClass = $derived('user-card__name');
	const titleClass = $derived('user-card__title');
	const emailClass = $derived('user-card__email');
	const actionsContainerClass = $derived('user-card__actions-container');
	const moreButtonClass = $derived('user-card__more-button');
	const showActions = $derived(!!props.user?.actions || true);
	const showTitle = $derived(true);

	return {
		get size() {
			return size;
		},
		get showEmail() {
			return showEmail;
		},
		get showRole() {
			return showRole;
		},
		get showAvatar() {
			return showAvatar;
		},
		get hasAvatar() {
			return hasAvatar;
		},
		get avatarInitial() {
			return avatarInitial;
		},
		get rootClass() {
			return rootClass;
		},
		get restProps() {
			return restProps;
		},
		get avatarContainerClass() {
			return avatarContainerClass;
		},
		get avatarClass() {
			return avatarClass;
		},
		get avatarPlaceholderClass() {
			return avatarPlaceholderClass;
		},
		get avatarInitialsClass() {
			return avatarInitialsClass;
		},
		get statusIndicatorClass() {
			return statusIndicatorClass;
		},
		get contentClass() {
			return contentClass;
		},
		get nameContainerClass() {
			return nameContainerClass;
		},
		get nameClass() {
			return nameClass;
		},
		get titleClass() {
			return titleClass;
		},
		get emailClass() {
			return emailClass;
		},
		get actionsContainerClass() {
			return actionsContainerClass;
		},
		get moreButtonClass() {
			return moreButtonClass;
		},
		get showActions() {
			return showActions;
		},
		get showTitle() {
			return showTitle;
		}
	};
}

export default createUserCardState;
