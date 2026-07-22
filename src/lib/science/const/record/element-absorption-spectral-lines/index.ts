export const ELEMENT_ABSORPTION_SPECTRAL_LINES = {
	H: [
		{ wavelength: 410.2, intensity: 0.42, label: 'H-delta' },
		{ wavelength: 434.0, intensity: 0.56, label: 'H-gamma' },
		{ wavelength: 486.1, intensity: 0.76, label: 'H-beta' },
		{ wavelength: 656.3, intensity: 0.92, label: 'H-alpha' }
	],
	He: [
		{ wavelength: 447.1, intensity: 0.58, label: 'He I' },
		{ wavelength: 501.6, intensity: 0.66, label: 'He I' },
		{ wavelength: 587.6, intensity: 0.84, label: 'He I' },
		{ wavelength: 667.8, intensity: 0.48, label: 'He I' }
	],
	Li: [
		{ wavelength: 460.3, intensity: 0.38, label: 'Li' },
		{ wavelength: 610.4, intensity: 0.54, label: 'Li' },
		{ wavelength: 670.8, intensity: 0.92, label: 'Li' }
	],
	Na: [
		{ wavelength: 449.4, intensity: 0.34, label: 'Na' },
		{ wavelength: 589.0, intensity: 0.96, label: 'Na D2' },
		{ wavelength: 589.6, intensity: 0.9, label: 'Na D1' }
	],
	Mg: [
		{ wavelength: 516.7, intensity: 0.82, label: 'Mg b4' },
		{ wavelength: 517.3, intensity: 0.86, label: 'Mg b2' },
		{ wavelength: 518.4, intensity: 0.74, label: 'Mg b1' }
	],
	Ca: [
		{ wavelength: 422.7, intensity: 0.92, label: 'Ca I' },
		{ wavelength: 430.3, intensity: 0.42, label: 'Ca' },
		{ wavelength: 616.2, intensity: 0.54, label: 'Ca' },
		{ wavelength: 643.9, intensity: 0.5, label: 'Ca' }
	],
	Fe: [
		{ wavelength: 438.4, intensity: 0.58, label: 'Fe I' },
		{ wavelength: 527.0, intensity: 0.74, label: 'Fe I' },
		{ wavelength: 532.8, intensity: 0.66, label: 'Fe I' },
		{ wavelength: 540.5, intensity: 0.52, label: 'Fe I' },
		{ wavelength: 649.5, intensity: 0.4, label: 'Fe I' }
	],
	Hg: [
		{ wavelength: 404.7, intensity: 0.66, label: 'Hg' },
		{ wavelength: 435.8, intensity: 0.92, label: 'Hg' },
		{ wavelength: 546.1, intensity: 0.82, label: 'Hg' },
		{ wavelength: 577.0, intensity: 0.58, label: 'Hg' },
		{ wavelength: 579.1, intensity: 0.58, label: 'Hg' }
	]
} as const;
