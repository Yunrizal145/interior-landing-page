// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
	return (
		<div className="w-40 mx-auto mb-8 px-6 py-2 text-center text-white bg-[#FFC741] hover:bg-transparent border border-[#FFC741] rounded-tl-3xl rounded-br-3xl mt-5 font-bold text-base cursor-pointer hover:text-[#FFC741] lg:mt-0 lg:text-xl lg:px-8 lg:py-3 lg:hover:text-[#FFC741] lg:w-52 duration-300">
			{children}
		</div>
	);
}
