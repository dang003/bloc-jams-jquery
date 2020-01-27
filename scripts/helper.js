class Helper {
  constructor() {
    }

  playPauseAndUpdate(song) {
    player.playPause(song);
    const DURATION = player.getDuration(song);
    $('#time-control .total-time').text( DURATION );
  }
}


const helper = new Helper();
