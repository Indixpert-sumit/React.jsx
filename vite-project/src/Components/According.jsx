import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { AccordionButton, AccordionItem, AccordionBody } from "react-bootstrap";
import { PlusCircle, DashCircle, PlusSquare, DashSquare } from "react-bootstrap-icons";

const AccordionDemo = () => {
  const [activeKey, setActiveKey] = useState("1");

  const accordionItems = [
    { id: "1", title: "What is the cost of an online course", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, quod? Placeat repudiandae cumque, esse nulla ipsa repellendus ipsam rerum odit." },
    { id: "2", title: "Do I need to visit any physical location", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, quod? Placeat repudiandae cumque, esse nulla ipsa repellendus ipsam rerum odit.t" },
    { id: "3", title: "What are the technologies requirements", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, quod? Placeat repudiandae cumque, esse nulla ipsa repellendus ipsam rerum odit." },
    { id: "4", title: "How can I ask questions or clear doubts", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, quod? Placeat repudiandae cumque, esse nulla ipsa repellendus ipsam rerum odit." }
  ];

  return (
    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
      {accordionItems.map((item) => {
        const isOpen = activeKey === item.id;

        return (
          <AccordionItem key={item.id} eventKey={item.id}>
            <AccordionButton className="d-flex justify-content-between" >
              {item.title }
              {isOpen ? <DashCircle  style={{marginLeft:'610px'}}/> : <PlusCircle  style={{marginLeft:'610px'}}/>}
            </AccordionButton>
            <AccordionBody>{item.content}</AccordionBody>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AccordionDemo;
