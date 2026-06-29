<script lang="ts">
	const browser = typeof window !== 'undefined';
	import PreziScene from '$stylist/presentation/component/organism/prezi-scene/index.svelte';
	import SceneInspector from '$stylist/presentation/component/molecule/scene-inspector/index.svelte';
	import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/scene-node';

	type DemoStep = {
		id: string;
		label: string;
		title: string;
		summary: string;
		nodeId: string | null;
		checklist: string[];
		note: string;
	};

	type SceneCameraPreset = {
		x: number;
		y: number;
		zoom: number;
		depth: number;
		selectedNodeId: string | null;
	};

	type StoredUiState = {
		stepIndex: number;
		presenterMode: boolean;
		showGrid: boolean;
		showMinimap: boolean;
		showInspector: boolean;
		autoPlayEnabled: boolean;
		autoPlayIntervalMs: number;
		loopPlayback: boolean;
		animationDurationMs: number;
		leftPanelCollapsed: boolean;
		rightPanelCollapsed: boolean;
		notesByStep: Record<string, string>;
		steps: DemoStep[];
	};

	type MotionPreset = 'swift' | 'smooth' | 'cinematic';

	const DETAIL_FRAME_WIDTH = 520;
	const DETAIL_FRAME_HEIGHT = 320;
	const STORAGE_KEY = 'prezi-demo-ui-v3';

	const sceneNodes: readonly SceneNode[] = [
		{
			id: 'overview-board',
			title: 'Presentation Board',
			label: 'Overview',
			description: 'Top-level canvas that frames the full deck structure.',
			iconText: 'O',
			position: { x: 160, y: 130, z: 180, space: 'world' },
			depth: 180,
			accent: '#0f766e'
		},
		{
			id: 'section-hub',
			title: 'Section Hub',
			label: 'Sections',
			description: 'Primary branch for navigating grouped presentation sections.',
			iconText: 'S',
			position: { x: 620, y: 260, z: 480, space: 'world' },
			depth: 480,
			accent: '#2563eb',
			children: [
				{
					id: 'intro-slide',
					title: 'Intro Slide',
					label: 'Intro',
					description: 'Opening frame for context and orientation.',
					iconText: 'I',
					position: { x: 540, y: 180, z: 150, space: 'world' },
					depth: 150,
					accent: '#2563eb'
				},
				{
					id: 'detail-slide',
					title: 'Detail Slide',
					label: 'Detail',
					description: 'Focused branch for one detailed talking point.',
					iconText: 'D',
					position: { x: 760, y: 320, z: 420, space: 'world' },
					depth: 420,
					accent: '#7c3aed'
				},
				{
					id: 'summary-slide',
					title: 'Summary Slide',
					label: 'Summary',
					description: 'Closing frame for recap and handoff.',
					iconText: 'C',
					position: { x: 920, y: 210, z: 760, space: 'world' },
					depth: 760,
					accent: '#dc2626'
				}
			]
		},
		{
			id: 'media-cluster',
			title: 'Media Cluster',
			label: 'Media',
			description: 'Area for visual assets, embeds and supporting content.',
			iconText: 'M',
			position: { x: 340, y: 560, z: 760, space: 'world' },
			depth: 760,
			accent: '#d97706'
		},
		{
			id: 'qna-zone',
			title: 'Q&A Zone',
			label: 'Q&A',
			description: 'Final frame for questions, notes and discussion prompts.',
			iconText: 'Q',
			position: { x: 860, y: 600, z: 920, space: 'world' },
			depth: 920,
			accent: '#be123c'
		}
	];

	const initialSteps: DemoStep[] = [
		{
			id: 'overview',
			label: '01',
			title: 'Open the full canvas',
			summary: 'Start from the complete scene before drilling into any branch.',
			nodeId: null,
			checklist: [
				'Confirm the audience can read the whole layout.',
				'Explain how major branches are organized.',
				'Set the expected navigation order for the demo.'
			],
			note: 'Use this step as the neutral opening state for any presentation.'
		},
		{
			id: 'sections',
			label: '02',
			title: 'Focus the section hub',
			summary: 'Move to the main branching node that controls the internal structure of the deck.',
			nodeId: 'section-hub',
			checklist: [
				'Show how one node can represent a full section.',
				'Use the inspector as a simple presenter-side metadata panel.',
				'Explain that child nodes can stand in for nested slides.'
			],
			note: 'This is the most useful step for demonstrating semantic zoom as navigation.'
		},
		{
			id: 'media',
			label: '03',
			title: 'Switch to a supporting content area',
			summary:
				'Demonstrate that the canvas can jump sideways to a different content mode without losing context.',
			nodeId: 'media-cluster',
			checklist: [
				'Show a non-linear move to another area of the deck.',
				'Keep the minimap visible to preserve orientation.',
				'Use this state to talk about embeds, assets or examples.'
			],
			note: 'This step is useful when you want to show lateral navigation instead of strict slide order.'
		},
		{
			id: 'qna',
			label: '04',
			title: 'Finish on a closing frame',
			summary:
				'End in a stable state that can support recap, discussion or transition to questions.',
			nodeId: 'qna-zone',
			checklist: [
				'Demonstrate a final destination for wrap-up.',
				'Use the selected node panel for presenter notes.',
				'Show how the same tool can support both delivery and discussion.'
			],
			note: 'Keep this as the final state for a generic demo of the tool.'
		}
	];

	const nodeById = new Map(sceneNodes.map((node) => [node.id, node]));

	function cloneSteps(steps: DemoStep[]): DemoStep[] {
		return steps.map((step) => ({
			...step,
			checklist: [...step.checklist]
		}));
	}

	function reindexSteps(steps: DemoStep[]): DemoStep[] {
		return steps.map((step, index) => ({
			...step,
			label: String(index + 1).padStart(2, '0')
		}));
	}

	function createStepId(): string {
		if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
			return crypto.randomUUID();
		}

		return `step-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
	}

	function clampZoom(value: number): number {
		return Math.max(0.1, Math.min(5, value));
	}

	function getOverviewPreset(viewportWidth: number, viewportHeight: number): SceneCameraPreset {
		const padding = 180;
		const minX = Math.min(...sceneNodes.map((node) => node.position.x)) - padding;
		const maxX = Math.max(...sceneNodes.map((node) => node.position.x)) + padding;
		const minY = Math.min(...sceneNodes.map((node) => node.position.y)) - padding;
		const maxY = Math.max(...sceneNodes.map((node) => node.position.y)) + padding;
		const width = maxX - minX;
		const height = maxY - minY;
		const zoom = clampZoom(Math.min(viewportWidth / width, viewportHeight / height, 1));
		const centerX = minX + width / 2;
		const centerY = minY + height / 2;

		return {
			x: viewportWidth / 2 - centerX * zoom,
			y: viewportHeight / 2 - centerY * zoom,
			zoom,
			depth: 360,
			selectedNodeId: null
		};
	}

	function getNodePreset(node: SceneNode, viewportWidth: number, viewportHeight: number): SceneCameraPreset {
		const zoom = clampZoom(
			Math.min(
				(viewportWidth * 0.65) / DETAIL_FRAME_WIDTH,
				(viewportHeight * 0.65) / DETAIL_FRAME_HEIGHT
			)
		);

		return {
			x: viewportWidth / 2 - node.position.x * zoom,
			y: viewportHeight / 2 - node.position.y * zoom,
			zoom,
			depth: node.depth,
			selectedNodeId: node.id
		};
	}

	function getPresetForStep(step: DemoStep | undefined, viewportWidth: number, viewportHeight: number): SceneCameraPreset {
		if (!step || step.nodeId === null) {
			return getOverviewPreset(viewportWidth, viewportHeight);
		}

		const node = nodeById.get(step.nodeId);
		return node ? getNodePreset(node, viewportWidth, viewportHeight) : getOverviewPreset(viewportWidth, viewportHeight);
	}

	function parseChecklist(value: string): string[] {
		return value
			.split('\n')
			.map((item) => item.trim())
			.filter(Boolean);
	}

	function resolveMotionPreset(durationMs: number): MotionPreset {
		if (durationMs <= 500) {
			return 'swift';
		}

		if (durationMs >= 1300) {
			return 'cinematic';
		}

		return 'smooth';
	}

	let stepsState = $state<DemoStep[]>(cloneSteps(initialSteps));
	let stepIndex = $state(0);
	let stageVersion = $state(0);
	let presenterMode = $state(false);
	let showGrid = $state(true);
	let showMinimap = $state(true);
	let showInspector = $state(true);
	let autoPlayEnabled = $state(false);
	let autoPlayIntervalMs = $state(5000);
	let loopPlayback = $state(true);
	let animationDurationMs = $state(900);
	let selectedNodeId = $state<string | null>(initialSteps[0]?.nodeId ?? null);
	let leftPanelCollapsed = $state(false);
	let rightPanelCollapsed = $state(false);
	let showShortcuts = $state(false);
	let notesByStep = $state<Record<string, string>>({});
	let importExportValue = $state('');
	let authorMode = $state(true);
	let hasHydratedState = false;
	let motionPreset = $state<MotionPreset>('smooth');
	let stageFrameWidth = $state(1280);
	let stageFrameHeight = $state(720);

	const currentStep = $derived(stepsState[stepIndex]);
	const currentPreset = $derived(
		getPresetForStep(currentStep, stageFrameWidth, stageFrameHeight)
	);
	const selectedNode = $derived(selectedNodeId ? (nodeById.get(selectedNodeId) ?? null) : null);
	const currentStepNoteDraft = $derived(currentStep ? (notesByStep[currentStep.id] ?? '') : '');
	const completionPercent = $derived(
		stepsState.length === 0 ? 0 : Math.round(((stepIndex + 1) / stepsState.length) * 100)
	);
	const focusOptions = $derived([
		{ id: 'overview', label: 'Overview', nodeId: null as string | null },
		...sceneNodes.map((node) => ({
			id: node.id,
			label: node.label ?? node.title,
			nodeId: node.id as string | null
		}))
	]);
	const currentChecklistText = $derived(currentStep ? currentStep.checklist.join('\n') : '');
	const playbackStateLabel = $derived(autoPlayEnabled ? 'Playing' : 'Paused');
	const isAtLastStep = $derived(stepIndex >= stepsState.length - 1);

	function syncStageWithStep(index: number): void {
		if (stepsState.length === 0) {
			return;
		}

		const nextIndex = Math.max(0, Math.min(index, stepsState.length - 1));
		stepIndex = nextIndex;
		selectedNodeId = stepsState[nextIndex]?.nodeId ?? null;
		stageVersion += 1;
	}

	function goToNextStep(): void {
		syncStageWithStep(stepIndex + 1);
	}

	function goToPreviousStep(): void {
		syncStageWithStep(stepIndex - 1);
	}

	function handleNodeSelect(node: SceneNode | null): void {
		selectedNodeId = node?.id ?? null;
	}

	function focusNodeById(nodeId: string | null): void {
		selectedNodeId = nodeId;
	}

	function updateCurrentStepNote(value: string): void {
		if (!currentStep) {
			return;
		}

		notesByStep = {
			...notesByStep,
			[currentStep.id]: value
		};
	}

	function updateCurrentStepField<K extends keyof DemoStep>(field: K, value: DemoStep[K]): void {
		if (!currentStep) {
			return;
		}

		stepsState = reindexSteps(
			stepsState.map((step, index) =>
				index === stepIndex
					? {
							...step,
							[field]: value
						}
					: step
			)
		);
	}

	function addStep(): void {
		const seedNodeId = selectedNodeId ?? null;
		const seedNode = seedNodeId ? (nodeById.get(seedNodeId) ?? null) : null;
		const nextSteps = reindexSteps([
			...stepsState,
			{
				id: createStepId(),
				label: '00',
				title: seedNode?.title ?? 'New Step',
				summary: seedNode?.description ?? 'Describe what happens in this step.',
				nodeId: seedNodeId,
				checklist: ['Add a presenter cue', 'Add a transition note'],
				note: 'Write a short note for the presenter.'
			}
		]);

		stepsState = nextSteps;
		stepIndex = nextSteps.length - 1;
		stageVersion += 1;
	}

	function duplicateCurrentStep(): void {
		if (!currentStep) {
			return;
		}

		const clonedStep: DemoStep = {
			...currentStep,
			id: createStepId(),
			label: '00',
			title: `${currentStep.title} Copy`,
			checklist: [...currentStep.checklist]
		};
		const nextSteps = [...stepsState];
		nextSteps.splice(stepIndex + 1, 0, clonedStep);
		stepsState = reindexSteps(nextSteps);
		stepIndex += 1;
		stageVersion += 1;
	}

	function deleteCurrentStep(): void {
		if (stepsState.length <= 1 || !currentStep) {
			return;
		}

		const nextSteps = stepsState.filter((step) => step.id !== currentStep.id);
		const { [currentStep.id]: _removed, ...restNotes } = notesByStep;
		notesByStep = restNotes;
		stepsState = reindexSteps(nextSteps);
		stepIndex = Math.max(0, Math.min(stepIndex, nextSteps.length - 1));
		selectedNodeId = nextSteps[stepIndex]?.nodeId ?? null;
		stageVersion += 1;
	}

	function moveCurrentStep(direction: -1 | 1): void {
		const targetIndex = stepIndex + direction;
		if (targetIndex < 0 || targetIndex >= stepsState.length) {
			return;
		}

		const nextSteps = [...stepsState];
		const [movedStep] = nextSteps.splice(stepIndex, 1);
		nextSteps.splice(targetIndex, 0, movedStep);
		stepsState = reindexSteps(nextSteps);
		stepIndex = targetIndex;
	}

	function exportScenario(): void {
		importExportValue = JSON.stringify(
			{
				steps: stepsState,
				notesByStep
			},
			null,
			2
		);
	}

	function importScenario(): void {
		try {
			const payload = JSON.parse(importExportValue) as {
				steps?: DemoStep[];
				notesByStep?: Record<string, string>;
			};
			const nextSteps =
				Array.isArray(payload.steps) && payload.steps.length > 0
					? payload.steps
					: cloneSteps(initialSteps);
			stepsState = reindexSteps(
				nextSteps.map((step) => ({
					...step,
					id: step.id || createStepId(),
					checklist: Array.isArray(step.checklist) ? step.checklist : []
				}))
			);
			notesByStep = payload.notesByStep ?? {};
			stepIndex = 0;
			selectedNodeId = stepsState[0]?.nodeId ?? null;
			stageVersion += 1;
		} catch {
			importExportValue = 'Invalid JSON payload';
		}
	}

	async function toggleFullscreen(): Promise<void> {
		if (!browser) return;

		if (document.fullscreenElement) {
			await document.exitFullscreen();
			return;
		}

		await document.documentElement.requestFullscreen();
	}

	function toggleAutoPlay(): void {
		if (isAtLastStep && !loopPlayback) {
			syncStageWithStep(0);
		}
		autoPlayEnabled = !autoPlayEnabled;
	}

	function applyMotionPreset(preset: MotionPreset): void {
		motionPreset = preset;
		if (preset === 'swift') {
			animationDurationMs = 450;
			autoPlayIntervalMs = 3200;
			return;
		}

		if (preset === 'smooth') {
			animationDurationMs = 900;
			autoPlayIntervalMs = 5000;
			return;
		}

		animationDurationMs = 1500;
		autoPlayIntervalMs = 7200;
	}

	function handleWindowKeydown(event: KeyboardEvent): void {
		if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) {
			return;
		}

		if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
			event.preventDefault();
			goToNextStep();
			return;
		}

		if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
			event.preventDefault();
			goToPreviousStep();
			return;
		}

		if (event.key.toLowerCase() === 'p') {
			event.preventDefault();
			presenterMode = !presenterMode;
			return;
		}

		if (event.key.toLowerCase() === 'r') {
			event.preventDefault();
			syncStageWithStep(stepIndex);
			return;
		}

		if (event.key.toLowerCase() === 'f') {
			event.preventDefault();
			void toggleFullscreen();
			return;
		}

		if (event.key.toLowerCase() === 'n') {
			event.preventDefault();
			addStep();
			return;
		}

		if (event.key.toLowerCase() === 'k') {
			event.preventDefault();
			toggleAutoPlay();
			return;
		}

		if (event.key === '?') {
			event.preventDefault();
			showShortcuts = !showShortcuts;
		}
	}

	$effect(() => {
		if (!browser || hasHydratedState) {
			return;
		}

		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (raw) {
			try {
				const stored = JSON.parse(raw) as Partial<StoredUiState>;
				stepsState = reindexSteps(
					Array.isArray(stored.steps) && stored.steps.length > 0
						? cloneSteps(stored.steps)
						: cloneSteps(initialSteps)
				);
				stepIndex = Math.max(0, Math.min(stored.stepIndex ?? 0, stepsState.length - 1));
				presenterMode = stored.presenterMode ?? false;
				autoPlayEnabled = stored.autoPlayEnabled ?? false;
				autoPlayIntervalMs = stored.autoPlayIntervalMs ?? 5000;
				loopPlayback = stored.loopPlayback ?? true;
				animationDurationMs = stored.animationDurationMs ?? 900;
				motionPreset = resolveMotionPreset(animationDurationMs);
				showGrid = stored.showGrid ?? true;
				showMinimap = stored.showMinimap ?? true;
				showInspector = stored.showInspector ?? true;
				leftPanelCollapsed = stored.leftPanelCollapsed ?? false;
				rightPanelCollapsed = stored.rightPanelCollapsed ?? false;
				notesByStep = stored.notesByStep ?? {};
				selectedNodeId = stepsState[stepIndex]?.nodeId ?? null;
			} catch {
				window.localStorage.removeItem(STORAGE_KEY);
			}
		}

		hasHydratedState = true;
	});

	$effect(() => {
		if (!browser || !hasHydratedState) {
			return;
		}

		const payload: StoredUiState = {
			stepIndex,
			presenterMode,
			autoPlayEnabled,
			autoPlayIntervalMs,
			loopPlayback,
			animationDurationMs,
			showGrid,
			showMinimap,
			showInspector,
			leftPanelCollapsed,
			rightPanelCollapsed,
			notesByStep,
			steps: stepsState
		};

		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
	});

	$effect(() => {
		const inferredPreset = resolveMotionPreset(animationDurationMs);
		if (
			motionPreset !== inferredPreset &&
			(inferredPreset === 'swift' || inferredPreset === 'smooth' || inferredPreset === 'cinematic')
		) {
			motionPreset = inferredPreset;
		}
	});

	$effect(() => {
		if (!browser || !autoPlayEnabled || stepsState.length <= 1) {
			return;
		}

		const timer = window.setTimeout(
			() => {
				if (stepIndex >= stepsState.length - 1) {
					if (loopPlayback) {
						syncStageWithStep(0);
						return;
					}

					autoPlayEnabled = false;
					return;
				}

				syncStageWithStep(stepIndex + 1);
			},
			Math.max(autoPlayIntervalMs, animationDurationMs + 400)
		);

		return () => window.clearTimeout(timer);
	});
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<main class:prezi-demo--presenter={presenterMode} class="prezi-demo">
	<section class="prezi-demo__hero">
		<div class="prezi-demo__hero-copy">
			<p class="prezi-demo__eyebrow">Presentation Tool</p>
			<h1>Prezi demo workspace.</h1>
		</div>

		<div class="prezi-demo__hero-actions">
			<button
				type="button"
				class="prezi-demo__action"
				onclick={() => (presenterMode = !presenterMode)}
			>
				{presenterMode ? 'Exit presenter mode' : 'Presenter mode'}
			</button>
			<button type="button" class="prezi-demo__action" onclick={() => void toggleFullscreen()}>
				Fullscreen
			</button>
			<button
				type="button"
				class="prezi-demo__action"
				onclick={() => (showShortcuts = !showShortcuts)}
			>
				Shortcuts
			</button>
		</div>
	</section>

	<section class="prezi-demo__toolbar">
		<div class="prezi-demo__progress">
			<div class="prezi-demo__progress-labels">
				<span>Progress</span>
				<strong>{completionPercent}%</strong>
			</div>
			<input
				class="prezi-demo__progress-slider"
				type="range"
				min="0"
				max={Math.max(stepsState.length - 1, 0)}
				step="1"
				bind:value={stepIndex}
				onchange={() => syncStageWithStep(stepIndex)}
			/>
		</div>

		<div class="prezi-demo__focus-strip">
			{#each focusOptions as option (option.id)}
				<button
					type="button"
					class:prezi-demo__chip--active={selectedNodeId === option.nodeId ||
						(option.nodeId === null && selectedNodeId === null)}
					class="prezi-demo__chip"
					onclick={() => focusNodeById(option.nodeId)}
				>
					{option.label}
				</button>
			{/each}
		</div>
	</section>

	<section class="prezi-demo__transport">
		<div class="prezi-demo__transport-group">
			<button
				type="button"
				class="prezi-demo__transport-button"
				onclick={goToPreviousStep}
				disabled={stepIndex === 0}
			>
				Back
			</button>
			<button
				type="button"
				class:prezi-demo__transport-button--active={autoPlayEnabled}
				class="prezi-demo__transport-button prezi-demo__transport-button--accent"
				onclick={toggleAutoPlay}
			>
				{autoPlayEnabled ? 'Pause autoplay' : 'Start autoplay'}
			</button>
			<button
				type="button"
				class="prezi-demo__transport-button"
				onclick={goToNextStep}
				disabled={stepIndex >= stepsState.length - 1 && !loopPlayback}
			>
				Forward
			</button>
		</div>

		<div class="prezi-demo__transport-metrics">
			<span>{playbackStateLabel}</span>
			<span>{autoPlayIntervalMs} ms / step</span>
			<span>{animationDurationMs} ms transition</span>
		</div>

		<div class="prezi-demo__transport-settings">
			<label class="prezi-demo__inline-field">
				<span>Motion</span>
				<select
					class="prezi-demo__compact-field"
					bind:value={motionPreset}
					onchange={(event) => {
						const target = event.currentTarget as HTMLSelectElement;
						applyMotionPreset(target.value as MotionPreset);
					}}
				>
					<option value="swift">Swift</option>
					<option value="smooth">Smooth</option>
					<option value="cinematic">Cinematic</option>
				</select>
			</label>

			<label class="prezi-demo__inline-field">
				<span>Autoplay</span>
				<input
					class="prezi-demo__compact-range"
					type="range"
					min="2500"
					max="12000"
					step="100"
					bind:value={autoPlayIntervalMs}
				/>
			</label>

			<label class="prezi-demo__inline-field">
				<span>Transition</span>
				<input
					class="prezi-demo__compact-range"
					type="range"
					min="300"
					max="2200"
					step="50"
					bind:value={animationDurationMs}
				/>
			</label>

			<label class="prezi-demo__toggle-inline">
				<input bind:checked={loopPlayback} type="checkbox" />
				<span>Loop</span>
			</label>
		</div>
	</section>

	{#if showShortcuts}
		<section class="prezi-demo__shortcuts">
			<span>`→` / `Space` next step</span>
			<span>`←` previous step</span>
			<span>`P` presenter mode</span>
			<span>`R` recenter step</span>
			<span>`F` fullscreen</span>
			<span>`K` play/pause autoplay</span>
			<span>`N` new step</span>
			<span>`?` toggle shortcuts</span>
		</section>
	{/if}

	<section
		class:prezi-demo__shell--left-collapsed={leftPanelCollapsed}
		class:prezi-demo__shell--right-collapsed={rightPanelCollapsed}
		class="prezi-demo__shell"
	>
		<aside class:prezi-demo__rail--collapsed={leftPanelCollapsed} class="prezi-demo__rail">
			<div class="prezi-demo__panel">
				<div class="prezi-demo__panel-head">
					<p class="prezi-demo__panel-kicker">Presentation Steps</p>
					<div class="prezi-demo__panel-actions">
						<button type="button" class="prezi-demo__panel-toggle" onclick={addStep}>Add</button>
						<button
							type="button"
							class="prezi-demo__panel-toggle"
							onclick={() => (leftPanelCollapsed = !leftPanelCollapsed)}
						>
							{leftPanelCollapsed ? 'Expand' : 'Collapse'}
						</button>
					</div>
				</div>
				{#if !leftPanelCollapsed}
					<div class="prezi-demo__steps">
						{#each stepsState as step, index (step.id)}
							<button
								type="button"
								class:prezi-demo__step--active={index === stepIndex}
								class="prezi-demo__step"
								onclick={() => syncStageWithStep(index)}
							>
								<span class="prezi-demo__step-label">{step.label}</span>
								<span class="prezi-demo__step-copy">
									<strong>{step.title}</strong>
									<small>{step.summary}</small>
								</span>
							</button>
						{/each}
					</div>
				{/if}
			</div>

			<div class="prezi-demo__panel">
				<p class="prezi-demo__panel-kicker">Scene Controls</p>
				{#if !leftPanelCollapsed}
					<div class="prezi-demo__toggles">
						<label><input bind:checked={showGrid} type="checkbox" /> Grid</label>
						<label><input bind:checked={showMinimap} type="checkbox" /> Minimap</label>
						<label><input bind:checked={showInspector} type="checkbox" /> Inspector</label>
						<label><input bind:checked={authorMode} type="checkbox" /> Author tools</label>
					</div>
					<div class="prezi-demo__hotkeys">
						<span>State persists between reloads</span>
						<span>Use focus chips for quick jumps</span>
					</div>
				{/if}
			</div>

			{#if authorMode && currentStep && !leftPanelCollapsed}
				<div class="prezi-demo__panel">
					<p class="prezi-demo__panel-kicker">Step Actions</p>
					<div class="prezi-demo__author-actions">
						<button
							type="button"
							class="prezi-demo__small-action"
							onclick={() => moveCurrentStep(-1)}
							disabled={stepIndex === 0}
						>
							Move up
						</button>
						<button
							type="button"
							class="prezi-demo__small-action"
							onclick={() => moveCurrentStep(1)}
							disabled={stepIndex === stepsState.length - 1}
						>
							Move down
						</button>
						<button type="button" class="prezi-demo__small-action" onclick={duplicateCurrentStep}>
							Duplicate
						</button>
						<button
							type="button"
							class="prezi-demo__small-action prezi-demo__small-action--danger"
							onclick={deleteCurrentStep}
							disabled={stepsState.length <= 1}
						>
							Delete
						</button>
					</div>
				</div>
			{/if}
		</aside>

		<section class="prezi-demo__stage-panel">
			<div class="prezi-demo__stage-head">
				<div>
					<p class="prezi-demo__panel-kicker">Stage</p>
					<h2>{currentStep?.title ?? 'No step selected'}</h2>
				</div>
				<div class="prezi-demo__badge-group">
					<span class="prezi-demo__badge">Step {stepIndex + 1}/{stepsState.length}</span>
					<span class="prezi-demo__badge">
						Focus {selectedNode?.label ?? currentPreset.selectedNodeId ?? 'overview'}
					</span>
				</div>
			</div>

			<div
				class="prezi-demo__stage-frame"
				bind:clientWidth={stageFrameWidth}
				bind:clientHeight={stageFrameHeight}
			>
				{#key `${stageVersion}-${currentStep?.id ?? 'empty'}`}
					<PreziScene
						nodes={sceneNodes}
						title="Presentation scene"
						subtitle={currentStep?.summary ?? 'Scene preview'}
						initialCamera={{
							x: currentPreset.x,
							y: currentPreset.y,
							zoom: currentPreset.zoom
						}}
						initialDepth={currentPreset.depth}
						selectedNodeId={currentPreset.selectedNodeId}
						{animationDurationMs}
						showHeader={true}
						{showGrid}
						{showMinimap}
						{showInspector}
						onNodeSelect={handleNodeSelect}
					>
						{#snippet inspector(node)}
							<SceneInspector
								{node}
								onclose={() => handleNodeSelect(null)}
							/>
						{/snippet}
					</PreziScene>
				{/key}
			</div>
		</section>

		<aside class:prezi-demo__notes--collapsed={rightPanelCollapsed} class="prezi-demo__notes">
			<div class="prezi-demo__panel">
				<div class="prezi-demo__panel-head">
					<p class="prezi-demo__panel-kicker">Presenter Note</p>
					<button
						type="button"
						class="prezi-demo__panel-toggle"
						onclick={() => (rightPanelCollapsed = !rightPanelCollapsed)}
					>
						{rightPanelCollapsed ? 'Expand' : 'Collapse'}
					</button>
				</div>
				{#if !rightPanelCollapsed && currentStep}
					<h2>{currentStep.title}</h2>
					<p class="prezi-demo__note">{currentStep.note}</p>
					<textarea
						class="prezi-demo__notes-input"
						rows="5"
						placeholder="Write presenter notes for this step..."
						value={currentStepNoteDraft}
						oninput={(event) => {
							const target = event.currentTarget as HTMLTextAreaElement;
							updateCurrentStepNote(target.value);
						}}
					></textarea>
				{/if}
			</div>

			{#if authorMode && currentStep && !rightPanelCollapsed}
				<div class="prezi-demo__panel">
					<p class="prezi-demo__panel-kicker">Step Editor</p>
					<div class="prezi-demo__editor">
						<label>
							<span>Title</span>
							<input
								class="prezi-demo__field"
								type="text"
								value={currentStep.title}
								oninput={(event) => {
									const target = event.currentTarget as HTMLInputElement;
									updateCurrentStepField('title', target.value);
								}}
							/>
						</label>
						<label>
							<span>Summary</span>
							<textarea
								class="prezi-demo__field prezi-demo__field--textarea"
								rows="3"
								oninput={(event) => {
									const target = event.currentTarget as HTMLTextAreaElement;
									updateCurrentStepField('summary', target.value);
								}}>{currentStep.summary}</textarea
							>
						</label>
						<label>
							<span>Focus Node</span>
							<select
								class="prezi-demo__field"
								value={currentStep.nodeId ?? 'overview'}
								onchange={(event) => {
									const target = event.currentTarget as HTMLSelectElement;
									updateCurrentStepField(
										'nodeId',
										target.value === 'overview' ? null : target.value
									);
								}}
							>
								<option value="overview">Overview</option>
								{#each sceneNodes as node (node.id)}
									<option value={node.id}>{node.label ?? node.title}</option>
								{/each}
							</select>
						</label>
						<label>
							<span>Checklist</span>
							<textarea
								class="prezi-demo__field prezi-demo__field--textarea"
								rows="6"
								oninput={(event) => {
									const target = event.currentTarget as HTMLTextAreaElement;
									updateCurrentStepField('checklist', parseChecklist(target.value));
								}}>{currentChecklistText}</textarea
							>
						</label>
						<label>
							<span>Default note</span>
							<textarea
								class="prezi-demo__field prezi-demo__field--textarea"
								rows="4"
								oninput={(event) => {
									const target = event.currentTarget as HTMLTextAreaElement;
									updateCurrentStepField('note', target.value);
								}}>{currentStep.note}</textarea
							>
						</label>
					</div>
				</div>
			{/if}

			<div class="prezi-demo__panel">
				<p class="prezi-demo__panel-kicker">Step Checklist</p>
				{#if !rightPanelCollapsed && currentStep}
					<ul class="prezi-demo__list">
						{#each currentStep.checklist as item}
							<li>{item}</li>
						{/each}
					</ul>
				{/if}
			</div>

			<div class="prezi-demo__panel">
				<p class="prezi-demo__panel-kicker">Current Node</p>
				{#if !rightPanelCollapsed}
					{#if selectedNode}
						<div class="prezi-demo__node-card">
							<strong>{selectedNode.title}</strong>
							<span>{selectedNode.description}</span>
							<div class="prezi-demo__node-meta">
								<span>Depth {selectedNode.depth}</span>
								<span>{selectedNode.children?.length ?? 0} children</span>
							</div>
						</div>
					{:else}
						<p class="prezi-demo__muted">
							No focused node. This state is useful for starting or resetting the presentation.
						</p>
					{/if}
				{/if}
			</div>

			{#if authorMode && !rightPanelCollapsed}
				<div class="prezi-demo__panel">
					<div class="prezi-demo__panel-head">
						<p class="prezi-demo__panel-kicker">Scenario JSON</p>
						<div class="prezi-demo__panel-actions">
							<button type="button" class="prezi-demo__panel-toggle" onclick={exportScenario}
								>Export</button
							>
							<button type="button" class="prezi-demo__panel-toggle" onclick={importScenario}
								>Import</button
							>
						</div>
					</div>
					<textarea
						class="prezi-demo__notes-input"
						rows="12"
						placeholder="Export the current scenario or paste a JSON payload to import."
						bind:value={importExportValue}
					></textarea>
				</div>
			{/if}
		</aside>
	</section>
</main>

<style>
	:global(body) {
		background:
			radial-gradient(circle at top, rgba(14, 165, 233, 0.16), transparent 30%),
			linear-gradient(180deg, #f5fbff 0%, #edf4ff 100%);
	}

	.prezi-demo {
		max-width: 1680px;
		margin: 0 auto;
		padding: 1.25rem;
		display: grid;
		gap: 1rem;
		color: #0f172a;
		font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
	}

	.prezi-demo__hero,
	.prezi-demo__panel,
	.prezi-demo__stage-panel,
	.prezi-demo__toolbar,
	.prezi-demo__shortcuts {
		border: 1px solid rgba(148, 163, 184, 0.22);
		background: rgba(255, 255, 255, 0.82);
		backdrop-filter: blur(18px);
		box-shadow: 0 24px 48px rgba(15, 23, 42, 0.08);
	}

	.prezi-demo__hero {
		border-radius: 30px;
		padding: 1rem 1.2rem;
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) auto;
		gap: 0.75rem;
		align-items: center;
	}

	.prezi-demo__hero-copy {
		display: grid;
		gap: 0.35rem;
	}

	.prezi-demo__eyebrow,
	.prezi-demo__panel-kicker {
		margin: 0;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		font-weight: 700;
		color: #0f766e;
	}

	h1,
	h2,
	p {
		margin: 0;
	}

	h1 {
		font-family: 'Fraunces', serif;
		font-size: clamp(1.5rem, 2.2vw, 2.2rem);
		line-height: 0.98;
		max-width: none;
	}

	h2 {
		font-size: 1.1rem;
		line-height: 1.15;
	}

	.prezi-demo__hero-copy p:last-child,
	.prezi-demo__note,
	.prezi-demo__muted,
	.prezi-demo__step-copy small,
	.prezi-demo__node-card span {
		color: #475569;
		line-height: 1.6;
	}

	.prezi-demo__hero-actions,
	.prezi-demo__panel-actions,
	.prezi-demo__author-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	.prezi-demo__hero-actions {
		justify-content: flex-end;
	}

	.prezi-demo__action,
	.prezi-demo__panel-toggle,
	.prezi-demo__small-action,
	.prezi-demo__chip {
		border: 1px solid rgba(148, 163, 184, 0.3);
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.92);
		font: inherit;
		font-weight: 600;
		cursor: pointer;
	}

	.prezi-demo__action {
		padding: 0.8rem 1rem;
		color: #0f172a;
	}

	.prezi-demo__panel-toggle,
	.prezi-demo__small-action {
		padding: 0.4rem 0.75rem;
		font-size: 0.78rem;
	}

	.prezi-demo__small-action--danger {
		color: #b91c1c;
	}

	.prezi-demo__chip--active {
		background: #0f172a;
		border-color: #0f172a;
		color: white;
	}

	.prezi-demo__action:disabled,
	.prezi-demo__small-action:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}

	.prezi-demo__toolbar {
		border-radius: 24px;
		padding: 0.85rem 1rem;
		display: grid;
		grid-template-columns: 260px minmax(0, 1fr);
		gap: 1rem;
		align-items: center;
	}

	.prezi-demo__transport {
		border: 1px solid rgba(148, 163, 184, 0.22);
		border-radius: 24px;
		background: rgba(255, 255, 255, 0.86);
		backdrop-filter: blur(18px);
		box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
		padding: 0.85rem 1rem;
		display: grid;
		grid-template-columns: auto auto minmax(0, 1fr);
		gap: 1rem;
		align-items: center;
	}

	.prezi-demo__transport-group,
	.prezi-demo__transport-metrics,
	.prezi-demo__transport-settings {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.65rem;
	}

	.prezi-demo__transport-metrics {
		font-size: 0.82rem;
		font-weight: 600;
		color: #475569;
	}

	.prezi-demo__transport-button {
		border: 1px solid rgba(148, 163, 184, 0.3);
		border-radius: 999px;
		padding: 0.58rem 0.9rem;
		background: white;
		font: inherit;
		font-size: 0.82rem;
		font-weight: 700;
		cursor: pointer;
	}

	.prezi-demo__transport-button--accent {
		background: #0f172a;
		border-color: #0f172a;
		color: white;
	}

	.prezi-demo__transport-button--active {
		background: #0f766e;
		border-color: #0f766e;
	}

	.prezi-demo__transport-button:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}

	.prezi-demo__inline-field,
	.prezi-demo__toggle-inline {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-size: 0.8rem;
		font-weight: 600;
		color: #334155;
	}

	.prezi-demo__compact-field {
		border: 1px solid rgba(148, 163, 184, 0.3);
		border-radius: 999px;
		padding: 0.42rem 0.7rem;
		background: white;
		font: inherit;
	}

	.prezi-demo__compact-range {
		width: 128px;
		accent-color: #0f766e;
	}

	.prezi-demo__progress,
	.prezi-demo__focus-strip {
		display: grid;
		gap: 0.45rem;
	}

	.prezi-demo__progress-labels {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.prezi-demo__progress-slider {
		width: 100%;
		accent-color: #0f766e;
	}

	.prezi-demo__focus-strip {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.prezi-demo__chip {
		padding: 0.5rem 0.8rem;
		font-size: 0.82rem;
	}

	.prezi-demo__shortcuts {
		border-radius: 24px;
		padding: 0.8rem 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem 1rem;
		font-size: 0.82rem;
		color: #475569;
	}

	.prezi-demo__shell {
		display: grid;
		grid-template-columns: 320px minmax(0, 1fr) 340px;
		gap: 1rem;
		align-items: start;
	}

	.prezi-demo__shell--left-collapsed {
		grid-template-columns: 120px minmax(0, 1fr) 340px;
	}

	.prezi-demo__shell--right-collapsed {
		grid-template-columns: 320px minmax(0, 1fr) 140px;
	}

	.prezi-demo__shell--left-collapsed.prezi-demo__shell--right-collapsed {
		grid-template-columns: 120px minmax(0, 1fr) 140px;
	}

	.prezi-demo__rail,
	.prezi-demo__notes {
		display: grid;
		gap: 1rem;
	}

	.prezi-demo__panel,
	.prezi-demo__stage-panel {
		border-radius: 28px;
		padding: 1rem;
	}

	.prezi-demo__panel-head {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
		align-items: center;
		margin-bottom: 0.75rem;
	}

	.prezi-demo__steps,
	.prezi-demo__toggles,
	.prezi-demo__hotkeys,
	.prezi-demo__editor {
		display: grid;
		gap: 0.75rem;
	}

	.prezi-demo__step {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.85rem;
		align-items: start;
		padding: 0.9rem;
		border: 1px solid rgba(148, 163, 184, 0.18);
		border-radius: 20px;
		background: linear-gradient(180deg, rgba(248, 250, 252, 0.96), rgba(241, 245, 249, 0.9));
		text-align: left;
		cursor: pointer;
	}

	.prezi-demo__step--active {
		border-color: rgba(15, 118, 110, 0.5);
		box-shadow: 0 0 0 2px rgba(15, 118, 110, 0.12);
	}

	.prezi-demo__step-label,
	.prezi-demo__badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
	}

	.prezi-demo__step-label {
		min-width: 2.2rem;
		min-height: 2.2rem;
		background: #0f172a;
		color: white;
	}

	.prezi-demo__step-copy {
		display: grid;
		gap: 0.3rem;
	}

	.prezi-demo__step-copy strong {
		font-size: 0.95rem;
		line-height: 1.2;
	}

	.prezi-demo__toggles label,
	.prezi-demo__editor label {
		display: grid;
		gap: 0.35rem;
		font-weight: 600;
	}

	.prezi-demo__toggles label {
		display: flex;
		align-items: center;
		gap: 0.55rem;
	}

	.prezi-demo__hotkeys span,
	.prezi-demo__node-meta span {
		font-size: 0.85rem;
		color: #64748b;
	}

	.prezi-demo__field,
	.prezi-demo__notes-input {
		width: 100%;
		border: 1px solid rgba(148, 163, 184, 0.32);
		border-radius: 16px;
		padding: 0.8rem 0.9rem;
		background: rgba(248, 250, 252, 0.92);
		color: #0f172a;
		font: inherit;
		line-height: 1.5;
	}

	.prezi-demo__field--textarea,
	.prezi-demo__notes-input {
		resize: vertical;
	}

	.prezi-demo__field:focus,
	.prezi-demo__notes-input:focus {
		outline: 2px solid rgba(15, 118, 110, 0.18);
		border-color: rgba(15, 118, 110, 0.45);
	}

	.prezi-demo__stage-panel {
		display: grid;
		gap: 0.9rem;
	}

	.prezi-demo__stage-head {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		align-items: end;
	}

	.prezi-demo__badge-group {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.prezi-demo__badge {
		padding: 0.5rem 0.8rem;
		background: rgba(15, 118, 110, 0.09);
		color: #115e59;
	}

	.prezi-demo__stage-frame {
		min-height: 76vh;
		border-radius: 24px;
		overflow: hidden;
		background: #020617;
		border: 1px solid rgba(15, 23, 42, 0.2);
	}

	.prezi-demo__list {
		margin: 0;
		padding-left: 1.15rem;
		display: grid;
		gap: 0.65rem;
		color: #334155;
		line-height: 1.55;
	}

	.prezi-demo__node-card {
		display: grid;
		gap: 0.55rem;
		padding: 0.9rem;
		border-radius: 20px;
		background: linear-gradient(180deg, rgba(248, 250, 252, 0.98), rgba(241, 245, 249, 0.92));
	}

	.prezi-demo__node-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.prezi-demo--presenter .prezi-demo__rail,
	.prezi-demo--presenter .prezi-demo__notes,
	.prezi-demo--presenter .prezi-demo__shortcuts {
		display: none;
	}

	.prezi-demo--presenter .prezi-demo__shell {
		grid-template-columns: 1fr;
	}

	.prezi-demo--presenter .prezi-demo__stage-frame {
		min-height: 88vh;
	}

	@media (max-width: 1280px) {
		.prezi-demo__toolbar,
		.prezi-demo__transport,
		.prezi-demo__shell,
		.prezi-demo__shell--left-collapsed,
		.prezi-demo__shell--right-collapsed,
		.prezi-demo__shell--left-collapsed.prezi-demo__shell--right-collapsed {
			grid-template-columns: 1fr;
		}

		.prezi-demo__stage-frame {
			min-height: 68vh;
		}
	}

	@media (max-width: 860px) {
		.prezi-demo {
			padding: 0.9rem;
		}

		.prezi-demo__hero,
		.prezi-demo__stage-head {
			grid-template-columns: 1fr;
			flex-direction: column;
			align-items: stretch;
		}

		.prezi-demo__hero-actions {
			justify-content: flex-start;
		}
	}
</style>
