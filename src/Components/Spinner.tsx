import BounceLoader from "react-spinners/BounceLoader";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <BounceLoader size={50} color="gray" />
    </div>
  );
}
