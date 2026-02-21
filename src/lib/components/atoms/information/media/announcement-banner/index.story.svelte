<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import AnnouncementBanner from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'New feature' },
    { name: 'description', type: 'text', defaultValue: 'Try our new announcement banner component.' },
    { name: 'icon', type: 'text', defaultValue: 'https://placehold.co/64x64/0ea5e9/ffffff?text=NEW' }
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
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Announcement Banner Example
        </p>
        <div class="mt-6">
          <AnnouncementBanner title={values.title} description={values.description} icon={values.icon}>
            <div class="text-xs text-[--color-text-secondary]">Extra slot content</div>
          </AnnouncementBanner>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Banner Variations</h3>
        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <AnnouncementBanner
              title="Success"
              description="Your changes were saved successfully."
              icon="https://placehold.co/64x64/10b981/ffffff?text=OK"
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <AnnouncementBanner
              title="Warning"
              description="Review settings before continuing."
              icon="https://placehold.co/64x64/f59e0b/ffffff?text=!"
            />
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
