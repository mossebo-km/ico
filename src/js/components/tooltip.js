
function tooltip() {
    let tootips = document.querySelectorAll('[js-tooltip]');
    ;[].forEach.call(tootips, tootip => {
        tootip.classList.add('tooltip-hover');
        //let coords = tootip.getBoundingClientRect();

        let message = tootip.getAttribute('js-tooltip');

        var div = document.createElement('div');
        div.innerHTML = message;
        div.setAttribute('class', 'tooltip');
        tootip.appendChild(div);
    })
}

export default tooltip;
