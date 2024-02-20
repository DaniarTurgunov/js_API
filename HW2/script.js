
// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.

// Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// Для создания элементов интерфейса используйте HTML.
// При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const images = [
    {
      id: 0,
      src: "https://avatars.dzeninfra.ru/get-zen_doc/4979934/pub_61706c57432ba079ff27fb9f_6171bce2a792a1462a5735fc/scale_2400",
    },
    {
      id: 1,
      src: "https://hdpic.club/photo/uploads/posts/2023-12/1701572736_hdpic-club-p-avtomobil-biznes-klassa-36.jpg",
    },
    {
      id: 2,
      src: "https://hdpic.club/photo/uploads/posts/2023-12/1701572697_hdpic-club-p-avtomobil-biznes-klassa-1.jpg",
    },
    {
      id: 3,
      src: "https://hdpic.club/photo/uploads/posts/2023-12/1701572675_hdpic-club-p-avtomobil-biznes-klassa-4.jpg",
    },
    {
      id: 4,
      src: "https://hdpic.club/photo/uploads/posts/2023-12/1701572743_hdpic-club-p-avtomobil-biznes-klassa-23.jpg",
    },
  ];
  
  const containerEl = document.querySelector(".container");
  const prevBtnEl = document.querySelector(".buttons_prev");
  const nextBtnEl = document.querySelector(".buttons_next");
  
  const navEl = document.querySelector('.nav');
  
  let indexImg = 0; // индекс по умолчанию
  let currentImage = document.querySelector('.current_img');
  
  //предыдущие картинки
  prevBtnEl.addEventListener('click', function () {
      if(indexImg === 0) {
          indexImg = images.length - 1;
      } else {
          indexImg--;
      }
      showImage(indexImg);
  });
  
  //следующие картинки
  nextBtnEl.addEventListener('click', function () {
      if(indexImg === images.length - 1) {
          indexImg = 0;
      } else {
          indexImg++;
      }
      showImage(indexImg);
  });
  
  //добавление навигационных точек
  for (let i = 0; i < images.length; i++) {
      const navItem = document.createElement('div');
      navItem.classList.add('nav_item')
      navItem.textContent = i + 1;
      navEl.append(navItem);
  }
  
  navEl.addEventListener('click', function (e) {
      indexImg = +e.target.textContent - 1;
      showImage(indexImg);
  });
  
  function showImage(index) {
      currentImage.src = images[index].src;
  }