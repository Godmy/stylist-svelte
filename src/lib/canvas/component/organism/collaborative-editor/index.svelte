<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist/media';
  import { createCollaborativeEditorState } from '$stylist/canvas/function/state/collaborative-editor';

  export type CollaborativeEditorUser = {
    id: string;
    name: string;
    color: string;
    avatar?: string;
  };

  export type CollaborativeEditorProps = {
    content?: string;
    users?: CollaborativeEditorUser[];
    currentUser?: CollaborativeEditorUser;
    onContentChange?: (content: string) => void;
    showToolbar?: boolean;
    showUserList?: boolean;
    class?: string;
    toolbarClass?: string;
    editorClass?: string;
    userListClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;

  let props: CollaborativeEditorProps = $props();

  const state = createCollaborativeEditorState(props);

  let editorRef: HTMLDivElement | undefined;

  $effect(() => {
    state.editorRef = editorRef;
  });
</script>

<div class={state.containerClasses} {...props}>
  {#if state.showToolbar}
    <div class={state.toolbarClasses}>
      <button
        type="button"
        class={state.toolbarButtonClasses}
        onclick={() => state.formatText('bold')}
        title="Bold"
      >
        <BaseIcon name={state.Bold} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class={state.toolbarButtonClasses}
        onclick={() => state.formatText('italic')}
        title="Italic"
      >
        <BaseIcon name={state.Italic} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class={state.toolbarButtonClasses}
        onclick={() => state.formatText('underline')}
        title="Underline"
      >
        <BaseIcon name={state.Underline} class="h-4 w-4" />
      </button>
      <div class={state.toolbarSeparatorClasses}></div>
      <button
        type="button"
        class={state.toolbarButtonClasses}
        onclick={() => state.formatText('justifyLeft')}
        title="Align Left"
      >
        <BaseIcon name={state.AlignLeft} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class={state.toolbarButtonClasses}
        onclick={() => state.formatText('justifyCenter')}
        title="Align Center"
      >
        <BaseIcon name={state.AlignCenter} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class={state.toolbarButtonClasses}
        onclick={() => state.formatText('justifyRight')}
        title="Align Right"
      >
        <BaseIcon name={state.AlignRight} class="h-4 w-4" />
      </button>
      <div class={state.toolbarSeparatorClasses}></div>
      <button
        type="button"
        class={state.toolbarButtonClasses}
        onclick={() => state.formatText('insertUnorderedList')}
        title="Bullet List"
      >
        <BaseIcon name={state.List} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class={state.toolbarButtonClasses}
        onclick={() => state.formatText('insertOrderedList')}
        title="Numbered List"
      >
        <BaseIcon name={state.ListOrdered} class="h-4 w-4" />
      </button>
      <div class={state.toolbarSeparatorClasses}></div>
      <button
        type="button"
        class={state.toolbarButtonClasses}
        onclick={state.insertComment}
        title="Insert Comment"
      >
        <BaseIcon name={state.MessageCircle} class="h-4 w-4" />
      </button>
    </div>
  {/if}

  <div class="flex flex-1">
    <div class="flex-1 flex flex-col">
      <div
        bind:this={editorRef}
        contenteditable="true"
        class={state.editorClasses}
        oninput={() => state.handleEditorInput()}
        onblur={state.handleBlur}
      >
        {@html state.editorContent}
      </div>
    </div>

    {#if state.showUserList && state.users.length > 0}
      <div class={state.userListClasses}>
        <div class={state.userListHeaderClasses}>
          <BaseIcon name={state.Users} class="h-4 w-4 mr-1" />
          Collaborators ({state.users.length})
        </div>
        <div class="space-y-2">
          {#each state.users as user}
            <div class={state.userListEntryClasses}>
              {#if user.avatar}
                <img
                  src={user.avatar}
                  alt={user.name}
                  class={state.userAvatarClasses}
                  style={`border: 2px solid ${user.color}`}
                />
              {:else}
                <div
                  class={state.userInitialsClasses}
                  style={`background-color: ${user.color}`}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
              {/if}
              <span class={state.userNameClasses}>{user.name}</span>
              {#if state.currentUser?.id === user.id}
                <span class={state.userIndicatorClasses}>(You)</span>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
