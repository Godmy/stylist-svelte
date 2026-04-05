import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct/item';
import type { ChildrenHtmlAttributes } from '$stylist/science/type/struct/children';
import type { Snippet } from 'svelte';

export interface GraphToolbarItem {
	id: string;
	type: 'button' | 'select' | 'input' | 'separator';
	label?: string;
	tooltip?: string;
	icon?: string;
	active?: boolean;
	disabled?: boolean;
	value?: unknown;
	options?: string[];
	onclick?: () => void;
}

// ==================== SentimentAnalysis ====================
export interface SentimentAnalysisResult {
	score: number;
	label: 'very negative' | 'negative' | 'neutral' | 'positive' | 'very positive';
	confidence: number;
	breakdown?: {
		positive: number;
		neutral: number;
		negative: number;
	};
}

export type SentimentAnalysisStatus = 'idle' | 'analyzing' | 'completed' | 'error';

export interface SentimentAnalysisContractBase {
	text?: string;
	result?: SentimentAnalysisResult;
	onAnalyze?: (text: string) => void;
	status?: SentimentAnalysisStatus;
	errorMessage?: string;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	inputClass?: string;
	resultClass?: string;
	footerClass?: string;
}

export type SentimentAnalysisContract = RecordArchitectureMerge<
	[
		SentimentAnalysisContractBase,
		ScienceHTMLAttributes<HTMLDivElement>
	]
>;

// ==================== PromptBuilder ====================
export type PromptVariableType = 'text' | 'number' | 'boolean' | 'select';

export interface PromptVariable {
	id: string;
	name: string;
	description: string;
	type: PromptVariableType;
	required?: boolean;
	defaultValue?: string | number | boolean;
	options?: Array<{ value: string; label: string }>;
}

export interface PromptTemplate {
	id: string;
	name: string;
	description: string;
	content: string;
	variables: PromptVariable[];
	tags?: string[];
}

export interface PromptBuilderContractBase {
	templates?: PromptTemplate[];
	initialPrompt?: string;
	variables?: PromptVariable[];
	onSave?: (prompt: string, variables: PromptVariable[]) => void;
	onRun?: (prompt: string, variables: Record<string, unknown>) => void;
	showTemplates?: boolean;
	showVariables?: boolean;
	class?: string;
	headerClass?: string;
	editorClass?: string;
	variablesClass?: string;
	footerClass?: string;
}

export type PromptBuilderContract = RecordArchitectureMerge<
	[
		PromptBuilderContractBase,
		ScienceHTMLAttributes<HTMLDivElement>
	]
>;

// ==================== PredictionResult ====================
export type PredictionResultStatus = 'loading' | 'success' | 'warning' | 'error';

export interface Prediction {
	label: string;
	value: number;
	confidence?: number;
}

export interface PredictionResultContractBase {
	title?: string;
	description?: string;
	predictions?: Prediction[];
	actualValue?: number;
	predictedValue?: number;
	modelUsed?: string;
	confidence?: number;
	status?: PredictionResultStatus;
	onRetry?: () => void;
	showChart?: boolean;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	footerClass?: string;
}

export type PredictionResultContract = RecordArchitectureMerge<
	[
		PredictionResultContractBase,
		ScienceHTMLAttributes<HTMLDivElement>
	]
>;

// ==================== AiResultCard ====================
export interface AiResultCardContractBase {
	children?: Snippet;
	title?: string;
	description?: string;
	icon?: string;
	class?: string;
}

export type AiResultCardContract = RecordArchitectureMerge<
	[
		AiResultCardContractBase,
		ScienceHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;

// ==================== ModelSelector ====================
export interface ModelOption {
	id: string;
	name: string;
	description?: string;
	version?: string;
	capabilities?: string[];
	provider?: string;
	tags?: string[];
}

export interface ModelSelectorContractBase {
	models?: ModelOption[];
	selectedModel?: string;
	onModelSelect?: (modelId: string) => void;
	showTags?: boolean;
	showCapabilities?: boolean;
	placeholder?: string;
	class?: string;
	dropdownClass?: string;
	modelItemClass?: string;
	headerClass?: string;
}

export type ModelSelectorContract = RecordArchitectureMerge<
	[
		ModelSelectorContractBase,
		ScienceHTMLAttributes<HTMLDivElement>
	]
>;

// ==================== LitegraphCanvas ====================
export interface LitegraphNodeProperty {
	name: string;
	value: unknown;
	type?: string;
}

export interface LitegraphPort {
	id: string;
	name: string;
	type: string;
	direction: 'input' | 'output';
	label?: string;
	dataType?: string;
}

export interface LitegraphNode {
	id: string;
	title: string;
	type: string;
	position?: { x: number; y: number };
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	properties?: LitegraphNodeProperty[];
	inputs?: LitegraphPort[];
	outputs?: LitegraphPort[];
	selected?: boolean;
	color?: string;
}

export interface LitegraphConnection {
	id: string;
	fromNodeId?: string;
	toNodeId?: string;
	fromPort?: string;
	toPort?: string;
	startX?: number;
	startY?: number;
	endX?: number;
	endY?: number;
	type?: TokenTrajectory;
	color?: string;
	active?: boolean;
	onclick?: () => void;
}

export type GraphGridMode = 'none' | 'dots' | 'lines' | 'cross' | 'dot';
export type GraphPanMode = 'drag' | 'space';
export type NodeType = 'default' | 'custom' | 'source' | 'processor' | 'output' | 'gateway';

export interface LitegraphCanvasContractBase {
	nodes?: LitegraphNode[];
	connections?: LitegraphConnection[];
	selectedNodeIds?: string[];
	zoom?: number;
	offset?: { x: number; y: number };
	showGrid?: boolean;
	gridMode?: GraphGridMode;
	panMode?: GraphPanMode;
	showToolbar?: boolean;
	showMiniMap?: boolean;
	toolbarItems?: GraphToolbarItem[];
	allowAddNodes?: boolean;
	allowDeleteNodes?: boolean;
	allowDuplicateNodes?: boolean;
	onNodeSelect?: (nodeId: string) => void;
	onNodeDrag?: (nodeId: string, position: { x: number; y: number }) => void;
	onNodeDelete?: (nodeId: string) => void;
	onNodeDuplicate?: (nodeId: string) => void;
	onNodeAdd?: (node: LitegraphNode) => void;
	onConnectionStart?: (port: LitegraphPort, event: MouseEvent) => void;
	onConnectionEnd?: (fromPort: LitegraphPort, toPort: LitegraphPort) => void;
	onZoomChange?: (zoom: number) => void;
	onOffsetChange?: (offset: { x: number; y: number }) => void;
	onSave?: () => void;
	onExport?: () => void;
	onImport?: (data: unknown) => void;
	class?: string;
	children?: Snippet;
	toolbarContent?: Snippet;
}

export type LitegraphCanvasContract = RecordArchitectureMerge<
	[
		LitegraphCanvasContractBase,
		ScienceHTMLAttributes<HTMLDivElement>
	]
>;

// ==================== Map Science Contract ====================
export interface MapScienceContract {
	SentimentAnalysis: SentimentAnalysisContract;
	PromptBuilder: PromptBuilderContract;
	PredictionResult: PredictionResultContract;
	AiResultCard: AiResultCardContract;
	ModelSelector: ModelSelectorContract;
	LitegraphCanvas: LitegraphCanvasContract;
}
