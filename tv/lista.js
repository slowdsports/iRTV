let formatoChannel =
`
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img beinn" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>BeIN Sports</h5></div>
        </div>
       </a>
    </div>
`;
let formatoChannel2 =
`
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img beinn" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>CeIN Sports</h5></div>
        </div>
       </a>
    </div>
`;
// PCLL
let beinus =
`
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img beinn" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>BeIN Sports</h5></div>
        </div>
       </a>
    </div>
`;
let beinn =
`
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img beinn" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>BeIN Ñ</h5></div>
        </div>
       </a>
    </div>
`;
let beinlaliga =
`
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img beinn" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>BeIN LaLiga</h5></div>
        </div>
       </a>
    </div>
`;
let bemad =
`
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img bemad" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>Be Mad!</h5></div>
        </div>
       </a>
    </div>
`;
let tyc =
`
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img tyc" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>TyC</h5></div>
        </div>
       </a>
    </div>
`;
let lequipe =
`
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img lequipe" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>L'Équipe</h5></div>
        </div>
       </a>
    </div>
`;
let tigohn =
`
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img tigo" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>Tigo Sports</h5></div>
        </div>
       </a>
    </div>
`;
let tigopy =
`
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img tigo" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>Tigo Sports</h5></div>
        </div>
       </a>
    </div>
`;
let goltvec =
`
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img goltvec" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5> Gol TV</h5></div>
        </div>
       </a>
    </div>
`;

for(const ele of document.getElementsByClassName("formato-channel")){ele.innerHTML=(formatoChannel)};
for(const ele of document.getElementsByClassName("formato-channel2")){ele.innerHTML=(formatoChannel2)};
for(const ele of document.getElementsByClassName("tv-beinus")){ele.innerHTML=(beinus)};
for(const ele of document.getElementsByClassName("tv-beinn")){ele.innerHTML=(beinn)};
for(const ele of document.getElementsByClassName("tv-beinlaliga")){ele.innerHTML=(beinlaliga)};
for(const ele of document.getElementsByClassName("tv-bemad")){ele.innerHTML=(bemad)};
for(const ele of document.getElementsByClassName("tv-tyc")){ele.innerHTML=(tyc)};
for(const ele of document.getElementsByClassName("tv-lequipe")){ele.innerHTML=(lequipe)};
for(const ele of document.getElementsByClassName("tv-tigopy")){ele.innerHTML=(tigopy)};
for(const ele of document.getElementsByClassName("tv-tigohn")){ele.innerHTML=(tigohn)};
for(const ele of document.getElementsByClassName("tv-goltvec")){ele.innerHTML=(goltvec)};
