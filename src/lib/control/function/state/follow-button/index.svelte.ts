import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

type FollowButtonProps = InteractionHTMLAttributes<HTMLButtonElement> & {
	isFollowing?: boolean;
	showText?: boolean;
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	class?: string;
	followingText?: string;
	unfollowText?: string;
	disabled?: boolean;
	onFollow?: () => void | Promise<void>;
	onUnfollow?: () => void | Promise<void>;
};

export function createFollowButtonState(props: FollowButtonProps) {
	const isFollowing = $derived(props.isFollowing ?? false);
	const showText = $derived(props.showText ?? true);
	const variant = $derived(props.variant ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const followingText = $derived(props.followingText ?? 'Following');
	const unfollowText = $derived(props.unfollowText ?? 'Follow');

	const buttonVariant = $derived(isFollowing ? 'outline' : variant);
	const buttonText = $derived(isFollowing ? followingText : unfollowText);

	const classes = $derived(
		[
			'follow-button',
			isFollowing
				? 'text-[var(--color-text-primary)] bg-[var(--color-background-secondary)] hover:bg-[var(--color-background-tertiary)]'
				: variant === 'primary'
					? 'text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)]'
					: variant === 'secondary'
						? 'text-[var(--color-text-inverse)] bg-[var(--color-secondary-600)] hover:bg-[var(--color-secondary-700)]'
						: variant === 'outline'
							? 'text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] border border-[var(--color-border-primary)]'
							: 'text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]',
			size === 'sm' ? 'text-xs px-2 py-1' : size === 'lg' ? 'text-base px-4 py-2' : 'text-sm px-3 py-1.5',
			'font-medium rounded-md',
			disabled ? 'opacity-[var(--opacity-75)] cursor-not-allowed' : 'cursor-pointer',
			props.class
		]
			.filter(Boolean)
			.join(' ')
	);

	const ariaLabel = $derived(isFollowing ? 'Unfollow user' : 'Follow user');
	let isPending = $state(false);

	return {
		get isFollowing() {
			return isFollowing;
		},
		get showText() {
			return showText;
		},
		get variant() {
			return buttonVariant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get text() {
			return buttonText;
		},
		get classes() {
			return classes;
		},
		get ariaLabel() {
			return ariaLabel;
		},
		get isPending() {
			return isPending;
		},
		async handleToggle() {
			if (disabled || isPending) return;

			isPending = true;

			if (isFollowing) {
				await props.onUnfollow?.();
			} else {
				await props.onFollow?.();
			}

			isPending = false;
		}
	};
}

export default createFollowButtonState;
