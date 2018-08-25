(function() {
    $(document).ready(function() {
        var url = 'https://fwo345drjk.execute-api.us-east-1.amazonaws.com/test/';
        $.getJSON(url)
            .then(function (d) {
                var Render = view(d);
                ko.applyBindings(new Render())
            })



            function view(data) {
                return function () {
                    this.stories = data;
                }
            }
    })
})()