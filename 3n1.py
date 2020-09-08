def getCycleLength(num):
    count = 1
    while num != 1:
        if num % 2 == 0:
            num = num / 2
        else:
            num = 3 * num + 1
        count = count + 1
    return count

inp = raw_input("Provide input\n")
(n1, n2) = inp.split(' ')
n1 = int(n1)
n2 = int(n2)
high = 0
for i in range(n1, n2 + 1):
    cur = getCycleLength(i)
    if cur > high:
        high = cur
strn = str(n1) + " " + str(n2) + " " + str(high)
print(strn)