import { BrowserRouter, Route, Routes } from "react-router-dom";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Rootlayout from "./Layots/Rootlayout";

import Todolist from "./Components/Todolist";
import CounterWithReducer from "./Components/CounterWithReducer";
import SpinnersDemo from "./Components/Spinner";
import BasicExample_card from "./Components/Card";
import Progress from "./Components/Progressbar";
import PlaceholderExample from "./Components/Placeholders";
import ResponsiveBreakpointsExample from "./Components/Table";
import Badges_demo from "./Components/Badges";
import VariantsExample from "./Components/Dropdown";
import Alert_Example from "./Components/Alerts";
// import Image_demo from "./Components/Imageslider";
import TransationExample from "./Components/Transation";
import ToDoList from "./Components/Todolist";
import Breadcrumb_demo from "./Components/Breadcrumb";
import Button_example from "./Components/Buttongroup";
import './Components/Toast'
import ToastExample from "./Components/Toast";
import Button_demo from "./Components/Button";
// import Image_Example from "./Components/Avatar";
import RBFigure from "./Components/Figurr";
import NoTransitionExample from "./Components/carousel";
// import AccordionExample from "./Components/According";
// import Accordion_Example from "./Components/According";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route index element={<Todolist />} />
          <Route path="todolist" element={<ToDoList />} />
          <Route path="counter" element={<CounterWithReducer />} />
          <Route path="spinner" element={<SpinnersDemo />} />
          <Route path="card" element={<BasicExample_card />} />
          <Route path="progress" element={<Progress />} />
          <Route path="placeholder" element={<PlaceholderExample />} />
          <Route path="table" element={<ResponsiveBreakpointsExample />} />
          <Route path="badges" element={<Badges_demo />} />
          <Route path="dropdown" element={<VariantsExample />} />
          <Route path="alert" element={<Alert_Example />} />
          {/* <Route path="slider" element={<UncontrolledExample />} /> */}
          <Route path="transation" element={<TransationExample />} />
          <Route path="toast" element={<ToastExample />} />
          <Route path="breadcumb" element={<Breadcrumb_demo />} />
          <Route path="Button-group" element={<Button_example />} />
          <Route path="Button" element={<Button_demo />} />
          {/* <Route path="Image" element={<Image_Example />} /> */}
          <Route path="carousels" element={<NoTransitionExample />} />

          <Route path="figure" element={<RBFigure />} />
          {/* <Route path="accordion" element={<Accordion_Example />} /> */}










        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
