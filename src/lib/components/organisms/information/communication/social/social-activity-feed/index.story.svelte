<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import SocialActivityFeed from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showAvatars', type: 'boolean', defaultValue: true },
      { name: 'showTimestamp', type: 'boolean', defaultValue: true },
      { name: 'filterType', type: 'select', options: ['all', 'unread', 'important'], defaultValue: 'all' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

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
    target?: User;
    subject?: string;
    content?: string;
    timestamp: Date;
    relatedUrl?: string;
    isRead?: boolean;
    isImportant?: boolean;
  };

  const sampleActivities: Activity[] = [
    {
      id: '1',
      type: 'like',
      actor: { id: 'u1', name: 'Alice Johnson', avatar: 'https://placehold.co/40x40', isVerified: true },
      subject: 'your post',
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: '2',
      type: 'follow',
      actor: { id: 'u2', name: 'Bob Smith', avatar: 'https://placehold.co/40x40' },
      target: { id: 'u3', name: 'You' },
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: '3',
      type: 'comment',
      actor: { id: 'u4', name: 'Carol Davis', avatar: 'https://placehold.co/40x40' },
      subject: 'your photo',
      content: 'Great shot!',
      timestamp: new Date(Date.now() - 7200000)
    }
  ];

  function handleActivityClick(activity: Activity) {
    console.log('Activity clicked:', activity);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={SocialActivityFeed}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-social-activity-feed grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Social Activity Feed Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive social activity feed with customizable options.</p>

        <div class="mt-6 max-w-md mx-auto">
          <SocialActivityFeed
            activities={sampleActivities}
            showAvatars={values.showAvatars}
            showTimestamp={values.showTimestamp}
            onActivityClick={handleActivityClick}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Activity Feed Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different activity feed configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Avatars</p>
            <div class="max-w-md mx-auto">
              <SocialActivityFeed
                activities={sampleActivities}
                showAvatars={false}
                onActivityClick={handleActivityClick}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Important Only</p>
            <div class="max-w-md mx-auto">
              <SocialActivityFeed
                activities={sampleActivities}
                onActivityClick={handleActivityClick}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
