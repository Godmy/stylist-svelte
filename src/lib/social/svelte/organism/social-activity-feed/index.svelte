<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
  import { Icon as BaseIcon } from '$stylist';
const Heart = 'heart';
const MessageCircle = 'message-circle';
const Share2 = 'share-2';
const UserPlus = 'user-plus';
const AtSign = 'at-sign';
const Award = 'award';
const Settings = 'settings';
const Bell = 'bell';
const ActivityGlyph = 'activity';
const Circle = 'circle';
const Check = 'check';
const MoreHorizontal = 'more-horizontal';
const ArrowRight = 'arrow-right';
const CheckCircle = 'check-circle';
const Clock = 'clock';

  import { Avatar } from '$lib';

  type ActivityType = 
    | 'like' 
    | 'comment' 
    | 'follow' 
    | 'share' 
    | 'mention' 
    | 'achievement'
    | 'system'
    | 'announcement';

  type User = {
    id: string;
    name: string;
    username?: string;
    avatar?: string;
    isVerified?: boolean;
  };

  type Activity = {
    id: string;
    type: ActivityType;
    actor: User;
    target?: User; // For follow activities
    subject?: string; // Object of the activity (e.g., post title)
    content?: string; // Additional content
    timestamp: Date;
    relatedUrl?: string;
    isRead?: boolean;
    isImportant?: boolean;
  };

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    activities: Activity[];
    showAvatars?: boolean;
    showTimestamp?: boolean;
    showReadStatus?: boolean;
    enableFiltering?: boolean;
    showLoadMore?: boolean;
    maxActivities?: number;
    onActivityClick?: (activity: Activity) => void;
    onActivityMarkRead?: (activityId: string) => void;
    onActivityMarkUnread?: (activityId: string) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    footerClass?: string;
    locale?: string;
  };

  let {
    activities = [],
    showAvatars = true,
    showTimestamp = true,
    showReadStatus = true,
    enableFiltering = true,
    showLoadMore = true,
    maxActivities = 10,
    onActivityClick,
    onActivityMarkRead,
    onActivityMarkUnread,
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    footerClass = '',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let activityTypes: ActivityType[] = ['like', 'comment', 'follow', 'share', 'mention', 'achievement', 'system', 'announcement'];
  let activeFilter: ActivityType | 'all' = $state('all');
  let filteredActivities = $derived.by(() => {
    let result = [...activities];
    
    if (activeFilter !== 'all') {
      result = result.filter(activity => activity.type === activeFilter);
    }
    
    return result.slice(0, maxActivities);
  });

  let unreadCount = $derived.by(() => 
    activities.filter(activity => !activity.isRead).length
  );

  function handleActivityClick(activity: Activity) {
    onActivityClick?.(activity);
    
    // Automatically mark as read when clicked
    if (!activity.isRead) {
      onActivityMarkRead?.(activity.id);
    }
  }

  function handleMarkAsRead(activityId: string) {
    onActivityMarkRead?.(activityId);
  }

  function handleMarkAsUnread(activityId: string) {
    onActivityMarkUnread?.(activityId);
  }

  function getActivityIcon(type: ActivityType) {
    const iconMap: Record<ActivityType, any> = {
      'like': Heart,
      'comment': MessageCircle,
      'follow': UserPlus,
      'share': Share2,
      'mention': AtSign,
      'achievement': Award,
      'system': Settings,
      'announcement': Bell
    };
    
    return iconMap[type] || ActivityGlyph;
  }

  function getActivityDescription(activity: Activity): string {
    switch (activity.type) {
      case 'like':
        return `${activity.actor.name} liked your ${activity.subject || 'content'}`;
      case 'comment':
        return `${activity.actor.name} commented on your ${activity.subject || 'post'}`;
      case 'follow':
        return `${activity.actor.name} started following you`;
      case 'mention':
        return `${activity.actor.name} mentioned you in a ${activity.subject || 'post'}`;
      case 'share':
        return `${activity.actor.name} shared your ${activity.subject || 'content'}`;
      case 'achievement':
        return `Congratulations! ${activity.actor.name} earned the ${activity.subject || 'achievement'}`;
      case 'system':
        return `System notification: ${activity.content || ''}`;
      case 'announcement':
        return `Announcement: ${activity.subject || 'New update available'}`;
      default:
        return `${activity.actor.name} performed an action`;
    }
  }

  function formatTime(date: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    
    return new Date(date).toLocaleDateString(locale, {
      month: 'short',
      day: 'numeric',
      year: now.getFullYear() !== new Date(date).getFullYear() ? 'numeric' : undefined
    });
  }

</script>

<div class={`social-activity-feed ${hostClass}`} {...restProps}>
  <div class={`border-b border-[var(--color-border-primary)] p-4 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <BaseIcon name={ActivityGlyph} class="h-5 w-5 text-[var(--color-text-secondary)] mr-2" />
        <h2 class="text-lg font-medium text-[var(--color-text-primary)]">Activity Feed</h2>
        
        {#if showReadStatus && unreadCount > 0}
          <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-danger-100)] text-[var(--color-danger-800)]">
            {unreadCount} unread
          </span>
        {/if}
      </div>
      
      {#if enableFiltering}
        <div class="flex space-x-2">
          <button
            type="button"
            class={`px-3 py-1 rounded-full text-xs font-medium ${
              activeFilter === 'all'
                ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]'
                : 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-tertiary)]'
            }`}
            onclick={() => activeFilter = 'all'}
          >
            All
          </button>
          {#each activityTypes as type}
            <button
              type="button"
              class={`px-3 py-1 rounded-full text-xs font-medium ${
                activeFilter === type
                  ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]'
                  : 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-tertiary)]'
              }`}
              onclick={() => activeFilter = type}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  </div>
  
  <div class="divide-y divide-gray-200">
    {#if filteredActivities.length === 0}
      <div class="text-center py-8">
        <BaseIcon name={ActivityGlyph} class="mx-auto h-12 w-12 text-[var(--color-text-tertiary)]" />
        <h3 class="mt-2 text-sm font-medium text-[var(--color-text-primary)]">No activities</h3>
        <p class="mt-1 text-sm text-[var(--color-text-secondary)]">When activities happen, they'll appear here.</p>
      </div>
    {:else}
      {#each filteredActivities as activity}
        <div 
          class={`p-4 hover:bg-[var(--color-background-secondary)] cursor-pointer transition-colors ${
            activity.isRead ? 'bg-[var(--color-background-primary)]' : 'bg-[var(--color-primary-50)]'
          } ${itemClass}`}
          role="button"
          tabindex="0"
          onclick={() => handleActivityClick(activity)}
          onkeydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleActivityClick(activity);
            }
          }}
        >
          <div class="flex space-x-3">
            {#if showAvatars}
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
                
                {#if showTimestamp}
                  <div class="flex items-center">
                    <BaseIcon name={Clock} class="h-4 w-4 text-[var(--color-text-tertiary)] mr-1" />
                    <span class="text-xs text-[var(--color-text-secondary)]">
                      {formatTime(activity.timestamp)}
                    </span>
                  </div>
                {/if}
              </div>
              
              <p class="mt-0.5 text-sm text-[var(--color-text-primary)]">
                {getActivityDescription(activity)}
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
              {#if showReadStatus}
                {#if activity.isRead}
                  <button
                    type="button"
                    class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
                    onclick={(e) => {
                      e.stopPropagation();
                      handleMarkAsUnread(activity.id);
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
                      handleMarkAsRead(activity.id);
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
  
  {#if showLoadMore && activities.length > filteredActivities.length}
    <div class={`p-4 border-t border-[var(--color-border-primary)] ${footerClass}`}>
      <button
        type="button"
        class="w-full inline-flex justify-center items-center px-4 py-2 border border-[var(--color-border-primary)] shadow-sm text-sm font-medium rounded-md text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onclick={() => {
          // In a real app, this would implement loading more activities
        }}
      >
        Load more
      </button>
    </div>
  {/if}
</div>





