window.onload = oppstart;

function oppstart(){
    document.querySelector("#knapp").onclick =alder;
}

function alder(){
    let alder = document.querySelector("#alder").value;
    if(alder<0){
        document.querySelector("#svar").innerHTML = "Du må skrive et positivt tall.";
    } else if(alder>69){
        document.querySelector("#svar").innerHTML = "Du burde ikke kjøre.";
    } else if(alder>17){
        document.querySelector("#svar").innerHTML = "Prøv bil, potensiellt motorsykkel.";
    } else if(alder>5){
        document.querySelector("#svar").innerHTML = "Sykkel fungerer bra for deg, så lenge du har bein.";
    } else if(alder>1){
        document.querySelector("#svar").innerHTML = "Kan du lese? Hvis ja, så få tak i en trehjulsykkel.";
    } else if(alder<=1){
        document.querySelector("#svar").innerHTML = "Legg deg.";
    }
}