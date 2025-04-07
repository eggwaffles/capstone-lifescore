import { FormData } from "../context/FormDataContext";

export const handleMultipleChoiceSelect = (
  selected: string,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  setFormData((prev) => ({
    ...prev,
    favoriteColor: { ...prev.favoriteColor, value: selected },
  }));
};