"use client"
import Link from "next/link";

export default function NavBar(){
    return(
        <div className="navbar px-0 space-x-2">
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1 ">
                    <li>
                        <Link 
                            href="/how-thongoland-works"
                            className="text-txtColr text-base"
                        >
                            How Thongo land Works
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/about-us"
                            className="text-txtColr text-base"
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className="text-txtColr text-base"
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link
                    href="/sign-up"
                    className="btn btn-block text-buttonTxtColr"
                >
                    Get Started
                </Link>
            </div>   
        </div>
    )
}