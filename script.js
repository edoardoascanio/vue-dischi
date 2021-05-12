new Vue({
    el: "#app",

    data: {

    },


    methods: {

        getGeneresList() {
            const finalList = []

            albumList.forEach((element) => {
                if (!finalList.includes(element.genre))
            })
        },

        onSelectEvent(event) {
            const select = event.currentTarget

        }
    },

    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {
                // array di oggetti
                // "poster"
                // "title"
                // "author"
                // "genre"
                // "year"

                const albumList = resp.data.response;

                // una volta ricevuti i dati dal server eseguire il sort per salvare i dati ordinati c

            });
    }
})