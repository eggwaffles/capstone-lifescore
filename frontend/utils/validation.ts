interface FormField {
  value: string;
  isValid: boolean;
  componentType: "TextInput" | "Dropdown" | "MultipleChoice"; // Add component type
  inputType?: "text" | "number"; // Optional: For TextInput, specify the input type
}

type FormData = Record<string, FormField>;

/**
 * Validates the form data based on the component type and input type.
 * @param formData The current form data to validate.
 * @returns The updated form data with validity flags.
 */
export const validateFormData = (formData: FormData): FormData => {
  const updatedFormData = { ...formData };

  Object.keys(updatedFormData).forEach((field) => {
    const { value, componentType, inputType } = updatedFormData[field];

    if (componentType === "Dropdown" || componentType === "MultipleChoice") {
      // Validate Dropdown and MultipleChoice: Ensure value is not empty
      updatedFormData[field].isValid = value.trim() !== "";
    } else if (componentType === "TextInput") {
      if (inputType === "number") {
        // Validate TextInput with type="number": Ensure value is a non-negative number
        updatedFormData[field].isValid = !isNaN(Number(value)) && Number(value) >= 0;
      } else if (inputType === "text") {
        // Validate TextInput with type="text": Ensure value is not empty
        updatedFormData[field].isValid = value.trim() !== "";
      }
    }
  });

  return updatedFormData;
};

/**
 * Checks if all fields in the form data are valid.
 * @param formData The form data to check.
 * @returns True if all fields are valid, false otherwise.
 */
export const isFormValid = (formData: FormData): boolean => {
  return Object.values(formData).every((field) => field.isValid);
};