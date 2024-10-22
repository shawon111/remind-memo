import { SlSocialFacebook } from "react-icons/sl";
import { PiInstagramLogo } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";

const Footer = () => {
    return (
        <footer className="dark-bg py-[28px]">
            <div className="container mx-auto px-2 lg:px-0">
                <div className="flex items-center flex-wrap gap-4 md:gap-5 lg:gap-0">
                    <div className="logo w-full lg:w-3/12">
                        <h3 className="text-xl font-bold text-white text-center lg:text-start"><span className="brand-bg px-[8px] pb-[6px] pt-[3px] rounded">Memory</span> Mate</h3>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <p className="text-slate-300 text-sm tajawal text-center">
                            © 2024 Memory Mate. Design & Develop by Shawon Ahmmed.
                        </p>
                    </div>
                    <div className="w-full lg:w-3/12">
                        <div className="flex justify-center lg:justify-end gap-1">
                            <a className="social-icon" href="#" target="_blank">
                                <PiInstagramLogo className="text-white border border-slate-600 p-[5px] rounded " size={28} />
                            </a>
                            <a className="social-icon" href="#" target="_blank">
                                <SlSocialFacebook className="text-white border border-slate-600 p-[5px] rounded " size={28} />
                            </a>
                            <a className="social-icon" href="#" target="_blank">
                                <FiTwitter className="text-white border border-slate-600 p-[5px] rounded " size={28} />
                            </a>
                            <a className="social-icon" href="#" target="_blank">
                                <HiOutlineEnvelope className="text-white border border-slate-600 p-[5px] rounded " size={28} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;