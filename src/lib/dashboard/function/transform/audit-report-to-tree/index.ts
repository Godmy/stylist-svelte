import type { AuditTreeNode } from '$stylist/dashboard/type/object/audit-tree-node';

export function transformAuditReportToTree(report: unknown): AuditTreeNode[] {
	const root = report as {
		reports?: unknown[];
		cluster?: string;
		joint?: string;
		total_issues?: number;
		issues?: unknown[];
	};
	const reports = Array.isArray(root?.reports) ? root.reports : [root];
	const domains = new Map<string, AuditTreeNode>();

	for (const reportItem of reports) {
		const item = reportItem as {
			cluster?: string;
			joint?: string;
			files_scanned?: number;
			issues?: unknown[];
		};
		const issues = Array.isArray(item.issues) ? item.issues : [];

		for (const issueItem of issues) {
			const issue = issueItem as { file?: string; severity?: string; message?: string };
			const normalizedPath = String(issue.file ?? '').replaceAll('\\', '/');
			const match = normalizedPath.match(/src\/lib\/([^/]+)(?:\/([^/]+))?(?:\/([^/]+))?(?:\/([^/]+))?/);
			const domainName = match?.[1] ?? 'unknown';
			const clusterName = item.cluster ?? match?.[2] ?? 'unknown';
			const jointName = item.joint ?? match?.[3] ?? 'unknown';
			const familyName = match?.[4] ?? 'unknown';
			const severity = issue.severity === 'warning' ? 'warning' : 'error';
			const domainNode =
				domains.get(domainName) ??
				({
					id: `domain:${domainName}`,
					label: domainName,
					path: `src/lib/${domainName}`,
					kind: 'domain',
					status: 'ok',
					errorCount: 0,
					warningCount: 0,
					fileCount: 0,
					domain: domainName,
					children: []
				} satisfies AuditTreeNode);

			const clusterId = `cluster:${domainName}:${clusterName}`;
			let clusterNode = domainNode.children?.find((node) => node.id === clusterId);
			if (!clusterNode) {
				clusterNode = {
					id: clusterId,
					label: clusterName,
					path: `src/lib/${domainName}/${clusterName}`,
					kind: 'cluster',
					status: 'ok',
					errorCount: 0,
					warningCount: 0,
					fileCount: 0,
					domain: domainName,
					cluster: clusterName,
					children: []
				};
				domainNode.children = [...(domainNode.children ?? []), clusterNode];
			}

			const fileNode = {
				id: `file:${normalizedPath}:${clusterNode.children?.length ?? 0}`,
				label: normalizedPath.split('/').slice(-2).join('/'),
				path: normalizedPath,
				kind: familyName === 'unknown' ? 'file' : 'family',
				status: severity,
				errorCount: severity === 'error' ? 1 : 0,
				warningCount: severity === 'warning' ? 1 : 0,
				fileCount: 1,
				domain: domainName,
				cluster: clusterName,
				joint: jointName,
				family: familyName
			} satisfies AuditTreeNode;

			clusterNode.children = [...(clusterNode.children ?? []), fileNode];
			clusterNode.errorCount += fileNode.errorCount;
			clusterNode.warningCount += fileNode.warningCount;
			clusterNode.fileCount += 1;
			clusterNode.status = clusterNode.errorCount > 0 ? 'error' : clusterNode.warningCount > 0 ? 'warning' : 'ok';
			domainNode.errorCount += fileNode.errorCount;
			domainNode.warningCount += fileNode.warningCount;
			domainNode.fileCount += 1;
			domainNode.status = domainNode.errorCount > 0 ? 'error' : domainNode.warningCount > 0 ? 'warning' : 'ok';
			domains.set(domainName, domainNode);
		}
	}

	return [...domains.values()];
}
