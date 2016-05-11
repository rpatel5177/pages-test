$(document).ready(function() {

    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    $('.loginButton').click(function(e) {
        //e.preventDefault();
        $('#openModal').fadeIn();
    });
    $('#menu-icon').click(function(){
        $('header nav ul').slideToggle();
    });

});

$(document).ready(function() {
    // Making Ajax call to retrieve JSON data 
    //$.getJSON('json/code-test.json',function(jsonData){
    
    //Included the JSON data here due to Cross Domain issue on Chrome    
    var jsonData = [{"name": "URBank", "apy": 0.87, "earnings": 436.89 },{"name": "Big Guy Financial", "apy": 0.75, "earnings": 376.41 },  {"name": "Dewey, Cheatam & Howe", "apy": 0.01, "earnings": 5.00 }, {"name": "First Onion", "apy": 0.01, "earnings": 5.00 }, {"name": "Bank of Everywhere", "apy": 0.01, "earnings": 5.00 } ]; var tr;
    
    for (var i = 0; i < jsonData.length; i++) {
        //counter = counter +=1;
        tr = $('<tr/>');
        //$('tr').addClass('data-'+counter);
        tr.append("<td class='data-1'>" + jsonData[i].name + "</td>");
        tr.append("<td class='data-2'>" + jsonData[i].apy + "%</td>");
        tr.append("<td class='data-3'>$" + jsonData[i].earnings.toFixed(2) + "</td>");
        $('table').append(tr);
    }
    //});
});