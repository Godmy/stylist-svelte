import type { MAP_ARCHITECTURE } from '$stylist/architecture/const/map/architecture';
import type { TokenArchitectureState } from '$stylist/architecture/type/struct/architecture-state';

export type ArchitectureStateFactoryOfT<TName extends TokenArchitectureState> =
	typeof MAP_ARCHITECTURE[TName];
