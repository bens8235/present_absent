import { render, screen, fireEvent } from "@testing-library/react";
import AttendanceList from "@/app/components/AttendanceList";

// Mock data for testing
const mockData = [
  { name: "John Doe", present: true },
  { name: "Jane Smith", present: false },
];

// Test Suite for AttendanceList
describe("AttendanceList Component", () => {
  it("renders a list of names", () => {
    // Render the component with mock data and no toggle functionality
    render(<AttendanceList data={mockData} onToggle={undefined} />);

    // Check if the names are displayed
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("displays the correct attendance icons", () => {
    // Render the component
    render(<AttendanceList data={mockData} onToggle={undefined} />);

    // Check if the correct attendance icons are displayed
    expect(screen.getByText("✓")).toBeInTheDocument(); // Present icon
    expect(screen.getByText("✗")).toBeInTheDocument(); // Absent icon
  });

  it("calls onToggle when clicking on an attendance status", () => {
    // Mock the onToggle function
    const mockOnToggle = jest.fn();

    // Render the component with onToggle functionality
    render(<AttendanceList data={mockData} onToggle={mockOnToggle} />);

    // Simulate clicking on the first attendance status
    const firstStatus = screen.getByLabelText("Toggle attendance for John Doe");
    fireEvent.click(firstStatus);

    // Check if the onToggle function was called once
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledWith("John Doe");
  });
});
