<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import BurgerMenu from './index.svelte';

  let open = false;
  
  const sizeOptions = ['sm', 'md', 'lg'];

  const controls: ControlConfig[] = [
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: sizeOptions,
      description: 'Size of the burger menu'
    },
    {
      name: 'color',
      type: 'color',
      defaultValue: 'currentColor',
      description: 'Color of the burger menu when closed'
    },
    {
      name: 'activeColor',
      type: 'color',
      defaultValue: 'currentColor',
      description: 'Color of the burger menu when open'
    }
  ];
  
  function toggleMenu() {
    open = !open;
  }
</script>

<Story
  id="atoms-burger-menu"
  title="BurgerMenu"
  component={BurgerMenu}
  category="Atoms/Interaction/Controls/Menus"
  description="BurgerMenu component for toggling navigation menus."
  tags={['menu', 'navigation', 'hamburger', 'toggle']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="p-4">
      <BurgerMenu
        {...props}
        open={open}
        onValueChange={toggleMenu}
      />
    </div>
  {/snippet}
  
  {#snippet variants}
    <div class="grid grid-cols-1 gap-4 p-4">
      <div class="flex items-center space-x-4">
        <span>Closed:</span>
        <BurgerMenu open={false} size="md" />
      </div>
      <div class="flex items-center space-x-4">
        <span>Open:</span>
        <BurgerMenu open={true} size="md" />
      </div>
      <div class="flex items-center space-x-4">
        <span>Small:</span>
        <BurgerMenu open={false} size="sm" />
      </div>
      <div class="flex items-center space-x-4">
        <span>Large:</span>
        <BurgerMenu open={false} size="lg" />
      </div>
    </div>
  {/snippet}
</Story>
