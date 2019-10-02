$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();

    var form = $('form').serializeArray();
    var data = {};

    form.forEach(function (item) {
      data[item.name] = item.value;

    });
    
    $(document).ready(function(){
   $('.price').mask('0,00');
    });

    var isValid = true;
    for(var item in data) {
      if (data[item].length <= 0) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      $.post('/products', data, function (res) {
        if(res === 'ok') {
          toastr["success"]("Cadastro realizado com sucesso!");
          $('form').trigger('reset');
        } else {
          toastr["error"]("Erro: " + res);
        }
     })
    }
  });
});

