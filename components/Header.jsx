import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className='py-3 px-5 md:px-10 lg:px-16
        '>
           <div>
            <Image src={assets.logo} alt='logo' ></Image>
            </div> 
            
        </div>
    );
};

export default Header;