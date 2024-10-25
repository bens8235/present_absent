export interface PresentAbsent {
  name: string;
  present: boolean;
}

export interface AttendanceItem {
  name: string;
  present: boolean;
}

export interface AttendanceListProps {
  data: AttendanceItem[];
  onToggle?: (index: number) => void;
}
