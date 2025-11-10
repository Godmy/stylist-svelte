<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Lock, Key, Shield, Eye, EyeOff, LogOut, AlertTriangle } from 'lucide-svelte';

  type TwoFactorMethod = 'auth_app' | 'sms' | 'email';

  type SecuritySetting = {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    onToggle?: (enabled: boolean) => void;
  };

  type ActiveSession = {
    id: string;
    device: string;
    location: string;
    lastActive: Date;
    current: boolean;
  };

  type Props = {
    twoFactorEnabled?: boolean;
    onTwoFactorToggle?: (enabled: boolean) => void;
    selectedTwoFactorMethod?: TwoFactorMethod;
    onTwoFactorMethodChange?: (method: TwoFactorMethod) => void;
    recoveryEmail?: string;
    onRecoveryEmailChange?: (email: string) => void;
    passwordLastChanged?: Date;
    activeSessions?: ActiveSession[];
    onSignOutSession?: (sessionId: string) => void;
    onSignOutAllSessions?: () => void;
    onPasswordChange?: (currentPassword: string, newPassword: string) => void;
    showPasswordChange?: boolean;
    showActiveSessions?: boolean;
    class?: string;
    headerClass?: string;
    sectionClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    twoFactorEnabled = false,
    onTwoFactorToggle,
    selectedTwoFactorMethod = 'auth_app',
    onTwoFactorMethodChange,
    recoveryEmail = '',
    onRecoveryEmailChange,
    passwordLastChanged = new Date(),
    activeSessions = [],
    onSignOutSession,
    onSignOutAllSessions,
    onPasswordChange,
    showPasswordChange = true,
    showActiveSessions = true,
    class: className = '',
    headerClass = '',
    sectionClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  let showCurrentPassword = $state(false);
  let showNewPassword = $state(false);
  let showConfirmPassword = $state(false);
  let currentPassword = $state('');
  let newPassword = $state('');
  let confirmPassword = $state('');
  let passwordChangeError = $state('');
  let passwordChangeSuccess = $state(false);

  function handleTwoFactorToggle() {
    if (onTwoFactorToggle) {
      onTwoFactorToggle(!twoFactorEnabled);
    }
  }

  function handlePasswordChange() {
    passwordChangeError = '';
    
    if (newPassword !== confirmPassword) {
      passwordChangeError = 'New passwords do not match';
      return;
    }
    
    if (newPassword.length < 8) {
      passwordChangeError = 'Password must be at least 8 characters';
      return;
    }
    
    if (onPasswordChange) {
      onPasswordChange(currentPassword, newPassword);
      passwordChangeSuccess = true;
      // Reset after showing success
      setTimeout(() => {
        currentPassword = '';
        newPassword = '';
        confirmPassword = '';
        passwordChangeSuccess = false;
      }, 3000);
    }
  }

  function formatDate(date: Date) {
    return date.toLocaleDateString([], {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <Shield class="h-6 w-6 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">Security Settings</h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">Manage your account security and authentication.</p>
  </div>

  <div class="divide-y divide-gray-200">
    <!-- Two-factor authentication -->
    <div class={`p-6 ${sectionClass}`}>
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-sm font-medium text-gray-900">Two-factor authentication</h4>
          <p class="mt-1 text-sm text-gray-500">Add an extra layer of security to your account</p>
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            class="sr-only peer"
            checked={twoFactorEnabled}
            onchange={handleTwoFactorToggle}
          />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      
      {#if twoFactorEnabled}
        <div class="mt-4 ml-8">
          <h5 class="text-sm font-medium text-gray-900 mb-2">Authentication method</h5>
          <div class="space-y-2">
            <div class="flex items-center">
              <input
                id="auth_app"
                name="two-factor-method"
                type="radio"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                checked={selectedTwoFactorMethod === 'auth_app'}
                onchange={() => onTwoFactorMethodChange && onTwoFactorMethodChange('auth_app')}
              />
              <label for="auth_app" class="ml-3 block text-sm font-medium text-gray-700">
                Authentication app
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="sms"
                name="two-factor-method"
                type="radio"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                checked={selectedTwoFactorMethod === 'sms'}
                onchange={() => onTwoFactorMethodChange && onTwoFactorMethodChange('sms')}
              />
              <label for="sms" class="ml-3 block text-sm font-medium text-gray-700">
                SMS
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="email"
                name="two-factor-method"
                type="radio"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                checked={selectedTwoFactorMethod === 'email'}
                onchange={() => onTwoFactorMethodChange && onTwoFactorMethodChange('email')}
              />
              <label for="email" class="ml-3 block text-sm font-medium text-gray-700">
                Email
              </label>
            </div>
          </div>
        </div>
      {/if}
    </div>

    <!-- Recovery email -->
    <div class={`p-6 ${sectionClass}`}>
      <div>
        <h4 class="text-sm font-medium text-gray-900">Recovery email</h4>
        <p class="mt-1 text-sm text-gray-500">Add an email where you can receive security codes</p>
      </div>
      <div class="mt-2 sm:flex sm:items-center sm:space-x-2">
        <div class="flex-1">
          <input
            type="email"
            class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="your.email@example.com"
            bind:value={recoveryEmail}
            onchange={(e) => onRecoveryEmailChange && onRecoveryEmailChange((e.target as HTMLInputElement).value)}
          />
        </div>
        <button
          type="button"
          class="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>

    <!-- Change password -->
    {#if showPasswordChange}
      <div class={`p-6 ${sectionClass}`}>
        <div>
          <h4 class="text-sm font-medium text-gray-900">Change password</h4>
          <p class="mt-1 text-sm text-gray-500">
            Last changed: {formatDate(passwordLastChanged || new Date())}
          </p>
        </div>
        <div class="mt-4 space-y-4">
          <div>
            <label for="current-password" class="block text-sm font-medium text-gray-700">Current password</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                id="current-password"
                class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                bind:value={currentPassword}
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  class="text-gray-400 hover:text-gray-500"
                  onclick={() => showCurrentPassword = !showCurrentPassword}
                >
                  {#if showCurrentPassword}
                    <EyeOff class="h-5 w-5" />
                  {:else}
                    <Eye class="h-5 w-5" />
                  {/if}
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <label for="new-password" class="block text-sm font-medium text-gray-700">New password</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                type={showNewPassword ? 'text' : 'password'}
                id="new-password"
                class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                bind:value={newPassword}
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  class="text-gray-400 hover:text-gray-500"
                  onclick={() => showNewPassword = !showNewPassword}
                >
                  {#if showNewPassword}
                    <EyeOff class="h-5 w-5" />
                  {:else}
                    <Eye class="h-5 w-5" />
                  {/if}
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm new password</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirm-password"
                class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                bind:value={confirmPassword}
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  class="text-gray-400 hover:text-gray-500"
                  onclick={() => showConfirmPassword = !showConfirmPassword}
                >
                  {#if showConfirmPassword}
                    <EyeOff class="h-5 w-5" />
                  {:else}
                    <Eye class="h-5 w-5" />
                  {/if}
                </button>
              </div>
            </div>
          </div>
          
          {#if passwordChangeError}
            <div class="rounded-md bg-red-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <AlertTriangle class="h-5 w-5 text-red-400" />
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-red-800">Password change failed</h3>
                  <div class="mt-2 text-sm text-red-700">
                    <p>{passwordChangeError}</p>
                  </div>
                </div>
              </div>
            </div>
          {/if}
          
          {#if passwordChangeSuccess}
            <div class="rounded-md bg-green-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-green-800">Password updated successfully</h3>
                </div>
              </div>
            </div>
          {/if}
          
          <div class="flex justify-end">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              onclick={handlePasswordChange}
            >
              <Lock class="h-4 w-4 mr-1" />
              Change password
            </button>
          </div>
        </div>
      </div>
    {/if}

    <!-- Active sessions -->
    {#if showActiveSessions && activeSessions.length > 0}
      <div class={`p-6 ${sectionClass}`}>
        <div class="flex items-center justify-between">
          <div>
            <h4 class="text-sm font-medium text-gray-900">Active sessions</h4>
            <p class="mt-1 text-sm text-gray-500">Manage your active logins on other devices</p>
          </div>
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            onclick={onSignOutAllSessions}
          >
            Sign out all sessions
          </button>
        </div>
        
        <div class="mt-4 space-y-4">
          {#each activeSessions as session}
            <div class={`flex items-center justify-between p-3 border rounded-md ${
              session.current ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}>
              <div>
                <div class="flex items-center">
                  <Key class="h-5 w-5 text-gray-400 mr-2" />
                  <h5 class="text-sm font-medium text-gray-900">{session.device}</h5>
                  {#if session.current}
                    <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Current
                    </span>
                  {/if}
                </div>
                <p class="mt-1 text-sm text-gray-500">
                  {session.location} • Last active: {formatDate(session.lastActive)}
                </p>
              </div>
              <button
                type="button"
                class={`inline-flex items-center px-3 py-1 border text-xs font-medium rounded-md ${
                  session.current
                    ? 'border-transparent text-white bg-blue-600 hover:bg-blue-700'
                    : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                }`}
                onclick={() => onSignOutSession && onSignOutSession(session.id)}
                disabled={session.current}
              >
                <LogOut class="h-4 w-4 mr-1" />
                Sign out
              </button>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center text-xs text-gray-500">
      <Lock class="h-4 w-4 mr-1" />
      <span>Security settings help protect your account from unauthorized access</span>
    </div>
  </div>
</div>