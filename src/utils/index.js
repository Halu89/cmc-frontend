function exists(input) {
  if (input.trim().length > 0) {
    return true;
  }
  return false;
}

function isMinLength(input, min) {
  if (input.length > min) {
    return `${input} doit faire plus de 3 caractères`;
  }
  return false;
}

function isValidEmail(input) {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      input
    )
  ) {
    return `Veuillez utiliser une adresse valide.`;
  }
  return false;
}

export function createFetchOptions(name, email, object, message) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  // Create the body of the x-www-form-urlencoded form
  var urlencoded = new URLSearchParams();
  urlencoded.append("message", constructMail(name, email, object, message));
  urlencoded.append("emailAddress", email);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  return requestOptions;
}

function constructMail(name, email, objet, message) {
  return `
  Nouveau message de ${name}(${email})
<br>
  Objet : ${objet}
<br>
---------------------------
<br>
  Message: 
  <br>
  ${message}
  `;
}

export const validate = {
  name: (value) => {
    if (!exists(value)) {
      return `Veuillez indiquer un nom`;
    } else if (!isMinLength(value, 3)) {
      return "Le nom doit faire plus de 3 caractères";
    }
  },
  email: (value) => {
    if (!exists(value)) {
      return "Veuillez indiquer un mail pour la réponse";
    }
    if (!isValidEmail(value)) {
      return "Veuillez utiliser une adress mail valide";
    }
  },
  objet: (value) => {
    if (!exists(value)) {
      return `Veuillez indiquer un objet`;
    }
  },
  message: (value) => {
    if (!exists(value)) {
      return `Veuillez remplir ce champ`;
    }
  },
};
