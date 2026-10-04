// ========================================
// DAFTAR FILM
// ========================================

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
        detail: "detail2.html"
    },
    {
        title: "Finding Nemo",
        year: 2003,
        genre: "Animation, Adventure",
        rating: 8.2,
        image: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
        detail: "detail3.html"
    },
    {
        title: "Toy Story",
        year: 1995,
        genre: "Animation, Comedy",
        rating: 8.3,
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
        detail: "detail4.html"
    },
    {
        title: "Ratatouille",
        year: 2007,
        genre: "Animation, Comedy",
        rating: 8.1,
        image: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
        detail: "detail5.html"
    },
    {
        title: "The Incredibles",
        year: 2004,
        genre: "Animation, Action",
        rating: 8.0,
        image: "https://cdn.posteritati.com/posters/000/000/058/702/the-incredibles-md-web.jpg",
        detail: "detail6.html"
    },
    {
        title: "Inside Out",
        year: 2015,
        genre: "Animation, Adventure",
        rating: 8.1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8bQ1e-5mLiaXWf3-t_SKb_OpTw4SLvTUwqrqdCtYddYRuh-oWS0d-z99&s=10",
        detail: "detail7.html"
    },
    {
        title: "Coco",
        year: 2017,
        genre: "Animation, Fantasy",
        rating: 8.4,
        image: "https://upload.wikimedia.org/wikipedia/id/9/98/Coco_%282017_film%29_poster.jpg?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=original",
        detail: "detail8.html"
    },
    {
        title: "Moana",
        year: 2016,
        genre: "Animation, Adventure",
        rating: 7.6,
        image: "https://upload.wikimedia.org/wikipedia/id/2/26/Moana_Teaser_Poster.jpg?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=original",
        detail: "detail9.html"
    },
    {
        title: "How to Train Your Dragon",
        year: 2010,
        genre: "Animation, Fantasy",
        rating: 8.1,
        image: "https://upload.wikimedia.org/wikipedia/id/9/99/How_to_Train_Your_Dragon_Poster.jpg?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=original",
        detail: "detail10.html"
    },
    {
        title: "Wonder",
        year: 2017,
        genre: "Drama, Family",
        rating: 7.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbyqmry7JdkfFNHsysYjcWSHKGC77fqgql3-sF9OzHOVa_MmbZsJIiZlU&s=10",
        detail: "detail11.html"
    },
    {
        title: "The Wild Robot",
        year: 2024,
        genre: "Animation, Adventure",
        rating: 8.2,
        image: "https://m.media-amazon.com/images/M/MV5BZWNiZjVlZTUtNGUwYi00MjJmLTg2MDctNWEzYTJiMzY1ODc4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        detail: "detail12.html"
    }
];


// ========================================
// MEMBUAT CARD FILM
// ========================================

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


// ========================================
// HOME - POPULAR FILMS
// ========================================

function tampilkanPopular() {

    const popularFilms =
        document.getElementById("popularFilms");

    if (!popularFilms) {
        return;
    }

    popularFilms.innerHTML = "";

    films.slice(0, 4).forEach(function(film) {

        const card = buatCardFilm(film);

        popularFilms.appendChild(card);

    });
}


// ========================================
// KATALOG FILM
// ========================================

function tampilkanKatalog(dataFilm) {

    const catalogFilms =
        document.getElementById("catalogFilms");

    if (!catalogFilms) {
        return;
    }

    catalogFilms.innerHTML = "";

    dataFilm.forEach(function(film) {

        const card = buatCardFilm(film);

        catalogFilms.appendChild(card);

    });
}


// ========================================
// SEARCH FILM
// ========================================

function cariFilm() {

    const searchInput =
        document.getElementById("searchFilm");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener("input", function() {

        const keyword =
            searchInput.value.toLowerCase();

        const hasilPencarian =
            films.filter(function(film) {

                return film.title
                    .toLowerCase()
                    .includes(keyword);

            });

        tampilkanKatalog(hasilPencarian);

    });
}


// ========================================
// FILTER GENRE
// ========================================

function filterGenre() {

    const genreFilter =
        document.getElementById("genreFilter");

    if (!genreFilter) {
        return;
    }

    genreFilter.addEventListener("change", function() {

        const genre =
            genreFilter.value;

        if (genre === "all") {

            tampilkanKatalog(films);

            return;
        }

        const hasilFilter =
            films.filter(function(film) {

                return film.genre.includes(genre);

            });

        tampilkanKatalog(hasilFilter);

    });
}


// ========================================
// SORT RATING
// ========================================

function sortRating() {

    const ratingSort =
        document.getElementById("ratingSort");

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


// ========================================
// WATCHLIST
// ========================================

function ambilWatchlist() {

    const data =
        localStorage.getItem("aeternaWatchlist");

    if (data) {

        return JSON.parse(data);

    }

    return [];
}


// ========================================
// SIMPAN WATCHLIST
// ========================================

function simpanWatchlist(data) {

    localStorage.setItem(
        "aeternaWatchlist",
        JSON.stringify(data)
    );
}


// ========================================
// TAMBAH WATCHLIST
// ========================================

function tambahWatchlist(film) {

    const watchlist =
        ambilWatchlist();

    const sudahAda =
        watchlist.some(function(item) {

            return item.title === film.title;

        });

    if (!sudahAda) {

        watchlist.push(film);

        simpanWatchlist(watchlist);

        alert(
            film.title +
            " ditambahkan ke Watchlist."
        );

    } else {

        alert(
            film.title +
            " sudah ada di Watchlist."
        );

    }
}


// ========================================
// TAMPILKAN WATCHLIST
// ========================================

function tampilkanWatchlist() {

    const watchlistFilms =
        document.getElementById("watchlistFilms");

    const watchlistCount =
        document.getElementById("watchlistCount");

    if (!watchlistFilms) {
        return;
    }

    const watchlist =
        ambilWatchlist();

    watchlistFilms.innerHTML = "";

    watchlistCount.textContent =
        watchlist.length + " Film";


    // Jika watchlist kosong
    if (watchlist.length === 0) {

        watchlistFilms.innerHTML = `

            <div class="empty-watchlist">

                <h2>
                    Watchlist masih kosong
                </h2>

                <p>
                    Tambahkan film yang ingin kamu tonton nanti.
                </p>

                <a
                    href="katalog.html"
                    class="btn-primary"
                >
                    Lihat Film
                </a>

            </div>

        `;

        return;
    }


    // Menampilkan film dalam watchlist
    watchlist.forEach(function(film) {

        const card =
            document.createElement("article");

        card.classList.add("film-card");

        card.innerHTML = `

            <a
                href="${film.detail}"
                class="film-link"
            >

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

            <button
                class="remove-watchlist"
                data-title="${film.title}"
                type="button"
            >
                Hapus dari Watchlist
            </button>

        `;

        watchlistFilms.appendChild(card);

    });


    // Tombol hapus watchlist
    const removeButtons =
        document.querySelectorAll(
            ".remove-watchlist"
        );

    removeButtons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const title =
                    button.dataset.title;

                hapusWatchlist(title);

            }
        );

    });
}


// ========================================
// HAPUS WATCHLIST
// ========================================

function hapusWatchlist(title) {

    const watchlist =
        ambilWatchlist();

    const dataBaru =
        watchlist.filter(function(film) {

            return film.title !== title;

        });

    simpanWatchlist(dataBaru);

    tampilkanWatchlist();
}


// ========================================
// TOMBOL WATCHLIST PADA DETAIL FILM
// ========================================

const detailWatchlist =
    document.getElementById("detailWatchlist");

if (detailWatchlist) {

    // Mengambil nama file halaman
    const namaHalaman =
        window.location.pathname
            .split("/")
            .pop();


    // Mengambil nomor detail
    const nomorDetail =
        parseInt(
            namaHalaman
                .replace("detail", "")
                .replace(".html")
        );


    // Menentukan index film
    const indexFilm =
        nomorDetail - 1;


    // Memastikan film tersedia
    if (films[indexFilm]) {

        const film =
            films[indexFilm];


        // Mengecek apakah film sudah ada
        const watchlist =
            ambilWatchlist();

        const sudahAda =
            watchlist.some(function(item) {

                return item.title === film.title;

            });


        // Jika sudah ada di watchlist
        if (sudahAda) {

            detailWatchlist.textContent =
                "✓ Added to Watchlist";

        }


        // Event ketika tombol diklik
        detailWatchlist.addEventListener(
            "click",
            function() {

                const watchlistSekarang =
                    ambilWatchlist();


                const sudahTersimpan =
                    watchlistSekarang.some(
                        function(item) {

                            return item.title === film.title;

                        }
                    );


                if (!sudahTersimpan) {

                    tambahWatchlist(film);

                    detailWatchlist.textContent =
                        "✓ Added to Watchlist";

                } else {

                    alert(
                        film.title +
                        " sudah ada di Watchlist."
                    );

                }

            }
        );

    }
}


// ========================================
// TOMBOL WATCH TRAILER
// ========================================

const watchTrailer =
    document.getElementById("watchTrailer");

if (watchTrailer) {

    watchTrailer.addEventListener(
        "click",
        function() {

            const trailer =
                document.querySelector(
                    ".trailer-section"
                );

            if (trailer) {

                trailer.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );
}


// ========================================
// TOMBOL WATCHLIST DI HOME
// ========================================

const heroWatchlist =
    document.getElementById("heroWatchlist");

if (heroWatchlist) {

    heroWatchlist.addEventListener(
        "click",
        function() {

            tambahWatchlist(films[0]);

        }
    );

}


// ========================================
// MENJALANKAN PROGRAM
// ========================================

tampilkanPopular();

tampilkanKatalog(films);

cariFilm();

filterGenre();

sortRating();

tampilkanWatchlist();