const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMessage = document.querySelector("#txtMessage");
const btnSubmit = document.querySelector("#btnSubmit");

const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
    lblOffline.style.display = "none";
    lblOnline.style.display = "";

});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
    lblOnline.style.display = "none";
    lblOffline.style.display = "";
});

btnSubmit.addEventListener( 'click', ()=>{
    const msg = txtMessage.value;
    const payload = {
        name: "ASD",
        message: msg,
        date: new Date().getTime()
    }

    socket.emit('send-msg', payload);

});