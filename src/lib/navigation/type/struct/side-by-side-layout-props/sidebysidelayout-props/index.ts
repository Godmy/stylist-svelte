export type SideBySideLayoutProps = SideBySideLayoutRestProps & {
	sections: SideBySideSection[];
	class?: string;
	gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	responsive?: boolean;
}
