<script lang="ts">
  import FollowButton from './index.svelte';

  let isFollowing: boolean = false;
  let showText: boolean = true;
  let variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  let size: 'sm' | 'md' | 'lg' = 'md';
  let disabled: boolean = false;
  let followingText: string = 'Following';
  let unfollowText: string = 'Follow';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">FollowButton Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive FollowButton</h2>
    <div class="flex items-center gap-2">
      <FollowButton 
        {isFollowing}
        {showText}
        {variant}
        {size}
        {disabled}
        {followingText}
        {unfollowText}
        onFollow={() => {
          console.log('Following user');
          isFollowing = true;
        }}
        onUnfollow={() => {
          console.log('Unfollowing user');
          isFollowing = false;
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="follow-variant" class="block text-sm mb-1">Variant:</label>
        <select
          id="follow-variant"
          bind:value={variant}
          class="border rounded p-1"
        >
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="outline">Outline</option>
          <option value="ghost">Ghost</option>
        </select>
      </div>

      <div>
        <label for="follow-size" class="block text-sm mb-1">Size:</label>
        <select
          id="follow-size"
          bind:value={size}
          class="border rounded p-1"
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="follow-show-text" class="flex items-center gap-1">
          <input id="follow-show-text" type="checkbox" bind:checked={showText} />
          Show Text
        </label>
      </div>

      <div class="flex items-end">
        <label for="follow-is-following" class="flex items-center gap-1">
          <input id="follow-is-following" type="checkbox" bind:checked={isFollowing} />
          Is Following
        </label>
      </div>

      <div class="flex items-end">
        <label for="follow-disabled" class="flex items-center gap-1">
          <input id="follow-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">FollowButton Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Different Variants</h3>
        <div class="flex items-center gap-2">
          <FollowButton 
            variant="primary"
            isFollowing={false}
            onFollow={() => console.log('Primary follow')}
            onUnfollow={() => console.log('Primary unfollow')}
          />
          <FollowButton 
            variant="secondary"
            isFollowing={true}
            onFollow={() => console.log('Secondary follow')}
            onUnfollow={() => console.log('Secondary unfollow')}
          />
          <FollowButton 
            variant="outline"
            isFollowing={false}
            onFollow={() => console.log('Outline follow')}
            onUnfollow={() => console.log('Outline unfollow')}
          />
          <FollowButton 
            variant="ghost"
            isFollowing={true}
            onFollow={() => console.log('Ghost follow')}
            onUnfollow={() => console.log('Ghost unfollow')}
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Different Sizes</h3>
        <div class="flex items-center gap-2">
          <FollowButton 
            size="sm"
            isFollowing={false}
            onFollow={() => console.log('SM follow')}
            onUnfollow={() => console.log('SM unfollow')}
          />
          <FollowButton 
            size="md"
            isFollowing={true}
            onFollow={() => console.log('MD follow')}
            onUnfollow={() => console.log('MD unfollow')}
          />
          <FollowButton 
            size="lg"
            isFollowing={false}
            onFollow={() => console.log('LG follow')}
            onUnfollow={() => console.log('LG unfollow')}
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">No Text</h3>
        <div class="flex items-center gap-2">
          <FollowButton 
            showText={false}
            isFollowing={false}
            onFollow={() => console.log('Icon follow')}
            onUnfollow={() => console.log('Icon unfollow')}
          />
          <FollowButton 
            showText={false}
            isFollowing={true}
            onFollow={() => console.log('Icon follow')}
            onUnfollow={() => console.log('Icon unfollow')}
          />
        </div>
      </div>
    </div>
  </div>
</div>


