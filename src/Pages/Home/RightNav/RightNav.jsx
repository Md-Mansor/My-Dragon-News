import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h1>Login With</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    GitHub
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h1>Find Us On </h1>
                <a className='flex p-4 items-center text-lg border rounded-t-xl' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>FaceBook</span>
                </a>
                <a className='flex p-4 items-center text-lg border-x ' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='flex p-4 items-center text-lg border rounded-b-xl ' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6 bg-slate-300'>
                <h1>Q Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default RightNav;