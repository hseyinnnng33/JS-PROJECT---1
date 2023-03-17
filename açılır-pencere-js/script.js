const BirinciBtn = document.getElementById("birinci1");
const İkinciBtn = document.getElementById("ikinci1");
const UcuncuBtn = document.getElementById("ucuncu1");
const Birinciİmg = document.getElementById("birinci");
const İkinciİmg = document.getElementById("ikinci");
const Ucuncuİmg = document.getElementById("ucuncu");
const Acilisİmg = document.getElementById("genel1");

BirinciBtn.addEventListener("click", () =>{
    Birinciİmg.style.display = "block";
    Acilisİmg.style.display = "none";
    İkinciİmg.style.display = "none";
    Ucuncuİmg.style.display = "none";
});

İkinciBtn.addEventListener("click", () =>{
    İkinciİmg.style.display = "block";
    Acilisİmg.style.display = "none";
    Birinciİmg.style.display = "none";
    Ucuncuİmg.style.display = "none";
});

UcuncuBtn.addEventListener("click", () =>{
    Ucuncuİmg.style.display = "block";
    İkinciİmg.style.display = "none";
    Acilisİmg.style.display = "none";
    Birinciİmg.style.display = "none";
});