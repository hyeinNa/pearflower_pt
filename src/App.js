import { BrowserRouter,Routes,Route,} from 'react-router-dom';
import Main from './components/main';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>   
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
