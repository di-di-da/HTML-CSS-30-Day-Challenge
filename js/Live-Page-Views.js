const countE1 = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('')
    .then(res => res.json())
    .then(res => {
        countE1.innerHTML = res.value;
    })
}