export interface AttendanceItem {
  name: string;
  present: boolean;
}

export interface AttendanceListProps {
  data: AttendanceItem[];
  onToggle?: (index: number) => void;
}

export interface AttendanceEditProps {
  initialData: AttendanceItem[];
}
