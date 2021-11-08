<template>
    <section>
        <div class="m-3">
            <header>
                <h1>{{title}}</h1>
            </header>
            <!-- <ul>
                <friend-contact></friend-contact>
            </ul> -->
            <new-friend @add-friend="addNewFriend"></new-friend>
            <ul>
                <friend-contact-props
                    v-for="friend in friends"
                    :key="friend.id"
                    :idnya="friend.id"
                    :name="friend.name"
                    :phone-number="friend.phone"
                    :email-address="friend.email"
                    :isFavorite="friend.favorite"
                    @toggle-favorite="toggleFavoriteStatus"
                    @toggle-delete="toggleDeleteFriend"
                ></friend-contact-props>

                <!-- <friend-contact-props
                    name="Someone"
                    phone-number="0812-9999-8888"
                    emailAddress="someone@email.com"
                    :isFavorite="true"
                    >
                </friend-contact-props>
                <friend-contact-props
                    name="SomeTwo"
                    phone-number="0812-9999-8888"
                    emailAddress="sometwo@email.com">
                </friend-contact-props> -->
            </ul>
        </div>
    </section>
</template>

<script>
    import FriendContactProps from './components/FriendContactProps.vue'
    export default {
        components: { FriendContactProps },
        data() {
            return {
                title : "My Friends",
                friends : [
                    {
                        id : 1,
                        name : "Number One",
                        phone : "111111111",
                        email : "one@email.com",
                        favorite : true,
                    },
                    {
                        id : 2,
                        name : "Number Two",
                        phone : "222222222",
                        email : "two@email.com"
                    },
                ],
            }
        },
        methods: {
            toggleFavoriteStatus(friendId){
                const identifiedFriend = this.friends.find(
                    (friend) => friend.id === friendId
                );
    
                identifiedFriend.favorite = !identifiedFriend.favorite;
                console.log(identifiedFriend);
            },
            addNewFriend(name, phone, email) {
                const newFriendContact = {
                    id : Math.floor(Math.random() * 10000),
                    name : name,
                    phone : phone,
                    email : email,
                    favorite : Boolean(Math.floor(Math.random() * 2)),
                };

                this.friends.push(newFriendContact);
            },
            toggleDeleteFriend(friendId){
                // const index = this.friends.findIndex(function(o){
                //     return o.id === friendId;
                // })
                // if (index !== -1) this.friends.splice(index, 1);

                this.friends = this.friends.filter((friend) => friend.id !== friendId )
            }
        },
    }
</script>

<style>
    .mt-3 {
        margin-top: 30px;
    }

    .m-3 {
        margin: 30px;
    }
    
    * {
    box-sizing: border-box;
    }

    html {
    font-family: 'Jost', sans-serif;
    }

    body {
    margin: 0;
    }

    header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: #fff;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    }

    #app ul {
    margin: 0;
    padding: 0;
    list-style: none;
    }

    #app li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    }

    #app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
    }

    /* #app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    }

    #app button:hover,
    #app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    } */
</style>