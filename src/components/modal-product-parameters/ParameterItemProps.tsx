import DataModel from "../../models/DataModel";

export interface ParameterItemProps {
  property: DataModel;
  assignFunc: (key: string, value: any) => void;
}
