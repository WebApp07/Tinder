import "./App.css";
import Header from "./Header";
import SwipseButtons from "./SwipseButtons";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      {/* Header   */}
      <Header />
      {/* TinderCards   */}
      <TinderCards />
      {/* SwipeButtons   */}
      <SwipseButtons />
    </div>
  );
}

export default App;
