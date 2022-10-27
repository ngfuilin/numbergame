import './App.css';
import Input from './Input';
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Testpage from './Testpage';

function App() {
  return (
    <>
      <Routes>
          <Route element={<Layout />}>
            <Route index element={<Input />} />
            <Route path="Testpage" element={<Testpage />} /> 
          </Route>

      </Routes>
    
    </>
  );
}

export default App;
