// import CSS
import "./Menu.css";

// images
import Logo from "../Images/logo.png";
import Home from "../Images/menu/home.svg";
import AutoBud from "../Images/menu/finance-badge.svg";
import Finance from "../Images/menu/finance-file.svg";
import FinanceChart from "../Images/menu/finance-chart.svg";
import Faq from "../Images/menu/paper-faq.svg";

// router
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="menu">
      <div className="logo">
        <img src={Logo} alt="" className="logo__img" />
      </div>

      <div className="navigate">
        <ul className="list">
          <li className="list__item">
            <NavLink to={"/"} className="list__link">
              <img src={Home} alt="" className="list__img" />
              Список закрытых стоек
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink to={"/"} className="list__link">
              <img src={AutoBud} alt="" className="list__img" />
              Автоматический расчет
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink to={"/"} className="list__link">
              <img src={Finance} alt="" className="list__img" />
              Расчет стоимости
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink to={"/"} className="list__link">
              <img src={FinanceChart} alt="" className="list__img" />
              Расчет услуг
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink to={"/"} className="list__link">
              <img src={Faq} alt="" className="list__img" />
              Типовые ответы
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
