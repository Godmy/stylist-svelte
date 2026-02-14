<script lang="ts">
  type BaseComponentProps = {
    class?: string;
    'data-testid'?: string;
  };

  type Props = BaseComponentProps & {
    open?: boolean;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    activeColor?: string;
    onValueInput?: (event: MouseEvent) => void;
    onValueChange?: (event: MouseEvent) => void;
    /** @deprecated use onValueChange */
    onClick?: (event: MouseEvent) => void;
  };

  let { 
    open = false, 
    size = 'md', 
    color = 'currentColor', 
    activeColor = 'currentColor',
    class: className = '',
    onValueInput,
    onValueChange,
    onClick = (event: MouseEvent) => {}
  }: Props = $props();
  
  let ariaLabel = $derived(open ? 'Close menu' : 'Open menu');
  let buttonSize = $derived(size === 'sm' ? 'h-5 w-5' : size === 'lg' ? 'h-7 w-7' : 'h-6 w-6');
  
  const handleClick = (e: MouseEvent) => {
    onValueInput?.(e);
    onValueChange?.(e);
    onClick(e);
  };
</script>

<button 
  class="burger-menu relative flex flex-col justify-center items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded {className}" 
  aria-label={ariaLabel}
  aria-expanded={open}
  tabindex="0"
  onclick={handleClick}
>
  <div class="relative {buttonSize}" role="img" aria-label="Menu toggle icon">
    <!-- Hamburger lines -->
    <span 
      class="absolute block h-0.5 w-6 rounded bg-current transition-all duration-300 ease-in-out"
      style={`top: calc(50% - 6px); background-color: ${open ? activeColor : color}; transform: ${open ? 'rotate(45deg) translate(0, 0)' : 'rotate(0) translate(0, 0)'};`}
      aria-hidden="true"
    ></span>
    <span 
      class="absolute block h-0.5 w-6 rounded bg-current transition-all duration-300 ease-in-out {open ? 'opacity-0' : 'opacity-100'}"
      style={`top: 50%; transform: translateY(-50%); background-color: ${color};`}
      aria-hidden="true"
    ></span>
    <span 
      class="absolute block h-0.5 w-6 rounded bg-current transition-all duration-300 ease-in-out"
      style={`top: calc(50% + 6px); background-color: ${open ? activeColor : color}; transform: ${open ? 'rotate(-45deg) translate(0, 0)' : 'rotate(0) translate(0, 0)'};`}
      aria-hidden="true"
    ></span>
  </div>
</button>
