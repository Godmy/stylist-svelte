<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import SharedCanvas from './index.svelte';

  type CanvasObject = {
    id: string;
    type: 'rectangle' | 'circle' | 'text' | 'path';
    x: number;
    y: number;
    width?: number;
    height?: number;
    radius?: number;
    text?: string;
    points?: { x: number; y: number }[];
    color: string;
    userId?: string;
  };

  type CanvasUser = {
    id: string;
    name: string;
    color: string;
    cursorPosition?: { x: number; y: number };
  };

  type Props = {
    width?: number;
    height?: number;
    objects?: CanvasObject[];
    users?: CanvasUser[];
    currentUserId?: string;
    showUsers?: boolean;
  };
  
  const defaultObjects: CanvasObject[] = [
    {
      id: 'rect1',
      type: 'rectangle',
      x: 50,
      y: 50,
      width: 100,
      height: 80,
      color: '#3b82f6'
    },
    {
      id: 'circle1',
      type: 'circle',
      x: 200,
      y: 100,
      radius: 40,
      color: '#ef4444'
    },
    {
      id: 'path1',
      type: 'path',
      x: 0, y: 0, // x,y not used for path
      points: [{x: 20, y: 20}, {x: 80, y: 80}, {x: 20, y: 80}],
      color: '#10b981'
    },
    {
      id: 'text1',
      type: 'text',
      x: 100,
      y: 200,
      text: 'Shared Canvas',
      color: '#10b981'
    }
  ];

  const defaultUsers: CanvasUser[] = [
    {
      id: 'user1',
      name: 'Alice',
      color: '#8b5cf6'
    },
    {
      id: 'user2',
      name: 'Bob',
      color: '#ec4899'
    }
  ];

  const controls: ControlConfig[] = [
    {
      name: 'width',
      type: 'number',
      defaultValue: 800
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: 600
    },
    {
      name: 'showUsers',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<div class="sb-organisms-shared-canvas">
  <Story
    id="organisms-shared-canvas"
    title="SharedCanvas"
    component={SharedCanvas}
    category="Organisms"
    description="Shared canvas component for collaborative drawing"
    controls={controls}
  >
    {#snippet children(props: Props)}
      <div class="p-4">
        <SharedCanvas
          width={props.width}
          height={props.height}
          objects={props.objects || defaultObjects}
          users={props.users || defaultUsers}
          currentUserId={props.currentUserId || 'user1'}
          showUsers={props.showUsers}
        />
      </div>
    {/snippet}
  </Story>
</div>


