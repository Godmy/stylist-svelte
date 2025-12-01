<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SessionManager from './SessionManager.svelte';

    type Session = {
        id: string;
        userAgent: string;
        ipAddress: string;
        location: string;
        loginTime: Date;
        lastActivity: Date;
        isCurrent: boolean;
        isActive: boolean;
    };

    type Props = {
        sessions?: Session[];
        currentUser?: string;
    };

    const defaultSessions: Session[] = [
        {
            id: 'session-1',
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
            ipAddress: '192.168.1.100',
            location: 'New York, US',
            loginTime: new Date(Date.now() - 1000 * 60 * 60 * 24), // 24 hours ago
            lastActivity: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
            isCurrent: true,
            isActive: true
        },
        {
            id: 'session-2',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/97.0 Safari/537.36',
            ipAddress: '192.168.1.101',
            location: 'San Francisco, US',
            loginTime: new Date(Date.now() - 1000 * 60 * 60 * 48), // 48 hours ago
            lastActivity: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
            isCurrent: false,
            isActive: true
        },
        {
            id: 'session-3',
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1',
            ipAddress: '192.168.1.102',
            location: 'London, UK',
            loginTime: new Date(Date.now() - 1000 * 60 * 60 * 72), // 72 hours ago
            lastActivity: new Date(Date.now() - 1000 * 60 * 60 * 24), // 24 hours ago
            isCurrent: false,
            isActive: false
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'currentUser',
            type: 'text',
            defaultValue: 'user-123'
        }
    ];
</script>

<Story
    id="molecules-session-manager"
    title="SessionManager"
    component={SessionManager}
    category="Molecules"
    description="Session manager component for handling user sessions"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SessionManager
                sessions={props.sessions || defaultSessions}
                currentUser={props.currentUser}
            />
        </div>
    {/snippet}
</Story>