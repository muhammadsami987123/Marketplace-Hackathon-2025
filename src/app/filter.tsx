import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react"
import { FC } from "react"

interface FilterInterfaceProps {
  totalResults: number
  itemsPerPage: number
  onItemsPerPageChange: (value: number) => void
  sortOption: string
  onSortOptionChange: (value: string) => void
  onFilterClick: () => void
}

const FilterInterface: FC<FilterInterfaceProps> = ({
  totalResults,
  itemsPerPage,
  onItemsPerPageChange,
  sortOption,
  onSortOptionChange,
  onFilterClick,
}) => {
  return (
    <div className="p-4 bg-[#FDF8F6] flex flex-col gap-4 rounded-md sm:flex-row sm:items-center sm:justify-between">
      {/* Left section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Button
          variant="ghost"
          className="text-gray-700 hover:bg-gray-100 px-2"
          onClick={onFilterClick}
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filter
        </Button>

        <div className="flex border-l pl-4 border-gray-200 gap-2">
          <Button variant="ghost" size="icon" className="text-gray-700 hover:bg-gray-100">
            <LayoutGrid className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700 hover:bg-gray-100">
            <List className="w-4 h-4" />
          </Button>
        </div>

        <span className="text-sm text-gray-600">
          Showing 1-{itemsPerPage} of {totalResults} results
        </span>
      </div>

      {/* Right section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 whitespace-nowrap">Show</span>
          <Select
            value={String(itemsPerPage)}
            onValueChange={(value) => onItemsPerPageChange(Number(value))}
          >
            <SelectTrigger className="w-20 bg-transparent border-gray-300 text-sm">
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
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 whitespace-nowrap">Sort by</span>
          <Select value={sortOption} onValueChange={onSortOptionChange}>
            <SelectTrigger className="w-32 bg-transparent border-gray-300 text-sm">
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
  )
}

export default FilterInterface
