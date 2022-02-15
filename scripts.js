
//O código serve para verificar se houve um clique ou movimento
//É importante pois o Drag do mousevent possui um clique
//Muitas vezes, queremos fechar uma div ao clicar fora dela, mas não ao arrastar

var moved

  var downListener = () => {moved = false}

  window.addEventListener('mousedown', downListener)
  
  var moveListener = () => {moved = true}

  window.addEventListener('mousemove', moveListener)
  
  var upListener = () => {
      if (moved == true) {
          console.log('Clicou e Arrastou (Drag)'), 
          document.getElementById("innerHtml").innerHTML = "Clicou e Arrastou (Drag)"
        } else {
            console.log('Somente Clicou'), 
            document.getElementById("innerHtml").innerHTML = "Somente Clicou"}
    }

  window.addEventListener('mouseup', upListener)


//animação desaparece ao clicar na div

function onClick(){
    document.getElementById("tutorialMouse").style.display = "none";;
}


//Criando o elemento arrastável - Apenas para Exemplificar e melhorar a UX do Teste

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
  
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    
    document.onmouseup = null;
    document.onmousemove = null;
  }
}