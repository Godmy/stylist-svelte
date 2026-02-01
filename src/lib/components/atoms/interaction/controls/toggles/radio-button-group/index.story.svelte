<script>
  import RadioButtonGroup from './RadioButtonGroup.svelte';

  const options = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'xlarge', label: 'Extra Large' }
  ];

  export let value = 'medium';
</script>

<div class="p-4">
  <h1>RadioButtonGroup Story</h1>
  <RadioButtonGroup
    {options}
    {value}
    class="my-2"
  />
</div>
