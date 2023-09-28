import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserAuthentication from './pages/UserAuthentication.js';
import QuestionPage from './pages/QuestionPage.js';
import UserProfilePage from './pages/UserProfilePage.js';
import HistoryPage from "./pages/HistoryPage.js";
import MorePage from "./pages/MorePage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserAuthentication />
  },
  {
    path: "home",
    element: <QuestionPage />
  },
  {
    path: "profile",
    element: <UserProfilePage />
  },
  {
    path: "history",
    element: <HistoryPage />
  },
  {
    path: "more",
    element: <MorePage />
  }
]);

export default router;