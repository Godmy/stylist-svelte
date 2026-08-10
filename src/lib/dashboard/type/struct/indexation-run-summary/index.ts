export type IndexationRunSummary = {
	status: 'success' | 'warning' | 'failed' | 'running' | 'unknown' | 'no-data';
	processedFileTypes: string[];
	changedIndexPaths: string[];
	affectedDomains: string[];
	outputPath?: string;
	resultPath?: string;
	treePath?: string;
	componentMapPath?: string;
	updatedAt?: string;
	generatedIndexCount: number;
};
