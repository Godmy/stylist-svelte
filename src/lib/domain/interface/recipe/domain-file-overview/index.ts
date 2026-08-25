import type { DomainFilesManifest } from '$stylist/domain/type/object/domain-files-manifest';
import type { DomainComponentIntervalsManifest } from '$stylist/domain/type/object/domain-component-intervals-manifest';
export interface RecipeDomainFileOverview {
	manifest: DomainFilesManifest;
	componentIntervalsManifest: DomainComponentIntervalsManifest;
	class?: string;
}
