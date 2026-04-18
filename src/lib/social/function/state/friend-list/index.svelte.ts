import { friendListHandleCall } from '$stylist/social/function/script/friend-list-handle-call';
import { friendListHandleFriendClick } from '$stylist/social/function/script/friend-list-handle-friend-click';
import { friendListHandleSearchInput } from '$stylist/social/function/script/friend-list';
import { friendListHandleSendMessage } from '$stylist/social/function/script/friend-list-handle-send-message';
import { friendListHandleVideoCall } from '$stylist/social/function/script/friend-list-handle-video-call';
import type { FRIEND_LIST_FRIEND, FRIEND_LIST_PROPS } from '$stylist/social/type/struct/friend-list';

export function createFriendListState(props: FRIEND_LIST_PROPS) {
	let searchQuery = $state('');
	const friends = $derived(props.friends ?? []);
	const filteredFriends = $derived(friends.filter((friend) => friend.name.toLowerCase().includes(searchQuery.toLowerCase()) || (friend.username ?? '').toLowerCase().includes(searchQuery.toLowerCase())));
	const friendsByStatus = $derived.by(() => {
		if (!props.groupByStatus) {
			return { all: filteredFriends };
		}

		return filteredFriends.reduce<Record<string, FRIEND_LIST_FRIEND[]>>((groups, friend) => {
			groups[friend.status] = [...(groups[friend.status] ?? []), friend];
			return groups;
		}, {});
	});

	function handleSearchInputEvent(event: Event): void {
		friendListHandleSearchInput(event, (value) => { searchQuery = value; });
	}

	return {
		get hostClass() { return props.class ?? ''; },
		get headerClass() { return props.headerClass ?? ''; },
		get searchClass() { return props.searchClass ?? ''; },
		get listClass() { return props.listClass ?? ''; },
		get searchQuery() { return searchQuery; },
		get filteredFriends() { return filteredFriends; },
		get friendsByStatus(): Record<string, FRIEND_LIST_FRIEND[]> { return friendsByStatus; },
		handleSearchInputEvent,
		handleFriendClickEvent: (friend: FRIEND_LIST_FRIEND) => friendListHandleFriendClick(friend, props.onFriendSelect),
		handleSendMessageEvent: (friend: FRIEND_LIST_FRIEND) => friendListHandleSendMessage(friend, props.onSendMessage),
		handleCallEvent: (friend: FRIEND_LIST_FRIEND) => friendListHandleCall(friend, props.onCall),
		handleVideoCallEvent: (friend: FRIEND_LIST_FRIEND) => friendListHandleVideoCall(friend, props.onVideoCall),
		handleAddFriendEvent: () => props.onAddFriend?.()
	};
}

export default createFriendListState;
