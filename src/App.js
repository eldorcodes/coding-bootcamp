import { Apply } from "./components/Apply";
import { BrowserRouter as Router,
  Route, Switch } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { ApplyForm } from "./components/ApplyForm";
import { Header } from "./components/Header";
import { Options } from "./components/Options";
import { Group } from "./components/Group";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Route exact path="/" component={Apply} />
        <Route exact path="/apply" component={ApplyForm} />
        <Route exact path="/options" component={Options} />
        <Route exact path="/group" component={Group} />
      </Router>
    </Container>
  )
}

export default App;
