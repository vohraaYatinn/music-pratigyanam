import React from "react";
import vector from "../data/vector.jpeg";
import image1 from "../data/image1.jpeg";
import { IoMdSearch } from "react-icons/io";

const Home = () => {
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
				<img src={image1} alt="" className=" rounded-xl h-48 ml-2" />
				<img src={image1} alt="" className=" rounded-xl h-48 " />
				<img src={image1} alt="" className=" rounded-xl h-48 " />
				<img src={image1} alt="" className=" rounded-xl h-48 mr-2" />
			</div>
			<div className="mt-5 flex items-center justify-between mx-3 ">
				<p className="text-3xl font-bold">Trending</p>
				<p className="text-xl text-gray-900">see all</p>
			</div>
			<div className="mt-3 flex overflow-x-scroll gap-4 ">
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
			</div>
			<div className="mt-3 flex overflow-x-scroll gap-4 ">
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
			</div>
			<div className="mt-5 flex items-center justify-between mx-3 ">
				<p className="text-3xl font-bold">Favorite</p>
				<p className="text-xl text-gray-900">see all</p>
			</div>
			<div className="mt-3 flex overflow-x-scroll gap-4 ">
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
				<img src={image1} alt="" className=" rounded-xl h-32 w-32 ml-2" />
			</div>
		</>
	);
};

export default Home;
