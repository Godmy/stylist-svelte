<script lang="ts">
  import { Story } from '$lib/playground';
  import Kbd from './Kbd.svelte';
</script>

<Story
  id="atoms-kbd"
  title="Kbd"
  category="Atoms"
  component={Kbd}
  description="РљРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РєР»Р°РІРёС€ РєР»Р°РІРёР°С‚СѓСЂС‹"
  tags={['keyboard', 'shortcut', 'ui']}
>
  {#snippet children(props: Record<string, any>)}
    <div class="flex items-center space-x-2">
        <Kbd {...props}>Ctrl</Kbd>
        <Kbd {...props}>K</Kbd>
    </div>
  {/snippet}
</Story>
