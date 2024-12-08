import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-[70px]'>
      <div className='h-[63px] w-[187px] flex items-center justify-center'>
        <div className='h-[58px] w-[187px] flex justify-center items-center'>
          <h3 style={{fontWeight:'700'}} className='h-[32px] w-[108px] text-[24px] text-[#000000] font-montserrat'>Bandage</h3>
        </div>
      </div>
     <div className='h-[58px] w-[1155px] flex justify-between'>
      <div className='h-[25px] w-[361px] flex gap-[15px] items-center pt-[35px]'>
        <div className='h-[24px] w-[43px] flex items-center justify-center'>
          <a href="./"><h1 style={{fontWeight:'700'}} className='h-[24px] w-[43px] text-[14px] text-[#737373]'>Home</h1></a>
        </div>
        <div className='h-[25px] w-[63px] gap-[10px] flex justify-center items-center'>
            <a href="./Shop"><h1 style={{fontWeight:'500'}} className='h-[24px] w-[38px] text-[14px] text-[#252B42]'>Shop</h1></a>
            <img src="/image/down/Vector.svg" alt="DownDrop" />
        </div>
        <a href="./About"><h1 style={{fontWeight:'700'}} className='h-[24px] w-[45px] text-[14px] text-[#737373]'>About</h1></a>
        <a href=""><h1 style={{fontWeight:'700'}} className='h-[24px] w-[33px] text-[14px] text-[#737373]'>Blog</h1></a>
        <a href=""><h1 style={{fontWeight:'700'}} className='h-[24px] w-[58px] text-[14px] text-[#737373]'>Contact</h1></a>
        <a href=""><h1 style={{fontWeight:'700'}} className='h-[24px] w-[44px] text-[14px] text-[#737373]'>Pages</h1></a>
      </div>
      <div className='h-[54px] w-[324px] justify-center items-center flex'>
        <div className='h-[54px] w-[166px] flex gap-[5px] justify-center items-center'>
          <img src="/image/user/icn settings icn-xs (2).svg" alt="" />
          <a href=""><h1 style={{fontWeight:'700'}} className='h-[24px] w-[119px] font-montserrat text-[14px] text-[#23A6F0] pt-[3px]' >Login / Register</h1></a>
        </div>
        <img src="/image/search/li.svg" alt="search" />
        <img src="/image/cart/li (1).svg" alt="cart" />
        <img src="/image/wishlist/li (2).svg" alt="wish list" />
      </div>
     </div>
      
    </div>
  )
}

export default Navbar;
