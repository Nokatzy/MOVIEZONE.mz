document.addEventListener("DOMContentLoaded", function () {
  const defaultMovies = [
    { title: "Black Bag", rating: 8.8, reviews: [] },
    { title: "Rebel Ridge", rating: 6.8, reviews: [] },
    { title: "Warfare", rating: 7.8, reviews: [] },
    { title: "Talk to Me", rating: 7.1, reviews: [] },
    { title: "Time Cut", rating: 5.0, reviews: [] },
    { title: "Afraid", rating: 5.2, reviews: [] },
    { title: "Nandaaniyan", rating: 2.9, reviews: [] },
    { title: "The Room Next Door", rating: 6.8, reviews: [] },
    { title: "How to Make Millions Before Grandma Dies", rating: 8.0, reviews: [] },
    { title: "Pacific Rim", rating: 6.9, reviews: [] },
    { title: "Ghostbusters: Frozen Empire", rating: 6.1, reviews: [] },
    { title: "The Electric State", rating: 5.9, reviews: [] },
    { title: "Your Name (Kimi no Na wa)", rating: 8.4, reviews: [] },
    { title: "One Piece Film: Red", rating: 6.7, reviews: [] },
    { title: "Haikyuu!! The Dumpster Battle", rating: 7.7, reviews: [] },
    { title: "The Fast and the Furious", rating: 6.8, reviews: [] },
    { title: "Initial D: The Movie", rating: 6.3, reviews: [] },
    { title: "The Fast and the Furious: Tokyo Drift", rating: 6.1, reviews: [] },
  ];
function loadMovies() {
  const stored = localStorage.getItem("movieData");
  let movies;
  try {
    movies = stored ? JSON.parse(stored) : null;
  } catch (e) {
    console.error("Failed to parse stored movies. Using default.");
    movies = null;
  }
  if (!Array.isArray(movies) || movies.length < defaultMovies.length) {
    movies = defaultMovies;
    saveMovies(movies); 
  }
  movies.forEach(movie => {
    if (!movie.reviews) {
      movie.reviews = [];
    }
  });
  return movies;
}
function saveMovies(data) {
  localStorage.setItem("movieData", JSON.stringify(data));
}
let movies = loadMovies();
console.log(movies);
function renderReviews() {
  movies.forEach((movie, index) => {
    const reviewsContainer = document.getElementById(`reviews-${index}`);
    if (reviewsContainer) {
      reviewsContainer.innerHTML = movie.reviews
      .map((r, reviewIndex) => `
          <li class="review-item">
            <span>${r}</span>
            <button onclick="deleteReview(${index}, ${reviewIndex})">X</button>
          </li>
        `)
        .join('');
    }
  });
}
window.addReview = function(index) {
  if (movies[index]) {  
    const input = document.getElementById(`review-input-${index}`);
    if (!input) {
      console.error(`Review input not found for movie index ${index}`);
      return;
    }
    const text = input.value.trim();
    if (text) {
      movies[index].reviews.push(text);
      console.log(`Added review for movie index ${index}:`, text);
      input.value = ''; 
      saveMovies(movies); 
      renderReviews(); 
    } else {
      console.warn(`No review text entered for movie index ${index}`); 
    }
  } else {
    console.error(`Movie not found at index ${index}`); 
  }
};
window.deleteReview = function (index, reviewIndex) {
  if (movies[index] && movies[index].reviews) {
    movies[index].reviews.splice(reviewIndex, 1);
    saveMovies(movies);
    renderReviews();
  }
};
renderReviews();
});

  