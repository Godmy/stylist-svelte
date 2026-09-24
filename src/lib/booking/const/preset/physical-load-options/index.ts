export const PHYSICAL_LOAD_OPTIONS = [
	{
		value: 'low',
		label: 'Низкая нагрузка',
		description: 'прогулки без значительных подъёмов'
	},
	{
		value: 'medium',
		label: 'Средняя нагрузка',
		description: 'длительная ходьба, лестницы, небольшие подъёмы'
	},
	{
		value: 'high',
		label: 'Высокая нагрузка',
		description: 'крутые подъёмы, много ступеней, трекинг'
	}
] as const;
