import { PRESET_FILE } from '$stylist/domain/const/preset/file';
import type { TypeFilePreset } from '$stylist/domain/type/alias/file-preset';

export function resolveFilePreset(name: string) {
	if (!Object.hasOwn(PRESET_FILE, name)) throw new Error(`Unknown file preset: ${name}`);
	return PRESET_FILE[name as TypeFilePreset];
}
