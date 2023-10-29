import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="w-full bg-slate-100 lg:px-16 ">
			<div className="mx-10 mt-20 md:flex md:justify-between md:mt-24 md:mx-20 lg:mt-40 lg:mx-80 lg:pt-6">
				<div className="w-1/2 pt-10  gap-10 flex items-center justify-between md:justify-normal md:gap-20 lg:gap-32">
					{/* Sosmed */}
					<div className="text-white">
						<div className="flex gap-2">
							<div className="p-2 bg-slate-300 rounded-full hover:bg-[#FFC741] cursor-pointer lg:p-4">
								<FaFacebookF size="25" />
							</div>
							<div className="p-2 bg-slate-300 rounded-full hover:bg-[#FFC741] cursor-pointer lg:p-4">
								<FaInstagram size="25" />
							</div>
							<div className="p-2 bg-slate-300 rounded-full hover:bg-[#FFC741] cursor-pointer lg:p-4">
								<FaLinkedin size="25" />
							</div>
						</div>
					</div>

					{/* Link 1 */}
					<div>
						<h1 className="pb-6 font-bold lg:text-2xl">Links</h1>
						<ul className="text-sm cursor-pointer lg:text-xl">
							<li className="pb-2 hover:text-slate-400">Home</li>
							<li className="pb-2 hover:text-slate-400">About</li>
							<li className="pb-2 hover:text-slate-400">
								Careers
							</li>
							<li className="pb-2 hover:text-slate-400">
								Contact
							</li>
							<li className="pb-2 hover:text-slate-400">
								Join Us
							</li>
						</ul>
					</div>
				</div>
				<div className="w-1/2  gap-24 pt-10 flex justify-between md:justify-normal md:pl-12 md:gap-16 lg:pl-8 lg:gap-44">
					{/* Link 2 */}
					<div>
						<h1 className="pb-6 font-bold lg:text-2xl">Company</h1>
						<ul className="text-sm cursor-pointer lg:text-xl">
							<li className="pb-2 hover:text-slate-400">
								Developers
							</li>
							<li className="pb-2 hover:text-slate-400">
								Advertisers
							</li>
							<li className="pb-2 hover:text-slate-400">
								Partners
							</li>
							<li className="pb-2 hover:text-slate-400">
								Post a Job
							</li>
							<li className="pb-2 hover:text-slate-400">
								Help Us
							</li>
						</ul>
					</div>
					{/* Link 3 */}
					<div>
						<h1 className="pb-6 font-bold lg:text-2xl">Support</h1>
						<ul className="text-sm cursor-pointer lg:text-xl">
							<li className="pb-2 hover:text-slate-400">
								Term of Service{" "}
							</li>
							<li className="pb-2 hover:text-slate-400">Legal</li>
							<li className="pb-2 hover:text-slate-400">
								Privacy Policy
							</li>
							<li className="pb-2 hover:text-slate-400">
								Status
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="text-center text-xs text-slate-700 pt-14 pb-6 lg:text-lg lg:pt-20 lg:pb-8">
				&copy; 2023 Furniture and Interior Design. All rights reserved
			</div>
		</footer>
	);
};

export default Footer;
