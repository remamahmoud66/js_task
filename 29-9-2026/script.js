let employees = [];

// Employee Constructor Function
function Employee(name, email, department) {


this.name = name;
this.email = email;
this.department = department;

this.salary = Math.floor(Math.random() * 901) + 100;


}

// Get data from Local Storage
let data = localStorage.getItem("employees");

if (data) {
employees = JSON.parse(data);
}

// Add Employee
document.getElementById("employeeForm").addEventListener("submit", function(event) {

event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let department = document.getElementById("department").value;

let employee = new Employee(name, email, department);

employees.push(employee);

localStorage.setItem("employees", JSON.stringify(employees));

displayEmployees();

document.getElementById("employeeForm").reset();


});

// Display Employees
function displayEmployees() {


let table = document.getElementById("employeeTable");

table.innerHTML = "";

let total = 0;

for (let i = 0; i < employees.length; i++) {

    table.innerHTML += 
        <tr>
            <td>${employees[i].name}</td>
            <td>${employees[i].email}</td>
            <td>${employees[i].department}</td>
            <td>${employees[i].salary}</td>
        </tr>;

    total = total + employees[i].salary;
}

document.getElementById("totalSalary").innerText = total;

}

// Show employees when page loads
displayEmployees();
