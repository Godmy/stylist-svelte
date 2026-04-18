import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractAudioVisualizer } from '$stylist/media/interface/contract/audio-visualizer';

export interface AudioVisualizerRecipe extends StructIntersectAll<[ContractAudioVisualizer]> {}
