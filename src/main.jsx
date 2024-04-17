import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/index.css";
import "./styles/customize-progress-bar.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				path: "",
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
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
