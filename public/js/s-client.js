const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

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