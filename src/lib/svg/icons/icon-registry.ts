/**
 * Auto-generated icon registry
 * Generated at: 2026-04-03T10:34:02.133Z
 * Do not edit manually - run 'npx tsx scripts/svg/index.ts' to regenerate
 */

export interface IconEntry {
  name: string;
  category: 'architecture' | 'information' | 'interaction';
  path: string;
  fullPath: string;
}

export const ICON_REGISTRY = {
  "$schema": "https://stylist-svelte.dev/schema/icon-registry.json",
  "generated": "2026-04-03T10:34:02.127Z",
  "total": 0,
  "categories": {
    "architecture": [],
    "information": [],
    "interaction": []
  },
  "byName": {}
} as const;

export type IconCategory = 'architecture' | 'information' | 'interaction';

export type IconName = string;

export const ICONS_BY_CATEGORY = {
  architecture: [],
  information: [],
  interaction: []
} as const;

export const ICONS_TOTAL = 0;

export function getIconPath(name: IconName): string {
  return ICON_REGISTRY.byName[name]?.path ?? '';
}

export function getIconCategory(name: IconName): IconCategory | undefined {
  return ICON_REGISTRY.byName[name]?.category;
}

export function listIconsByCategory(category: IconCategory): string[] {
  return ICON_REGISTRY.categories[category].map(i => i.name);
}

export function hasIcon(name: string): name is IconName {
  return name in ICON_REGISTRY.byName;
}
