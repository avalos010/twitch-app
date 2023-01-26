import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();

  // return (
  //   <nav className="navbar navbar-expand navbar-light bg-light">
  //     <div className="container-fluid">
  //       <div className="collapse navbar-collapse" id="navbarNav">
  //         <ul className="navbar-nav">
  //           <li className="nav-item">
  //             <Link
  //               to="/"
  //               className={pathname == "/" ? "nav-link active" : "nav-link"}
  //               aria-current="page"
  //             >
  //               Home
  //             </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link
  //               to="/channels"
  //               className={
  //                 pathname === "/channels" ? "nav-link active" : "nav-link"
  //               }
  //               aria-current="page"
  //             >
  //               Channels
  //             </Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );

  const links = [
    ["Categories", "/"],
    ["Channels", "/channels"],
  ];

  console.log(pathname);

  return (
    <nav className="flex justify-start space-x-2 p-3 bg-opacity-80 bg-gray-700 mb-3">
      {React.Children.toArray(
        links.map((item) => {
          const [name, link] = item;
          return (
            <Link
              className={`px-2 rounded-lg text-white ${
                pathname === link ? "text-black" : ""
              }`}
              to={link}
            >
              {name}
            </Link>
          );
        })
      )}
    </nav>
  );
}
export default Nav;
