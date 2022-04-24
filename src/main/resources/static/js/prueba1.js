let stompClient = null;

//---------------------------------------------------------------------------------------------

function conectar() {
    //let socket = new SockJS('/socket');
    let socket = new SockJS('http://localhost:8080/socket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, setConnected(true));
}

//---------------------------------------------------------------------------------------------

const setConnected = (connected) => {
    document.getElementById('connect').disabled = connected;
    document.getElementById('disconnect').disabled = !connected;
    document.getElementById('name').value = "";
    document.getElementById('conversationDiv').style.visibility = connected ? 'visible' : 'hidden';
    document.getElementById('response').innerHTML = '';
    //stompClient.subscribe('/topic/notice', noticeSocket);
}

//---------------------------------------------------------------------------------------------

function desconectar() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

//---------------------------------------------------------------------------------------------

function sendName() {
    var value = document.getElementById('name').value;
    //stompClient.subscribe('/topic/notice', noticeSocket);
    //stompClient.send("/app/change-notice", {}, value);
    stompClient.subscribe('/topic/public', noticeSocket);
    stompClient.send("/app/newNotification", {}, value);
}

//---------------------------------------------------------------------------------------------

const noticeSocket = (payload) => {
    let msj = document.getElementById('msjNotice');
    if(msj){msj.innerHTML = payload.body;}

    var value = document.getElementById('name');
    value.value = " ";
};

//---------------------------------------------------------------------------------------------

conectar();

//---------------------------------------------------------------------------------------------