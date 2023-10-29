import { designSection } from "../data/constant";
import assets1 from "../assets/images/furniture1.jpg";
import assets2 from "../assets/images/furniture2.jpg";
import assets3 from "../assets/images/furniture3.jpg";
import Button from "../components/Button";

const About = () => {
	return (
		<div className="mx-8 md:mx-20 lg:mx-64">
			<div className="font-bold text-xl pt-6 pb-10 md:text-2xl lg:text-4xl lg:pt-24 lg:pb-20">
				We Design Beautiful Hotels
			</div>
			<div className="text-center flex flex-col gap-6 md:gap-4 md:flex-row lg:gap-10">
				{designSection.map(
					({ IconDesign, iconName, iconDesc }, index) => (
						<div
							key={index}
							className="group relative cursor-pointer"
							style={{ transformOrigin: "top center" }}
						>
							<div className="border-2 border-slate-500 shadow-xl rounded-md px-8 py-12 md:px-4 md:py-6 lg:px-10 lg:py-16 group-hover:scale-105 group-hover:transition-all group-hover:ease-in-out group-hover:border-dotted group-hover:border-4 group-hover:border-emerald-500 group-hover:bg-[#FFC741] duration-500">
								<div className="">
									<div className="flex justify-center mb-2">
										<div className="p-3 rounded-full bg-[#FFC741] group-hover:bg-white group-hover:text-[#FFC741]">
											<IconDesign size="22" />
										</div>
									</div>
									<h2 className="py-2 text-base md:text-sm lg:text-xl group-hover:font-bold group-hover:text-white">
										{iconName}
									</h2>
									<p className="py-2 text-sm md:text-xs lg:text-base group-hover:text-white">
										{iconDesc}
									</p>
								</div>
							</div>
						</div>
					)
				)}
			</div>
			<div className="mt-24 lg:mt-40">
				<div className="flex flex-col gap-6 ">
					<div className="flex flex-col gap-6 md:flex-row">
						<div>
							<img src={assets1} alt="Assets 1" />
						</div>
						<div>
							<img src={assets2} alt="Assets 2" />
						</div>
					</div>
					<div className="flex flex-col gap-6 md:flex-row">
						<div>
							<img src={assets3} alt="Assets 3" />
						</div>
						<div className="border-2 border-slate-400 bg-white rounded-lg shadow-xl md:-mt-16 md:w-[1500px] lg:w-[1350px] lg:-mt-32">
							<h2 className="text-center underline text-lg my-6 lg:text-3xl lg:my-16">
								Decorating Ideas
							</h2>
							<p className="mx-6 text-xs mb-2 lg:text-xl lg:mx-20 lg:mb-10">
								`Get amazing home decoration ideas with our tips
								and tricks! Discover inspiration for minimalist,
								vintage, modern, and many other styles. Make
								your room beautiful and comfortable with
								creative and unique decorations. Start
								decorating your home today with our interesting
								ideas.`
							</p>
							<Button>Join Us</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
