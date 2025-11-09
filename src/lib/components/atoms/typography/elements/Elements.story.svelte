<script lang="ts">
  import { Badge, Chip, CodeBlock, Label, Tag } from '$lib';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let variant = 'default';
  let size = 'md';
  let text = 'Sample text';
  let required = false;
  let language = 'javascript';
  let code = 'console.log("Hello, world!");';

  const controls: ControlConfig[] = [
    { name: 'variant', type: 'select', options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'], defaultValue: 'default' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'required', type: 'boolean', defaultValue: false }
  ];
</script>

# Elements

## Badge

<Story title="Badge" {controls}>

  <div class="space-y-4 p-8">
    <Badge variant={variant} size={size}>{text}</Badge>

    <div class="space-y-4">
      <div>
        <label>Variant: 
          <select bind:value={variant}>
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
          <select bind:value={size}>
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

<Story title="Chip" {controls}>

  <div class="space-y-4 p-8">
    <Chip variant={variant} size={size}>{text}</Chip>

    <div class="space-y-4">
      <div>
        <label>Variant: 
          <select bind:value={variant}>
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
          <select bind:value={size}>
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

<Story title="CodeBlock">

  <div class="space-y-4 p-8">
    <CodeBlock {code} {language} />

    <div class="space-y-4">
      <div>
        <label>Language: <input type="text" bind:value={language} /></label>
      </div>

      <div>
        <label>Code: <textarea bind:value={code} rows={5} class="w-full p-2 border" /></label>
      </div>
    </div>
  </div>
</Story>

## Label

<Story title="Label">

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

<Story title="Tag">

  <div class="space-y-4 p-8">
    <Tag variant={variant}>{text}</Tag>

    <div class="space-y-4">
      <div>
        <label>Variant: 
          <select bind:value={variant}>
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