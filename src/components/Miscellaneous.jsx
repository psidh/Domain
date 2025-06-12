import Blogs from "./Blogs";
import ComingSoon from "./ComingSoon";
import TechStack from "./TechStack";

export default function Miscellaneous() {
  return (
    <div className="flex mt-2 p-2 flex-col lg:w-[1/3] gap-14 lg:gap-6 lg:h-[65vh] overflow-y-auto">
      <Blogs />
      <TechStack />
      <ComingSoon />
    </div>
  );
}
