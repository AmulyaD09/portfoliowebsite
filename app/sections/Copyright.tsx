import Link from "next/link";

const Copyright = () => {
  return (
    <div className="  py-6  flex flex-col justify-center items-center font-medium text-base sm:text-lg border-t ">
      <p className=" text-center">
        
        <Link
          href={"https://github.com/Farouk-ayo/devfarouk"}
          className=" text-secondary-color-3   font-bold font-idgrotesk"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          
        </Link>{" "}
        ({" "}
        <Link
          href={"https://www.geekmaros.dev/"}
          className=" font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </Link>{" "}
        )
      </p>
      <div></div>
      <p className=" ">&copy; </p>
    </div>
  );
};
export default Copyright;
