import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ISearchBarProps as BaseSearchBarProps } from '$stylist/control/interface/component/search-bar/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface SearchBarProps
	extends RecordArchitectureMerge<[BaseSearchBarProps, InteractionHTMLAttributes<HTMLDivElement>]>
{}
