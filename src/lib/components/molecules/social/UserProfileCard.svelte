<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { 
    User, 
    MessageCircle, 
    Phone, 
    Mail, 
    MapPin, 
    Calendar, 
    Users, 
    Heart, 
    Settings,
    MoreHorizontal,
    Check,
    X,
    UserPlus,
    UserCheck,
    Plus,
    Twitter,
    Github,
    Linkedin,
    Globe,
    Instagram,
    CheckCircle
  } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Badge from '../../atoms/typography/elements/Badge.svelte';

  type SocialLink = {
    type: 'twitter' | 'github' | 'linkedin' | 'website' | 'instagram';
    url: string;
  };

  type UserStatus = 'online' | 'offline' | 'away' | 'busy';

  type UserProfile = {
    id: string;
    name: string;
    username?: string;
    email?: string;
    phone?: string;
    avatar?: string;
    coverImage?: string;
    bio?: string;
    location?: string;
    joinedDate?: Date;
    stats?: {
      followers?: number;
      following?: number;
      posts?: number;
    };
    tags?: string[];
    status?: UserStatus;
    isFollowing?: boolean;
    isFriend?: boolean;
    isVerified?: boolean;
    socialLinks?: SocialLink[];
    role?: string;
    achievements?: string[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    user: UserProfile;
    showCoverImage?: boolean;
    showBio?: boolean;
    showLocation?: boolean;
    showJoinDate?: boolean;
    showStats?: boolean;
    showTags?: boolean;
    showSocialLinks?: boolean;
    showActions?: boolean;
    showStatus?: boolean;
    compact?: boolean;
    class?: string;
    headerClass?: string;
    bodyClass?: string;
    actionsClass?: string;
    onSendMessage?: (user: UserProfile) => void;
    onFollowToggle?: (user: UserProfile) => void;
    onAddFriend?: (user: UserProfile) => void;
    onSettingsClick?: (user: UserProfile) => void;
    locale?: string;
  };

  let {
    user,
    showCoverImage = true,
    showBio = true,
    showLocation = true,
    showJoinDate = true,
    showStats = true,
    showTags = true,
    showSocialLinks = true,
    showActions = true,
    showStatus = true,
    compact = false,
    class: hostClass = '',
    headerClass = '',
    bodyClass = '',
    actionsClass = '',
    onSendMessage,
    onFollowToggle,
    onAddFriend,
    onSettingsClick,
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let isFollowing = $state(user.isFollowing || false);
  let isFriend = $state(user.isFriend || false);

  $effect(() => {
    isFollowing = user.isFollowing || false;
    isFriend = user.isFriend || false;
  });

  function handleFollowToggle() {
    isFollowing = !isFollowing;
    onFollowToggle?.({ ...user, isFollowing });
  }

  function handleAddFriend() {
    isFriend = !isFriend;
    onAddFriend?.({ ...user, isFriend });
  }

  function handleMessage() {
    onSendMessage?.(user);
  }

  function handleSettings() {
    onSettingsClick?.(user);
  }

  function getStatusColor(status: UserStatus) {
    const colors: Record<UserStatus, string> = {
      'online': 'bg-green-500',
      'offline': 'bg-gray-400',
      'away': 'bg-yellow-500',
      'busy': 'bg-red-500'
    };
    return colors[status] || 'bg-gray-400';
  }

  function formatJoinDate(date: Date): string {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long'
    });
  }

  function formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }

  let statusColor = $derived(getStatusColor(user.status || 'offline'));
  let statusLabel = $derived(user.status ? user.status.charAt(0).toUpperCase() + user.status.slice(1) : '');
</script>

<div class={`user-profile-card rounded-xl border overflow-hidden shadow-sm ${compact ? 'max-w-sm' : 'max-w-md'} ${hostClass}`} {...restProps}>
  {#if showCoverImage && user.coverImage}
    <div class="h-32 w-full bg-gray-200 overflow-hidden">
      <img 
        src={user.coverImage} 
        alt={user.name ? `Cover for ${user.name}` : 'Profile cover'} 
        class="w-full h-full object-cover"
      />
    </div>
  {/if}
  
  <div class={`relative p-6 ${bodyClass}`}>
    <div class="flex">
      <div class="flex-shrink-0">
        <div class="relative">
          <div class="h-24 w-24 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
            {#if user.avatar}
              <img 
                src={user.avatar} 
                alt={user.name} 
                class="w-full h-full object-cover"
              />
            {:else}
              <div class="w-full h-full flex items-center justify-center bg-gray-200">
                <User class="h-10 w-10 text-gray-500" />
              </div>
            {/if}
          </div>
          
          {#if showStatus && user.status}
            <span class={`absolute bottom-0 right-0 block h-5 w-5 rounded-full border-2 border-white ${statusColor}`}></span>
          {/if}
        </div>
      </div>
      
      <div class="ml-6 flex-1 min-w-0">
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center">
              <h2 class="text-xl font-bold text-gray-900 truncate">{user.name}</h2>
              {#if user.isVerified}
                <CheckCircle class="h-5 w-5 text-blue-500 ml-1.5" />
              {/if}
            </div>
            
            {#if user.username}
              <p class="text-gray-600">@{user.username}</p>
            {/if}
            
            {#if showStatus && user.status}
              <p class="mt-1 text-sm">
                <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.status === 'online' ? 'bg-green-100 text-green-800' :
                  user.status === 'away' ? 'bg-yellow-100 text-yellow-800' :
                  user.status === 'busy' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  <span class={`w-2 h-2 rounded-full mr-1.5 ${statusColor}`}></span>
                  {statusLabel}
                </span>
              </p>
            {/if}
          </div>
          
          {#if showActions}
            <div class="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onclick={handleMessage}
                aria-label="Send message"
              >
                <MessageCircle class="h-4 w-4 mr-1" />
                <span class="hidden sm:inline">Message</span>
              </Button>
              
              {#if !compact}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onclick={handleSettings}
                  aria-label="Settings"
                >
                  <Settings class="h-4 w-4" />
                </Button>
              {/if}
            </div>
          {/if}
        </div>
        
        {#if showBio && user.bio}
          <p class="mt-4 text-gray-700">{user.bio}</p>
        {/if}
        
        {#if showLocation && user.location}
          <div class="mt-4 flex items-center text-sm text-gray-600">
            <MapPin class="h-4 w-4 mr-1.5" />
            <span>{user.location}</span>
          </div>
        {/if}
        
        {#if showJoinDate && user.joinedDate}
          <div class="mt-2 flex items-center text-sm text-gray-600">
            <Calendar class="h-4 w-4 mr-1.5" />
            <span>Joined {formatJoinDate(user.joinedDate)}</span>
          </div>
        {/if}
        
        {#if showTags && user.tags && user.tags.length > 0}
          <div class="mt-4 flex flex-wrap gap-2">
            {#each user.tags as tag}
              <Badge variant="info" class="text-xs">{tag}</Badge>
            {/each}
          </div>
        {/if}
      </div>
    </div>
    
    {#if showStats && user.stats}
      <div class="mt-6 flex justify-between border-t border-b border-gray-200 py-4">
        <div class="text-center">
          <p class="text-lg font-bold text-gray-900">{user.stats.posts ? formatNumber(user.stats.posts) : '0'}</p>
          <p class="text-sm text-gray-600">Posts</p>
        </div>
        <div class="text-center">
          <p class="text-lg font-bold text-gray-900">{user.stats.followers ? formatNumber(user.stats.followers) : '0'}</p>
          <p class="text-sm text-gray-600">Followers</p>
        </div>
        <div class="text-center">
          <p class="text-lg font-bold text-gray-900">{user.stats.following ? formatNumber(user.stats.following) : '0'}</p>
          <p class="text-sm text-gray-600">Following</p>
        </div>
      </div>
    {/if}
    
    <div class={`mt-6 ${actionsClass}`}>
      <div class="flex items-center space-x-3">
        <Button 
          variant={isFollowing ? "ghost" : "primary"}
          class="flex-1"
          onclick={handleFollowToggle}
        >
          {#if isFollowing}
            <Check class="h-4 w-4 mr-2" />
            Following
          {:else}
            <Plus class="h-4 w-4 mr-2" />
            Follow
          {/if}
        </Button>
        
        <Button 
          variant={isFriend ? "ghost" : "secondary"}
          size="sm"
          class="h-10 w-10 p-0 inline-flex items-center justify-center"
          onclick={handleAddFriend}
          aria-label={isFriend ? "Unfriend" : "Add friend"}
        >
          {#if isFriend}
            <UserCheck class="h-4 w-4 text-green-600" />
          {:else}
            <UserPlus class="h-4 w-4" />
          {/if}
        </Button>
      </div>
    </div>
    
    {#if showSocialLinks && user.socialLinks && user.socialLinks.length > 0}
      <div class="mt-6">
        <h3 class="text-sm font-medium text-gray-900">Connect</h3>
        <div class="mt-2 flex space-x-4">
          {#each user.socialLinks as link}
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-gray-700"
              aria-label={`Visit ${link.type} profile`}
            >
              {#if link.type === 'twitter'}
                <Twitter class="h-5 w-5" />
              {:else if link.type === 'github'}
                <Github class="h-5 w-5" />
              {:else if link.type === 'linkedin'}
                <Linkedin class="h-5 w-5" />
              {:else if link.type === 'website'}
                <Globe class="h-5 w-5" />
              {:else if link.type === 'instagram'}
                <Instagram class="h-5 w-5" />
              {/if}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
