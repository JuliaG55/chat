
// Establish the WS connection.
const ws = new WebSocket('ws://localhost:8888')

window.onload = () => {
  // Load older messages from the database.
	axios.get('http://localhost:8080/messages')
		.then(({ data }) => appendToChat(data))

  // Find crutial elements.
  const chat = document.getElementById('messages')
  const button = document.getElementById('send')
  const input = document.getElementById('message')

  // If someone clicks on the send button, send a WS message and reset the
  // input.
  button.onclick = () => {
    ws.send(input.value)

    input.value = ''
  }

  // Append incoming messages to the app.
  ws.onmessage = ({ data }) => appendToChat([data])

  // The functions that appends the new messages.
  const appendToChat = (data) => {
    for (message of data) {
      let el = document.createElement('li')
      el.innerText = message

      chat.appendChild(el)
    }
  }
}
