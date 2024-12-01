import { Fragment } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer(){
    return (
        <Fragment>
            <div className="w-[1280px] h-[684px] p-20 max-[428px]:w-[428px] max-[428px]:h-[1411px] max-[428px]:py-12 max-[428px]:px-6">

                <div className="flex flex-col gap-20 w-[1120px] h-[524px] max-[428px]:w-[380px] max-[428px]:h-[1350px] max-[428px]:items-center">

                    {/* Here will go the newsletter and form */}
                    <div className="flex justify-between w-full h-[82px] max-[428px]:w-full max-[428px]:h-[261px] max-[428px]:flex-col max-[428px]:gap-6 max-[428px]:items-center">

                        <div className="w-[500px] h-[51px] max-[428px]:flex max-[428px]:flex-col max-[428px]:gap-4 max-[428px]:w-[287px] max-[428px]:h-[91px]">
                            <h5 className={`text-[18px] leading-[27px] max-[428px]:w-[287px] max-[428px]:h-[27px] max-[428px]:text-center`}>Subscribe to our newsletter</h5>
                            <p className={`text-base max-[428px]:w-full max-[428px]:h-12 max-[428px]:text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        <div className="flex-col gap-4 w-[400px] h-[82px] max-[428px]:w-[380px] max-[428px]:h-[146px]">

                            <div className="flex gap-4 max-[428px]:flex-col max-[428px]:w-full max-[428px]:h-[112px]">
                                <Input placeholder="Enter Your Email" className="w-[256px] h-[48px] max-[428px]:w-full"/>
                                <Button variant="outline" className="w-[119px] h-12 max-[428px]:w-full">Subscribe</Button>
                            </div>

                            <p className={`text-[12px] leading-[18px] max-[428px]:h-[18px] max-[428px]:text-center`}>By subscribing you agree to with our <span className="underline">Privacy Policy</span></p>
                        </div>

                    </div>

                    {/* Here will all the links and logo will go*/}
                    <div className="flex gap-10 w-full h-[225px] max-[428px]:w-[172px] max-[428px]:h-[811px] max-[428px]:flex-col max-[428px]:gap-8">

                        {/* Here will be the logo */}
                        <div className="flex gap-[10px] items-center w-[250px] h-10 max-[428px]:w-[130px] max-[428px]:py-[29px]">
                            <Image src={"/logo.svg"} alt="logo" width={32} height={30}/>
                            <h4 className={`text-[25px] leading-[30px]`}>Ddsgnr</h4>
                        </div>

                        {/* Here all the links will go */}
                        <div className="flex flex-col gap-4 w-[250px] h-[225px] max-[428px]:w-[172px] max-[428px]:h-[225px]">
                            <h5 className={`text-base max-[428px]:text-center`}>Courses</h5>
                            <div className="flex flex-col w-full h-[185px] max-[428px]:w-full">
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Business</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Development</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Technology</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Design</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Programming</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-[250px] h-[225px] max-[428px]:w-[172px] max-[428px]:h-[225px]">
                            <h5 className={`text-base max-[428px]:text-center`}>Resources</h5>
                            <div className="flex flex-col w-full h-[185px] max-[428px]:w-full">
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Career</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Resume</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Learning</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Interview Preparation</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Jobs</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-[250px] h-[225px] max-[428px]:w-[172px] max-[428px]:h-[225px]">
                            <h5 className={`text-base max-[428px]:text-center`}>About US</h5>
                            <div className="flex flex-col w-full h-[185px] max-[428px]:w-full">
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Contact</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Support/Help</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">FAQ</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Terms and Condition</Link>
                                <Link href={""} className="w-full h-[37px] py-2 max-[428px]:text-center">Partners</Link>
                            </div>
                        </div>
                    </div>

                    {/* Here all the credits will go */}
                    <div className="flex items-end w-full h-[57px] border-t-2 border-black max-[428px]:w-full max-[428px]:h-[147px]">
                        <div className="flex justify-between w-full h-6 max-[428px]:w-full max-[428px]:h-[114px] max-[428px]:flex-col max-[428px]:items-center">

                            {/* credits here */}
                            <div className="flex gap-6 w-[564px] h-[21px] max-[428px]:w-[345px] max-[428px]:h-[66px] max-[428px]:flex-col max-[428px]:items-center">
                                <h6 className={`text-[14px] leading-[21px] w-[195px] h-full`}>2023 Ddsgnr. All right reserved.</h6>
                                <div className="flex gap-6 w-[564px] h-[21px] max-[428px]:w-[345px] max-[428px]:h-[66px]">
                                    <Link href={""} className={`text-[14px] leading-[21px] underline`}>Privacy Policy</Link>
                                    <Link href={""} className={`text-[14px] leading-[21px] underline`}>Terms of Service</Link>
                                    <Link href={""} className={`text-[14px] leading-[21px] underline`}>Cookies Settings</Link>
                                </div>
                            </div>

                            {/* social media icons here */}
                            <div className="flex gap-3 w-[132px] h-[24px]">
                                <FaFacebookF className="size-6"/>
                                <FaTwitter className="size-6"/>
                                <FaInstagram className="size-6"/>
                                <FaLinkedin className="size-6"/>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Fragment>
    )
}

export default Footer;