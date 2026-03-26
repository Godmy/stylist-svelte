import type { MapArchitectureContract } from '$stylist/architecture/interface/map/contract';
import type { TokenArchitectureContract } from '$stylist/architecture/const/token/contract';

export type ArchitectureContractOfT<TName extends TokenArchitectureContract> = MapArchitectureContract[TName];
