const subscriptionsDiv = document.querySelector('.subscriptions');

const createSubscriptionElement = (data) => {
  const subscriptionDiv = document.createElement('div');
  subscriptionDiv.classList.add('subscription');
  
  const img = document.createElement('img');
  img.src = data.imageUrl;
  img.alt = "";
  img.style.height = "22px";
  
  const nameSpan = document.createElement('span');
  nameSpan.textContent = data.name;
  
  subscriptionDiv.appendChild(img);
  subscriptionDiv.appendChild(nameSpan);
  
  return subscriptionDiv;
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    for (const subscriptionData of data.subscriptions) {
      const subscription = createSubscriptionElement(subscriptionData);
      subscriptionsDiv.appendChild(subscription);
    }
  });