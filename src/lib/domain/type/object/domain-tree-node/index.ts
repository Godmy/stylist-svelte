export type TypeDomainTreeNode = {
	name: string;
	clusters: {
		name: string;
		joints: {
			name: string;
			entities: {
				name: string;
				path: string;
				files: {
					name: string;
					path: string;
				}[];
			}[];
		}[];
	}[];
};
