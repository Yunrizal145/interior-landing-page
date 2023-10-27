import useScroll from "../utils/useScroll";
import logoImage from "../assets/images/logo.png";
import Navbar from "../components/Navbar";

const Header = () => {
	const scrolled = useScroll();

	return (
		<header
			className={`w-full fixed z-20 ${
				scrolled
					? "bg-opacity-30 backdrop-blur-md h-16 -mt-3 lg:h-28"
					: ""
			} transition-all duration-500`}
		>
			<div className="mx-auto">
				<div className="flex items-center justify-between relative">
					<div className="w-[115px] mx-6 pr-10 py-6 md:w-[130px] lg:py-4 lg:w-[300px] lg:px-[70px]">
						<a href="#" className="block">
							<img src={logoImage} alt="Logo" />
						</a>
					</div>
					<div className="mr-32 lg:w-full">
						<Navbar />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
