import type { SlotCommentSystem as CommentSystemContract } from '$stylist/social/interface/slot/comment-system';
import type { SlotCommentThread as CommentThreadContract } from '$stylist/social/interface/slot/comment-thread';
import type { FriendListContract } from '$stylist/social/type/struct/friend-list-contract';
import type { SocialActivityFeedContract } from '$stylist/social/type/struct/social-activity-feed-contract';
import type { SocialFeedContract } from '$stylist/social/type/struct/social-feed-contract';
import type { SocialLoginContract } from '$stylist/social/type/struct/social-login-contract';
import type { SocialShareContract } from '$stylist/social/type/struct/social-share-contract';

export interface ContractSocial {
	CommentSystem: CommentSystemContract;
	CommentThread: CommentThreadContract;
	FriendList: FriendListContract;
	SocialActivityFeed: SocialActivityFeedContract;
	SocialFeed: SocialFeedContract;
	SocialLogin: SocialLoginContract;
	SocialShare: SocialShareContract;
}
