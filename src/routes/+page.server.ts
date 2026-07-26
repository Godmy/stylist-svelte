import fs from 'node:fs';
import path from 'node:path';
import { getDomainPageData } from '$stylist/server/function/async-get/domain-page-data';
import { LIB_DIRECTORY_PATH } from '$stylist/server/const/value/lib-directory-path';

type DomainPageData = ReturnType<typeof getDomainPageData>;

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
		cachedPageData = readManifest() ?? getDomainPageData();
	}
	return cachedPageData;
};
