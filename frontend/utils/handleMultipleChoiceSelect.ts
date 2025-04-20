import { FormData } from "../context/FormDataContext";

export const handleMultipleChoiceSelect = (
  field: keyof FormData,
  selected: string,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  setFormData((prev) => ({
    ...prev,
    [field]: { ...prev[field], value: selected },
  }));
};