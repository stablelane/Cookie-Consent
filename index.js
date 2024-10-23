const tabs = document.querySelectorAll('.tab-item')
const tabContent = document.querySelectorAll('.tab-content-item')
const container = document.getElementsByClassName('main')[0]
const cookieConsent = localStorage.getItem('cookieConsent')
const cookieBtn = document.getElementById('cookie-btn')
const modalCloseBtn = document.getElementById('modal-close-btn')

checkConsent()

cookieBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', "accepted")
    removeModal()
})

modalCloseBtn.addEventListener('click', removeModal)

tabs.forEach(item => item.addEventListener('click', changetab))

function changetab() {
    removeClass(tabContent, 'show')
    document.getElementById(`${this.id}-content`).classList.add('show')
    removeClass(tabs, 'tab-border')
    this.classList.add('tab-border')
}

function removeClass(element, className) {
    element.forEach(item => item.classList.remove(className))
}

function removeModal() {
    container.style.filter = 'opacity(100%)'
    document.getElementById('cookie-modal').classList.remove('show')
}

function checkConsent() {
    if (cookieConsent != "accepted") {
        container.style.filter = 'opacity(20%)'
        document.getElementById('cookie-modal').classList.add('show')
    } else {
        removeModal()
    }
}