<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import SharedCanvas from './index.svelte';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

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

  const controls = [
    {
      name: 'width',
      type: CONTROL_TYPES.SELECT,
      options: [600, 700, 800, 900],
      defaultValue: 800
    },
    {
      name: 'height',
      type: CONTROL_TYPES.SELECT,
      options: [400, 500, 600, 700],
      defaultValue: 600
    },
    {
      name: 'showUsers',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showToolbar',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    }
  ];
</script>

<Story
  {controls}
  title="SharedCanvas"
  category="Organisms/Canvas"
  description="Shared canvas component for collaborative drawing."
  tags={['canvas', 'collaboration', 'drawing', 'multi-user']}
>
  {#snippet children(props)}
    <SharedCanvas
      width={props.width}
      height={props.height}
      objects={defaultObjects}
      users={defaultUsers}
      currentUserId="user1"
      showUsers={props.showUsers}
      showToolbar={props.showToolbar}
    />
  {/snippet}
</Story>

