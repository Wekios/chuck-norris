import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage } from "pages/LandingPage";
import { DetailsPage } from "pages/DetailsPage";
import { Header } from "features/Layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/" component={LandingPage} exact />
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
