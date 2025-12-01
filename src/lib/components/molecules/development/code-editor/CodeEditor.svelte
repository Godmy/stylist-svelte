<script lang="ts">
  /**
   * CodeEditor - компонент для редактирования кода (обертка для Monaco Editor)
   *
   * Следует принципам SOLID:
   *
   * Single Responsibility: Отвечает только за редактирование кода
   * Open/Closed: Легко расширяется через пропсы, не требует изменений в коде
   * Liskov Substitution: Может быть заменен другим редактором кода при необходимости
   * Interface Segregation: Имеет минимальный, конкретный интерфейс для редактора
   * Dependency Inversion: Зависит от абстракции стилей через CodeEditorStyleManager
   *
   * Использует подход Atomic Design (Molecule) - комбинирует базовые элементы
   * (панель инструментов, область редактирования) в составной компонент редактора
   */

  import type { ICodeEditorProps, CodeLanguage } from './types';
  import { CodeEditorStyleManager } from './styles';
  import { Copy, Download, RefreshCw } from 'lucide-svelte';

  let {
    code = '',
    language = 'javascript',
    theme = 'vs',
    height = '300px',
    width = '100%',
    readOnly = false,
    syntaxHighlighting = true,
    showLineNumbers = true,
    autoCompletion = true,
    fontSize = 14,
    showCopyButton = true,
    onCodeChange,
    class: className = ''
  }: ICodeEditorProps = $props();

  // Вычисляемые стили через derived для изоляции логики стилизации
  const containerClasses = $derived(CodeEditorStyleManager.getContainerClasses(className));
  const editorWrapperClasses = $derived(CodeEditorStyleManager.getEditorWrapperClasses());
  const toolbarClasses = $derived(CodeEditorStyleManager.getToolbarClasses());
  const toolbarButtonClasses = $derived(CodeEditorStyleManager.getToolbarButtonClasses());
  const editorAreaClasses = $derived(CodeEditorStyleManager.getEditorAreaClasses());

  // Внутреннее состояние кода
  let internalCode = $state(code);

  // Обновляем внутреннее состояние при изменении пропса
  $effect(() => {
    internalCode = code;
  });

  // Обработчики действий
  function handleCodeChange(newValue: string) {
    internalCode = newValue;
    if (onCodeChange) {
      onCodeChange(newValue);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(internalCode);
  }

  function handleDownload() {
    const blob = new Blob([internalCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${getLanguageExtension(language)}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handleReset() {
    internalCode = code;
    if (onCodeChange) {
      onCodeChange(code);
    }
  }

  // Функция для получения расширения файла по языку
  function getLanguageExtension(lang: CodeLanguage): string {
    const extensions: Record<CodeLanguage, string> = {
      javascript: 'js',
      typescript: 'ts',
      html: 'html',
      css: 'css',
      svelte: 'svelte',
      json: 'json',
      markdown: 'md',
      python: 'py',
      java: 'java',
      'csharp': 'cs',
      cpp: 'cpp',
      go: 'go',
      rust: 'rs',
      sql: 'sql',
      yaml: 'yaml',
      xml: 'xml'
    };
    return extensions[lang] || 'txt';
  }

  // Функция для получения подсветки синтаксиса (в упрощенном виде)
  function getSyntaxHighlightedCode(): string {
    if (!syntaxHighlighting) return internalCode;

    // В реальной реализации здесь будет подсветка синтаксиса
    // Пока просто возвращаем код как есть
    return internalCode;
  }
</script>

<div class={containerClasses} role="region" aria-label="Code editor">
  <!-- Панель инструментов -->
  <div class={toolbarClasses}>
    <div class="editor-info">
      <span class="text-sm text-gray-600 capitalize">{language}</span>
    </div>
    <div class="editor-actions flex space-x-2">
      {#if showCopyButton}
      <button
        class={toolbarButtonClasses}
        onclick={handleCopy}
        title="Copy code"
        aria-label="Copy code"
      >
        <Copy class="w-4 h-4 inline mr-1" />
        Copy
      </button>
      {/if}
      <button
        class={toolbarButtonClasses}
        onclick={handleDownload}
        title="Download code"
        aria-label="Download code"
      >
        <Download class="w-4 h-4 inline mr-1" />
        Download
      </button>
      <button
        class={toolbarButtonClasses}
        onclick={handleReset}
        title="Reset to original"
        aria-label="Reset to original"
        disabled={readOnly}
      >
        <RefreshCw class="w-4 h-4 inline mr-1" />
        Reset
      </button>
    </div>
  </div>

  <!-- Область редактирования -->
  <div
    class={editorWrapperClasses}
    style={`height: ${height}; width: ${width};`}
  >
    <textarea
      class={`w-full h-full p-4 font-mono text-sm focus:outline-none resize-none ${editorAreaClasses}`}
      style={`font-size: ${fontSize}px; ${showLineNumbers ? 'padding-left: 40px;' : ''}`}
      bind:value={internalCode}
      oninput={(e) => handleCodeChange(e.currentTarget.value)}
      readonly={readOnly}
      aria-label="Code editor input"
    >
      {internalCode}
    </textarea>
  </div>
</div>