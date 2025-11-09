<script lang="ts">
  import { Caption, Heading, Paragraph, SectionHeading, Small, Text } from '$lib';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let size = 'md';
  let weight = 'normal';
  let text = 'Sample text';
  let level = 1;

  const controls: ControlConfig[] = [
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'weight', type: 'select', options: ['normal', 'bold'], defaultValue: 'normal' },
    { name: 'level', type: 'select', options: [1, 2, 3, 4, 5, 6], defaultValue: 1 }
  ];
</script>

# Text

## Text

<Story title="Text" {controls}>
  <div class="space-y-4 p-8">
    <Text size={size} weight={weight}>{text}</Text>

    <div class="space-y-4">
      <div>
        <label>
          Size: 
          <select bind:value={size}>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Weight: 
          <select bind:value={weight}>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
          </select>
        </label>
      </div>

      <div>
        <label>Text: <input type="text" bind:value={text} class="w-full p-2 border" /></label>
      </div>
    </div>
  </div>
</Story>

## Heading

<Story title="Heading" {controls}>
  <div class="space-y-4 p-8">
    <Heading level={level} weight={weight}>{text}</Heading>

    <div class="space-y-4">
      <div>
        <label>
          Level: 
          <select bind:value={level}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Weight: 
          <select bind:value={weight}>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
          </select>
        </label>
      </div>

      <div>
        <label>Text: <input type="text" bind:value={text} class="w-full p-2 border" /></label>
      </div>
    </div>
  </div>
</Story>

## SectionHeading

<Story title="SectionHeading">
  <div class="space-y-4 p-8">
    <SectionHeading level={level}>{text}</SectionHeading>

    <div class="space-y-4">
      <div>
        <label>
          Level: 
          <select bind:value={level}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </label>
      </div>

      <div>
        <label>Text: <input type="text" bind:value={text} class="w-full p-2 border" /></label>
      </div>
    </div>
  </div>
</Story>

## Paragraph

<Story title="Paragraph">
  <div class="space-y-4 p-8">
    <Paragraph>{text}</Paragraph>

    <div>
      <label>Text: <textarea bind:value={text} rows={3} class="w-full p-2 border" /></label>
    </div>
  </div>
</Story>

## Caption

<Story title="Caption">
  <div class="space-y-4 p-8">
    <Caption>{text}</Caption>

    <div>
      <label>Caption: <input type="text" bind:value={text} class="w-full p-2 border" /></label>
    </div>
  </div>
</Story>

## Small

<Story title="Small">
  <div class="space-y-4 p-8">
    <Small>{text}</Small>

    <div>
      <label>Small text: <input type="text" bind:value={text} class="w-full p-2 border" /></label>
    </div>
  </div>
</Story>