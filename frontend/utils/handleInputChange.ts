import { FormData } from "../context/FormDataContext";

export const handleInputChange = (
  field: keyof FormData,
  value: string,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  setFormData((prev) => ({
    ...prev,
    [field]: { ...prev[field], value },
  }));
};