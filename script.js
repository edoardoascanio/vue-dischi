new Vue({
    el: "#app",

    data: {
        albumList:[],
        filteredData:[]
    },


    methods: {
        
        onSelectChange(event) {
            const select = event.currentTarget
            select.value

            this.filteredData = select;

        }
    },

    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {
     
                this.albumList = resp.data.response;

            });
    }
})