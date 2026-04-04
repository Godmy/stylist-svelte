<script lang="ts">
  /**
   * SearchBar component following SOLID principles
   *
   * Single Responsibility: Provides a search input with clear and search buttons
   * Open/Closed: Extensible through props without modifying the component
   * Liskov Substitution: Can be used as a search input anywhere
   * Interface Segregation: Provides clear interface through well-defined props
   * Dependency Inversion: Depends on abstractions (types and style manager) not concretions
   */
  import { Icon as BaseIcon, Button } from '$stylist';
  import { createSearchBarState } from '$stylist/input/function/state/search-bar';
  import { SearchBarStyleManager } from '$stylist/control/class/style-manager/search-bar';
  import type { ISearchBarProps } from '$stylist/control/interface/component/search-bar/other';
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

  const Search = 'search';
  const X = 'x';

  type Props = ISearchBarProps & InteractionHTMLAttributes<HTMLDivElement>;

  let {
    placeholder = 'Search nodes...',
    value = '',
    disabled = false,
    debounceMs = 300,
    class: className = '',
    onValueInput,
    onValueChange,
    onSearch,
    onClear,
    ...restProps
  }: Props = $props();

  const state = createSearchBarState({
    placeholder,
    value,
    disabled,
    debounceMs,
    class: className,
    onValueInput,
    onValueChange,
    onSearch,
    onClear
  });
</script>

<div class={state.containerClasses}>
  <div class={state.iconContainerClasses}>
    <BaseIcon name={Search} class={state.iconClasses} aria-hidden="true" />
  </div>

  <input
    id="search-bar-input"
    type="text"
    class={state.inputClasses}
    bind:value={state.searchTerm}
    placeholder={placeholder}
    disabled={disabled}
    oninput={state.handleInput}
    onkeydown={state.handleKeydown}
    aria-label="Search input"
  />

  <div class={state.controlsContainerClasses}>
    {#if state.hasValue && !disabled}
      <Button
        size="sm"
        variant="ghost"
        class={state.clearButtonClasses}
        onclick={state.handleClear}
        aria-label="Clear search"
        disabled={disabled}
      >
        <BaseIcon name={X} class={state.smallIconClasses} aria-hidden="true" />
      </Button>
    {/if}
    <Button
      size="sm"
      variant="secondary"
      class={state.searchButtonClasses}
      onclick={state.triggerSearch}
      disabled={disabled}
    >
      Search
    </Button>
  </div>
</div>
