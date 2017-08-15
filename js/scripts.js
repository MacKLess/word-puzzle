$(document).ready(function() {
  $("#puzzleInput").submit(function(event){
    var vowels =["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
    var sentenceInput = $("input#sentence").val();
    var letters = sentenceInput.split("");
    var result = "";

    for (var index = 0; index < letters.length; index += 1) {
      if (vowels.includes(letters[index])){
      // if (letters[index] === vowels[0] || letters[index] ===  vowels[1] || letters[index] ===  vowels[2] || letters[index] === vowels[3] || letters[index] === vowels[4] || letters[index] === vowels[5] || letters[index] === vowels[6] || letters[index] === vowels[7] || letters[index] === vowels[8] || letters[index] === vowels[9] || letters[index] === vowels[10]) {
        result += "-";
      }
      else {
        // debugger;
        result += letters[index];
      }
    }
  $("#outPut").text(result);
    event.preventDefault();
  });
});
