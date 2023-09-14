
export const mockEmployees = [  
  {
    id: 0,
    name: "นายเอ",
    lastname: 'นามสมมุติ',
    position: "Manager"
  },
  {
    id: 1,
    name: "นายบี",
    lastname: "นามสมมุติ",
    position: "Engineer"
  },
  {
    id: 2,
    name: "นายซี",
    lastname: "นามสมมุติ",
    position: "Designer"
  },
  {
    id: 3,
    name: "นายดี",
    lastname: "นามสมมุติ",
    position: "ยาม"
  },
]

const Home = () => {
  return (
    <div>
      <h1>Employee List</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            
          </tr>
        </thead>
        <tbody>
          {mockEmployees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;


