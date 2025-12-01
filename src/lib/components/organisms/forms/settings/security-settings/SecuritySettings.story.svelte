<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SecuritySettings from './SecuritySettings.svelte';

    type SecurityOption = {
        id: string;
        label: string;
        enabled: boolean;
        description?: string;
    };

    type Props = {
        title?: string;
    };

    const defaultOptions: SecurityOption[] = [
        { id: 'twoFactor', label: 'Two-Factor Authentication', enabled: false, description: 'Add an extra layer of security to your account' },
        { id: 'passwordExpiration', label: 'Password Expiration', enabled: false, description: 'Require password changes periodically' },
        { id: 'loginAlerts', label: 'Login Alerts', enabled: true, description: 'Get notified of new logins' },
        { id: 'trustedDevices', label: 'Trusted Devices', enabled: true, description: 'Manage devices with persistent access' }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'title',
            type: 'text',
            defaultValue: 'Security Settings'
        }
    ];
</script>

<Story
    id="molecules-security-settings"
    title="SecuritySettings"
    component={SecuritySettings}
    category="Molecules"
    description="Security settings component for user accounts"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SecuritySettings
                title={props.title}
            />
        </div>
    {/snippet}
</Story>