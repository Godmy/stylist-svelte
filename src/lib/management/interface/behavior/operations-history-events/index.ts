export interface BehaviorOperationsHistoryEvents {
	onOperationClick?: (operation: Record<string, unknown>) => void;
	onOperationRevert?: (operation: Record<string, unknown>) => void;
	onOperationReplay?: (operation: Record<string, unknown>) => void;
	onSelect?: (operation: unknown) => void;
	onDelete?: (id: string) => void;
	onClear?: () => void;
}
