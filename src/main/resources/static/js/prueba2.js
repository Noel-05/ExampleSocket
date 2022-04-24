let stompClient = null;

//---------------------------------------------------------------------------------------------

function conectar() {
    let socket = new SockJS('http://localhost:8090/socket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, setConnected);
}

//---------------------------------------------------------------------------------------------

function desconectar() {
    if (stompClient != null) {
        stompClient.disconnect();
    }

    setConnected(false)
}

//---------------------------------------------------------------------------------------------

const setConnected = (connected) => {
    document.getElementById('connect').disabled = connected;
    document.getElementById('disconnect').disabled = !connected;

    stompClient.subscribe('/topic/notice', noticeRecived);
}

//---------------------------------------------------------------------------------------------

const noticeRecived = (data) => {
    let msj = document.getElementById('msjNotice');
    msj.innerHTML += `</br>` + data.body;
}

//---------------------------------------------------------------------------------------------

conectar();

//---------------------------------------------------------------------------------------------

/*
let s = new SockJS('/socket');
let stompClient = Stomp.over(s);
stompClient.connect({}, function () {
    console.log('notice socket connected!');
    stompClient.subscribe('/topic/notice', function (data) {
        $('.message span.content').html(data.body);
    });
});
*/