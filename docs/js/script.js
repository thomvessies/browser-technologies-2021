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
else {
    formNaam = 'nee'
}

if (document.getElementById('radiobuttonContainer')) {
    document.getElementById('radiobuttonContainer').style.display = 'none';
    document.getElementById('slideContainer').style.display = 'inline-block';
    document.getElementById('mening1').required = false;
    document.getElementById('moeilijk1').required = false;
    document.getElementById('uitleg1').required = false;
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
}

if (document.getElementById('studentButton')){
    let studentButton = document.getElementById('studentButton')
    studentButton.addEventListener('click', e => storeStudentGegevens(e))
}

if (document.getElementById('formButton')){
    let formButton = document.getElementById('formButton')
    formButton.addEventListener('click', e => storeFormGegevens(e, formNaam))
}

function storeStudentGegevens(e, formNaam){
    var nameValue = document.querySelector('#naam').value
    localStorage.setItem('naam', nameValue)
    var stdnrValue = document.querySelector('#stdnr').value
    localStorage.setItem('stdnr', stdnrValue)
    document.getElementById(formNaam).action = "navigatie.html";
}

function storeFormGegevens(e){
    var nameValue = document.querySelector('#naam').value
    localStorage.setItem('naam', nameValue)
    var stdnrValue = document.querySelector('#stdnr').value
    localStorage.setItem('stdnr', stdnrValue)
    var startweekValue = document.querySelector('#startweek').value
    var eindweekValue = document.querySelector('#eindweek').value
    document.getElementsByName('docent')
        .forEach(radio => {
            if (radio.checked){
                formDocent = radio.value
            }
        })
    formMening = document.getElementById('meningSlider').value
    formMoeilijk = document.getElementById('moeilijkSlider').value
    formUitleg = document.getElementById('uitlegSlider').value
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
    if (document.getElementById('startweek')){
        document.getElementById('startweek').value = formData.startweek
        document.getElementById('eindweek').value = formData.eindweek
    }
    document.getElementsByName('docent')
        .forEach(radio => {
            if (radio.value == formData.docent){
                radio.checked = true
            }
        })
    document.getElementById('meningSlider').value = formData.mening;
    document.getElementById('meningValue').innerHTML = formData.mening;
    document.getElementById('moeilijkSlider').value = formData.moeilijk;
    document.getElementById('moeilijkValue').innerHTML = formData.moeilijk;
    document.getElementById('uitlegSlider').value = formData.uitleg;
    document.getElementById('uitlegValue').innerHTML = formData.uitleg;

    var feedbackValue = formData.feedback
    document.querySelector('#feedback').value = feedbackValue
}
if (formNaam == 'nee'){
    console.log('check')
    document.getElementById('linkLijstVol').style.display = 'none'
    document.getElementById('linkBTvol').style.display = 'none'
    document.getElementById('linkWAFSvol').style.display = 'none'
    document.getElementById('linkCSSTTRvol').style.display = 'none'
    formJSON = localStorage.getItem(formNaam)
    formData = JSON.parse(formJSON)
    if (Object.keys(localStorage).includes('BT')){
        document.getElementById('linkLijstVol').style.display = 'block'
        document.getElementById('linkBTvol').style.display = 'list-item'
        document.getElementById('linkBTleeg').style.display = 'none'
    }
    if (Object.keys(localStorage).includes('WAFS')){
        document.getElementById('linkLijstVol').style.display = 'block'
        document.getElementById('linkWAFSvol').style.display = 'list-item'
        document.getElementById('linkWAFSleeg').style.display = 'none'
    }
    if (Object.keys(localStorage).includes('CSSTTR')){
        document.getElementById('linkLijstVol').style.display = 'block'
        document.getElementById('linkCSSTTRvol').style.display = 'list-item'
        document.getElementById('linkCSSTTRleeg').style.display = 'none'
    }
    if (Object.keys(localStorage).includes('BT') && Object.keys(localStorage).includes('WAFS') && Object.keys(localStorage).includes('CSSTTR')){
        document.getElementById('linkLijstLeeg').style.display = 'none'
    }
} else if (formNaam == 'index'){
    console.log(formNaam)
}
else {
    retrieveFormGegevens(formNaam)
}