<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import TagInput from './TagInput.svelte';

  type TagInputStoryProps = {
    label: string;
    placeholder: string;
    description: string;
    allowCustom: boolean;
    maxTags: number;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'label', type: 'text', defaultValue: 'Темы обсуждения' },
    { name: 'placeholder', type: 'text', defaultValue: 'Добавьте теги...' },
    { name: 'description', type: 'text', defaultValue: 'Через Enter добавьте новый тег или выберите из предложенных.' },
    { name: 'allowCustom', type: 'boolean', defaultValue: true },
    { name: 'maxTags', type: 'number', defaultValue: 5, min: 1, max: 10, step: 1 },
    { name: 'disabled', type: 'boolean', defaultValue: false }
  ];

  const suggestions = [
    { id: 'ux', label: 'UX' },
    { id: 'research', label: 'Research' },
    { id: 'performance', label: 'Performance' },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'analytics', label: 'Analytics' }
  ];

  let tags = $state<string[]>(['ux', 'analytics']);
</script>

<Story
  id="molecules-tag-input"
  title="TagInput"
  component={TagInput}
  category="Molecules"
  description="Поле для множественного выбора тегов с подсказками."
  tags={['input', 'tags']}
  controls={controls}
>
  {#snippet children(props: TagInputStoryProps)}
    <div class="space-y-6 max-w-lg">
      <TagInput
        id="tag-input-story"
        bind:value={tags}
        suggestions={suggestions}
        label={props.label}
        placeholder={props.placeholder}
        description={props.description}
        allowCustom={props.allowCustom}
        maxTags={props.maxTags}
        disabled={props.disabled}
      />

      <div class="text-sm text-gray-600">
        Популярные теги: {tags.length ? tags.join(', ') : 'не выбрано'}
      </div>
    </div>
  {/snippet}
</Story>
