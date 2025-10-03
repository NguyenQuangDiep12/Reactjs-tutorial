import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] =  useState(false);

  return (
    <div>
      {/* <Message /> */}
      {/* <ListGroup items={items} heading ="cities" OnSelectedItem={handleSelectedItem} /> */}
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Buttons color='primary' children="Button" onClick={() => {setAlertVisibility(true)}}/>
    </div>
  );
}
export default App;
