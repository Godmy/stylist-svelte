<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import VariablesEditor from './VariablesEditor.svelte';

    type Props = {
        variables?: any[];
        editable?: boolean;
        showTypes?: boolean;
    };

    const controls: ControlConfig[] = [
        {
            name: 'editable',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'showTypes',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-variables-editor"
    title="VariablesEditor"
    component={VariablesEditor}
    category="Molecules"
    description="Editor for managing variables"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <VariablesEditor {...props} />
        </div>
    {/snippet}
</Story>