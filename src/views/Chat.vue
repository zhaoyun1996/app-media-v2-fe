<template>
    <div>
        <div id="list-user">
            <h2>
                List user online
            </h2>
            <ul v-if="users.length">
                <li v-for="user in users" :key="user.id">
                    {{ user.name }}
                </li>
            </ul>
        </div>

        <div id="current-user">
            <h2>User</h2>
            ID: <span> {{ id }} </span>
            <br>
            Name: <span> {{ user }} </span>
        </div>

        <div id="chat">
            <h2>Chat</h2>
            <ul v-if="messages.length">
                <li v-for="msg in messages" :key="msg.date">
                    {{ msg.user }}: {{ msg.text }}
                </li>
            </ul>
            <input type="text" v-model="newMessage" @keyup.enter="sendMessage" />
            <button @click="sendMessage" style="margin-left: 10px;">Send</button>
        </div>

        <div id="status">
            <h2>Status: {{ state ? "Đang kết nối" : "Mất kết nối" }}</h2>
            <div v-if="!state">
                <button @click="connect()"> Kết nối </button>
            </div>
            <div v-if="state">
                <button @click="disconnect()"> Hủy kết nối </button>
            </div>
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
            state: false,
            users: [],
            user: `user-${Date.now()}`,
            id: null
        };
    },
    mounted() {
        // Kết nối đến socket
        this.connect();

        socket.on("connect", () => {
            if(socket && socket.connected) {
                this.state = socket.connected;
                this.id = socket.id;
                socket.emit('add-user', this.user);
            }
        });
        
        socket.on("disconnect", () => {
            if(socket && !socket.connected) {
                this.state = socket.connected;
            }
        });

        // When the server emits a message, the client updates message list
        socket.on('read-msg', (message) => {
            this.messages.push({ text: message.text, user: message.user, date: message.date });
        });

        // When user connects, the server emits user-connected event which updates user list
        socket.on('user-connected', (userId) => {
            this.users.push(userId);
        });

        // Init chat event. Updates the initial chat with current messages
        socket.on('init-chat', (messages) => {
            this.messages = messages;
        });

        // Init user list. Updates user list when the client init
        socket.on('update-users', (users) => {
            this.users = users.filter(user => user.id != socket.id);
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
            if(socket) {
                socket.connect();
            }
        },

        disconnect() {
            if(socket) {
                socket.disconnect();
            }
        }
    },
    beforeUnmount() {
        this.disconnect();
    }
};
</script>
<style lang="css" scoped>
    input {
        color: #000;
        width: 200px;
    }

    #list-user, #current-user, #chat, #status {
        margin-bottom: 50px;
    }
</style>