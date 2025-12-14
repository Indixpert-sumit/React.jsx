import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link, Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div className="container py-3">
            <div className="row">

                <div className="col-md-3">

                    <Accordion defaultActiveKey="">

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Non-interactive</Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-unstyled">
                                    <li><Link to="/Todolist">Todolist</Link></li>
                                    <li><Link to="/Counter">Counter</Link></li>
                                    <li><Link to="/card">Card</Link></li>
                                    <li><Link to="/placeholder">Placeholder</Link></li>
                                    <li><Link to="/table">Table</Link></li>
                                    <li><Link to="/badges">Badges</Link></li>
                                    <li><Link to="/dropdown">Dropdown</Link></li>
                                    <li><Link to="/alert">Alert</Link></li>
                                    <li><Link to="/toast">Toast</Link></li>
                                    <li><Link to="/breadcumb">Breadcrumb</Link></li>
                                    <li><Link to="/Button-group">Overlay</Link></li>
                                    <li><Link to="/Button">Button</Link></li>
                                    <li><Link to="/figure">Figure</Link></li>
                                    <li><Link to="/listgroup">Listgroup</Link></li>
                                    <li><Link to="/pagination">Pagination</Link></li>

                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Interactive</Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-unstyled">
                                    <li><Link to="/spinner">Spinner</Link></li>
                                    <li><Link to="/progress">Progress</Link></li>
                                    <li><Link to="/transation">Transition</Link></li>
                                    <li><Link to="/carousels">carousels</Link></li>
                                  <li><Link to="/accordion">accordion</Link></li>
                                    <li><Link to="/Modals">Modals</Link></li>
                                    <li><Link to="/canvas">Navbar & canvas</Link></li>
                                    <li><Link to="/buttongroup">ButtonGroup</Link></li>
                                    <li><Link to="/Form">Form</Link></li>
                                    {/* <li><Link to="/Form2">Form2</Link></li> */}
                                    <li><Link to="/Components">Components</Link></li>

                                    <li><Link to="/yup">Form+Yup</Link></li>


                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                </div>

                <div className="col-md-9 border p-3">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}

export default RootLayout;
