/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export class BlockquoteStyleManager {
  static getBlockquoteClasses(className?: string): string {
    return `border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4 ${className ?? ''}`.trim();
  }

  static getFooterClasses(): string {
    return 'mt-2 text-sm text-gray-500 not-italic';
  }
}
