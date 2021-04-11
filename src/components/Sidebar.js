import React from 'react'
import '../App.css'
import { Sidebardata } from './Sidebardata';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {Sidebardata.map((val, key) => {
                    return (
                        <li key={key}
                            className="row"
                            id={window.location.pathname == val.Link ? "active" : ""}
                            onClick={() => { window.location.pathname = val.Link }}>
                            <Router>
                                <Route path={val.Link}> {/*The path where we go to */}
                                    {val.Component}
                                </Route>
                            </Router>
                            <div id="icon">{val.Icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
