<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SyntaxHighlightedCode from './SyntaxHighlightedCode.svelte';

    type Props = {
        code?: string;
        language?: 'javascript' | 'typescript' | 'html' | 'css' | 'json' | 'python' | 'svelte';
        showLineNumbers?: boolean;
    };

    const sampleCode = `function greet(name) {
  console.log('Hello, ' + name + '!');

  return {
    message: 'Welcome to our app',
    timestamp: new Date().toISOString()
  };
}`;

    const controls: ControlConfig[] = [
        {
            name: 'language',
            type: 'select',
            options: ['javascript', 'typescript', 'html', 'css', 'json', 'python', 'svelte'],
            defaultValue: 'javascript'
        },
        {
            name: 'showLineNumbers',
            type: 'boolean',
            defaultValue: false
        },
    ];
</script>

<Story
    id="molecules-syntax-highlighted-code"
    title="SyntaxHighlightedCode"
    component={SyntaxHighlightedCode}
    category="Molecules"
    description="Syntax highlighted code component for displaying code with syntax highlighting"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SyntaxHighlightedCode
                code={props.code || sampleCode}
                language={props.language}
                showLineNumbers={props.showLineNumbers}
            />
        </div>
    {/snippet}
</Story>