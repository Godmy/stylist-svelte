<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    AlignRight,
    List,
    ListOrdered,
    MessageCircle,
    User,
    Users
  } from 'lucide-svelte';

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
  } & HTMLAttributes<HTMLDivElement>;

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
      commentMarker.textContent = ' ¶';
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

<div class={`c-collaborative-editor flex flex-col border border-gray-200 rounded-lg overflow-hidden ${className}`} {...restProps}>
  {#if showToolbar}
    <div class={`flex items-center p-2 border-b border-gray-200 bg-gray-50 space-x-1 ${toolbarClass}`}>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('bold')}
        title="Bold"
      >
        <Bold class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('italic')}
        title="Italic"
      >
        <Italic class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('underline')}
        title="Underline"
      >
        <Underline class="h-4 w-4" />
      </button>
      <div class="w-px h-6 bg-gray-300 mx-1"></div>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('justifyLeft')}
        title="Align Left"
      >
        <AlignLeft class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('justifyCenter')}
        title="Align Center"
      >
        <AlignCenter class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('justifyRight')}
        title="Align Right"
      >
        <AlignRight class="h-4 w-4" />
      </button>
      <div class="w-px h-6 bg-gray-300 mx-1"></div>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('insertUnorderedList')}
        title="Bullet List"
      >
        <List class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('insertOrderedList')}
        title="Numbered List"
      >
        <ListOrdered class="h-4 w-4" />
      </button>
      <div class="w-px h-6 bg-gray-300 mx-1"></div>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={insertComment}
        title="Insert Comment"
      >
        <MessageCircle class="h-4 w-4" />
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
        <div class="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Users class="h-4 w-4 mr-1" />
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
                  class="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white mr-2"
                  style={`background-color: ${user.color}`}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
              {/if}
              <span class="text-sm text-gray-700">{user.name}</span>
              {#if currentUser?.id === user.id}
                <span class="ml-1 text-xs text-gray-500">(You)</span>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
