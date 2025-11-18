<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import { Home, Settings, User } from 'lucide-svelte';
  import IconButton from './IconButton.svelte';

  const variantOptions = ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'] as const;
  const sizeOptions = ['sm', 'md', 'lg'] as const;

  type IconButtonStoryProps = {
    variant: (typeof variantOptions)[number];
    size: (typeof sizeOptions)[number];
    disabled: boolean;
    loading: boolean;
    icon: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'ghost',
      options: [...variantOptions]
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: [...sizeOptions]
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'loading',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'icon',
      type: 'select',
      defaultValue: 'home',
      options: ['home', 'settings', 'user']
    }
  ];

  // Function to get icon based on string
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'settings': return Settings;
      case 'user': return User;
      default: return Home;
    }
  };
</script>

<Story
  id="atoms-icon-button"
  title="IconButton"
  component={IconButton}
  category="Atoms"
  description="Button that primarily displays an icon."
  tags={['action', 'form', 'icon']}
  controls={controls}
>
  {#snippet children(props: IconButtonStoryProps)}
    <div class="flex flex-col gap-4">
      <div class="flex gap-4 items-center">
        <IconButton
          variant={props.variant}
          size={props.size}
          disabled={props.disabled}
          loading={props.loading}
          ariaLabel={`Icon button with ${props.icon}`}
          icon={getIcon(props.icon)}
        />
        <span>Icon Button: {props.icon}</span>
      </div>
    </div>
  {/snippet}
</Story>