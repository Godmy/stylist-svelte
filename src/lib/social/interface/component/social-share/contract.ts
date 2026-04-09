import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type SocialPlatform = 'facebook' | 'twitter' | 'linkedin' | 'pinterest' | 'reddit' | 'whatsapp' | 'telegram' | 'email' | 'copy';

export interface SocialShareOption {
	platform: SocialPlatform;
	label: string;
	icon: any;
	enabled: boolean;
}

export type SocialShareContract = RecordArchitectureMerge<
	[
		{
			title?: string;
			url?: string;
			description?: string;
			platforms?: SocialPlatform[];
			showCopyLink?: boolean;
			showEmbed?: boolean;
			showSave?: boolean;
			showLike?: boolean;
			customOptions?: SocialShareOption[];
			buttonClass?: string;
			dropdownClass?: string;
			onShare?: (platform: SocialPlatform, url: string) => void;
			onSave?: () => void;
			onLike?: () => void;
			size?: 'sm' | 'md' | 'lg';
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
