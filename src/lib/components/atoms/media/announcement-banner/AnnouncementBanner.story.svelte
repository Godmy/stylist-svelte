<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AnnouncementBanner from './AnnouncementBanner.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    title?: string;
    description?: string;
    icon?: string;
    class?: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Announcement Title'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'This is a sample announcement message'
    }
  ];
</script>

<Story
  id="molecules-announcement-banner"
  title="AnnouncementBanner"
  component={AnnouncementBanner}
  category="Molecules"
  description="A banner component to display important announcements."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AnnouncementBanner Story</h2>
      <AnnouncementBanner
        title={props.title ?? 'Announcement Title'}
        description={props.description ?? 'This is a sample announcement message'}
        icon={props.icon}
        className={props.class}
      />
    </div>
  {/snippet}
</Story>
