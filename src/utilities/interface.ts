// Tempat Menampung Interface Global

export interface NavigationProps {
    open: boolean;
    toggleDrawer?: () => void;
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }