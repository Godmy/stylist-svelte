import type { PeriodicElementLightInteraction } from '$stylist/science/type/struct/periodic-element-light-interaction';

export const PERIODIC_ELEMENT_LIGHT_INTERACTION: Record<string, PeriodicElementLightInteraction> = {
	H: {
		spectralSignature: 'Balmer absorption lines in the visible range and strong Lyman transitions in ultraviolet.',
		absorptionBehavior: 'Neutral hydrogen absorbs photons that match electron transitions from occupied lower energy states.',
		activationBehavior: 'Electrical discharge, plasma, high temperature, or ultraviolet radiation can excite hydrogen atoms.',
		photoresponse: 'Excited hydrogen relaxes through discrete emission lines, making it useful for plasma and stellar diagnostics.',
		diagnosticLines: ['410.2 nm H-delta', '434.0 nm H-gamma', '486.1 nm H-beta', '656.3 nm H-alpha'],
		applications: ['Astronomical spectroscopy', 'Plasma diagnostics', 'Gas discharge tubes', 'Hydrogen line calibration']
	},
	He: {
		spectralSignature: 'Narrow visible helium lines with prominent yellow and blue-violet transitions.',
		absorptionBehavior: 'Helium absorbs only at discrete transition energies and remains optically sparse in many ground-state conditions.',
		activationBehavior: 'Electric discharge efficiently excites helium without strong chemical side reactions.',
		photoresponse: 'Excited helium produces clean line spectra and metastable states useful in lasers and plasma systems.',
		diagnosticLines: ['447.1 nm He I', '501.6 nm He I', '587.6 nm He I', '667.8 nm He I'],
		applications: ['Helium-neon lasers', 'Plasma lamps', 'Cryogenic optical systems', 'Spectral calibration']
	},
	C: {
		spectralSignature: 'Carbon appears through atomic lines, molecular bands, and strong continuum behavior in solids.',
		absorptionBehavior: 'Carbon materials can absorb broadly, while atomic carbon has discrete transitions in plasma or vapor.',
		activationBehavior: 'Thermal excitation, laser ablation, combustion, or electrical plasma can activate carbon species.',
		photoresponse: 'Graphitic and organic carbon systems convert light into heat or electronic excitation across broad bands.',
		diagnosticLines: ['247.9 nm C I', '426.7 nm C II', '516.5 nm C2 Swan band'],
		applications: ['Laser-induced breakdown spectroscopy', 'Combustion diagnostics', 'Photothermal materials', 'Organic photochemistry']
	},
	O: {
		spectralSignature: 'Oxygen has strong ultraviolet absorption and visible atomic lines in excited gases.',
		absorptionBehavior: 'Molecular oxygen absorbs strongly in ultraviolet and participates in atmospheric photochemistry.',
		activationBehavior: 'UV photons, electrical discharge, and plasma can generate excited oxygen and reactive oxygen species.',
		photoresponse: 'Activated oxygen supports oxidation chemistry, ozone formation, and quenching of excited states.',
		diagnosticLines: ['557.7 nm O I', '630.0 nm O I', '636.4 nm O I', '777.4 nm O I'],
		applications: ['Atmospheric optics', 'Plasma oxidation', 'Ozone generation', 'Combustion diagnostics']
	},
	Na: {
		spectralSignature: 'Dominated by the intense sodium D doublet in the yellow region.',
		absorptionBehavior: 'Sodium vapor strongly absorbs near the D-line resonance transitions.',
		activationBehavior: 'Flame, vapor lamps, discharge tubes, and lasers can excite sodium atoms efficiently.',
		photoresponse: 'Excited sodium emits bright yellow light and shows resonant scattering at D-line wavelengths.',
		diagnosticLines: ['589.0 nm Na D2', '589.6 nm Na D1'],
		applications: ['Sodium vapor lamps', 'Flame tests', 'Atomic absorption spectroscopy', 'Laser guide stars']
	},
	Mg: {
		spectralSignature: 'Magnesium shows visible green triplet lines and strong ultraviolet transitions.',
		absorptionBehavior: 'Magnesium absorbs through neutral and ionized transitions, often visible in stellar spectra.',
		activationBehavior: 'Flame, arc discharge, and high temperature processes produce excited magnesium atoms and ions.',
		photoresponse: 'Activated magnesium can emit intense white light because hot particles radiate broadly.',
		diagnosticLines: ['516.7 nm Mg b4', '517.3 nm Mg b2', '518.4 nm Mg b1'],
		applications: ['Stellar spectroscopy', 'Pyrotechnics', 'Flame tests', 'Arc emission diagnostics']
	},
	Ca: {
		spectralSignature: 'Calcium has strong violet and red-orange lines, plus important ionized calcium features.',
		absorptionBehavior: 'Calcium absorbs strongly in atomic vapor and in ionized astrophysical environments.',
		activationBehavior: 'Flame, discharge, and stellar atmospheres excite calcium neutral and ionized states.',
		photoresponse: 'Calcium emission is useful for tracing temperature, ionization, and composition.',
		diagnosticLines: ['393.4 nm Ca II K', '396.8 nm Ca II H', '422.7 nm Ca I', '616.2 nm Ca I'],
		applications: ['Flame tests', 'Solar spectroscopy', 'Atomic absorption spectroscopy', 'Material analysis']
	},
	Fe: {
		spectralSignature: 'Dense set of iron lines across visible and ultraviolet regions.',
		absorptionBehavior: 'Iron has many closely spaced electronic transitions, producing rich absorption spectra.',
		activationBehavior: 'High temperature, arc discharge, laser ablation, or plasma creates many Fe I and Fe II lines.',
		photoresponse: 'Iron lines are strong diagnostics for composition, temperature, and metallicity.',
		diagnosticLines: ['438.4 nm Fe I', '527.0 nm Fe I', '532.8 nm Fe I', '540.5 nm Fe I'],
		applications: ['Stellar metallicity', 'LIBS analysis', 'Arc spectroscopy', 'Metallurgy diagnostics']
	},
	Hg: {
		spectralSignature: 'Mercury produces sharp violet, blue, green, and yellow spectral features.',
		absorptionBehavior: 'Mercury vapor absorbs at resonant atomic lines and can re-emit efficiently after excitation.',
		activationBehavior: 'Electrical discharge through vapor produces a bright atomic line spectrum.',
		photoresponse: 'Excited mercury emits ultraviolet and visible photons, often converted by phosphors in lamps.',
		diagnosticLines: ['404.7 nm Hg', '435.8 nm Hg', '546.1 nm Hg', '577.0 nm Hg', '579.1 nm Hg'],
		applications: ['Fluorescent lamps', 'Spectral calibration', 'UV sources', 'Atomic vapor references']
	},
	U: {
		spectralSignature: 'Uranium has complex atomic and ionic spectra with many visible and ultraviolet lines.',
		absorptionBehavior: 'Uranium compounds and ions show electronic transitions shaped by oxidation state and ligand environment.',
		activationBehavior: 'Laser excitation, plasma, and high temperature sources can activate uranium atomic lines.',
		photoresponse: 'Uranium fluorescence and absorption can help identify compounds and isotopic or chemical states.',
		diagnosticLines: ['591.5 nm U I', '682.7 nm U I', '424.4 nm U II'],
		applications: ['Nuclear material analysis', 'Laser spectroscopy', 'Remote sensing research', 'Compound identification']
	}
};
