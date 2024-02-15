<template>
    <div>
        <h2>User</h2>
        <input type="text" v-model="user" />
        <h2>Chat</h2>
        <ul v-if="messages.length">
            <li v-for="msg in messages" :key="msg.date">
                {{ msg.user }}: {{ msg.text }}
            </li>
        </ul>
        <input type="text" v-model="newMessage" @keyup.enter="sendMessage" />
        <button @click="sendMessage" style="margin-left: 10px;">Send</button>

        <h2>Status: {{ state ? "Đang kết nối" : "Mất kết nối" }}</h2>
        <div v-if="!state">
            <button @click="connect()"> Kết nối </button>
        </div>
        <div v-if="state">
            <button @click="disconnect()"> Hủy kết nối </button>
        </div>
    </div>
</template>
  
<script>
import { socket } from "@/socket";
export default {
    data() {
        return {
            messages: [],
            newMessage: "",
            state: 0,
            user: ""
        };
    },
    mounted() {
        // socket.connect();
        socket.on("connect", () => {
            this.state = 1;
            console.log("connect");
        });
        socket.on("disconnect", () => {
            this.state = 0;
            console.log("disconnect");
        });
        socket.on('read-msg', (message) => {
            this.messages.push({ text: message.text, user: message.user, date: message.date });
        });
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim()) {
                socket.emit('send-msg', { message: this.newMessage, user: this.user });
                this.newMessage = "";
            }
        },

        connect() {
            socket.connect();
        },

        disconnect() {
            socket.disconnect();
        }
    },
};
</script>
<style lang="css" scoped>
    input {
        color: #000;
    }
</style>