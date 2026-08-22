import { DOMAIN_CLUSTER } from '$stylist/domain/const/array/domain-cluster';
import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';
import type { SlotSvgName } from '$stylist/svg/interface/slot/svg-name';

export function createClusterToolbarItems(
	clusters: readonly string[] = DOMAIN_CLUSTER
): SlotSvgName[] {
	return clusters.map((name) => ({
		name,
		svg: TOKEN_ICON_REGISTRY[name] ?? TOKEN_ICON_REGISTRY['cluster']
	}));
}
