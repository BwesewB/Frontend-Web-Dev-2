import Greeting from "./components/Greeting"
import Layout from "./components/Layout";

function App() {

  const person = {
    name:"smith ",
    occupation:"truc fucker"
  }


  return (
    <Layout>
      <div class="app">
        Hello, React!
        <Greeting person={person}/>
      </div>
    </Layout>

  );
}

export default App;
