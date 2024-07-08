import NavBar from "@/components/common/NavBar";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mx-8 px-12 md:mx-[100px] pt-[70px] flex flex-col gap-4">
        <Pricing />
      </div>
    </main>
  );
}
