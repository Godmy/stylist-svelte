import type { ShareOption, SocialPlatform, Props } from '$stylist/social/type/struct/social-share';

export function createSocialShareState(props: Props) {
	let showDropdown = $state(false);
	let copied = $state(false);
	const requestedPlatforms = $derived((props.platforms ?? ['copy']) as SocialPlatform[]);
	const availablePlatforms = $derived<ShareOption[]>([
		...requestedPlatforms.map((platform) => ({ platform, label: platform === 'copy' ? 'Copy link' : platform, icon: null, enabled: true })),
		...(props.customOptions ?? [])
	]);

	function setCopied(): void {
		copied = true;
		setTimeout(() => { copied = false; }, 1800);
	}

	function copyLink(): void {
		const url = props.url ?? (typeof window !== 'undefined' ? window.location.href : '');
		void navigator?.clipboard?.writeText(url);
		setCopied();
	}

	function handleShare(platform: SocialPlatform): void {
		const url = props.url ?? (typeof window !== 'undefined' ? window.location.href : '');
		if (platform === 'copy') {
			copyLink();
			return;
		}
		props.onShare?.(platform, url);
	}

	return {
		get hostClass() { return props.class ?? ''; },
		get buttonClass() { return props.buttonClass ?? ''; },
		get dropdownClass() { return props.dropdownClass ?? ''; },
		get iconSizeClasses() { return props.size === 'sm' ? 'h-4 w-4' : props.size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'; },
		get availablePlatforms() { return availablePlatforms; },
		get showDropdown() { return showDropdown; },
		get copied() { return copied; },
		toggleDropdown: () => { showDropdown = !showDropdown; },
		handleShare,
		handleSave: () => props.onSave?.(),
		handleLike: () => props.onLike?.(),
		copyLink
	};
}

export default createSocialShareState;
