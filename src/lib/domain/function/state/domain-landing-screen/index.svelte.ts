import { DOMAIN_SCREEN_BACKLOG } from '$stylist/domain/const/value/domain-screen-backlog';
import { DOMAIN_SCREEN_BUILDER } from '$stylist/domain/const/value/domain-screen-builder';
import { DOMAIN_SCREEN_DIAGNOSTICS } from '$stylist/domain/const/value/domain-screen-diagnostics';
import { DOMAIN_SCREEN_DOMAIN } from '$stylist/domain/const/value/domain-screen-domain';
import { DOMAIN_SCREEN_LANDING } from '$stylist/domain/const/value/domain-screen-landing';
import { DOMAIN_SCREEN_WORKSPACE } from '$stylist/domain/const/value/domain-screen-workspace';

type DomainScreenStateValue =
	| typeof DOMAIN_SCREEN_LANDING
	| typeof DOMAIN_SCREEN_DOMAIN
	| typeof DOMAIN_SCREEN_WORKSPACE
	| typeof DOMAIN_SCREEN_BUILDER
	| typeof DOMAIN_SCREEN_BACKLOG
	| typeof DOMAIN_SCREEN_DIAGNOSTICS;

export function createDomainLandingScreenState(
	initialScreen: DomainScreenStateValue = DOMAIN_SCREEN_LANDING
) {
	let currentScreen = $state<DomainScreenStateValue>(initialScreen);
	let isSettingsOpen = $state(false);

	function handleDomainToggle() {
		currentScreen = DOMAIN_SCREEN_DOMAIN;
	}

	function handleWorkspaceToggle() {
		currentScreen = DOMAIN_SCREEN_WORKSPACE;
	}

	function handleLandingToggle() {
		currentScreen = DOMAIN_SCREEN_LANDING;
	}

	function handleDiagnosticsToggle() {
		currentScreen = DOMAIN_SCREEN_DIAGNOSTICS;
	}

	function handleBuilderToggle() {
		currentScreen = DOMAIN_SCREEN_BUILDER;
	}

	function openBacklogScreen() {
		currentScreen = DOMAIN_SCREEN_BACKLOG;
	}

	function handleSettingsToggle() {
		isSettingsOpen = !isSettingsOpen;
	}

	function closeSettings() {
		isSettingsOpen = false;
	}

	return {
		get currentScreen() {
			return currentScreen;
		},
		get isSettingsOpen() {
			return isSettingsOpen;
		},
		handleDomainToggle,
		handleWorkspaceToggle,
		handleLandingToggle,
		handleDiagnosticsToggle,
		handleBuilderToggle,
		openBacklogScreen,
		handleSettingsToggle,
		closeSettings
	};
}

export default createDomainLandingScreenState;
