<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Heart, ThumbsUp, ThumbsDown, Laugh, Smile, Angry, Frown, Eye, Bookmark, Share2, HandHeart, Sparkles } from 'lucide-svelte';

  type ReactionType = 'like' | 'love' | 'laugh' | 'wow' | 'sad' | 'angry' | 'care' | 'share' | 'save' | 'view';

  type Reaction = {
    type: ReactionType;
    count: number;
    active: boolean;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    reactions: Reaction[];
    maxReactions?: number;
    showCounts?: boolean;
    showPicker?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    reactionClass?: string;
    pickerClass?: string;
    onReactionToggle?: (reaction: ReactionType) => void;
    showPickerOnHover?: boolean;
  };

  let {
    reactions = [
      { type: 'like', count: 0, active: false },
      { type: 'love', count: 0, active: false },
      { type: 'laugh', count: 0, active: false },
      { type: 'wow', count: 0, active: false },
      { type: 'sad', count: 0, active: false },
      { type: 'angry', count: 0, active: false }
    ],
    maxReactions = 4,
    showCounts = true,
    showPicker = true,
    size = 'md',
    class: hostClass = '',
    reactionClass = '',
    pickerClass = '',
    onReactionToggle,
    showPickerOnHover = true,
    ...restProps
  }: Props = $props();

  let showEmojiPicker = $state(false);

  function toggleReaction(reactionType: ReactionType) {
    onReactionToggle?.(reactionType);
  }

  function getReactionIcon(reactionType: ReactionType) {
    const iconMap: Record<ReactionType, any> = {
      'like': ThumbsUp,
      'love': Heart,
      'laugh': Laugh,
      'wow': Sparkles,
      'sad': Frown,
      'angry': Angry,
      'care': HandHeart,
      'share': Share2,
      'save': Bookmark,
      'view': Eye
    };
    
    return iconMap[reactionType] || ThumbsUp;
  }

  function getReactionLabel(reactionType: ReactionType): string {
    const labelMap: Record<ReactionType, string> = {
      'like': 'Like',
      'love': 'Love',
      'laugh': 'Haha',
      'wow': 'Wow',
      'sad': 'Sad',
      'angry': 'Angry',
      'care': 'Care',
      'share': 'Share',
      'save': 'Save',
      'view': 'View'
    };
    
    return labelMap[reactionType] || reactionType;
  }

  let sizeClass = $derived({
    'sm': 'h-5 w-5',
    'md': 'h-6 w-6',
    'lg': 'h-8 w-8'
  }[size]);

  let textSizeClass = $derived({
    'sm': 'text-xs',
    'md': 'text-sm',
    'lg': 'text-base'
  }[size]);

  function handleMouseEnter() {
    if (showPickerOnHover) {
      showEmojiPicker = true;
    }
  }

  function handleMouseLeave() {
    if (showPickerOnHover) {
      showEmojiPicker = false;
    }
  }
</script>

<div 
  class={`reaction-picker relative flex items-center ${hostClass}`} 
  {...restProps}
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
>
  <!-- Display active reactions -->
  <div class="flex items-center space-x-1">
    {#each reactions as reaction}
      {#if reaction.active || reaction.count > 0}
        {@const ReactionIcon = getReactionIcon(reaction.type)}
        <button
          type="button"
          class={`flex items-center rounded-full px-2 py-1 ${
            reaction.active 
              ? 'bg-blue-100 text-blue-700 border border-blue-300' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          } ${reactionClass}`}
          onclick={() => toggleReaction(reaction.type)}
          aria-label={`${reaction.active ? 'Remove' : 'Add'} ${getReactionLabel(reaction.type)} reaction`}
        >
          <ReactionIcon class={`${sizeClass} ${reaction.active ? 'fill-current' : ''}`} />
          {#if showCounts && reaction.count > 0}
            <span class={`ml-1 ${textSizeClass} font-medium`}>
              {reaction.count > 99 ? '99+' : reaction.count}
            </span>
          {/if}
        </button>
      {/if}
    {/each}
  </div>
  
  <!-- Emoji picker popover -->
  {#if showPicker && showEmojiPicker}
    <div
      class={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-lg border border-gray-200 bg-white shadow-lg ${pickerClass}`}
    >
      <div class="p-2">
        <div class="grid grid-cols-5 gap-2">
          {#each reactions as reaction}
            {@const ReactionIcon = getReactionIcon(reaction.type)}
            <button
              type="button"
              class={`p-2 rounded-lg hover:bg-gray-100 ${
                reaction.active ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
              }`}
              onclick={() => toggleReaction(reaction.type)}
              aria-label={getReactionLabel(reaction.type)}
            >
              <ReactionIcon class={sizeClass} />
            </button>
          {/each}
        </div>
      </div>
    </div>
  {/if}
  
  <!-- Reaction picker trigger -->
  <button
    type="button"
    class={`ml-1 p-1.5 rounded-full hover:bg-gray-100 ${
      reactions.some(r => r.active) ? 'text-blue-600' : 'text-gray-500'
    }`}
    onclick={() => showEmojiPicker = !showEmojiPicker}
    aria-label="Add reaction"
  >
    {#if reactions.some(r => r.active)}
      <!-- Show first active reaction as icon -->
      {@const firstActive = reactions.find(r => r.active)}
      {@const FirstActiveIcon = getReactionIcon(firstActive?.type || 'like')}
      <FirstActiveIcon class={`h-5 w-5 ${firstActive ? 'fill-current' : ''}`} />
    {:else}
      <Smile class="h-5 w-5" />
    {/if}
  </button>
</div>
