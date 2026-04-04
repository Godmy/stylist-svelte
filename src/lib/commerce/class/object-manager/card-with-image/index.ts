export class ObjectManagerCardWithImage {
	static getRestProps(props: Record<string, unknown>): Record<string, unknown> {
		const { class: _class, ...rest } = props;
		return rest;
	}
}
