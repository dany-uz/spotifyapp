export async function servicioCanciones() {

    const URI = "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q/top-tracks?market=US";
    const TOKEN = "Bearer BQBKzT8m72LEzsWcBkRviKX_DrGCPLbdhvhZxLl9fvRGOqehcnkewS_-gVz5Zge4kHutEyC1hUPJlrXzKIw6pcmpmpt6sDKUPFpw4thOVYJ-zNK5uB1UDpl0t3HTTmJINalDDn0Tl9TeabYsI5H-Zbu80KW_8eEUDh-7HvjEpyI-hQKSRLecAxB3482wQyaU17o";
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