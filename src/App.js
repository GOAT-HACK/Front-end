import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Info from './Manage/components/mainpage/Info';
import UseElec from './Manage/components/useElec/useElec';
import WrapContainer from "./WrapContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WrapContainer />} />
        <Route path="info" element={<Info />} />
        <Route path="useElec" element={<UseElec />} />
      </Routes>
    </Router>
  );
}

export default App;
