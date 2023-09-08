const URL_API='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=cb2f2d7e85a74e30e21982606b63c41a&hash=d6dc3d0003470b37fe73ea1be4f327e0'
const cargar=document.getElementById("informacion");

comicButton();

async function comicButton(){
    fetch(URL_API)
    .then(res=>res.json())
    .then(res=>printData(res.data.results))
    .catch(err=>console.log('Se genero un error: ',err));
    const printData=(personaje)=>{
        console.log(personaje);
        
        let html='<div class="Menu">';
        let i=0;
        let name=[];
        let img=[];
        let descripcion=[];
        let urls=[];
        let ides=[];
        let nombre=document.getElementById("Contenido").value;
        for(i=0;i<personaje.length;i++){
            name[i]=personaje[i].name;
            ides[i]=personaje[i].id;
            urls[i]=personaje[i].urls[0].url;
            img[i]=personaje[i];
            descripcion[i]=personaje[i].description;
            if(!name[i]){
                name[i]="Personaje no disponible.";
            }
            if(!img[i]){
                img[i]="imagen no disponible";
            }
            if(!descripcion[i]){
                descripcion[i]="Sin informacion";
            }
            html=html+`
            <div class="box">
            <div class="Inf" >
            <a href="${urls[i]}" class="direc">
                <img src="${img[i].thumbnail.path}.${img[i].thumbnail. extension}" alt="${name[i]}">
                </a>
                <h2>${name[i]}</h2>
                <h2>${ides[i]}</h2>
                <p>${descripcion[i]}</p>
            
            </div>
        </div>      
            
            `;
        }
        
        html=html+'</div>'
        cargar.innerHTML=html;
    
    
    }
}

var miDiv = document.getElementById("color");
var colors = ["#4286f4", "#4CAF50", "#7E57C2", "#26A69A"];


var currentIndex = 0; 

function changeColor() {
    miDiv.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; 
}

setInterval(changeColor, 500); 
async function HeroesMarvel(){
    fetch(URL_API)
    .then(res=>res.json())
    .then(res=>printData(res.data.results))
    .catch(err=>console.log('Se genero un error: ',err));
    const printData=(personaje)=>{
        console.log(personaje);
        
        let html='<div class="Menu">';
        let i=0;
        let name=[];
        let img=[];
        let descripcion=[];
        let urls=[];
        let ides=[];
        let series=[];
        let nombre=document.getElementById("Contenido").value;
        for(i=0;i<personaje.length;i++){
            name[i]=personaje[i].name;
            ides[i]=personaje[i].id;
            urls[i]=personaje[i].urls[0].url;
            img[i]=personaje[i];
            if(name[i]==nombre){
            descripcion[i]=personaje[i].description;
            if(!name[i]){
                name[i]="Personaje no disponible.";
            }
            if(!img[i]){
                img[i]="imagen no disponible";
            }
            if(!descripcion[i]){
                descripcion[i]="Sin informacion";
            }
            html=html+`
            <div class="Box">
            <div class="Inf">
            <a href="${urls[i]}" class="direc">
                <img class="imagenes" src="${img[i].thumbnail.path}.${img[i].thumbnail. extension}" alt="${name[i]}>
                </a>
            <div class="datos">
                <h2>${name[i]}</h2>
                <h2>${ides[i]}</h2>
                <p>${descripcion[i]}</p>
                </div>
            
            </div>
        </div>      
            
            `;
        }else{
                
        
        }
        
        html=html+'</div>'
        cargar.innerHTML=html;
    
    }
    }
    }
    
