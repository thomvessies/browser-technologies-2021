console.log(localStorage)

if (document.getElementById('studentGegevens')){
    formNaam = 'studentGegevens'
}
else if (document.getElementById('WAFS')){
    formNaam = 'WAFS'
}
else if (document.getElementById('CSSTTR')){
    formNaam = 'CSSTTR'
}
else if (document.getElementById('BT')){
    formNaam = 'BT'
}

document.getElementById('radiobuttonContainer').style.display = 'none';
document.getElementById('slideContainer').style.display = 'inline-block';

var meningSlider = document.getElementById('meningSlider');
var meningOutput = document.getElementById('meningValue');
meningOutput.innerHTML = meningSlider.value;
meningSlider.oninput = function(){
    meningOutput.innerHTML = this.value;
}

var moeilijkSlider = document.getElementById('moeilijkSlider');
var moeilijkOutput = document.getElementById('moeilijkValue');
moeilijkOutput.innerHTML = moeilijkSlider.value;
moeilijkSlider.oninput = function(){
    moeilijkOutput.innerHTML = this.value;
}

var uitlegSlider = document.getElementById('uitlegSlider');
var uitlegOutput = document.getElementById('uitlegValue');
uitlegOutput.innerHTML = uitlegSlider.value;
uitlegSlider.oninput = function(){
    uitlegOutput.innerHTML = this.value;
}

retrieveStudentGegevens(formNaam)

if (document.getElementById('studentButton')){
    let studentButton = document.getElementById('studentButton')
    studentButton.addEventListener('click', e => storeStudentGegevens(e))
}

if (document.getElementById('formButton')){
    let formButton = document.getElementById('formButton')
    formButton.addEventListener('click', e => storeFormGegevens(e, formNaam))
}

function storeStudentGegevens(e, formNaam){
    // console.log(e)
    // localStorage.clear()
    var nameValue = document.querySelector('#naam').value
    localStorage.setItem('naam', nameValue)
    var stdnrValue = document.querySelector('#stdnr').value
    localStorage.setItem('stdnr', stdnrValue)
    document.getElementById(formNaam).action = "navigatie.html";
}

function storeFormGegevens(e){
    // localStorage.clear()
    var nameValue = document.querySelector('#naam').value
    localStorage.setItem('naam', nameValue)
    var stdnrValue = document.querySelector('#stdnr').value
    localStorage.setItem('stdnr', stdnrValue)
    var startweekValue = document.querySelector('#startweek').value
    var eindweekValue = document.querySelector('#eindweek').value
    document.getElementsByName('docent')
        .forEach(radio => {
            if (radio.checked){
                formDocent = radio.id
            }
        })
    document.getElementsByName('mening')
        .forEach(radio => {
            if (radio.checked){
                formMening = radio.id
            }
        })
    document.getElementsByName('moeilijk')
        .forEach(radio => {
            if (radio.checked){
                formMoeilijk = radio.id
            }
        })
    document.getElementsByName('uitleg')
        .forEach(radio => {
            if (radio.checked){
                formUitleg = radio.id
            }
        })
    var feedbackValue = document.querySelector('#feedback').value
    formData = {startweek: startweekValue, eindweek: eindweekValue, docent: formDocent, mening: formMening, moeilijk: formMoeilijk, uitleg: formUitleg, feedback: feedbackValue}
    formJSON = JSON.stringify(formData)
    localStorage.setItem(formNaam, formJSON)
}

function retrieveStudentGegevens(formNaam){
    var naamValue = localStorage.getItem('naam')
    var stdnrValue = localStorage.getItem('stdnr')
    document.getElementById('naam').value = naamValue
    document.getElementById('stdnr').value = stdnrValue
}

function retrieveFormGegevens(formNaam){
    formJSON = localStorage.getItem(formNaam)
    formData = JSON.parse(formJSON)
    console.log(formData.eindweek)
    if (document.getElementById('startweek')){
        document.getElementById('startweek').value = formData.startweek
        document.getElementById('eindweek').value = formData.eindweek
    }
    document.getElementsByName('docent')
        .forEach(radio => {
            if (radio.id == formData.docent){
                radio.checked = true
            }
        })
    document.getElementsByName('mening')
        .forEach(radio => {
            if (radio.id == formData.mening){
                radio.checked = true
            }
        })
    document.getElementsByName('moeilijk')
        .forEach(radio => {
            if (radio.id == formData.moeilijk){
                radio.checked = true
            }
        })
    document.getElementsByName('uitleg')
        .forEach(radio => {
            if (radio.id == formData.uitleg){
                radio.checked = true
            }
        })
    console.log(formData)
    var feedbackValue = formData.feedback
    console.log(feedbackValue)
    document.querySelector('#feedback').value = feedbackValue
}

retrieveFormGegevens(formNaam)