<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SocialActivityFeed from './SocialActivityFeed.svelte';

    type ActivityType =
        | 'like'
        | 'comment'
        | 'follow'
        | 'share'
        | 'mention'
        | 'achievement'
        | 'system'
        | 'announcement';

    type User = {
        id: string;
        name: string;
        username?: string;
        avatar?: string;
        isVerified?: boolean;
    };

    type Activity = {
        id: string;
        type: ActivityType;
        actor: User;
        target?: User; // For follow activities
        subject?: string; // Object of the activity (e.g., post title)
        content?: string; // Additional content
        timestamp: Date;
        relatedUrl?: string;
        isRead?: boolean;
        isImportant?: boolean;
    };

    type Props = {
        activities?: Activity[];
        showAvatars?: boolean;
        showTimestamp?: boolean; // Renamed from showTimestamps
        showReadStatus?: boolean;
        enableFiltering?: boolean;
        showLoadMore?: boolean;
        maxActivities?: number;
    };

    const defaultActivities: Activity[] = [
        {
            id: 'activity-1',
            type: 'like',
            actor: { id: 'user-1', name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1' },
            subject: 'post',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
            isRead: false
        },
        {
            id: 'activity-2',
            type: 'comment',
            actor: { id: 'user-2', name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
            subject: 'photo',
            content: 'Great photo!',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
            isRead: true
        },
        {
            id: 'activity-3',
            type: 'follow',
            actor: { id: 'user-3', name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/150?img=3' },
            target: { id: 'user-4', name: 'You' },
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
            isRead: false
        },
        {
            id: 'activity-4',
            type: 'share',
            actor: { id: 'user-5', name: 'Alice Williams', avatar: 'https://i.pravatar.cc/150?img=4' },
            subject: 'article',
            relatedUrl: 'https://example.com/article',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
            isRead: true
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'showAvatars',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showTimestamp',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showReadStatus',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'enableFiltering',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showLoadMore',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'maxActivities',
            type: 'number',
            defaultValue: 10
        }
    ];
</script>

<Story
    id="molecules-social-activity-feed"
    title="SocialActivityFeed"
    component={SocialActivityFeed}
    category="Molecules"
    description="Social activity feed component for displaying user activities"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SocialActivityFeed
                activities={props.activities || defaultActivities}
                showAvatars={props.showAvatars}
                showTimestamp={props.showTimestamp}
                showReadStatus={props.showReadStatus}
                enableFiltering={props.enableFiltering}
                showLoadMore={props.showLoadMore}
                maxActivities={props.maxActivities}
            />
        </div>
    {/snippet}
</Story>