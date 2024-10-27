export interface AttendanceItem {
  name: string;
  present: boolean;
}

export interface AttendanceListProps {
  data: AttendanceItem[];
  onToggle?: (name: string) => void;
}

export interface AttendanceEditProps {
  initialData: AttendanceItem[];
}
