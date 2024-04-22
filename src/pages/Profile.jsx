import React from "react";
import { FaArrowLeft, FaChevronRight, FaLocationDot } from "react-icons/fa6";
import {
	MdDeleteOutline,
	MdOutlinePayment,
	MdOutlineSecurity,
} from "react-icons/md";
import {
	IoLockOpenOutline,
	IoLockClosedOutline,
	IoLanguage,
} from "react-icons/io5";

import { FiEdit } from "react-icons/fi";
import vector from "../data/vector.jpeg";
import { Link } from "react-router-dom";
import { NavBar} from 'antd-mobile'
import BottomNav from "../components/BottomNav";

const Profile = () => {
	return (
		<div className="bg-white text-black pb-10 sm:pb-24">

			<div>
				
				<div className="flex items-center justify-evenly text-3xl py-8 gap-3" style={{
					flexDirection:"row-reverse"
				}}>
			
					<img src={vector} alt="" className="h-16 w-16 rounded-full" />
					<div>
						<p className="font-semibold">Virat Kohli</p>
						<div className="text-lg flex items-center gap-2">

							<FaLocationDot />
							<span className="">Uttar Pradesh, India</span>
						</div>
					</div>
					<div style={{
						gap:"1rem",
						display:"flex", flexDirection:"column"
					}}>
					

					<Link onClick={()=>{
						history.back()
					}}>
						<div>
						<FaArrowLeft />
						</div>
					</Link>
					<Link to={"/edit-profile"}>
						<div>
							<FiEdit />
						</div>
					</Link>
					</div>

				</div>
				<div className="mt-5">
					<p className="text-lg ml-4 mt-3">Personal Info</p>
					<div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<FaLocationDot />
								<p>My Address</p>
							</div>
							<FaChevronRight />
						</div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<MdOutlinePayment />
								<p>Payment Method</p>
							</div>
							<FaChevronRight />
						</div>
					</div>
				</div>
				<div className="mt-5">
					<p className="text-lg ml-4 mt-3">Security</p>
					<div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<IoLockOpenOutline />
								<p>Change Password</p>
							</div>
							<FaChevronRight />
						</div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<IoLockClosedOutline />
								<p>Forget Password</p>
							</div>
							<FaChevronRight />
						</div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<MdOutlineSecurity />
								<p>Security</p>
							</div>
							<FaChevronRight />
						</div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<MdOutlinePayment />
								<p>Notifications</p>
							</div>
							<FaChevronRight />
						</div>
					</div>
				</div>
				<div className="mt-5">
					<p className="text-lg ml-4 mt-3">General </p>
					<div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<IoLanguage />
								<p>Language</p>
							</div>
							<FaChevronRight />
						</div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<MdDeleteOutline />
								<p>Clear Cache</p>
							</div>
							<FaChevronRight />
						</div>
					</div>
				</div>
				<div className="mt-5">
					<p className="text-lg ml-4 mt-3">About</p>
					<div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<IoLanguage />
								<p>Legal & Policies</p>
							</div>
							<FaChevronRight />
						</div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<MdDeleteOutline />
								<p>Help & Support</p>
							</div>
							<FaChevronRight />
						</div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<MdDeleteOutline />
								<p>Dark Mode</p>
							</div>
							<FaChevronRight />
						</div>
					</div>
					<div className="text-center text-4xl mt-6">
						<button className="bg-blue-600 text-white px-16 rounded-full py-3">
							Logout
						</button>
					</div>
				</div>
			</div>
			<BottomNav path="edit"/>

		</div>
		
	);
};

export default Profile;
