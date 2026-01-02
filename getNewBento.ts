const apiUrl = "https://opbento.vercel.app/api/bento?n=Anuj%20Shrivastava&g=AnujShrivastava01&x=itsanujs01&l=anujshrivastava1&i=https%3A%2F%2Fres.cloudinary.com%2Fdezdit3jt%2Fimage%2Fupload%2Fv1767354347%2FUntitled_design_22_czxmqy.png&p=anujshrivastava.tech&z=58fcb";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
