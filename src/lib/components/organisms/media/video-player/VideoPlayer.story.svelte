<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import VideoPlayer from './VideoPlayer.svelte';

    type Props = {
        src?: string;
        autoplay?: boolean;
        controls?: boolean;
        muted?: boolean;
    };

    const controls: ControlConfig[] = [
        {
            name: 'src',
            type: 'text',
            defaultValue: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            name: 'autoplay',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'controls',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'muted',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-video-player"
    title="VideoPlayer"
    component={VideoPlayer}
    category="Molecules"
    description="A video player component with customizable options"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <VideoPlayer {...props} />
        </div>
    {/snippet}
</Story>