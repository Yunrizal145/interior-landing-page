import About from "../sections/About";
import Careers from "../sections/Careers";
import Contact from "../sections/Contact.";
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
			<div className="mt-10">
				<Careers />
			</div>
			<div className="mt-10">
				<Contact />
			</div>
		</>
	);
};

export default MainContent;
