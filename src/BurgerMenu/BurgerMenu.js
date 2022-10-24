import React from "react";
import { NavLink} from "react-router-dom";

import "./BurgerMenu.scss";

function BurgerMenu() {
    return (
        <div className={`burger-menu`}>
            <button className="burger-menu__close-btn" type="button"  />

            <div className="burger-menu__link-list">
                <NavLink exact to="/" className="burger-menu__link" >
                    Главное
                </NavLink>

                <NavLink to="/user-playlist" className="burger-menu__link" >
                    Фильмы
                </NavLink>

                <NavLink to="/signin" className="burger-menu__link" >
                    Войти
                </NavLink>
            </div>

        
        </div>
    );
}

export default BurgerMenu;
