import CategoryModel from "../../models/CategoryModel";
import DataOfDropdown from "../../models/DataOfDropdown";

const CategoryMapper = (categories: CategoryModel[]) => {
  const arrayData = Array<DataOfDropdown>();
  arrayData.length = 0;

  for (let category of categories) {
    arrayData.push(
      Object.create({
        label: category?.name,
        value: category?.id,
      })
    );
  }

  return arrayData;
};

export default CategoryMapper;
