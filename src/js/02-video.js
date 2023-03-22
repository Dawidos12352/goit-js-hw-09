import Player from '@vimeo/player';
import { throttle } from 'lodash';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle( ({ duration, precent, seconds}) => {
    localStorage.setItem('videoplayer-current-time', `${seconds}`);
}, 1000));

    const Time = localStorage.getItem('videoplayer-current-time')

    player.setCurrentTime(Time).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });