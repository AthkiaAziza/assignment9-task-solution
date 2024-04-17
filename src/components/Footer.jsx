import { FaSlackHash, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-700 text-white mt-16 font-semibold">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-gray-700 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <FaSlackHash className="text-4xl text-white"></FaSlackHash>
                    <p className="text-white text-lg font-bold">Azure Bay Deluxe<br />Providing reliable services since 1992</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <FaTwitter className="text-4xl text-white"></FaTwitter>
                        <IoLogoYoutube className="text-4xl text-white"></IoLogoYoutube>
                        <FaFacebookF className="text-4xl text-white"></FaFacebookF>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;