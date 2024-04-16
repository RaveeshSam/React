import Card from "./components/Card";
import Count from "./components/Count";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  const users = [
    { id:0, name:"James", age:35, },
    { id:1, name:"Karim", age:26, },
    { id:2, name:"Bruno", age:45, },
    { id:3, name:"Mike", age:24, },
    { id:4, name:"Bily", age:28, },
  ];

  return (
    <>
      <Navbar />
      <Count />
      <div className="cards">
        <Card title="Card1" price="$ 123" />
        <Card title="Card2" price="$ 456" />
        <Card title="Card3" price="$ 789" />
      </div>
      <User users={users} />
      <Footer />
    </>
  )
}

export default App;
