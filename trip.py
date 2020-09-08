count = int(input("Please provide input\n"))
costs = []
total = 0.0
for i in range(count):
    inp = float(input("\n"))
    total = total + inp
    costs.append(inp)
ave = int(total / count) * 100 / 100.0
pay = bor = 0.0
low = 0.0
for i in costs:
    if ave < i:
        pay = pay + (i - ave)
    else:
        bor = bor + (ave - i)
print(min(pay, bor))