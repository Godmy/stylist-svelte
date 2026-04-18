import type { ControlPanelStateProps } from '$stylist/control/type/alias/control-panel-state-props';

export function createControlPanelState(props: ControlPanelStateProps) {
  function handleSearch(query: string) {
    props.onSearch?.(query);
  }

  function handleClear() {
    props.onSearch?.('');
  }

  return {
    handleSearch,
    handleClear
  };
}

export default createControlPanelState;
