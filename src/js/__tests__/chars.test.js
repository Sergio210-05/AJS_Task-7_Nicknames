import Validator from '../char';

const users = [
  ['xxxGladiator@xxx', 'Имя содержит недопустимые символы!'],
  ['xxxГладиаторxxx', 'Имя содержит недопустимые символы!'],
  ['+Gladiator+', 'Имя содержит недопустимые символы!'],
  ['xxxGladiator!xxx', 'Имя содержит недопустимые символы!'],
  ['xxxGladiator999xxx', 'Имя содержит недопустимый порядок символов!'],
  ['9xxxGladiatorxxx', 'Имя содержит недопустимый порядок символов!'],
  ['xxxGladiatorxxx9', 'Имя содержит недопустимый порядок символов!'],
  ['_Gladiatorxxx', 'Имя содержит недопустимый порядок символов!'],
  ['xxxGladiator_', 'Имя содержит недопустимый порядок символов!'],
  ['-Gladiator999xxx', 'Имя содержит недопустимый порядок символов!'],
  ['xxxGladiator999-', 'Имя содержит недопустимый порядок символов!'],
  ['xxxGladiator-12_12xxx', 'Проверка имени успешно пройдена!'],
];

const handler = test.each(users);

handler('Testing nickname "%s"', (name, check) => {
  const checkName = new Validator();
  expect(checkName.validateUsername(name)).toBe(check);
});
