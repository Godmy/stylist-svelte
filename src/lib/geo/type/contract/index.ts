import type { MapInformationContract } from '$stylist/geo/interface/component/map-information/contract/contract';

export type InformationContractOfT<TName extends keyof MapInformationContract> =
	MapInformationContract[TName];
