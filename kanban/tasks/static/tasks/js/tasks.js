function listTasks(){
    var $stuff = $("<ol>")
        jQuery.ajax("http://127.0.0.1:8000/api/tasks/").done(function(results){
            var taskStuff = results.results
            for(var i = 0; i < taskStuff.length; i++){
                $stuff.html($stuff.html()+ taskStuff[i]['title'] + "<br>")
                $("#xlocation").append($stuff)
            }
        })
}
listTasks()

function listPriority(){
    var $stuff = $("<ol>")
        jQuery.ajax("http://127.0.0.1:8000/api/tasks/").done(function(results){
            var priorityStuff = results.results
            for(var i = 0; i < priorityStuff.length; i++){
                $stuff.html($stuff.html()+ priorityStuff[i]['priority'] + "<br>")
                $("#xlocation").append($stuff)
            }
        })
}
listPriority()
