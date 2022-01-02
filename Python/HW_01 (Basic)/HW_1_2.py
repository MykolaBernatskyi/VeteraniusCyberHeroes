# FizzBuzz - надрукуйте числа від 1 до 60. Проте якщо число ділиться на 3 друкуйте fizz, якщо ділиться на 5 - buzz, якщо і на 3 і на 5 – fizzbuzz
for x in range(60):
    if not (x+1) % 3 and not (x+1) % 5:
        print("fizzbuzz")
    elif not (x+1) % 3:
        print("fizz")
    elif not (x + 1) % 5:
        print("buzz")
    else:
        print(x + 1)
