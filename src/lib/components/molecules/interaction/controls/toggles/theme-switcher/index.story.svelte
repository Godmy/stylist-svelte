<script lang="ts">
    import { Story } from '$stylist/design-system/playground';
    import type { ControlConfig } from '$stylist/design-system/tokens/controls';
    import ThemeSwitcher from './index.svelte';

    type Props = {
        currentTheme?: 'light' | 'dark' | 'system';
        availableThemes?: Array<'light' | 'dark' | 'system'>;
        showLabels?: boolean;
        onThemeChange?: (theme: 'light' | 'dark' | 'system') => void;
    };

    const controls: ControlConfig[] = [
        {
            name: 'currentTheme',
            type: 'select',
            options: ['light', 'dark', 'system'],
            defaultValue: 'light'
        },
        {
            name: 'showLabels',
            type: 'boolean',
            defaultValue: false
        }
    ];

    function handleThemeChange(theme: 'light' | 'dark' | 'system') {
        console.log('Theme changed to:', theme);
    }
</script>

<Story
    id="molecules-theme-switcher"
    title="ThemeSwitcher"
    component={ThemeSwitcher}
    category="Molecules"
    description="Component for switching between themes"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <ThemeSwitcher
                currentTheme={props.currentTheme || 'light'}
                showLabels={props.showLabels}
                onThemeChange={handleThemeChange}
            />
        </div>
    {/snippet}
</Story>

