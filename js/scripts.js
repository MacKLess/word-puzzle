$(document).ready(function() {
  $("#puzzleInput").submit(function(event){
    var vowels =["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
    var sentenceInput = $("input#sentence").val();
    var letters = sentenceInput.split();
    var result = [];

    for (var index = 0; index < letters.length; index += 1) {
      if (letters = vowels[0] || vowels[1] || vowels[2] || vowels[3] || vowels[4] || vowels[5] || vowels[6] || vowels[7] || vowels[8] || vowels[9] || vowels[10]) {
        result.replace(letters, "-").push
      }
      else {
        letters += result(index);
      }
    }
  $("#outPut").text(result);
    event.preventDefault();
  });
});
