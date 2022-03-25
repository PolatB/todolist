
let Ekle = document.querySelector ('#ListEkleme')
Ekle.addEventListener('submit', formHandler)

// alert function and settings
// const AlertDom = document.querySelector ('#alert')

// const AlertFunction = (title, message, classname = 'warning') =>`<div class="alert alert-${classname} alert-dismissible fade show" role="alert">
// <strong>${title}</strong> ${message}
// <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//   <span aria-hidden="true">&times;</span>
// </button>
// </div>`



// input activation
function formHandler (event) {
    event.preventDefault()

    const task = document.querySelector('#task')
    task.value = task.value.trim();

    if (task.value) {
        addList(task.value)
        task.value = ""
        let toastBasarili = document.querySelector('.success');
        let toastAlertBasarili = new bootstrap.Toast(toastBasarili);
    toastAlertBasarili.show();
     } else {
        let toastBasarisiz = document.querySelector('.error');
        let toastAlertBasarisiz = new bootstrap.Toast(toastBasarisiz);
        toastAlertBasarisiz.show();
    }
}

// adding list
let CurrentList = document.querySelector('#list')
const addList = (list) => {
    let liDom = document.createElement('li')
    liDom.innerHTML = `${list}`
    CurrentList.append(liDom)

    // closebutton adding into list
    let spanLi = document.createElement('span')
    liDom.append(spanLi)
    spanLi.classList.add('close')
    spanLi.innerHTML = `x`

    // closebutton activation
    // var closebtns = document.getElementsByClassName("close");
    // var i;
    // for (i = 0; i < closebtns.length; i++) {
    //     closebtns[i].addEventListener("click", function() {
    //       this.parentElement.style.display = 'none';
    //     });
    //   }
}

const button = document.querySelector(`.button`);
const liste = document.querySelector('ul')
button.addEventListener('submit', formHandler);
//Burada ekle dugmesine event listeneri ekledik//

liste.addEventListener('click', function (e) {
  if (e.target.className == '' || e.target.className == 'checked') {
    e.target.classList.toggle('checked');
  } else {
    e.target.parentElement.style.display = 'none';
  }
});