import React,{useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose,AiFillTags,AiFillStar} from 'react-icons/ai'
import {FaShoppingCart,FaWallet,FaUserFriends} from 'react-icons/fa'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite,MdOutlineHelpOutline} from 'react-icons/md'
function Navbar() {
    
    const [open, setOpen] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center overflow-hidden'>
            <div className='cursor-pointer'>
           < AiOutlineMenu size={30} onClick={()=>setOpen(!open)}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Tasty<span className='font-bold'>Foods</span></h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        {/* Searchbar */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent p-2 focus:outline-none' type="text" placeholder='Search items' />
        </div>
        {/* Cart */}
        <div>
            <button className='bg-black text-white hidden md:flex justify-between items-center gap-2 py-2 rounded-full'>
                <FaShoppingCart size={20}/>Cart
            </button>
        </div>
        {/* Mobile Menu */}
       { open ? <div className='bg-black/70 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
           {/* Menu  */}
           <div className={open ? 'fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[250px] h-screen bg-white z-10 duration-300' }>
            <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>setOpen(!open)}/>
            <h2 className='text-2xl p-4'>Tasty<span className='font-bold'>Foods</span></h2>
            <nav>
                <ul className='flex flex-col p-5 gap-y-1 text-gray-600'>
                    <li className='text-xl py-4 flex items-center gap-5 cursor-pointer'><MdFavorite size={25}/>Favorites</li>
                    <li className='text-xl py-4 flex items-center gap-5 cursor-pointer'><TbTruckDelivery size={25}/>Orders</li>
                    <li className='text-xl py-4 flex items-center gap-5 cursor-pointer'><FaWallet size={25}/>Wallet</li>
                    <li className='text-xl py-4 flex items-center gap-5 cursor-pointer'><MdOutlineHelpOutline size={25}/>Help</li>
                    <li className='text-xl py-4 flex items-center gap-5 cursor-pointer'><AiFillTags size={25}/>Promotions</li>
                    <li className='text-xl py-4 flex items-center gap-5 cursor-pointer'><AiFillStar size={25}/>Best One</li>
                    <li className='text-xl py-4 flex items-center gap-5 cursor-pointer'><FaUserFriends size={25}/>Invite Friends</li>
                </ul>
            </nav>
           </div>
    </div>
  )
}

export default Navbar