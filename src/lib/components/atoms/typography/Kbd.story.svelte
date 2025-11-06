<script lang="ts">
  import { Story } from 'stylist-svelte/playground';
  import Kbd from './Kbd.svelte';
</script>

<Story
  id="atoms-kbd"
  title="Kbd"
  category="Atoms"
  component={Kbd}
  description="Компонент для отображения клавиш клавиатуры"
  tags={['keyboard', 'shortcut', 'ui']}
>
  {#snippet children(props: Record<string, any>)}
    <div class="flex items-center space-x-2">
        <Kbd {...props}>Ctrl</Kbd>
        <Kbd {...props}>K</Kbd>
    </div>
  {/snippet}
</Story>