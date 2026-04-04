/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export class StoreLocatorStyleManager {
	static getHostClasses(hostClass: string): string {
		return `store-locator ${hostClass}`.trim();
	}

	static getSearchInputClasses(searchClass: string = ''): string {
		return `block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)] sm:text-sm ${searchClass}`.trim();
	}

	static getStoreListWidthClass(showMap: boolean): string {
		return showMap ? 'lg:w-1/4' : 'lg:w-3/4';
	}

	static getMapContainerClasses(mapClass: string = ''): string {
		return `border border-[var(--color-border-primary)] rounded-lg overflow-hidden ${mapClass}`.trim();
	}
}
