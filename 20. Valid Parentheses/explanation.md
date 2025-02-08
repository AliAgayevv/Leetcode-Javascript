# [AZ]

### Problem nədir?
Verilmiş `s` sətirində yalnız `(`, `)`, `{`, `}`, `[` və `]` simvolları varsa, bu sətirin etibarlı olub-olmadığını müəyyən edin.

Bir sətir aşağıdakı şərtlərə uyğun gəlirsə, etibarlı hesab olunur:

- Açıq mötərizələr eyni tipli bağlanan mötərizələrlə bağlanmalıdır.
- Açıq mötərizələr düzgün ardıcıllıqla bağlanmalıdır.
- Hər bir bağlanan mötərizənin eyni tipli açıq mötərizəsi olmalıdır.

##### Çətinlik səviyyəsi: Sadə (Easy)

## Stack nədir?
Əvvəla `stack` data strukturu ilə tanış olmalıyıq. Stack-i qutuya bənzədə bilərik, hansı ki, sadəcə üst tərəfi açıqdır və içərisindən nə isə götürmək istəyəndə üstdən götürməlisiniz. Fərz edək ki, bu qutuya data əlavə etmək istəyirik və ardıcıl sırayla `data1`, `data2` və `data3`-ü stack-imizə əlavə edirik. Əlavə etmə əməliyyatı bitəndən sonra stack bu formada görünəcək:

```
| data3 |
| data2 |
| data1 |
---------
```

Bəs qutudan data götürmək istəsək nə baş verər? O zaman ən son əlavə edilən (`data3`) ilk götürülən data olacaq. Bu prinsipə LIFO (*Last In, First Out* - Son girən, ilk çıxar) deyilir. Stack-i başa düşdüyümüzə görə artıq problemin həllinə qayıda bilərik.

## Problemin həlli
İlkin olaraq boş stack yaradılır. Əgər `s` sətrinin uzunluğu `1`-ə bərabərdirsə, o zaman bu heç bir halda lazımi 3 şərti ödəməyəcəyi üçün `false` qaytarılır.

`for` dövrü ilə `s` sətrinin üzərində iterasiya edirik. Əgər element açılan hər hansı mötərizə tipidirsə (yəni `(`, `[`, `{` bunlardan biridirsə), o zaman stack-ə əlavə edilir. Əgər bunlardan biri deyilsə, o zaman `else` şərti icra olunur.

Stack-in ən üstündəki elementi tapmaq üçün `stack[stack.length - 1]` istifadə edirik, bu bizə ən üstdəki elementi qaytaracaq. Əgər ən üstdəki element təyin olunmayıbsa (`undefined`-dırsa), o zaman `false` qaytarılacaq. Bu, məsələn, `s = ){}]` kimi bir giriş üçün algoritmin səhv nəticə qaytarmamasını təmin edir.

Daha sonra, stack-in ən üstündəki element ilə hazırkı iterasiya elementimiz olan `char` yoxlanılır. Əgər eyni tipdirlərsə, bu zaman ən üstdəki element silinir. Yekun nəticə olaraq `stack` element sayına baxılır, silmə əməliyyatları aparılmasına baxmayaraq `stack` hələdə 0 deyilsə o zaman verilmiş mötərizələr ardıcıllığı təyin olunan şərtlərə uyğun deyil.



## Mürəkkəblik - Big O 
- Bu həll `O(n)` vaxt mürəkkəbliyinə malikdir, çünki `s` sətrindəki hər bir simvol bir dəfə işlənir və stack əməliyyatları `O(1)` vaxtda baş verir.

---

# [EN]

### What is the problem?
Given a string `s` containing only the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.

A string is considered valid if it meets the following conditions:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every closing bracket has a corresponding open bracket of the same type.

##### Difficulty Level: Easy

## What is a Stack?
First, we need to understand the `stack` data structure. We can think of a stack as a box that is open only at the top, and when retrieving something, we must take it from the top. Suppose we want to add data to this box and sequentially push `data1`, `data2`, and `data3` onto our stack. After the push operations, the stack will look like this:

```
| data3 |
| data2 |
| data1 |
---------
```

What happens if we remove data from the box? The most recently added element (`data3`) will be removed first. This principle is called LIFO (*Last In, First Out*). Now that we understand stacks, we can proceed with solving the problem.

## Solution to the Problem
Initially, an empty stack is created. If the length of `s` is `1`, it cannot possibly satisfy the given conditions, so `false` is returned.

We iterate over the string `s` using a `for` loop. If the current character is an opening bracket (i.e., `(`, `[`, `{`), it is added to the stack. Otherwise, the `else` condition is executed.

To retrieve the top element of the stack, we use `stack[stack.length - 1]`, which returns the topmost element. If the `topOfStack` is empty (`undefined`), `false` is returned. This ensures that cases like `s = ){}]` do not result in incorrect outputs.

Next, the top element of the stack is compared with the current character. If they match, the top element is removed. Finally, the stack's size is checked: if it is not `0` despite removal operations, the given bracket sequence does not meet the specified conditions.

## Complexity - Big O
- This solution has a time complexity of `O(n)`, as each character in `s` is processed once, and stack operations take `O(1)` time.

