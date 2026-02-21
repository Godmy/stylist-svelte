import type { ITreeNodeItemStyleClasses } from '$stylist/design-system/props/interaction/tree-node-item';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing tree node item styling logic
 * Uses CSS variables from the theme system
 */
export class TreeNodeItemStyleManager {
  static getNodeContainerClasses(): string {
    return 'tree-node-container flex flex-col';
  }

  static getNodeHeaderClasses(isExpanded: boolean): string {
    const baseClasses = 'tree-node-header flex items-center p-1 rounded transition-colors duration-150 min-h-8 cursor-pointer';
    const expandedClass = isExpanded ? 'tree-node-header-expanded bg-[--color-secondary-50]' : '';
    
    return `${baseClasses} ${expandedClass}`;
  }

  static getToggleIconClasses(): string {
    return 'tree-toggle-icon w-4 h-4 mr-2 cursor-pointer text-[--color-text-secondary] hover:text-[--color-text-primary]';
  }

  static getNoToggleClasses(): string {
    return 'tree-no-toggle w-4 h-4 mr-2';
  }

  static getNodeTextClasses(): string {
    return 'tree-node-text flex-1 text-[--color-text-primary]';
  }

  static getSecondaryIconClasses(): string {
    return 'tree-secondary-icon ml-2 text-[--color-text-secondary]';
  }

  static getSecondaryIconImageClasses(): string {
    return 'tree-secondary-icon-img ml-2 w-4 h-4';
  }

  static getNodeChildrenClasses(): string {
    return 'tree-node-children ml-6 border-l-2 border-[--color-border-secondary] pl-2';
  }
}