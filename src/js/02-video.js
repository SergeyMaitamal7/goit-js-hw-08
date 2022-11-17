import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

// Напиши скрипт который будет сохранять текущее время воспроизведения видео
// в локальное хранилище и, при перезагрузке страницы,
// продолжать воспроизводить видео с этого времени.

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(vimeo, 1000));
function vimeo(time) {
  const currentTime = time.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
  console.log(localStorage);
}

const localCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(localCurrentTime);
