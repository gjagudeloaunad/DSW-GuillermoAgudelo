const Index = {
    init: function() {
        this.setMenuTemas();
        this.setMenuRecursos();
        this.setMenuAprendizaje();
    },

    setMenuTemas: function() {
        document.querySelector('#temas').addEventListener('mouseover', e => {
            document.querySelector('#temas .submenu').style.display = 'flex';
        });
        document.querySelector('#temas').addEventListener('mouseleave', e => {
            document.querySelector('#temas .submenu').style.display = 'none';
        });
    },

    setMenuRecursos: function() {
        document.querySelector('#recursos').addEventListener('mouseover', e => {
            document.querySelector('#recursos .submenu').style.display = 'flex';
        });
        document.querySelector('#recursos').addEventListener('mouseleave', e => {
            document.querySelector('#recursos .submenu').style.display = 'none';
        });
    },

    setMenuAprendizaje: function() {
        document.querySelector('#aprendizaje').addEventListener('mouseover', e => {
            document.querySelector('#aprendizaje .submenu').style.display = 'flex';
        });
        document.querySelector('#aprendizaje').addEventListener('mouseleave', e => {
            document.querySelector('#aprendizaje .submenu').style.display = 'none';
        });
    }
}

Index.init();