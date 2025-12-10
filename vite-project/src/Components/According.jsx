import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";
import "../App.css";

function Accordion_demo() {
  const [activeKey, setActiveKey] = useState("0");

  const items = [
    { id: "0", title: "Accordion Item #1", content: "Lorem ipsum dolor sit amet..." },
    { id: "1", title: "Accordion Item #2", content: "Lorem ipsum dolor sit amet..." }
  ];

  return (
    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
      {items.map((item) => {
        const isOpen = activeKey === item.id;

        return (
          <Accordion.Item eventKey={item.id} key={item.id}>
            <Accordion.Header>
              <div className="acc-header">
                <span>{item.title}</span>
                {isOpen ? <DashCircle /> : <PlusCircle />}
              </div>
            </Accordion.Header>

            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default Accordion_demo;
