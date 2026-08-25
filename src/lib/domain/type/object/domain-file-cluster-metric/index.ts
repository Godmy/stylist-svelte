import type { DomainFileJointMetric } from '$stylist/domain/type/object/domain-file-joint-metric';
export type DomainFileClusterMetric = {
	name: string;
	fileCount: number;
	joints: DomainFileJointMetric[];
};
