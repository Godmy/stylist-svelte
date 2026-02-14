<script lang="ts">
  import UserStatus from './index.svelte';

  type Presence = 'online' | 'away' | 'offline' | 'typing';

  let fullName = 'Kai Rodriguez';
  let presence: Presence = 'typing';
  let showAvatar = true;
  let showName = true;
  let showStatusText = true;
  let lastSeenMinutesAgo = 12;

  const presenceTiles: Array<{
    id: string;
    title: string;
    description: string;
    status: Presence;
    lastSeenMinutesAgo?: number;
  }> = [
    {
      id: 'focus-time',
      title: 'Focus time',
      description: 'Hide notifications while pairing.',
      status: 'away'
    },
    {
      id: 'heads-down',
      title: 'Heads down',
      description: 'Deep work mode for async collaboration.',
      status: 'offline',
      lastSeenMinutesAgo: 57
    },
    {
      id: 'chatty',
      title: 'Chatty',
      description: 'Actively typing in a thread.',
      status: 'typing'
    },
    {
      id: 'pair-available',
      title: 'Available',
      description: 'Signal that pairing is welcome.',
      status: 'online'
    }
  ];

  const minutesToDate = (minutesAgo: number) =>
    new Date(Date.now() - minutesAgo * 60 * 1000);
</script>

<div class="space-y-8 p-6">
  <section class="rounded-2xl border border-[--color-border-primary] bg-white p-6 shadow-sm">
    <h1 class="text-lg font-semibold text-[--color-text-primary]">UserStatus</h1>
    <p class="text-sm text-[--color-text-secondary]">
      Конфигурируйте компонент и наблюдайте, как индикатор статуса реагирует на параметры.
    </p>

    <div class="mt-6 flex flex-wrap gap-6">
      <div class="space-y-4">
        <label class="text-sm font-medium text-[--color-text-secondary]" for="user-name-input">Имя пользователя</label>
        <input
          id="user-name-input"
          type="text"
          class="w-64 rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
          bind:value={fullName}
          placeholder="Введите имя"
        />

        <label class="text-sm font-medium text-[--color-text-secondary]" for="user-status-select">Статус</label>
        <select
          id="user-status-select"
          class="w-64 rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
          bind:value={presence}
        >
          <option value="online">Online</option>
          <option value="away">Away</option>
          <option value="typing">Typing</option>
          <option value="offline">Offline</option>
        </select>

        {#if presence === 'offline'}
          <label class="text-sm font-medium text-[--color-text-secondary]" for="last-seen-input">Минут назад</label>
          <input
            id="last-seen-input"
            type="number"
            min="1"
            max="240"
            class="w-64 rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={lastSeenMinutesAgo}
          />
        {/if}
      </div>

      <div class="flex flex-col gap-3">
        <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
          <input type="checkbox" bind:checked={showAvatar} />
          Показывать аватар
        </label>
        <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
          <input type="checkbox" bind:checked={showName} />
          Показывать имя
        </label>
        <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
          <input type="checkbox" bind:checked={showStatusText} />
          Показывать текст статуса
        </label>
      </div>

      <div class="grow rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">Live preview</p>
        <div class="mt-4 flex items-center gap-4">
          <UserStatus
            user={{
              id: 'demo-user',
              name: fullName,
              status: presence,
              lastSeen: presence === 'offline' ? minutesToDate(lastSeenMinutesAgo) : undefined
            }}
            {showAvatar}
            {showName}
            {showStatusText}
          />
        </div>
      </div>
    </div>
  </section>

  <section class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
    <h2 class="text-base font-semibold text-[--color-text-primary]">Паттерны присутствия</h2>
    <p class="text-sm text-[--color-text-secondary]">
      Сравните разные сценарии доступности, чтобы убедиться, что визуальные сигналы читаемы.
    </p>

    <div class="mt-6 grid gap-4 md:grid-cols-2">
      {#each presenceTiles as tile}
        <article class="rounded-2xl border border-[--color-border-primary] bg-white p-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-semibold text-[--color-text-primary]">{tile.title}</p>
              <p class="text-xs text-[--color-text-secondary]">{tile.description}</p>
            </div>
            <UserStatus
              user={{
                id: tile.id,
                name: tile.title,
                status: tile.status,
                lastSeen: tile.lastSeenMinutesAgo
                  ? minutesToDate(tile.lastSeenMinutesAgo)
                  : undefined
              }}
              showAvatar={true}
              showName={false}
              showStatusText={false}
            />
          </div>
        </article>
      {/each}
    </div>
  </section>
</div>
