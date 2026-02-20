<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import AnnouncementBanner from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'New feature' },
    { name: 'description', type: 'text', defaultValue: 'Try our new announcement banner component.' },
    { name: 'icon', type: 'text', defaultValue: '' }
  ];
</script>

<Story
  id="atoms-announcement-banner"
  title="Announcement Banner"
  component={AnnouncementBanner}
  category="Atoms"
  description="An announcement banner component for displaying important notifications."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Announcement Banner Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">An announcement banner component for displaying important notifications.</p>

        <div class="mt-6">
          <AnnouncementBanner
            title={props.title}
            description={props.description}
            icon={props.icon}
          >
            <div>Extra content slot</div>
          </AnnouncementBanner>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Banner Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different banner configurations with various properties.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Success Notification</p>
            <AnnouncementBanner
              title="Success!"
              description="Your changes have been saved successfully."
              icon="вњ…"
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Warning Notification</p>
            <AnnouncementBanner
              title="Warning"
              description="Please review your settings before proceeding."
              icon="вљ пёЏ"
            />
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

