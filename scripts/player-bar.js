{
  $('button#play-pause').on('click', function() {
    helper.playPauseAndUpdate();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function () {
    if (player.playState !== 'playing') { return; }

    const CURRENT_SONG_INDEX = album.songs.indexOf(player.currentlyPlaying);
    const NEXT_SONG_INDEX = CURRENT_SONG_INDEX + 1;
    if (NEXT_SONG_INDEX >= album.songs.length) { return; }

    const NEXT_SONG = album.songs[NEXT_SONG_INDEX];
    helper.playPauseAndUpdate(NEXT_SONG);

  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const CURRENT_SONG_INDEX = album.songs.indexOf(player.currentlyPlaying);
    const PREVIOUS_SONG_INDEX = CURRENT_SONG_INDEX - 1;
    if (PREVIOUS_SONG_INDEX < 0) { return; }

    const PREVIOUS_SONG = album.songs[PREVIOUS_SONG_INDEX];
    helper.playPauseAndUpdate(PREVIOUS_SONG);
  });

  $('#time-control input').on('input', function(event) {
    player.skipTo(event.target.value);
  });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const CURRENT_TIME = player.getTime();
    const DURATION = player.getDuration();
    const PERCENT = (CURRENT_TIME / DURATION) * 100;
    $('#time-control .current-time').text( CURRENT_TIME );
    $('#time-control input').val(PERCENT);
  }, 1000);

  $('#volume-control input').on('input', function(event) {
    player.setVolume(event.target.value);
  });

}
