import { joinClassNames } from '$stylist/information/function/script/join-class-names';

export function buildConditionalClassNames(
	baseClasses: string,
	conditionalClassMap: Record<string, string | undefined>
): string {
	const additionalClasses = Object.entries(conditionalClassMap)
		.filter(([condition]) => Boolean(condition))
		.map(([, classes]) => classes)
		.filter(Boolean);

	return joinClassNames(baseClasses, ...additionalClasses);
}
