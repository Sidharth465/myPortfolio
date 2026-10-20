// write a post and get api funtion using fetch

export const postContactData = async (data: Record<string, unknown>) => {
  const url = `https://api.web3forms.com/submit`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  return result;
};

export const fetchResume = () => {
  const url =
    "https://drive.google.com/uc?export=download&id=1OpYE1Iyizt2yGmoZMyeEUOJTB3F-v0Av";
  window.open(url, "_blank", "noopener,noreferrer");
};
