const movieTitle = "Red Notice";
let movieRating = 8.8;
const moviePosterUrl =
  "https://image.tmdb.org/t/p/w1280/lAXONuqg41NwUMuzMiFvicDET9Y.jpg";
const isMovieRecomendedByMe = false;

const secondMovieTitle = movieTitle; // "Red Notice"
let secondMovieRating = movieRating; // 8.8
secondMovieRating = 5.6;

console.log(movieRating, "movieRating");
console.log(secondMovieRating, "secondMovieRating");

const movie = {
  title: "Red Notice",
  rating: 6.8,
  posterUrl: "https://image.tmdb.org/t/p/w1280/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
  isMovieRecomendedByMe: false,
};

movie = {
  title: "Red Notice",
};

console.log(movie.rating, "movie.rating");

const secondMovie = movie;
secondMovie.rating = 4.5;
console.log(movie.rating, "movie.rating"); // 4.5

console.log(movie.title);
const students = ["Ivan", "Olya", "Taras"]; // Array

function pushToArray(array, value) {
  const newArrayIndex = array.length;
  array[newArrayIndex] = value;
}

pushToArray(students, "Oleg");
pushToArray(students, "Anna");
pushToArray(students, "Maria");

console.log(students);
console.log(students.length);

const movieCardEl = document.getElementById("movieCardId");
const moviePosterEl = movieCardEl.querySelector("img");
const movieTitleEl = movieCardEl.querySelector(".movie-info h3");
const movieRatingEl = movieCardEl.querySelector(".movie-info span");

moviePosterEl.setAttribute("src", moviePosterUrl);
moviePosterEl.setAttribute("alt", movieTitle);
movieTitleEl.innerText = movieTitle;
movieRatingEl.innerText = movieRating;

// 1. Замініть відповідні змінні значеннями для наступних фільмів по черзі:
// // Movie 1
// Venom: Let There Be Carnage
// 7.2
// https://image.tmdb.org/t/p/w1280//rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg
// // Movie 2
// Clifford the Big Red Dog
// 7.5
// https://image.tmdb.org/t/p/w1280//ygPTrycbMSFDc5zUpy4K5ZZtQSC.jpg

// 2. Створіть два обєкти з даних для фільму з попереднього завдання. Придумайте свої назви властивостей.
// 3. Виведіть в консоль назву фільму з створеного обєкту.
// 4. Створіть масив моделей машин. Виведіть в консоль довжина масиву і останній елемент цього масиву.
// 5. Створіть обєкт про себе. Обєкт має містити мінімум три властивості. Використайте всі типи даних: String, Number, Boolean.
// 6. Створіть обєкт про своє місто. Обєкт має містити мінімум три властивості. Використайте всі типи даних: String, Number, Boolean.
