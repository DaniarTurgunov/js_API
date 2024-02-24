window.addEventListener('load', () => {
    loadMore();
});

const apiKey = 'ZVdlYpiL38xAhuwAeOo2m30BCSqunwpFJzICoMxsnGw';

async function fetchPhoto() {
    try{
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        console.log(response)
        const photos = await response.json();
        console.log(photos)
        return photos;
    }catch (error){
        console.error('Ошибка загрузки фотографии', error)
        return []
    }
}

async function loadMore(){
    const photo = await fetchPhoto();
    if (photo) {
            const photoElement =  document.querySelector('.image_box');
            photoElement.classList.add('photo')
            const img = document.createElement('img');
            img.src = photo.urls.small;
            img.alt = photo.alt_description;
            photoElement.appendChild(img)
            console.log(photoElement)
            const photographName = document.querySelector('.photographer-name');
            photographName.textContent = `${photo.user.name}`;
            const imageLikesCounter = document.querySelector('.likes-counter');
            imageLikesCounter.textContent = `${photo.likes}`;
    }
}

const counterButton = document.querySelector('.like');
counterButton.addEventListener('click', function () {
    likeCounter();
});

function likeCounter() {
    const likesCounter = document.querySelector('.likes-counter');
    const currentCounter = parseInt(likesCounter.textContent, 10);
    likesCounter.textContent = currentCounter + 1;
}

