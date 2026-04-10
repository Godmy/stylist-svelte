import type { FRIEND_LIST_PROPS } from '$stylist/social/type/struct/friend-list';

export type FriendListState = ReturnType<typeof createFriendListState>;

export function createFriendListState(props: FRIEND_LIST_PROPS) {
  let searchQuery = $state('');

  const setSearchQuery = (value: string) => {
    searchQuery = value;
  };

  const handleSearchInputEvent = (event: Event) => {
    const target = event.target as HTMLInputElement;
    searchQuery = target.value;
  };

  const handleFriendClickEvent = (friend: any) => {
    props.onFriendSelect?.(friend);
  };

  const handleSendMessageEvent = (friend: any) => {
    props.onSendMessage?.(friend);
  };

  const handleCallEvent = (friend: any) => {
    props.onCall?.(friend);
  };

  const handleVideoCallEvent = (friend: any) => {
    props.onVideoCall?.(friend);
  };

  const handleAddFriendEvent = () => {
    props.onAddFriend?.();
  };

  const filteredFriends = $derived.by(() => {
    let result = [...(props.friends ?? [])];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(friend =>
        friend.name.toLowerCase().includes(query) ||
        (friend.username && friend.username.toLowerCase().includes(query)) ||
        (friend.tags && friend.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }

    result.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      const sortBy = props.sortBy ?? 'name';
      const sortOrder = props.sortOrder ?? 'asc';

      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'lastSeen':
          aValue = a.lastSeen || new Date(0);
          bValue = b.lastSeen || new Date(0);
          break;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  });

  const friendsByStatus = $derived.by(() => {
    if (!props.groupByStatus) return { all: filteredFriends };

    const online = filteredFriends.filter(f => f.status === 'online');
    const away = filteredFriends.filter(f => f.status === 'away');
    const busy = filteredFriends.filter(f => f.status === 'busy');
    const offline = filteredFriends.filter(f => f.status === 'offline');

    return { online, away, busy, offline };
  });

  const hostClass = $derived(props.class ?? '');
  const itemClass = $derived(props.itemClass ?? '');
  const headerClass = $derived(props.headerClass ?? '');
  const searchClass = $derived(props.searchClass ?? '');
  const listClass = $derived(props.listClass ?? '');

  return {
    searchQuery,
    setSearchQuery,
    handleSearchInputEvent,
    handleFriendClickEvent,
    handleSendMessageEvent,
    handleCallEvent,
    handleVideoCallEvent,
    handleAddFriendEvent,
    filteredFriends,
    friendsByStatus,
    hostClass,
    itemClass,
    headerClass,
    searchClass,
    listClass,
  };
}

export default createFriendListState;
