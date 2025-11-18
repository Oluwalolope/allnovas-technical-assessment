import { useRef, type FormEvent } from "react";

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchQuery = searchRef.current?.value;

    if (!searchQuery || searchQuery!.trim() === '') {
      return
    }
    window.alert(`You searched for: ${searchQuery}`);
  };

  const POPULAR_SEARCHES: string[] = [
    "graphic design",
    "web development",
    "programming",
    "UI/UX design",
    "presentation design",
    "video editing",
  ];

  return (
    <>
      <form
        onSubmit={(event) => handleSearch(event)}
        className="flex justify-center"
      >
        <div className="bg-neutral-color w-[493px] rounded-[40px] mt-[26px] py-4 px-5 box-border inline-flex justify-between items-center mx-auto font-medium text-[14px]">
          <input
            ref={searchRef}
            type="text"
            name="search"
            id="search"
            placeholder="What are you looking for?"
            className="outline-none w-[80%]"
          />
          <button title="search" className="bg-primary-color text-white hover:bg-white hover:text-primary-color size-10 rounded-full inline-grid place-items-center transition-all duration-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </form>

      <div className="flex flex-col md:flex-row gap-2 mt-10 mx-auto">
        <p className="text-[18px] font-normal text-secondary-text text-center md:text-start whitespace-nowrap">
          Popular search:
        </p>
        <div className="flex flex-row gap-2 items-center flex-wrap">
          {POPULAR_SEARCHES.map((popularSearch, index) => (
            <button
              key={index}
              type="button"
              className="bg-neutral-color rounded-[40px] min-h-10 py-1 px-4 text-[14px] font-medium capitalize cursor-pointer hover:scale-105 transition-all duration-200"
            >
              {popularSearch}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
