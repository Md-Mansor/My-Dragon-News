import Header from "../Header/Header";
import BreakingNews from "./BreakingNews";
import LeftNav from "./LeftNav/LeftNav";
import Navbar from "./Navbar/Navbar";
import RightNav from "./RightNav/RightNav";

const Home = () => {
    return (
        <div className="p-5">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>


            <div className="grid  md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftNav></LeftNav>
                </div>
                <div className=" sm:col-span-2  border">
                    News
                </div>
                <div className="border">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;