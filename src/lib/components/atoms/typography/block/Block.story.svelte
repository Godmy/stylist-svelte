<script lang="ts">
  import { atoms } from '$lib';
  import { Story } from '$lib/playground';

  const { Blockquote } = atoms;
  import type { ControlConfig } from '$lib/playground';

  let text = $state('Это цитата, которая используется для выделения чужой речи или важной мысли.');
  let cite = $state('Имя автора');

  const controls: ControlConfig[] = [
    { name: 'text', type: 'text', defaultValue: 'Это цитата, которая используется для выделения чужой речи или важной мысли.' },
    { name: 'cite', type: 'text', defaultValue: 'Имя автора' }
  ];
</script>

# Typography Block Elements

## Blockquote

<Story id="blockquote-story" title="Blockquote" component={Blockquote} {controls}>

  <div class="space-y-4 p-8">
    <Blockquote {cite}>{text}</Blockquote>

    <div class="space-y-4">
      <div>
        <label>Цитата: 
          <textarea bind:value={text} rows={3} class="w-full p-2 border"></textarea>
        </label>
      </div>

      <div>
        <label>Автор/источник: 
          <input type="text" bind:value={cite} class="w-full p-2 border" />
        </label>
      </div>
    </div>
  </div>

</Story>
