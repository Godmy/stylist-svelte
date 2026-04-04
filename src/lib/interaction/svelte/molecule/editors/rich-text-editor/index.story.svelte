<script lang="ts">
  import Story from '$stylist/development/svelte/playground/Story.svelte';
  import RichTextEditor from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

  const controls = [
    {
      name: 'showToolbar',
      type: 'boolean' as TokenControllerType,
      defaultValue: true,
      description: 'Whether to show the toolbar'
    },
    {
      name: 'toolbarPosition',
      type: 'select' as TokenControllerType,
      defaultValue: 'top',
      options: ['top', 'bottom'],
      description: 'Position of the toolbar'
    },
    {
      name: 'placeholder',
      type: 'text' as TokenControllerType,
      defaultValue: 'РќР°РїРёС€РёС‚Рµ Р·Р°РјРµС‚РєСѓ РёР»Рё РІСЃС‚Р°РІСЊС‚Рµ РіРѕС‚РѕРІС‹Р№ С€Р°Р±Р»РѕРЅвЂ¦',
      description: 'Placeholder text for the editor'
    }
  ];

  const templateContent = `<h2>Р•Р¶РµРЅРµРґРµР»СЊРЅС‹Р№ СЃС‚Р°С‚СѓСЃ</h2>
<p>РљРѕРјР°РЅРґР° РІС‹РїРѕР»РЅРёР»Р° 87% РїР»Р°РЅР°. РќР°РёР±РѕР»СЊС€РёР№ РїСЂРѕРіСЂРµСЃСЃ вЂ” РІ СЂР°Р·СЂР°Р±РѕС‚РєРµ СЂРµРґР°РєС‚РѕСЂР°.</p>
<ul>
  <li><strong>Product</strong>: Р·Р°РІРµСЂС€РµРЅС‹ С‚РµСЃС‚С‹.</li>
  <li><strong>Design</strong>: handoff v2.1 РІ Figma.</li>
  <li><strong>Engineering</strong>: РґРµРїР»РѕР№ staging СЃСЂРµРґС‹.</li>
</ul>`;

  function handleInput(content: string) {
    console.log('Input received:', content.substring(0, 50) + '...');
  }

  function handleChange(content: string) {
    console.log('Content changed:', content.substring(0, 50) + '...');
  }
</script>

<Story
  {controls}
  title="RichTextEditor Component"
  description="A rich text editor component with formatting capabilities"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <RichTextEditor
      value={templateContent}
      placeholder={controlValues.placeholder}
      showToolbar={controlValues.showToolbar}
      toolbarPosition={controlValues.toolbarPosition}
      onValueInput={handleInput}
      onValueChange={handleChange}
      onInput={handleInput}
      onChange={handleChange}
    />
  </div>

  {/snippet}
</Story>



