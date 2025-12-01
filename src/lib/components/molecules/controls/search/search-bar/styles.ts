/**
 * Style manager for SearchBar component
 * Following SOLID principles by separating styling logic from component logic
 * Uses the Stylist-Svelte theming system with CSS variables
 */

import type { ISearchBarProps } from "./types";

export class SearchBarStyleManager {
  /**
   * Gets the base CSS classes for the search bar container
   */
  static getBaseClasses(baseClass: string = ''): string {
    return [
      'flex',
      'items-center',
      'w-full',
      'max-w-md',
      'p-2',
      'border',
      'border-[--color-border-default]',
      'rounded-lg',
      'bg-[--color-bg-default]',
      'shadow-sm',
      'focus-within:ring-2',
      'focus-within:ring-[--color-primary-500]',
      'focus-within:border-[--color-primary-500]',
      baseClass
    ].filter(Boolean).join(' ');
  }

  /**
   * Gets the CSS classes for the search icon container
   */
  static getIconContainerClasses(): string {
    return [
      'flex',
      'items-center',
      'justify-center',
      'text-[--color-text-muted]'
    ].join(' ');
  }

  /**
   * Gets the CSS classes for the search input
   */
  static getInputClasses(): string {
    return [
      'flex-1',
      'border-none',
      'outline-none',
      'py-2',
      'px-1',
      'text-[--color-text-primary]',
      'placeholder-[--color-text-muted]',
      'bg-transparent'
    ].join(' ');
  }

  /**
   * Gets the CSS classes for the search controls container
   */
  static getControlsContainerClasses(): string {
    return [
      'flex',
      'items-center',
      'gap-1'
    ].join(' ');
  }

  /**
   * Gets the CSS classes for icon buttons
   */
  static getIconButtonClasses(): string {
    return [
      'flex',
      'items-center',
      'justify-center',
      'p-2',
      'rounded-md',
      'hover:bg-[--color-bg-hover]',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-[--color-primary-500]'
    ].join(' ');
  }

  /**
   * Gets all CSS classes for the search bar based on props
   */
  static getAllClasses(props: ISearchBarProps): string {
    return this.getBaseClasses(props.class);
  }
}