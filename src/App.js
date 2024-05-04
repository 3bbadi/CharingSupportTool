import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/signin';
import Clone from './Pages/Clone';
import SDPMigration from './Pages/SDPMigration';

function App() {
  return (
<BrowserRouter>

      <div className="App">
      </div>

  <Routes>
      <Route path="/" element={<SignIn />}>          
      </Route>
      <Route path="/clone" element={<Clone />}>          
      </Route>
      <Route path="/migration" element={<SDPMigration />}>          
      </Route>




  </Routes>
</BrowserRouter>
  );

}

export default App;


