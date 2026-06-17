export interface ContractLitegraphPort {
	id: string;
	name: string;
	type: string;
	direction: 'input' | 'output';
	label?: string;
	dataType?: string;
}
