import type { SearchResultItem } from '$stylist/control/type/struct/search-results-item';
import type { SearchResultsProps } from '$stylist/control/type/struct/search-results-props';
import { SearchResultsStyleManager } from '$stylist/control/class/style-manager/search-results';

const Calendar = 'calendar';
const MapPin = 'map-pin';
const Search = 'search';
const User = 'user';

export function createSearchResultsState(props: SearchResultsProps) {
	const results = $derived(props.results ?? []);
	const query = $derived(props.query ?? '');
	const loading = $derived(props.loading ?? false);
	const className = $derived(props.class ?? '');
	const showMetadata = $derived(props.showMetadata ?? true);
	const maxResults = $derived(props.maxResults ?? 10);

	const displayedResults = $derived(results.slice(0, maxResults));

	function icon(type: SearchResultItem['type']) {
		if (type === 'user') return User;
		if (type === 'event') return Calendar;
		if (type === 'document') return MapPin;
		return Search;
	}

	const rootClass = $derived(SearchResultsStyleManager.root(className));

	return {
		get results() {
			return results;
		},
		get query() {
			return query;
		},
		get loading() {
			return loading;
		},
		get className() {
			return className;
		},
		get displayedResults() {
			return displayedResults;
		},
		get showMetadata() {
			return showMetadata;
		},
		get rootClass() {
			return rootClass;
		},
		icon,
		onResultClick: props.onResultClick
	};
}

export default createSearchResultsState;
