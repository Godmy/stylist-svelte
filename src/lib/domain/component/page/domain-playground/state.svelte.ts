import { DOMAIN_SCREEN } from '$stylist/domain/const/value/domain-screen';
import type { TypeDomainScreen } from '$stylist/domain/type/alias/domain-screen';

export function createDomainPlaygroundState(
	initialScreen: TypeDomainScreen = DOMAIN_SCREEN.LANDING
) {
	let currentScreen = $state<TypeDomainScreen>(initialScreen);
	let isSettingsOpen = $state(false);
	let isAiOpen = $state(false);

	function handleDomainToggle() {
		currentScreen = DOMAIN_SCREEN.DOMAIN;
	}

	function handleWorkspaceToggle() {
		currentScreen = DOMAIN_SCREEN.WORKSPACE;
	}

	function handleLandingToggle() {
		currentScreen = DOMAIN_SCREEN.LANDING;
	}

	function handleDiagnosticsToggle() {
		currentScreen = DOMAIN_SCREEN.DIAGNOSTICS;
	}

	function handleDashboardToggle() {
		currentScreen = DOMAIN_SCREEN.DASHBOARD;
	}

	function handleBuilderToggle() {
		currentScreen = DOMAIN_SCREEN.BUILDER;
	}

	function openBacklogScreen() {
		currentScreen = DOMAIN_SCREEN.BACKLOG;
	}

	function handleSettingsToggle() {
		isSettingsOpen = !isSettingsOpen;
	}

	function closeSettings() {
		isSettingsOpen = false;
	}

	function handleAiToggle() {
		isAiOpen = !isAiOpen;
	}

	function closeAi() {
		isAiOpen = false;
	}

	return {
		get currentScreen() {
			return currentScreen;
		},
		get isSettingsOpen() {
			return isSettingsOpen;
		},
		get isAiOpen() {
			return isAiOpen;
		},
		handleDomainToggle,
		handleWorkspaceToggle,
		handleLandingToggle,
		handleDiagnosticsToggle,
		handleDashboardToggle,
		handleBuilderToggle,
		openBacklogScreen,
		handleSettingsToggle,
		closeSettings,
		handleAiToggle,
		closeAi
	};
}

export default createDomainPlaygroundState;
