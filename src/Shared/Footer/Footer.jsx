import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='h-fit bg-black'>
        <div className='bg-no-repeat bg-center bg-cover text-white p-8'>
          <div className='flex justify-between flex-col gap-20 lg:flex-row w-3/4 mx-auto'>
            <div className=''>
              <div className='flex '>
                <img className='w-[230px] rounded-xl mb-2' src="https://i.ibb.co/fY41Rg7/cover.png" alt="" />
              </div>
              <div>
                <ul className='mt-[-30px] flex flex-col gap-2'>
                  <li className='flex gap-2 items-center'>
                    <BsTelephoneFill className='text-[#2cae74] text-2xl' />
                    <p className='text-lg'>
                      <a href='tel:+8801234567890' className='text-white hover:text-[#2cae74]'>
                      +880-123-456-7890
                      </a>
                    </p>
                  </li>
                  <li className='flex gap-2 items-center'>
                    <MdEmail className='text-[#2cae74] text-2xl' />
                    <p className='text-lg'>
                      <a href='mailto:resicraft77@gmail.com' className='text-white hover:text-[#2cae74]'>
                      TaskEase123@gmail.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className='text-4xl mt-5 mb-8 font-semibold text-[#7207ff]'>Pages</h2>
              <li>
                <Link className="text-blue-300 text-lg font-bold" to='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link className="text-blue-300 text-lg font-bold" to='/contact'>
                  contact
                </Link>
              </li>
              
              <li>
                <Link className="text-blue-300 text-lg font-bold" to='/login'>
                  Login
                </Link>
              </li>
              <li>
                <Link className="text-blue-300 text-lg font-bold" to='/register'>
                  Register
                </Link>
              </li>
            </div>
            <div>
              <h2 className='font-semibold text-4xl mt-5 mb-3 text-[#3d07ff]'>Social Links</h2>
              <p>You can find us from social links given below</p>
              <div className='flex gap-3 mt-8'>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                  <FaFacebookSquare className='text-[#1d1ddd] text-4xl' />
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                  <RiInstagramFill className='text-[#d71ddd] text-4xl' />
                </a>
                <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
                  <FaYoutube className='text-[#dd1d1d] text-4xl' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black text-[#1d1ddd] p-3 text-center'>
        <p>© TaskEase 2023 | Created by <span>Mahtab Uddin</span></p>
      </div>
    </div>
  );
};

export default Footer;
