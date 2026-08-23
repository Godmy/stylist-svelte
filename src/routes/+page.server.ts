import type { DomainManager } from '$stylist/server/class/manager/domain';
import manifest from '$stylist/domain/data/json/domain-page-manifest/index.json';

type DomainPageData = ReturnType<typeof DomainManager.getDomainPageData>;

export const load = (): DomainPageData => manifest as DomainPageData;
