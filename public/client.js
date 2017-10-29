// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$("#upload").submit(function(event) {

    var formData = new FormData();
    formData.append("userFile", $('[name="userFile"]')[0].files[0]);
    event.preventDefault();
    $.ajax({
      url: $(this).attr("action"),
      data: formData,
      processData: false,
      contentType: false,
      type: 'POST',
      error: function(data) {
        $('#result').html('<p class="result-text">Error. Please check your file again.</p>');
      },
      success: function(data) {
        console.log(data);
        var final = $.makeArray( data );
        $.map(final, function(item, i) {
          $('#result').html('<h2 class="result-text">Results</h2>');
          $('#result').append('<p class="result-text"><b>'+ Object.keys(item)[0] + ': </b>' + item.name + '</p>');
          $('#result').append('<p class="result-text"><b>'+ Object.keys(item)[1] + ': </b>' + item.size + ' bytes</p>');
          $('#result').append('<p class="result-text"><b>'+ Object.keys(item)[2] + ': </b>' + item.type + '</p>');
        });
        //$('#result').apend
      }
    });
    return false;
  });
