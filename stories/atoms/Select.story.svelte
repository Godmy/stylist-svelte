<script lang="ts">
  import { Variant, Story } from 'histoire/client'
  import { Select } from '@/components'
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' }
  ];
  
  let value = 'option2';
</script>

<Story title="Atoms/Select" :meta="{ docs: { description: { story: 'Select component for choosing from a list of options.' } } }">
  <Variant title="Default">
    <div class="p-4">
      <Select 
        id="default-select"
        label="Choose an option"
        {options}
        bind:value
      />
    </div>
  </Variant>
  
  <Variant title="With Placeholder">
    <div class="p-4">
      <Select 
        id="placeholder-select"
        label="Country"
        placeholder="Select your country"
        {options}
        bind:value
      />
    </div>
  </Variant>
  
  <Variant title="With Validation Error">
    <div class="p-4">
      <Select 
        id="error-select"
        label="Role"
        placeholder="Select your role"
        {options}
        errors={['Please select a role']}
        bind:value
      />
    </div>
  </Variant>
  
  <Variant title="Disabled">
    <div class="p-4">
      <Select 
        id="disabled-select"
        label="Status"
        placeholder="Select status"
        {options}
        disabled={true}
        bind:value
      />
    </div>
  </Variant>
</Story>
