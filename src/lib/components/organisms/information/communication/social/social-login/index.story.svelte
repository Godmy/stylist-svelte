<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SocialLogin from './index.svelte';

    type Provider = 'google' | 'facebook' | 'github' | 'twitter' | 'linkedin' | 'apple' | 'microsoft' | 'slack';

    type Props = {
        providers?: Provider[];
        showEmailForm?: boolean;
        showPasswordForm?: boolean;
        showSignUp?: boolean;
        showForgotPassword?: boolean;
    };

    const controls: ControlConfig[] = [
        {
            name: 'providers',
            type: 'text',
            defaultValue: ['google', 'github', 'apple'] // Example providers
        },
        {
            name: 'showEmailForm',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showPasswordForm',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showSignUp',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showForgotPassword',
            type: 'boolean',
            defaultValue: true
        }
    ];
</script>

<Story
    id="molecules-social-login"
    title="SocialLogin"
    component={SocialLogin}
    category="Molecules"
    description="Social login component for multiple providers"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SocialLogin
                providers={props.providers}
                showEmailForm={props.showEmailForm}
                showPasswordForm={props.showPasswordForm}
                showSignUp={props.showSignUp}
                showForgotPassword={props.showForgotPassword}
            />
        </div>
    {/snippet}
</Story>
