import type { FollowButtonRestProps } from '../follow-button-rest-props';

export type FollowButtonProps = FollowButtonRestProps & {
	isFollowing?: boolean;
	showText?: boolean;
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	class?: string;
	followingText?: string;
	unfollowText?: string;
	onFollow?: () => void;
	onUnfollow?: () => void;
	disabled?: boolean;
};
