<script>
  import MultiSelect from './MultiSelect.svelte';

  const options = [
    { value: 'react', label: 'React' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' }
  ];
</script>

<div class="p-4">
  <h1>MultiSelect Story</h1>
  <MultiSelect 
    {options}
    class="my-2"
  />
</div>