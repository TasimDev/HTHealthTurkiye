
const cardSection = document.querySelector('#card-section');
let card = '';

function createCart() {
    servicesData.forEach(service => {
        card += `<div class="card" data="${service.id}">
            <div class="card-image">
                <img src="${service.image.img}" alt="${service.image.alt}">
            </div>
            <div class="card-info">
                <header>
                    <div class="card-title">
                        <h3>${service.title}</h3>
                    </div>
                </header>
                <div class="card-body">
                    <p>
                       ${service.info.small_info}
                    </p>
                </div>
                <button class="btn-more-info" data-info="${service.id}">Прочети повече</button>
            </div>
        </div>`
    })
    cardSection.innerHTML = card;
}
createCart();

const servicePage = document.getElementById("services_page");
const serviceMoreInfo = document.querySelectorAll('.btn-more-info');
let servicePageData = '';

serviceMoreInfo.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const buttonData = event.target.getAttribute('data-info');
        let serviceData = servicesData.find(service => service.id.toString() === buttonData);
        servicePage.classList.toggle('active');

        servicePageData = `<div class="wrapper">
        <div class="info">
            <header>
                <h3>${serviceData.title}</h3>
            </header>
            <div class="article">
                <p>${serviceData.info.big_info.info_header}</p>
                <p>${serviceData.info.big_info.info_body}</p>
                <p>${serviceData.info.big_info.info_footer}</p>
            </div>
            <a href="#contacts" title="Свържете се с HTHealthTurkiye" class="btn">Свържете се с нас</a>
        </div>
        <div class="image">
            <img src="${serviceData.image.img}" alt="${serviceData.image.alt}">
        </div>
        <div class="close-btn" onclick="closeService()"><i class="fa-solid fa-circle-xmark"></i></div>
    </div>`

        servicePage.innerHTML = servicePageData;
    })


})
function closeService() {
    servicePage.classList.remove('active');
    servicePageData = '';
}



