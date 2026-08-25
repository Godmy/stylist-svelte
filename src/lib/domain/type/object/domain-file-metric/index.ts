import type { DomainFileComponentMetric } from '$stylist/domain/type/object/domain-file-component-metric';
import type { DomainFileClusterMetric } from '$stylist/domain/type/object/domain-file-cluster-metric';
export type DomainFileMetric = {
	name: string;
	fileCount: number;
	components: DomainFileComponentMetric;
	clusters: DomainFileClusterMetric[];
};
