export type TypeDomainComponentProjection = {
	entityPath: string;
	architecture: {
		componentModulePath: string | null;
		recipeTypePath: string | null;
		stateFunctionPath: string | null;
		contractPaths: string[];
	};
	information: {
		recipeJson: unknown[];
		enumJson: unknown[];
		mapJson: unknown[];
	};
	interaction: {
		stateJson: unknown[];
		storyModulePath: string | null;
		hasStatePipeline: boolean;
	};
	controls: {
		controlJson: unknown[];
	};
	contracts: {
		files: Array<{
			path: string;
			content: string | null;
		}>;
	};
};
