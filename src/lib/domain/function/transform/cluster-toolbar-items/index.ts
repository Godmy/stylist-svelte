import { DOMAIN_CLUSTER } from '$stylist/domain/const/array/domain-cluster';

export function createClusterToolbarItems(
	clusters: readonly string[] = DOMAIN_CLUSTER
): { name: string }[] {
	return clusters.map((name) => ({ name }));
}
