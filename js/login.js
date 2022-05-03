/*pega o id do input html*/
var email = document.getElementById("id_input_email");
var senha = document.getElementById("id_input_senha");
var exibir = document.getElementById("exibir");
var entrar = document.getElementById("id_input_entrar");
var objDados = {};
var response = undefined;
var intervalo = undefined;
var infos = undefined;

var pesquisar = function () {
  console.log("entrou aqui");
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://barth.com.br/ApiChatCliqx/chat/verificarLogin.php?email=&lt;email&gt;&amp;senha=&lt;senha&gt;`
  );
  xhr.send(
    null
  ); /*xhr "send" null serve para enviar informações para algum lugar*/

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status == 200) {
        exibir.innerHTML = "";
        /*recebe a resposta e atribui a variavel response*/
        response = JSON.parse(xhr.responseText);
        console.log(response[i]);
        console.log("fora");
        for (var i = 0; i < response.length; i++) {
          var li = document.createElement("li");

          var dt = document.createElement("dt");
          console.log(response[i]);
          var dtText = document.createTextNode(`${response[i].email}`);
          dt.appendChild(dtText);
          li.appendChild(dt);

          var dd = document.createElement("dd");
          var ddText = document.createTextNode(`${response[i].senha}`);
          dd.appendChild(ddText);
          li.appendChild(dd);

          exibir.appendChild(li);
          //hierarquia da construção de uma lista não ordenada ul > li >dt > dd
        }
        console.log(response);
      }
    }
  };
};

var criar = function () {
  clearInterval(intervalo);
  /* objDados = {
    senha: senha.value,
    email: email.value,
    
  };
  */
  console.log(objDados.destino);

  var xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://barth.com.br/ApiChatCliqx/chat/receberUsuarios.php"
  );
  xhr.send(JSON.stringify(objDados));
  console.log(objDados);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        intervalo = setInterval(function () {
          pesquisar();
        }, 4000);
      }
    }
  };
};
/*função validar*/
var validar = function () {
  var xhr = new XMLHttpRequest();
  console.log(email.value)
  xhr.open(
    "GET",
    `https://barth.com.br/ApiChatCliqx/chat/verificarLogin.php?email=${email.value}&senha=${senha.value}`
    
  );
  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        infos = JSON.parse(xhr.responseText);
        if(infos.login === true){
            alert("é igual")
        }else{
            alert("nao")
        }
        console.log(infos.login);
            window.localStorage.href=
      }
    }
  };
};
