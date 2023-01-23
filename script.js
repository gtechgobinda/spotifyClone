console.log('Welcome to spotifty');

//Initialized the variables
let songIndex=0;
let audioElement =new Audio('./songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"King - Maan Meri Jaan",filePath:"./songs/1.mp3",coverPath:"./covers/1.jpg"},
    {songName:"Arijit Singh- Kesariya",filePath:"./songs/2.mp3",coverPath:"./covers/2.jpg"},
    {songName:"Arijit Singh - Apna Bana Le",filePath:"./songs/3.mp3",coverPath:"./covers/3.jpg"},
    {songName:"Arijit Singh- Tu Hi Yaar Mera",filePath:"./songs/4.mp3",coverPath:"./covers/4.jpg"},
    {songName:"Atif Aslam - Tera Hone Laga Hoon",filePath:"./songs/5.mp3",coverPath:"./covers/5.jpg"},
    {songName:"Arijit Singh - Jaan Nisaar (Arijit)",filePath:"./songs/6.mp3",coverPath:"./covers/6.jpg"},
    {songName:"Pritam, Arijit Singh - Shayad",filePath:"./songs/7.mp3",coverPath:"./covers/7.jpg"},
    {songName:"Pritam, Arijit Singh - Khairiyat",filePath:"./songs/8.mp3",coverPath:"./covers/8.jpg"},
    {songName:"King - Tu Aake Dekhle",filePath:"./songs/9.mp3",coverPath:"./covers/9.jpg"},
    {songName:"Akhil Sachdeva, Tulsi Kumar - Tera Ban Jaunga",filePath:"./songs/10.mp3",coverPath:"./covers/10.jpg"}
]
songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName
})


// audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');   
        gif.style.opacity=0;
    }
})



//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress);
    myProgressBar.value=progress;
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
            // console.log(e.target);
            makeAllPlays();
            songIndex=parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src=`./songs/${songIndex+1}.mp3`;
            masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src=`./songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src=`./songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})