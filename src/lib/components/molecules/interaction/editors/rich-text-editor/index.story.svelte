<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import RichTextEditor from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/interaction/controls';

  const controls = [
    {
      name: 'showToolbar',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show the toolbar'
    },
    {
      name: 'toolbarPosition',
      type: 'select' as ControlType,
      defaultValue: 'top',
      options: ['top', 'bottom'],
      description: 'Position of the toolbar'
    },
    {
      name: 'placeholder',
      type: 'text' as ControlType,
      defaultValue: 'Напишите заметку или вставьте готовый шаблон…',
      description: 'Placeholder text for the editor'
    }
  ];

  const templateContent = `<h2>Еженедельный статус</h2>
<p>Команда выполнила 87% плана. Наибольший прогресс — в разработке редактора.</p>
<ul>
  <li><strong>Product</strong>: завершены тесты.</li>
  <li><strong>Design</strong>: handoff v2.1 в Figma.</li>
  <li><strong>Engineering</strong>: деплой staging среды.</li>
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
