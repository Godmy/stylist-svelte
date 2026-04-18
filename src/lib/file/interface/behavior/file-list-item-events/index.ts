import type { ContractFileItem } from '$stylist/file/interface/contract/file-item';

export interface BehaviorFileListItemEvents {
	onItemSelect?: (item: ContractFileItem) => void;
	onItemDoubleClick?: (item: ContractFileItem) => void;
	onItemAction?: (item: ContractFileItem, action: string) => void;
}
