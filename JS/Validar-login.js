
//Validar os campos usados no Login
function ValidarLogin(strLogin,strSenha)
{
//linha de debug
//alert("Login " + strLogin + "\n" + "Senha: " + strSenha);
     if (strLogin == "")
      { 
         alert("Preencha corretamente o campo Login!");
         document.formulario.frmLogin.nome.focus();
         return false;
      }
     else if (strSenha == "")
      { 
         alert("Preencha corretamente o campo Senha!");
         document.formulario.frmLogin.senha.focus();
         return false;
      }
     else 
      { 
          alert("Login feito com sucesso!!");
          //poderia mandar o form fazer algo aqui ou mandar para alguma URL com window.location.href = URLDesejada; Ou deixar um action definida na propriedade action da tag form
         //exemplo de submit dinâmico
         //document.formulario.frmLogin.action = "ecomerce.html"
         //document.formulario.ValidarLoginfrmLogin.submit();
         return true;
      }
}