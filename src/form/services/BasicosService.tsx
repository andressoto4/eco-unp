export const BasicosService = async (datos: {}) => {
  try {
    const response = await fetch(
      "https://ecosistemapruebas.unp.gov.co/api-eiunp/usuario/datosbasicos/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
