import { UserCardStyleManager, type UserCardSize, type UserStatus } from '$stylist/commerce/class/style-manager/user-card';
import type { Snippet } from 'svelte';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

export interface User {
	id: string;
	name: string;
	email?: string;
	avatar?: string;
	title?: string;
	status?: UserStatus;
	actions?: Snippet;
	metadata?: Record<string, any>;
}

export interface UserCardProps extends InformationHTMLAttributes<HTMLDivElement> {
	user: User;
	showAvatar?: boolean;
	showEmail?: boolean;
	showTitle?: boolean;
	showStatus?: boolean;
	showActions?: boolean;
	size?: UserCardSize;
	class?: string;
	avatarClass?: string;
	contentClass?: string;
	statusClass?: string;
	actionsClass?: string;
}

export function createUserCardState(props: UserCardProps) {
	const showAvatar = $derived(props.showAvatar ?? true);
	const showEmail = $derived(props.showEmail ?? true);
	const showTitle = $derived(props.showTitle ?? true);
	const showStatus = $derived(props.showStatus ?? true);
	const showActions = $derived(props.showActions ?? false);
	const size = $derived<UserCardSize>(props.size ?? 'md');

	const sizeClasses = $derived(UserCardStyleManager.getSizeClasses(size));
	const rootClass = $derived(UserCardStyleManager.getRootClass(props.class));
	const avatarContainerClass = $derived(UserCardStyleManager.getAvatarContainerClass());
	const avatarClass = $derived(
		UserCardStyleManager.getAvatarClass(sizeClasses.avatarSize, props.avatarClass)
	);
	const avatarPlaceholderClass = $derived(
		UserCardStyleManager.getAvatarPlaceholderClass(sizeClasses.avatarSize)
	);
	const avatarInitialsClass = $derived(UserCardStyleManager.getAvatarInitialsClass());
	const contentClass = $derived(UserCardStyleManager.getContentClass(props.contentClass));
	const nameContainerClass = $derived(UserCardStyleManager.getNameContainerClass());
	const nameClass = $derived(UserCardStyleManager.getNameClass(sizeClasses.textSize));
	const titleClass = $derived(UserCardStyleManager.getTitleClass(sizeClasses.textSize));
	const emailClass = $derived(UserCardStyleManager.getEmailClass(sizeClasses.textSize));
	const actionsContainerClass = $derived(
		UserCardStyleManager.getActionsContainerClass(props.actionsClass)
	);
	const moreButtonClass = $derived(UserCardStyleManager.getMoreButtonClass());

	const statusIndicatorClass = $derived.by(() => {
		if (!props.user.status || !showStatus) return '';
		return UserCardStyleManager.getStatusIndicatorClass(props.user.status);
	});

	const hasAvatar = $derived(!!props.user.avatar);
	const hasActions = $derived(!!props.user.actions);
	const avatarInitial = $derived(
		props.user.name ? props.user.name.charAt(0).toUpperCase() : '?'
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			user: _user,
			showAvatar: _showAvatar,
			showEmail: _showEmail,
			showTitle: _showTitle,
			showStatus: _showStatus,
			showActions: _showActions,
			size: _size,
			avatarClass: _avatarClass,
			contentClass: _contentClass,
			statusClass: _statusClass,
			actionsClass: _actionsClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get showAvatar() {
			return showAvatar;
		},
		get showEmail() {
			return showEmail;
		},
		get showTitle() {
			return showTitle;
		},
		get showStatus() {
			return showStatus;
		},
		get showActions() {
			return showActions;
		},
		get size() {
			return size;
		},
		get sizeClasses() {
			return sizeClasses;
		},
		get rootClass() {
			return rootClass;
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
		get hasAvatar() {
			return hasAvatar;
		},
		get hasActions() {
			return hasActions;
		},
		get avatarInitial() {
			return avatarInitial;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createUserCardState;
