import type { SocialPlatform } from '$stylist/social/type/object/social-share/socialplatform';

export type ShareOption = {
	platform: SocialPlatform;
	label: string;
	icon: any;
	enabled: boolean;
};
