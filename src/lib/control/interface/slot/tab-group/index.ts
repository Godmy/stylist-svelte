import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { TokenShape } from '$stylist/layout/type/enum/shape';
import type { SlotTab } from '$stylist/control/interface/slot/tab';

export interface SlotTabGroup extends HTMLAttributes<HTMLDivElement> {
  tabs: SlotTab[];
  activeTab?: string;
  variant?: TokenShape;
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
