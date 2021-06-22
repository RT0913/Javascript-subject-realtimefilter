  function Search(text){
    $(".keywords").each(function(index, element){
        let keyword = $(element).text();
        if(keyword.indexOf(text) === -1){
            $(element).parent().css("display", "none");
        }else{
            $(element).parent().css("display", "block");
        }
    });
}

$("#search_box").on("input", function(event){
    let text = $("#search_box").val();
    if(text === ""){
        $(".search_contents").css("display", "block");
    }else{
        Search(text);
    }
});