export interface RecipeDomainLanding {
	rootDomainCount?: number;
	storyModuleCount?: number;
	onBrowseComponents?: () => void;
	onOpenPlayground?: () => void;
	onOpenWorkspace?: () => void;
	class?: string;
}
