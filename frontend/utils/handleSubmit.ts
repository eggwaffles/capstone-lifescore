import { FormData } from "../context/FormDataContext";

export const handleSubmit = async (formData: FormData) => {
  console.log("Form Data:", formData);

  try {
    const response = await fetch("http://localhost:5000/process-success-score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Response from server:", data.message);
    } else {
      console.error("Failed to send data to the backend");
    }
  } catch (error) {
    console.error("Error during fetch:", error);
  }
};