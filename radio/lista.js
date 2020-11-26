let formatoRadio =
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
let formatoRadio2 =
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

for(const ele of document.getElementsByClassName("formato-radio")){ele.innerHTML=(formatoRadio)};
for(const ele of document.getElementsByClassName("formato-radio2")){ele.innerHTML=(formatoRadio2)};