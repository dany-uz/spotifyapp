import './Home.css';

export function Home() {
    return (
        <>
            <img src="https://firebasestorage.googleapis.com/v0/b/spotify-app-5903c.appspot.com/o/ImagineDragons.jpg?alt=media&token=c7b44031-3426-42f6-9ad4-e3392322cbc6" width={1420} />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Imagine Dragons</h1>
                            <p>
                                Imagine Dragons es una banda estadounidense de pop rock originaria de Las Vegas, Nevada. Está compuesta por Dan Reynolds (vocalista), Daniel Wayne Sermon (guitarrista), Ben McKee (bajista) y Daniel Platzman (baterista).
                            </p>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotify-app-5903c.appspot.com/o/BannerImagineDragons.jpg?alt=media&token=bd77f50f-0b26-44c5-99bb-c0981e2d9b2e" className="img-fluid w-100" alt="live" />
                        </div>
                        <div className="col-12 col-md-4 align-self-center">
                            <p>
                            En 2008, el vocalista Dan Reynolds conoció al baterista Andrew Tolman en la Universidad Brigham Young, donde ambos eran estudiantes. Reynolds y Tolman añadieron a Andrew Beck, Dave Lemke, y Aurora Florence para tocar la guitarra, el bajo, y el piano, respectivamente. Su nombre es un anagrama de Ragged Insomnia que es el nombre con el que inició la banda, antes de cambiarlo a Imagine Dragons con la intención de tener un nombre más comercial, el significado de este anagrama se mantuvo en secreto hasta el lanzamiento del videoclip "On Top Of The World" en donde se puede apreciar en la ventanilla de un automóvil.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}