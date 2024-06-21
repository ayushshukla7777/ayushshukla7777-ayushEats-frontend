import {
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { categoryList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CategoryCheckbox from "./CategoryCheckbox";
import { log } from "console";

const CategorySelector = () => {
    const { control } = useFormContext();

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Categories</h2>
                <FormDescription>
                    Select the categories that your restaurant serves
                </FormDescription>
            </div>
            <FormField
                control={control}
                name="category"
                render={({ field }) => (
                    <FormItem>
                        <div className="grid md:grid-cols-5 gap-1">
                            {categoryList.map((categoryItem) => {
                                console.log("majnu", categoryItem, field);
                                return <h1>hello</h1>;
                })}
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default CategorySelector;