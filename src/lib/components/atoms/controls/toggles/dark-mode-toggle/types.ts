export interface IDarkModeToggleProps {
  darkMode?: boolean;
  disabled?: boolean;
  onToggle?: (params: { darkMode: boolean }) => void;
}