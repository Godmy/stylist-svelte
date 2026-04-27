<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import SharedCanvas from './index.svelte';
  import { TOKEN_CONTROLLER_TYPE } from '$stylist/interaction/const/map/controller-type';
  import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

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
      type: TOKEN_CONTROLLER_TYPE.SELECT,
      options: [600, 700, 800, 900],
      defaultValue: 800
    },
    {
      name: 'height',
      type: TOKEN_CONTROLLER_TYPE.SELECT,
      options: [400, 500, 600, 700],
      defaultValue: 600
    },
    {
      name: 'showUsers',
      type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showToolbar',
      type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
      defaultValue: true
    }
  ];
</script>

<Story
  {controls}
  title="SharedCanvas"
  category="Organisms/Architecture/Canvas"
  description="Shared canvas component for collaborative drawing."
  tags={['canvas', 'collaboration', 'drawing', 'multi-user']}
>
  {#snippet children(values: any)}
    <SharedCanvas
      width={values.width}
      height={values.height}
      objects={defaultObjects}
      users={defaultUsers}
      currentUserId="user1"
      showUsers={values.showUsers}
      showToolbar={values.showToolbar}
    />
  {/snippet}
</Story>




