import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Feed from "../pages/Feed";
import AskDoubt from "../pages/AskDoubt";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Feed /> },
      { path: "ask", element: <AskDoubt /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
