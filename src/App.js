import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import AccDevelop from './Manage/components/accdevelop/accDevelop';
import Info from './Manage/components/mainpage/Info';
import TotalManage from './Manage/components/totalmanage/totalManage';
import UseElec from './Manage/components/useElec/useElec';
import WrapContainer from "./WrapContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WrapContainer />} />
        <Route path="/info" element={<Info />} />
        <Route path="/useElec" element={<UseElec />} />
        <Route path="/totalManage" element={<TotalManage />} />
        <Route path="/accdevelop" element={<AccDevelop />} />
      </Routes>
    </Router>
  );
}

export default App;
