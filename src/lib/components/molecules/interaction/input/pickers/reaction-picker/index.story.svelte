<script lang="ts">
  import ReactionPicker from './index.svelte';

  type ReactionType = 'like' | 'love' | 'laugh' | 'wow' | 'sad' | 'angry' | 'care' | 'share' | 'save' | 'view';

  type Reaction = {
    type: ReactionType;
    count: number;
    active: boolean;
  };

  const reactions: Reaction[] = [
    { type: 'like', count: 5, active: false },
    { type: 'love', count: 3, active: false },
    { type: 'laugh', count: 2, active: true },
    { type: 'wow', count: 1, active: false },
    { type: 'sad', count: 0, active: false },
    { type: 'angry', count: 0, active: false }
  ];
</script>

<div class="p-4">
  <h1>ReactionPicker Story</h1>
  <ReactionPicker
    {reactions}
    class="my-2"
  />
</div>
