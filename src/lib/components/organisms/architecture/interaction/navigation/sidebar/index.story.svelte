<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import Sidebar from './index.svelte';
  import { Home, Settings, User, Bell, Mail } from 'lucide-svelte';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

  type NavItem = {
    id: string;
    label: string;
    href?: string;
    icon?: any;
    onClick?: () => void;
    disabled?: boolean;
    active?: boolean;
    badge?: string | number;
  };

  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, active: true },
    { id: 'messages', label: 'Messages', icon: Mail, badge: 3 },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: 12 },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const controls = [
    {
      name: 'collapsed',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: false
    },
    {
      name: 'collapsible',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'title',
      type: CONTROL_TYPES.TEXT,
      defaultValue: 'Navigation'
    }
  ];
</script>

<Story
  {controls}
  title="Sidebar"
  category="Organisms/Interaction/Navigation"
  description="Sidebar navigation component for organizing application sections."
  tags={['sidebar', 'navigation', 'menu', 'layout']}
>
  {#snippet children(props)}
    <Sidebar
      items={navItems}
      title={props.title}
      collapsed={props.collapsed}
      collapsible={props.collapsible}
    />
  {/snippet}
</Story>


