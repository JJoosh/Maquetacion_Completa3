function validar_submit() {
    if (document.Formulario.Nombre.value.trim().length === 0) {
      alert("Ingrese su Nombre");
      document.Formulario.Nombre.focus();
      return false;
    }
    else if (document.Formulario.Celular.value.trim().length === 0) {
      alert("Ingrese su Celular");
      document.Formulario.Celular.focus();
      return false;
    }
    else if (document.Formulario.Correo.value.trim().length === 0) {
      alert("Ingrese su Correo Electrónico");
      document.Formulario.Correo.focus();
      return false;
    }
    else {
      document.Formulario.submit();
      return true;
    }
  }