import fs from 'node:fs';
import path from 'node:path';
import { DomainManager } from '$stylist/server/class/manager/domain';
import { LIB_DIRECTORY_PATH } from '$stylist/server/const/value/lib-directory-path';

type DomainPageData = ReturnType<typeof DomainManager.getDomainPageData>;

const MANIFEST_PATH = path.join(
	LIB_DIRECTORY_PATH,
	'domain',
	'data',
	'json',
	'domain-page-manifest',
	'index.json'
);

function readManifest(): DomainPageData | null {
	try {
		const raw = fs.readFileSync(MANIFEST_PATH, 'utf-8');
		return JSON.parse(raw) as DomainPageData;
	} catch {
		return null;
	}
}

let cachedPageData: DomainPageData | null = null;

export const load = () => {
	if (!cachedPageData) {
		cachedPageData = readManifest() ?? DomainManager.getDomainPageData();
	}
	return cachedPageData;
};
