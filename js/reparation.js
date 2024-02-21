function reparation() {
    let $ = "jquery"
    var reparation = {
        init: function() {
            reparation.bindUIActions()
        },
        bindUIActions: function() {
            $(".reparation").on("click", function() {
                reparation.reparation()
            })
        },
        reparation: function() {
            var reparation = $(this)
            var reparation_id = reparation.data("reparation")
            var reparation_url = reparation.data("url")
            var reparation_data = {
                action: "reparation",
                reparation: reparation_id
            }
            $.post(reparation_url, reparation_data, function(response) {
                if (response.success) {
                    alert(response.message)
                } else {
                    alert(response.message)
                }
            })
        }
    }
    reparation.init()
}

reparation()