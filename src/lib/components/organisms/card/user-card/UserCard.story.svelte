<script lang="ts">
  import UserCard from './UserCard.svelte';

  type Presence = 'online' | 'offline' | 'away' | 'busy';
  type Size = 'sm' | 'md' | 'lg';

  let name = 'Alicia Norris';
  let email = 'alicia@orion.software';
  let title = 'Product Manager · Activation';
  let avatar = 'https://i.pravatar.cc/96?img=12';
  let status: Presence = 'online';
  let size: Size = 'md';
  let showAvatar = true;
  let showEmail = true;
  let showTitle = true;
  let showStatus = true;
  let showActions = true;

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

<div class="space-y-8 p-6">
  <section class="rounded-2xl border border-[--color-border-primary] bg-white p-6 shadow-sm">
    <div class="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div class="space-y-3">
        <div>
          <label for="name-input" class="text-sm font-medium text-[--color-text-secondary]">Имя</label>
          <input
            id="name-input"
            type="text"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={name}
          />
        </div>

        <div>
          <label for="email-input" class="text-sm font-medium text-[--color-text-secondary]">Email</label>
          <input
            id="email-input"
            type="email"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={email}
          />
        </div>

        <div>
          <label for="title-input" class="text-sm font-medium text-[--color-text-secondary]">Заголовок</label>
          <input
            id="title-input"
            type="text"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={title}
          />
        </div>

        <div>
          <label for="avatar-input" class="text-sm font-medium text-[--color-text-secondary]">URL аватара</label>
          <input
            id="avatar-input"
            type="url"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={avatar}
          />
        </div>

        <div>
          <label for="status-select" class="text-sm font-medium text-[--color-text-secondary]">Статус</label>
          <select
            id="status-select"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={status}
          >
            <option value="online">Online</option>
            <option value="away">Away</option>
            <option value="busy">Busy</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        <div>
          <label for="size-select" class="text-sm font-medium text-[--color-text-secondary]">Размер</label>
          <select
            id="size-select"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={size}
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </div>

        <div class="grid grid-cols-2 gap-2 text-sm text-[--color-text-secondary]">
          <label class="flex items-center gap-2">
            <input type="checkbox" bind:checked={showAvatar} />
            Аватар
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" bind:checked={showEmail} />
            Email
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" bind:checked={showTitle} />
            Должность
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" bind:checked={showStatus} />
            Статус
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" bind:checked={showActions} />
            Кнопка действий
          </label>
        </div>
      </div>

      <div class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">Live preview</p>
        <div class="mt-4">
          <UserCard
            user={{
              id: 'pm-42',
              name,
              email,
              title,
              avatar,
              status: status as 'online' | 'offline' | 'away' | 'busy'
            }}
            {showAvatar}
            {showEmail}
            {showTitle}
            {showStatus}
            {showActions}
            {size}
          />
        </div>
      </div>
    </div>
  </section>

  <section class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-base font-semibold text-[--color-text-primary]">Roster</h2>
        <p class="text-sm text-[--color-text-secondary]">
          Используйте компактные карточки, чтобы быстро обозревать состав команды.
        </p>
      </div>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-2">
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
  </section>
</div>
