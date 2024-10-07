function getPersonages(done) {
  fetch("../data/superhero.json")
    .then((res) => res.json())
    .then((data) => {
      done(data);
    });
}

getPersonages((data) => {
  console.log(data);

  data.forEach((personaje) => {
    const article = document.createRange().createContextualFragment(`
        <article>
  
          <div class="image_container">
            <img src="${personaje.imagen}" alt="Imagen de ${personaje.superheroe}" />
          </div>
  
          <h2>${personaje.superheroe}</h2>
          <span>${personaje.editorial}</span>
  
        </article>
      `);

    const main = document.querySelector("main");

    main.append(article);
  });
});
