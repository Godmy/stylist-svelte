import type { MapInformationContract } from '$stylist/information/interface/map/contract';
import type { TokenInformationContract } from '$stylist/information/const/token/contract';

export type InformationContractOfT<TName extends TokenInformationContract> =
	MapInformationContract[TName];