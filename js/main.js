function getpersonajes(done) {
    fetch("../data/superhero.json")
        .then(res => res.json())
        .then(data => {
            done(data);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

getpersonajes(data => {
    // console.log(data)
    data.result.forEach(superhero => {
        const article = document.createRange().createContextualFragment(/* html */`
            <article>
                <section id="marvel" class="marvel">
                    <div id="personaje_marvel" class="personaje_marvel">
                        <div class="image">
                            <img src="${superhero.marvel.imagen}" alt="">
                        </div>
                        <div id="Nombre" class="Nombre">
                            <h3>${superhero.marvel.superheroe}</h3>
                        </div>
                    </div>
                </section>
            </article>  
        `);
        const main = document.querySelector("main");
        main.append(article);
    });
});


