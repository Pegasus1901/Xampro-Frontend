document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
        alert('Undo!')
    }
});