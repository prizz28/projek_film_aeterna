// Daftar Film

const films = [
    {
        title: "WALL-E",
        year: 2008,
        genre: "Animation, Sci-Fi",
        rating: 8.4,
        image: "https://upload.wikimedia.org/wikipedia/id/4/4c/WALL-E_poster.jpg?utm_source=id.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
    },
    {
        title: "Up",
        year: 2009,
        genre: "Animation, Adventure",
        rating: 8.3,
        image: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
    },
    {
        title: "Finding Nemo",
        year: 2003,
        genre: "Animation, Adventure",
        rating: 8.2,
        image: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
    },
    {
        title: "Toy Story",
        year: 1995,
        genre: "Animation, Comedy",
        rating: 8.3,
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
    },
    {
        title: "Ratatouille",
        year: 2007,
        genre: "Animation, Comedy",
        rating: 8.1,
        image: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
    },
    {
        title: "The Incredibles",
        year: 2004,
        genre: "Animation, Action",
        rating: 8.0,
        image: "https://upload.wikimedia.org/wikipedia/en/e/ec/The_Incredibles.jpg",
    },
    {
        title: "Inside Out",
        year: 2015,
        genre: "Animation, Adventure",
        rating: 8.1,
        image: "https://upload.wikimedia.org/wikipedia/en/0/05/Inside_Out_%282015_film%29.png",
    },
    {
        title: "Coco",
        year: 2017,
        genre: "Animation, Fantasy",
        rating: 8.4,
        image: "https://upload.wikimedia.org/wikipedia/en/9/9d/Coco_%282017_film%29.png",
    },
    {
        title: "Moana",
        year: 2016,
        genre: "Animation, Adventure",
        rating: 7.6,
        image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Moana_poster.jpg",
    },
    {
        title: "How to Train Your Dragon",
        year: 2010,
        genre: "Animation, Fantasy",
        rating: 8.1,
        image: "https://upload.wikimedia.org/wikipedia/en/9/9d/How_to_Train_Your_Dragon_Poster.jpg",
    },
    {
        title: "Wonder",
        year: 2017,
        genre: "Drama, Family",
        rating: 7.9,
        image: "https://upload.wikimedia.org/wikipedia/en/9/9e/Wonder_2017_film_poster.jpg",
    },
    {
        title: "The Wild Robot",
        year: 2024,
        genre: "Animation, Adventure",
        rating: 8.2,
        image: "https://upload.wikimedia.org/wikipedia/en/1/1e/The_Wild_Robot_poster.jpg",
    }
];

function tampilkanFilm() {

    const popularFilms = document.getElementById("popularFilms");

    if (!popularFilms) {
        return;
    }

    popularFilms.innerHTML = "";

    films.slice(0, 4).forEach(function(film) {

        const card = document.createElement("article");

        card.classList.add("film-card");

        card.innerHTML = `
            <img
                src="${film.image}"
                alt="Poster ${film.title}"
            >

            <div class="film-info">

                <h3 class="film-title">
                    ${film.title}
                </h3>

                <p class="film-rating">
                    ★ ${film.rating}
                </p>

            </div>
        `;

        popularFilms.appendChild(card);
    });
}

tampilkanFilm();