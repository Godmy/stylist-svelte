import type { MapInteractionContract } from '$stylist/geo/interface/component/map-interaction/contract/contract';
import type { TokenInteractionContract } from '$stylist/interaction/type/record/contract';

export type InteractionContractOfT<TName extends TokenInteractionContract> =
	MapInteractionContract[TName];
