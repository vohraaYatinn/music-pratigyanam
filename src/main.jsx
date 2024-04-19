import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/index.css";
import "./styles/customize-progress-bar.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Home from "./pages/Home.jsx";
import Refer from "./pages/Refer.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "signup",
				element: <Signup />,
			},
			{
				path: "signin",
				element: <Signin />,
			},
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "refer-and-earn",
				element: <Refer />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
			{
				path: "edit-profile",
				element: <EditProfile />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
