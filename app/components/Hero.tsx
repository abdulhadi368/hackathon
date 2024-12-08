import React from 'react';

const Hero = () => {
  return (
    <div className='h-[5450px] w-[1440px]'>
        <div className="h-[716px] w-[1440px] bg-cover bg-center" style={{backgroundImage:"url('/image/bg img/shop-hero-1-product-slide-1.svg')",}}>
           <div className='h-[331px] w-[599px] gap-[35px] grid pt-[250px] pl-[180px]'>
              <h5 style={{fontWeight:'700'}} className='text-[16px] w-[122px] h-[24px] text-[#FAFAFA] font-montserrat'>SUMMER 2020</h5>
              <h1 style={{fontWeight:'700'}} className='text-[58px] w-[648px] h-[80px] text-[#FAFAFA] font-montserrat'>NEW COLLECTION</h1>
              <h4 style={{fontWeight:'400'}} className='h-[60px w-[376px] text-[20px] text-[#FAFAFA] font-montserrat'>We know how large objects will act, 
              but things on a small scale.</h4>
              <div className='h-[62px] w-[221px] flex items-center justify-center bg-[#2DC071] rounded-[4px]'>
                <h3 style={{fontWeight:'700'}} className='h-[32px] w-[148px] font-montserrat text-[24px] text-[#FAFAFA]'>SHOP NOW</h3>
              </div>
           </div>
        </div>
        <div className='h-[770px] w-[1440px] flex justify-center items-center pt-[100px] bf-[#FAFAFA]'>
            <div className='h-[770px] w-[1050px]'>
                <div className='h-[62px] w-[607px] gap-[10px] items-center justify-center pl-[350px]'>
                    <h3 style={{fontWeight:'700'}} className='h-[32px] w-[291px] font-montserrat text-[24px] text-[#252B42] pl-[80px]'>EDITOR’S PICK</h3>
                    <p style={{fontWeight:'400'}} className='h-[20px] w-[347px] font-montserrat text-[14px] text-[#737373]'>Problems trying to resolve the conflict between </p>
                </div>
                <div className='h-[500px] w-[1050px] gap-[30px] flex pt-[40px]'>
                    <div className='h-[500px] w-[510px] bg-center bg-cover' style={{backgroundImage:"url('/image/boypic/filter.svg')"}}>
                    <img className='pt-[426px] pl-[31px]' src="/image/card/card-content.svg" alt="button" />
                    </div>
                    <div className='h-[500px] w-[240px] bg-center bg-cover' style={{backgroundImage:"url('/image/girl/filter (1).svg')"}}>
                    <img className='pt-[435px] pl-[15px]' src="/image/card/card-content (1).svg" alt="button" />
                    </div>
                    <div className='h-[500px] w-[240px] gap-[16px] grid'>
                      <div className='h-[242px] w-[240px] bg-center bg-cover' style={{backgroundImage:"url('/image/girl/filter (4).svg')"}}>
                      <img className='pt-[180px] pl-[11px]' src="/image/card/card-content (2).svg" alt="button" />
                      </div>
                      <div className='h-[242px] w-[240px] bg-center bg-cover' style={{backgroundImage:"url('/image/boypic/filter (3).svg')"}}>
                      <img className='pt-[180px] pl-[11px]' src="/image/card/card-content (3).svg" alt="button" />
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[1724px] w-[1440px] bg-[#FAFAFA]'>
            <div className='w-[1440px] h-[150px]'>
                <div className='h-[102px] w-[1440px]'>
                    <div className='h-[30px] w-[1440px] flex items-center justify-center'>
                        <h4 style={{fontWeight:'400'}} className='h-[30px] w-[191px] text-[20px] font-montserrat text-[#737373]'>Featured Products</h4>
                    </div>
                    <div className='h-[32px] w-[1440px] flex items-center justify-center'>
                        <h4 style={{fontWeight:'700'}} className='h-[32px] w-[307px] text-[24px] font-montserrat text-[#000000]'>BESTSELLER PRODUCTS</h4>
                    </div>
                    <div className='h-[20px] w-[1440px] flex items-center justify-center'>
                        <h4 style={{fontWeight:'400'}} className='h-[20px] w-[347px] text-[14px] font-montserrat text-[#737373]'>Problems trying to resolve the conflict between</h4>
                    </div>
                </div>
            </div>
            <div className='h-[1352px] w-[1440px] flex justify-center items-center'>
            <div className='h-[1652px] w-[1049px]'>
            <div className='h-[615px] w-[1049px] gap-[30px] flex pt-[120px]'>
                <div className='h-[615px] w-[238px] grid'>
                    <img className='h-[427px] w-[239px]' src="/image/product covers/product-cover-5.svg" alt="product cover" />
                    <div className='h-[188px] w-[239px]'>
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
                <div className='h-[615px] w-[238px] grid'>
                    <img className='h-[427px] w-[239px]' src="/image/product covers/product-cover-5 (1).svg" alt="product cover" />
                    <div className='h-[188px] w-[239px]'>
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
                <div className='h-[615px] w-[238px] grid'>
                    <img className='h-[427px] w-[239px]' src="/image/product covers/product-cover-5 (2).svg" alt="product cover" />
                    <div className='h-[188px] w-[239px]'>
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
                <div className='h-[615px] w-[238px] grid'>
                    <img className='h-[427px] w-[239px]' src="/image/product covers/product-cover-5 (3).svg" alt="product cover" />
                    <div className='h-[188px] w-[239px]'>
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
            </div>
            <div className='h-[615px] w-[1049px] gap-[30px] flex pt-[160px]'>
                <div className='h-[615px] w-[238px] grid'>
                    <img className='h-[427px] w-[239px]' src="/image/product covers/product-cover-5 (4).svg" alt="product cover" />
                    <div className='h-[188px] w-[239px]'>
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
                <div className='h-[615px] w-[238px] grid'>
                    <img className='h-[427px] w-[239px]' src="/image/product covers/product-cover-5 (5).svg" alt="product cover" />
                    <div className='h-[188px] w-[239px]'>
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
                <div className='h-[615px] w-[238px] grid'>
                    <img className='h-[427px] w-[239px]' src="/image/product covers/product-cover-5 (6).svg" alt="product cover" />
                    <div className='h-[188px] w-[239px]'>
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
                <div className='h-[615px] w-[238px] grid'>
                    <img className='h-[427px] w-[239px]' src="/image/product covers/product-cover-5 (7).svg" alt="product cover" />
                    <div className='h-[188px] w-[239px]'>
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
            </div>
            </div>
        </div>
            <div className='h-[711px] w-[1440px] flex justify-center bg-[#23856D]'>
                <div className='h-[711px] w-[1036px] flex gap-[30px] pt-[115px]'>
                    <div className='h-[432px] w-[509px] pt-[55px]'>
                        <h4 style={{fontWeight:'400'}} className='h-[30px] w-[154px] font-montserrat text-[20px] text-[#FFFFFF]'>SUMMER 2020</h4>
                        <h1 style={{fontWeight:'700'}} className='h-[160px] w-[509px] font-montserrat text-[58px] text-[#FFFFFF] pt-[10px]'>Vita Classic Product</h1>
                        <p style={{fontWeight:'400'}} className='h-[40px] w-[341px] font-montserrat text-[14px] text-[#FFFFFF] pt-[40px]'>We know how large objects will act, We know how are objects will act, We know</p>
                        <div className='h-[52px] w-[295px] gap-[34px] flex pt-[70px]'>
                            <h3 style={{fontWeight:'700'}} className='h-[32px] w-[77px] font-montserrat text-[24px] text-[#FFFFFF]'>$16.48</h3>
                            <div className='h-[52px] w-[184px] flex justify-center items-center bg-[#2DC071] rounded-[5px]'>
                                <button style={{fontWeight:'700'}} className='h-[22px] w-[104px] font-montserrat text-[14px] text-[#FFFFFF]'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className='h-[685px] w-[510px]'>
                        <img src="/image/boypic/shop-hero-2-png-picture-1.svg" alt="boy" />
                    </div>
                </div>
            </div>

            <div className='h-[682px] w-[1440px] bg-[#FFFFFF] flex pl-[120px]'>
                <div className='h-[682px] w-[704px]'>
                 <img src="/image/boypic/asian-woman-man-with-winter-clothes 1.svg" alt="couple" />
                </div>
                <div className='h-[326px] w-[573px] pt-[200px]'>
                    <h5 style={{fontWeight:'700'}} className='h-[24px] w-[122px] font-montserrat text-[16px] text-[#BDBDBD]'>SUMMER 2020</h5>
                    <h2 style={{fontWeight:'700'}} className='h-[100px] w-[375px] font-montserrat text-[40px] text-[#252B42] pt-[30px]'>Part of the Neural 
                    Universe</h2>
                    <h4 style={{fontWeight:'400'}} className='h-[60px] w-[376px] font-montserrat text-[20px] text-[#737373] pt-[60px]'>We know how large objects will act, 
                    but things on a small scale.</h4>
                    <div className='h-[52px] w-[339px] gap-[10px] flex pt-[85px]'>
                        <div className='h-[52px] w-[156px] rounded-[5px] bg-[#2DC071] flex justify-center items-center'>
                            <button style={{fontWeight:'700'}} className='h-[22px] w-[76px] font-montserrat text-[14px] text-[#FFFFFF]'>BUY NOW</button>
                        </div>
                        <div className='h-[52px] w-[173px] rounded-[5px] border-[#2DC071] border-[1px] flex justify-center items-center'>
                            <button style={{fontWeight:'700'}} className='h-[22px] w-[93px] font-montserrat text-[14px] text-[#2DC071]'>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[1044px] w-[1440px] flex justify-center items-center pt-[80px]'>
                <div className='h-[104lg4px] w-[1050px]'>
                  <div className='h-[134px] w-[1050px]'>
                    <div className='h-[24px] w-[1050px] flex justify-center items-center'>
                        <h6 style={{fontWeight:'700'}} className='h-[24px] w-[114px] font-montserrat text-[14px] text-[#23A6F0]'>Practice Advice</h6>
                    </div>
                    <div className='h-[50px] w-[1050px] flex justify-center pt-[10px]'>
                        <h2 style={{fontWeight:'700'}} className='h-[50px] w-[317px] font-montserrat text-[40px] text-[#252B42]'>Featured Posts</h2>
                    </div>
                    <div className='h-[40px] w-[1050px] flex justify-center pt-[30px]'>
                        <div>
                        <p style={{fontWeight:'400'}} className='h-[20px] w-[440px] font-montserrat text-[14px] text-[#737373] pl-[65px]'>Problems trying to resolve the conflict between</p>
                        <p style={{fontWeight:'400'}} className='h-[20px] w-[469px] font-montserrat text-[14px] text-[#737373]'>the two major realms of Classical physics: Newtonian mechanics </p></div>
                    </div>
                  </div>
                  <div className='h-[606px] w-[1045px] gap-[30px] flex pt-[50px]'>
                    <div className='h-[606px] w-[348px] shadow-lg'>
                        <img src="/image/art pic/unsplash_hHdHCfAifHU.svg" alt="pic" />
                        <div className='h-[306px] w-[348px]'>
                            <div className='h-[16px] w-[159px] gap-[15px] flex pt-[15px] pl-[15px]'>
                                <h6 style={{fontWeight:'400'}} className='h-[16px] w-[45px] font-montserrat text-[12px] text-[#8EC2F2]'>Google</h6>
                                <h6 style={{fontWeight:'400'}} className='h-[16px] w-[56px] font-montserrat text-[12px] text-[#737373]'>Trending</h6>
                                <h6 style={{fontWeight:'400'}} className='h-[16px] w-[28px] font-montserrat text-[12px] text-[#737373]'>New</h6>
                            </div>
                            <h4 style={{fontWeight:'400'}} className='h-[60px] w-[247px font-montserrat text-[20px] text-[#252B42] pl-[15px] pt-[30px]'>Loudest à la Madison #1 
                            (L'integral)</h4>
                            <p style={{fontWeight:'400'}} className='h-[60px] w-[280px] text-[14px] font-montserrat text-[#737373] pl-[15px] pt-[40px]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                            <div className='h-[46px] w-[298px] flex justify-between items-center pt-[70px] pl-[15px]'>
                                <div className='h-[16px] w-[98px] gap-[5px] flex'>
                                    <img src="/image/clock/icon akar-icons-calendar.svg" alt="clock" />
                                    <h6 style={{fontWeight:'400'}} className='h-[16px] w-[87px] font-montserrat text-[12px] text-[#737373]'>22 April 2021</h6>
                                </div>
                                <div className='h-[16px] w-[105px] gap-[5px] flex'>
                                    <img src="/image/scale/icon ant-design-area-chart-outlined.svg" alt="scale" />
                                    <h6 style={{fontWeight:'400'}} className='h-[16px] w-[84px] font-montserrat text-[12px] text-[#737373]'>10 comments</h6>
                                </div>
                            </div>
                            <div className='h-[24px] w-[124px] gap-[10px] flex justify-center items-center pl-[15px] pt-[50px]'>
                                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[130px] font-montserrat text-[14px] text-[#737373]'>Learn More</h6>
                                <img src="/image/Arow/icon arrow-next.svg" alt="arow" />
                            </div>
                        </div>
                    </div>
                    <div className='h-[606px] w-[348px] shadow-lg'>
                        <img src="/image/art pic/unsplash_tVEqStC2uz8.svg" alt="pic" />
                        <div className='h-[306px] w-[348px]'>
                            <div className='h-[16px] w-[159px] gap-[15px] flex pt-[15px] pl-[15px]'>
                                <h6 style={{fontWeight:'400'}} className='h-[16px] w-[45px] font-montserrat text-[12px] text-[#8EC2F2]'>Google</h6>
                                <h6 style={{fontWeight:'400'}} className='h-[16px] w-[56px] font-montserrat text-[12px] text-[#737373]'>Trending</h6>
                                <h6 style={{fontWeight:'400'}} className='h-[16px] w-[28px] font-montserrat text-[12px] text-[#737373]'>New</h6>
                            </div>
                            <h4 style={{fontWeight:'400'}} className='h-[60px] w-[247px font-montserrat text-[20px] text-[#252B42] pl-[15px] pt-[30px]'>Loudest à la Madison #1 
                            (L'integral)</h4>
                            <p style={{fontWeight:'400'}} className='h-[60px] w-[280px] text-[14px] font-montserrat text-[#737373] pl-[15px] pt-[40px]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                            <div className='h-[46px] w-[298px] flex justify-between items-center pt-[70px] pl-[15px]'>
                                <div className='h-[16px] w-[98px] gap-[5px] flex'>
                                    <img src="/image/clock/icon akar-icons-calendar.svg" alt="clock" />
                                    <h6 style={{fontWeight:'400'}} className='h-[16px] w-[87px] font-montserrat text-[12px] text-[#737373]'>22 April 2021</h6>
                                </div>
                                <div className='h-[16px] w-[105px] gap-[5px] flex'>
                                    <img src="/image/scale/icon ant-design-area-chart-outlined.svg" alt="scale" />
                                    <h6 style={{fontWeight:'400'}} className='h-[16px] w-[84px] font-montserrat text-[12px] text-[#737373]'>10 comments</h6>
                                </div>
                            </div>
                            <div className='h-[24px] w-[124px] gap-[10px] flex justify-center items-center pl-[15px] pt-[50px]'>
                                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[130px] font-montserrat text-[14px] text-[#737373]'>Learn More</h6>
                                <img src="/image/Arow/icon arrow-next.svg" alt="arow" />
                            </div>
                        </div>
                    </div>
                    <div className='h-[606px] w-[348px] shadow-lg'>
                        <img src="/image/art pic/unsplash_dEGu-oCuB1Y.svg" alt="pic" />
                        <div className='h-[306px] w-[348px]'>
                            <div className='h-[16px] w-[159px] gap-[15px] flex pt-[15px] pl-[15px]'>
                                <h6 style={{fontWeight:'400'}} className='h-[16px] w-[45px] font-montserrat text-[12px] text-[#8EC2F2]'>Google</h6>
                                <h6 style={{fontWeight:'400'}} className='h-[16px] w-[56px] font-montserrat text-[12px] text-[#737373]'>Trending</h6>
                                <h6 style={{fontWeight:'400'}} className='h-[16px] w-[28px] font-montserrat text-[12px] text-[#737373]'>New</h6>
                            </div>
                            <h4 style={{fontWeight:'400'}} className='h-[60px] w-[247px font-montserrat text-[20px] text-[#252B42] pl-[15px] pt-[30px]'>Loudest à la Madison #1 
                            (L'integral)</h4>
                            <p style={{fontWeight:'400'}} className='h-[60px] w-[280px] text-[14px] font-montserrat text-[#737373] pl-[15px] pt-[40px]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                            <div className='h-[46px] w-[298px] flex justify-between items-center pt-[70px] pl-[15px]'>
                                <div className='h-[16px] w-[98px] gap-[5px] flex'>
                                    <img src="/image/clock/icon akar-icons-calendar.svg" alt="clock" />
                                    <h6 style={{fontWeight:'400'}} className='h-[16px] w-[87px] font-montserrat text-[12px] text-[#737373]'>22 April 2021</h6>
                                </div>
                                <div className='h-[16px] w-[105px] gap-[5px] flex'>
                                    <img src="/image/scale/icon ant-design-area-chart-outlined.svg" alt="scale" />
                                    <h6 style={{fontWeight:'400'}} className='h-[16px] w-[84px] font-montserrat text-[12px] text-[#737373]'>10 comments</h6>
                                </div>
                            </div>
                            <div className='h-[24px] w-[124px] gap-[10px] flex justify-center items-center pl-[15px] pt-[50px]'>
                                <h6 style={{fontWeight:'700'}} className='h-[24px] w-[130px] font-montserrat text-[14px] text-[#737373]'>Learn More</h6>
                                <img src="/image/Arow/icon arrow-next.svg" alt="arow" />
                            </div>
                        </div>
                    </div>
                  </div>
                </div>   
            </div>


        </div>
    </div>
  );
};

export default Hero;
  