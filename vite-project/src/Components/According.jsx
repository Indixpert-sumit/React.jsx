import RBAccordion from 'react-bootstrap/Accordion';

function AccordionExample() {
  return (
    <RBAccordion defaultActiveKey="0">
      <RBAccordion.Item eventKey="0">
        <RBAccordion.Header>Accordion Item 1</RBAccordion.Header>
        <RBAccordion.Body>
         Hello Indixpert.
        </RBAccordion.Body>
      </RBAccordion.Item>

      <RBAccordion.Item eventKey="1">
        <RBAccordion.Header>Accordion Item 2</RBAccordion.Header>
        <RBAccordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </RBAccordion.Body>
      </RBAccordion.Item>
    </RBAccordion>
  );
}

export default AccordionExample;
