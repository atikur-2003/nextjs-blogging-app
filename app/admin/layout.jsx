import Sidebar from "@/components/adminComponents/Sidebar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Layout({ children }) {
  return (
    <>
      <div className="flex gap-0 md:gap-3 lg:gap-7">
        <ToastContainer></ToastContainer>
        <Sidebar></Sidebar>
        {children}
      </div>
    </>
  );
}
