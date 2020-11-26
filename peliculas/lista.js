let formatoMovie =
`
<a href="go:peli1" class="href-ns">
      <div class="card card-movie bg-dark text-white">
        <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/detective-pikachu-trailer-poster-main.jpg" class="card-img-top" alt="...">
            <div class="card-body">
               <!-- PLAY BUTTON -- 
                <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                </i>
                <!-- PLAY BUTTON -->
                <h5 class="card-title">POKEMON Detective Pikachu</h5>
                    <span class="info_movie float-center">
                    Año: 2019 <br>
                    <span class="idioma england"></span>
                    <span class="calidad calidad4K"></span>
                    <br>
                    <span class="subtitulos espanol"></span>	   	    
                    </span>
                    <span class="star-1"></span>
              </div>
      </div>
   </a>
`;
let formatoMovie2 =
`
<a href="go:peli2" class="href-ns">
      <div class="card card-movie bg-dark text-white">
        <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/detective-pikachu-trailer-poster-main.jpg" class="card-img-top" alt="...">
            <div class="card-body">
               <!-- PLAY BUTTON -- 
                <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                </i>
                <!-- PLAY BUTTON -->
                <h5 class="card-title">SUKEMON Detective MANACHU</h5>
                    <span class="info_movie float-center">
                    Año: 2019 <br>
                    <span class="idioma espanol"></span>
                    <span class="calidad calidadHD"></span>
                    <br>
                    <span class="subtitulos usa"></span>	   	    
                    </span>
                    <span class="star-6"></span>
              </div>
      </div>
   </a>
`;

for(const ele of document.getElementsByClassName("formato-movie")){ele.innerHTML=(formatoMovie)};
for(const ele of document.getElementsByClassName("formato-movie2")){ele.innerHTML=(formatoMovie2)};