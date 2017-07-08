
function toggleSong() {
  var song = document.querySelector('audio');
  if(song.paused == true) {
  //console.log('Playing');
  $('.play-icon').removeClass('fa-play').addClass('fa-pause');
  song.play();
  }
  else {
  //console.log('Pausing');
  $('.play-icon').removeClass('fa-pause').addClass('fa-play');
  song.pause();
  }
  setInterval(function() {
			  updateProgress();
			  },100);
  }


function fancyTimeFormat(time)
{
// Hours, minutes and seconds
var hrs = ~~(time / 3600);
var mins = ~~((time % 3600) / 60);
var secs = time % 60;

// Output like "1:01" or "4:03:59" or "123:03:59"
var ret = "";

if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
}

ret += "" + mins + ":" + (secs < 10 ? "0" : "");
ret += "" + secs;
return ret;
}


function updateCurrentTime() {
  var song = document.querySelector('audio');
  //console.log(song.currentTime);
  //console.log(song.duration);
  var currentTime = Math.floor(song.currentTime);
  currentTime = fancyTimeFormat(currentTime);
  var duration = Math.floor(song.duration);
   duration = fancyTimeFormat(duration);
  $('.time-elapsed').text(currentTime);
  $('.song-duration').text(duration);
  }


  function updateProgress() {
   var progress = document.getElementById("progress-filled");
   var value = 0;
   var audio = document.querySelector('audio');
   if (audio.currentTime > 0) {
	 
      value = Math.floor((100 / audio.duration) * audio.currentTime);
   }
   progress.style.width = value + "%";
}
  


  function addSongNameClickEvent(songName,position) {
        var id = '#song' + position;
		 
        $(id).click(function() {
            var audio = document.querySelector('audio');
            var currentSong = audio.src;
            if(currentSong.search(songName) != -1)
            {
				
              toggleSong();
            }
            else {
              audio.src = songName;
			 
              toggleSong();
            }
			 
		
        });
		
    }

	
  window.onload = function() {
	//console.log(document.querySelector);
  //  var songName1 = 'Tamma Song';
  //  var songName2 = 'Humma Song';
  // var songName3 = 'Nashe Si Chadh Gayi';
  // var songName4 = 'The Breakup Song';
  //
  // var songList = ['Tamma Song', 'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
  // var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
  // var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
  // var durationList = ['2:56','3:15','2:34','2:29'];


   // array of objects
  var songs = [{
        'name': ' Love The Way You Lie (Part 2) ft. Eminem',
        'artist': ' Rihanna, Eminem',
        'album': ' Loud',
        'duration': '4:51',
       'fileName': 'song1.mp3'
    },
    {
        'name': 'Shape of You',
        'artist': ' Ed Sheeran',
        'album': ' ÷',
        'duration': '3:53',
        'fileName': 'song2.mp3'
    },
    {
        'name': 'Heart Attack',
        'artist': ' Enrique Iglesias',
        'album': 'Sex and Love',
        'duration': '2:50',
        'fileName': 'song3.mp3'
    },
    {
        'name': ' Stereo Love',
        'artist': 'Edward Maya, Vika Jigulina',
        'album': ' The Stereo Love Show',
        'duration': '4:08',
        'fileName': 'song4.mp3'
    }]
  //  $('#song1 .song-name').text(songList[0]);
  //   $('#song2 .song-name').text(songList[1]);
  //    $('#song3 .song-name').text(songList[2]);
  //     $('#song4 .song-name').text(songList[3]);
  //     $('#song1 .song-artist').text(artistList[0]);
  //   $('#song2 .song-artist').text(artistList[1]);
  //   $('#song3 .song-artist').text(artistList[2]);
  //   $('#song4 .song-artist').text(artistList[3]);

  // for(var i =0; i < songList.length;i++) {
  //      var name = '#song' + (i+1);  // for i=0, name = #song1
  //      var song = $(name);  //song =  $(#song1)
  //      song.find('.song-name').text(songList[i]);
  //      song.find('.song-artist').text(artistList[i]);
  //      song.find('.song-album').text(albumList[i]); // Added
  //       song.find('.song-length').text(durationList[i]); // Added
  //  }

   for(var i =0; i < songs.length;i++) {
       var obj = songs[i];
       var name = '#song' + (i+1);
       var song = $(name);
       song.find('.song-name').text(obj.name);
       song.find('.song-artist').text(obj.artist);
       song.find('.song-album').text(obj.album);
       song.find('.song-length').text(obj.duration);
       addSongNameClickEvent(obj.fileName,i+1);
     }

    //var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
    // addSongNameClickEvent(fileNames[0],1);
    // addSongNameClickEvent(fileNames[1],2);
    // addSongNameClickEvent(fileNames[2],3);
    // addSongNameClickEvent(fileNames[3],4);
    // for (var i = 0; i < fileNames.length ; i++) {
    //       addSongNameClickEvent(fileNames[i],i+1);
    // }

    // $('#song1').click(function() {
    // var audio = document.querySelector('audio');
    // var  currentSong = audio.src;
    // if(currentSong.search(fileNames[0]) != -1)
    // {
    // toggleSong();
    // }
    // else {
    // audio.src = fileNames[0];
    // toggleSong();
    // }
    // });
    //
    // 	$('#song2').click(function() {
    //     var audio = document.querySelector('audio');
    // 		var  currentSong = audio.src;
    // 		if(currentSong.search(fileNames[1]) != -1)
    // 		{
    // 		toggleSong();
    // 		}
    // 		else {
    // 		audio.src = fileNames[1];
    // 		toggleSong();
    // 		}
    // 	});
    //
    // 	$('#song3').click(function() {
    //     var audio = document.querySelector('audio');
    // 		var  currentSong = audio.src;
    // 		if(currentSong.search(fileNames[2]) != -1)
    // 		{
    // 		toggleSong();
    // 		}
    // 		else {
    // 		audio.src = fileNames[2];
    // 		toggleSong();
    // 		}
    // 	});
    //
    // 	$('#song4').click(function() {
    //     var audio = document.querySelector('audio');
    // 		var  currentSong = audio.src;
    // 		if(currentSong.search(fileNames[3]) != -1)
    // 		{
    // 		toggleSong();
    // 		}
    // 		else {
    // 		audio.src = fileNames[3];
    // 		toggleSong();
    // 		}
    // 	});




  updateCurrentTime();
  setInterval(function() {
  updateCurrentTime();
  },1000);

  
  }




$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 2) {
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.main').removeClass('hidden');
    } else {
        $('#name-input').addClass('error');
    }
});
$('.play-icon').on('click', function() {
   toggleSong();
});


$('body').on('keypress', function(event) {
            if (event.keyCode == 32) {
                toggleSong();
            }
        });
