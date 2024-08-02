import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
const Welcome = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  // const [userName, setUserName] = useState("");
  const { userName } = currentUser;
  return (
    <>
      <div className="wrapper w-full h-screen flex flex-col items-center  ">
        <Navbar />
        <div className="container w-[80%] mt-24 flex flex-col justify-center items-center gap-10">
          <h1 className="text-4xl font-medium">
            Welcome <span className="text-red-500"> {userName}</span> To MERN
            Authentication app{" "}
          </h1>
          <div className="para w-[80%] text-justify flex flex-col gap-4">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              voluptatem rerum temporibus quae placeat? Sapiente consequuntur
              repudiandae beatae odio voluptatem unde corrupti, repellendus
              temporibus aliquam, facere rem perspiciatis debitis ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis error suscipit laborum, veritatis saepe quod iste natus
              iure rem eius autem enim omnis corrupti, sint aspernatur neque
              minima ipsam recusandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              doloremque dolorum laboriosam blanditiis sint minus iste nesciunt
              beatae totam, incidunt quaerat sunt et eius aspernatur odit
              ratione amet nisi nihil? Facilis fugiat sunt reprehenderit alias
              velit vitae obcaecati natus autem!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
