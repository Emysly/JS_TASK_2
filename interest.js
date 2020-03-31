const data = [
  {
    principal: 2500,
    time: 1.8
  },
  {
    principal: 1000,
    time: 5
  },
  {
    principal: 3000,
    time: 1
  },
  {
    principal: 2000,
    time: 3
  }
];

const interestCalculator = array => {
  let rate,
    interest,
    obj1,
    obj2,
    obj3,
    obj4,
    interestData = [];
  for (let i = 0; i < array.length; i++) {
    if (data[i].principal >= 2500 && data[i].time > 1 && data[i].time < 3) {
      rate = 3;
      interest = (data[i].principal * rate * data[i].time) / 100;
      obj1 = {
        principal: data[i].principal,
        rate,
        time: data[i].time,
        interest
      };
      interestData.push(obj1);
    } else if (data[i].principal >= 2500 && data[i].time >= 3) {
      rate = 4;
      interest = (data[i].principal * rate * data[i].time) / 100;
      obj2 = {
        principal: data[i].principal,
        rate,
        time: data[i].time,
        interest
      };
      interestData.push(obj2);
    } else if (data[i].principal < 2500 || data[i].time <= 1) {
      rate = 2;
      interest = (data[i].principal * rate * data[i].time) / 100;
      obj3 = {
        principal: data[i].principal,
        rate,
        time: data[i].time,
        interest
      };
      interestData.push(obj3);
    } else {
      rate = 1;
      interest = (data[i].principal * rate * data[i].time) / 100;
      obj4 = {
        principal: data[i].principal,
        rate,
        time: data[i].time,
        interest
      };
      interestData.push(obj4);
    }
  }
  console.log(interestData);
  return interestData;
};

interestCalculator(data);
