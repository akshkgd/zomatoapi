$(document).ready(function() {

    $("#getMessage").on("click", function() {
     var valueSearchBox = $('#getText').val()
     if (valueSearchBox === "") {
      return;
     }
     select();
    
    });
    //--------------------------------------------------SEARCH BY CITY
   
    function select() {
        $('#details').hide();
     var valueDropdown = $('#select_id').val();
     var valueSearchBox = $('#getText').val()
     var searchCity = "&q=" + valueSearchBox;
     var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://developers.zomato.com/api/v2.1/search?entity_id=" + valueDropdown + "&entity_type=city" + searchCity + "&count=100",
      "method": "GET",
      "headers": {
       "user-key": "e8e2f7e9a9763c6df263364ff4d8fcba",
       'Content-Type': 'application/x-www-form-urlencoded'
      }
     }
   
     $.getJSON(settings, function(data) {
   
      data = data.restaurants;
      var html = "";
   
      $.each(data, function(index, value) {
   
       var x = data[index];
        console.log(typeof x);
       $.each(x, function(index, value) {
        var location = x.restaurant.location;
        var userRating = x.restaurant.user_rating;

        html += "<div class='col-lg-4'>";
        html += "<div class='food-card'>";
        html += "<a href=" + value.url + " target='_blank' class='stretched-link'></a>";
        html += "<div class='img-container'>";
        html += "<img class='img-fluid img-rounded featured-image'src=" + value.featured_image +  " >";
        html += "<div class='bottom-left'>" + userRating.rating_text ;
        html += "</div>";
        html += "</div>";
        html += "<div class='d-flex justify-content-between'>";
        html += "<div>";
        html += "<h4 class='pt-2 mb-0'>" + value.name + "</h4>";
        html += "<h6 class='pp-0 text-muted'>" + location.locality + "</h4>";
        html += "</div>";
        html += "<div>";
        html += "<p class='pt-2 mb-0 text-primary'> <i class='bi bi-star-half'></i> "   + userRating.aggregate_rating + " <span class='text-muted'> " + userRating.votes + " Votes </span></h4>";
        html += "</div>";
        html += "</div>";
        html += "<h5 class='p-0 m-0 pt-1'>" + value.cuisines + "</h4>";
        html += "<h6 class='pt-2 mb-0'>" + value.currency + value.average_cost_for_two +  " <span class='text-muted'>for two</span></h4>";
        html += "<p class='p-0 m-0'>" + value.timings + "</p>";
        html += "</div>";
        html += "</div>";


        // source
        // html += "<div class='data ca bg-whit'>";
        // html += "<div class='rating'>";
   
        // html += "<span title='" + userRating.rating_text + "'><p style='color:white;background-color:#" + userRating.rating_color + ";border-radius:4px;border:none;padding:2px 10px 2px 10px;text-align: center;text-decoration:none;display:inline-block;font-size:16px;float:right;'><strong>" + userRating.aggregate_rating + "</strong></p></span><br>";
        // html += "  <strong class='text-info'>" + userRating.votes + " votes</strong>";
        // html += "</div>";
        // html += "<img class='resimg img-fluid' src=" + value.featured_image + " alt='Restaurant Image' height='185' width='185'>";
        // html += "<a href=" + value.url + " target='_blank' class='action_link'><h2 style='color:red;'><strong>" + value.name + "</strong></h2></a>";
        // html += "  <strong class='text-primary'>" + location.locality + "</strong><br>";
        // html += "  <h6 style='color:grey;'><strong>" + location.address +  + value.cuisines +"</strong></h6><hr>";
        // html += "  <strong>CUISINES</strong>: " + value.cuisines + "<br>";
        // html += "  <strong>COST FOR TWO</strong>: " + value.currency + value.average_cost_for_two +  "<br>" + value.has_online_delivery + "<br>";
        // html += "</div><br>";
       });
      });
      $(".message").html(html);
     });
   
    }
    //--------------------------------------------------------------------------------------------------------
    $("#select_id").change(function() {
     select();
    
    });
   });

