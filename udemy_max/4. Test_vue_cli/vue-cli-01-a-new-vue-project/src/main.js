import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import FriendContactProps from './components/FriendContactProps.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp(App);

app.component("new-friend", NewFriend);
app.component("friend-contact", FriendContact);
app.component("friend-contact-props", FriendContactProps);

app.mount('#app');
