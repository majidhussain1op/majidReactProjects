import './App.css'
import ClockHeading from './component/ClockHeading';
import ClockSlogan from './component/ClockSlogan';
import CurrentTime from './component/CurrentTime';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
      <div>
        <ClockHeading/>
        <ClockSlogan/>
        <CurrentTime/>
        </div>
            </>
  )
}

export default App
