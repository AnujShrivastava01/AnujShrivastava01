const apiUrl = "https://opbento.vercel.app/api/bento?n=Anuj%20Shrivastava&g=AnujShrivastava01&x=itsanujs01&l=anujshrivastava1&i=https%3A%2F%2Fres.cloudinary.com%2Fdiofnc5dg%2Fimage%2Fupload%2Fv1773323427%2FWhatsApp_Image_2026-01-02_at_5.12.48_PM_du11cq.jpg&p=anujshrivastava.tech&z=b71ec";
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
