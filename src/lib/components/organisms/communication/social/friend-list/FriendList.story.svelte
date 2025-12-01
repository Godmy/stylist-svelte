<script lang="ts">
  import FriendList from './FriendList.svelte';

  let friends = [
    {
      id: '1',
      name: 'Alice Johnson',
      username: 'alicej',
      avatar: 'https://placehold.co/40x40',
      status: 'online' as const,
      lastSeen: new Date(Date.now() - 60000), // 1 minute ago
      isFavorite: true,
      tags: ['work', 'college']
    },
    {
      id: '2',
      name: 'Bob Smith',
      username: 'bobsmith',
      avatar: 'https://placehold.co/40x40',
      status: 'away' as const,
      lastSeen: new Date(Date.now() - 1200000), // 20 minutes ago
      tags: ['family']
    },
    {
      id: '3',
      name: 'Carol Davis',
      username: 'carold',
      avatar: 'https://placehold.co/40x40',
      status: 'busy' as const,
      lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
      tags: ['work']
    },
    {
      id: '4',
      name: 'David Wilson',
      username: 'davidw',
      avatar: 'https://placehold.co/40x40',
      status: 'offline' as const,
      lastSeen: new Date(Date.now() - 86400000), // 1 day ago
      tags: ['high school', 'gaming']
    },
    {
      id: '5',
      name: 'Emma Thompson',
      username: 'emmat',
      avatar: 'https://placehold.co/40x40',
      status: 'online' as const,
      lastSeen: new Date(Date.now() - 30000), // 30 seconds ago
      tags: ['work', 'travel']
    }
  ];

  let showStatus: boolean = true;
  let showLastSeen: boolean = true;
  let showTags: boolean = true;
  let showSearch: boolean = true;
  let showInviteButton: boolean = true;
  let sortBy: 'name' | 'status' | 'lastSeen' = 'name';
  let sortOrder: 'asc' | 'desc' = 'asc';
  let groupByStatus: boolean = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">FriendList Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive FriendList</h2>
    <div class="max-w-md mx-auto">
      <FriendList 
        {friends}
        {showStatus}
        {showLastSeen}
        {showTags}
        {showSearch}
        {showInviteButton}
        {sortBy}
        {sortOrder}
        {groupByStatus}
        onFriendSelect={(friend) => {
          console.log('Friend selected:', friend.name);
        }}
        onSendMessage={(friend) => {
          console.log('Send message to:', friend.name);
        }}
        onCall={(friend) => {
          console.log('Call:', friend.name);
        }}
        onVideoCall={(friend) => {
          console.log('Video call:', friend.name);
        }}
        onAddFriend={() => {
          console.log('Add friend clicked');
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="show-status" class="flex items-center gap-1">
          <input id="show-status" type="checkbox" bind:checked={showStatus} />
          Show Status
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-lastseen" class="flex items-center gap-1">
          <input id="show-lastseen" type="checkbox" bind:checked={showLastSeen} />
          Show Last Seen
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-tags" class="flex items-center gap-1">
          <input id="show-tags" type="checkbox" bind:checked={showTags} />
          Show Tags
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-search" class="flex items-center gap-1">
          <input id="show-search" type="checkbox" bind:checked={showSearch} />
          Show Search
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-invite" class="flex items-center gap-1">
          <input id="show-invite" type="checkbox" bind:checked={showInviteButton} />
          Show Invite Button
        </label>
      </div>

      <div class="flex items-end">
        <label for="group-status" class="flex items-center gap-1">
          <input id="group-status" type="checkbox" bind:checked={groupByStatus} />
          Group by Status
        </label>
      </div>

      <div>
        <label for="sort-by" class="block text-sm mb-1">Sort By:</label>
        <select
          id="sort-by"
          bind:value={sortBy}
          class="border rounded p-1"
        >
          <option value="name">Name</option>
          <option value="status">Status</option>
          <option value="lastSeen">Last Seen</option>
        </select>
      </div>

      <div>
        <label for="sort-order" class="block text-sm mb-1">Sort Order:</label>
        <select
          id="sort-order"
          bind:value={sortOrder}
          class="border rounded p-1"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">FriendList Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Grouped by Status</h3>
        <div class="max-w-md mx-auto">
          <FriendList 
            {friends}
            groupByStatus={true}
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Without Tags</h3>
        <div class="max-w-md mx-auto">
          <FriendList 
            {friends}
            showTags={false}
            showLastSeen={false}
          />
        </div>
      </div>
    </div>
  </div>
</div>