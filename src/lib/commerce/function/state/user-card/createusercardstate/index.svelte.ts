import type { UserCardProps } from '$stylist/commerce/interface/recipe/user-card-props';

export function createUserCardState(props: UserCardProps) {
	const size = $derived(props.size ?? 'md');
	const showEmail = $derived(props.showEmail ?? true);
	const showRole = $derived(props.showRole ?? true);
	const showAvatar = $derived(!!props.user?.avatar || !!props.user?.name);
	const hasAvatar = $derived(!!props.user?.avatar);
	const avatarInitial = $derived(props.user?.name?.charAt(0)?.toUpperCase() ?? '?');

	const rootClass = $derived(
		`user-card user-card-${size} ${props.class ?? ''}`.trim()
	);
	const restProps = $derived.by(() => {
		const { class: _class, size: _size, showEmail: _showEmail, showRole: _showRole, user: _user, ...rest } = props;
		return rest;
	});
	const avatarContainerClass = $derived('user-card__avatar-container relative');
	const avatarClass = $derived('user-card__avatar w-full h-full object-cover rounded-full');
	const avatarPlaceholderClass = $derived('user-card__avatar-placeholder w-full h-full bg-[var(--color-background-tertiary)] rounded-full flex items-center justify-center');
	const avatarInitialsClass = $derived('user-card__avatar-initials text-lg font-semibold text-[var(--color-text-secondary)]');
	const statusIndicatorClass = $derived('user-card__status-indicator absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[var(--color-background-primary)] rounded-full');
	const contentClass = $derived('user-card__content flex-1');
	const nameContainerClass = $derived('user-card__name-container flex items-center justify-between');
	const nameClass = $derived('user-card__name font-semibold text-lg');
	const titleClass = $derived('user-card__title text-sm text-[var(--color-text-secondary)]');
	const emailClass = $derived('user-card__email text-sm text-[var(--color-text-secondary)]');
	const actionsContainerClass = $derived('user-card__actions flex items-center');
	const moreButtonClass = $derived('user-card__more-button p-1 hover:bg-[var(--color-background-secondary)] rounded');
	const showActions = $derived(!!props.user?.actions || true);
	const showTitle = $derived(true);

	return {
		get size() { return size; },
		get showEmail() { return showEmail; },
		get showRole() { return showRole; },
		get showAvatar() { return showAvatar; },
		get hasAvatar() { return hasAvatar; },
		get avatarInitial() { return avatarInitial; },
		get rootClass() { return rootClass; },
		get restProps() { return restProps; },
		get avatarContainerClass() { return avatarContainerClass; },
		get avatarClass() { return avatarClass; },
		get avatarPlaceholderClass() { return avatarPlaceholderClass; },
		get avatarInitialsClass() { return avatarInitialsClass; },
		get statusIndicatorClass() { return statusIndicatorClass; },
		get contentClass() { return contentClass; },
		get nameContainerClass() { return nameContainerClass; },
		get nameClass() { return nameClass; },
		get titleClass() { return titleClass; },
		get emailClass() { return emailClass; },
		get actionsContainerClass() { return actionsContainerClass; },
		get moreButtonClass() { return moreButtonClass; },
		get showActions() { return showActions; },
		get showTitle() { return showTitle; }
	};
}

export default createUserCardState;
