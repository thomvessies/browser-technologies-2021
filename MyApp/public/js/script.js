console.log('hello world');

if (document.getElementById('studentButton')){
    let studentButton = document.getElementById('studentButton')
    studentButton.addEventListener('click', e => storeStudentGegevens(e))
}

if (document.getElementById('invulButton')){
    let invulButton = document.getElementById('invulButton')
    invulButton.addEventListener('click', e => retreiveStudentGegevens(e))
}


if (document.getElementById('formButton')){
    let formButton = document.getElementById('formButton')
    formButton.addEventListener('click', e => storeFormGegevens(e))
    console.log('check')
}





// if (document.querySelector('#naam').value == ""){
//     const forms = document.querySelectorAll('form').values;
//     const form = forms[0];

//     Array.from(form.elements).forEach((input) => {
//         console.log(input);
//     });
//     retreiveStudentGegevens()
// }







function storeStudentGegevens(e){
    // console.log(e)
    // localStorage.clear()
    var nameValue = document.querySelector('#naam').value
    var stdnrValue = document.querySelector('#stdnr').value
    localStorage.setItem('naam', nameValue)
    localStorage.setItem('stdnr', stdnrValue)
    
}

function retreiveStudentGegevens(){
    console.log('check')
    var naamValue = localStorage.getItem('naam')
    var stdnrValue = localStorage.getItem('stdnr')
    console.log(naamValue)
    document.getElementById('naam').value = naamValue
    document.getElementById('stdnr').value = stdnrValue
    // if (localStorage.getItem('docent')){
    //     console.log(localStorage.getItem('docent').value)
    //     document.getElementById(localStorage.getItem('docent').value).checked = true
    // }
    // if (localStorage.getItem('mening')){
    //     document.getElementById(localStorage.getItem('mening').value).checked = true
    // }
    // if (localStorage.getItem('moeilijk')){
    //     document.getElementById(localStorage.getItem('moeilijk').value).checked = true
    // }
    // if (localStorage.getItem('uitleg')){
    //     document.getElementById(localStorage.getItem('uitleg').value).checked = true
    // }

}

function storeFormGegevens(e){
    // localStorage.clear()
    var nameValue = document.querySelector('#naam').value
    localStorage.setItem('naam', nameValue)
    var stdnrValue = document.querySelector('#stdnr').value
    localStorage.setItem('stdnr', stdnrValue)
    console.log(document.getElementsByName('docent'))
    document.getElementsByName('docent')
        .forEach(radio => {
            if (radio.checked){
                localStorage.setItem('docent', radio.id)
            }
        })
    document.getElementsByName('mening')
        .forEach(radio => {
            if (radio.checked){
                localStorage.setItem('mening', radio.id)
            }
        })
    document.getElementsByName('moeilijk')
        .forEach(radio => {
            if (radio.checked){
                localStorage.setItem('moeilijk', radio.id)
            }
        })
    document.getElementsByName('uitleg')
        .forEach(radio => {
            if (radio.checked){
                localStorage.setItem('uitleg', radio.id)
            }
        })
    console.log(localStorage)
}

