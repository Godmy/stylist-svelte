<script lang="ts">
  import Story from '$lib/playground/components/Story.svelte';
  import Breadcrumb from './Breadcrumb.svelte';

  const items = [
    { label: 'Главная', href: '#' },
    { label: 'Продукты', href: '#' },
    { label: 'Категория', href: '#' },
    { label: 'Товар' },
  ];
  
  const controls = [{
    name: 'items',
    type: 'object' as const,
    defaultValue: items
  }];
</script>

<Story
  id="molecules-breadcrumb"
  component={Breadcrumb}
  title="Breadcrumb"
  controls={controls}
>
  {#snippet children(props: Record<string, any>)}
    <Breadcrumb items={props.items || items} />
  {/snippet}
</Story>