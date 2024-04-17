import React from "react";
import { tracks } from "../data/tracks";

const TrackList = () => {
	return (
		<div>
			<h1 className="items-center text-2xl w-full">Tracks List</h1>
			{tracks.map((item) => {
				return (
					<div key={item.src}>
						<ul>
							<li> * {item?.title}</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default TrackList;
