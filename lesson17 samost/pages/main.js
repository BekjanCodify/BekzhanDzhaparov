let button = document.querySelector('button')
let citate = document.querySelector('.citate')

button.addEventListener('click',()=>{
  let text =['«Чем умнее человек, тем легче он признает себя дураком».<br> Альберт Эйнштейн',
  '«Никогда не ошибается тот, кто ничего не делает». Теодор Рузвельт',
  '«Мы находимся здесь, чтобы внести свой вклад в этот мир. Иначе зачем мы здесь?» Стив Джобс',
  '«Если тебе тяжело, значит ты поднимаешься в гору. Если тебе легко, значит ты летишь в пропасть». Генри Форд',
  'Дай человеку власть, и ты узнаешь, кто он». Наполеон Бонапарт',
  '«Тренируйся с теми, кто сильнее. Не сдавайся там, где сдаются другие. И победишь там, где победить нельзя». Брюс Ли',
  '«Ненавижу всяческую мертвечину! Обожаю всяческую жизнь!» Владимир Маяковский',
  '«Чемпионами становятся не в тренажёрных залах. Чемпиона рождает то, что у человека внутри: желания, мечты, цели». Мухаммед Али']
let textout = Math.floor(Math.random()*text.length)

  let randomLetter = text[textout]
  citate.innerHTML=randomLetter
})


function numbersSum(arr) {
  let n = 0;
  arr.forEach((num) => {
    if (typeof num === "number") {
      n += num;
    }
  });
	return n;
}
console.log(numbersSum([1, 2, "13", "4", "645"]))
console.log(numbersSum([true, false, "123", "75"]))
console.log(numbersSum([1, 2, 3, 4, 5, true]))


function reverseWords(txt){
  let rev = txt.split(' ').reverse().join(" ")
  console.log(rev)
}
console.log(reverseWords(" the sky is blue"))
console.log(reverseWords("hello world!"))
console.log(reverseWords("a good example"))