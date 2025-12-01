<script lang="ts">
  import { atoms } from '$lib';
  import { Story } from '$lib/playground';

  const { Badge, Chip, CodeBlock, Label, Tag } = atoms;
  import type { ControlConfig } from '$lib/playground';

  type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';
  type BadgeSize = 'sm' | 'md' | 'lg';
  type ChipVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  type ChipSize = 'sm' | 'md' | 'lg';
  type TagVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';

  let badgeVariant = $state<BadgeVariant>('default');
  let badgeSize = $state<BadgeSize>('md');
  let chipVariant = $state<ChipVariant>('primary');
  let chipSize = $state<ChipSize>('md');
  let tagVariant = $state<TagVariant>('neutral');
  let text = $state('Sample text');
  let required = $state(false);
  let language = $state('javascript');
  let code = $state('console.log("Hello, world!");');

  const controls: ControlConfig[] = [
    { name: 'badgeVariant', type: 'select', options: ['default', 'success', 'warning', 'danger', 'info'], defaultValue: 'default' },
    { name: 'badgeSize', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'chipVariant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'], defaultValue: 'primary' },
    { name: 'chipSize', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'tagVariant', type: 'select', options: ['neutral', 'primary', 'success', 'warning', 'danger'], defaultValue: 'neutral' }
  ];
</script>

# Elements

## Badge

<Story id="badge-story" title="Badge" component={Badge} {controls}>

  <div class="space-y-4 p-8">
    <Badge variant={badgeVariant} size={badgeSize}>{text}</Badge>

    <div class="space-y-4">
      <div>
        <label>Variant: 
          <select bind:value={badgeVariant}>
            <option value="default">Default</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="danger">Danger</option>
          </select>
        </label>
      </div>

      <div>
        <label>Size: 
          <select bind:value={badgeSize}>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </label>
      </div>

      <div>
        <label>Text: <input type="text" bind:value={text} /></label>
      </div>
    </div>
  </div>
</Story>

## Chip

<Story id="chip-story" title="Chip" component={Chip} {controls}>

  <div class="space-y-4 p-8">
    <Chip variant={chipVariant} size={chipSize}>{text}</Chip>

    <div class="space-y-4">
      <div>
        <label>Variant: 
          <select bind:value={chipVariant}>
            <option value="default">Default</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="danger">Danger</option>
          </select>
        </label>
      </div>

      <div>
        <label>Size: 
          <select bind:value={chipSize}>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </label>
      </div>

      <div>
        <label>Text: <input type="text" bind:value={text} /></label>
      </div>
    </div>
  </div>
</Story>

## CodeBlock

<Story id="codeblock-story" title="CodeBlock" component={CodeBlock}>

  <div class="space-y-4 p-8">
    <CodeBlock {language}>
      {code}
    </CodeBlock>

    <div class="space-y-4">
      <div>
        <label>Language: <input type="text" bind:value={language} /></label>
      </div>

      <div>
        <label>Code: <textarea bind:value={code} rows={5} class="w-full p-2 border"></textarea></label>
      </div>
    </div>
  </div>
</Story>

## Label

<Story id="label-story" title="Label" component={Label}>

  <div class="space-y-4 p-8">
    <Label required={required}>{text}</Label>
    <input type="text" class="mt-1 p-2 border rounded" placeholder="Input field" />

    <div class="space-y-4">
      <div>
        <label>
          <input type="checkbox" bind:checked={required} /> Required
        </label>
      </div>

      <div>
        <label>Text: <input type="text" bind:value={text} /></label>
      </div>
    </div>
  </div>
</Story>

## Tag

<Story id="tag-story" title="Tag" component={Tag} {controls}>

  <div class="space-y-4 p-8">
    <Tag variant={tagVariant} text={text} />

    <div class="space-y-4">
      <div>
        <label>Variant: 
          <select bind:value={tagVariant}>
            <option value="default">Default</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="danger">Danger</option>
          </select>
        </label>
      </div>

      <div>
        <label>Text: <input type="text" bind:value={text} /></label>
      </div>
    </div>
  </div>
</Story>
