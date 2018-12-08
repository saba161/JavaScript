function bookSearch(){
    var search = document.getElementById('filter').value
    document.getElementById('results').innerHTML = ""
    console.log(search)

    $.ajax({
        url:'https://www.googleapis.com/books/v1/volumes?q=' + search,
        success: function(json){

            var title = "";
            for (i = 0; i < json.items.length; i++) 		
              {
                var item = json.items[i];
                   title += '<a href=' + item.volumeInfo.previewLink +'>' + "<br>" + '<img src=' + item.volumeInfo.imageLinks.smallThumbnail + '/>' + "<br>" + item.volumeInfo.title + "<br>" + "Author: " + item.volumeInfo.authors[0] + "<br>";
            }
            document.getElementById("results").innerHTML = "<h2>" + title + "</h2><br>";
        }
    });
}

document.getElementById("button").addEventListener("click", bookSearch, false);