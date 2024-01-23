import { Outlet,useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import GoToTop from "../Shared/GoToTop/GoToTop";



const Main = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('forget') ;
    return (
        <>
        
            <div className="w-full mx-auto">
                <div className="w-11/12 mx-auto">
                    <nav>
                    { noHeaderFooter || <Navbar></Navbar>}
                    </nav>
                    <div className="w-4/5 mx-auto">
                        <Outlet />
                    </div>
                </div>
                <GoToTop></GoToTop>
            </div>
            { noHeaderFooter || <Footer></Footer>}
        </>
    );
};




export default Main;