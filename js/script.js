const URL_APLI='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=cb2f2d7e85a74e30e21982606b63c41a&hash=d6dc3d0003470b37fe73ea1be4f327e0';
const cargar=document.getElementById("marvel");


async function HeroesMarvel(){
fetch(URL_APLI)
.then(res=>res.json())
.then(res=>printData(res.data.results))
.catch(err=>console.log('Se genero un error: ',err));
const printData=(personaje)=>{
    console.log(personaje);
    
    let html='<div class="Principal">';
    let i=0;
    let name=[];
    let img=[];
    let descripcion=[];
    let urls=[];
    let ides=[];
    let series=[];
    let nombre=document.getElementById("id1").value;
    for(i=0;i<personaje.length;i++){
        name[i]=personaje[i].name;
        ides[i]=personaje[i].id;
        urls[i]=personaje[i].urls[0].url;
        img[i]=personaje[i];
        if(name[i]==nombre){
        descripcion[i]=personaje[i].description;
        if(!name[i]){
            name[i]="lo siento no se encontro el nombre del personaje.";
        }
        if(!img[i]){
            img[i]="lo siento no se encontro una imagen del personaje.";
        }
        if(!descripcion[i]){
            descripcion[i]="lo siento no se encontro la descripcion del personaje.";
        }
        html=html+`
        <div class="contenedor">
        <div class="mostrar">
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

HeroesTodos();



async function HeroesTodos(){
    fetch(URL_APLI)
    .then(res=>res.json())
    .then(res=>printData(res.data.results))
    .catch(err=>console.log('Se genero un error: ',err));
    const printData=(personaje)=>{
        console.log(personaje);
        
        let html='<div class="Principal">';
        let i=0;
        let name=[];
        let img=[];
        let descripcion=[];
        let urls=[];
        let ides=[];
        let series=[];
        let nombre=document.getElementById("id1").value;
        for(i=0;i<personaje.length;i++){
            name[i]=personaje[i].name;
            ides[i]=personaje[i].id;
            urls[i]=personaje[i].urls[0].url;
            img[i]=personaje[i];
            descripcion[i]=personaje[i].description;
            if(!name[i]){
                name[i]="lo siento no se encontro el nombre del personaje.";
            }
            if(!img[i]){
                img[i]="lo siento no se encontro una imagen del personaje.";
            }
            if(!descripcion[i]){
                descripcion[i]="lo siento no se encontro la descripcion del personaje.";
            }
            html=html+`
            <div class="contenedor">
            <span></span>
            <div class="mostrar">
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

