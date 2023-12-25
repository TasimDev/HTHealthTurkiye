const servicePage = document.getElementById("services_page");
const serviceMoreInfo = document.querySelectorAll('.btn-more-info');
const closeServicePageBtn = document.querySelector('.close-btn');

serviceMoreInfo.forEach(btn => {
    btn.addEventListener('click', () => {
        servicePage.classList.toggle('active');
    })
})
closeServicePageBtn.addEventListener('click', () => {
    servicePage.classList.remove('active');
})

