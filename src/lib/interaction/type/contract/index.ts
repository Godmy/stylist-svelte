import type { MapInteractionContract } from '$stylist/interaction/interface/map/contract';
import type { TokenInteractionContract } from '$stylist/interaction/const/token/contract';

export type InteractionContractOfT<TName extends TokenInteractionContract> =
	MapInteractionContract[TName];
