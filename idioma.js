let iFijo = "Idioma: ";
let sFijo = "Subs: ";
let iEs = `<i class="es flag"></i>`;
let iMx = `<i class="mx flag"></i>`;
let iUs = `<i class="us flag"></i>`;
let iUk = `<i class="uk flag"></i>`;

for(const ele of document.getElementsByClassName("espanol")){ele.innerHTML=(iFijo)};
for(const ele of document.getElementsByClassName("espanol")){ele.innerHTML=(iFijo + iEs)};
for(const ele of document.getElementsByClassName("latino")){ele.innerHTML=(iFijo + iMx)};
for(const ele of document.getElementsByClassName("usa")){ele.innerHTML=(iFijo + iUs)};
for(const ele of document.getElementsByClassName("england")){ele.innerHTML=(iFijo + iUk)};
// SUBS
for(const ele of document.getElementsByClassName("subtitulos")){ele.innerHTML=(sFijo + "No")};
for(const ele of document.getElementsByClassName("subtitulos espanol")){ele.innerHTML=(sFijo + iEs)};
for(const ele of document.getElementsByClassName("subtitulos latino")){ele.innerHTML=(sFijo + iMx)};
for(const ele of document.getElementsByClassName("subtitulos usa")){ele.innerHTML=(sFijo + iUs)};
for(const ele of document.getElementsByClassName("subtitulos england")){ele.innerHTML=(sFijo + iUk)};