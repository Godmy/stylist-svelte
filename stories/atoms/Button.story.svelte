<script lang="ts">
  import { Variant, Story } from 'histoire/client'
  import { Button } from '@/components'
  
  let props = {
    label: 'Click me',
    variant: 'primary',
    size: 'md'
  }
  
  const variants = [
    { variant: 'primary', label: 'Primary' },
    { variant: 'secondary', label: 'Secondary' },
    { variant: 'success', label: 'Success' },
    { variant: 'warning', label: 'Warning' },
    { variant: 'danger', label: 'Danger' },
    { variant: 'ghost', label: 'Ghost' },
    { variant: 'link', label: 'Link' }
  ]
  
  const sizes = [
    { size: 'sm', label: 'Small' },
    { size: 'md', label: 'Medium' },
    { size: 'lg', label: 'Large' }
  ]
</script>

<Story title="Atoms/Button" :meta="{ docs: { description: { story: 'Button component for user interaction. Supports different variants and sizes.' } } }">
  <Variant title="Default" :bind:props>
    <div class="p-4">
      <Button {...props}>
        {props.label}
      </Button>
    </div>
  </Variant>
  
  <Variant title="All Variants">
    <div class="p-4 space-y-4">
      {#each variants as { variant, label }}
        <div>
          <h3 class="text-lg font-semibold mb-2">{label}</h3>
          <div class="flex gap-2">
            {#each sizes as { size }}
              <Button {variant} {size}>
                {label} {size}
              </Button>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </Variant>
  
  <Variant title="States">
    <div class="p-4 space-y-4">
      <div class="space-x-2">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
    </div>
  </Variant>
  
  <Variant title="Block Button">
    <div class="p-4">
      <Button block={true} variant="primary">
        Block Button
      </Button>
    </div>
  </Variant>
</Story>
