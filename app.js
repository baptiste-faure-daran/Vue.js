var app = new Vue({
    el: "#app",
    data: {
        message:"C'est la découverte de Vue.Js ma gueule"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }

});

var app2 = new Vue ({
    el: '#app-2',
    data: {
        message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
});
app2.message = 'un nouveau message'; // Modification du message de app2

var app3 = new Vue ({
    el: '#app-3',
    data: {
        seen: true     // Si je change la valeur en 'false', l'élément app3 va disparaitre de l'affichage
    }
});

var app4 = new Vue ({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Apprendre JavaScript' },
            { text: 'Apprendre Vue' },
            { text: 'Créer quelque chose de génial' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'TITRE',
        active: false
    }
});

var app6 = new Vue ({
    el: '#app-6',
    data: {
        message: 'Voici un titre',
        newTitre: '',
        active: false
    },
    methods: {
        updateMessage: function () {
            this.message = this.newTitre;
        }
    }
});

var vm = new Vue({
    el: '#vue-instance',
    data: {
        message: 'Hello',
        isRed: false,
        items: [
            {title: 'Item 1'},
            {title: 'Item 2'},
            {title: 'Item 3 ' + new Date() }
        ]
    },
    methods: {
        makeRed: function() {
            this.isRed = true;
        }
    }
});

