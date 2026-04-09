export type PageBuilderTextAttributes = {
	fontSize?: string;
	fontWeight?: string;
	color?: string;
	textAlign?: string;
};

export type PageBuilderHeadingAttributes = {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	color?: string;
};

export type PageBuilderButtonAttributes = {
	variant?: 'primary' | 'secondary' | 'ghost';
	label?: string;
	onClick?: () => void;
};

export type PageBuilderImageAttributes = {
	src?: string;
	alt?: string;
	objectFit?: 'cover' | 'contain' | 'fill';
};

export type PageBuilderDividerAttributes = {
	orientation?: 'horizontal' | 'vertical';
	color?: string;
	thickness?: number;
};

export type PageBuilderContainerAttributes = {
	padding?: string;
	gap?: string;
	direction?: 'row' | 'column';
	wrap?: boolean;
};
