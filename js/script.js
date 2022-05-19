

function calcAge(){
  let imgSI = document.querySelector('img')
  let audios = document.querySelector('audio')
  let spanAge = document.querySelector('span')

  let year = document.querySelector('#inp_number').value
  var data = new Date();
  var calc = data.getFullYear() - year;
  
  if (calc <= 10 && calc >= 0){
    imgSI.setAttribute('src',"./img/010.png")
    audios.setAttribute("src", "./songs/s01.mp3")
    spanAge.innerText = calc + " anos."

  }else if (calc <= 20 && calc >= 11){
    imgSI.setAttribute('src',"./img/10-20.png")
    audios.setAttribute("src", "./songs/s02.mp3")
    spanAge.innerText = calc + " anos."

  }else if (calc <= 30 && calc >= 21){
    imgSI.setAttribute('src',"./img/20-30.png")
    audios.setAttribute("src", "./songs/s03.mp3")
    spanAge.innerText = calc + " anos."
  }

  else if (calc <= 40 && calc >= 31){
    imgSI.setAttribute('src',"./img/30-40.png")
    audios.setAttribute("src", "./songs/s04.mp3")
    spanAge.innerText = calc + " anos."
  }
  else if (calc <= 50 && calc >= 41){
    imgSI.setAttribute('src',"./img/40-50.png")
    audios.setAttribute("src", "./songs/s05.mp3")
    spanAge.innerText = calc + " anos."
  }
  else if (calc <= 60 && calc >= 51){
    imgSI.setAttribute('src',"./img/60-70.png")
    audios.setAttribute("src", "./songs/s06.mp3")
    spanAge.innerText = calc + " anos."
  }

  else if (calc <= 70 && calc >= 61){
    imgSI.setAttribute('src',"./img/70-80.png")
    audios.setAttribute("src", "./songs/s07.mp3")
    spanAge.innerText = calc + " anos."
  }
  else if (calc <= 100 && calc >= 71){
    imgSI.setAttribute('src',"./img/80-100.png")
    audios.setAttribute("src", "./songs/s09.mp3")
    spanAge.innerText = calc + " anos."
  }
  else if (calc > 100) {
    imgSI.setAttribute('src',"./img/100-200.png")
    audios.setAttribute("src", "./songs/s10.mp3")
    spanAge.innerText = calc + " anos."
  }

}