import type { DomainFileSummary } from '$stylist/domain/type/object/domain-file-summary';
import type { DomainFilesTotals } from '$stylist/domain/type/object/domain-files-totals';
export type DomainFilesManifest = {
	domains: DomainFileSummary[];
	totals: DomainFilesTotals;
};
