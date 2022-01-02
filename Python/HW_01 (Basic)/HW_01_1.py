# Пропозиція ввести свіє ім'я та вік
name: str = input("Enter your name: ")
age = input("Enter your age: ")

# Перевірка на правельність введення віку, має бути число.
while not(age.isnumeric()):
    age = input("Enter your age as number, used only numbers: ")

# Друк тексту у відповідності до завдання.
ageInt = int(age)
if ageInt <= 2:
    print(name + ' The Baby!')
elif ageInt <= 16:
    print(name + ' The Child!')
else:
    print(name + ' The Adult!')

