const projButt = document.getElementsByClassName('project');
const popUp = document.getElementsByClassName('pop-up');

const projArr = [];

// Convert HTML collection to array
for (let i = 0; i < projButt.length; i++) {
  projArr.push(projButt[i]);
};

// Event handler functions
const visable0 = () => {
  popUp[0].style.display = 'block';
};

const visable1 = () => {
  popUp[1].style.display = 'block';
};

const visable2 = () => {
  popUp[2].style.display = 'block';
};

const hide0 = () => {
  popUp[0].style.display = 'none';
};

const hide1 = () => {
  popUp[1].style.display = 'none';
};

const hide2 = () => {
  popUp[2].style.display = 'none';
};

// Add event listener to all proj buttons
projArr[0].addEventListener('mouseover', visable0);
projArr[1].addEventListener('mouseover', visable1);
projArr[2].addEventListener('mouseover', visable2);

projArr[0].addEventListener('mouseout', hide0);
projArr[1].addEventListener('mouseout', hide1);
projArr[2].addEventListener('mouseout', hide2);
