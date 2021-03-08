$(document).ready(function () {
  $('#textarea01').keyup(function (e) {
    var content = $(this).val();
    $('#counter01').html(content.length + '/400');
    if (content.length > 400) {
      alert("최대 400자까지 입력 가능합니다.");
      $(this).val(content.substring(0, 400));
      $('#counter01').html('400/400');
    }
  });
  $('#textarea01').keyup();

  $('#textarea02').keyup(function (e) {
    var content = $(this).val();
    $('#counter02').html(content.length + '/400');
    if (content.length > 400) {
      alert("최대 400자까지 입력 가능합니다.");
      $(this).val(content.substring(0, 400));
      $('#counter02').html('400/400');
    }
  });
  $('#textarea02').keyup();

  $('#textarea03').keyup(function (e) {
    var content = $(this).val();
    $('#counter03').html(content.length + '/400');
    if (content.length > 400) {
      alert("최대 400자까지 입력 가능합니다.");
      $(this).val(content.substring(0, 400));
      $('#counter03').html('400/400');
    }
  });
  $('#textarea03').keyup();

  $('#textarea04').keyup(function (e) {
    var content = $(this).val();
    $('#counter04').html(content.length + '/400');
    if (content.length > 400) {
      alert("최대 400자까지 입력 가능합니다.");
      $(this).val(content.substring(0, 400));
      $('#counter04').html('400/400');
    }
  });
  $('#textarea04').keyup();

  $('#textarea05').keyup(function (e) {
    var content = $(this).val();
    $('#counter05').html(content.length + '/400');
    if (content.length > 400) {
      alert("최대 400자까지 입력 가능합니다.");
      $(this).val(content.substring(0, 400));
      $('#counter05').html('400/400');
    }
  });
  $('#textarea05').keyup();
});