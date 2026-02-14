<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import UserCard from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { name: 'showAvatar', type: 'boolean', defaultValue: true },
      { name: 'showStatus', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  type RosterUser = {
    id: string;
    name: string;
    title: string;
    status: 'online' | 'offline' | 'away' | 'busy';
    avatar: string;
    email: string;
  };

  const roster: RosterUser[] = [
    {
      id: 'sup-1',
      name: 'Mika Howard',
      title: 'Support Lead',
      status: 'away',
      avatar: 'https://i.pravatar.cc/96?img=26',
      email: 'mika@orion.software'
    },
    {
      id: 'fre-19',
      name: 'Oscar Bentley',
      title: 'Motion Designer',
      status: 'offline',
      avatar: 'https://i.pravatar.cc/96?img=48',
      email: 'oscar@orion.software'
    },
    {
      id: 'ops-77',
      name: 'Kara Sung',
      title: 'Operations',
      status: 'busy',
      avatar: 'https://i.pravatar.cc/96?img=13',
      email: 'kara@orion.software'
    }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={UserCard}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props: { size?: 'sm' | 'md' | 'lg'; showAvatar?: boolean; showStatus?: boolean })}
    <section class="sb-organisms-user-card grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary User Card Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive user card with customizable options.</p>

        <div class="mt-6">
          <UserCard
            user={{
              id: 'pm-42',
              name: 'Alicia Norris',
              email: 'alicia@orion.software',
              title: 'Product Manager · Activation',
              avatar: 'https://i.pravatar.cc/96?img=12',
              status: 'online'
            }}
            showAvatar={props.showAvatar}
            showEmail={true}
            showTitle={true}
            showStatus={props.showStatus}
            showActions={true}
            size={props.size}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">User Roster</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Compact user cards to quickly review team members.
        </p>

        <div class="mt-5 space-y-4">
          {#each roster as member}
            <UserCard
              user={member}
              showEmail={false}
              showStatus={true}
              showTitle={true}
              showActions={false}
              size="sm"
            />
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>

