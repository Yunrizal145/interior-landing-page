import Typewriter from "typewriter-effect";

const Home = () => {
	return (
		<>
			<div className="w-full h-screen bg-thumbnail bg-center bg-cover bg-no-repeat">
				<div className="w-full h-screen bg-gradient-to-br from-emerald-400 via-transparent to-transparent">
					<div className="w-60 mx-10 pt-40 text-white lg:w-[700px] lg:mx-52 lg:pt-64">
						<div className="text-3xl font-bold lg:text-6xl">
							<span className="">Interior</span>
							<div className="py-3 text-[#FFC741] lg:py-8">
								<Typewriter
									options={{
										strings: ["Modernization", "Clasical"],
										autoStart: true,
										loop: true,
									}}
								/>
							</div>
						</div>
						<p className="text-xs font-bold lg:text-lg">
							A design style that stays away from trends that are
							too now to avoid quickly dating Design that
							incorporates distinct style with a point of view
							drawing from history.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
