<script lang="ts">
    import { Story } from '$stylist/playground/component';
    import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
    import VariablesEditor from './index.svelte';

    type Props = {
        variables?: any[];
        editable?: boolean;
        showTypes?: boolean;
    };

    const controls: InterfaceControllerSettings[] = [
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
    {#snippet children(values: any)}
        <div class="p-4">
            <VariablesEditor {...values} />
        </div>
    {/snippet}
</Story>





