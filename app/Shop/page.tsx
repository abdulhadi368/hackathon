import React from 'react'

const Shop = () => {
  return (
    <div>

            {/* header */}
      <div className="h-[58px] w-full bg-[#23856D] hidden md:block">
       <div className="h-[46px] w-full pt-[9px] pl-[2px] flex justify-between">
         <div className="h-[46px] w-[415px] gap-[10px] flex">
          <div className="h-[44px] w-[145px] flex gap-[10px] justify-center items-center">
            <div className="h-[16px] w-[16px]">
              <img src="/image/phone/icn settings icn-xs.svg" alt="Phone" />
            </div>
               <h6 style={{ fontWeight: '400' }} className="h-[24px] w-[104px] text-[14px] text-[#FFFFFF] font-montserrat">(225) 555-0118</h6>
            </div>
          <div className="h-[44px] w-[260px] gap-[10px] flex justify-center items-center">
            <div className="h-[16px] w-[16px]">
              <img src="/image/message/icn settings icn-xs (1).svg" alt="Message"/>
            </div>
            <h6 style={{ fontWeight: '400' }} className="h-[24px] w-[219px] text-[14px] text-[#FAFAFA] font-montserrat">michelle.rivera@example.com</h6>
          </div>
        </div>
        <div className="h-[44px] w-[332px] flex justify-center items-center">
          <h6 style={{ fontWeight: '700' }} className="h-[24px] w-[312px] text-[14px] text-[#FAFAFA] font-montserrat">Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className="h-[46px] w-[233px] gap-[10px] flex items-center justify-center">
            <h6 style={{ fontWeight: '700' }} className="h-[24px] w-[83px] font-montserrat text-[14px] text-[#FAFAFA]">Follow Us :</h6>
          <div className="h-[26px] w-[120px] flex gap-[5px]">
            <img className="h-[26px] w-[26px]" src="/image/insta/a.svg" alt="insta"/>
            <img className="h-[26px] w-[26px]" src="/image/youtube/a (1).svg" alt="yt"/>
            <img className="h-[26px] w-[26px]" src="/image/facebook/a (2).svg" alt="fb"/>
            <img className="h-[26px] w-[26px]" src="/image/twitter/a (3).svg" alt="twit"/>
          </div>
         </div>
      </div>
      </div>

      {/* navbar */}

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

          <div className='h-[92px] w-[1440px] flex justify-center items-center'>
            <div className='h-[44px] w-[1049px] gap-[30px] flex'>
                <div className='h-[32px] w-[510px]'>
                    <h3 style={{fontWeight:'700'}} className='h-[32px] w-[63px] font-montserrat text-[24px] text-[#252B42]'>Shop</h3>
                </div>
                <div className='h-[44px] w-[509px] flex gap-[5px] justify-center items-center'>
                    <div className='h-[44px] w-[119px] gap-[15px] flex items-center'>
                        <a href="./"><h6 style={{fontWeight:700}} className='h-[24px] w-[43px] text-[14px] text-[#252B42]'>Home</h6></a>
                        <img className='pb-[2px]' src="/image/Arow/icn arrow-right icn-xs.svg" alt="Right Arrow" />
                        <a href="./Shop"><h6 style={{fontWeight:'700'}} className='h-[24px] w-[37px] font-montserrat text-[14px] text-[#BDBDBD]'>Shop</h6></a>
                    </div>
                </div>
            </div>
          </div>

          <div className='h-[271px] w-[1440px] flex justify-center items-center bg-[#FAFAFA]'>
            <div className='h-[271px] w-[1088px]'>
                <div className='h-[223px] w-[1088px] flex gap-[15px]'>
                    <img src="/image/girl/card-item.svg" alt="Card" />
                    <img src="/image/girl/col-md-4.svg" alt="Card" />
                    <img src="/image/girl/card-item (1).svg" alt="Card" />
                    <img src="/image/girl/col-md-4 (1).svg" alt="Card" />
                    <img src="/image/girl/col-md-4 (2).svg" alt="Card" />
                </div>
            </div>
          </div>

          <div className='h-[98px] w-[1440px] bg-[#FFFFFF] flex justify-center items-center'>
            <div className='h-[98px] w-[1050px] flex justify-center items-center gap-[80px]'>
               <div className='h-[50px] w-[1049px] flex justify-between items-center'>
                   <div className='h-[24px] w-[168px]'>
                     <h6 style={{fontWeight:'700'}} className='h-[24px] w-[166px] text-[14px] text-[#737373]'>Showing all 12 results</h6>
                   </div>
                   <div className='h-[46px] w-[177px] gap-[15px] flex items-center'>
                    <h6 style={{fontWeight:'700'}} className='h-[24px] w-[53px] font-montserrat text-[14px] text-[#737373]'>Views:</h6>
                    <img src="/image/box/Frame 31.svg" alt="Box" />
                   </div>
                   <div className='h-[50px] w-[252px] gap-[15px] flex'>
                     <div className='h-[50px] w-[141px] border-[1px] border-[#DDDDDD] bg-[#F9F9F9] rounded-[5px] flex items-center'>
                       <h6 style={{fontWeight:'400'}} className='h-[28px] w-[84px] font-montserrat text-[14px] text-[#737373] pt-[4px] pl-[5px]'>Popularity</h6>
                       <img className='pt-[2px]' src="/image/Arow/Vector (1).svg" alt="arrow" />
                     </div>
                     <div className='h-[50px] w-[94px] rounded-[5px] flex justify-center items-center bg-[#23A6F0]'>
                        <h6 style={{fontWeight:'700'}} className='h-[24px] w-[40px] font-montserrat text-[14px] text-[#FFFFFF]'>Filter</h6>
                     </div>
                   </div>
               </div> 
            </div>
          </div>

          <div className='h-[175px] w-[1440px] bg-[#FAFAFA] flex justify-center items-center'>
            <div className='h-[175px] w-[1050px]'>
                <div className='h-[175px] w-[1054px] gap-[30px] flex items-center'>
                    <img src="/image/logo/col-md-2.svg" alt="logo" />
                    <img src="/image/logo/col-md-2 (1).svg" alt="logo" />
                    <img src="/image/logo/col-md-2 (2).svg" alt="logo" />
                    <img src="/image/logo/col-md-2 (3).svg" alt="logo" />
                    <img src="/image/logo/col-md-2 (4).svg" alt="logo" />
                    <img src="/image/logo/col-md-2 (5).svg" alt="logo" />
                </div>
            </div>
          </div>

          <div className='h-[488px] w-[1440px] bg-[#FFFFFF]'>
      <div className='h-[142px] w-[1440px] bg-[#FAFAFA] flex justify-center'>
        <div className='h-[138px] w-[1050px] flex items-center'>
          <div className='h-[58px] w-[1049.5px] gap-[577.5px] flex items-center'>
            <div className='h-[58px] w-[236px] gap-[10px] flex items-center'>
              <div className='h-[58px] w-[187px] flex items-center'>
                <h3 style={{fontWeight:'700'}} className='h-[32px] w-[108px] font-montserrat text-[24px] text-[#252B42]'>Bandage</h3>
              </div>
            </div>
            <div className='h-[24px] w-[236px] flex items-center justify-center'>
              <div className='h-[24px] w-[112px] gap-[20px] flex'>
                <img src="/image/facebook/facebook.svg" alt=" facebook" />
                <img src="/image/insta/instagram.svg" alt="insta gram" />
                <img src="/image/twitter/twitter.svg" alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[272px] w-[1440px] flex justify-center items-center'>
        <div className='h-[270px] w-[1050px] flex items-center justify-center'>
          <div className='h-[170px] w-[1041px] gap-[30px] flex'>
            <div className='h-[170px] w-[148px] gap-[20px] grid'>
              <h5 style={{fontWeight:'700'}} className='h-[24px] w-[125px] font-montserrat text-[16px] text-[#252B42]'>Company Info</h5>
              <div className='h-[126px w-[97px] gap-[10px] grid'>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[74px] font-montserrat text-[14px] text-[#737373]'>About Us</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[50px] font-montserrat text-[14px] text-[#737373]'>Carrier</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[110px] font-montserrat text-[14px] text-[#737373]'>We Are Hiring</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[24px] font-montserrat text-[14px] text-[#737373]'>Bog</h6>
              </div>
            </div>
            <div className='h-[170px] w-[148px] gap-[20px] grid'>
              <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#252B42]'>Legal</h5>
              <div className='h-[126px w-[97px] gap-[10px] grid'>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[74px] font-montserrat text-[14px] text-[#737373]'>About Us</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[50px] font-montserrat text-[14px] text-[#737373]'>Carrier</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[110px] font-montserrat text-[14px] text-[#737373]'>We Are Hiring</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[24px] font-montserrat text-[14px] text-[#737373]'>Bog</h6>
              </div>
            </div>
            <div className='h-[170px] w-[148px] gap-[20px] grid'>
              <h5 style={{fontWeight:'700'}} className='h-[24px] w-[72px] font-montserrat text-[16px] text-[#252B42]'>Features</h5>
              <div className='h-[126px w-[97px] gap-[10px] grid'>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[200px] font-montserrat text-[14px] text-[#737373]'>Business Marketing</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[107px] font-montserrat text-[14px] text-[#737373]'>User Analytic</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[108px] font-montserrat text-[14px] text-[#737373]'>Live Chat</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[24px] font-montserrat text-[14px] text-[#737373]'>Bog</h6>
              </div>
            </div>
            <div className='h-[170px] w-[148px] gap-[20px] grid'>
              <h5 style={{fontWeight:'700'}} className='h-[24px] w-[86px] font-montserrat text-[16px] text-[#252B42]'>Resources</h5>
              <div className='h-[126px w-[97px] gap-[10px] grid'>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[124px] font-montserrat text-[14px] text-[#737373]'>IOS & Android</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[146px] font-montserrat text-[14px] text-[#737373]'>Watch a Demo</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[79px] font-montserrat text-[14px] text-[#737373]'>Customers</h6>
                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[25px] font-montserrat text-[14px] text-[#737373]'>API</h6>
              </div>
            </div>
            <div className='h-[131px] w-[321] gap-[20px] grid'>
              <h5 style={{fontWeight:'700'}} className='h-[24px] w-[153px] font-montserrat text-[16px] text-[#252B42]'>Get In Touch</h5>
              <div className='h-[87px] w-[321px]'>
                <div className='h-[58px] w-[321px] border-[1px] bg-[#F9F9F9] border-[#E6E6E6] flex justify-end'>
                  <div><h6 style={{fontWeight:'500'}} className='pt-[17px] pr-[30px] h-[24px] w-[192px] font-montserrat text-[14px] text-[#737373]'>Your Email</h6></div>
                  <div className='w-[117px] h-[58px] bg-[#23A6F0] rounded-tr-[5px] rounded-br-[5px] border-[#E6E6E6] flex justify-center items-center'>
                    <h6 style={{fontWeight:'500'}} className='h-[24px] w-[72px] font-montserrat text-[14px] text-[#FFFFFF]'>Subscribe</h6>
                  </div>
                </div>
                <h6 style={{fontWeight:'600'}} className='h-[28px] w-[155px] font-montserrat text-[12px] text-[#737373]'>Lore imp sum dolor Amit</h6>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='h-[74px] w-[1440px] flex justify-center bg-[#FAFAFA]'>
          <div className='h-[74px] w-[1050px] flex items-center'>
            <div className='h-[24px] w-[600px] flex items-center'>
              <h6 style={{fontWeight:'700'}} className='h-[24px] w-[436px] font-montserrat text-[14px] text-[#737373] pt-[5px]'>Made With Love By Finland All Right Reserved </h6>
            </div>
          </div>
        </div>
    </div>

            <div className='h-[1778px] w-[1440px] bg-[#FFFFFF] flex justify-center items-center'>
                <div className='h-[1778px] w-[1124px] grild gp-[30px] justify-center'>
                    
                    <div className='h-[488px] w-[1048px] gap-[30px] flex'>
                        
                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/fixed-height (4).svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/fixed-height (5).svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/fixed-height.svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/product-cover-5 (2).svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                    </div>
                    

                    <div className='h-[488px] w-[1048px] gap-[30px] flex'>
                        
                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/product-cover-5 (3).svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/product-cover-5 (4).svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/product-cover-5 (5).svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/fixed-height (1).svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                    </div>

                    <div className='h-[488px] w-[1048px] gap-[30px] flex'>
                        
                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/product-cover-5 (6).svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/product-cover-5 (7).svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/fixed-height (2).svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                        <div className='h-[488px] w-[238px]'>
                            <img src="/image/shop product/fixed-height (3).svg" alt="products" />
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[200px] text-[16px] font-montserrat text-[#252B42] pl-[55px] pt-[20px]'>Graphic Design</h5>
                        <h1 style={{fontWeight:'700'}} className='h-[24px] w-[220px] text-[14px] font-montserrat text-[#737373] pt-[30px] pl-[43px]'>English Department</h1>
                        <div className='h-[34px] w-[108px] gap-[5px] flex pl-[65px] pt-[40px]'>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[52px] font-montserrat text-[16px] text-[#BDBDBD]'>$16.48</h5>
                            <h5 style={{fontWeight:'700'}} className='h-[24px] w-[45px] font-montserrat text-[16px] text-[#23856D]'>$6.48</h5>
                        </div> 
                        <div className='h-[16px] w-[160px] gap-[6.08px] flex pl-[80px] pt-[42px]'>
                            <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
                            <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
                        </div>
                        </div>

                    </div>
                <img className='pl-[365px]' src="/image/box/Pagination.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Shop
