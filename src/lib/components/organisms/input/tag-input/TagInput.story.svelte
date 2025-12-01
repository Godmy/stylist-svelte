<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import TagInput from './TagInput.svelte';

    type Props = {
        tags?: string[];
        placeholder?: string;
        maxTags?: number;
        disabled?: boolean;
        onChange?: (tags: string[]) => void;
    };

    const defaultTags = ['javascript', 'svelte', 'webdev'];
    const placeholder = "Enter tags separated by comma...";

    const controls: ControlConfig[] = [
        {
            name: 'maxTags',
            type: 'number',
            defaultValue: 10
        },
        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: false
        }
    ];

    function handleTagChange(tags: string[]) {
        console.log('Tags changed:', tags);
    }
</script>

<Story
    id="molecules-tag-input"
    title="TagInput"
    component={TagInput}
    category="Molecules"
    description="Input component for managing tags"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <TagInput
                tags={props.tags || defaultTags}
                placeholder={props.placeholder || placeholder}
                maxTags={props.maxTags}
                disabled={props.disabled}
                onChange={handleTagChange}
            />
        </div>
    {/snippet}
</Story>