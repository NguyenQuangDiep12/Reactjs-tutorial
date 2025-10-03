import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  OnSelectedItem: (item: string) => void;
}

// props - read only
// state - can be changed

function ListGroup({items, heading, OnSelectedItem}: Props) {
  // hooks -
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // items = []
  // Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event)
  return (
    <>
      <h1>List</h1>
      {/*items.length === 0 ? <p>No item found</p> : null*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index)
              OnSelectedItem(item)}}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
