<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PostCard from './index.svelte';

  type Props = {
    title: string;
    subtitle: string;
    image: string;
    date: string;
    excerpt: string;
    author: string;
    tags: string; // Comma-separated string for tags
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Sample Post Title'
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'A brief subtitle'
    },
    {
      name: 'image',
      type: 'text',
      defaultValue: 'https://via.placeholder.com/600x400'
    },
    {
      name: 'date',
      type: 'text',
      defaultValue: '2023-11-21'
    },
    {
      name: 'excerpt',
      type: 'text',
      defaultValue: 'This is a sample excerpt of the post content. It gives a brief overview of what the post is about.'
    },
    {
      name: 'author',
      type: 'text',
      defaultValue: 'John Doe'
    },
    {
      name: 'tags',
      type: 'text',
      defaultValue: 'Technology,Svelte'
    }
  ];

  function parseTags(tagsString: string): string[] {
    return tagsString.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
  }
</script>

<Story
  id="molecules-post-card"
  title="PostCard"
  component={PostCard}
  category="Molecules"
  description="A versatile card component to display blog posts or articles."
  tags={['post', 'card', 'blog', 'article']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PostCard Story</h2>
      <PostCard
        title={props.title}
        subtitle={props.subtitle}
        image={props.image}
        date={props.date}
        excerpt={props.excerpt}
        author={props.author}
        tags={parseTags(props.tags)}
        actions={[
          { label: 'Read More', onClick: () => console.log('Read More clicked') }
        ]}
      />
    </div>
  {/snippet}
</Story>




