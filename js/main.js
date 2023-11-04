const pictures = [
  'images/fuji_large.png',
  'images/street_large.png',
  'images/forest_large.png'
];


const thumbnails = document.querySelectorAll('.gallery__picture-preview');
const fullPicture = document.querySelector('.full-picture');

const addThumbnailClickHandler = function (thumbnail, picture) {
  thumbnail.addEventListener('click', function () {
    fullPicture.src = picture;
  });
};
for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], pictures[i]);
}




