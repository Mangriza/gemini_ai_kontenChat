export const generateContent = async (prompt: string) => {
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
    const apiKey = 'AIzaSyBw0ykK3wZA-jD5YXe9uE_pc3bxLHy-k-0'; // Gantilah dengan API key yang valid.
  
    const response = await fetch(`${apiUrl}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch content');
    }
  
    const data = await response.json();
    return data;  // Mengembalikan data yang diterima dari API
  };
  