export default class Validator {
  validateUsername(name) {
    this.name = name.toString();
    const reLetters = /[^a-z\-_0-9]/i;
    const checkLetters = reLetters.test(this.name);
    if (checkLetters) {
      return 'Имя содержит недопустимые символы!';
    }

    const reFigures = /^[\d\-_]|\d{3}|[\d\-_]$/;
    const checkFigures = reFigures.test(this.name);
    if (checkFigures) {
      return 'Имя содержит недопустимый порядок символов!';
    }
    return 'Проверка имени успешно пройдена!';
  }
}

// const newCheck = new Validator();
// const userName = 'xxxGladiator-12_12xxx';
// console.log(newCheck.validateUsername(userName));
