const people = [
    {
      firstName: "Bartolomeo",
      lastName: "Lozano",
    },
    {
      firstName: "Gregorio",
      lastName: "Asfalto",
    },
    {
      firstName: "LU",
      lastName: "BU",
    },
    {
      firstName: "BanbnR",
      lastName: "laO",
    },
  ]
const colors = ["red", "green", "yellow", "blue", "pink", "orange","black","brown"];


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                                                                      TASK 1                                                                        //
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function createNickname(people){
//         const peopleWithNickname=people.map(people=> {
//             const firstNames=people.firstName.split('')
//             const lastNames=people.lastName.split('').reverse() 
//             const numberOfIterations=nameOrLastName=> nameOrLastName.length<3?nameOrLastName.length:3

//             const getThreeLettersFromNameOrLastName=nameOrLastName=>{
//                     const num=numberOfIterations(nameOrLastName)
//                     threeLettersArr=[]
//                     for(i=0;i<num;i++) nameOrLastName===firstNames?   threeLettersArr.unshift(nameOrLastName[i]) : threeLettersArr.push(nameOrLastName[i]) 
//             return threeLettersArr.join('')
//             }
//             const nicknameArr=[getThreeLettersFromNameOrLastName(firstNames),getThreeLettersFromNameOrLastName(lastNames)]
//             const nicknameLowerCase=nicknameArr.reduce((nameLetters,lastNameLetters)=>(nameLetters+lastNameLetters).toLowerCase())
//             const nickname = nicknameLowerCase.replace(/(\b[a-z](?!\s))/g, nickname=> nickname.toUpperCase())    
//             const person={ 
//                     firstName:people.firstName,
//                     lastName:people.lastName,
//                     nickname,
//                 } 
//         return person 
//         })
//     return peopleWithNickname 
// }
// console.log(createNickname(people))

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                                                                      TASK 2                                                                        //
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function createNickname(people){
//     const peopleWithNickname=people.map(people=> {
//         const firstNames=people.firstName.split('')
//         const lastNames=people.lastName.split('').reverse() 
//         const numberOfIterations=nameOrLastName=> nameOrLastName.length<3?nameOrLastName.length:3

//         const getThreeLettersFromNameOrLastName=nameOrLastName=>{
//                 const num=numberOfIterations(nameOrLastName)
//                 threeLettersArr=[]
//                 for(i=0;i<num;i++) nameOrLastName===firstNames?   threeLettersArr.unshift(nameOrLastName[i]) : threeLettersArr.push(nameOrLastName[i]) 
//         return threeLettersArr.join('')
//         }
//         const nicknameArr=[getThreeLettersFromNameOrLastName(firstNames),getThreeLettersFromNameOrLastName(lastNames)]
//         const nicknameLowerCase=nicknameArr.reduce((nameLetters,lastNameLetters)=>(nameLetters+lastNameLetters).toLowerCase())
//         const nickname = nicknameLowerCase.replace(/(\b[a-z](?!\s))/g, nickname=> nickname.toUpperCase())    

//         function personWithIntroduce(){  
//             const person={ 
//             firstName:people.firstName,
//             lastName:people.lastName,
//             nickname,  
//             introduceYourself: function(){return `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}]`}
//             }
//         return person.introduceYourself()
//         }
//         const person={ 

//             firstName:people.firstName,
//             lastName:people.lastName,
//             nickname,  
//             introduceYourself: personWithIntroduce(),

//         }
//         return person
//     })
// return peopleWithNickname
// }
// console.log(createNickname(people))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                      TASK 3                                                                        //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function createNickname(people){
//         const peopleWithNickname=people.map(people=> {
//             const firstNames=people.firstName.split('')
//             const lastNames=people.lastName.split('').reverse() 
//             const numberOfIterations=nameOrLastName=> nameOrLastName.length<3?nameOrLastName.length:3

//             const getThreeLettersFromNameOrLastName=nameOrLastName=>{
//                     const num=numberOfIterations(nameOrLastName)
//                     threeLettersArr=[]
//                     for(i=0;i<num;i++) nameOrLastName===firstNames?   threeLettersArr.unshift(nameOrLastName[i]) : threeLettersArr.push(nameOrLastName[i]) 
//             return threeLettersArr.join('')
//             }
//             const nicknameArr=[getThreeLettersFromNameOrLastName(firstNames),getThreeLettersFromNameOrLastName(lastNames)]
//             const nicknameLowerCase=nicknameArr.reduce((nameLetters,lastNameLetters)=>(nameLetters+lastNameLetters).toLowerCase())
//             const nickname = nicknameLowerCase.replace(/(\b[a-z](?!\s))/g, nickname=> nickname.toUpperCase()) 
               
//         const getFavouriteColor=function(number){

//             const num =number<1||number>30? number>30? console.log('podałeś za dużą liczbę, liczba nie może być większa niż 30'):console.log('podałeś za małą liczbę, liczba nie może być mniejsza niż 1')
//             : number ===undefined?number=5 : number 
//             const firstNameLength=this.firstName.length
//             const lastNameLength=this.lastName.length
//             const nicknameLength=this.nickname.length
//             const arr=[firstNameLength,lastNameLength,nicknameLength]
//             const sumLetters=arr.reduce((sum,keys)=>sum+keys)
//             const lengthMinusArgument= sumLetters-num
//             const indexOfColor=lengthMinusArgument<0? Math.abs(lengthMinusArgument)%colors.length:lengthMinusArgument%colors.length
//             const color=colors[indexOfColor]
//         return color
//         }
//        const person={ 
//             firstName:people.firstName,
//             lastName:people.lastName,
//             nickname,  
//             introduceYourself: function (){
//                 return `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}]`
//                 },
//             getFavouriteColor,
//         }
//     return person.getFavouriteColor(1)              // num for 1 to 30
//     })  

// return peopleWithNickname
// }
// console.log(createNickname(people))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                      TASK 4                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function createNickname(people){
//         const peopleWithNickname=people.map(people=> {
//                 const firstNames=people.firstName.split('')
//                 const lastNames=people.lastName.split('').reverse() 
//                 const numberOfIterations=nameOrLastName=> nameOrLastName.length<3?nameOrLastName.length:3
    
//                 const getThreeLettersFromNameOrLastName=nameOrLastName=>{
//                         const num=numberOfIterations(nameOrLastName)
//                         threeLettersArr=[]
//                         for(i=0;i<num;i++) nameOrLastName===firstNames?   threeLettersArr.unshift(nameOrLastName[i]) : threeLettersArr.push(nameOrLastName[i]) 
//                 return threeLettersArr.join('')
//                 }
//                 const nicknameArr=[getThreeLettersFromNameOrLastName(firstNames),getThreeLettersFromNameOrLastName(lastNames)]
//                 const nicknameLowerCase=nicknameArr.reduce((nameLetters,lastNameLetters)=>(nameLetters+lastNameLetters).toLowerCase())
//                 const nickname = nicknameLowerCase.replace(/(\b[a-z](?!\s))/g, nickname=> nickname.toUpperCase()) 
//                 const person={ 
//                     firstName:people.firstName,
//                     lastName:people.lastName,
//                     nickname,  
//                     }
//         return person
//         })
//         const getFavouriteColor=function(number,person){
//             const num =number<1||number>30? number>30? console.log('podałeś za dużą liczbę, liczba nie może być większa niż 30'):console.log('podałeś za małą liczbę, liczba nie może być mniejsza niż 1')
//             : number ===undefined?number=5 : number 
//             const firstNameLength=person.firstName.length
//             const lastNameLength=person.lastName.length
//             const nicknameLength=person.nickname.length
//             const arr=[firstNameLength,lastNameLength,nicknameLength]
//             const sumLetters=arr.reduce((sum,keys)=>sum+keys)
//             const lengthMinusArgument= sumLetters-num
//             const indexOfColor=lengthMinusArgument<0? Math.abs(lengthMinusArgument)%colors.length:lengthMinusArgument%colors.length
//             const color=colors[indexOfColor]
//             return color
//         }
//         const colorArr=[]  
//         for(person of peopleWithNickname ){
//             colorArr.push(`Ulubiony kolor ${person.nickname} to: [${getFavouriteColor(29,person)}]`) 
//         }
//         return colorArr
//         }
//         console.log(createNickname(people))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                      TASK 6    Not Finished (don't now its good way to solve it)                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////     a    ////

// function curry(f) { 
//     return function(a) {
//       return function (b){
//         return f(a,b)
//       }
//     }
// }
// function multiplication  (a,b){
// return a*b
// }
// const multi=curry(multiplication)
// console.log(multi(2)(4))
//     b   ////
// const curry =(fn) =>{
//     return curried = (...args) => {
//         if (fn.length !== args.length){
//             return curried.bind(null, ...args)
//             }
//         return fn(...args)
//         }
//     }
// const multiply=(a,b,c,d) => a*b*c*d
// const multi = curry(multiply)
// console.log(multi(4)(5)(6)(10))    