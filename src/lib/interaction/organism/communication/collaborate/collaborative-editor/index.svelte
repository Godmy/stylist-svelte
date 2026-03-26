<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist';
const Bold = 'bold';
const Italic = 'italic';
const Underline = 'underline';
const AlignLeft = 'align-left';
const AlignCenter = 'align-center';
const AlignRight = 'align-right';
const List = 'list';
const ListOrdered = 'list-ordered';
const MessageCircle = 'message-circle';
const User = 'user';
const Users = 'users';


  type CollaborativeUser = {
    id: string;
    name: string;
    color: string;
    avatar?: string;
  };

  type EditEvent = {
    userId: string;
    position: number;
    text: string;
    timestamp: Date;
  };

  type Props = {
    content?: string;
    users?: CollaborativeUser[];
    currentUser?: CollaborativeUser;
    onContentChange?: (content: string) => void;
    showToolbar?: boolean;
    showUserList?: boolean;
    class?: string;
    toolbarClass?: string;
    editorClass?: string;
    userListClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;

  let {
    content = '',
    users = [],
    currentUser,
    onContentChange,
    showToolbar = true,
    showUserList = true,
    class: className = '',
    toolbarClass = '',
    editorClass = '',
    userListClass = '',
    ...restProps
  }: Props = $props();

  let editorContent = $state(content);
  let editorRef: HTMLDivElement;

  function handleInput() {
    if (onContentChange) {
      onContentChange(editorContent);
    }
  }

  function formatText(command: string) {
    document.execCommand(command, false);
    editorRef?.focus();
  }

  function insertComment() {
    // Get current selection/cursor position
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const commentId = `comment-${Date.now()}`;

      // Create a comment marker element
      const commentMarker = document.createElement('span');
      commentMarker.id = commentId;
      commentMarker.className = 'collaborative-comment-marker';
      commentMarker.textContent = ' В¶';
      commentMarker.style.color = 'blue';
      commentMarker.style.textDecoration = 'underline';
      commentMarker.style.cursor = 'pointer';

      range.insertNode(commentMarker);

      // Trigger content update
      editorContent = editorRef?.innerHTML || '';
      if (onContentChange) {
        onContentChange(editorContent);
      }
    }
  }
</script>

<div class={`c-collaborative-editor flex flex-col border border-[var(--color-border-primary)] rounded-lg overflow-hidden ${className}`} {...restProps}>
  {#if showToolbar}
    <div class={`flex items-center p-2 border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] space-x-1 ${toolbarClass}`}>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('bold')}
        title="Bold"
      >
        <BaseIcon name={Bold} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('italic')}
        title="Italic"
      >
        <BaseIcon name={Italic} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('underline')}
        title="Underline"
      >
        <BaseIcon name={Underline} class="h-4 w-4" />
      </button>
      <div class="w-px h-6 bg-[var(--color-background-tertiary)] mx-1"></div>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('justifyLeft')}
        title="Align Left"
      >
        <BaseIcon name={AlignLeft} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('justifyCenter')}
        title="Align Center"
      >
        <BaseIcon name={AlignCenter} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('justifyRight')}
        title="Align Right"
      >
        <BaseIcon name={AlignRight} class="h-4 w-4" />
      </button>
      <div class="w-px h-6 bg-[var(--color-background-tertiary)] mx-1"></div>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('insertUnorderedList')}
        title="Bullet List"
      >
        <BaseIcon name={List} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('insertOrderedList')}
        title="Numbered List"
      >
        <BaseIcon name={ListOrdered} class="h-4 w-4" />
      </button>
      <div class="w-px h-6 bg-[var(--color-background-tertiary)] mx-1"></div>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={insertComment}
        title="Insert Comment"
      >
        <BaseIcon name={MessageCircle} class="h-4 w-4" />
      </button>
    </div>
  {/if}

  <div class="flex flex-1">
    <div class="flex-1 flex flex-col">
      <div
        bind:this={editorRef}
        contenteditable="true"
        class={`flex-1 p-4 min-h-[300px] overflow-auto focus:outline-none ${editorClass}`}
        oninput={() => editorContent = editorRef?.innerHTML || ''}
        onblur={handleInput}
      >
        {@html editorContent}
      </div>
    </div>

    {#if showUserList && users.length > 0}
      <div class={`w-48 border-l p-3 ${userListClass}`}>
        <div class="flex items-center text-sm font-medium text-[var(--color-text-primary)] mb-2">
          <BaseIcon name={Users} class="h-4 w-4 mr-1" />
          Collaborators ({users.length})
        </div>
        <div class="space-y-2">
          {#each users as user}
            <div class="flex items-center">
              {#if user.avatar}
                <img
                  src={user.avatar}
                  alt={user.name}
                  class="w-6 h-6 rounded-full mr-2"
                  style={`border: 2px solid ${user.color}`}
                />
              {:else}
                <div
                  class="w-6 h-6 rounded-full flex items-center justify-center text-xs text-[var(--color-text-inverse)] mr-2"
                  style={`background-color: ${user.color}`}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
              {/if}
              <span class="text-sm text-[var(--color-text-primary)]">{user.name}</span>
              {#if currentUser?.id === user.id}
                <span class="ml-1 text-xs text-[var(--color-text-secondary)]">(You)</span>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>




