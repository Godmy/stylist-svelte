<script lang="ts">
    import { Story } from '$stylist/design-system/playground';
    import type { ControlConfig } from '$stylist/design-system/tokens/controls';
    import VariablesEditor from './index.svelte';

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

