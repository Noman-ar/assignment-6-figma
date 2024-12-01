import React, { Fragment } from "react";
import Image from "next/image";
import { FaDribbble, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";


function Home(){
  return (
    <Fragment>

      <div className="w-[1280px] h-[54px] max-[428px]:hidden">
   
        <div className="flex gap-8 w-[1154px] h-[54px] py-3 ml-16">

          <div className="flex gap-4 w-[386px] h-[30px]">
            <p className={`h-[21px] text-[14px]`}>Phone Number: 03463925060</p>
            <div className="h-[30px] border-[1px] border-[#676767]"></div>
            <p className={`text-[14px]`}>Email: aslamnoman123@gmail.com</p>
          </div>

          {/* Social media icons section */}
          <div className="flex flex-row-reverse gap-4 w-[736px] h-[24px]">

            <div className="flex gap-3 w-[132px] h-[24px]">
              <div className="w-6 h-6">
                <FaFacebookF className="w-[10px] h-[19px]"/>
              </div>
              <div className="w-6 h-6">
                <FaInstagram className="w-[18px] h-[18px]"/>
              </div>
              <div className="w-6 h-6">
                <FaTwitter className="w-[18px] h-4" />
              </div>
              <div className="w-6 h-6">
                <FaLinkedin className="w-[18px] h-[18px]" />
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="flex w-[1280px] h-[72px] border-b border-[#676767] px-[64px] pt-[13px] max-[428px]:px-6  max-[428px]:w-[428px]">
        <div className="flex justify-between w-[1152px] h-[44px]">

          {/* This is just for Logo and Name */}
          <div className="flex w-[130px] h-[30px] mt-2">
            <Image src={"/logo.svg"} alt="Logo" width={32.58} height={30.38}/>
            <h1 className={`text-[25px] ml-[8px] leading-[30px]`}>Ddsgnr</h1>
          </div>

          {/* This is for navbar and login button */}
          <div className="flex gap-8 w-[910px] h-[44px] max-[428px]:hidden">
            <div className="flex gap-8 w-[687px] h-[44px]">
              <button className={` w-16 h-[44px]`}>Home</button>
              <button className={` w-[79px] h-[44px]`}>Courses</button>
              <button className={` w-[81px] h-[44px]`}>Services</button>
              <button className={` w-[113px] h-[44px]`}>Achievement</button>
              <button className={` w-[86px] h-[44px]`}>About Us</button>
              <button className={` w-[104px] h-[44px]`}>Testimonial</button>
            </div>

            <div className="flex gap-4 w-[191px] h-[40px]">
              <button className={` w-[80px] h-[40px] border-[1px] rounded-[5px] border-black`}>Login</button>
              <button className={` w-[95px] h-[40px] border-[1px] rounded-[5px] border-black bg-black text-white`}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[1280] h-[800px] max-[428px]:w-[428px]  max-[428px]:h-[780px] max-[428px]:flex-col">

      {/* Here is the main paragraph and few buttons */}
      <div className="flex flex-col gap-6 items-center w-[640px] h-[300px] mt-[250px] max-[428px]:w-[428px] max-[428px]:h-[390px] max-[428px]:px-6 max-[428px]:py-[64px] max-[428px]:m-0">
        <div className="flex flex-col gap-6 w-[500px] h-[212px] max-[428px]:w-[380px] max-[428px]:h-[174px]">
          <h2 className={` w-[500px] h-[134px] text-[56px] leading-[67px] max-[428px]:w-full max-[428px]:text-[40px] max-[428px]:leading-[48px]`}>Learn new skills online with ease</h2>
          <p className={` w-[500px] h-[54px] text-[18px] leading-[27px] max-[428px]:w-full`}>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>

        {/* Here the buttons of paragraph 3rd */}
        <div className="flex gap-4 pt-4 w-[358px] h-16">
          <button className={` w-[178px] h-12 border rounded-[5px] bg-black text-white border-black`}>Start learning now</button>
          <button className={` w-[164px] h-12 border rounded-[5px] bg-white text-black border-black`}>Explore Courses</button>
        </div>
      </div>

      {/* Here Will the lady image */}
      <Image src={"/main-lady.svg"} alt="lady" width={640} height={900} className=" max-[428px]:object-cover max-[428px]:object-top max-[428px]:h-[390px]"/>
      </div>

      <div className="flex gap-16 w-[1280px] h-[228px] px-4 py-[80px] bg-[#F7F7F7] max-[428px]:w-[428px] max-[428px]:h-[240px] max-[428px]:py-12 max-[428px]:px-6 max-[428px]:flex-col max-[428px]:gap-4">
        <h5 className={` w-80 h-[68px] text-[24px] leading-[33px] max-[428px]:hidden`}>Trusted by 2000+ companies worldwide.</h5>
        <h5 className={` max-[428px]:w-[327px] max-[428px]:h-[54px] max-[428px]:text-[18px] max-[428px]:leading-[27px] sm:hidden`}>Trusted by the world's best companies [social proof to build credibility]</h5>
        <div className="flex gap-[19.12px] w-[880px] h-[56px] py-[8.74px] pl-8 max-[428px]:w-[428px] max-[428px]:h-[65px] max-[428px]:py-0 max-[428px]:gap-4 max-[428px]:pl-0">
          <Image src={"/logo-1.svg"} alt="logo" width={123.8} height={38.52} />
          <Image src={"/logo-2.svg"} alt="logo" width={123.8} height={38.52} />
          <Image src={"/logo-3.svg"} alt="logo" width={123.8} height={38.52} />
          <Image src={"/logo-4.svg"} alt="logo" width={123.8} height={38.52} className=" max-[428px]:hidden"/>
          <Image src={"/logo-5.svg"} alt="logo" width={123.8} height={38.52} className=" max-[428px]:hidden"/>
          <Image src={"/logo-6.svg"} alt="logo" width={123.8} height={38.52} className=" max-[428px]:hidden"/>
        </div>
      </div>

      <div className="flex flex-col gap-20 w-[1280px] h-[1049px] py-28 border-b-2 max-[428px]:w-[428px] max-[428px]:h-[862px] max-[428px]:gap-12 max-[428px]:py-12 max-[428px]:px-6">

        {/* Here is the main heading of  5th section*/}
        <div className="flex flex-col gap-6 w-[768px] h-[109px] ml-64 max-[428px]:w-[385px] max-[428px]:h-[162px] max-[428px]:ml-0">
          <h3 className={` text-[48px] leading-[57px] max-[428px]:text-[32px] max-[428px]:leading-[41px] max-[428px]:text-center`}>Explore Courses By Category</h3>
          <p className={` text-[18px] leading-[27px] max-[428px]:text-center`}>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>

        {/* Here will be the courses */}
        <div className="w-[1280px] h-[636px] max-[428px]:w-[428px] max-[428px]:h-[556px]">
          <div className="flex flex-col gap-16 w-[1280px] h-[636px] max-[428px]:w-full max-[428px]:h-full">

            {/* This is the column # 1 */}
            <div className="grid grid-cols-3 gap-6 w-[1280px] h-[132px] max-[428px]:w-[380px] max-[428px]:h-[444px] max-[428px]:flex max-[428px]:flex-col">

              <div className="flex gap-8 w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] max-[428px]:w-full">
                <Image src={"/course-1.svg"} alt="course" width={100} height={100}/>
                <div className="flex flex-col gap-4 w-[246.67px] h-[57px] pt-4">
                  <p className={` font-semibold text-[20px] leading-[30px] w-[246px] h-[30px]`}>Design & Development</p>
                  <p className={` text-[18px] leading-[27px] w-[246px] h-[27px] `}>50+ Courses Available</p>
                </div>
              </div>

              <div className="flex gap-8 w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] max-[428px]:w-full">
              <Image src={"/course-2.svg"} alt="course" width={100} height={100}/>
                <div className="flex flex-col gap-4 w-[246.67px] h-[57px] pt-4">
                  <p className={` font-semibold text-[20px] leading-[30px] w-[246px] h-[30px]`}>Marketing</p>
                  <p className={` text-[18px] leading-[27px] w-[246px] h-[27px] `}>50+ Courses Available</p>
                </div>
              </div>

              <div className="flex gap-8 w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] max-[428px]:w-full">
              <Image src={"/course-3.svg"} alt="course" width={100} height={100}/>
                <div className="flex flex-col gap-4 w-[246.67px] h-[57px] pt-4">
                  <p className={` font-semibold text-[20px] leading-[30px] w-[246px] h-[30px]`}>Development</p>
                  <p className={` text-[18px] leading-[27px] w-[246px] h-[27px] `}>50+ Courses Available</p>
                </div>
              </div>
            </div>

            {/* This is the column # 2 */}  
            <div className="grid grid-cols-3 gap-6 w-[1280px] h-[132px] max-[428px]:hidden"> 
              <div className="flex gap-8 w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7]">
                <Image src={"/course-4.svg"} alt="course" width={100} height={100}/>
                <div className="flex flex-col gap-4 w-[246.67px] h-[57px] pt-4">
                  <p className={` font-semibold text-[20px] leading-[30px] w-[246px] h-[30px]`}>Communication</p>
                  <p className={` text-[18px] leading-[27px] w-[246px] h-[27px] `}>50+ Courses Available</p>
                </div>
              </div>
              <div className="flex gap-8 w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7]">
              <Image src={"/course-5.svg"} alt="course" width={100} height={100}/>
                <div className="flex flex-col gap-4 w-[246.67px] h-[57px] pt-4">
                  <p className={` font-semibold text-[20px] leading-[30px] w-[246px] h-[30px]`}>Digital Marketing</p>
                  <p className={` text-[18px] leading-[27px] w-[246px] h-[27px] `}>50+ Courses Available</p>
                </div>
              </div>
              <div className="flex gap-8 w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7]">
              <Image src={"/course-6.svg"} alt="course" width={100} height={100}/>
                <div className="flex flex-col gap-4 w-[246.67px] h-[57px] pt-4">
                  <p className={` font-semibold text-[20px] leading-[30px] w-[246px] h-[30px]`}>Self Development</p>
                  <p className={` text-[18px] leading-[27px] w-[246px] h-[27px] `}>50+ Courses Available</p>
                </div>
              </div>
            </div>

            {/* This is the column # 3 */}
            <div className="grid grid-cols-3 gap-6 w-[1280px] h-[132px] max-[428px]:hidden"> 
              <div className="flex gap-8 w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7]">
                <Image src={"/course-7.svg"} alt="course" width={100} height={100}/>
                <div className="flex flex-col gap-4 w-[246.67px] h-[57px] pt-4">
                  <p className={` font-semibold text-[20px] leading-[30px] w-[246px] h-[30px]`}>Business</p>
                  <p className={` text-[18px] leading-[27px] w-[246px] h-[27px] `}>50+ Courses Available</p>
                </div>
              </div>
              <div className="flex gap-8 w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7]">
              <Image src={"/course-8.svg"} alt="course" width={100} height={100}/>
                <div className="flex flex-col gap-4 w-[246.67px] h-[57px] pt-4">
                  <p className={` font-semibold text-[20px] leading-[30px] w-[246px] h-[30px]`}>Finance</p>
                  <p className={` text-[18px] leading-[27px] w-[246px] h-[27px] `}>50+ Courses Available</p>
                </div>
              </div>
              <div className="flex gap-8 w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7]">
              <Image src={"/course-9.svg"} alt="course" width={100} height={100}/>
                <div className="flex flex-col gap-4 w-[246.67px] h-[57px] pt-4">
                  <p className={` font-semibold text-[20px] leading-[30px] w-[246px] h-[30px]`}>Consulting</p>
                  <p className={` text-[18px] leading-[27px] w-[246px] h-[27px] `}>50+ Courses Available</p>
                </div>
              </div>
            </div>

            {/* This is the button to view all courses */}
            <button className="w-[155px] h-[48px] border-2 border-black rounded-[5px] ml-[580px] max-[428px]:ml-[120px]">View all courses</button>
          </div>
        </div>

      </div>

      <div className="flex flex-col gap-20 w-[1280px] h-[400px] py-16 px-16 border-b-2 max-[428px]:w-[428px] max-[428px]:h-[451px] max-[428px]:py-12 max-[428px]:px-6 max-[428px]:gap-12">
        <div className="flex flex-col gap-8 w-[1152px] h-[264px] max-[428px]:w-[380px] max-[428px]:h-[355px]">

          {/* Main heading of section 6 */}
          <div className="flex flex-col gap-4 w-[1152px] h-[136px] max-[428px]:w-full max-[428px]:h-[147px]">
            <h2 className={` flex justify-center w-[1152px] h-[58px] text-[48px] leading-[57.6px] max-[428px]:w-full max-[428px]:h-[42px] max-[428px]:text-[32px] max-[428px]:leading-[41px]`}>Our Achievement</h2>
            <p className={` flex justify-center text-center w-[1152px] h-[54px] text-[18px] leading-[27px] max-[428px]:hidden`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <p className={`  max-[428px]:w-[362px] max-[428px]:h-[81px] max-[428px]:text-[18px] max-[428px]:leading-[27px] max-[428px]:text-center sm:hidden`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          </div>

          {/* List of few things */}
          <ul className="flex gap-[24px] justify-around w-[1152px] h-24 max-[428px]:w-[380px] max-[428px]:h-[176px] max-[428px]:justify-normal max-[428px]:hidden">
            <li className="flex flex-col items-center w-[91px]">
              <h3 className={` text-[40px] leading-[48px]`}>+200</h3>
              <p className={` text-[16px] leading-[24px]`}>Courses</p>
            </li>
            <li className="flex flex-col items-center w-[91px]">
              <h3 className={` text-[40px] leading-[48px]`}>50K</h3>
              <p className={` text-[16px] leading-[24px]`}>Mentors</p>
            </li>
            <li className="flex flex-col items-center w-[91px]">
              <h3 className={` text-[40px] leading-[48px]`}>370k</h3>
              <p className={` text-[16px] leading-[24px]`}>Students</p>
            </li>
            <li className="flex flex-col items-center w-[91px]">
              <h3 className={` text-[40px] leading-[48px]`}>100+</h3>
              <p className={` text-[16px] leading-[24px]`}>Recognition</p>
            </li>
            
          </ul>

          {/* List of fow things in mobile screen */}
          <div className="sm:hidden max-[428px]:flex max-[428px]:flex-col max-[428px]:gap-6 max-[428px]:w-[380px] max-[428px]:h-[176px]">
            <ul className="max-[428px]:flex max-[428px]:gap-4 max-[428px]:w-full max-[428px]:h-[76px] max-[428px]:py-2">
              <li className="max-[428px]:flex max-[428px]:flex-col max-[428px]:gap-2 max-[428px]:w-[182px] max-[428px]:h-[60px] max-[428px]:text-center">
                <h6 className={` max-[428px]:text-[20px] max-[428px]:leading-[28px]`}>+200</h6>
                <p className={` max-[428px]:text-base`}>Courses</p> 
              </li>
              <li className="max-[428px]:flex max-[428px]:flex-col max-[428px]:gap-2 max-[428px]:w-[182px] max-[428px]:h-[60px] max-[428px]:text-center">
                <h6 className={` max-[428px]:text-[20px] max-[428px]:leading-[28px]`}>50K</h6>
                <p className={` max-[428px]:text-base`}>Mentors</p>
              </li>
            </ul>
            <ul className="max-[428px]:flex max-[428px]:gap-4 max-[428px]:w-full max-[428px]:h-[76px] max-[428px]:py-2">
              <li className="max-[428px]:flex max-[428px]:flex-col max-[428px]:gap-2 max-[428px]:w-[182px] max-[428px]:h-[60px] max-[428px]:text-center">
                <h6 className={` max-[428px]:text-[20px] max-[428px]:leading-[28px]`}>370k</h6>
                <p className={` max-[428px]:text-base`}>Students</p> 
              </li>
              <li className="max-[428px]:flex max-[428px]:flex-col max-[428px]:gap-2 max-[428px]:w-[182px] max-[428px]:h-[60px] max-[428px]:text-center">
                <h6 className={` max-[428px]:text-[20px] max-[428px]:leading-[28px]`}>100+</h6>
                <p className={` max-[428px]:text-base`}>Recognition</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[60px] w-[1280px] h-[1500px] py-12 border-b-2 max-[428px]:w-[428px] max-[428px]:h-[2135px]">

        {/* Here is the main heading */}
        <div className="flex flex-col items-center gap-4 w-[768px] h-[118] max-[428px]:w-[249px] max-[428px]:h-[93px] max-[428px]:gap-6">
          <h2 className={` text-[56px] leading-[67.2px] h-[67px] max-[428px]:text-4xl`}>Courses</h2>
          <p className={` text-[18px] leading-[27px]`}>Your Ultimate Guide to learning</p>
        </div>

        {/* Here is the slide of courses and headache */} 
        <div className="flex flex-col gap-16 w-[1280px] h-[1132px] max-[428px]:w-[380px] max-[428px]:h-[1690px]">
          <div className="flex gap-8 w-[1280px] h-[532px] max-[428px]:flex-col max-[428px]:w-full max-[428px]:h-full">

            <div className="flex flex-col gap-6 rounded-[5px] w-[405.33px] bg-[#F7F7F7] max-[428px]:w-full">
              <Image src={"/c-pic-1.svg"} alt="course-1" width={405.33} height={300} />
              <div className="flex flex-col gap-6 h-[210px] max-[428px]:h-[234px]">
                <div className="flex flex-col gap-2 w-[382px] h-[112px] ml-3 max-[428px]:w-[348px] max-[428px]:h-[146px]">
                  <div className="flex gap-2 w-[382px] h-[24px] max-[428px]:w-[348px]">
                    <h4 className={` w-[326px] h-[21px]`}>Design</h4>
                    <p><span>&#9733;</span>5.0</p>
                  </div>
                  <h5 className={` h-[34px] text-[24px] leading-[33.6px]`}>UX/UI Design 201</h5>
                  <p className={` h-12 text-[16px] leading-6 max-[428px]:w-[326px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="flex gap-4 items-center ml-3">
                  <button className="w-[114px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                  <p>$400</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-[5px] w-[405.33px] bg-[#F7F7F7] max-[428px]:w-full">
              <Image src={"/c-pic-2.svg"} alt="course-2" width={405.33} height={300} />
              <div className="flex flex-col gap-6 h-[210px] max-[428px]:h-[234px]">
                <div className="flex flex-col gap-2 w-[382px] h-[112px] ml-3 max-[428px]:w-[348px] max-[428px]:h-[146px]">
                  <div className="flex gap-2 w-[382px] h-[24px] max-[428px]:w-[348px]">
                    <h4 className={` w-[326px] h-[21px]`}>Programming</h4>
                    <p><span>&#9733;</span>5.0</p>
                  </div>
                  <h5 className={` h-[34px] text-[24px] leading-[33.6px]`}>Introduction to Python</h5>
                  <p className={` h-12 text-[16px] leading-6 max-[428px]:w-[326px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="flex gap-4 items-center ml-3">
                  <button className="w-[114px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                  <p>$400</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-[5px] w-[405.33px] bg-[#F7F7F7] max-[428px]:w-full">
              <Image src={"/c-pic-3.svg"} alt="course-3" width={405.33} height={300} />
              <div className="flex flex-col gap-6 h-[210px] max-[428px]:h-[234px]">
                <div className="flex flex-col gap-2 w-[382px] h-[112px] max-[428px]:w-[348px] max-[428px]:h-[146px]">
                  <div className="flex gap-2 w-[382px] h-[24px] max-[428px]:w-[348px]">
                    <h4 className={` w-[326px] h-[21px]`}>Business</h4>
                    <p><span>&#9733;</span>5.0</p>
                  </div>
                  <h5 className={` h-[34px] text-[24px] leading-[33.6px]`}>Data Analysis for Beginners</h5>
                  <p className={` h-12 text-[16px] leading-6 max-[428px]:w-[326px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="flex gap-4 items-center ml-3">
                  <button className="w-[114px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                  <p>$400</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 w-[1280px] h-[532px] max-[428px]:hidden">

            <div className="flex flex-col gap-6 rounded-[5px] w-[405.33px] bg-[#F7F7F7]">
              <Image src={"/c-pic-4.svg"} alt="course-4" width={405.33} height={300} />
              <div className="flex flex-col gap-6 h-[210px]">
                <div className="flex flex-col gap-2 w-[382px] h-[112px] ml-3">
                  <div className="flex gap-2 w-[382px] h-[24px]">
                    <h4 className={` w-[326px] h-[21px]`}>Art</h4>
                    <p><span>&#9733;</span>5.0</p>
                  </div>
                  <h5 className={` h-[34px] text-[24px] leading-[33.6px]`}>Art Specialization</h5>
                  <p className={` h-12 text-[16px] leading-6`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="flex gap-4 items-center ml-3">
                  <button className="w-[114px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                  <p>$400</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-[5px] w-[405.33px] bg-[#F7F7F7]">
              <Image src={"/c-pic-5.svg"} alt="course-5" width={405.33} height={300} />
              <div className="flex flex-col gap-6 h-[210px]">
                <div className="flex flex-col gap-2 w-[382px] h-[112px] ml-3">
                  <div className="flex gap-2 w-[382px] h-[24px]">
                    <h4 className={` w-[326px] h-[21px]`}>Law</h4>
                    <p><span>&#9733;</span>5.0</p>
                  </div>
                  <h5 className={` h-[34px] text-[24px] leading-[33.6px]`}>Rule of Law</h5>
                  <p className={` h-12 text-[16px] leading-6`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="flex gap-4 items-center ml-3">
                  <button className="w-[114px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                  <p>$400</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-[5px] w-[405.33px] bg-[#F7F7F7]">
              <Image src={"/c-pic-6.svg"} alt="course-6" width={405.33} height={300} />
              <div className="flex flex-col gap-6 h-[210px]">
                <div className="flex flex-col gap-2 w-[382px] h-[112px] ml-3">
                  <div className="flex gap-2 w-[382px] h-[24px]">
                    <h4 className={` w-[326px] h-[21px]`}>Tech</h4>
                    <p><span>&#9733;</span>5.0</p>
                  </div>
                  <h5 className={` h-[34px] text-[24px] leading-[33.6px]`}>Introduction to webflow</h5>
                  <p className={` h-12 text-[16px] leading-6`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="flex gap-4 items-center ml-3">
                  <button className="w-[114px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                  <p>$400</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <button className="w-[152px] h-[40px] border border-black rounded-[5px] ">View All Courses</button>
      </div>

      <div className="flex flex-col gap-20 items-center w-[1280px] h-[895px] py-28 border-b-2 bg-[#F7F7F7] max-[428px]:w-[428px] max-[428px]:h-[1075px] max-[428px]:py-12 max-[428px]:px-6 max-[428px]:gap-12">

        {/* This is the heading */}
        <div className="flex flex-col gap-4 w-[768px] h-[109px] max-[428px]:w-[363px] max-[428px]:h-[120px] max-[428px]:gap-6">
          <h2 className={` h-[58px] text-[48px] leading-[57.6px] text-center max-[428px]:text-[32px] max-[428px]:leading-[41px]`}>Our team</h2>
          <p className={` h-[27px] text-[18px] leading-[27px] text-center max-[428px]:h-[54px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>

        {/* Here will go team members profile pic and alot of more headache*/}
        <div className="grid grid-cols-3 gap-x-12 gap-y-16 w-[1280px] h-[482px] max-[428px]:w-[380px] max-[428px]:h-[723px] max-[428px]:gap-12 max-[428px]:flex max-[428px]:flex-col">
          <div className="flex flex-col gap-4 w-[394.87px] h-[209px] items-center  max-[428px]:gap-6">
            <Image src={"/person-1.svg"} alt="person" width={80} height={80}/>
            <div className="flex flex-col gap-2 items-center ">
              <h4 className={` text-center text-[20px] leading-[30px]`}>James Nduku</h4>
              <p className={` text-center text-[18px] leading-[27px]`}>Marketing Coordinator</p>
            </div>
            <div className="flex gap-[14px] w-[100px] h-6">
              <FaFacebookF className="size-[18px]"/>
              <FaTwitter className="size-[18px]"/>
              <FaDribbble className="size-[18px]"/>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[394.87px] h-[209px] items-center  max-[428px]:gap-6">
            <Image src={"/person-2.svg"} alt="person" width={80} height={80}/>
            <div className="flex flex-col gap-2 items-center ">
              <h4 className={` text-center text-[20px] leading-[30px]`}>Joseph Munyambu</h4>
              <p className={` text-center text-[18px] leading-[27px]`}>Nursing Assistant</p>
            </div>
            <div className="flex gap-[14px] w-[100px] h-6">
              <FaFacebookF className="size-[18px]"/>
              <FaTwitter className="size-[18px]"/>
              <FaDribbble className="size-[18px]"/>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[394.87px] h-[209px] items-center  max-[428px]:gap-6">
            <Image src={"/person-3.svg"} alt="person" width={80} height={80}/>
            <div className="flex flex-col gap-2 items-center ">
              <h4 className={` text-center text-[20px] leading-[30px]`}>Joseph Ngumbau</h4>
              <p className={` text-center text-[18px] leading-[27px]`}>Medical Assistant</p>
            </div>
            <div className="flex gap-[14px] w-[100px] h-6">
              <FaFacebookF className="size-[18px]"/>
              <FaTwitter className="size-[18px]"/>
              <FaDribbble className="size-[18px]"/>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[394.87px] h-[209px] items-center  max-[428px]:hidden">
            <Image src={"/person-4.svg"} alt="person" width={80} height={80}/>
            <div className="flex flex-col gap-2 items-center ">
              <h4 className={` text-center text-[20px] leading-[30px]`}>Erick Kipkembol</h4>
              <p className={` text-center text-[18px] leading-[27px]`}>Web Designer</p>
            </div>
            <div className="flex gap-[14px] w-[100px] h-6">
              <FaFacebookF className="size-[18px]"/>
              <FaTwitter className="size-[18px]"/>
              <FaDribbble className="size-[18px]"/>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[394.87px] h-[209px] items-center  max-[428px]:hidden">
            <Image src={"/person-5.svg"} alt="person" width={80} height={80}/>
            <div className="flex flex-col gap-2 items-center ">
              <h4 className={` text-center text-[20px] leading-[30px]`}>Stephen Kerubo</h4>
              <p className={` text-center text-[18px] leading-[27px]`}>President of Sales</p>
            </div>
            <div className="flex gap-[14px] w-[100px] h-6">
              <FaFacebookF className="size-[18px]"/>
              <FaTwitter className="size-[18px]"/>
              <FaDribbble className="size-[18px]"/>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[394.87px] h-[209px] items-center  max-[428px]:hidden">
            <Image src={"/person-6.svg"} alt="person" width={80} height={80}/>
            <div className="flex flex-col gap-2 items-center ">
              <h4 className={` text-center text-[20px] leading-[30px]`}>John Lebo</h4>
              <p className={` text-center text-[18px] leading-[27px]`}>Dog Trainer</p>
            </div>
            <div className="flex gap-[14px] w-[100px] h-6">
              <FaFacebookF className="size-[18px]"/>
              <FaTwitter className="size-[18px]"/>
              <FaDribbble className="size-[18px]"/>
            </div>
          </div>
        </div>

        <Button variant={"outline"}>View All</Button>


      </div>

      <div className="flex flex-col gap-20 w-[1280px] h-[830px] py-28 px-16 border-b-2 bg-[#F7F7F7] max-[428px]:w-[428px] max-[428px]:h-[681px] max-[428px]:py-12 max-[428px]:px-6 max-[428px]:gap-12">

        {/* Here will go the heading of testimonials */}
        <div className="flex flex-col gap-6 w-[560px] h-[109px] max-[428px]:w-[361px] max-[428px]:h-[120px] max-[428px]:items-center">
          <h2 className={` w-[560px] h-[54px] text-[48px] leading-[57px] max-[428px]:hidden`}>Customer testimonials</h2>
          <h4 className={` max-[428px]:w-[315px] max-[428px]:h-[42px] max-[428px]:text-[32px] max-[428px]:leading-[41px]`}>What Our Student Say</h4>
          <p className={` w-[560px] h-[27px] text-[18px] leading-[27px] max-[428px]:w-full max-[428px]:h-[54px] max-[428px]:text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Here will go the cards */}
        <div className="flex flex-col gap-12 w-[1152px] h-[417px]">
          <div className="flex gap-8 w-[1152px] h-[321px]">
            <div className="flex flex-col gap-6 w-[362px] h-[321px] p-8 border border-black max-[428px]:w-[380px]">
              <span className="flex flex-row gap-1 w-[116px] h-[18px]">
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
              </span>

              <div className="flex flex-col gap-6 w-[298px] h-[215px]">
                <p className={` w-[298px] h-[135px] text-[18px] leading-[27px]`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              </div>

              <div className="flex gap-5 w-[215px] h-[56px]">
                <Image src="/person-1.svg" alt="DP" width={56} height={56} className="rounded-full"/>
                <div className="w-[139px] h-12">
                  <h5 className={` text-[16px] leading-[24px]`}>James niggacudu</h5>
                  <p className={` text-[16px] leading-[24px]`}>Software Developer</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-[362px] h-[321px] p-8 border border-black max-[428px]:hidden">
              <span className="flex flex-row gap-1 w-[116px] h-[18px]">
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
              </span>

              <div className="flex flex-col gap-6 w-[298px] h-[215px]">
                <p className={` w-[298px] h-[135px] text-[18px] leading-[27px]`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              </div>

              <div className="flex gap-5 w-[215px] h-[56px]">
                <Image src="/person-2.svg" alt="DP" width={56} height={56} className="rounded-full"/>
                <div className="w-[139px] h-12">
                  <h5 className={` text-[16px] leading-[24px]`}>Joseph Donger</h5>
                  <p className={` text-[16px] leading-[24px]`}>Scrum Master</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-[362px] h-[321px] p-8 border border-black max-[428px]:hidden">
              <span className="flex flex-row gap-1 w-[116px] h-[18px]">
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
                <FaStar className="size-[18px]"/>
              </span>

              <div className="flex flex-col gap-6 w-[298px] h-[215px]">
                <p className={` w-[298px] h-[135px] text-[18px] leading-[27px]`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              </div>

              <div className="flex gap-5 w-[215px] h-[56px]">
                <Image src="/person-3.svg" alt="DP" width={56} height={56} className="rounded-full"/>
                <div className="w-[139px] h-12">
                  <h5 className={` text-[16px] leading-[24px]`}>Erick Donald</h5>
                  <p className={` text-[16px] leading-[24px]`}>Wella Banda</p>
                </div>
              </div>
            </div>
          </div>

          {/* here is arrows and more */}
          <div className="flex justify-between w-[1152px] h-12 max-[428px]:w-[380px]">
            <div className="flex gap-2 w-[72px] h-2">
              <span className="size-2">&#9679;</span>
              <span className="size-2  text-[#8D8D8D]">&#9679;</span>
              <span className="size-2  text-[#8D8D8D]">&#9679;</span>
              <span className="size-2  text-[#8D8D8D]">&#9679;</span>
              <span className="size-2  text-[#8D8D8D]">&#9679;</span>
            </div>
            <div className="flex gap-[15px] w-[111px] h-12">
            <Button variant="outline" className="rounded-full size-12 text-[30px] p-0 border border-black">←</Button>
            <Button variant="outline" className="rounded-full size-12 text-[30px] p-0 border border-black">→</Button> 
            </div>
          </div>

        </div>
      
      </div>

      <Footer/>
      
    </Fragment>
  )
}

export default Home;