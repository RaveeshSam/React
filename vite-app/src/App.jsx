import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Card1" price="$ 123" />
        <Card title="Card2" price="$ 456" />
        <Card title="Card3" price="$ 789" />
      </div>
      <Footer />
    </>
  )
}

export default App;
