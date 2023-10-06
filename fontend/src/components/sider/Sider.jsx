import { Link } from "react-router-dom";
import "./sider.css";

const Sider = ({serverSuccess, pf, adminData}) => {


    const logout = () => {
        localStorage.clear();
        window.location.replace("/admin");
        serverSuccess("logout Successful");
    }

    

    return (
        <div id="adminNav" className="side-content">
            <div className="adminLogo">
                <img src={`${pf}img/bg/oilpalm.jpg`} alt="adminLogo" />
            </div>

            <h2 className="sideLabel">{adminData.admin.username}</h2>

            <nav className="sideNav">
                <Link to="/admin">Home</Link>
                <Link to="/admin/product">Products</Link>
                <Link to="/admin/OrderList">Order List</Link>
                <Link to="/admin/adminList">Admin List</Link>
                <Link to="/admin/createAdmin">Create Admin</Link>
                <button  onClick={ logout }>Logout</button>
            </nav>
        </div>
    )
}

export default Sider;   