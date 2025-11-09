<script lang="ts">
  import { Blockquote } from '$lib';
  import type { Meta } from '@storybook/svelte';

  const meta: Meta = {
    title: 'Atoms/Typography/Block',
    tags: ['autodocs'],
    argTypes: {
      cite: { control: { type: 'text' } }
    }
  };

  export default meta;
</script>

# Typography Block Elements

## Blockquote

<ComponentStory>
  <script>
    let text = 'Это цитата, которая используется для выделения чужой речи или важной мысли.';
    let cite = 'Имя автора';
  </script>
  
  <div class="space-y-4">
    <Blockquote {cite}>{text}</Blockquote>
    
    <div class="space-y-4">
      <div>
        <label>Цитата: <textarea bind:value={text} rows={3} class="w-full p-2 border" /></label>
      </div>
      
      <div>
        <label>Автор/источник: <input type="text" bind:value={cite} class="w-full p-2 border" /></label>
      </div>
    </div>
  </div>
</ComponentStory>