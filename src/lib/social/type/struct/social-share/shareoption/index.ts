import type { SocialPlatform } from '$stylist/social/type/struct/social-share/socialplatform';

export type ShareOption = {
	platform: SocialPlatform;
	label: string;
	icon: any;
	enabled: boolean;
};
