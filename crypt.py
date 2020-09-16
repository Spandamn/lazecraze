count = int(input('Enter length of dictionary: '))
dic = []
print('Enter the words')
for i in range(count):
    dic.append(raw_input())
dic.sort(reverse=True, key=len)
sentence = raw_input('Enter the sentence: ')
words = sentence.split(' ')
words.sort(reverse=True, key=len)
transform = {' ': ' '}

def applyTransform (word, transformObj = transform):
    s = ''
    for i in word:
        s = s + (transformObj[i] if i in transformObj.keys() else '*')
    return s

translatedWords = {}
for i in words:
    if i in translatedWords.keys():
        continue
    for j in dic:
        if len(i) == len(j):
            trialT = transform.copy()
            for k in j:
                if k in transform.values():
                    continue
                trialT[i[j.index(k)]] = k
            flag = False
            for k in words:
                trial = applyTransform(k, trialT)
                if trial in dic and (k not in translatedWords.keys()):
                    flag = True
                    translatedWords[k] = True
                    break
            if flag:
                temp = transform.copy()
                transform.update(trialT)
                transform.update(temp)
print(applyTransform(sentence))