/**
 * Менеджер стилей для компонента CodeEditor
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */

export class CodeEditorStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера CodeEditor
   */
  static getContainerClasses(className?: string): string {
    return `code-editor-container border rounded-lg overflow-hidden shadow-sm ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для обертки редактора
   */
  static getEditorWrapperClasses(): string {
    return 'editor-wrapper';
  }

  /**
   * Возвращает CSS-классы для панели инструментов редактора
   */
  static getToolbarClasses(): string {
    return 'editor-toolbar bg-gray-100 border-b px-3 py-2 flex items-center justify-between';
  }

  /**
   * Возвращает CSS-классы для кнопки в панели инструментов
   */
  static getToolbarButtonClasses(): string {
    return 'toolbar-button bg-white border border-gray-300 rounded px-3 py-1 text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500';
  }

  /**
   * Возвращает CSS-классы для области редактирования
   */
  static getEditorAreaClasses(): string {
    return 'editor-area';
  }
}