import Link from "next/link";

export default function NavBar(){
    return(
        <div className="navbar">
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link 
                            href="/"
                            className="text-txtColr text-base"
                        >
                            Home
                        </Link> 
                    </li>
                    <li>
                        <Link 
                            href="#"
                            className="text-txtColr text-base"
                        >
                            How Thongo land Works
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#"
                            className="text-txtColr text-base"
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="text-txtColr text-base"
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link
                    href="#"
                    className="btn btn-block text-buttonTxtColr"
                >
                    Get Started
                </Link>
            </div>   
        </div>
    )
}