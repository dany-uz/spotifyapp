export async function servicioCanciones() {

    const URI = "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q/top-tracks?market=US";
    const TOKEN = "Bearer BQDgLHCir_CVChqqlp-AC7QRf5DObKuc3BXxvf1gSHFAO-eeOxFSUJj4HV9u41hOAYDIsx38kXHdg1OAYlSWM60YqvMpmqGiInFrEoF9Ih8Qb4-haObejYYIb88klF4kSn8eDmL74cV-sClmp5Clk5g_vGMd4kdUnRBFlK0LlTFSvkK2AgGPMIg0265BMLWJRf4";
    const REQUEST = {
        method: "GET",
        headers: {
            "Authorization": TOKEN
        }
    };

    let respuesta = await fetch(URI, REQUEST);
    let canciones = await respuesta.json();
    return canciones;

}