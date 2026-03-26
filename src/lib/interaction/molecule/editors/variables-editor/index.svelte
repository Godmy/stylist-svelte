<script lang="ts">
  import { Button, Icon } from '$stylist';
  
  type BaseComponentProps = {
    class?: string;
    'data-testid'?: string;
  };
  
  type Props = BaseComponentProps & {
    variables?: Record<string, any>;
    height?: string;
  };

  let { 
    variables = {},
    height = '150px',
    class: className = '' 
  }: Props = $props();
  
  // State
  let variablesContent = $state(JSON.stringify(variables, null, 2));
  let isValid = $state(true);
  const placeholderText = '{"userId": 123}';
  
  // Events
  let onChange: ((variables: Record<string, any>) => void) | undefined;
  
  // Validate JSON and call onChange
  const handleInput = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    variablesContent = target.value;
    
    try {
      const parsed = JSON.parse(variablesContent);
      isValid = true;
      onChange?.(parsed);
    } catch (error) {
      isValid = false;
      // Still call onChange with empty object or last valid state
      onChange?.({});
    }
  };
  
  // Format the variables JSON
  const formatVariables = () => {
    try {
      const parsed = JSON.parse(variablesContent);
      variablesContent = JSON.stringify(parsed, null, 2);
      onChange?.(parsed);
    } catch (error) {
      console.error('Invalid JSON', error);
    }
  };
  
  // Load example variables
  const loadExample = () => {
    const example = {
      "userId": 123,
      "postId": 456,
      "limit": 10,
      "filter": {
        "published": true
      }
    };
    variablesContent = JSON.stringify(example, null, 2);
    onChange?.(example);
  };
  
  // Clear variables
  const clearVariables = () => {
    variablesContent = '{}';
    onChange?.({});
  };
</script>

<div class="variables-editor border border-[var(--color-border-primary)] rounded-md dark:border-[var(--color-border-primary)] bg-[var(--color-background-primary)] dark:bg-[var(--color-neutral-800)] overflow-hidden {className}">
  <div class="toolbar bg-[var(--color-background-secondary)] dark:bg-[var(--color-neutral-700)] border-b border-[var(--color-border-primary)] dark:border-[var(--color-border-primary)] p-2 flex items-center justify-between">
    <div class="flex items-center space-x-1">
      <span class="text-xs font-medium text-[var(--color-text-primary)] dark:text-[var(--color-text-tertiary)]">Query Variables</span>
    </div>
    <div class="flex items-center space-x-1">
      <Button 
        variant="ghost" 
        size="sm" 
        title="Format JSON"
        onclick={formatVariables}
      >
        <Icon name="align-left" class="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        title="Load Example"
        onclick={loadExample}
      >
        <Icon name="file-text" class="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        title="Clear Variables"
        onclick={clearVariables}
      >
        <Icon name="x" class="h-4 w-4" />
      </Button>
    </div>
  </div>
  
  <div class="relative" style="height: {height}">
    <textarea
      value={variablesContent}
      oninput={handleInput}
      class="w-full h-full p-4 font-mono text-sm border-none focus:outline-none resize-none bg-[var(--color-background-primary)] dark:bg-[var(--color-neutral-800)] text-[var(--color-text-primary)] dark:text-[var(--color-neutral-100)] {isValid ? '' : 'text-[var(--color-danger-500)]'}"
      style="font-family: monospace; tab-size: 2;"
      placeholder={placeholderText}
      spellcheck={false}
    ></textarea>
    
    {#if !variablesContent || variablesContent === '{}'}
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="text-[var(--color-text-tertiary)] dark:text-[var(--color-text-secondary)] text-center p-4">
          <Icon name="file-json" class="h-8 w-8 mx-auto mb-1" />
          <p class="text-xs">Variables (JSON)</p>
        </div>
      </div>
    {/if}
    
    {#if !isValid}
      <div class="absolute top-2 right-2 bg-[var(--color-danger-500)] text-[var(--color-text-inverse)] text-xs px-2 py-1 rounded">
        Invalid JSON
      </div>
    {/if}
  </div>
</div>

<style>
  .variables-editor {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .toolbar {
    flex-shrink: 0;
  }
  
  textarea {
    font-family: monospace;
  }
</style>




