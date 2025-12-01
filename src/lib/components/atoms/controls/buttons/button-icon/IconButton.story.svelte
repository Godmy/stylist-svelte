<script lang="ts">
  import { Story } from '$lib/playground';
  import { Home, Settings, User } from 'lucide-svelte';
  import IconButton from './IconButton.svelte';
  import type { ControlConfig } from '$lib/playground';

  // Define IconButtonProps type locally
  type IconButtonProps = {
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
  };

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'variant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'], defaultValue: 'ghost' },
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { name: 'disabled', type: 'boolean', defaultValue: false },
      { name: 'loading', type: 'boolean', defaultValue: false }
    ]
  } = $props<{
    id: string;
    title: string;
    description: string;
    controls: ControlConfig[];
  }>();

  // Function to get the icon based on the selected icon name
  function getIcon(iconName: string) {
    switch(iconName) {
      case 'settings':
        return Settings;
      case 'user':
        return User;
      default:
        return Home;
    }
  }

  // State to track which icon to display
  let selectedIcon = $state('home');
</script>

<Story
  {id}
  {title}
  {description}
  component={IconButton}
  category="Atoms"
  controls={controls}
>
  {#snippet children(props: IconButtonProps)}
    <IconButton
      variant={props.variant}
      size={props.size}
      disabled={props.disabled}
      loading={props.loading}
      ariaLabel="Icon button"
      icon={getIcon(selectedIcon)}
    />
  {/snippet}
</Story>