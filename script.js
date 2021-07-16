var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")
var instructions = $("#instructions")
var content = ''

recognition.continuous = true

// recognition is started when

recognition.onstart = function() {
    instructions.text("voice recognition is started")
}

recognition.onspeechend = function() {
    instructions.text("no activity")
}

recognition.onerror = function() {
    instructions.text("try again")
}

recognition.onresult = function(event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript

    content += transcript
    textbox.val(content)

}

$("#start-btn").click(function(event) {
    if (content.length) {
        content += ''
    }

    recognition.start()
})