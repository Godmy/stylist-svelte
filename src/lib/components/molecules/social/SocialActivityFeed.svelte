<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { 
    Heart, 
    MessageCircle, 
    Share2, 
    UserPlus, 
    AtSign, 
    Award, 
    Settings,
    Bell,
    Activity as ActivityGlyph,
    Circle,
    Check,
    MoreHorizontal,
    ArrowRight,
    CheckCircle,
    Clock
  } from 'lucide-svelte';
  import { Avatar } from '$lib/components/atoms';

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

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

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
  <div class={`border-b border-gray-200 p-4 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <ActivityGlyph class="h-5 w-5 text-gray-500 mr-2" />
        <h2 class="text-lg font-medium text-gray-900">Activity Feed</h2>
        
        {#if showReadStatus && unreadCount > 0}
          <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
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
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
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
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
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
        <ActivityGlyph class="mx-auto h-12 w-12 text-gray-400" />
        <h3 class="mt-2 text-sm font-medium text-gray-900">No activities</h3>
        <p class="mt-1 text-sm text-gray-500">When activities happen, they'll appear here.</p>
      </div>
    {:else}
      {#each filteredActivities as activity}
        <div 
          class={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
            activity.isRead ? 'bg-white' : 'bg-blue-50'
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
                <p class="text-sm font-medium text-gray-900">
                  {activity.actor.name}
                  {#if activity.actor.isVerified}
                    <span class="ml-1 text-blue-600">
                      <CheckCircle class="h-4 w-4 inline" />
                    </span>
                  {/if}
                </p>
                
                {#if showTimestamp}
                  <div class="flex items-center">
                    <Clock class="h-4 w-4 text-gray-400 mr-1" />
                    <span class="text-xs text-gray-500">
                      {formatTime(activity.timestamp)}
                    </span>
                  </div>
                {/if}
              </div>
              
              <p class="mt-0.5 text-sm text-gray-700">
                {getActivityDescription(activity)}
              </p>
              
              {#if activity.content && activity.type !== 'system' && activity.type !== 'announcement'}
                <p class="mt-1 text-sm text-gray-500">
                  {activity.content}
                </p>
              {/if}
              
              {#if activity.relatedUrl}
                <a 
                  href={activity.relatedUrl} 
                  class="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                  onclick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    window.open(activity.relatedUrl, '_blank');
                  }}
                >
                  View related content
                  <ArrowRight class="h-4 w-4 ml-1" />
                </a>
              {/if}
            </div>
            
            <div class="flex items-center space-x-2">
              {#if showReadStatus}
                {#if activity.isRead}
                  <button
                    type="button"
                    class="text-gray-400 hover:text-gray-500"
                    onclick={(e) => {
                      e.stopPropagation();
                      handleMarkAsUnread(activity.id);
                    }}
                    aria-label="Mark as unread"
                  >
                    <Check class="h-4 w-4" />
                  </button>
                {:else}
                  <button
                    type="button"
                    class="text-blue-600 hover:text-blue-800"
                    onclick={(e) => {
                      e.stopPropagation();
                      handleMarkAsRead(activity.id);
                    }}
                    aria-label="Mark as read"
                  >
                    <Circle class="h-4 w-4" />
                  </button>
                {/if}
              {/if}
              
              <button
                type="button"
                class="text-gray-400 hover:text-gray-500"
                onclick={(e) => {
                  e.stopPropagation();
                  // Handle more options
                }}
                aria-label="More options"
              >
                <MoreHorizontal class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </div>
  
  {#if showLoadMore && activities.length > filteredActivities.length}
    <div class={`p-4 border-t border-gray-200 ${footerClass}`}>
      <button
        type="button"
        class="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onclick={() => {
          // In a real app, this would implement loading more activities
        }}
      >
        Load more
      </button>
    </div>
  {/if}
</div>
