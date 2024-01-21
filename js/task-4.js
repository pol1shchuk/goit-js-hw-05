const getTotalBalanceByGender = (users, gender) =>{
    const value = users.filter(elem =>elem.gender===gender)
    .reduce((previus,elem)=>{return previus+elem.balance},0);
    return value;
  }
  
  
  const infoAllUsers = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
  ];
  
  console.log(getTotalBalanceByGender(infoAllUsers, "male")); // 12053
  
  console.log(getTotalBalanceByGender(infoAllUsers, "female")); // 8863