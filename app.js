new Vue({
    el: "#vue-app",
    data: {
        name: "Priya",
        job: "Software Engineer",
        age: 25,
        website: "http://www.thenetninja.co.uk",
        websiteTag:'<a href="http://www.thenetninja.co.uk"> The website tag</a>',
        x: 0,
        y: 0,
        error: false,
        success: false,
        characters: ["Mario", "Luigi", "Yoshi", "Bowser"],
        ninjas: [{name: "Ryu", age:"25"}, 
        {name: "Yoshi", age:"35"}, 
        {name: "Ken", age:"55"},
    ]
    },
    methods: {
        greet: function() {
            return `Hello ${this.name}`
        },
        add: function() {
            if(this.age >= 0)
            return this.age++
        },
        subtract: function() {
            if(this.age > 0)
            return this.age--
        },
        updateXY: function(event) {
          
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})