import type { AudioPlayerProps as LegacyAudioPlayerProps1 } from '$stylist/audio/interface/recipe/audio-player-audio-player-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ContractAudioPlayer } from '$stylist/audio/interface/contract/audio-player';

export interface RecipeAudioPlayer
	extends ComputeIntersectAll<[LegacyAudioPlayerProps1, ContractAudioPlayer]> {}
