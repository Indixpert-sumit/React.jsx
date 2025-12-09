import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaFolder } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";



function Breadcrumb_demo() {
  return (
    <Breadcrumb>
  <Breadcrumb.Item><FaFolder /><span>Assignment</span></Breadcrumb.Item>
  <Breadcrumb.Item><FaFolder /><span>Project</span></Breadcrumb.Item>
  <Breadcrumb.Item><FcTodoList /><span>TodoList</span></Breadcrumb.Item>
</Breadcrumb>

  );
}

export default Breadcrumb_demo;