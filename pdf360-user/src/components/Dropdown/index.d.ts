export interface Menu {
  items: MenuItem[];
  onSelect?: (key: MenuItem['key']) => void;
}

export interface MenuItem {
  key: string | number;
  label: string | React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}
