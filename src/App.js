import BasicTable from './components/Table/Table'
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const familyData=useSelector(state=>state.family);
  return (
    <div className="App">
      <div>
        <h1>Family Tree</h1>
      </div>
      <BasicTable familyMember={familyData}/>
    </div>
  );
}

export default App;
