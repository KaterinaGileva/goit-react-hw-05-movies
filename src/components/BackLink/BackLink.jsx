import { HiArrowLeft } from "react-icons/hi";


export const BackLink = ({ children }) => {
  return (
    <>
      <HiArrowLeft size="24" />
      {children}
    </>
  );
};