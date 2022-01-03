#  Загадайте число від 1-10
import random
randomNumber = random.randint(1, 10)

print('Давайте пограємось! Спробуйте вгадати число від 1-10!')

inputNumber = 0
# Перевірка на правельність введення, має бути число.

while randomNumber != int(inputNumber):
    inputNumber = input("Введіть ваше число від 1 до 10: ")

    # Перевірка на правельність введення, має бути число.
    while not (inputNumber.isnumeric()):
        inputNumber = input("Ви не ввели коректно число, спробуйте ще раз. Введіть ваше число від 1 до 10: ")
    # Перевірка на правельність введення, має бути число з диапазону [1-10].
    if int(inputNumber) < 1 or int(inputNumber) > 10:
        inputNumber = 0
        print('Ви ввели число, що не входить до визначеного діапазону, спробуйте ще раз!')
    # Підказка
    elif int(inputNumber) < randomNumber:
        print('Ви ввели замале число, спробуйте, ще раз!')
    # Підказка
    elif int(inputNumber) > randomNumber:
        print('Ви ввели завелике число, спробуйте, ще раз!')
    # Числа співпали!
    else:
        print('Система загадала число', randomNumber)
        print('Вгадали, вам би в казино грати!')
