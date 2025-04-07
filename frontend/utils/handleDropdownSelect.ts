import { FormData } from "../context/FormDataContext";

export const handleDropdownSelect = (
  field: keyof FormData,
  selected: string,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  setFormData((prev) => ({
    ...prev,
    [field]: { ...prev[field], value: selected },
  }));
};