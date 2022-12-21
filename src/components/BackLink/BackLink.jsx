import { HiArrowLeft } from "react-icons/hi";


export const BackLink = ({ to, children }) => {
  return (
    <>
      <HiArrowLeft size="24" />
      {children}
    </>
  );
};