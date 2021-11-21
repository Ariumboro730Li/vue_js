<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: userNameValidaty === `invalid`}">
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        ref="userName"
        @blur="validateInput"
      />
      <p v-if="userNameValidaty == `invalid`">Invalid Username</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input
        id="age"
        name="age"
        type="number"
        v-model="userAge"
        ref="userAge"
      />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer" ref="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          value="news"
          type="checkbox"
          v-model="interest"
          ref="interest"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          value="tutorials"
          type="checkbox"
          v-model="interest"
          ref="interest"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          value="nothing"
          type="checkbox"
          v-model="interest"
          ref="interest"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          value="video"
          type="radio"
          v-model="how"
          ref="how[]"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          value="blogs"
          type="radio"
          v-model="how"
          ref="how[]"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          value="other"
          type="radio"
          v-model="how"
          ref="how[]"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <rating-control v-model="rating" ></rating-control>
    </div>
    <div>
      <div class="form-control">
        <input
          id="interest-tutorials"
          name="interest"
          value="tutorials"
          type="checkbox"
          v-model="confirm"
          ref="confirm"
        />
        <label for="interest-tutorials">Term of Use</label>
      </div>

      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from "./RatingControl.vue";
let arrTagName = [
  `userName`,
  `userAge`,
  `referrer`,
  `interest`,
  `how`,
  `rating`,
  `confirm`,
];
export default {
  components : {
    RatingControl
  },
  data() {
    return {
      interest: [],
      rating : null,
      referrer : null,
      userName: ``,
      userAge: ``,
      how: null,
      confirm: false,
      userNameValidaty : `valid`,
    };
  },
  methods: {
    submitForm() {
      arrTagName.forEach((tagName) => {
        console.log(this[tagName]);
        this[tagName] = (tagName == "interest") ? [] : null ;
      });
    },
    validateInput() {
      if (this.userName === ``) {
        this.userNameValidaty = `invalid`
      } else {
        this.userNameValidaty = `valid`
      }
    },
  },
};
</script>

<style scoped>
  form {
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 2rem;
    background-color: #ffffff;
  }

  .form-control {
    margin: 0.5rem 0;
  }

  .form-control.invalid input {
    border-color : red;
  }

  .form-control.invalid label {
    color : red;
  }

  label {
    font-weight: bold;
  }

  h2 {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  input,
  select {
    display: block;
    width: 100%;
    font: inherit;
    margin-top: 0.5rem;
  }

  select {
    width: auto;
  }

  input[type='checkbox'],
  input[type='radio'] {
    display: inline-block;
    width: auto;
    margin-right: 1rem;
  }

  input[type='checkbox'] + label,
  input[type='radio'] + label {
    font-weight: normal;
  }

  button {
    font: inherit;
    border: 1px solid #0076bb;
    background-color: #0076bb;
    color: white;
    cursor: pointer;
    padding: 0.75rem 2rem;
    border-radius: 30px;
  }

  button:hover,
  button:active {
    border-color: #002350;
    background-color: #002350;
  }
</style>