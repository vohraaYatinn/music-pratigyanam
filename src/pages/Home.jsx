import React from "react";
import vector from "../data/vector.jpeg";
import image1 from "../data/thumbnails/image1.jpeg";
import image2 from "../data/thumbnails/image2.jpeg";
import image3 from "../data/thumbnails/image3.jpeg";
import image4 from "../data/thumbnails/image4.jpeg";
import image5 from "../data/thumbnails/image5.jpeg";
import image6 from "../data/thumbnails/image6.png";

import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const navigateTo = () => {
		navigate("/");
	};

	return (
		<>
			<div className="border-b text-center border-gray-400">
				<div className="flex gap-5 justify-between my-5 mx-3 items-center rounded-xl px-2 ">
					<div className="border-4 border-red-500 rounded-full">
						<img src={vector} alt="" className=" w-16 rounded-full" />
					</div>
					<div className="w-full">
						<p>Good Evening,</p>
						<p className="text-xl font-bold">Jhon Jhonsan.</p>
					</div>
				</div>
				<div className="mx-3 flex items-center border-black border py-2 px-4 rounded-lg mb-2">
					<input
						type="text"
						placeholder="Search song"
						className="outline-none w-full"
					/>
					<div className="text-3xl">
						<IoMdSearch />
					</div>
				</div>
			</div>
			<div className="mt-3 flex overflow-x-scroll gap-4 ">
				<img
					onClick={navigateTo}
					src={image1}
					alt=""
					className=" rounded-xl h-48 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image2}
					alt=""
					className=" rounded-xl h-48 "
				/>
				<img
					onClick={navigateTo}
					src={image3}
					alt=""
					className=" rounded-xl h-48 "
				/>
				<img
					onClick={navigateTo}
					src={image5}
					alt=""
					className=" rounded-xl h-48 mr-2"
				/>
			</div>
			<div className="mt-5 flex items-center justify-between mx-3 ">
				<p className="text-3xl font-bold">Trending</p>
				<p className="text-xl text-gray-900">see all</p>
			</div>
			<div className="mt-3 flex overflow-x-scroll gap-4 ">
				<img
					onClick={navigateTo}
					src={image5}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image4}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image3}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image2}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
			</div>
			<div className="mt-3 flex overflow-x-scroll gap-4 ">
				<img
					onClick={navigateTo}
					src={image2}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image3}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image4}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image5}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
			</div>
			<div className="mt-5 flex items-center justify-between mx-3 ">
				<p className="text-3xl font-bold">Favorite</p>
				<p className="text-xl text-gray-900">see all</p>
			</div>
			<div className="mt-3 flex overflow-x-scroll gap-4">
				<img
					onClick={navigateTo}
					src={image6}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image4}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image3}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image1}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
			</div>
			<div className="mt-3 flex overflow-x-scroll gap-4 mb-8">
				<img
					onClick={navigateTo}
					src={image1}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image2}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image3}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image4}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
			</div>
		</>
	);
};

export default Home;
