export function Integrantes() {

    let integrantes = [
        {
            Nombre: "Dan Reynolds",
            Instrumento: "Vocalista",
            Edad: 35,
            Fotografia: "https://firebasestorage.googleapis.com/v0/b/spotify-app-5903c.appspot.com/o/DanReynolds.jpg?alt=media&token=002527a4-3996-4644-91f2-78ada546c0cc"
        },
        {
            Nombre: "Wayne Sermon",
            Instrumento: "Guitarrista",
            Edad: 38,
            Fotografia: "https://firebasestorage.googleapis.com/v0/b/spotify-app-5903c.appspot.com/o/DanielWayneSermon.jpg?alt=media&token=94fd1cba-66ae-41c6-812d-cc2a8acd6acb"
        },
        {
            Nombre: "Ben McKee",
            Instrumento: "Bajista",
            Edad: 37,
            Fotografia: "https://firebasestorage.googleapis.com/v0/b/spotify-app-5903c.appspot.com/o/Ben_McKee.jpg?alt=media&token=c0dfed44-b8e1-431a-8ed8-9db62b31486b"
        },
        {
            Nombre: "Daniel Platzman",
            Instrumento: "Baterista",
            Edad: 36,
            Fotografia: "https://firebasestorage.googleapis.com/v0/b/spotify-app-5903c.appspot.com/o/DanielPlatzman.jpg?alt=media&token=53208297-5d00-4a22-9b93-1cee817a0169"

        }
    ]

    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 g-0 mt-3">
                {
                    integrantes.map(function (integrante) {
                        return (
                            <>
                                <div className="col bg-dark p-5">
                                    <div className="card h-100">
                                        <img src={integrante.Fotografia} alt="foto" className="img-fluid w-100 h-75" />
                                        <h4 className="text-center">{integrante.Nombre}</h4>
                                        <br />
                                        <h5 className="text-center">Edad: {integrante.Edad}</h5>
                                        <h5 className="text-center">Rol: {integrante.Instrumento}</h5>

                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}