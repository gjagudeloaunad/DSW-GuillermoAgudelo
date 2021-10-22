const Index = {
    init: function() {
        document.querySelector('#aprendizaje').addEventListener('mouseover', e => {
            document.querySelector('.submenu').style.display = 'flex';
        });
        document.querySelector('#aprendizaje').addEventListener('mouseleave', e => {
            document.querySelector('.submenu').style.display = 'none';
        });
    }
}

Index.init();