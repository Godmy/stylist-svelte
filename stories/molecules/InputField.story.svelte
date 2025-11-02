<script lang="ts">
  import { Variant, Story } from 'histoire/client'
  import { InputField } from '@/components'
  
  let value = 'test@example.com';
</script>

<Story title="Molecules/InputField" :meta="{ docs: { description: { story: 'InputField component combines label, input, and error handling into a single component.' } } }">
  <Variant title="Default">
    <div class="p-4">
      <InputField 
        id="default-inputfield"
        label="Email"
        placeholder="Enter your email"
        bind:value
      />
    </div>
  </Variant>
  
  <Variant title="With Error">
    <div class="p-4">
      <InputField 
        id="error-inputfield"
        label="Username"
        placeholder="Enter your username"
        error="Username is already taken"
        bind:value
      />
    </div>
  </Variant>
  
  <Variant title="Required Field">
    <div class="p-4">
      <InputField 
        id="required-inputfield"
        label="Full Name"
        placeholder="Enter your full name"
        required={true}
        bind:value
      />
    </div>
  </Variant>
</Story>
