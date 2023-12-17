import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";
import Tickets from "./pages/admin/Tickets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreerBon from "./pages/bon/CreerBon";
import ListUsers from "./pages/auth/ListUsers";
import AddUser from "./pages/auth/AddUser";
import UpdUser from "./pages/auth/UpdUser";
import ListBons from "./pages/bon/ListBons";
import Details from "./pages/bon/Details";
import UpdBon from "./pages/bon/UpdBon";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        autoClose={3000}
        position={"top-center"}
        hideProgressBar={true}
      />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/olvide-password" element={<ForgetPassword />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="users" element={<ListUsers />} />
          <Route path="ajoute-user" element={<AddUser />} />
          <Route path="changer-user/:id" element={<UpdUser />} />

          <Route path="perfil" element={<Profile />} />
          <Route path="perfil/:id" element={<Profile />} />
          <Route path="creer-bon-bagage" element={<CreerBon />} />
          <Route path="list-bon-bagage" element={<ListBons />} />
          <Route path="details-bon/:id" element={<Details />} />
          <Route path="changer-bon/:id" element={<UpdBon />} />

          <Route path="chat" element={<Chat />} />
          <Route path="tickets" element={<Tickets />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
