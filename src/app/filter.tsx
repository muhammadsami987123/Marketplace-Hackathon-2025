import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import { FC, useState } from "react";

interface FilterInterfaceProps {
  totalResults: number;
  itemsPerPage: number;
  onItemsPerPageChange: (value: number) => void;
  sortOption: string;
  onSortOptionChange: (value: string) => void;
  onFilterClick: () => void;
}

const FilterInterface: FC<FilterInterfaceProps> = ({
  totalResults,
  itemsPerPage,
  onItemsPerPageChange,
  sortOption,
  onSortOptionChange,
  onFilterClick,
}) => {
  const [isMobileFilterVisible] = useState(false);

  return (
    <div className="p-4 bg-[#FDF8F6] flex flex-col gap-4 rounded-lg md:flex-row md:items-center md:justify-between w-full shadow-md border border-gray-200">
      
      {/* Filter button for desktop (visible only on desktop) */}
      <div className="md:flex flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
        <Button
          variant="outline"
          className="text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center"
          onClick={onFilterClick}
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          Filter
        </Button>
      </div>

      {/* Filter section (always visible on desktop, toggleable on mobile) */}
      <div className={`w-full ${isMobileFilterVisible ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center gap-4`}>
        <div className="flex border-l pl-4 border-gray-300 gap-2 w-full sm:w-auto justify-center">
          <Button variant="outline" size="icon" className="text-gray-700 hover:bg-gray-200 rounded-lg flex items-center">
            <LayoutGrid className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="text-gray-700 hover:bg-gray-200 rounded-lg flex items-center">
            <List className="w-5 h-5" />
          </Button>
        </div>

        <span className="text-sm text-gray-600 w-full md:w-auto text-center md:text-left font-medium">
          Showing 1-{itemsPerPage} of {totalResults} results
        </span>
      </div>

      {/* Right section (always visible on desktop) */}
      <div className="w-full md:flex flex-col md:flex-row md:items-center gap-4 md:w-auto">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm text-gray-600 font-medium">Show</span>
          <Select
            value={String(itemsPerPage)}
            onValueChange={(value) => onItemsPerPageChange(Number(value))}
          >
            <SelectTrigger className="w-full sm:w-24 bg-white border-gray-300 text-sm rounded-lg">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="32">32</SelectItem>
              <SelectItem value="64">64</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto ">
          <span className="text-sm text-gray-600 font-medium">Sort by</span>
          <Select value={sortOption} onValueChange={onSortOptionChange}>
            <SelectTrigger className="w-full sm:w-36 bg-white border-gray-300 text-sm rounded-lg">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="price-asc">Price (Low-High)</SelectItem>
              <SelectItem value="price-desc">Price (High-Low)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterInterface;