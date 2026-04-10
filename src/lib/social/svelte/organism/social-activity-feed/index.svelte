<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
  import { Icon as BaseIcon } from '$stylist';
  import { Avatar } from '$lib';
  import {
    SOCIAL_ACTIVITY_FEED_HEART as Heart,
    SOCIAL_ACTIVITY_FEED_MESSAGE_CIRCLE as MessageCircle,
    SOCIAL_ACTIVITY_FEED_SHARE_2 as Share2,
    SOCIAL_ACTIVITY_FEED_USER_PLUS as UserPlus,
    SOCIAL_ACTIVITY_FEED_AT_SIGN as AtSign,
    SOCIAL_ACTIVITY_FEED_AWARD as Award,
    SOCIAL_ACTIVITY_FEED_SETTINGS as Settings,
    SOCIAL_ACTIVITY_FEED_BELL as Bell,
    SOCIAL_ACTIVITY_FEED_ACTIVITY as ActivityGlyph,
    SOCIAL_ACTIVITY_FEED_CIRCLE as Circle,
    SOCIAL_ACTIVITY_FEED_CHECK as Check,
    SOCIAL_ACTIVITY_FEED_MORE_HORIZONTAL as MoreHorizontal,
    SOCIAL_ACTIVITY_FEED_ARROW_RIGHT as ArrowRight,
    SOCIAL_ACTIVITY_FEED_CHECK_CIRCLE as CheckCircle,
    SOCIAL_ACTIVITY_FEED_CLOCK as Clock
  } from '$stylist/social/const/map/social-activity-feed';
  import {
    socialActivityFeedGetDescription,
    socialActivityFeedFormatTime
  } from '$stylist/social/function/script/social-activity-feed';
  import createSocialActivityFeedState from '$stylist/social/function/state/social-activity-feed';
  import type { Activity, Props } from '$stylist/social/type/struct/social-activity-feed';

  let props: Props = $props();
  const state = createSocialActivityFeedState(props);
</script>

<div class={`social-activity-feed ${state.hostClass}`} {...props}>
  <div class={`border-b border-[var(--color-border-primary)] p-4 ${state.headerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <BaseIcon name={ActivityGlyph} class="h-5 w-5 text-[var(--color-text-secondary)] mr-2" />
        <h2 class="text-lg font-medium text-[var(--color-text-primary)]">Activity Feed</h2>

        {#if props.showReadStatus && state.unreadCount > 0}
          <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-danger-100)] text-[var(--color-danger-800)]">
            {state.unreadCount} unread
          </span>
        {/if}
      </div>

      {#if props.enableFiltering}
        <div class="flex space-x-2">
          <button
            type="button"
            class={`px-3 py-1 rounded-full text-xs font-medium ${
              state.activeFilter === 'all'
                ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]'
                : 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-tertiary)]'
            }`}
            onclick={() => state.activeFilter = 'all'}
          >
            All
          </button>
          {#each state.activityTypes as type}
            <button
              type="button"
              class={`px-3 py-1 rounded-full text-xs font-medium ${
                state.activeFilter === type
                  ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]'
                  : 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-tertiary)]'
              }`}
              onclick={() => state.activeFilter = type as any}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  </div>

  <div class="divide-y divide-gray-200">
    {#if state.filteredActivities.length === 0}
      <div class="text-center py-8">
        <BaseIcon name={ActivityGlyph} class="mx-auto h-12 w-12 text-[var(--color-text-tertiary)]" />
        <h3 class="mt-2 text-sm font-medium text-[var(--color-text-primary)]">No activities</h3>
        <p class="mt-1 text-sm text-[var(--color-text-secondary)]">When activities happen, they'll appear here.</p>
      </div>
    {:else}
      {#each state.filteredActivities as activity}
        <div
          class={`p-4 hover:bg-[var(--color-background-secondary)] cursor-pointer transition-colors ${
            activity.isRead ? 'bg-[var(--color-background-primary)]' : 'bg-[var(--color-primary-50)]'
          } ${state.itemClass}`}
          role="button"
          tabindex="0"
          onclick={() => state.handleActivityClick(activity)}
          onkeydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              state.handleActivityClick(activity);
            }
          }}
        >
          <div class="flex space-x-3">
            {#if props.showAvatars}
              <div class="flex-shrink-0">
                <Avatar
                  src={activity.actor.avatar}
                  alt={activity.actor.name}
                  size="md"
                />
              </div>
            {/if}

            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-[var(--color-text-primary)]">
                  {activity.actor.name}
                  {#if activity.actor.isVerified}
                    <span class="ml-1 text-[var(--color-primary-600)]">
                      <BaseIcon name={CheckCircle} class="h-4 w-4 inline" />
                    </span>
                  {/if}
                </p>

                {#if props.showTimestamp}
                  <div class="flex items-center">
                    <BaseIcon name={Clock} class="h-4 w-4 text-[var(--color-text-tertiary)] mr-1" />
                    <span class="text-xs text-[var(--color-text-secondary)]">
                      {socialActivityFeedFormatTime(activity.timestamp, props.locale)}
                    </span>
                  </div>
                {/if}
              </div>

              <p class="mt-0.5 text-sm text-[var(--color-text-primary)]">
                {socialActivityFeedGetDescription(activity)}
              </p>

              {#if activity.content && activity.type !== 'system' && activity.type !== 'announcement'}
                <p class="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {activity.content}
                </p>
              {/if}

              {#if activity.relatedUrl}
                <a
                  href={activity.relatedUrl}
                  class="mt-2 inline-flex items-center text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]"
                  onclick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    window.open(activity.relatedUrl, '_blank');
                  }}
                >
                  View related content
                  <BaseIcon name={ArrowRight} class="h-4 w-4 ml-1" />
                </a>
              {/if}
            </div>

            <div class="flex items-center space-x-2">
              {#if props.showReadStatus}
                {#if activity.isRead}
                  <button
                    type="button"
                    class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
                    onclick={(e) => {
                      e.stopPropagation();
                      state.handleMarkAsUnread(activity.id);
                    }}
                    aria-label="Mark as unread"
                  >
                    <BaseIcon name={Check} class="h-4 w-4" />
                  </button>
                {:else}
                  <button
                    type="button"
                    class="text-[var(--color-primary-600)] hover:text-[var(--color-primary-800)]"
                    onclick={(e) => {
                      e.stopPropagation();
                      state.handleMarkAsRead(activity.id);
                    }}
                    aria-label="Mark as read"
                  >
                    <BaseIcon name={Circle} class="h-4 w-4" />
                  </button>
                {/if}
              {/if}

              <button
                type="button"
                class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
                onclick={(e) => {
                  e.stopPropagation();
                  // Handle more options
                }}
                aria-label="More options"
              >
                <BaseIcon name={MoreHorizontal} class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </div>

  {#if props.showLoadMore && (props.activities?.length ?? 0) > state.filteredActivities.length}
    <div class={`p-4 border-t border-[var(--color-border-primary)] ${state.footerClass}`}>
      <button
        type="button"
        class="w-full inline-flex justify-center items-center px-4 py-2 border border-[var(--color-border-primary)] shadow-sm text-sm font-medium rounded-md text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onclick={() => {
          // Load more activities
        }}
      >
        Load more
      </button>
    </div>
  {/if}
</div>
