window.onload = () => {
  const buttons = document.querySelector(".btns");
  buttons.addEventListener("click", fun);

  const inputScreen = document.querySelector("input");
  function fun(e) {
    const buttonText = e.target.innerHTML;
    console.log(buttonText);
    switch (buttonText) {
      case "0":
        inputScreen.value += "0";
        break;

      case "1":
        inputScreen.value += "1";
        break;

      case "2":
        inputScreen.value += "2";
        break;

      case "3":
        inputScreen.value += "3";
        break;

      case "4":
        inputScreen.value += "4";
        break;

      case "5":
        inputScreen.value += "5";
        break;

      case "6":
        inputScreen.value += "6";
        break;

      case "7":
        inputScreen.value += "7";
        break;

      case "8":
        inputScreen.value += "8";
        break;

      case "9":
        inputScreen.value += "9";
        break;

      case ".":
        inputScreen.value += ".";
        break;

      case "+":
        inputScreen.value += "+";
        break;

      case "-":
        inputScreen.value += "-";
        break;

      case "x":
        inputScreen.value += "*";
        break;

      case "/":
        inputScreen.value += "/";
        break;

      case "AC":
        inputScreen.value = "";
        break;

      case "=":
        var str = inputScreen.value;
        // var num1 = str.substr(0, str.indexOf("+"));
        // var num2 = str.substr(str.indexOf("+") + 1, str.length - 1);
        inputScreen.value = eval(str);
        break;

      case "Del":
        var str = inputScreen.value;
        console.log(str);
        inputScreen.value = str.substring(0, str.length - 1);
        break;
    }
  }
};
