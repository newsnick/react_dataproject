import './styles/App.css'
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
