// Load the song data and album data from the JSON file
fetch('songData.json')
  .then(response => response.json())
  .then(data => {
    const songListElement = document.getElementById('songList');
    const albumListElement = document.getElementById('albumList');

    // Iterate over the song data and create song items dynamically
    data.songData.forEach((song, index) => {
      const songItem = createSongItem(song, index);
      songListElement.appendChild(songItem);
    });

    // Iterate over the album data and create album items dynamically
    data.albumData.forEach((album, index) => {
      const albumItem = createAlbumItem(album, index);
      albumListElement.appendChild(albumItem);
    });
  })
  .catch(error => {
    console.error('Error loading data:', error);
  });

// Function to create a song item dynamically
function createSongItem(song, index) {
  const songItem = document.createElement('div');
  songItem.classList.add('col-xxl-4', 'col-xl-4', 'col-lg-4', 'col-md-6', 'contents');

  if (index >= 6) {
    songItem.classList.add('d-none');
  }

  songItem.innerHTML = `
    <div class="product__item white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
        <div class="product__thumb">
            <div class="product__thumb-inner fix w-img">
                <a href="#">
                    <img src="${song.image}" alt="${song.title}" class="song-image">
                </a>
            </div>
            <div class="product__thumb-btn transition-3">
                <a href="${song.vidLink}" class="m-btn m-btn-6 mb-15">
                    <i class="fab fa-youtube"></i> Watch Now
                </a>
                <a href="${song.link}" class="m-btn m-btn-7">
                    <i class="fa fa-music-alt"></i> Listen Now
                </a>
            </div>
        </div>
        <div class="product__content">
            <h3 class="product__title product__title2">
                <a target="_blank" href="${song.link}" class="song-title">${song.title}</a>
            </h3>
            <p class="product__author">by <a href="${song.artistLink}" class="artist-link">${song.artist}</a></p>
            <div class="product__meta d-flex justify-content-between align-items-end mt-15">
                <div class="product__price">
                    <p><em>Single</em></p>
                </div>
                <div class="product__action-btn">
                    <a class="link_prview" target="_blank" href="${song.link}"><i class="fa fa-music-alt"></i>
                        Listen</a>
                    <a class="link_heart" target="_blank" href="${song.vidLink}"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
  `;

  return songItem;
}

// Function to create an album item dynamically
function createAlbumItem(album, index) {
  const albumItem = document.createElement('div');
  albumItem.classList.add('col-xxl-4', 'col-xl-4', 'col-lg-4', 'col-md-6', 'contents');

  if (index >= 6) {
    albumItem.classList.add('d-none');
  }

  albumItem.innerHTML = `
    <div class="product__item white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
        <div class="product__thumb">
            <div class="product__thumb-inner fix w-img">
                <a href="#">
                    <img src="${album.image}" alt="${album.title}" class="album-image">
                </a>
            </div>
            <div class="product__thumb-btn transition-3">
                <a href="${album.vidLink}" class="m-btn m-btn-6 mb-15">
                    <i class="fab fa-youtube"></i> Watch Now
                </a>
                <a href="${album.link}" class="m-btn m-btn-7">
                    <i class="fa fa-music-alt"></i> Listen Now
                </a>
            </div>
        </div>
        <div class="product__content">
            <h3 class="product__title product__title2">
                <a target="_blank" href="${album.link}" class="album-title">${album.title}</a>
            </h3>
            <p class="product__author">by <a href="${album.artistLink}" class="artist-link">${album.artist}</a></p>
            <div class="product__meta d-flex justify-content-between align-items-end mt-15">
                <div class="product__price">
                    <p><em>Album</em></p>
                </div>
                <div class="product__action-btn">
                    <a class="link_prview" target="_blank" href="${album.link}"><i class="fa fa-music-alt"></i>
                        Listen</a>
                    <a class="link_heart" target="_blank" href="${album.vidLink}"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
  `;

  return albumItem;
}
