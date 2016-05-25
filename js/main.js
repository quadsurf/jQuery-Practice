$(function() {

    //form submit update css of alternating TRs
    var $colorInput = $("#colorInput");
    $("#altColor").submit(function(ev){
      ev.preventDefault();
      $("tr:even:not(:first)").css('background', $colorInput.val());
      $colorInput.val('');
      return false;
    });

    //on-submit, append new LI, then empty
    $("#todoForm").submit(function(ev){
      ev.preventDefault();
      var $todoInput = $("#todoInput");
      $("#todoList").append(`<li><a href="#" class="delete"><img src="delete.png" class="imgdelete" /></a> <input type="checkbox" class="checkbox"><span class="todoLabel">${$todoInput.val()}</span></li>`);
      $todoInput.val('');
      return false;
    });

    //delete ToDos function
    $("#todoList").on('click', 'a.delete', function(ev){
      ev.preventDefault();
      $(this).parent().remove();
      return false;
    });

    //strikethrough completed
    $("#todoList").on('change', '.checkbox', function(ev){
      $(this).prop('checked') ?
      $(this).next().addClass('completed') :
      $(this).next().removeClass('completed');
      return false;
    });
    $("#todoList").on('click', '.todoLabel', function(ev){
      !$(this).hasClass('completed') ?
      ($(this).prev().prop('checked', true),
      $(this).addClass('completed')) :
      ($(this).prev().prop('checked', false),
      $(this).removeClass('completed'));
      return false;
    });

    // ternary operator = optimized if stmnt
    //i.e.var gender = $('#gender').val() == 'm' ? 'Male' : 'Female';
    $('#valForm').submit(function(ev) {
        ev.preventDefault();
        (!$('#password').val() || $('#password').val().length<6) ?
            $('.error').html('Try Again!') :
            ($('.error').html(''),
            $(this).fadeTo('slow', 0),
            $('#success').fadeIn('slow'));
        return false;
    });

    $('#password').keyup(function() {
        (!$(this).val() || $(this).val().length<6) ?
            (console.log('error'),
            $('.error').html('Password must be at least 6 characters!')) :
            $('.error').html('');

    })
});
