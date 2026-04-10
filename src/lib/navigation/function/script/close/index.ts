export function close(props: { open?: boolean }, closable: boolean) {
	if (closable) {
		props.open = false;
	}
}
