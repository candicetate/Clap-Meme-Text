function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#textinput").value;
  let result = document.querySelector("#converted");

  let clap = input.replace(/\s/g, "👏");
  let uppercaseClap = clap.toUpperCase();

  return (result.innerHTML = `${uppercaseClap}`);
}

let convert = document.querySelector("#text");
convert.addEventListener("submit", handleSubmit);
