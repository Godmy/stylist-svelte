import type { AnyProperty } from '$stylist/layout/type/record/any-property';
import type { SlotCommentSystem } from '$stylist/social/interface/slot/comment-system';
import type { SlotCommentThread } from '$stylist/social/interface/slot/comment-thread';
export interface ContractSocial {
	CommentSystem: SlotCommentSystem;
	CommentThread: SlotCommentThread;
	FriendList: AnyProperty;
	SocialActivityFeed: AnyProperty;
	SocialFeed: AnyProperty;
	SocialLogin: AnyProperty;
	SocialShare: AnyProperty;
}
