/**
 * TabGroup types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type TabGroupVariant = 'line' | 'boxed' | 'pill';

export interface ITab {
  id: string;
  title: string;
  content: Snippet;
  disabled?: boolean;
}

export interface ITabGroupProps extends HTMLAttributes<HTMLDivElement> {
  tabs: ITab[];
  activeTab?: string;
  variant?: TabGroupVariant;
  class?: string;
  tabListClass?: string;
  tabClass?: string;
  activeTabClass?: string;
  inactiveTabClass?: string;
  panelClass?: string;
  onValueInput?: (tabId: string) => void;
  onValueChange?: (tabId: string) => void;
  /** @deprecated use onValueChange */
  onChange?: (tabId: string) => void;
}

export interface ITabStyleClasses {
  variant: string;
  active: string;
  inactive: string;
  disabled: string;
}
