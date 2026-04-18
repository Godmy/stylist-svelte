import { DropdownMenuStyleManager } from '$stylist/control/class/style-manager/dropdown-menu';
import type { DropdownMenuStateProps } from '$stylist/control/type/alias/dropdown-menu-state-props';

export function createDropdownMenuState(props: DropdownMenuStateProps) {
  const normalizedPosition = $derived(
    props.position === 'right'
      ? 'right'
      : props.position === 'center'
        ? 'center'
        : 'left'
  );
  let isOpen = $state(false);
  const dropdownId = $derived(`dropdown-${Math.random().toString(36).substr(2, 9)}`);
  const classes = $derived(DropdownMenuStyleManager.getAllClasses(normalizedPosition, props.disabled ?? false, props.class ?? ''));
  const menuClasses = $derived(DropdownMenuStyleManager.getMenuClasses(normalizedPosition));
  const chevronClass = $derived(`dropdown-chevron ${isOpen ? 'rotated' : ''}`);

  $effect(() => {
    const handleClickOutside = (event: Event) => {
      if (isOpen && !event.composedPath().some((el) => el instanceof Element && el.id === dropdownId)) {
        isOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  function toggleDropdown() {
    if (!props.disabled) {
      isOpen = !isOpen;
    }
  }

  function closeDropdown() {
    isOpen = false;
  }

  return {
    get isOpen() {
      return isOpen;
    },
    get dropdownId() {
      return dropdownId;
    },
    get classes() {
      return classes;
    },
    get menuClasses() {
      return menuClasses;
    },
    get chevronClass() {
      return chevronClass;
    },
    toggleDropdown,
    closeDropdown
  };
}

export default createDropdownMenuState;
