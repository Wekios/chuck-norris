import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage } from "pages/LandingPage";
import { DetailsPage } from "pages/DetailsPage";
import { Header } from "features/Layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/" component={LandingPage} exact />
      </main>
    </Router>
  );
}

export default App;
