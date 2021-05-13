new Vue({
    el: "#app",

    data: {
        albumList: [],
        filteredData: [],
        genre: null
    },


    methods: {

        onSelectChange() {

            this.filteredData = [];
            for (let i = 0; i < this.albumList.length; i++) {
                const element = this.albumList[i];
                if (element.genre == this.genre) {
                    this.filteredData.push(element);
                }
            }

        }
    },

    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {

                this.albumList = resp.data.response;
                this.filteredData = this.albumList;
            });
    }
})