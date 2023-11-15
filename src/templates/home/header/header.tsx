import css from "./header.module.css";
// ES5: const clsx = require("classnames/bind")
import clsx from "classnames/bind";
const cx = clsx.bind(css);
// --------------------------------

// relative: tương đối.
// import logo from "../../../assets/icons/logo.svg";

// absolute: tuyệt đối.
import logo from "src/assets/icons/logo.svg";
// import IconCart from "src/assets/icons/icon-cart";
// import IconSearch from "src/assets/icons/icon-search";

import { IconCart, IconSearch } from "src/assets/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from "src/redux/hooks";
import { removeLocal } from "src/utils";
import { ACCESS_TOKEN } from "src/constants";
import { useDispatch } from "react-redux";
import { loginSuccess, setLogin } from "src/redux/userSlice";

function Show({ when, fallback, children }: any) {
  // if (when) {
  //   return children;
  // }

  // return fallback;

  return when ? children : fallback;
}

function Header() {
  const { cart } = useAppSelector((rootReducer) => rootReducer.cartsReducer);
  const { login } = useAppSelector((rootReducer) => rootReducer.userReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <header className={cx("header", "flex")}>
        <img className={cx("logo")} src={logo} />

        <div className={css.left}>
          <div className={css.search}>
            <IconSearch />
            <span>Search</span>
          </div>

          <div className={css.cart}>
            <IconCart />
            <span>({cart.length})</span>
          </div>

          <div className={cx("auth", "margin-left")}>
            <Show
              when={login.email}
              fallback={
                <Link to="login" className={css.login}>
                  Login
                </Link>
              }
            >
              <Link to="profile">{login.email}</Link>
            </Show>

            <Show
              when={!login.email}
              fallback={
                <button
                  onClick={() => {
                    // 1. Chuyen ve trang login
                    navigate("login");
                    // 2. Xoa localstorage
                    removeLocal(ACCESS_TOKEN);
                    // 3. Remove tren redux;
                    dispatch(
                      setLogin({
                        email: "",
                      }),
                    );
                  }}
                >
                  Logout
                </button>
              }
            >
              <Link to="register" className={css.register}>
                Register
              </Link>
            </Show>
          </div>
        </div>
      </header>
      <nav className={cx("nav", "flex")}>
        <NavLink
          style={(rest) => {
            return {
              color: rest.isActive ? "red" : "black",
            };
          }}
          className={cx("link", "link-active")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink className={cx("link")} to={"/"}>
          Men
        </NavLink>
        <NavLink className={cx("link")} to={"/"}>
          Woman
        </NavLink>
        <NavLink className={cx("link")} to={"/"}>
          Kid
        </NavLink>
        <NavLink className={cx("link")} to={"/"}>
          Sport
        </NavLink>
      </nav>
    </>
  );
}

export default Header;
