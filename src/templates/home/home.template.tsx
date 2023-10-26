import { PropsWithChildren, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function HomeTemplate(props: PropsWithChildren) {
  return (
    <div>
      <header
        style={{
          height: 50,
          backgroundColor: "green",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </header>
      <Suspense fallback={<p>"Loading...."</p>}>
        <Outlet />
      </Suspense>
      {/* props.children */}

      <footer
        style={{
          height: 50,
          backgroundColor: "black",
          color: "white",
        }}
      >
        footer
      </footer>
    </div>
  );
}

export default HomeTemplate;
