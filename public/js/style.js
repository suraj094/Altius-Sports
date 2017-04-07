$(document).ready(function(){
    $('#search').click(function(e){
        e.preventDefault();
        var search =  document.getElementById('keywords').value;
        url = window.location.href.split('search');
        window.location = 'http://altiussports.com/' + 'search/' +  search;
    })
});
