import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractAudioPlayer } from '$stylist/media/interface/contract/audio-player';

export interface AudioPlayerRecipe extends StructIntersectAll<[ContractAudioPlayer]> {}
