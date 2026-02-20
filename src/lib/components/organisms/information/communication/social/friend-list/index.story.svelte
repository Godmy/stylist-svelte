<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import FriendList from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showStatus', type: 'boolean', defaultValue: true },
      { name: 'showLastSeen', type: 'boolean', defaultValue: true },
      { name: 'showTags', type: 'boolean', defaultValue: true },
      { name: 'showSearch', type: 'boolean', defaultValue: true },
      { name: 'groupByStatus', type: 'boolean', defaultValue: false },
      { name: 'sortBy', type: 'select', options: ['name', 'status', 'lastSeen'], defaultValue: 'name' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  const friends = [
    {
      id: '1',
      name: 'Alice Johnson',
      username: 'alicej',
      avatar: 'https://placehold.co/40x40',
      status: 'online' as const,
      lastSeen: new Date(Date.now() - 60000),
      isFavorite: true,
      tags: ['work', 'college']
    },
    {
      id: '2',
      name: 'Bob Smith',
      username: 'bobsmith',
      avatar: 'https://placehold.co/40x40',
      status: 'away' as const,
      lastSeen: new Date(Date.now() - 1200000),
      tags: ['family']
    },
    {
      id: '3',
      name: 'Carol Davis',
      username: 'carold',
      avatar: 'https://placehold.co/40x40',
      status: 'busy' as const,
      lastSeen: new Date(Date.now() - 3600000),
      tags: ['work']
    }
  ];

  function handleFriendSelect(friend: any) {
    console.log('Friend selected:', friend.name);
  }

  function handleSendMessage(friend: any) {
    console.log('Send message to:', friend.name);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={FriendList}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-friend-list grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Friend List Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive friend list with customizable options.</p>

        <div class="mt-6 max-w-md mx-auto">
          <FriendList
            {friends}
            showStatus={props.showStatus}
            showLastSeen={props.showLastSeen}
            showTags={props.showTags}
            showSearch={props.showSearch}
            groupByStatus={props.groupByStatus}
            sortBy={props.sortBy}
            onFriendSelect={handleFriendSelect}
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Friend List Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different friend list configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Grouped by Status</p>
            <div class="max-w-md mx-auto">
              <FriendList
                {friends}
                groupByStatus={true}
                onFriendSelect={handleFriendSelect}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Tags</p>
            <div class="max-w-md mx-auto">
              <FriendList
                {friends}
                showTags={false}
                showLastSeen={false}
                onFriendSelect={handleFriendSelect}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
