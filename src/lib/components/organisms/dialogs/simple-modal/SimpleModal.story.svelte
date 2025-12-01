<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SimpleModal from './SimpleModal.svelte';

    type Props = {
        show?: boolean;
        title?: string;
        size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
        closable?: boolean;
        closeOnOverlayClick?: boolean;
        closeOnEscapeKey?: boolean;
    };

    const controls: ControlConfig[] = [
        {
            name: 'show',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'title',
            type: 'text',
            defaultValue: 'Simple Modal'
        },
        {
            name: 'size',
            type: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'full'],
            defaultValue: 'md'
        },
        {
            name: 'closable',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'closeOnOverlayClick',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'closeOnEscapeKey',
            type: 'boolean',
            defaultValue: true
        }
    ];
</script>

<Story
    id="molecules-simple-modal"
    title="SimpleModal"
    component={SimpleModal}
    category="Molecules"
    description="Simple modal component for displaying content"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SimpleModal
                show={props.show || false}
                title={props.title}
                size={props.size}
                closable={props.closable}
                closeOnOverlayClick={props.closeOnOverlayClick}
                closeOnEscapeKey={props.closeOnEscapeKey}
            >
                <p>This is the content of the simple modal.</p>
            </SimpleModal>
        </div>
    {/snippet}
</Story>