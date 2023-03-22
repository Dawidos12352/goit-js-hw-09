import { throttle } from 'lodash';

const form = document.querySelector("form.feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const button = document.querySelector("button");
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(event => {
    const saveObject = {
        email: form.elements.email.value,
        message: form.elements.message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(saveObject));
},500));

form.addEventListener("submit", event => {
    event.preventDefault();
const {
    elements : {
        email,
        message,
    },
} = event.currentTarget;

console.log({email: email.value, message: message.value});
event.currentTarget.reset();
localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Get satate error: ", error.message);
    }
};

const userData = load(LOCALSTORAGE_KEY);
if (userData) {
    email.value = userData.email;
    message.value = userData.message;
};