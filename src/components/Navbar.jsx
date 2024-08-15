//firabase
import toast from "react-hot-toast";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { FaHome } from "react-icons/fa";
// redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/userslice";
import Weather from "./Weather";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
// import { useEffect, useState } from "react";
import { SiAboutdotme } from "react-icons/si";

function Navbar() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { calculator } = useSelector((state) => state.user);
 
  const logOutProfile = async () => {
    try {
      await signOut(auth);
      toast.success("See you soon");
      dispatch(logout());
    } catch (error) {
      toast.error(error.message);
    }
  };
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );

  // const handleToggle = (e) => {
  //   setTheme((prevTheme) => e);
  // };

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   document.querySelector("html").setAttribute("data-theme", theme);
  // }, [theme]);

  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto border-b-2">
      <div className="flex-1 navbar-start">
        <Link to="/" className="btn btn-ghost text-xl m-0">
          My-Store 🛒
        </Link>
      </div>
      <div className="navbar-center mt-2">
        <Weather />
      </div>
      <div className="flex-none items-center">
        
          
        <div className="mr-4 text-lg sm:flex hidden">
          {user ? user.displayName : "Guest"}
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user ? (
                <img
                  alt="User avatar"
                  src={user.photoURL}
                  className="rounded-full"
                />
              ) : (
                <img
                  alt="Default avatar"
                  src="https://via.placeholder.com/150"
                  className="rounded-full"
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 shadow"
          >
            <li>
              <button onClick={logOutProfile}>
                <RiLogoutCircleRLine />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
