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
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className={css["header"]}>
        <img className={css["logo"]} src={logo} />

        <div className={css.left}>
          <div className={css.search}>
            <IconSearch />
            <span>Search</span>
          </div>

          <div className={css.cart}>
            <IconCart />
            <span>(1)</span>
          </div>

          <div className={cx("auth", "margin-left")}>
            <button className={css.login}>Login</button>
            <button className={css.register}>Register</button>
          </div>
        </div>
      </header>
      <nav className={cx("nav")}>
        <Link className={cx("link", "link-active")} to={"/"}>
          Home
        </Link>
        <Link className={cx("link")} to={"/"}>
          Men
        </Link>
        <Link className={cx("link")} to={"/"}>
          Woman
        </Link>
        <Link className={cx("link")} to={"/"}>
          Kid
        </Link>
        <Link className={cx("link")} to={"/"}>
          Sport
        </Link>
      </nav>
    </>
  );
}

export default Header;
