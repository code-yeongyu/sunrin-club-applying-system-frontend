$(document).ready(function () {
    $('#textarea01').keyup(function (e) {
      var content = $(this).val();
      $('#counter01').html(content.length + '/300');
      if (content.length > 300) {
        alert("최대 300자까지 입력 가능합니다.");
        $(this).val(content.substring(0, 300));
        $('#counter01').html('300/300');
      }
    });
    $('#textarea01').keyup();
  
    $('#textarea02').keyup(function (e) {
      var content = $(this).val();
      $('#counter02').html(content.length + '/750');
      if (content.length > 750) {
        alert("최대 750자까지 입력 가능합니다.");
        $(this).val(content.substring(0, 750));
        $('#counter02').html('750/750');
      }
    });
    $('#textarea02').keyup();
  
    $('#textarea04').keyup(function (e) {
      var content = $(this).val();
      $('#counter04').html(content.length + '/350');
      if (content.length > 350) {
        alert("최대 350자까지 입력 가능합니다.");
        $(this).val(content.substring(0, 350));
        $('#counter04').html('350/350');
      }
    });
    $('#textarea04').keyup();
  
    $('#textarea05').keyup(function (e) {
      var content = $(this).val();
      $('#counter05').html(content.length + '/500');
      if (content.length > 500) {
        alert("최대 500자까지 입력 가능합니다.");
        $(this).val(content.substring(0, 500));
        $('#counter05').html('500/500');
      }
    });
    $('#textarea05').keyup();
  })