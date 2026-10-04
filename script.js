// Daftar Film

const films = [
    {
        title: "WALL-E",
        year: 2008,
        genre: "Animation, Sci-Fi",
        rating: 8.4,
        image: "https://upload.wikimedia.org/wikipedia/id/4/4c/WALL-E_poster.jpg?utm_source=id.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
        detail: "detail1.html"
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

// MENAMPILKAN FILM

function buatCardFilm(film) {
    const card = document.createElement("article");
    card.classList.add("film-card");

    card.innerHTML = `
        <a href="${film.detail}" class="film-link">
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
        </a>
    `;

    return card;
}

// HOME - POPULAR FILMS

function tampilkanPopular() {

    const popularFilms = document.getElementById("popularFilms");

    if (!popularFilms) {
        return;
    }

    popularFilms.innerHTML = "";

    films.slice(0, 4).forEach(function(film) {

        const card = buatCardFilm(film);

        popularFilms.appendChild(card);

    });
}

// KATALOG FILM

function tampilkanKatalog(dataFilm) {

    const catalogFilms = document.getElementById("catalogFilms");

    if (!catalogFilms) {
        return;
    }

    catalogFilms.innerHTML = "";

    dataFilm.forEach(function(film) {

        const card = buatCardFilm(film);

        catalogFilms.appendChild(card);

    });
}

// SEARCH FILM

function cariFilm() {

    const searchInput = document.getElementById("searchFilm");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener("input", function() {

        const keyword = searchInput.value.toLowerCase();

        const hasilPencarian = films.filter(function(film) {

            return film.title.toLowerCase().includes(keyword);

        });

        tampilkanKatalog(hasilPencarian);

    });
}


// FILTER GENRE

function filterGenre() {

    const genreFilter = document.getElementById("genreFilter");

    if (!genreFilter) {
        return;
    }

    genreFilter.addEventListener("change", function() {

        const genre = genreFilter.value;

        if (genre === "all") {

            tampilkanKatalog(films);

            return;
        }

        const hasilFilter = films.filter(function(film) {

            return film.genre.includes(genre);

        });

        tampilkanKatalog(hasilFilter);

    });
}


// SORT RATING

function sortRating() {

    const ratingSort = document.getElementById("ratingSort");

    if (!ratingSort) {
        return;
    }

    ratingSort.addEventListener("change", function() {

        const dataFilm = [...films];

        if (ratingSort.value === "high") {

            dataFilm.sort(function(a, b) {
                return b.rating - a.rating;
            });

        }

        if (ratingSort.value === "low") {

            dataFilm.sort(function(a, b) {
                return a.rating - b.rating;
            });

        }

        tampilkanKatalog(dataFilm);

    });
}

tampilkanPopular();

tampilkanKatalog(films);

cariFilm();

filterGenre();

sortRating();