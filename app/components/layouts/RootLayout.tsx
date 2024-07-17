import { NavLink, Outlet } from "react-router-dom";
function RootLayout() {
    return (
      <>
        <div className="navbar flex justify-center bg-base-100">
          <NavLink to='/' className="btn btn-ghost text-xl">Home</NavLink>
          <NavLink to='/schedule' className="btn btn-ghost text-xl">See All Schedule</NavLink>
        </div>
        <Outlet />
      </>
    );
  }
  
  export default RootLayout;
  