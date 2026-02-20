<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { SessionManagerProps, Session } from '$stylist/design-system/props';
  import { SettingsStyleManager } from '$stylist/design-system/styles';
  import SessionManager from './index.svelte';

  type Props = {
    showTerminateAll: boolean;
    showSessionDetails: boolean;
    showLastActive: boolean;
    allowTerminate: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'showTerminateAll', type: 'boolean', defaultValue: true },
    { name: 'showSessionDetails', type: 'boolean', defaultValue: true },
    { name: 'showLastActive', type: 'boolean', defaultValue: true },
    { name: 'allowTerminate', type: 'boolean', defaultValue: true }
  ];

  const activeSessions: Session[] = [
    { 
      id: '1', 
      device: 'Chrome on Windows', 
      location: 'New York, USA', 
      ip: '192.168.1.1', 
      lastActive: 'Now', 
      current: true 
    },
    { 
      id: '2', 
      device: 'Safari on iPhone', 
      location: 'London, UK', 
      ip: '192.168.1.2', 
      lastActive: '2 hours ago', 
      current: false 
    },
    { 
      id: '3', 
      device: 'Firefox on MacOS', 
      location: 'Paris, France', 
      ip: '192.168.1.3', 
      lastActive: '1 day ago', 
      current: false 
    }
  ];

  function handleTerminate(sessionId: string) {
    console.log('Session terminated:', sessionId);
  }

  function handleTerminateAll() {
    console.log('All sessions terminated');
  }
</script>

<Story
  id="organisms-session-manager"
  title="Organisms / Interaction / Forms / Session Manager"
  component={SessionManager}
  category="Organisms/Interaction/Forms"
  description="A session manager component for viewing and managing active user sessions."
  tags={['session', 'security', 'manager', 'devices']}
  controls={controls}
>
  {#snippet children(props)}
    <div class={SettingsStyleManager.container('sb-organisms-session-manager p-4')}>
      <h1 class="text-lg font-semibold mb-4">SessionManager Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive SessionManager</h2>
        <div class="max-w-2xl">
          <SessionManager 
            {activeSessions}
            showTerminateAll={props.showTerminateAll}
            showSessionDetails={props.showSessionDetails}
            showLastActive={props.showLastActive}
            allowTerminate={props.allowTerminate}
            onTerminate={handleTerminate}
            onTerminateAll={handleTerminateAll}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

