function redirectToTaskList() {
window.location.href = './index.html'; // !!!!!!!!!!!!!!!!!!!!!!
  }



// function checkAnswers(task_1) 
 function checkAnswers() {
    var sukunimiValue = document.getElementById("sukunimi").value;
    var etunimetValue = document.getElementById("etunimet").value;
    var kutsumanimiValue = document.getElementById("kutsumanimi").value;
    var henkilötunnusValue = document.getElementById("henkilötunnus").value;
    var aidinkieliValue = document.getElementById("aidinkieli").value;
    var kansalaisuusValue = document.getElementById("kansalaisuus").value;
    var sukupuoliValue = document.getElementById("sukupuoli").value;
    var matkapuhelinValue = document.getElementById("matkapuhelin").value;
    var sahkopostiosoiteValue = document.getElementById("sahkopostiosoite").value;
    var lahiosoiteValue = document.getElementById("lahiosoite").value;
    var postitoimipaikkaValue = document.getElementById("postitoimipaikka").value;
    var kotikuntaValue = document.getElementById("kotikunta").value;

    var correctAnswers = {
        sukunimi: "Al-Saadi",
        etunimet: "Asmaa",
        kutsumanimi: "Asmaa",
        henkilötunnus: "111292-732G",
        aidinkieli: "arabia",
        kansalaisuus: "irakilainen",
        sukupuoli: "nainen",
        matkapuhelin: "0447272727",
        sahkopostiosoite: "asmaa_562@gmail.com",
        lahiosoite: "Puistotie 12 A 12",
        postitoimipaikka: "02150",
        kotikunta: "Espoo"
    };

    for (var key in correctAnswers) {
            var resultDiv = document.getElementById("result1");
            if (eval(key + "Value") === correctAnswers[key]) {
                resultDiv.innerHTML += "<p style='color: green;'>Vastaus oikein!</p>";
            } else {
                resultDiv.innerHTML += "<p style='color: red;'>Vastaus väärin, oikea vastaus: " + correctAnswers[key] + "</p>";
            }
        }





    // function checkAnswers(task_2) 
    var selectedOption = document.querySelector('input[name="flexRadioDefault"]:checked');

    var resultDiv = document.getElementById('result2');

    if (selectedOption) {
        if (selectedOption.id === 'flexRadioDefault1') {
            resultDiv.style.color = 'green';
            resultDiv.innerHTML = 'Vastaus on oikein';
        } else {
            resultDiv.style.color = 'red';
            resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: Ei suomessa suoritettuja tutkintoja.';
        }
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: Ei suomessa suoritettuja tutkintoja.';
    }






// function checkAnswers(task_3)
var todistuksenVuosiValue = document.getElementById("todistuksen_vuosi").value;

var resultDiv = document.getElementById("result3");

if (todistuksenVuosiValue.trim() === "") {
    resultDiv.style.color = 'green';
    resultDiv.innerHTML = 'Vastaus on oikein.';
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: Tyhjä kenttä. Ei tarvitse kirjoittaa mitään.';
}




    // function checkAnswers(task_4)
    var selectedOption = document.querySelector('input[name="flexRadioDefault_task_4"]:checked');

    var resultDiv = document.getElementById('result4');

    if (selectedOption) {
        if (selectedOption.id === 'flexRadioDefault6') {
            resultDiv.style.color = 'green';
            resultDiv.innerHTML = 'Vastaus on oikein';
        } else {
            resultDiv.style.color = 'red';
            resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: Olen suorittanut peruskoulun ulkomaillatähän.';
        }
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: Olen suorittanut peruskoulun ulkomaillatähän.';
    }






    // function checkAnswers(task_5) 
    var selectedOption = document.querySelector('input[name="flexRadioDefault_task_5"]:checked');

    var resultDiv = document.getElementById('result5');

    if (selectedOption) {
        if (selectedOption.id === 'flexRadioDefault9') {
            resultDiv.style.color = 'green';
            resultDiv.innerHTML = 'Vastaus on oikein';
        } else {
            resultDiv.style.color = 'red';
            resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: Aikaisemmin en suorittanut 10. luokkaa, en saanut Valman, Luvan tai Tuvan koulutusta.';
        }
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: Aikaisemmin en suorittanut 10. luokkaa, en saanut Valman, Luvan tai Tuvan koulutusta.';
    }



    // function checkAnswers(task_6) 
    var koulutuksen_nimiValue = document.getElementById("koulutuksen_nimi").value;
    var oppilaitosValue = document.getElementById("oppilaitos").value;
    var suoritusaikaValue = document.getElementById("suoritusaika").value;



    var correctAnswers1 = {
      koulutuksen_nimi: "kotoutumiskoulutuksen suomen kurssit 1-3",
      oppilaitos: "ABC-koulu",
      suoritusaika: "1.6.2022-31.5.2023"      
    };

    for (var key in correctAnswers1) {
            var resultDiv = document.getElementById("result6");
            if (eval(key + "Value") === correctAnswers1[key]) {
                resultDiv.innerHTML += "<p style='color: green;'>Vastaus oikein!</p>";
            } else {
                resultDiv.innerHTML += "<p style='color: red;'>Vastaus väärin, oikea vastaus: " + correctAnswers1[key] + "</p>";
            }
        }




// function checkAnswers(task_7) 
    var selectedOption = document.querySelector('input[name="flexRadioDefault_task_7"]:checked');

var resultDiv = document.getElementById('result7');

if (selectedOption) {
    if (selectedOption.id === 'flexRadioDefault10') {
        resultDiv.style.color = 'green';
        resultDiv.innerHTML = 'Vastaus on oikein';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: Olen kiinnostunut TUVA-koulutuksessa ammatillisista opinnoista.';
    }
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: Olen kiinnostunut TUVA-koulutuksessa ammatillisista opinnoista.';
}





// function checkAnswers(task_8) 
var selectedOption = document.querySelector('input[name="flexRadioDefault_task_8"]:checked');

var resultDiv = document.getElementById('result8');

if (selectedOption) {
    if (selectedOption.id === 'flexRadioDefault13') {
        resultDiv.style.color = 'green';
        resultDiv.innerHTML = 'Vastaus on oikein';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: En ole kiinnostunut Tuvan lukion koulutuksesta.';
    }
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: En ole kiinnostunut Tuvan lukion koulutuksesta.';
}




    // function checkAnswers(task_9) 
    var selectedOption = document.querySelector('input[name="flexRadioDefault_task_9"]:checked');

    var resultDiv = document.getElementById('result9');

    if (selectedOption) {
        if (selectedOption.id === 'flexRadioDefault17') {
            resultDiv.style.color = 'green';
            resultDiv.innerHTML = 'Vastaus on oikein';
        } else {
            resultDiv.style.color = 'red';
            resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: Ystävältä tai sukulaiseltatähän tulee rasti ruutuun.';
        }
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: Ystävältä tai sukulaiseltatähän tulee rasti ruutuun.';
    }











// function checkAnswers(task_10) 
var calendarValue = document.getElementById("calendar").value;

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
var currentDay = currentDate.getDate().toString().padStart(2, '0');

var currentDateString = currentYear + '-' + currentMonth + '-' + currentDay;

var resultDiv = document.getElementById("result10");

if (calendarValue === currentDateString) {
    resultDiv.style.color = 'green';
    resultDiv.innerHTML = 'Vastaus on oikein!';
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: ' + currentDateString;
}







var button = document.querySelector('.btn-success');
    button.style.display = 'none';




    
}

