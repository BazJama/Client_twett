var vue = new Vue({
    el: '#app',
    data: {
        welcome: "ricerca twett",
        twetts: [],
        tweet:"",
        word:"",
        id: "",
        author:"",
        message:"",

    },

    methods: {
        newTwett: function() {
            var newTwett = {
                message: this.message,
                author: this.author,
            }
            var url = 'https://fake-tweets-api.herokuapp.com/tweets';
            this.$http.post(url, newTwett).then(response => {
                console.log("response: ", response);
            })        
        },

        getTwett: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets';
            this.$http.get(url).then(response => {
                this.tweet = response.body;
                return this.tweet;
            });
        },

        getTwettByAuthor: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets?author=carloleonardi' + this.author;
            this.$http.get(url).then(response => {
                this.tweet = response.body;
                return this.tweet;
            });
        },
        getTwettByWord: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets?word=Facebook' + this.word;
            this.$http.get(url).then(response => {
                this.tweet = response.body;
                return this.tweet;
            });
        },
        getTwettById: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets/1' + this.id;
            this.$http.get(url).then(response => {
                this.tweet = response.body;
                return this.tweet;
            });
        },

        
        deleteTwett: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets/1' + this.id;
            this.$http.delete(url).then(response => {
                this.state = response.body;
                return this.state;
            })
        }
    },

    created: function() {
        this.getTwett();
        this.getTwettByUser();
    }
})