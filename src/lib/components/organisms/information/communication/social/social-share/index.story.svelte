<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import SocialShare from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showCopyLink', type: 'boolean', defaultValue: true },
      { name: 'showEmbed', type: 'boolean', defaultValue: false },
      { name: 'showSave', type: 'boolean', defaultValue: false },
      { name: 'showLike', type: 'boolean', defaultValue: false }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  type SocialPlatform = 'facebook' | 'twitter' | 'linkedin' | 'pinterest' | 'reddit' | 'whatsapp' | 'telegram' | 'email' | 'copy';

  const url = 'https://example.com';
  const pageTitle = 'Example Page';
  const pageDescription = 'This is a description of the example page.';
  const platforms: SocialPlatform[] = ['facebook', 'twitter', 'linkedin', 'email', 'copy'];

  function handleShare(platform: SocialPlatform) {
    console.log('Shared on:', platform);
  }

  function handleSave() {
    console.log('Saved');
  }

  function handleLike() {
    console.log('Liked');
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={SocialShare}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-social-share grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Social Share Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive social share with customizable options.</p>

        <div class="mt-6">
          <SocialShare
            {url}
            title={pageTitle}
            description={pageDescription}
            {platforms}
            showCopyLink={values.showCopyLink}
            showEmbed={values.showEmbed}
            showSave={values.showSave}
            showLike={values.showLike}
            onShare={handleShare}
            onSave={handleSave}
            onLike={handleLike}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Social Share Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different social share configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Minimal</p>
            <div>
              <SocialShare
                {url}
                title={pageTitle}
                platforms={['twitter', 'facebook']}
                showCopyLink={false}
                onShare={handleShare}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Full Featured</p>
            <div>
              <SocialShare
                {url}
                title={pageTitle}
                description={pageDescription}
                {platforms}
                showCopyLink={true}
                showEmbed={true}
                showSave={true}
                showLike={true}
                onShare={handleShare}
                onSave={handleSave}
                onLike={handleLike}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

