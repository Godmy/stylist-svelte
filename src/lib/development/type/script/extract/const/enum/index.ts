export type ExtractConstEnumValue = string | number | boolean | null;

export interface ExtractConstEnumTokenPayload {
	tokenName: string;
	values: ExtractConstEnumValue[];
	absolutePath: string;
	relativePath: string;
}

export interface ExtractConstEnumDomainPayload {
	domainName: string;
	sourceDirectory: string;
	outputFile: string;
	tokens: ExtractConstEnumTokenPayload[];
}
