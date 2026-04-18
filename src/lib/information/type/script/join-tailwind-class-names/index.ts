export type ClassValue =
	| string
	| number
	| bigint
	| null
	| undefined
	| boolean
	| { [key: string]: boolean }
	| Iterable<ClassValue>;
