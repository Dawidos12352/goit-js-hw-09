import Notiflix from "notiflix";

const inputDelay = document.querySelector(`[name="delay"]`);
const inputStep = document.querySelector(`[name="step"]`);
const inputAmount = document.querySelector(`[name="amount"]`);
const btn = document.querySelector("button");

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
    // Fulfill
        resolve({position, delay});
      } else {
    // Reject
        reject({position, delay});
      }
    },delay);
  });
  return promise;
};

btn.addEventListener("click", event => {
  event.preventDefault();
  const firstDelay = Number(inputDelay.value);
  const delayStep = Number(inputStep.value);
  const amount = Number(inputAmount.value);

for ( let i = 1; i <= amount; i++) {
  let promiseDelay = firstDelay + delayStep * ( i - 1 );

createPromise(i, promiseDelay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
};
});