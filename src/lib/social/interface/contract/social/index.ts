import type { AnyProperty } from '$stylist/layout/type/object/any-property';
import type { SlotCommentSystem as CommentSystemContract } from '$stylist/social/interface/slot/comment-system';
import type { SlotCommentThread as CommentThreadContract } from '$stylist/social/interface/slot/comment-thread';

export interface ContractSocial {
	CommentSystem: CommentSystemContract;
	CommentThread: CommentThreadContract;
	FriendList: AnyProperty;
	SocialActivityFeed: AnyProperty;
	SocialFeed: AnyProperty;
	SocialLogin: AnyProperty;
	SocialShare: AnyProperty;
}
