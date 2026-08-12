import type { TokenComponentType } from '$stylist/architecture/type/alias/component-type';

export interface PageBuilderElement {
	id: string;
	type: TokenComponentType;
	content?: string;
	attributes?:
		| {
				fontSize?: string;
				fontWeight?: string;
				color?: string;
				textAlign?: string;
		  }
		| {
				level?: 1 | 2 | 3 | 4 | 5 | 6;
				color?: string;
		  }
		| {
				variant?: 'primary' | 'secondary' | 'ghost';
				label?: string;
				onClick?: () => void;
		  }
		| {
				src?: string;
				alt?: string;
				objectFit?: 'cover' | 'contain' | 'fill';
		  }
		| {
				orientation?: 'horizontal' | 'vertical';
				color?: string;
				thickness?: number;
		  }
		| {
				padding?: string;
				gap?: string;
				direction?: 'row' | 'column';
				wrap?: boolean;
		  };
	children?: PageBuilderElement[];
}
