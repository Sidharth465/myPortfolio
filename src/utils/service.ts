// write a post and get api funtion using fetch

export const postContactData = async (endpoint: string, data: any) => {
  const url = `${import.meta.env.VITE_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let result = await response.json();

  return result;
};

export const fetchResume = (endpoint: string) => {
  const url = `${import.meta.env.VITE_BASE_URL}${endpoint}`;
  window.open(url, "_blank"); // This bypasses CORS
};
