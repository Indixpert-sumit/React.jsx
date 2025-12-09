import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

const employees = [
  { name: "Joseph Oden", dept: "Sales", salary: "$64,000", date: "Aug 3, 2024", status: "PENDING", empType: "Full-Time" },
  { name: "Carol Brown", dept: "Support", salary: "$82,000", date: "Aug 6, 2024", status: "NEGOTIATING", empType: "Part-Time" },
  { name: "Peggy Castello", dept: "Design", salary: "$120,000", date: "Aug 13, 2024", status: "FAILED", empType: "Full-Time" },
  { name: "Katherine Grey", dept: "Sales", salary: "$75,000", date: "Aug 19, 2024", status: "PAID", empType: "Full-Time" },
  { name: "Sandra Palace", dept: "Design", salary: "$54,000", date: "Aug 22, 2024", status: "PENDING", empType: "Contractor" },
  { name: "Nelson Metz", dept: "Sales", salary: "$28,000", date: "Aug 27, 2024", status: "OVERDUE", empType: "Part-Time" },
  { name: "Roger Ryder", dept: "Sales", salary: "$93,000", date: "Aug 31, 2024", status: "PAID", empType: "Contractor" },
  { name: "Evan Walter", dept: "Support", salary: "$55,000", date: "Sep 5, 2024", status: "NEGOTIATING", empType: "Full-Time" },
  { name: "Julien Saint", dept: "Design", salary: "$87,000", date: "Sep 11, 2024", status: "OVERDUE", empType: "Full-Time" },
];

function getBadgeVariant(status) {
  switch (status) {
    case "PENDING": return "primary";
    case "NEGOTIATING": return "warning";
    case "FAILED": return "danger";
    case "PAID": return "success";
    case "OVERDUE": return "info";
    default: return "secondary";
    
  }
  
}

export default function EmployeeTable() {
  return (
    <div className="p-3">
      <Table responsive>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Payment Date</th>
            <th>Payment Status</th>
            <th>Employment Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr key={idx}>
              <td>{emp.name}</td>
              <td>{emp.dept}</td>
              <td>{emp.salary}</td>
              <td>{emp.date}</td>
              <td>
                <Badge bg={getBadgeVariant(emp.status)}>
                  {emp.status}
                </Badge>
              </td>
              <td>{emp.empType}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
