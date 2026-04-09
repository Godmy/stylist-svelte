import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import ts from 'typescript';

import { domainForEach } from '../../../lambda';

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

const collectFilesRecursively = (directoryPath: string, baseDirectoryPath: string): string[] => {
	const entries = readdirSync(directoryPath, { withFileTypes: true });
	const files: string[] = [];

	for (const entry of entries) {
		const entryPath = join(directoryPath, entry.name);

		if (entry.isDirectory()) {
			files.push(...collectFilesRecursively(entryPath, baseDirectoryPath));
			continue;
		}

		const fileContent = readFileSync(entryPath, 'utf-8');

		if (fileContent.includes('AUTO-GENERATED')) {
			continue;
		}

		files.push(entryPath);
	}

	return files.sort((left, right) => relative(baseDirectoryPath, left).localeCompare(relative(baseDirectoryPath, right)));
};

const unwrapConstAssertion = (expression: ts.Expression): ts.Expression => {
	if (ts.isAsExpression(expression) || ts.isTypeAssertionExpression(expression)) {
		return unwrapConstAssertion(expression.expression);
	}

	if (ts.isParenthesizedExpression(expression)) {
		return unwrapConstAssertion(expression.expression);
	}

	return expression;
};

const resolveLiteralValue = (node: ts.Expression): ExtractConstEnumValue | undefined => {
	if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
		return node.text;
	}

	if (ts.isNumericLiteral(node)) {
		return Number(node.text);
	}

	if (node.kind === ts.SyntaxKind.TrueKeyword) {
		return true;
	}

	if (node.kind === ts.SyntaxKind.FalseKeyword) {
		return false;
	}

	if (node.kind === ts.SyntaxKind.NullKeyword) {
		return null;
	}

	if (ts.isPrefixUnaryExpression(node) && ts.isNumericLiteral(node.operand)) {
		return node.operator === ts.SyntaxKind.MinusToken
			? -Number(node.operand.text)
			: Number(node.operand.text);
	}

	return undefined;
};

const extractTokensFromFile = (
	filePath: string,
	baseDirectoryPath: string
): ExtractConstEnumTokenPayload[] => {
	const sourceText = readFileSync(filePath, 'utf-8');
	const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
	const tokens: ExtractConstEnumTokenPayload[] = [];

	for (const statement of sourceFile.statements) {
		if (!ts.isVariableStatement(statement)) {
			continue;
		}

		const isExported = statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword) ?? false;
		if (!isExported) {
			continue;
		}

		for (const declaration of statement.declarationList.declarations) {
			if (!ts.isIdentifier(declaration.name) || !declaration.initializer) {
				continue;
			}

			const initializer = unwrapConstAssertion(declaration.initializer);
			if (!ts.isArrayLiteralExpression(initializer)) {
				continue;
			}

			const values: ExtractConstEnumValue[] = [];
			let isSupportedArray = true;

			for (const element of initializer.elements) {
				const literalValue = resolveLiteralValue(element as ts.Expression);

				if (literalValue === undefined) {
					isSupportedArray = false;
					break;
				}

				values.push(literalValue);
			}

			if (!isSupportedArray) {
				continue;
			}

			tokens.push({
				tokenName: declaration.name.text,
				values,
				absolutePath: filePath,
				relativePath: relative(baseDirectoryPath, filePath)
			});
		}
	}

	return tokens;
};

export const extractConstEnum = async (): Promise<void> => {
	await domainForEach(async ({ domainName, domainPath }) => {
		const sourceDirectory = join(domainPath, 'const', 'enum');
		const outputDirectory = join(domainPath, 'data', 'json', 'const', 'enum');
		const outputFile = join(outputDirectory, 'index.json');
		const tokens = existsSync(sourceDirectory)
			? collectFilesRecursively(sourceDirectory, sourceDirectory)
					.flatMap((filePath) => extractTokensFromFile(filePath, sourceDirectory))
			: [];
		const payload: ExtractConstEnumDomainPayload = {
			domainName,
			sourceDirectory,
			outputFile,
			tokens
		};

		mkdirSync(outputDirectory, { recursive: true });
		writeFileSync(outputFile, JSON.stringify(payload, null, 2), 'utf-8');
	});
};
