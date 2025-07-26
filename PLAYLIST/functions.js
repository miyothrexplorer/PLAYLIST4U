let hasStarted = false;
let currentSongIndex = 0;

const slider = document.querySelector(".slider");
const timeDisplay = document.querySelector(".time");
const playBtn = document.querySelector(".play-btn");
const backBtn = document.querySelector(".back-btn");
const nextBtn = document.querySelector(".next-btn");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const albumCover = document.getElementById("albumCover");
const lyricsBox = document.getElementById("lyrics");
const songInfo = document.getElementById("songInfo");
const volumeSlider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");
const audio = document.getElementById("audioPlayer");

audio.volume = 0.3;
volumeValue.textContent = "30%";

// Update volume when slider changes
volumeSlider.addEventListener("input", () => {
  const volume = parseFloat(volumeSlider.value);
  audio.volume = volume;
  volumeValue.textContent = Math.round(volume * 100) + "%";
});


const songs = [
  {
    title: "MAHAL",
    artist: "Dilaw",
    src: "Dilaw - Mahal.mp3",
    cover: "mahal.jpg",
    lyrics: `
    

Kahit na mahal magmahal~

Kung burado na ang salitang magkano

At wala nang bilang ang isa, dalawa o tatlo

'Di masusukat ang kahit anong numero

Ang malambing na pagtingin mo, mahal ko


'Di kailangan palaging magarbo

Magarang damit plantsado at bagong sapatos

Alam kong hatid-sundo ka ng parents mo

Pasensya ka na kung walk trip lang tayo


Oh, oh-oh, hindi ito mabibili

Ang pagtingin ko sa'yo, bhie

Hug mo ako nang mahigpit

Palapit, walang mas hihigit

'Di na magtitipid

Itataya ko hanggang langit


Kahit na mahal magmahal
Ako'y tatawad nang husto
Maubos man ako sigurado
Tataya pa rin sa'yo

Ibibigay mo nga ba dapat ang lahat
Kapag nagmamahal ka ng totoo?

Kung ang sagot mo ma'y "Hindi, pasensya na"
Ah, ah, ah, ouch, magkasalungat

Malabo man na mangyari, push ko pa rin 'to, pri
Magmukha mang tanga, gano'n talaga mahal kita

Oh, oh-oh, hindi ito mabibili
Ang pagtingin ko sa'yo, bhie

Hug mo ako nang mahigpit
Palapit, walang mas hihigit

'Di na magtitipid
Itataya ko hanggang langit


Kahit na mahal magmahal
Ako'y tatawad nang husto (Ako'y tatawad, ooh, ako'y tatawad nang husto)

Maubos man ako sigurado
Tataya pa rin sa'yo (Ako ay tataya, ako ay tataya)

Kahit na mahal magmahal
Ako'y tatawad nang husto (Ako'y tatawad, ooh, ako'y tatawad nang husto)
Kahit na madalas akong talo
Tataya pa rin sa'yo (Ako ay tataya, ako ay tataya)

Kahit na mahal magmahal

Ako ay tatawad nang husto

Kahit na mahal magmahal

Ako ay tatawad nang husto















































`

  },
  {
    title: "PAG IBIG NG IKAW AT AKO",
    artist: "Earl Agustin",
    src: "Pag-ibig ng Ikaw at Ako.mp3",
    cover: "earl.png",
    lyrics: ` 
    

          .....
  
          .....

          .....

Kakaiba

Pag-ibig nating dalawa, 'di maikukumpara

Pagmamahalang tapat at totoo

Pag-ibig ng ikaw at ako, mm

Sa una pa lang, ramdam ko na

Ligtas at masaya ang puso 'pag nariyan ka

'Pag 'di ka kasama, 'di mangangamba

Kasi alam kong sa akin ka

Ooh, balewala ang sasabihin ng iba

At kahit na hindi nila maiintindihan

Kakaiba, (Kakaiba) kakaiba


Kakaiba

Pag-ibig nating dalawa, 'di maikukumpara

Pagmamahalang tapat at totoo (Tapat at totoo)

Pag-ibig ng ikaw at ako, oh

Tiwala sa iyo'y buong-buo (Buong-buo)

Panatag na ako sa pagmamahal mo

At sakali man na magkamali

Ay aayusin at tatanggapin

Ooh, balewala ang sasabihin ng iba

At kahit na hindi nila maiintindihan

Kakaiba, (Kakaiba) kakaiba


Kakaiba

Pag-ibig nating dalawa, 'di maikukumpara

Pagmamahalang tapat at totoo (Tapat at totoo)

Pag-ibig ng ikaw at

Kakaiba

Pag-ibig nating dalawa, 'di maikukumpara

Pagmamahalang tapat at totoo (Tapat at totoo)

Pag-ibig ng ikaw at ako


Oh, nating dalawa

Ating dalawa, oh, yeah

Pag-ibig mo, pag-ibig ko, oh, woah


Kakaiba

Pag-ibig nating dalawa, 'di maikukumpara

Pagmamahalang tapat at totoo

Pag-ibig ng ikaw at ako




































`



  },
  {
    title: "DAMAG",
    artist: "SunKissed Lola",
    src: "damag.mp3",
    cover: "SunKissed Lola.jpg",
    lyrics: `
    






Habang malalim ang gabi

Ating sulitin na ang bawat sandali

Dahan-dahan mong ibaling ang iyong tingin

Patungo sa akin

          .....

 
'Di mo ba gustong ako'y nagsusumamo

Para kang bugtong palagi kang malabo

'Di mapakali damdamin ay kabado

Ikaw na ang sanhi ikaw pa rin ang puno't dulo


Ba't 'di ba pwedeng pagbigyan

Ang nararamdaman

  
Manatili munang magkatabi

Hanggang umaga lang

       
Makasama habang malalim ang gabi (hahawakan magdamagan)

Ating sulitin na ang bawat sandali (sasamahan ka mahal)

Dahan-dahan mong ibaling ang iyong tingin (hahawakan magdamagan)

Patungo sa akin (sasamahan ka)

-


-


-


Pwede bang pagbigyan

Ang nararamdaman hmm (nararamdaman)

Sa 'kin ay tumabi

Hanggang umaga lang (hanggang umaga lang)


Mahagkan ka habang malalim ang gabi (hahawakan magdamagan)

Ating sulitin na ang bawat sandali (sasamahan ka mahal)

Dahan-dahan mong ibaling ang iyong tingin (hahawakan magdamagan)

Tungo sa akin (sasamahan ka)


Makasama hanggang umaga (hahawakan)

'Di mo kailangang mag-atubili (magdamagan)

Dito ka sa aking tabi (sasamahan ka mahal)

Mahagkan ka hanggang umaga (hahawakan)

'Di mo kailangang mag-atubili (magdamagan)

Dito ka sa aking tabi (sasamahan ka)























`
  },
  {
    title: "WALTZ OF FOUR LEFT FEET",
    artist: "Shirebound and Busking",
    src: "Waltz of Four Left Feet.mp3",
    cover: "shirebound.png",
    lyrics: `
    

Sapat na sa 'kin ang ganito oh

Ang pagmasdan ka sa malayo

Kapag kinausap walang masagot

Hininga'y lagot


Hindi ko naman yata ikamamatay

Kung hindi ko mahawakan ang iyong kamay

Handa 'kong mabuhay sa aking kalokohan

Kung wala ka sa 'king buhay walang kalungkutan

Munting ligayang iyong hatid

Tuwing dahan-dahan kang darating

Kagandahan masisilayan

Dahan-dahang lilisan

Hindi ko naman yata ikamamatay

Kung hindi ko mahawakan ang iyong kamay

Handa 'kong harapin ang kasinungalingan

Kung wala ka sa 'king buhay walang kakulangan

Sapat na sa akin (na sa akin)

Hindi na aamin (na aamin)

Hindi na aasa (na aasa)

Ako'y maligaya (maligaya)

Sapat na sa akin

'Di na aaminin

Hindi na aasa

Ako'y liligaya

Hindi ko naman yata ikamamatay

Kung hindi ko mahawakan ang iyong kamay

Handa 'kong mabuhay sa aking kalokohan

Kung wala ka sa 'king buhay walang kalungkutan

Hindi ko yata tanggap ang buhay

Kung sa'n 'di ko mahawakan ang iyong kamay

Handa 'kong harapin ka walang katiyakan

Kahit na takot sa maaaring kasagutan









































`
  },
  {
    title: "DALANGIN",
    artist: "Earl Agustin",
    src: "Dalangin.mp3",
    cover: "dalangin.jpg",
    lyrics: `
    







Nahulog sa 'yong mga mata

Tila ba'y ‘di na makawala

Nais ko lang ay magtanong

Maari bang humingi ng pagkakataon


Na mahawakan ang 'yong mga kamay

At sa awitin na ‘to tayo'y sasabay

Ikaw lang ang pipiliin oh wala nang iba

Ikaw ang panalangin

Na makasama hanggang sa pagtanda

At lagi kong uulitin ipapaalala sa 'yo

Ikaw ang panalangin

Ikaw ang panalangin

Pangakong ika'y aalagaan

Ibibigay lahat pati ang buwan

At sa ilalim nitong mga bituin

Ay aaminin na ang tunay na pagtingin

At hahawakan ang 'yong mga kamay

At sa awitin na 'to tayo'y sasabay

Ikaw lang ang pipiliin oh wala nang iba

Ikaw ang panalangin
Na makasama hanggang sa pagtanda

At lagi kong uulitin ipapaalala sa 'yo

Ikaw ang panalangin

Ikaw ang panalangin

Ikaw lang ang pipiliin oh wala nang iba

Ikaw ang panalangin

At lagi kong uulitin ipapaalala sa 'yo

Ikaw ang panalangin

Ikaw ang panalangin

Ohh whoa wala nang iba

Ang panalangin ko
Na makasama hanggang sa pagtanda

At lagi kong uulitin ipapaalala sa 'yo

Ikaw ang panalangin (ikaw ang panalangin)

Ikaw ang panalangin (ikaw ang panalangin)

Whoa ohh




































`
  }
];

// Load song details
function loadSong(index) {
  const song = songs[index];
  songTitle.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;

  albumCover.style.opacity = 0;
  setTimeout(() => {
    albumCover.src = song.cover;
    albumCover.onload = () => {
      albumCover.style.opacity = 1;
    };
  }, 200);

  lyricsBox.innerText = song.lyrics;
  audio.pause();
  playBtn.classList.remove("playing");
  audio.volume = 1;
}

// Toggle play/pause
function togglePlayPause() {
  if (!hasStarted) {
    hasStarted = true;
    songInfo.style.display = "block";
    loadSong(currentSongIndex);
  }

  if (audio.paused) {
    audio.play();
    playBtn.classList.add("playing");
  } else {
    audio.pause();
    playBtn.classList.remove("playing");
  }
}

// Crossfade transition
function crossfadeToSong(index) {
  let fadeOut = setInterval(() => {
    if (audio.volume > 0.1) {
      audio.volume -= 0.1;
    } else {
      clearInterval(fadeOut);
      audio.volume = 0;
      audio.pause();

      loadSong(index);
      audio.play();
      playBtn.classList.add("playing");

      let fadeIn = setInterval(() => {
        if (audio.volume < 0.9) {
          audio.volume += 0.1;
        } else {
          clearInterval(fadeIn);
          audio.volume = 1;
        }
      }, 100);
    }
  }, 100);
}

// Next and Previous controls
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  crossfadeToSong(currentSongIndex);
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  crossfadeToSong(currentSongIndex);
}

// Initial DOM setup
document.addEventListener("DOMContentLoaded", () => {
  albumCover.src = "bear.png"; 
  songInfo.style.display = "none";

  playBtn.addEventListener("click", togglePlayPause);
  nextBtn.addEventListener("click", nextSong);
  backBtn.addEventListener("click", prevSong);
});

// Time display + progress bar update
function updateLyricsScroll() {
  const current = audio.currentTime;
  const duration = audio.duration;

  if (!isNaN(duration)) {
    slider.value = (current / duration) * 100;

    const minutes = Math.floor(current / 60);
    const seconds = Math.floor(current % 60).toString().padStart(2, "0");
    timeDisplay.textContent = `${minutes}:${seconds}`;

    const lyricsHeight = lyricsBox.scrollHeight - lyricsBox.clientHeight;
    const scrollSpeed = 0.82; 
    const scrollTop = (current / duration) * lyricsHeight * scrollSpeed;

    lyricsBox.scrollTop = scrollTop;
  }

  requestAnimationFrame(updateLyricsScroll);
}

audio.addEventListener("play", () => {
  requestAnimationFrame(updateLyricsScroll);
});


// Reset lyrics scroll on play
audio.addEventListener("play", () => {
  lyricsBox.scrollTop = 0;
});

// Seek when user drags slider
slider.addEventListener("input", () => {
  const duration = audio.duration;
  if (!isNaN(duration)) {
    audio.currentTime = (slider.value / 100) * duration;
  }
});
