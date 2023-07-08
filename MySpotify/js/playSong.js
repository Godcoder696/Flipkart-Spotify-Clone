console.log("WELCOME TO MY SPOTIFY! ");

// ALL SONGS

let allSongs=[
    {songName: "Grateful", filePath:"/songs/Grateful-Neffex.mp3", posterPath:"/song posters/Neffex_GrateFul.jpg", artistName:"Neffex",LikedSong:0,coverImg:"/artist Cover Pics/NEFFEX.jpg",aboutBand:`Neffex is an American music project by Bryce Savage, that originally included Cameron Wales. They produced remixes and original songs characterized by a mixture of electronic and rap genres. While still a duo, Savage wrote the lyrics, produced the tracks, and sang the songs while Wales mixed and mastered them`},
    {songName: "Rumors", filePath:"/songs/Rumors-Neffex.mp3", posterPath:"/song posters/Rumors-Neffex.jpeg", artistName:"Neffex",LikedSong:0,coverImg:"/artist Cover Pics/NEFFEX.jpg",aboutBand:`Neffex is an American music project by Bryce Savage, that originally included Cameron Wales. They produced remixes and original songs characterized by a mixture of electronic and rap genres. While still a duo, Savage wrote the lyrics, produced the tracks, and sang the songs while Wales mixed and mastered them`},
    {songName: "Mi Amor", filePath:"/songs/Mi Amor-Sharn.mp3", posterPath:"/song posters/Mi-Amor.jpg", artistName:"Sharn",LikedSong:0,coverImg:"/artist Cover Pics/sharn.webp",aboutBand:`Sharan is an Indian singer who produces majorly Punjabi Hits. He made his singing debut in 2010 and mostly wrote romantic songs and small supporting roles. `},
    {songName: "Stay", filePath:"/songs/Stay-Kid Laroi.mp3", posterPath:"/song posters/Kid_Laroi.jpg", artistName:"Kid Laroi",LikedSong:0,coverImg:"/artist Cover Pics/the kid laroi.jpg",aboutBand:`Charlton Kenneth Jeffrey Howard, known professionally as the Kid Laroi, is an Australian rapper and singer-songwriter. He originally gained recognition from his association and friendship with American rapper Juice Wrld while he was on tour in Australia.`},
    {songName: "False Pretense", filePath:"/songs/False Pretense.mp3", posterPath:"/song posters/False_Pretense.jpg", artistName:"Red JumpSuit Apparatus",LikedSong:0,coverImg:"/artist Cover Pics/Red JumpSuit Apparatus.jpg",aboutBand:`The Red Jumpsuit Apparatus is an American rock band formed in Middleburg, Florida, in 2003. The band's current members include Ronnie Winter, Joey Westwood, Josh Burke, Randy Winter, and John Espy. They have released five studio albums to date. The band is best known for their 2006 major-label debut Don't You Fake It.`},
    {songName: "Closer", filePath:"/songs/Closer-The ChainSmokers.mp3", posterPath:"/song posters/Closer.jpg", artistName:"The Chainsmokers",LikedSong:0,coverImg:"/artist Cover Pics/TheChainsmokers.jpeg",aboutBand:`The Chainsmokers are an American electronic DJ and production duo consisting of Alexander "Alex" Pall and Andrew "Drew" Taggart. They started out by releasing remixes of songs by indie artists. The EDM-pop duo achieved a breakthrough with their 2014 song "Selfie", which became a top-twenty single in several countries. They have won a Grammy award, two American Music Awards, seven Billboard Music Awards and nine iHeartRadio Music Awards. According to Forbes 2019 list of highest-paid celebrities, the Chainsmokers were the highest-paid DJs, dethroning Calvin Harris after six years.`},
    {songName: "Stronger", filePath:"/songs/Stronger-Kanye West.mp3", posterPath:"/song posters/Stronger.jpg", artistName:"Kanye West",LikedSong:0,coverImg:"/artist Cover Pics/Kanye West.jpeg",aboutBand:`Ye is an American rapper, singer, songwriter, record producer, and fashion designer. Born in Atlanta and raised in Chicago, West gained recognition as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several artists and developing the "chipmunk soul" sampling style.`},
    {songName: "Faded", filePath:"/songs/Faded-Alan Walker.mp3", posterPath:"/song posters/Faded.jpeg", artistName:"Alan Walker",LikedSong:0,coverImg:"/artist Cover Pics/Alan Walker.webp",aboutBand:`Alan Olav Walker (born 24 August 1997) is a Norwegian music producer and DJ, primarily known for his single "Faded" (2015), which was certified platinum in 14 countries. He has also released several known songs including "Force" (2015), "Sing Me to Sleep" (2016), "All Falls Down" featuring Noah Cyrus and Digital Farm Animals (2017), "Darkside" (2018), "Diamond Heart" (2018), "On My Way" featuring Sabrina Carpenter and Farruko (2019), and "Alone, Pt. II" featuring Ava Max (2019), all of which attracted hundreds of millions of views on YouTube. Three of his songs—"Faded", "Alone" (2016) and "The Spectre" (2017)—have garnered over a billion views on YouTube.`},
    {songName: "21 Guns", filePath:"/songs/21 Guns-Green_Day.mp3", posterPath:"/song posters/21 Guns.jpg", artistName:"Green Day",LikedSong:0,coverImg:"/artist Cover Pics/Green Day.jpg",aboutBand:`Green Day is an American rock band formed in the East Bay of California in 1987 by lead vocalist and guitarist Billie Joe Armstrong, together with bassist and backing vocalist Mike Dirnt.`},
    {songName: "Feel Invincible", filePath:"/songs/Feel Invincible-Skillet.mp3", posterPath:"/song posters/Feel Invincible.jpg", artistName:"Skillet",LikedSong:0,coverImg:"/artist Cover Pics/Skillet.webp",aboutBand:`Skillet is an American Christian rock band formed in Memphis, Tennessee, in 1996. The band currently consists of husband and wife duo John Cooper and Korey Cooper along with Jen Ledger and Seth Morrison. The band has released eleven albums, two of which, Collide and Comatose, received Grammy nominations.`}
];


// GLOBAL VARIABLES

let currentSongIndex=0;
let change= false;
let path= allSongs[currentSongIndex].filePath;
let songBg= document.getElementById('myGifBg');
let audioElement= new Audio(path);
let masterPlay= document.getElementById('play');
let seek= document.getElementById('progressBar');
let songGif= document.getElementById('visualizer');
let setVolume= document.getElementById('soundIcon');
let like= document.getElementById('likeButton');
let artistInfo= document.getElementById('artistInfo');
let info= document.getElementById('info');
let infoFlag=0;


// PLAY BUTTON

let soundBar= document.getElementById('soundBar');
soundBar.value=0.23*100;

masterPlay.addEventListener('click',()=>{
    audioElement.volume= soundBar.value/100;
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        masterPlay.src='/images/pause.png';
        songGif.style.opacity=1;
        songBg.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.src='/images/play-button.png';
        songGif.style.opacity=0;
    }
})


// SEEK
// let coveredTime= document.getElementById('coveredTime');
// let totalTime= document.getElementById('totalTime');

let subPoster= document.getElementById('subPoster');
let smallName= document.getElementById('smallName');
let artistName= document.getElementById('smallArtistName');
let myGifBg= document.getElementById('myGifBg');

audioElement.addEventListener('timeupdate',()=>{
    if(audioElement.currentTime==audioElement.duration){
        currentSongIndex++;
        audioElement.src= allSongs[currentSongIndex].filePath;
        audioElement.play();

        subPoster.src= allSongs[currentSongIndex].posterPath;
        smallName.innerHTML= allSongs[currentSongIndex].songName;
        artistName.innerHTML= allSongs[currentSongIndex].artistName;
        myGifBg.src= allSongs[currentSongIndex].posterPath;

        songGif.style.opacity=1;
    }
    let timeProgress= (audioElement.currentTime/audioElement.duration)*100;
    seek.value= timeProgress;
    
    if(allSongs[currentSongIndex].LikedSong==1) like.src="/images/heart-filled-green.png";
    else like.src="/images/heart.png";

})

seek.addEventListener('change',()=>{
    audioElement.currentTime= (seek.value*audioElement.duration)/100;
})


// SOUND

let preVol= 0;

setVolume.addEventListener('click',()=>{
    if(audioElement.volume!=0 ){
        setVolume.src="/images/mute.png";
        preVol= audioElement.volume;
        audioElement.volume=0;
        soundBar.value=0;
    }
    else{
        setVolume.src="/images/sound.png";
        audioElement.volume=preVol;
        soundBar.value= preVol*100;
    }
})


soundBar.addEventListener('change',()=>{
    if(soundBar.value==0){
        audioElement.volume= soundBar.value/100;
        setVolume.src="/images/mute.png";
    }
    else {
        audioElement.volume= soundBar.value/100;
        setVolume.src="/images/sound.png";
    }
})

// previous-Song

let prevButton= document.getElementById('previousButton');

prevButton.addEventListener('click',()=>{
    if(currentSongIndex<0){
        audioElement.currentTime=0;
    }
    else{
        currentSongIndex--;
        audioElement.src= allSongs[currentSongIndex].filePath;
    }
    subPoster.src= allSongs[currentSongIndex].posterPath;
    smallName.innerHTML= allSongs[currentSongIndex].songName;
    artistName.innerHTML= allSongs[currentSongIndex].artistName;
    myGifBg.src= allSongs[currentSongIndex].posterPath;
    audioElement.play();
    masterPlay.src='/images/pause.png'
    if(allSongs[currentSongIndex].LikedSong==1) like.src="/images/heart-filled-green.png";
    else like.src="/images/heart.png";
    artistInfo.style.opacity=0;
    info.src="/images/info-black.png";
    infoFlag=0;
    songGif.style.opacity=1;
    songBg.style.opacity=1;
})

// next-Song

let nextButton1= document.getElementById('nextButton');

nextButton1.addEventListener('click',()=>{
    if(currentSongIndex>=allSongs.length){
        audioElement.currentTime=0;
    }
    else{
        currentSongIndex++;
        audioElement.src=  allSongs[currentSongIndex].filePath;
    }
    subPoster.src= allSongs[currentSongIndex].posterPath;
    smallName.innerHTML= allSongs[currentSongIndex].songName;
    artistName.innerHTML= allSongs[currentSongIndex].artistName;
    myGifBg.src= allSongs[currentSongIndex].posterPath;
    audioElement.play();
    masterPlay.src='/images/pause.png'
    if(allSongs[currentSongIndex].LikedSong==1) like.src="/images/heart-filled-green.png";
    else like.src="/images/heart.png";
    artistInfo.style.opacity=0;
    info.src="/images/info-black.png";
    infoFlag=0;
    songGif.style.opacity=1;
    songBg.style.opacity=1;
})

// LIKE BUTTON


let likeFlag=0;

like.addEventListener('click',()=>{
    if(allSongs[currentSongIndex].LikedSong==0) {
        like.src="/images/heart-filled-green.png";
        likeFlag=1;
        allSongs[currentSongIndex].LikedSong=1;
    }
    else if(allSongs[currentSongIndex].LikedSong==1){
        like.src="/images/heart.png";
        likeFlag=0;
        allSongs[currentSongIndex].LikedSong=0;
    }
    for(let i=0;i<allSongs.length;i++) if(allSongs[i].LikedSong==1) console.log(allSongs[i].songName);
})



// GENERATE SONG LISTS
// Creating SongList 

let songLists= document.getElementById('songs1');

for(let i=0;i<allSongs.length;i++){
    let songTemp= document.createElement('div');
    songTemp.className= 'song';
    songTemp.id= i;

        // 1.   creating poster and appending
        let poster= document.createElement('img');
        poster.className='songImg';
        poster.id= i;
        poster.src=allSongs[i].posterPath;
        songTemp.appendChild(poster);


        // 2.   creating songDescription
        let songDescription= document.createElement('div');
        songDescription.className= 'songDescription';
        songDescription.id=i;

        // creating songName div and appending to songDescription
            let songName= document.createElement('div');
            songName.className= 'songName';
            songName.id=i;
            songName.innerHTML= allSongs[i].songName;
            songDescription.appendChild(songName);

        // cretaing artistName div
            let artist= document.createElement('div');
            artist.className='artistName';
            artist.id=i;
            artist.innerHTML=allSongs[i].artistName;
            songDescription.appendChild(artist);

        // Appending songDescription to songTemp
        songTemp.appendChild(songDescription)

        // 3.   creating songDate div
        let songDate= document.createElement('div');
        songDate.className='songDate';
        songDate.id=i;
        songDate.innerHTML='27-06-2023';
        songTemp.appendChild(songDate);

        // Appending songDate to songTemp
        songTemp.appendChild(songDate);

    // Appending songTemp to songList;
    songLists.appendChild(songTemp);
    sL= songLists;
}

// Adding Event Listener to SongLists

let songs= Array.from(document.getElementsByClassName('songs'));
console.log(songs.length);

for(let i=0;i<songs.length;i++){
    songs[i].addEventListener('click',(e)=>{
        console.log(e.target.id);
        currentSongIndex= Number.parseInt(e.target.id);
        console.log(currentSongIndex);
        audioElement.src= allSongs[currentSongIndex].filePath;
        audioElement.play();
        subPoster.src= allSongs[currentSongIndex].posterPath;
        smallName.innerHTML= allSongs[currentSongIndex].songName;
        artistName.innerHTML= allSongs[currentSongIndex].artistName;
        myGifBg.src= allSongs[currentSongIndex].posterPath;
        masterPlay.src='/images/pause.png'
        songGif.style.opacity=1;
        songBg.style.opacity=1;
        artistInfo.style.opacity=0;
        info.src="/images/info-black.png";
        infoFlag=0;
    })
}

// info tab

let coverImg= document.createElement('img');
let bandName= document.createElement('div');
let aboutBand= document.createElement('div');

info.addEventListener('click',()=>{
    
    
    if(infoFlag==0){
        artistInfo.style.opacity=1;
        infoFlag=1;
        info.src="/images/info.png"

        coverImg.className='artistCoverPic';
        coverImg.src= allSongs[currentSongIndex].coverImg;
        artistInfo.appendChild(coverImg);

        bandName.className='bandName';
        bandName.innerHTML= allSongs[currentSongIndex].artistName;
        artistInfo.appendChild(bandName);

        aboutBand.className='aboutBand';
        aboutBand.innerHTML= allSongs[currentSongIndex].aboutBand;
        artistInfo.appendChild(aboutBand);
    }
    else{
        artistInfo.removeChild(coverImg);
        artistInfo.removeChild(bandName);
        artistInfo.removeChild(aboutBand);

        artistInfo.style.opacity=0;
        infoFlag=0;
        info.src="/images/info-black.png"
    }
})


// Search Button

let searchSongs=
[
    "Grateful",
    "Rumors",
    "Mi Amor",
    "Stay",
    "False Pretense",
    "Closer",
    "Stronger",
    "Faded",
    "21 guns",
    "Feel Invincible"
]

let songInput= document.getElementById('songInput');
let resultBox= document.getElementById('resultBox');

let icon1= document.getElementById('icon1');
let songsMatched=[];

songInput.onkeyup=()=>{
    resultBox.style.opacity=1;
    let inputEntered= songInput.value;
    if(inputEntered.length!=0){
        songsMatched= searchSongs.filter((value)=>{
            if(value.toLowerCase().includes(inputEntered.toLowerCase())) return value;
        });
        if(songsMatched.length!=0) display(songsMatched);
        else{
            resultBox.innerHTML= "<ul>"+"<li>"+"no results found"+"</li>"+"</ul>";
        }
    }
    
}
function display(songsMatched){
    let content= songsMatched.map((item)=>{
        return "<li>"+item+"</li>";
    })
    content=content.join('');
    resultBox.innerHTML= "<ul>"+content+"</ul>";
}
icon1.addEventListener('click',()=>{
    resultBox.style.opacity=0;
})
window.addEventListener('click',()=>{
    resultBox.style.opacity=0;
})


