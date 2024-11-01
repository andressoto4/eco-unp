export const BasicosService = async (
  endpoints: Array<{ url: string; datos: any }>
) => {
  try {
    const responses = await Promise.all(
      endpoints.map(async (endpoint) => {
        const response = await fetch(endpoint.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...endpoint.datos }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error);
        }

        return { data };
      })
    );

    return responses;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
