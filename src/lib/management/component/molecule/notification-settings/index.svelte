<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import createNotificationSettingsState from '$stylist/management/function/state/notification-settings/index.svelte';
	import type { INotificationSettingsProps } from '$stylist/chat/type/struct/notification-settings-props';

	let props: INotificationSettingsProps = $props();
	const state = createNotificationSettingsState(props);
</script>

<div
	class={`overflow-hidden rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow ${state.className}`}
	{...state.restProps}
>
	<div class={`border-b px-6 py-5 ${state.headerClassName}`}>
		<div class="flex items-center">
			<BaseIcon name={state.bellIcon} class="mr-2 h-6 w-6 text-[var(--color-text-secondary)]" />
			<h3 class="text-lg font-medium text-[var(--color-text-primary)]">Notification Settings</h3>
		</div>
		<p class="mt-1 text-sm text-[var(--color-text-secondary)]">
			Manage how and when you receive notifications.
		</p>
	</div>

	<div class="divide-y divide-gray-200">
		<!-- Channel headers -->
		<div
			class="grid grid-cols-5 gap-4 bg-[var(--color-background-secondary)] px-6 py-3 text-xs font-medium text-[var(--color-text-secondary)]"
		>
			<div>Notification Type</div>
			{#if state.showEmail}
				<div class="flex items-center justify-center">
					<BaseIcon name={state.mailIcon} class="mr-1 h-4 w-4" />
					Email
				</div>
			{/if}
			{#if state.showPush}
				<div class="flex items-center justify-center">
					<BaseIcon name={state.smartphoneIcon} class="mr-1 h-4 w-4" />
					Push
				</div>
			{/if}
			{#if state.showSms}
				<div class="flex items-center justify-center">
					<svg class="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
						/>
					</svg>
					SMS
				</div>
			{/if}
			{#if state.showInApp}
				<div class="flex items-center justify-center">
					<BaseIcon name={state.monitorIcon} class="mr-1 h-4 w-4" />
					In-App
				</div>
			{/if}
		</div>

		<!-- Notification preferences -->
		{#each state.preferences as pref}
			<div class={`grid grid-cols-5 items-center gap-4 p-6 ${state.sectionClassName}`}>
				<div>
					<h4 class="text-sm font-medium text-[var(--color-text-primary)]">{pref.name}</h4>
					<p class="mt-1 text-sm text-[var(--color-text-secondary)]">{pref.description}</p>
				</div>

				{#if state.showEmail}
					<div class="flex items-center justify-center">
						<label class="relative inline-flex cursor-pointer items-center">
							<input
								type="checkbox"
								class="peer sr-only"
								checked={!!pref.channels['email']}
								onchange={(e) =>
									state.handlePreferenceChange(
										pref.id,
										'email',
										(e.target as HTMLInputElement).checked
									)}
							/>
							<div
								class="peer h-6 w-11 rounded-full bg-[var(--color-background-tertiary)] peer-checked:bg-[var(--color-primary-600)] peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-[var(--color-border-primary)] after:bg-[var(--color-background-primary)] after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)]"
							></div>
						</label>
					</div>
				{/if}

				{#if state.showPush}
					<div class="flex items-center justify-center">
						<label class="relative inline-flex cursor-pointer items-center">
							<input
								type="checkbox"
								class="peer sr-only"
								checked={!!pref.channels['push']}
								onchange={(e) =>
									state.handlePreferenceChange(
										pref.id,
										'push',
										(e.target as HTMLInputElement).checked
									)}
							/>
							<div
								class="peer h-6 w-11 rounded-full bg-[var(--color-background-tertiary)] peer-checked:bg-[var(--color-primary-600)] peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-[var(--color-border-primary)] after:bg-[var(--color-background-primary)] after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)]"
							></div>
						</label>
					</div>
				{/if}

				{#if state.showSms}
					<div class="flex items-center justify-center">
						<label class="relative inline-flex cursor-pointer items-center">
							<input
								type="checkbox"
								class="peer sr-only"
								checked={!!pref.channels['sms']}
								onchange={(e) =>
									state.handlePreferenceChange(
										pref.id,
										'sms',
										(e.target as HTMLInputElement).checked
									)}
							/>
							<div
								class="peer h-6 w-11 rounded-full bg-[var(--color-background-tertiary)] peer-checked:bg-[var(--color-primary-600)] peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-[var(--color-border-primary)] after:bg-[var(--color-background-primary)] after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)]"
							></div>
						</label>
					</div>
				{/if}

				{#if state.showInApp}
					<div class="flex items-center justify-center">
						<label class="relative inline-flex cursor-pointer items-center">
							<input
								type="checkbox"
								class="peer sr-only"
								checked={!!pref.channels['in_app']}
								onchange={(e) =>
									state.handlePreferenceChange(
										pref.id,
										'in_app',
										(e.target as HTMLInputElement).checked
									)}
							/>
							<div
								class="peer h-6 w-11 rounded-full bg-[var(--color-background-tertiary)] peer-checked:bg-[var(--color-primary-600)] peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-[var(--color-border-primary)] after:bg-[var(--color-background-primary)] after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)]"
							></div>
						</label>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<div class={`border-t px-6 py-4 ${state.footerClassName}`}>
		<div class="flex items-center text-xs text-[var(--color-text-secondary)]">
			<BaseIcon name={state.settingsIcon} class="mr-1 h-4 w-4" />
			<span>Changes to notification preferences are saved automatically</span>
		</div>
	</div>
</div>
