import { useState } from "react";

const Navbar = () => {
	const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
	const [isNavbarHidden, setIsNavbarHidden] = useState(true);

	const handleHamburgerClick = () => {
		setIsHamburgerClicked(!isHamburgerClicked);
		setIsNavbarHidden(!isNavbarHidden);
	};

	return (
		<div className="w-full flex items-center">
			<button
				id="hamburger"
				type="button"
				className={`hamburger ${
					isHamburgerClicked ? "hamburger-click" : ""
				} absolute right-4 mr-8 lg:hidden`}
				onClick={handleHamburgerClick}
			>
				<span className=" hamburger-costum transition duration-300 ease-in-out origin-top-right"></span>
				<span className=" hamburger-costum transition duration-300 ease-in-out"></span>
				<span className=" hamburger-costum transition duration-300 ease-in-out origin-bottom-right"></span>
			</button>
			<nav
				id="navbar"
				className={`navbar ${
					isNavbarHidden ? "hidden" : ""
				} w-full absolute py-4 shadow-lg rounded-bl-lg rounded-br-lg top-full lg:flex lg:gap-10 lg:justify-end lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none mt-2`}
			>
				<ul className="block text-slate-500 lg:flex lg:justify-end">
					<li className="group">
						<a
							href="#location"
							className="mx-4 flex py-3 text-base font-bold lg:text-xl hover:text-[#FFC741] hover:-translate-y-1 hover:duration-500"
						>
							HOME
						</a>
					</li>
					<li className="group">
						<a
							href="#about"
							className="mx-4 flex py-3 text-base font-bold lg:text-xl hover:text-[#FFC741] hover:-translate-y-1 hover:duration-500"
						>
							ABOUT
						</a>
					</li>
					<li className="group">
						<a
							href="#menu"
							className="mx-4 flex py-3 text-base font-bold lg:text-xl hover:text-[#FFC741] hover:-translate-y-1 hover:duration-500"
						>
							CAREERS
						</a>
					</li>
					<li className="group">
						<a
							href="#contact"
							className="mx-4 flex py-3 text-base font-bold lg:text-xl hover:text-[#FFC741] hover:-translate-y-1 hover:duration-500"
						>
							CONTACT
						</a>
					</li>
				</ul>
				<div className="mt-5 mx-4 font-bold text-base text-slate-500 cursor-pointer underline hover:text-[#FFC741] lg:mt-0 lg:text-xl lg:no-underline lg:px-8 lg:py-3 lg:text-white lg:border lg:border-[#FFC741] lg:rounded-tl-3xl lg:rounded-br-3xl lg:bg-[#FFC741] lg:hover:bg-transparent lg:hover:text-[#FFC741] duration-300">
					Join Us
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
