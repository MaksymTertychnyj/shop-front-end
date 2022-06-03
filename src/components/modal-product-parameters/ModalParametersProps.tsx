import CategoryModel from "../../models/CategoryModel";

export interface ModalParametersProps {
  visible: boolean;
  closeModal: (state: boolean) => void;
  categoryId: number;
  setParameters: (paramString: string) => void;
}
