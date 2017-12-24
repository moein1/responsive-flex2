
function getElementById(id) {
    return document.getElementById(id);
}

function isInside(id) {
    if (window.event.clientX > getElementById(id).offsetLeft &&
        parseInt(window.event.clientX) < parseInt(getElementById(id).offsetWidth) +
        parseInt(getElementById(id).offsetLeft) &&
        window.event.clientY > getElementById(id).offsetTop &&
        window.event.clientY < parseInt(getElementById(id).offsetTop) +
        parseInt(getElementById(id).offsetHeight)) {
        return true;
    } else {
        return false;
    }

};

function toggleGroup(idArray, status) {
    idArray.forEach(function (element) {
        getElementById(element).style.display = status;
    });
}

getElementById('ride').addEventListener('mouseenter', function () {
    toggleGroup(['navbar-hover', 'navbar-hover-ride'], 'block');
});

getElementById('ride').addEventListener('mouseleave', function () {
    if (!isInside('navbar-hover'))
        toggleGroup(['navbar-hover', 'navbar-hover-ride'], 'none');

});

getElementById('navbar-hover').addEventListener('mouseleave', function () {
    toggleGroup(['navbar-hover', 'navbar-hover-ride', 'navbar-hover-drive'], 'none');
})

getElementById('drive').addEventListener('mouseenter', function () {
    toggleGroup(['navbar-hover', 'navbar-hover-drive'], 'block');
})

getElementById('drive').addEventListener('mouseleave', function () {
    if (!isInside('navbar-hover'))
        toggleGroup(['navbar-hover', 'navbar-hover-drive'], 'none');
})