//esimese massiivi
const sonad=[
    'algorütm',
    'kavand',
    'kasutajaliides',
    'mudel',
    'andmebaasi skeem',
    'standart',
    'tsükkel',
    'andmetöötlus',
    'andmestruktuur',
    'arenduskeskkond',
    'projektihaldus tööriist',
    'kavandamine',
    'iteratsioon',
    'parandus',
    'koskmudel',
    'agiilne mudel',
    'spiraalne mudel',
    'inkrementaalne mudel',
    'nõudmised',
    'realiseerimine',
    'testimine',
    'integreerimine',
    'hooldus',
    'eelised',
    'puudused',
    'elutsükkel',
    'arendamine',
    'valideerimine'
];
//teine massiiv
const venesonad=[
    'алгоритм',
    'план',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных  ',
    'структура данных',
    'среда разработки',
    'инструмент управления проектами',
    'планирование',
    'итерация',
    'исправление',
    'каскадная модель',
    'гибкая модель',
    'спиральная модель',
    'инкрементная модель',
    'требования',
    'реализация',
    'тестирование',
    'интеграция',
    'обслуживание',
    'преимущества',
    'недостатки',
    'жизненный цикл',
    'разработка',
    'валидация'
];
//Esimene veeru funktsioonid
//Kirjuta random sõna
function randomSonad(){

    //random sõnad - arv
    const juhuslikSona = Math.floor(Math.random()*sonad.length);

    //võtme random sõna massivist
    const sona = sonad[juhuslikSona];

    //lisame HTML lehele

    document.getElementById("random-sona").innerHTML=sona;
}
//Kontrollimine
function kontrollima() {
    const sona = document.getElementById("random-sona").innerText;

    //Võtab sõna, mille kasutaja kirjutas
    const venesona = document.getElementById("kontroll").value;

    const indEesti = sonad.indexOf(sona);
    const indVene = venesonad.indexOf(venesona);

    if (indEesti === indVene && indEesti !== -1 && indVene !== -1) {
        document.getElementById("vastus").innerHTML = "Vastus: Õige!";
    } else {
        document.getElementById("vastus").innerHTML = "Vastus: Vale!";
    }
}

//Teise veeru funktsioonid
//Kirjuta random sõna
function randomSonad2(){

    //random sõnad - arv
    const juhuslikSona = Math.floor(Math.random()*venesonad.length);

    //võtme random sõna massivist
    const venesona = venesonad[juhuslikSona];

    //lisame HTML lehele

    document.getElementById("random-sona2").innerHTML=venesona;
}
//Kontrollimine
function kontrollima2() {
    const venesona = document.getElementById("random-sona2").innerText;

    //Võtab sõna, mille kasutaja kirjutas
    const sona = document.getElementById("kontroll2").value;

    const indEesti = sonad.indexOf(sona);
    const indVene = venesonad.indexOf(venesona);

    if (indEesti === indVene && indEesti !== -1 && indVene !== -1) {
        document.getElementById("vastus2").innerHTML = "Vastus: Õige!";
    } else {
        document.getElementById("vastus2").innerHTML = "Vastus: Vale!";
    }
}