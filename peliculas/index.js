// IDIOMAS
let iFijo = "Idioma: ";
let sFijo = "Subs: ";
let iEs = `<i class="es flag"></i>`;
let iMx = `<i class="mx flag"></i>`;
let iUs = `<i class="us flag"></i>`;
let iUk = `<i class="uk flag"></i>`;

// CALIDADES
let cFijo = "Calidad: "
let cHD = `
<svg width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-badge-hd" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
<path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z"/>
</svg>`;
let c4K = `
<svg width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-badge-4k" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4.807 5.001C4.021 6.298 3.203 7.6 2.5 8.917v.971h2.905V11h1.112V9.888h.733V8.93h-.733V5.001h-1.71zm-1.23 3.93v-.032a46.781 46.781 0 0 1 1.766-3.001h.062V8.93H3.577zm9.831-3.93h-1.306L9.835 7.687h-.057V5H8.59v6h1.187V9.075l.615-.699L12.072 11H13.5l-2.232-3.415 2.14-2.584z"/>
<path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
</svg>`;
let c8K = `
<svg width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-badge-8k" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4.837 11.114c1.406 0 2.333-.725 2.333-1.766 0-.945-.712-1.38-1.256-1.49v-.053c.496-.15 1.02-.55 1.02-1.331 0-.914-.831-1.587-2.084-1.587-1.257 0-2.087.673-2.087 1.587 0 .773.51 1.177 1.02 1.331v.053c-.546.11-1.258.54-1.258 1.494 0 1.042.906 1.762 2.312 1.762zm.013-3.643c-.545 0-.95-.356-.95-.866s.405-.852.95-.852c.545 0 .945.343.945.852 0 .51-.4.866-.945.866zm0 2.786c-.65 0-1.142-.395-1.142-.984S4.2 8.28 4.85 8.28c.646 0 1.143.404 1.143.993s-.497.984-1.143.984zM13.408 5h-1.306L9.835 7.685h-.057V5H8.59v5.998h1.187V9.075l.615-.699 1.679 2.623H13.5l-2.232-3.414L13.408 5z"/>
<path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
</svg>`;

// IDIOMAS
for(const ele of document.getElementsByClassName("espanol")){ele.innerHTML=(iFijo)};
for(const ele of document.getElementsByClassName("espanol")){ele.innerHTML=(iFijo + iEs)};
for(const ele of document.getElementsByClassName("latino")){ele.innerHTML=(iFijo + iMx)};
for(const ele of document.getElementsByClassName("usa")){ele.innerHTML=(iFijo + iUs)};
for(const ele of document.getElementsByClassName("england")){ele.innerHTML=(iFijo + iUk)};

// ESTRELLAS
let estrella1 =
`<span class="info_movie float-right">
<i class="fas fa-star"></i>
1 / 10
</span>`;
let estrella2 =
`<span class="info_movie float-right">
<i class="fas fa-star"></i>
2 / 10
</span>`;
let estrella3 =
`<span class="info_movie float-right">
<i class="fas fa-star"></i>
3 / 10
</span>`;
let estrella4 =
`<span class="info_movie float-right">
<i class="fas fa-star"></i>
4 / 10
</span>
`;
let estrella5 =
`<span class="info_movie float-right">
<i class="fas fa-star"></i>
5 / 10
</span>`;
let estrella6 =
`<span class="info_movie float-right">
<i class="fas fa-star"></i>
6 / 10
</span>`;
let estrella7 =
`<span class="info_movie float-right">
<i class="fas fa-star"></i>
7 / 10
</span>`;
let estrella8 =
`<span class="info_movie float-right">
<i class="fas fa-star"></i>
8 / 10
</span>`;
let estrella9 =
`<span class="info_movie float-right">
<i class="fas fa-star"></i>
9 / 10
</span>`;
let estrella10 =
`<span class="info_movie float-right">
<i class="fas fa-star"></i>
10 / 10
</span>`;

// CALIDADES
for(const ele of document.getElementsByClassName("calidadHD")){ele.innerHTML=(cFijo + cHD)};
for(const ele of document.getElementsByClassName("calidad4K")){ele.innerHTML=(cFijo + c4K)};
for(const ele of document.getElementsByClassName("calidad8K")){ele.innerHTML=(cFijo + c8K)};

// ESTRELLAS
for(const ele of document.getElementsByClassName("star-1")){ele.innerHTML=(estrella1)};
for(const ele of document.getElementsByClassName("star-2")){ele.innerHTML=(estrella2)};
for(const ele of document.getElementsByClassName("star-3")){ele.innerHTML=(estrella3)};
for(const ele of document.getElementsByClassName("star-4")){ele.innerHTML=(estrella4)};
for(const ele of document.getElementsByClassName("star-5")){ele.innerHTML=(estrella5)};
for(const ele of document.getElementsByClassName("star-6")){ele.innerHTML=(estrella6)};
for(const ele of document.getElementsByClassName("star-7")){ele.innerHTML=(estrella7)};
for(const ele of document.getElementsByClassName("star-8")){ele.innerHTML=(estrella8)};
for(const ele of document.getElementsByClassName("star-9")){ele.innerHTML=(estrella9)};
for(const ele of document.getElementsByClassName("star-10")){ele.innerHTML=(estrella10)};

// SUBS
for(const ele of document.getElementsByClassName("subtitulos")){ele.innerHTML=(sFijo + "No")};
for(const ele of document.getElementsByClassName("subtitulos espanol")){ele.innerHTML=(sFijo + iEs)};
for(const ele of document.getElementsByClassName("subtitulos latino")){ele.innerHTML=(sFijo + iMx)};
for(const ele of document.getElementsByClassName("subtitulos usa")){ele.innerHTML=(sFijo + iUs)};
for(const ele of document.getElementsByClassName("subtitulos england")){ele.innerHTML=(sFijo + iUk)};
