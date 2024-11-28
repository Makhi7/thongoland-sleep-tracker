import Link from "next/link";

export default function Footer(){
    return(
        <footer className="footer py-[72px]">
            <nav>
                <h4 className="footer-title text-headingTxtColr">Services</h4>
                <Link href="#"
                className="link link-hover text-txtColr">Branding</Link>
                <Link href="#"
                className="link link-hover text-txtColr">Design</Link>
                <Link href="#"
                className="link link-hover text-txtColr">Marketing</Link>
                <Link href="#"
                className="link link-hover text-txtColr">Advertising</Link>
                
            </nav>
            <nav>
                <h4 className="footer-title text-headingTxtColr">Company</h4>
                <Link href="#"
                className="link link-hover text-txtColr">About us</Link>
                <Link href="#"
                className="link link-hover text-txtColr">Contact</Link>
                <Link href="#"
                className="link link-hover text-txtColr">Jobs</Link>
                <Link href="#"
                className="link link-hover text-txtColr">Press kit</Link>
                
            </nav>
            <nav>
                <h4 className="footer-title text-headingTxtColr">Legal</h4>
                <Link href="#"
                className="link link-hover text-txtColr">Terms of use</Link>
                <Link href="#"
                className="link link-hover text-txtColr">Privacy policy</Link>
                <Link href="#"
                className="link link-hover text-txtColr">Cookie policy</Link>
            </nav>
        </footer>
    )
}