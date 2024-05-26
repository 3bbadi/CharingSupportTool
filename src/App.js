import './App.css';
import { BrowserRouter, Routes, Route ,HashRouter } from 'react-router-dom';
import SignIn from './Pages/signin';
import Clone from './Pages/Clone';
import SDPMigration from './Pages/SDPMigration';
import Test from './Pages/testPage';
import { useHistory } from 'react-router-dom';


function App() {
  return (
<HashRouter >

      <div className="App">
      </div>

  <Routes>
      <Route path="/" element={<SignIn />}>          
      </Route>
      <Route path="/clone" element={<Clone />}>          
      </Route>
      <Route path="/migration" element={<SDPMigration />}>          
      </Route>
      <Route path="/test" element={<Test/>}>          
      </Route>

  </Routes>
</HashRouter>
  );

}

export default App;


