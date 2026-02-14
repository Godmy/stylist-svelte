<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import CollaborativeEditor from './index.svelte';

  let content: string = `<h2>Collaborative Document</h2><p>This is a collaborative editor component. Multiple users can edit this document simultaneously.</p><p>Try using the formatting tools above to modify the content.</p>`;

  let users = [
    { id: '1', name: 'Alice Johnson', color: '#3b82f6' }, // blue
    { id: '2', name: 'Bob Smith', color: '#ef4444' },     // red
    { id: '3', name: 'Carol Davis', color: '#10b981' }   // green
  ];

  let currentUser = { id: '4', name: 'You', color: '#8b5cf6' }; // purple
  let showToolbar: boolean = true;
  let showUserList: boolean = true;

  type Props = {
    showToolbar: boolean;
    showUserList: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'showToolbar', type: 'boolean', defaultValue: true },
    { name: 'showUserList', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="organisms-collaborative-editor"
  title="Organisms / Interaction / Communication / Collaborate / CollaborativeEditor"
  component={CollaborativeEditor}
  category="Organisms/Interaction/Communication/Collaborate"
  description="Real-time collaborative editor with formatting tools and user presence indicators."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="sb-organisms-collaborative-editor p-4">
      <h1 class="text-lg font-semibold mb-4">CollaborativeEditor Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive CollaborativeEditor</h2>
        <div class="h-[400px]">
          <CollaborativeEditor
            {content}
            {users}
            {currentUser}
            showToolbar={props.showToolbar}
            showUserList={props.showUserList}
          />
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <div class="flex items-end">
            <label for="show-toolbar" class="flex items-center gap-1">
              <input id="show-toolbar" type="checkbox" bind:checked={showToolbar} />
              Show Toolbar
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-user-list" class="flex items-center gap-1">
              <input id="show-user-list" type="checkbox" bind:checked={showUserList} />
              Show User List
            </label>
          </div>
        </div>
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">CollaborativeEditor Variations</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-sm font-medium mb-2">Editor without User List</h3>
            <div class="h-[300px]">
              <CollaborativeEditor
                content={`<h3>Simple Editor</h3><p>This editor has no user list displayed. It focuses only on the content editing area.</p>`}
                {users}
                {currentUser}
                showToolbar={true}
                showUserList={false}
              />
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">Editor without Toolbar</h3>
            <div class="h-[300px]">
              <CollaborativeEditor
                content={`<p>Content in read-only mode (no editing tools). This could be used for displaying collaborative content without allowing editing.</p>`}
                {users}
                {currentUser}
                showToolbar={false}
                showUserList={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>

