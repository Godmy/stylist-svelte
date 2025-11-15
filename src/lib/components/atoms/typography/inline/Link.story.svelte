<script lang="ts">
  import { Story, type ControlConfig } from '$lib/playground';
  import Link from './Link.svelte';

  const controls: ControlConfig[] = [
    {
      name: 'href',
      type: 'text',
      defaultValue: '#'
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'underline']
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: ['sm', 'md', 'lg']
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'underline',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'target',
      type: 'select',
      defaultValue: '_self',
      options: ['_self', '_blank', '_parent', '_top']
    },
    {
      name: 'text',
      type: 'text',
      defaultValue: 'Перейти по ссылке'
    }
  ];
</script>

<Story
  id="atoms-link"
  title="Link"
  category="Atoms"
  component={Link}
  description="Ссылка с различными вариантами стиля"
  tags={['navigation', 'link', 'anchor']}
  controls={controls}
>
  {#snippet children(props: Record<string, any>)}
    <Link
      href={props.href}
      variant={props.variant}
      size={props.size}
      disabled={props.disabled}
      underline={props.underline}
      target={props.target}
      text={props.text}
    />
  {/snippet}
</Story>