var test = document.getElementById('typeTest')
var text = test.textContent
var chars = text.split('')

function renderChar(char) {
  var $char = document.createElement('span')
  $char.textContent = char
  return $char
}

test.textContent = ''

for (var i = 0; i < chars.length; i++) {
  var $span = renderChar(chars[i])
  test.appendChild($span)
}
var $current = document.querySelector('span')
$current.classList.add('current')

document.addEventListener('keypress', function() {

})
