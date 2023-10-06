import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h1>Login With</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With GitHub
                </button>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <h1>Find Us On </h1>

            </div>
        </div>
    );
};

export default RightNav;