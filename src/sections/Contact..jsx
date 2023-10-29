const Contact = () => {
	return (
		<div className="container mx-auto text-center mt-24 md:mt-80 lg:mt-[470px]">
			<div className="mx-10 md:mx-28 lg:mx-[400px]">
				<h2 className="text-lg font-bold md:text-2xl lg:text-4xl">
					DON`T FORGET TO SIGN UP
				</h2>
				<div className="w-full h-[2px] bg-slate-500 my-4 md:w-80 md:mx-auto lg:w-[480px]"></div>
				<p className="text-sm text-slate-800 pt-4 lg:text-lg ">
					`Unlock exclusive perks by signing up today! Dont miss out
					on our offers.`
				</p>
				<div className="flex text-white text-sm my-10 rounded-tl-2xl rounded-br-2xl overflow-hidden lg:text-xl">
					<input
						type="text"
						placeholder="Write your email..."
						className="w-2/3 bg-slate-300 px-3 lg:px-10"
					/>
					<button
						type="submit"
						className="w-1/3 py-2 bg-[#FFC741] lg:py-3"
					>
						SIGN UP
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
