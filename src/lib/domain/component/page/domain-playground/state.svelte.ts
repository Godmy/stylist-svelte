import { DOMAIN_SCREEN } from '$stylist/domain/const/value/domain-screen';
import type { TypeDomainScreen } from '$stylist/domain/type/alias/domain-screen';

export function createDomainPlaygroundState(
	initialScreen: TypeDomainScreen = DOMAIN_SCREEN.LANDING
) {
	let currentScreen = $state<TypeDomainScreen>(initialScreen);
	let isSettingsOpen = $state(false);

	function handleDomainToggle() {
		currentScreen = DOMAIN_SCREEN.DOMAIN;
	}

	function handleLandingToggle() {
		currentScreen = DOMAIN_SCREEN.LANDING;
	}

	function handleDiagnosticsToggle() {
		currentScreen = DOMAIN_SCREEN.DIAGNOSTICS;
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
		handleSettingsToggle,
		closeSettings
	};
}

export default createDomainPlaygroundState;
