<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import ListWithAvatars from './index.svelte';

  type ListItem = {
    id: string;
    title: string;
    subtitle?: string;
    avatar?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
    description?: string;
    actions?: Array<{
      label: string;
      onClick: () => void;
      variant?: 'primary' | 'secondary' | 'danger';
    }>;
  };

  let items: ListItem[] = [
    {
      id: '1',
      title: 'John Doe',
      subtitle: 'Software Engineer',
      avatar: 'https://placehold.co/40x40',
      status: 'online',
      description: 'Active now',
      actions: [
        {
          label: 'Message',
          onClick: () => console.log('Messaging John Doe'),
          variant: 'primary'
        }
      ]
    },
    {
      id: '2',
      title: 'Jane Smith',
      subtitle: 'Product Manager',
      avatar: 'https://placehold.co/40x40',
      status: 'away',
      description: 'Will be back in 30 mins',
      actions: [
        {
          label: 'Call',
          onClick: () => console.log('Calling Jane Smith'),
          variant: 'primary'
        }
      ]
    },
    {
      id: '3',
      title: 'Bob Johnson',
      subtitle: 'Designer',
      avatar: 'https://placehold.co/40x40',
      status: 'busy',
      description: 'In a meeting',
      actions: [
        {
          label: 'Email',
          onClick: () => console.log('Emailing Bob Johnson'),
          variant: 'primary'
        }
      ]
    },
    {
      id: '4',
      title: 'Alice Williams',
      subtitle: 'Marketing Specialist',
      avatar: 'https://placehold.co/40x40',
      status: 'online',
      description: 'Working from home',
      actions: [
        {
          label: 'Chat',
          onClick: () => console.log('Chatting with Alice Williams'),
          variant: 'primary'
        }
      ]
    },
    {
      id: '5',
      title: 'Charlie Brown',
      subtitle: 'QA Engineer',
      avatar: 'https://placehold.co/40x40',
      status: 'offline',
      description: 'Last seen 2 hours ago',
      actions: [
        {
          label: 'Schedule',
          onClick: () => console.log('Scheduling with Charlie Brown'),
          variant: 'primary'
        }
      ]
    }
  ];

  let showAvatar: boolean = true;
  let showStatus: boolean = true;
  let showSubtitle: boolean = true;
  let showDescription: boolean = true;
  let showActions: boolean = true;
  let size: 'sm' | 'md' | 'lg' = 'md';

  type Props = {
    showAvatar: boolean;
    showStatus: boolean;
    showSubtitle: boolean;
    showDescription: boolean;
    showActions: boolean;
    size: 'sm' | 'md' | 'lg';
  };

  const controls: ControlConfig[] = [
    { name: 'showAvatar', type: 'boolean', defaultValue: true },
    { name: 'showStatus', type: 'boolean', defaultValue: true },
    { name: 'showSubtitle', type: 'boolean', defaultValue: true },
    { name: 'showDescription', type: 'boolean', defaultValue: true },
    { name: 'showActions', type: 'boolean', defaultValue: true },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' }
  ];
</script>

<Story
  id="organisms-list-with-avatars"
  title="Organisms / Interaction / Controls / Lists / ListWithAvatars"
  component={ListWithAvatars}
  category="Organisms/Interaction/Controls/Lists"
  description="List component with avatars, status indicators, and optional action buttons."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-list-with-avatars p-4">
      <h1 class="text-lg font-semibold mb-4">ListWithAvatars Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive ListWithAvatars</h2>
        <div class="max-w-md mx-auto">
          <ListWithAvatars
            {items}
            showAvatar={values.showAvatar}
            showStatus={values.showStatus}
            showSubtitle={values.showSubtitle}
            showDescription={values.showDescription}
            showActions={values.showActions}
            size={values.size}
          />
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <div class="flex items-end">
            <label for="show-avatar" class="flex items-center gap-1">
              <input id="show-avatar" type="checkbox" bind:checked={showAvatar} />
              Show Avatar
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-status" class="flex items-center gap-1">
              <input id="show-status" type="checkbox" bind:checked={showStatus} />
              Show Status
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-subtitle" class="flex items-center gap-1">
              <input id="show-subtitle" type="checkbox" bind:checked={showSubtitle} />
              Show Subtitle
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-description" class="flex items-center gap-1">
              <input id="show-description" type="checkbox" bind:checked={showDescription} />
              Show Description
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-actions" class="flex items-center gap-1">
              <input id="show-actions" type="checkbox" bind:checked={showActions} />
              Show Actions
            </label>
          </div>

          <div>
            <label for="avatar-size" class="block text-sm mb-1">Size:</label>
            <select
              id="avatar-size"
              bind:value={size}
              class="border rounded p-1"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>
        </div>
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">ListWithAvatars Variations</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-sm font-medium mb-2">Without Avatars</h3>
            <div class="max-w-md mx-auto">
              <ListWithAvatars
                {items}
                showAvatar={false}
              />
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">Without Status</h3>
            <div class="max-w-md mx-auto">
              <ListWithAvatars
                {items}
                showStatus={false}
                showSubtitle={false}
                showDescription={true}
              />
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">Large Size</h3>
            <div class="max-w-md mx-auto">
              <ListWithAvatars
                {items}
                size="lg"
                showActions={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>


