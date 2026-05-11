import { DOMAIN_SCREEN_BACKLOG } from '$stylist/domain/const/value/domain-screen-backlog';
import { DOMAIN_SCREEN_DIAGNOSTICS } from '$stylist/domain/const/value/domain-screen-diagnostics';
import { DOMAIN_SCREEN_DOMAIN } from '$stylist/domain/const/value/domain-screen-domain';
import { DOMAIN_SCREEN_LANDING } from '$stylist/domain/const/value/domain-screen-landing';
import type { TypeDomainScreen } from '$stylist/domain/type/alias/domain-screen';

export function createDomainLandingScreenState() {
	let currentScreen = $state<TypeDomainScreen>(DOMAIN_SCREEN_LANDING);
	let isSettingsOpen = $state(false);

	function handleDomainToggle() {
		currentScreen = DOMAIN_SCREEN_DOMAIN;
	}

	function handleLandingToggle() {
		currentScreen = DOMAIN_SCREEN_LANDING;
	}

	function handleDiagnosticsToggle() {
		currentScreen = DOMAIN_SCREEN_DIAGNOSTICS;
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
		handleLandingToggle,
		handleDiagnosticsToggle,
		openBacklogScreen,
		handleSettingsToggle,
		closeSettings
	};
}
