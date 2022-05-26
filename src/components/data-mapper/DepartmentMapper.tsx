import DataOfDropdown from "../../models/DataOfDropdown";
import DepartmentModel from "../../models/DepartmentModel";

const DepartmentMapper = (departments: DepartmentModel[]) => {
  const arrayData = Array<DataOfDropdown>();
  arrayData.length = 0;

  for (let department of departments) {
    arrayData.push(
      Object.create({
        label: department?.name,
        value: department?.id,
      })
    );
  }

  return arrayData;
};

export default DepartmentMapper;
