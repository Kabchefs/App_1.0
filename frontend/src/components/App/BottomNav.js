import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import * as Routes from 'routes';


const BottomNav=() =>{
    return (
        <footer className="footer">
        <div id="buttonGroup"  className="btn-group selectors" role="group" aria-label="Basic example">
           <NavLink  to={Routes.HOME}  className="btn-secondary ">
              <div className="selector-holder btn  button-active">
                 <i className="material-icons">home</i>
                 <span>Home</span>
              </div>
           </NavLink>
           <NavLink to={Routes.EXPLORE}  className="btn btn-secondary">
              <div className="selector-holder  button-inactive">
                 <i className="material-icons">view_list</i>
                 <span>Feed</span>
              </div>
           </NavLink>
           <NavLink  to={Routes.PEOPLE}  className="btn btn-secondary ">
              <div className="selector-holder  button-inactive">
                 <i className="material-icons">add</i>
                 <span>People</span>
              </div>
           </NavLink>
           <NavLink  to={Routes.NOTIFICATIONS}  className="btn btn-secondary">
              <div className="selector-holder  button-inactive">
                 <i className="material-icons">inbox</i>
                 <span>Notifications</span>
              </div>
           </NavLink>
           <NavLink  to={Routes.EXPLORE} className="btn btn-secondary ">
              <div className="selector-holder button-inactive">
                 <i className="material-icons">account_box</i>
                 <span>Me</span>
              </div>
           </NavLink>
        </div>
     </footer>
    )
}
export default BottomNav;