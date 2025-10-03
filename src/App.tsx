import Message from "./Message"
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  
  const handleSelectedItem = (item: string) => {
    console.log(item);
  }

  return <div>
    {/* <Message /> */}
    <ListGroup items={items} heading ="cities" OnSelectedItem={handleSelectedItem} />
  </div>
}
export default App;