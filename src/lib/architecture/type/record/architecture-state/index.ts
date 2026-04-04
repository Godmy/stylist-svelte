import type { TokenArchitectureState } from '$stylist/architecture/type/struct/architecture-state';
import type { ArchitectureStateFactoryOfT } from '$stylist/architecture/type/record/architecture-state-factory';

export type ArchitectureStateOfT<TName extends TokenArchitectureState> = ReturnType<
	ArchitectureStateFactoryOfT<TName>
>;
