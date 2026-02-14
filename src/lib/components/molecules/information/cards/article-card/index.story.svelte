<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ArticleCard from './index.svelte';

  type Props = {
    title?: string;
    subtitle?: string;
    image?: string;
    class?: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Sample Article Title'
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'This is a sample subtitle for the article card'
    },
    {
      name: 'image',
      type: 'text',
      defaultValue: 'https://placehold.co/300x200'
    }
  ];
</script>

<Story
  id="molecules-article-card"
  title="ArticleCard"
  component={ArticleCard}
  category="Molecules"
  description="A card component to display article information."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ArticleCard Story</h2>
      <ArticleCard
        {...props}
        actions={[
          { label: 'Read', onClick: () => console.log('Read clicked') },
          { label: 'Share', onClick: () => console.log('Share clicked') }
        ]}
      />
    </div>
  {/snippet}
</Story>

