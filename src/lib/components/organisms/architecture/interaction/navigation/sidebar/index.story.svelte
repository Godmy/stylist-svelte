<script lang="ts">
  // @ts-nocheck
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import Sidebar from './index.svelte';
  import { Home, Settings, User, Bell, Mail } from 'lucide-svelte';

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

  type Props = {
    collapsed: boolean;
    collapsible: boolean;
    title: string;
  };

  const controls: ControlConfig[] = [
    { name: 'collapsed', type: 'boolean', defaultValue: false },
    { name: 'collapsible', type: 'boolean', defaultValue: true },
    { name: 'title', type: 'text', defaultValue: 'Navigation' }
  ];

  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, active: true },
    { id: 'messages', label: 'Messages', icon: Mail, badge: 3 },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: 12 },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  let status = $state('Waiting for interaction…');

  const updateStatus = (message: string) => {
    status = `${new Date().toLocaleTimeString()}: ${message}`;
  };
</script>

<Story
  id="organisms-sidebar"
  title="Organisms / Architecture / Navigation / Sidebar"
  component={Sidebar}
  category="Organisms/Architecture/Navigation"
  description="Sidebar navigation component for organizing application sections."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="sb-organisms-sidebar grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="mb-4 flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Sidebar</p>
            <p class="text-lg text-[--color-text-primary]">Interactive sidebar navigation component.</p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {props.collapsed ? 'Collapsed' : 'Expanded'}
          </span>
        </header>

        <div class="h-[500px] rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-6 flex">
          <Sidebar
            items={navItems}
            title={props.title}
            collapsed={props.collapsed}
            collapsible={props.collapsible}
            onItemClick={(item) => updateStatus(`Clicked on ${item.label}`)}
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Event feed</h3>
        <p class="text-sm text-[--color-text-secondary]">Use callbacks to update logs, analytics, or change content.</p>
        <div class="mt-4 rounded-2xl border border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3 text-sm">
          {status}
        </div>
        <ul class="mt-4 space-y-2 text-xs text-[--color-text-secondary]">
          <li>• `onItemClick(item)` fired when user clicks on a navigation item.</li>
          <li>• Sidebar supports collapsible behavior on desktop and mobile.</li>
          <li>• Badges can be displayed with navigation items.</li>
        </ul>
      </div>
    </section>
  {/snippet}
</Story>


