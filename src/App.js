/* import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employee from './components/Employee/Employee'

function App() {
  return (
    <div>
      <Employee
        EmpID={'1'}
        EmpName={'Ralf Higgs'}
        EmpSalary={'5000'}
        Department={'IT'}
        EmpCity={'New York'}
        EmpCountry={'USA'}
      />
    </div>
  )
}

export default App
 */

import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employee from './components/Employee/Employee'
import LoginForm from './components/LoginForm/LoginForm'
import Product from './components/Product/Product'

function App() {
  const employeeData = [
    {
      EmplD: 1,
      EmpName: 'John Doe',
      EmpSalary: 5000,
      Department: 'IT',
      EmpCity: 'New York',
      EmpCountry: 'USA',
    },
    {
      EmplD: 2,
      EmpName: 'Max Haywell',
      EmpSalary: 3400,
      Department: 'Sales',
      EmpCity: 'Denver',
      EmpCountry: 'USA',
    },

    {
      EmplD: 3,
      EmpName: 'Dave Higgs',
      EmpSalary: 8000,
      Department: 'Admin',
      EmpCity: 'Dallss',
      EmpCountry: 'USA',
    },

    {
      EmplD: 4,
      EmpName: 'Judy Keltner',
      EmpSalary: 4000,
      Department: 'IT',
      EmpCity: 'Tampa',
      EmpCountry: 'USA',
    },
  ]
  return (
    <div>
      <Employee employees={employeeData} />
      <LoginForm />
      <div className="products">
        {' '}
        <Product />
      </div>
    </div>
  )
}

export default App
