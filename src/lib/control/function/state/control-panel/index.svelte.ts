export type ControlPanelStateProps = {
  onSearch?: (query: string) => void;
};

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
