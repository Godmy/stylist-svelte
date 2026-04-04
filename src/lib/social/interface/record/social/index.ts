import type { CommentSystemContract } from '$stylist/social/interface/component/comment-system/contract';
import type { CommentThreadContract } from '$stylist/social/interface/component/comment-thread/contract';
import type { FriendListContract } from '$stylist/social/interface/component/friend-list/contract';
import type { SocialActivityFeedContract } from '$stylist/social/interface/component/social-activity-feed/contract';
import type { SocialFeedContract } from '$stylist/social/interface/component/social-feed/contract';
import type { SocialLoginContract } from '$stylist/social/interface/component/social-login/contract';
import type { SocialShareContract } from '$stylist/social/interface/component/social-share/contract';

export interface MapSocialContract {
	CommentSystem: CommentSystemContract;
	CommentThread: CommentThreadContract;
	FriendList: FriendListContract;
	SocialActivityFeed: SocialActivityFeedContract;
	SocialFeed: SocialFeedContract;
	SocialLogin: SocialLoginContract;
	SocialShare: SocialShareContract;
}
