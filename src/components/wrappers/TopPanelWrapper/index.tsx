import { ReactNode } from 'react';
import './style.css';

interface TopPanelWrapperProps {
  isCollapse: boolean;
  setIsCollapse?: (value: boolean) => void;
  children: ReactNode;
  className?: string;
  withoutCollapseButton?: boolean;
}

export default function TopPanelWrapper({ children }: TopPanelWrapperProps) {
  return <></>;
}
