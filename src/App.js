import { RouterProvider } from "react-router-dom";
import ParticleBackground from "./Pages/BG/ParticleBackground";
import router from './Router/Router/Router'

function App() {
  return (
    <div className=" text-[#CCD6F6] h-full">
      <ParticleBackground />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
