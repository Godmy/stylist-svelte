<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import NotificationItem from './NotificationItem.svelte';
  import Button from '$lib/components/atoms/controls/Button.svelte';

  type NotificationStoryProps = {
    title: string;
    description: string;
    time: string;
    unread: boolean;
    showTags: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'New version ready to deploy' },
    { name: 'description', type: 'text', defaultValue: 'QA team confirmed release 1.12.3.' },
    { name: 'time', type: 'text', defaultValue: '5 minutes ago' },
    { name: 'unread', type: 'boolean', defaultValue: true },
    { name: 'showTags', type: 'boolean', defaultValue: true }
  ];

  const tags = ['Release', 'Critical'];
</script>

<Story
  id="molecules-notification-item"
  title="NotificationItem"
  component={NotificationItem}
  category="Molecules"
  description="Notification list item with read indicator and actions."
  tags={['notifications', 'list']}
  controls={controls}
>
  {#snippet children(props: NotificationStoryProps)}
    <div class="space-y-4 max-w-2xl">
      {#snippet actionsSnippet()}
        <Button variant="ghost" size="sm">Open</Button>
      {/snippet}
      <NotificationItem
        title={props.title}
        description={props.description}
        time={props.time}
        unread={props.unread}
        tags={props.showTags ? tags : []}
        actions={actionsSnippet}
      />

      <NotificationItem
        title="Инцидент закрыт"
        description="Мониторинг зафиксировал нормализацию метрик response time."
        time="Вчера"
        unread={false}
        tags={['Ops', 'Resolved']}
      />

      <NotificationItem
        title="Доступ предоставлен"
        description="Вы добавлены в проект «Marketing Insights»."
        time="3 дня назад"
        unread={false}
      />
    </div>
  {/snippet}
</Story>
