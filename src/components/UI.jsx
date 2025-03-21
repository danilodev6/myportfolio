import { useAtom, atom } from "jotai";

export const currentPageAtom = atom("intro");

export const UI = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500
      ${currentPage === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[66%]"></div>
        <button
          onClick={() => setCurrentPage("hero")}
          className="pointer-events-auto py-4 px-8 bg-gradient-to-r from-purple1 to-purple3 hover:scale-[1.2] text-white font-black rounded-full cursor-pointer transitions duration-500"
        >
          MY ROOM
        </button>
      </section>
    </div>
  );
};
