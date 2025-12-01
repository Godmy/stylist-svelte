<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import type { ComponentType, Snippet } from 'svelte';
    import Sidebar from './Sidebar.svelte';
    import { Home, Box, ShoppingCart, Users, BarChart } from 'lucide-svelte'; // Import icons

    type NavItem = {
        id: string;
        label: string;
        href?: string;
        icon?: ComponentType;
        onClick?: () => void;
        disabled?: boolean;
        active?: boolean;
        badge?: string | number;
    };

    type Props = {
        items?: NavItem[];
        title?: string;
        logo?: Snippet;
        footer?: Snippet;
        collapsed?: boolean;
        collapsible?: boolean;
        mobileBreakpoint?: number;
        width?: string;
        mobileWidth?: string;
    };

    const defaultItems: NavItem[] = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            href: '/dashboard',
            icon: Home // Using imported icon
        },
        {
            id: 'products',
            label: 'Products',
            href: '/products',
            icon: Box, // Using imported icon
            badge: '5'
        },
        {
            id: 'orders',
            label: 'Orders',
            href: '/orders',
            icon: ShoppingCart // Using imported icon
        },
        {
            id: 'customers',
            label: 'Customers',
            href: '/customers',
            icon: Users // Using imported icon
        },
        {
            id: 'analytics',
            label: 'Analytics',
            href: '/analytics',
            icon: BarChart // Using imported icon
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'title',
            type: 'text',
            defaultValue: 'Navigation'
        },
        {
            name: 'collapsible',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'collapsed',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-sidebar"
    title="Sidebar"
    component={Sidebar}
    category="Molecules"
    description="Sidebar component for navigation and content organization"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <Sidebar
                items={props.items || defaultItems}
                title={props.title}
                collapsible={props.collapsible}
                collapsed={props.collapsed}
            />
        </div>
    {/snippet}
</Story>
