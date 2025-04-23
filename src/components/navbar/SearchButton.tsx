
import React from "react";
import { Search } from "lucide-react";

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors dark:bg-white/5 dark:hover:bg-white/10"
      aria-label="Search"
    >
      <Search size={18} className="text-primary dark:text-white" />
    </button>
  );
};

export default SearchButton;
