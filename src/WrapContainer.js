import WrapPage from "./Pages/WrapPage";
import Background from "./Background/Background";
import PageGuide from "./PageGuide/PageGuide";
import './WrapContainer.css';
import Header from "./Header/Header";

function WrapContainer() { 
  return (
    <div id="wrap-container">
      <Header />
      <Background />
      <WrapPage />
      <PageGuide />
    </div>
  );
}

export default WrapContainer;
