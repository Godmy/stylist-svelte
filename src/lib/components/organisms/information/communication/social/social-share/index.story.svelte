<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SocialShare from './index.svelte';

    type SocialPlatform = 'facebook' | 'twitter' | 'linkedin' | 'pinterest' | 'reddit' | 'whatsapp' | 'telegram' | 'email' | 'copy';

    type Props = {
        url?: string;
        title?: string;
        description?: string;
        platforms?: SocialPlatform[]; // Added platforms prop
        showCopyLink?: boolean;
        showEmbed?: boolean;
        showSave?: boolean;
        showLike?: boolean;
    };

    const controls: ControlConfig[] = [
        {
            name: 'url',
            type: 'text',
            defaultValue: 'https://example.com'
        },
        {
            name: 'title',
            type: 'text',
            defaultValue: 'Example Page'
        },
        {
            name: 'description',
            type: 'text',
            defaultValue: 'This is a description of the example page.'
        },
        {
            name: 'platforms',
            type: 'text', // Or multiselect if supported by playground
            defaultValue: ['facebook', 'twitter', 'linkedin', 'email', 'copy']
        },
        {
            name: 'showCopyLink',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showEmbed',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'showSave',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'showLike',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-social-share"
    title="SocialShare"
    component={SocialShare}
    category="Molecules"
    description="Social share component for sharing content"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SocialShare
                url={props.url}
                title={props.title}
                description={props.description}
                platforms={props.platforms}
                showCopyLink={props.showCopyLink}
                showEmbed={props.showEmbed}
                showSave={props.showSave}
                showLike={props.showLike}
            />
        </div>
    {/snippet}
</Story>
