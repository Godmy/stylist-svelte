import { DomainManager } from '$stylist/server/class/manager/domain';

type DomainPageData = ReturnType<typeof DomainManager.getDomainPageData>;

export const load = (): DomainPageData => DomainManager.getDomainPageData();
