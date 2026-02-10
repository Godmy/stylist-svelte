<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	// РўРёРїС‹ РґР»СЏ Р°РІР°С‚Р°СЂР°
	export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
	export type AvatarUserStatus = 'online' | 'away' | 'offline' | 'typing' | 'idle';

	export type AvatarProps = {
		variant?: 'default';
		size?: AvatarSize;
		src?: string;
		alt?: string;
		id?: string;
		name?: string;
		status?: AvatarUserStatus;
		showStatus?: boolean;
		children?: any;
		class?: string;
	};

	let props: AvatarProps & HTMLAttributes<HTMLDivElement> = $props();

	const name = $derived(props.name ?? '');
	const status = $derived(props.status);
	const showStatus = $derived(props.showStatus ?? false);
	const children = $derived(props.children);

	// Р’С‹С‡РёСЃР»СЏРµРј РёРЅРёС†РёР°Р»С‹
	const initials = $derived(name ? name.charAt(0).toUpperCase() : '?');

	// Р Р°Р·РјРµСЂС‹ РґР»СЏ Р°РІР°С‚Р°СЂРѕРІ
	const SIZE_CLASSES: Record<AvatarSize, string> = {
		sm: 'w-6 h-6 text-sm',
		md: 'w-8 h-8 text-base',
		lg: 'w-10 h-10 text-lg',
		xl: 'w-12 h-12 text-xl'
	};

	const size = $derived((props.size ?? 'md') as AvatarSize);
	const sizeClasses = $derived(SIZE_CLASSES[size]);
	const avatarClasses = $derived(
		`inline-flex items-center justify-center rounded-full bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] overflow-hidden ${sizeClasses} ${props.class ?? ''}`
	);

	// Р’СЃРїРѕРјРѕРіР°С‚РµР»СЊРЅС‹Рµ С„СѓРЅРєС†РёРё РґР»СЏ СЃС‚РёР»РµР№
	function getStatusClasses(status?: AvatarUserStatus): string {
		const statusClasses: Record<AvatarUserStatus, string> = {
			online: 'bg-[var(--color-success-500)]',
			away: 'bg-[var(--color-warning-500)]',
			offline: 'bg-[var(--color-text-secondary)]',
			typing: 'bg-[var(--color-primary-500)]',
			idle: 'bg-[var(--color-warning-600)]'
		};
		return statusClasses[status || 'offline'] || statusClasses.offline;
	}

	function getStatusSizeClasses(size: AvatarSize): string {
		const statusSizeClasses: Record<AvatarSize, string> = {
			sm: 'w-2 h-2',
			md: 'w-2.5 h-2.5',
			lg: 'w-3 h-3',
			xl: 'w-3.5 h-3.5'
		};
		return statusSizeClasses[size];
	}

	const imageClasses = 'w-full h-full object-cover rounded-full';
	const fallbackClasses = 'w-full h-full flex items-center justify-center';
	const statusColor = $derived(getStatusClasses(status));
	const statusSizeClasses = $derived(getStatusSizeClasses(size));
	const statusIndicatorClasses = $derived(
		`absolute bottom-0 right-0 rounded-full border-2 border-[var(--color-background-primary)] ${statusColor} ${statusSizeClasses}`
	);

	// РЎРѕР·РґР°РµРј РѕС‚РґРµР»СЊРЅСѓСЋ РїРµСЂРµРјРµРЅРЅСѓСЋ РґР»СЏ DOM-Р°С‚СЂРёР±СѓС‚РѕРІ, С‡С‚РѕР±С‹ РёР·Р±РµР¶Р°С‚СЊ РєРѕРЅС„Р»РёРєС‚Р° СЃ $props()
	const {
		src,
		alt,
		id,
		name: propName,
		status: propStatus,
		showStatus: propShowStatus,
		children: propChildren,
		class: propClass,
		...domProps
	} = props;
</script>

<div {...domProps} class={avatarClasses}>
	{#if src}
		<img {src} alt={alt || name || 'Avatar'} class={imageClasses} />
	{:else}
		<div class={fallbackClasses}>
			{initials}
		</div>
	{/if}

	{#if showStatus && status}
		<span class={statusIndicatorClasses}></span>
	{/if}
</div>

