import { categoryList } from "@/config/restaurant-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
    onChange: (categories: string[]) => void;
    selectedCategories: string[];
    isExpanded: boolean;
    onExpandedClick: () => void;
};

const CategoryFilter = ({
    onChange,
    selectedCategories,
    isExpanded,
    onExpandedClick,
}: Props) => {
    const handleCategoriesChange = (event: ChangeEvent<HTMLInputElement>) => {
        const clickedCategory = event.target.value;
        const isChecked = event.target.checked;

        const newCategoriesList = isChecked
            ? [...selectedCategories, clickedCategory]
            : selectedCategories.filter((category) => category !== clickedCategory);

        onChange(newCategoriesList);
    };

    const handleCategoriesReset = () => onChange([]);

    return (
        <>
            <div className="flex justify-between items-center px-2">
                <div className="text-md font-semibold mb-2">Filter By Category</div>
                <div
                    onClick={handleCategoriesReset}
                    className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
                >
                    Reset Filters
                </div>
            </div>

            <div className="space-y-2 flex flex-col">
                {categoryList
                    .slice(0, isExpanded ? categoryList.length : 7)
                    .map((category) => {
                        const isSelected = selectedCategories.includes(category);
                        return (
                            <div className="flex">
                                <input
                                    id={`category_${category}`}
                                    type="checkbox"
                                    className="hidden"
                                    value={category}
                                    checked={isSelected}
                                    onChange={handleCategoriesChange}
                                />
                                <Label
                                    htmlFor={`category_${category}`}
                                    className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${isSelected
                                            ? "border border-green-600 text-green-600"
                                            : "border border-slate-300"
                                        }`}
                                >
                                    {isSelected && <Check size={20} strokeWidth={3} />}
                                    {category}
                                </Label>
                            </div>
                        );
                    })}

                <Button
                    onClick={onExpandedClick}
                    variant="link"
                    className="mt-4 flex-1"
                >
                    {isExpanded ? (
                        <span className="flex flex-row items-center">
                            View Less <ChevronUp />
                        </span>
                    ) : (
                        <span className="flex flex-row items-center">
                            View More <ChevronDown />
                        </span>
                    )}
                </Button>
            </div>
        </>
    );
};

export default CategoryFilter;
