import About from "../sections/About";
import Home from "../sections/Home";

const MainContent = () => {
	return (
		<>
			<div className="">
				<Home />
			</div>
			<div className="mt-10">
				<About />
			</div>
		</>
	);
};

export default MainContent;
