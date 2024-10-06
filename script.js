function textConverter(textValue) {
  const textArea = document.getElementById("textInput");
  const result = document.getElementById("result");

  if (textValue === "upperCase") {
    textArea.value = textArea.value.toUpperCase();
    result.innerHTML = "";
  } else if (textValue === "lowerCase") {
    textArea.value = textArea.value.toLowerCase();
    result.innerHTML = "";
  } else if (textValue === "wordCount") {
    const countword = textArea.value.trim().split(/\s+/).length;
    result.innerHTML = `Word Count: ${countword}`;
  } else if (textValue === "charCount") {
    const char = textArea.value.length;
    result.innerHTML = `Character Count: ${char}`;
  }
}
