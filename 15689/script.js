let element = document.getElementById('color_input');
const reg = /^#([0-9a-f]{3}){1,2}$/i;

element.addEventListener('input', function () {
    console.log();
    if (reg.test(`#${element.value}`)) {
        document.getElementById('color_preview').style.backgroundColor = `#${element.value}`
    } else {
        document.getElementById('color_preview').style.backgroundColor = `#000`
    }

});