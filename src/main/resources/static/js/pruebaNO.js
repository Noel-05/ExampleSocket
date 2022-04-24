/*
let stompClient = null;

//---------------------------------------------------------------------------------------------

function setConnected(connected) {
    document.getElementById('connect').disabled = connected;
    document.getElementById('disconnect').disabled = !connected;
    document.getElementById('conversationDiv').style.visibility = connected ? 'visible' : 'hidden';
    document.getElementById('response').innerHTML = '';
}

//---------------------------------------------------------------------------------------------

function connect() {
    let socket = new SockJS('/socket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
    });
}

//---------------------------------------------------------------------------------------------

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

//---------------------------------------------------------------------------------------------

function sendName() {
    let value = document.getElementById('name').value;
    stompClient.send("/app/change-notice", {}, value);
}

connect();

*/