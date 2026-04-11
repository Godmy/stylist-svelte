export type UserCardProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	user?: User;
	size?: TokenUserCardSize;
	showEmail?: boolean;
	showRole?: boolean;
};
