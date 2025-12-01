<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import ScheduledNotification from './ScheduledNotification.svelte';

    type StoryNotification = {
        id: string;
        title: string;
        message: string;
        scheduledTime: Date;
        status: 'scheduled' | 'sent' | 'cancelled';
        type: 'info' | 'success' | 'warning' | 'error';
    };

    type Props = {
        notifications?: StoryNotification[];
    };

    const defaultNotifications: StoryNotification[] = [
        {
            id: '1',
            title: 'Scheduled Notification',
            message: 'This is a scheduled notification',
            scheduledTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
            status: 'scheduled',
            type: 'info'
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'notifications',
            type: 'object',
            defaultValue: defaultNotifications
        }
    ];
</script>

<Story
    id="molecules-scheduled-notification"
    title="ScheduledNotification"
    component={ScheduledNotification}
    category="Molecules"
    description="Notification component with scheduling functionality"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <ScheduledNotification
                notifications={props.notifications || defaultNotifications}
            />
        </div>
    {/snippet}
</Story>
