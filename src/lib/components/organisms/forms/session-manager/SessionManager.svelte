<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { 
    User, 
    Clock, 
    Globe, 
    Activity, 
    LogOut, 
    RefreshCw, 
    ShieldAlert, 
    AlertTriangle,
    MoreVertical,
    ShieldCheck // Added ShieldCheck import
  } from 'lucide-svelte';

  type ActiveSession = {
    id: string;
    userAgent: string;
    ipAddress: string;
    location: string;
    loginTime: Date;
    lastActivity: Date;
    isCurrent: boolean;
    isActive: boolean;
  };

  type Props = {
    sessions: ActiveSession[];
    currentUser?: string;
    onLogoutSession?: (sessionId: string) => void;
    onLogoutAllSessions?: () => void;
    onRefreshSessions?: () => void;
    showCurrentSessionIndicator?: boolean;
    showLocation?: boolean;
    showLastActivity?: boolean;
    class?: string;
    headerClass?: string;
    sessionClass?: string;
    actionsClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    sessions = [],
    currentUser,
    onLogoutSession,
    onLogoutAllSessions,
    onRefreshSessions,
    showCurrentSessionIndicator = true,
    showLocation = true,
    showLastActivity = true,
    class: className = '',
    headerClass = '',
    sessionClass = '',
    actionsClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  let isRefreshing = $state(false);

  function handleLogoutSession(sessionId: string) {
    if (onLogoutSession) {
      onLogoutSession(sessionId);
    }
  }

  function handleLogoutAllSessions() {
    if (onLogoutAllSessions) {
      onLogoutAllSessions();
    }
  }

  async function refreshSessions() {
    if (onRefreshSessions) {
      isRefreshing = true;
      try {
        await onRefreshSessions();
      } finally {
        isRefreshing = false;
      }
    }
  }

  function formatTime(date: Date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function formatDate(date: Date) {
    return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function formatDuration(lastActivity: Date) {
    const now = new Date();
    const diffMs = now.getTime() - lastActivity.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  }

  // Extract device and browser info from user agent
  function parseUserAgent(userAgent: string) {
    // Simplified parsing - in a real app you might use a library like ua-parser-js
    const ua = userAgent.toLowerCase();
    
    let device = 'Desktop';
    if (ua.includes('mobile')) device = 'Mobile';
    else if (ua.includes('tablet')) device = 'Tablet';
    
    let browser = 'Unknown';
    if (ua.includes('chrome')) browser = 'Chrome';
    else if (ua.includes('firefox')) browser = 'Firefox';
    else if (ua.includes('safari')) browser = 'Safari';
    else if (ua.includes('edge')) browser = 'Edge';
    else if (ua.includes('opera')) browser = 'Opera';
    
    return { device, browser };
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <ShieldCheck class="h-6 w-6 text-gray-500 mr-2" />
        <h3 class="text-lg font-medium text-gray-900">Active Sessions</h3>
      </div>
      
      <div class="flex items-center space-x-3">
        <button
          type="button"
          class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          onclick={refreshSessions}
          disabled={isRefreshing}
        >
          {#if isRefreshing}
            <RefreshCw class="h-4 w-4 mr-2 animate-spin" />
            Refreshing...
          {:else}
            <RefreshCw class="h-4 w-4 mr-2" />
            Refresh
          {/if}
        </button>
        
        {#if sessions.length > 1}
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none"
            onclick={handleLogoutAllSessions}
          >
            <LogOut class="h-4 w-4 mr-2" />
            Logout All
          </button>
        {/if}
      </div>
    </div>
    
    <p class="mt-1 text-sm text-gray-500">
      Manage your active sessions across all devices
    </p>
  </div>

  <div class="divide-y divide-gray-200">
    {#if sessions.length === 0}
      <div class="p-8 text-center">
        <Activity class="h-12 w-12 text-gray-400 mx-auto mb-2" />
        <h4 class="text-sm font-medium text-gray-900 mb-1">No active sessions</h4>
        <p class="text-sm text-gray-500">You're not currently logged in on any device</p>
      </div>
    {:else}
      {#each sessions as session}
        <div class={`p-6 ${sessionClass} ${session.isActive ? '' : 'opacity-70'}`}>
          <div class="flex items-start justify-between">
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-0.5">
                <div class="p-2 bg-gray-100 rounded-md">
                  {#if session.isCurrent}
                    <User class="h-5 w-5 text-blue-600" />
                  {:else}
                    <User class="h-5 w-5 text-gray-500" />
                  {/if}
                </div>
              </div>
              
              <div class="ml-4 min-w-0 flex-1">
                <div class="flex items-baseline">
                  <h4 class="text-sm font-medium text-gray-900">
                    {parseUserAgent(session.userAgent).browser} on {parseUserAgent(session.userAgent).device}
                  </h4>
                  
                  {#if showCurrentSessionIndicator && session.isCurrent}
                    <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Current
                    </span>
                  {/if}
                  
                  {#if !session.isActive}
                    <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Inactive
                    </span>
                  {/if}
                </div>
                
                <div class="mt-1">
                  <div class="flex items-center text-sm text-gray-500">
                    <Globe class="h-4 w-4 mr-1" />
                    <span>{session.ipAddress}</span>
                    
                    {#if showLocation && session.location}
                      <span class="mx-2">•</span>
                      <span>{session.location}</span>
                    {/if}
                  </div>
                  
                  <div class="flex items-center text-sm text-gray-500 mt-1">
                    <Clock class="h-4 w-4 mr-1" />
                    <span>Active since {formatDate(session.loginTime)} at {formatTime(session.loginTime)}</span>
                  </div>
                  
                  {#if showLastActivity}
                    <div class="flex items-center text-sm text-gray-500 mt-1">
                      <Activity class="h-4 w-4 mr-1" />
                      <span>Last activity {formatDuration(session.lastActivity)}</span>
                    </div>
                  {/if}
                </div>
              </div>
            </div>
            
            <div class={`flex items-center space-x-2 ${actionsClass}`}>
              {#if !session.isCurrent}
                <button
                  type="button"
                  class="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-900"
                  onclick={() => handleLogoutSession(session.id)}
                >
                  <LogOut class="h-4 w-4 mr-1" />
                  Logout
                </button>
              {:else}
                <span class="text-sm text-gray-500">Current session</span>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center text-sm text-gray-500">
      <ShieldAlert class="h-4 w-4 mr-1" />
      <span>Security tip: Regularly review your active sessions and log out unused devices</span>
    </div>
  </div>
</div>