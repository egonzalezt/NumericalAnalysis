import style from '../../styles/Card.module.css'


export default function Methods() {
    return (
        <div className={style.container}>
            <p className={style.title}>Methods</p>
            <div class={style.boxesContainer}>
                <div class={style.cardBox}>
                    <div className={style.grid}>
                        <div class={style.card}>
                            <div class={style.front}>
                                <h3>Search Incremental</h3>
                                <p>Hover to flip</p>
                                <strong>&#x21bb;</strong>
                            </div>
                            <div class={style.back}>
                                <h3>Description</h3>
                                <p></p>
                                <a class={style.button} href="/methods/search">NEXT</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class={style.cardBox}>
                    <div className={style.grid}>
                        <div class={style.card}>
                            <div class={style.front}>
                                <h3>Search Incremental</h3>
                                <p>Hover to flip</p>
                                <strong>&#x21bb;</strong>
                            </div>
                            <div class={style.back}>
                                <h3>Description</h3>
                                <p></p>
                                <a class={style.button} href="#">NEXT</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class={style.cardBox}>
                    <div className={style.grid}>
                        <div class={style.card}>
                            <div class={style.front}>
                                <h3>Search Incremental</h3>
                                <p>Hover to flip</p>
                                <strong>&#x21bb;</strong>
                            </div>
                            <div class={style.back}>
                                <h3>Description</h3>
                                <p></p>
                                <a class={style.button} href="#">NEXT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}