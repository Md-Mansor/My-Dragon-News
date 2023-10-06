import moment from 'moment/moment';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" className='mx-auto' />
            <p className=' font-semibold text-lg'>Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd MMMM  D  YYYY')}</p>
        </div>
    );
};

export default Header;