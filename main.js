const me = {
  lastname: 'Dumazert',
  firstname: 'Rebecca',
  age: 26,
  city: 'Panam',
  job: 'dev',
  family: ['camille', 'laurence', 'Cath', 'Pierre'],
};

function familyName(me) {
  console.log(me.family[0]);
}
familyName(me);

const city1 = me.city;
console.log('ville de naisse : ' + city1);

const city2 = me['city'];
console.log('ville array : ' + city2);

if (city1 === city2) {
  console.log('les deux variables sont égales');
} else {
  console.log('les deux variables ne sont pas égales');
}

const friend = 'friendssss';
me[friend] = ['lou', 'jul', 'julie'];
console.log(me[friend]);
