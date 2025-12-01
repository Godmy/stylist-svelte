<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import ToggleButtonGroup from './ToggleButtonGroup.svelte';

    type Props = {
        options?: Array<{
            label: string;
            value: string;
        }>;
        value?: string;
        size?: 'sm' | 'md' | 'lg';
        disabled?: boolean;
        onChange?: (value: string | string[]) => void;
    };

    const defaultOptions = [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'value',
            type: 'text',
            defaultValue: 'medium'
        },
        {
            name: 'size',
            type: 'select',
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md'
        },
        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: false
        }
    ];

    function handleValueChange(value: string | string[]) {
        console.log('Value changed to:', value);
    }
</script>

<Story
    id="molecules-toggle-button-group"
    title="ToggleButtonGroup"
    component={ToggleButtonGroup}
    category="Molecules"
    description="Group of toggle buttons for selection"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <ToggleButtonGroup
                options={props.options || defaultOptions}
                value={props.value || 'medium'}
                size={props.size}
                disabled={props.disabled}
                onChange={handleValueChange}
            />
        </div>
    {/snippet}
</Story>