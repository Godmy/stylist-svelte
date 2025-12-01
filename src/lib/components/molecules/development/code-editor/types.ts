/**
 * Типы и интерфейсы для компонента CodeEditor
 * 
 * CodeEditor - компонент для редактирования кода (обертка для Monaco Editor)
 * Следует принципам SOLID:
 * 
 * Single Responsibility: Компонент отвечает только за редактирование кода
 * Open/Closed: Легко расширяется через пропсы
 * Liskov Substitution: Может быть заменен другим редактором кода
 * Interface Segregation: Имеет минимальный, конкретный интерфейс
 * Dependency Inversion: Зависит от абстракций, а не от конкретных реализаций
 */

export type CodeLanguage = 
  | 'javascript' | 'typescript' | 'html' | 'css' | 'svelte' | 'json' | 'markdown'
  | 'python' | 'java' | 'csharp' | 'cpp' | 'go' | 'rust' | 'sql' | 'yaml' | 'xml';

export interface ICodeEditorProps {
  /** Код для редактирования */
  code: string;
  
  /** Язык программирования */
  language?: CodeLanguage; // default: 'javascript'
  
  /** Тема редактора */
  theme?: 'vs' | 'vs-dark' | 'hc-black' | 'hc-light'; // default: 'vs'
  
  /** Высота редактора */
  height?: string; // default: '300px'
  
  /** Ширина редактора */
  width?: string; // default: '100%'
  
  /** Режим только для чтения */
  readOnly?: boolean; // default: false
  
  /** Включить подсветку синтаксиса */
  syntaxHighlighting?: boolean; // default: true
  
  /** Отображать номера строк */
  showLineNumbers?: boolean; // default: true
  
  /** Включить автоматическое завершение кода */
  autoCompletion?: boolean; // default: true
  
  /** Размер шрифта */
  fontSize?: number; // default: 14

  /** Отображать кнопку копирования */
  showCopyButton?: boolean; // default: true

  /** Обработчик изменения кода */
  onCodeChange?: (code: string) => void;

  /** Дополнительные CSS классы */
  class?: string;
}