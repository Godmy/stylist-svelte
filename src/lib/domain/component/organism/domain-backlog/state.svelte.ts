import type { SlotBacklogData as BacklogData } from '$stylist/portfolio/interface/slot/backlog-data';
import type { SlotBacklogItem as BacklogItem } from '$stylist/portfolio/interface/slot/backlog-item';
import type { SlotBurnDownData as BurnDownData } from '$stylist/portfolio/interface/slot/burn-down-data';
import type { SlotIssueMessage as IssueMessage } from '$stylist/portfolio/interface/slot/issue-message';
import type { KanbanBoardAction } from '$stylist/portfolio/type/struct/kanban-board/kanbanboardaction';
import type { KanbanBoardType } from '$stylist/portfolio/type/struct/kanban-board/kanbanboardtype';

export function createDomainBacklogState(input: {
	getDomain: () => string;
	getFamily: () => string;
	onOpen: () => void;
}) {
	type PersistedBacklogItem = {
		id: string;
		title: string;
		description?: string;
		assignee?: string;
		priority?: 'low' | 'medium' | 'high';
		estimatedHours?: number;
		status?: 'todo' | 'in-progress' | 'done';
		tags?: string[];
		createdAt?: string;
		updatedAt?: string;
	};

	type PersistedBacklogDocument = {
		meta?: {
			domain?: string;
			family?: string;
			version?: number;
			updatedAt?: string;
		};
		title?: string;
		sprint?: {
			name?: string;
			startDate?: string;
			endDate?: string;
		};
		items?: PersistedBacklogItem[];
	};

	let title = $state('Domain backlog');
	let sprintName = $state('Current sprint');
	let sprintStart = $state(new Date(2026, 4, 26));
	let sprintEnd = $state(new Date(2026, 5, 1));
	let items = $state<BacklogItem[]>([]);
	let issues = $state<IssueMessage[]>([]);
	let loading = $state(false);
	let saving = $state(false);
	let error = $state('');
	let dirty = $state(false);
	let saveStatus = $state<'idle' | 'dirty' | 'saving' | 'saved' | 'error'>('idle');
	let sourcePath = $state('');
	let resolvedPath = $state('');
	let isFallback = $state(false);
	let lastSavedAt = $state<Date | null>(null);
	let requestId = 0;
	let autosaveTimer: ReturnType<typeof setTimeout> | null = null;

	function getFallbackDocument(domain: string, family: string): PersistedBacklogDocument {
		return {
			meta: {
				domain,
				family,
				version: 1,
				updatedAt: '2026-05-26T09:00:00.000Z'
			},
			title: `${domain} / ${family} backlog`,
			sprint: {
				name: 'Initial sprint',
				startDate: '2026-05-26T09:00:00.000Z',
				endDate: '2026-06-01T18:00:00.000Z'
			},
			items: [
				{
					id: `${domain}-${family}-task-1`,
					title: 'Define backlog schema',
					description: 'Prepare the JSON structure that drives scrum, kanban and burn down views.',
					assignee: 'Domain workspace',
					priority: 'high',
					estimatedHours: 8,
					status: 'todo',
					tags: ['json', 'schema'],
					createdAt: '2026-05-26T09:00:00.000Z',
					updatedAt: '2026-05-26T09:00:00.000Z'
				}
			]
		};
	}

	function normalizePriority(value: string | undefined): 'low' | 'medium' | 'high' {
		return value === 'high' || value === 'low' ? value : 'medium';
	}

	function normalizeStatus(value: string | undefined): 'todo' | 'in-progress' | 'done' {
		return value === 'in-progress' || value === 'done' ? value : 'todo';
	}

	function parseDate(value: string | undefined, fallback: Date): Date {
		const parsed = value ? new Date(value) : fallback;
		return Number.isNaN(parsed.getTime()) ? fallback : parsed;
	}

	function applyDocument(
		document: PersistedBacklogDocument,
		source: {
			requestedPath: string;
			resolvedPath: string;
			isFallback: boolean;
		}
	): void {
		const domain = input.getDomain();
		const family = input.getFamily();
		const fallback = getFallbackDocument(domain, family);
		const safeDocument = {
			title: document.title ?? fallback.title,
			sprint: {
				name: document.sprint?.name ?? fallback.sprint?.name,
				startDate: document.sprint?.startDate ?? fallback.sprint?.startDate,
				endDate: document.sprint?.endDate ?? fallback.sprint?.endDate
			},
			items: document.items?.length ? document.items : fallback.items
		};

		title = safeDocument.title ?? 'Domain backlog';
		sprintName = safeDocument.sprint?.name ?? 'Current sprint';
		sprintStart = parseDate(safeDocument.sprint?.startDate, new Date(2026, 4, 26));
		sprintEnd = parseDate(safeDocument.sprint?.endDate, new Date(2026, 5, 1));
		items = (safeDocument.items ?? []).map((item, index) => {
			const createdAt = parseDate(item.createdAt, new Date(2026, 4, 26 + index));
			const updatedAt = parseDate(item.updatedAt, createdAt);

			return {
				id: item.id || `${domain}-${family}-task-${index + 1}`,
				title: item.title || `Backlog item ${index + 1}`,
				description: item.description ?? '',
				assignee: item.assignee ?? '',
				priority: normalizePriority(item.priority),
				estimatedHours: item.estimatedHours,
				status: normalizeStatus(item.status),
				tags: item.tags ?? [],
				createdAt,
				updatedAt
			};
		});
		sourcePath = source.requestedPath;
		resolvedPath = source.resolvedPath;
		isFallback = source.isFallback;
		lastSavedAt = document.meta?.updatedAt ? parseDate(document.meta.updatedAt, new Date()) : null;
		dirty = false;
		saveStatus = 'idle';
	}

	function serializeDocument(): PersistedBacklogDocument {
		const domain = input.getDomain();
		const family = input.getFamily();

		return {
			meta: {
				domain,
				family,
				version: 1,
				updatedAt: new Date().toISOString()
			},
			title,
			sprint: {
				name: sprintName,
				startDate: sprintStart.toISOString(),
				endDate: sprintEnd.toISOString()
			},
			items: items.map((item) => ({
				id: item.id,
				title: item.title,
				description: item.description,
				assignee: item.assignee,
				priority: item.priority,
				estimatedHours: item.estimatedHours,
				status: item.status,
				tags: item.tags,
				createdAt: item.createdAt.toISOString(),
				updatedAt: item.updatedAt.toISOString()
			}))
		};
	}

	function replaceItem(nextItem: BacklogItem): void {
		items = items.map((item) => (item.id === nextItem.id ? nextItem : item));
		dirty = true;
		saveStatus = 'dirty';
	}

	async function loadIssues(): Promise<void> {
		try {
			const response = await fetch('/api/issues');
			const payload = (await response.json()) as {
				items?: IssueMessage[];
				error?: string;
			};

			if (!response.ok) {
				throw new Error(payload.error ?? 'Issues load failed');
			}

			issues = payload.items ?? [];
		} catch (value) {
			issues = [];
			error = value instanceof Error ? value.message : String(value);
		}
	}

	async function load(): Promise<void> {
		const domain = input.getDomain();
		const family = input.getFamily();

		requestId += 1;
		const activeRequestId = requestId;
		error = '';
		loading = true;

		try {
			const response = await fetch(
				`/api/backlog?domain=${encodeURIComponent(domain)}&family=${encodeURIComponent(family)}`
			);
			const payload = (await response.json()) as {
				document?: PersistedBacklogDocument;
				source?: {
					requestedPath?: string;
					resolvedPath?: string;
					isFallback?: boolean;
				};
				error?: string;
			};

			if (!response.ok) {
				throw new Error(payload.error ?? 'Backlog load failed');
			}

			if (activeRequestId !== requestId) {
				return;
			}

			applyDocument(payload.document ?? getFallbackDocument(domain, family), {
				requestedPath:
					payload.source?.requestedPath ??
					`management/data/json/component/backlog/${domain}--${family}.json`,
				resolvedPath:
					payload.source?.resolvedPath ??
					`management/data/json/component/backlog/${domain}--${family}.json`,
				isFallback: payload.source?.isFallback ?? false
			});
		} catch (value) {
			if (activeRequestId !== requestId) {
				return;
			}
			error = value instanceof Error ? value.message : String(value);
			saveStatus = 'error';
			applyDocument(getFallbackDocument(domain, family), {
				requestedPath: `management/data/json/component/backlog/${domain}--${family}.json`,
				resolvedPath: 'management/data/json/component/backlog/default.json',
				isFallback: true
			});
		} finally {
			if (activeRequestId === requestId) {
				loading = false;
			}
		}
	}

	async function save(): Promise<void> {
		const domain = input.getDomain();
		const family = input.getFamily();

		saving = true;
		error = '';
		saveStatus = 'saving';

		try {
			const response = await fetch('/api/backlog', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({
					domain,
					family,
					document: serializeDocument()
				})
			});
			const payload = (await response.json()) as {
				source?: {
					requestedPath?: string;
					resolvedPath?: string;
					isFallback?: boolean;
				};
				error?: string;
			};

			if (!response.ok) {
				throw new Error(payload.error ?? 'Backlog save failed');
			}

			sourcePath =
				payload.source?.requestedPath ??
				`management/data/json/component/backlog/${domain}--${family}.json`;
			resolvedPath = payload.source?.resolvedPath ?? sourcePath;
			isFallback = payload.source?.isFallback ?? false;
			lastSavedAt = new Date();
			dirty = false;
			saveStatus = 'saved';
		} catch (value) {
			error = value instanceof Error ? value.message : String(value);
			saveStatus = 'error';
		} finally {
			saving = false;
		}
	}

	function handleBacklogToggle(): Promise<void> {
		input.onOpen();
		return Promise.allSettled([load(), loadIssues()]).then(() => undefined);
	}

	function handleReload(): Promise<void> {
		return Promise.allSettled([load(), loadIssues()]).then(() => undefined);
	}

	function handleItemAdd(item: BacklogItem): void {
		items = [...items, { ...item, updatedAt: new Date() }];
		dirty = true;
		saveStatus = 'dirty';
	}

	function handleItemUpdate(item: BacklogItem): void {
		replaceItem({ ...item, updatedAt: new Date() });
	}

	function handleItemDelete(id: string): void {
		items = items.filter((item) => item.id !== id);
		dirty = true;
		saveStatus = 'dirty';
	}

	function handleBoardChange(nextBoard: KanbanBoardType, action: KanbanBoardAction): void {
		const previousItems = new Map(items.map((item) => [item.id, item]));
		const updatedItems = nextBoard.columns.flatMap((column) =>
			column.cards.map((rawCard, index) => {
				const card = rawCard as typeof rawCard & {
					assignee?: { name?: string } | string;
				};
				const previousItem = previousItems.get(card.id);
				const timestamp = new Date();

				return {
					id: card.id,
					title: card.title,
					description: card.description ?? previousItem?.description ?? '',
					assignee:
						typeof card.assignee === 'object'
							? card.assignee.name
							: (card.assignee ?? previousItem?.assignee ?? ''),
					priority: normalizePriority(card.priority ?? previousItem?.priority),
					estimatedHours: previousItem?.estimatedHours ?? 2 + index,
					status: normalizeStatus(column.id),
					tags: card.tags ?? previousItem?.tags ?? [],
					createdAt: previousItem?.createdAt ?? timestamp,
					updatedAt: timestamp
				} satisfies BacklogItem;
			})
		);

		items = updatedItems;
		dirty = true;
		saveStatus = 'dirty';

		if (action.type === 'delete-card') {
			items = updatedItems.filter((item) => item.id !== action.cardId);
		}
	}

	async function handleIssuesMoveToBacklog(selectedIssues: IssueMessage[]): Promise<void> {
		const response = await fetch('/api/backlog-issue', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				issues: selectedIssues
			})
		});
		const payload = (await response.json()) as { error?: string };

		if (!response.ok) {
			throw new Error(payload.error ?? 'Issue backlog write failed');
		}

		const existingIds = new Set(items.map((item) => item.id));
		const nextItems = selectedIssues
			.filter(
				(issue) => !existingIds.has(`issue:${issue.message_key ?? `${issue.id}::${issue.text}`}`)
			)
			.map((issue) => {
				const timestamp = new Date(issue.created_at);
				const issueKey = issue.message_key ?? `${issue.id}::${issue.text}`;

				return {
					id: `issue:${issueKey}`,
					title: issue.id.split('/').at(-1) ?? issue.id,
					description: issue.text,
					assignee: '',
					priority: 'medium',
					estimatedHours: 2,
					status: 'todo',
					tags: ['issue'],
					createdAt: timestamp,
					updatedAt: new Date()
				} satisfies BacklogItem;
			});

		if (nextItems.length === 0) {
			await loadIssues();
			return;
		}

		items = [...nextItems, ...items];
		dirty = true;
		saveStatus = 'dirty';
		await loadIssues();
	}

	const backlogData = $derived.by<BacklogData>(() => ({
		items
	}));

	const kanbanBoard = $derived.by<KanbanBoardType>(() => ({
		id: 'domain-backlog-board',
		columns: [
			{ id: 'todo', title: 'To do' },
			{ id: 'in-progress', title: 'In progress' },
			{ id: 'done', title: 'Done' }
		].map((column) => ({
			id: column.id,
			title: column.title,
			cards: items
				.filter((item) => item.status === column.id)
				.map((item, index) => ({
					id: item.id,
					title: item.title,
					description: item.description,
					order: index,
					priority: item.priority,
					status: item.status,
					tags: item.tags,
					createdAt: item.createdAt,
					updatedAt: item.updatedAt,
					assignee: item.assignee ? { name: item.assignee } : undefined
				}))
		}))
	}));

	const burnDownData = $derived.by<BurnDownData>(() => {
		const totalHours = items.reduce((sum, item) => sum + (item.estimatedHours ?? 0), 0);
		const startTime = sprintStart.getTime();
		const endTime = sprintEnd.getTime();
		const dayCount = Math.max(2, Math.round((endTime - startTime) / 86_400_000) + 1);
		const points = Array.from({ length: dayCount }, (_, index) => {
			const date = new Date(startTime + index * 86_400_000);
			const elapsedRatio = dayCount === 1 ? 1 : index / (dayCount - 1);
			const ideal = Math.max(0, Math.round(totalHours - totalHours * elapsedRatio));
			const completedHours = items
				.filter((item) => item.status === 'done' && item.updatedAt.getTime() <= date.getTime())
				.reduce((sum, item) => sum + (item.estimatedHours ?? 0), 0);

			return {
				date,
				ideal,
				actual: Math.max(0, totalHours - completedHours)
			};
		});

		return {
			sprintStart,
			sprintEnd,
			points
		};
	});

	$effect(() => {
		if (autosaveTimer) {
			clearTimeout(autosaveTimer);
			autosaveTimer = null;
		}

		if (!dirty || loading || saving) {
			return;
		}

		autosaveTimer = setTimeout(() => {
			void save();
		}, 1400);

		return () => {
			if (autosaveTimer) {
				clearTimeout(autosaveTimer);
				autosaveTimer = null;
			}
		};
	});

	const sourceLabel = $derived.by(() => {
		if (!sourcePath) {
			return '';
		}

		return isFallback ? `${sourcePath} (fallback: ${resolvedPath})` : sourcePath;
	});

	return {
		get title() {
			return title;
		},
		get sprintName() {
			return sprintName;
		},
		get path() {
			return sourcePath;
		},
		get loading() {
			return loading;
		},
		get saving() {
			return saving;
		},
		get error() {
			return error;
		},
		get dirty() {
			return dirty;
		},
		get saveStatus() {
			return saveStatus;
		},
		get sourceLabel() {
			return sourceLabel;
		},
		get isFallback() {
			return isFallback;
		},
		get lastSavedAt() {
			return lastSavedAt;
		},
		get backlogData() {
			return backlogData;
		},
		get issues() {
			return issues;
		},
		get kanbanBoard() {
			return kanbanBoard;
		},
		get burnDownData() {
			return burnDownData;
		},
		handleBacklogToggle,
		handleReload,
		handleItemAdd,
		handleItemUpdate,
		handleItemDelete,
		handleIssuesMoveToBacklog,
		handleBoardChange,
		save
	};
}

export default createDomainBacklogState;
