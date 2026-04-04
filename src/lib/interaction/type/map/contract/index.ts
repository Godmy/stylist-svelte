import type { MapInteractionContract } from '$stylist/geo/interface/component/map-interaction/contract/contract';
import type { TokenInteractionContract } from '$stylist/interaction/const/record/contract';

export type InteractionContractOfT<TName extends TokenInteractionContract> =
	MapInteractionContract[TName];
