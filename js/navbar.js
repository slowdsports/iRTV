let navbarIconMovie = `
<a class="nav-bar-icon" href="javascript:void(0)">
    <i class="blancolor" data-feather="film"></i>
</a>
`;
let navbarIconTv = `
<a class="nav-bar-icon" href="javascript:void(0)">
    <i class="blancolor" data-feather="tv"></i>
</a>
`;
let navbarIconSports = `
<a class="nav-bar-icon" href="javascript:void(0)">
    <i class="blancolor" data-feather="chrome"></i>
</a>
`;
let navbarIconRadio = `
<a class="nav-bar-icon" href="javascript:void(0)">
    <i class="blancolor" data-feather="radio"></i>
</a>
`;
let navbarIconInfo = `
<a class="nav-bar-icon" href="javascript:void(0)">
    <i class="blancolor" data-feather="info"></i>
</a>
`;
let navbarLogo = `
<a class="navbar-brand mx-auto" href="#">
    <img src="https://i.ibb.co/kqmptsD/iRTVW.png" alt="" />
</a>
`;
let navbarFiltersMovie = `
    <div class="dropdown">
        <a class="nav-bar-icon" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="blancolor" data-feather="filter"></i>
        </a>        
        <div class="dropdown-menu bg-dark text-white" aria-labelledby="dropdownMenuButton">           
            <div class="row">
              <div class="col-12">
                <div class="list-group bg-dark text-white" id="list-tab" role="tablist">
                  <a class="list-group-item list-group-item-action bg-dark text-white active d-flex justify-content-center" id="list-todo-list" data-toggle="list" href="#list-todo" role="tab" aria-controls="todo">
                  Películas
                  </a>
                  <a class="list-group-item list-group-item-action bg-dark text-white d-flex justify-content-center" id="list-pais-list" data-toggle="list" href="#list-pais" role="tab" aria-controls="pais">
                  Idioma
                  </a>
                  <a class="list-group-item list-group-item-action bg-dark text-white d-flex justify-content-center" id="list-categoria-list" data-toggle="list" href="#list-categoria" role="tab" aria-controls="categoria">
                  Categoría
                  </a>
                  <a class="list-group-item list-group-item-action bg-dark text-white d-flex justify-content-center" id="list-categoria-list" data-toggle="list" href="#list-exclusiva" role="tab" aria-controls="exclusiva">
                  Exclusivas
                  </a>
                </div>
              </div>
            </div>
        </div>
        </div>
`;
let navbarFiltersTv = `
    <div class="dropdown">
        <a class="nav-bar-icon" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="blancolor" data-feather="filter"></i>
        </a>        
        <div class="dropdown-menu bg-dark text-white" aria-labelledby="dropdownMenuButton">           
            <div class="row">
              <div class="col-12">
                <div class="list-group bg-dark text-white" id="list-tab" role="tablist">
                  <a class="list-group-item list-group-item-action bg-dark text-white active d-flex justify-content-center" id="list-todo-list" data-toggle="list" href="#list-todo" role="tab" aria-controls="todo">
                  Canales
                  </a>
                  <a class="list-group-item list-group-item-action bg-dark text-white d-flex justify-content-center" id="list-pais-list" data-toggle="list" href="#list-pais" role="tab" aria-controls="pais">
                  País
                  </a>
                  <a class="list-group-item list-group-item-action bg-dark text-white d-flex justify-content-center" id="list-categoria-list" data-toggle="list" href="#list-categoria" role="tab" aria-controls="categoria">
                  Categoría
                  </a>
                </div>
              </div>
            </div>
        </div>
        </div>
`;
let navbarFiltersRadio = `
    <div class="dropdown">
        <a class="nav-bar-icon" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="blancolor" data-feather="filter"></i>
        </a>        
        <div class="dropdown-menu bg-dark text-white" aria-labelledby="dropdownMenuButton">           
            <div class="row">
              <div class="col-12">
                <div class="list-group bg-dark text-white" id="list-tab" role="tablist">
                  <a class="list-group-item list-group-item-action bg-dark text-white active d-flex justify-content-center" id="list-todo-list" data-toggle="list" href="#list-todo" role="tab" aria-controls="todo">
                  Estaciones
                  </a>
                  <a class="list-group-item list-group-item-action bg-dark text-white d-flex justify-content-center" id="list-pais-list" data-toggle="list" href="#list-pais" role="tab" aria-controls="pais">
                  País
                  </a>
                  <a class="list-group-item list-group-item-action bg-dark text-white d-flex justify-content-center" id="list-categoria-list" data-toggle="list" href="#list-categoria" role="tab" aria-controls="categoria">
                  Categoría
                  </a>
                </div>
              </div>
            </div>
        </div>
        </div>
`;
let navbarIconRight = `
<a class="nav-bar-icon" href="javascript:void(0)">
    <svg width="1.5em" height="2em" viewBox="0 0 16 16" class="bi bi-badge-hd" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
    <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z"/>
    </svg>
</a>
`;
let navbarIconSocial = `
<a class="nav-bar-icon" href="javascript:void(0)">
    <i class="blancolor" data-feather="users"></i>
</a>
`;

for(const ele of document.getElementsByClassName("navbar-logo")){ele.innerHTML=(navbarLogo)};
for(const ele of document.getElementsByClassName("navbar-icon-movie")){ele.innerHTML=(navbarIconMovie)};
for(const ele of document.getElementsByClassName("navbar-icon-tv")){ele.innerHTML=(navbarIconTv)};
for(const ele of document.getElementsByClassName("navbar-icon-sports")){ele.innerHTML=(navbarIconSports)};
for(const ele of document.getElementsByClassName("navbar-icon-radio")){ele.innerHTML=(navbarIconRadio)};
for(const ele of document.getElementsByClassName("navbar-icon-info")){ele.innerHTML=(navbarIconInfo)};
for(const ele of document.getElementsByClassName("navbar-filters-movie")){ele.innerHTML=(navbarFiltersMovie)};
for(const ele of document.getElementsByClassName("navbar-filters-tv")){ele.innerHTML=(navbarFiltersTv)};
for(const ele of document.getElementsByClassName("navbar-filters-radio")){ele.innerHTML=(navbarFiltersRadio)};
for(const ele of document.getElementsByClassName("navbar-icon-right")){ele.innerHTML=(navbarIconRight)};
for(const ele of document.getElementsByClassName("navbar-icon-social")){ele.innerHTML=(navbarIconSocial)};