
import { CardTop } from "./components/cardTop/CardTop";
import NavBar from "./components/uiComp/navBar/NavBar";
import ReviewCards from "./components/uiComp/reviewsCards/ReviewsCards";

function App() {
  return (
    <div>
      <NavBar />
      <CardTop/>
      <ReviewCards/>
    </div>
  );
}

export default App;
