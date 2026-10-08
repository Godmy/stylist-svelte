import type { PRESET_FILE } from '$stylist/domain/const/preset/file';

export type TypeFilePreset<T extends string = string> = {
	[K in keyof typeof PRESET_FILE]: (typeof PRESET_FILE)[K]['type'] extends T ? K : never;
}[keyof typeof PRESET_FILE];
