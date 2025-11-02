<script lang="ts">
  import { Variant, Story } from 'histoire/client'
  import { Input } from '@/components'
  
  let props = {
    id: 'input-story',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email'
  }
  
  let value = 'test@example.com';
</script>

<Story title="Atoms/Input" :meta="{ docs: { description: { story: 'Input component for text input with validation support.' } } }">
  <Variant title="Default" :bind:props>
    <div class="p-4">
      <Input 
        id="default-input"
        label="Email"
        type="email"
        placeholder="Enter your email"
        bind:value
      />
    </div>
  </Variant>
  
  <Variant title="Text Input">
    <div class="p-4">
      <Input 
        id="text-input"
        label="Full Name"
        placeholder="Enter your full name"
      />
    </div>
  </Variant>
  
  <Variant title="With Validation Error">
    <div class="p-4">
      <Input 
        id="error-input"
        label="Username"
        placeholder="Enter your username"
        errors={['Username is already taken']}
      />
    </div>
  </Variant>
  
  <Variant title="Number Input">
    <div class="p-4">
      <Input 
        id="number-input"
        label="Age"
        type="number"
        placeholder="Enter your age"
        min={0}
        max={120}
        step={1}
      />
    </div>
  </Variant>
</Story>
