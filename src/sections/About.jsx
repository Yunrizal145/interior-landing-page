import { designSection } from "../data/constant";

const About = () => {
	return (
		<div className="mx-8 md:mx-20 lg:mx-64 mb-96">
			<div className="font-bold text-xl pt-6 pb-10 md:text-2xl lg:text-4xl lg:pt-24 lg:pb-20">
				We Design Beautiful Hotels
			</div>
			<div className="text-center flex flex-col gap-6 md:gap-4 md:flex-row lg:gap-10">
				{designSection.map(
					({ IconDesign, iconName, iconDesc }, index) => (
						<div
							key={index}
							className="group relative cursor-pointer"
						>
							<div className="border-2 border-slate-500 shadow-xl rounded-md px-8 py-12 md:px-4 md:py-6 lg:px-10 lg:py-16 group-hover:scale-110 group-hover:border-dotted group-hover:border-4 group-hover:border-emerald-500 group-hover:bg-[#FFC741] duration-500">
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
					)
				)}
			</div>
		</div>
	);
};

export default About;
