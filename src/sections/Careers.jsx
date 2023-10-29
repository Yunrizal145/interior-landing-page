import Button from "../components/Button";
import { careerSection } from "../data/constant";

const Careers = () => {
	return (
		<>
			<div className="mx-8 md:mx-20 lg:mx-64">
				<div className="mt-20 lg:mt-32">
					<h2 className="text-lg font-bold mb-6 lg:text-4xl">
						We are driven to inspire our clients
					</h2>
					<p className="text-sm text-slate-600 lg:text-xl lg:w-[750px]">
						We are ready to provide the best inspiration for our
						clients. Our priority is to inspire clients with
						creative and unique solutions to achieve their goals.
					</p>
				</div>
			</div>
			<div className="mt-12 md:bg-[rgb(255,199,65)] md:mt-28 md:h-32 md:relative lg:mt-48">
				<div className="mx-8 flex flex-col gap-8 md:flex-row md:mx-20 md:my-20 md:absolute md:-top-32 lg:-top-48 lg:mx-64 lg:justify-between">
					{careerSection.map(
						({ furnitureImg, furnitureDesc }, index) => (
							<div
								key={index}
								className="group relative cursor-pointer"
							>
								<div className="p-4 bg-white rounded-lg shadow-xl border border-slate-300 group-hover:-translate-y-5 md:group-hover:-translate-y-14 group-hover:transition-transform duration-500 lg:p-6 ">
									<div className="rounded-lg overflow-hidden">
										<img
											src={furnitureImg}
											alt="Furniture 4"
											className="w-full h-36 md:h-28 lg:h-60"
										/>
									</div>
									<p className="text-xs my-6 lg:text-lg">
										`{furnitureDesc}`
									</p>
									<Button>Create Design</Button>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</>
	);
};

export default Careers;
