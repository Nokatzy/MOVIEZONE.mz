const genreButtons = document.querySelectorAll('.genre-menu button');
const movieSlider = document.querySelector('.movie-slider');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const popup = document.getElementById('popup');
const popupIframe = document.getElementById('popup-iframe');
const searchInput = document.querySelector('.search-bar');
  // Movie Data
const moviesByGenre = {
  ACTION: {
    movies: [
      { src: 'black%20bag.jpg', alt: 'Black Bag', title: 'Black Bag', link: 'Blackbag.html' },
      { src: 'Rebel-Ridge-1-768x960.jpeg', alt: 'Rebel Ridge', title: 'Rebel Ridge', link: 'Rebelridge.html'},
      { src: 'warfare.jpg', alt: 'Warfare', title: 'Warfare', link: 'Warfare.html' },
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
    ],
  },
  HORROR: {
    movies: [
      { src: 'talktome.jpg', alt: 'Talktome', title: 'Talk to Me', link:'Talktome.html' },
      { src: 'timecut.webp', alt: 'Timecut', title: 'Timecut', link: 'Timecut.html' },
      { src: 'afraidd.jpg', alt: 'Afraid', title: 'Afraid', link: 'Afraid.html' },
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
    ],
  },
  DRAMA: {
    movies: [
      { src: 'nadaaniyan.jpg', alt: 'Nadaaniyan', title: 'Nadaaniyan', link: 'Naandiyan.html' },
      { src: 'trnd.jpg', alt: 'The Room Next Door', title: 'The Room Next Door', link: 'Theroomnextdoor.html' },
      { src: 'htmm.jpg', alt: 'How To Make Millions Before Grandma Dies', title: 'How to Make Millions Before Grandma Dies', link: 'Howtomakemillions.html' },
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
    ],
  },
  FICTION: {
    movies: [
      { src: 'pacific.jpg', alt: 'Pacific Rim', title: 'Pacific Rim', link: 'Pacific.html' },
      { src: 'ghost.jpg', alt: 'Ghostbusters: Frozen Empire', title: 'Ghostbusters: Frozen Empire', link: 'Ghost.html' },
      { src: 'electric.jpg', alt: 'The Electric State', title: 'The Electric State', link: 'Electric.html' },
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
    ],
  },
  ANIME: {
    movies: [
      { src: 'yourname.jpg', alt: 'Your Name (Kimi no Na wa)', title: 'Your Name (Kimi no Na wa)', link: 'Yourname.html' },
      { src: 'opred.jpg', alt: 'One Piece Film: Red', title: 'One Piece Film: Red', link :'Opred.html' },
      { src: 'hakiyuu.jpg', alt: 'Haikyuu!! The Dumpster Battle', title: 'Haikyuu!! The Dumpster Battle', link: 'Haikyuu.html' },
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
    ],  
  },
  RACING: {
    movies: [
      { src: 'fnf1.jpg', alt: 'The Fast and the Furious', title: 'The Fast and the Furious', link:'Fnf1.html'  },
      { src: 'initial.jpg', alt: 'Initial D: The Movie', title: 'Initial D: The Movie', link:'Initial.html' },
      { src: 'tokyo.jpg', alt: 'The Fast and the Furious: Tokyo Drift', title: 'The Fast and the Furious: Tokyo Drift', link: 'Tokyo.html' },
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
      { src: 'coming%20soon.jpg'},
    ],   
  },
};

  // Scroll buttons
leftArrow.addEventListener('click', () => {
  movieSlider.scrollBy({ left: -300, behavior: 'smooth' });
});
rightArrow.addEventListener('click', () => {
  movieSlider.scrollBy({ left: 300, behavior: 'smooth' });
});
  // Genre switch logic
genreButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button UI
    genreButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const genre = button.textContent.trim().toUpperCase();
    const data = moviesByGenre[genre];
    //  Update genre label
    document.getElementById('genre-label').textContent = `RECOMMENDED | ${genre} MOVIE`;
    // Update movie list
    movieSlider.innerHTML = '';
            if (data?.movies) {
          data.movies.forEach(movie => {
            const img = document.createElement('img');
            img.src = movie.src;
            img.alt = movie.alt;
            img.style.cursor = 'pointer';
            // When image is clicked, show iframe popup
            img.addEventListener('click', () => {
              popupIframe.src = movie.link;
              popup.style.display = 'flex';
            });
            movieSlider.appendChild(img);
          });
        }
  });
});    
  // Optional: load default genre on page load
window.addEventListener('DOMContentLoaded', () => {
  genreButtons[0].click(); 
});
// Close popup
document.querySelector('.popup-close').addEventListener('click', () => {
    popup.style.display = 'none';
    popupIframe.src = '';
});
// Search bar
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      alert('Please enter a search term.');
      return;
    }
    // Gather all matching movies across all genres
    let matchedMovies = [];
    for (const [genre, data] of Object.entries(moviesByGenre)) {
      const movies = data.movies.filter(movie =>
        movie.title && movie.title.toLowerCase().includes(query)
      );

      if (movies.length > 0) {
        matchedMovies.push({ genre, movies, detail: data.detail });
      }
    }
    // Clear slider content
    movieSlider.innerHTML = '';
    if (matchedMovies.length === 0) {
      document.getElementById('genre-label').textContent = `No results found for "${query}".`;
      const noResults = document.createElement('div');
      noResults.textContent = 'No movies matched your search.';
      noResults.style.padding = '1rem';
      noResults.style.color = 'gray';
      movieSlider.appendChild(noResults);
      genreButtons.forEach(btn => btn.classList.remove('active'));
      return;
    }
    // Show movies from first matched genre 
    const { genre, movies, detail } = matchedMovies[0];
    // Update label
    document.getElementById('genre-label').textContent = `Search results for "${query}" in ${genre}`;
    // Populate slider with matched movies only
    movies.forEach(movie => {
      const img = document.createElement('img');
      img.src = movie.src;
      img.alt = movie.alt;
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        if (movie.link) {
          popupIframe.src = movie.link;
          popup.style.display = 'flex';
        }
      });
      movieSlider.appendChild(img);
    });
    genreButtons.forEach(btn => btn.classList.remove('active'));
  }
});

