<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import TeamAvatarStack from './TeamAvatarStack.svelte';

    type TeamMember = {
        id: string;
        name: string;
        avatar?: string;
        role?: string;
        status?: 'online' | 'away' | 'busy' | 'offline';
        presence?: boolean;
    };

    type Props = {
        members: TeamMember[];
        maxVisible?: number;
        showStatus?: boolean;
        showTooltip?: boolean;
        size?: 'sm' | 'md' | 'lg';
        stackDirection?: 'horizontal' | 'vertical';
    };

    const defaultMembers = [
        { id: '1', name: 'John Doe', avatar: 'https://via.placeholder.com/40', status: 'online' },
        { id: '2', name: 'Jane Smith', avatar: 'https://via.placeholder.com/40', status: 'away' },
        { id: '3', name: 'Bob Johnson', avatar: 'https://via.placeholder.com/40', status: 'online' },
        { id: '4', name: 'Alice Williams', avatar: 'https://via.placeholder.com/40', status: 'offline' },
        { id: '5', name: 'Charlie Brown', avatar: 'https://via.placeholder.com/40', status: 'busy' }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'maxVisible',
            type: 'number',
            defaultValue: 3
        },
        {
            name: 'size',
            type: 'select',
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md'
        }
    ];
</script>

<Story
    id="molecules-team-avatar-stack"
    title="TeamAvatarStack"
    component={TeamAvatarStack}
    category="Molecules"
    description="Stack of team member avatars"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <TeamAvatarStack
                members={props.members || defaultMembers}
                maxVisible={props.maxVisible || 3}
                size={props.size}
            />
        </div>
    {/snippet}
</Story>