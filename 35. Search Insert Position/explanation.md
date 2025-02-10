# [AZ]
## Binary Search Algoritmi

Binary Search (İkili Axtarış) sıralanmış bir siyahıda (array) verilmiş elementin indeksini tapmaq üçün istifadə olunan effektiv bir axtarış metodudur. Bu metod O(log n) zaman mürəkkəbliyinə malikdir.

## Problem nədir?
Verilmiş artan sıralı və fərqli tam ədədlərdən ibarət massivi və bir hədəf dəyəri nəzərə alaraq, əgər hədəf tapılarsa, onun indeksini qaytarın. Əgər tapılmazsa, onu qaydasına uyğun yerləşdirmək üçün hansı indeksə daxil ediləcəyini qaytarın.

Siz O(log n) zaman mürəkkəbliyinə malik bir alqoritm yazmalısınız.

##### Çətinlik səviyyəsi: Sadə (Easy)

## Algoritmin İş Prinsipi
1. **Başlanğıc dəyərləri təyin edilir:**
   - `left = 0` (siyahının ilk indeksi)
   - `right = nums.length - 1` (siyahının son indeksi)

2. **Dövr başlatılır:**
   - `while (left <= right)`, yəni sol indeks sağ indeksdən kiçik və ya ona bərabər olduğu müddətcə iterasiya davam edir.

3. **Orta dəyər hesablanır:**
   - `mid = Math.floor((left + right) / 2)`, burada `mid` ortadakı elementi göstərir.
   - `Math.floor` funksiyası ondalıq hissəni atır və tam ədəd qaytarır.

4. **Şərtlər yoxlanılır:**
   - Əgər `nums[mid]` axtarılan `target`-ə bərabərdirsə, `mid` qaytarılır.
   - Əgər `nums[mid] > target` olarsa, `right = mid - 1` olur.
   - Əgər `nums[mid] < target` olarsa, `left = mid + 1` olur.

5. **Əgər target tapılmazsa:**
   - `left` dəyəri nəticə kimi qaytarılır, çünki target bu indeksə yerləşdirilməlidir.

## Vizual İzah
Məsələn, verilmiş siyahı və axtarılan element:

```plaintext
nums = [1, 3, 5, 7, 13] 
      left   mid   right

target = 7
```

1. İlk iterasiya:
   - `left = 0`, `right = 4`
   - `mid = Math.floor((0 + 4) / 2) = 2`
   - `nums[2] = 5`, lakin `5 < 7`, buna görə `left = mid + 1 = 3`

2. İkinci iterasiya:
   - `left = 3`, `right = 4`
   - `mid = Math.floor((3 + 4) / 2) = 3`
   - `nums[3] = 7`, yəni `target` tapıldı! Geri `mid = 3` qaytarılır.

## Problemin həlli

Bu problemi həll etmək üçün Binary Search metodundan istifadə edirik. Əvvəlcə siyahının başlanğıc (`left`) və son (`right`) indekslərini təyin edirik. Daha sonra dövr içərisində ortadakı elementi (`mid`) hesablayırıq.

Əgər `mid` indeksindəki element `target` ilə eynidirsə, bu indeks geri qaytarılır. Əgər `target`, `mid` elementindən kiçikdirsə, demək ki, o, siyahının sol hissəsində yerləşməlidir və `right` dəyişəni `mid - 1` olacaq. Əks halda, `target`, `mid` elementindən böyükdürsə, o zaman `left` dəyişənini `mid + 1` olaraq yeniləyirik.

Əgər `target` siyahıda tapılmazsa, onda `left` dəyişəninin dəyəri geri qaytarılır, çünki bu indeks `target`-in yerləşdirilməli olduğu yerdir.

## Mürəkkəblik - O(log n)
Bu metod Binary Search prinsipinə əsaslandığı üçün **O(log n)** zaman mürəkkəbliyinə malikdir. Hər addımda axtarış sahəsi yarıya endirildiyi üçün bu effektiv bir yanaşmadır.

---
# [EN]
## Binary Search Algorithm

Binary Search is an efficient search method used to find the index of a given element in a sorted list (array). This method has a time complexity of O(log n).

## What is the Problem?
Given a sorted array of distinct integers and a target value, return the index if the target is found. If it is not found, return the index where it should be inserted in order.

You must write an algorithm with O(log n) runtime complexity.

##### Difficulty Level: Easy

## Algorithm Principle
1. **Initialize values:**
   - `left = 0` (first index of the list)
   - `right = nums.length - 1` (last index of the list)

2. **Start the loop:**
   - The loop runs while `left <= right`, meaning the left index is less than or equal to the right index.

3. **Calculate the middle value:**
   - `mid = Math.floor((left + right) / 2)`, where `mid` represents the middle element.
   - `Math.floor` is used to remove the decimal part and return an integer.

4. **Check conditions:**
   - If `nums[mid]` is equal to `target`, return `mid`.
   - If `nums[mid] > target`, update `right = mid - 1`.
   - If `nums[mid] < target`, update `left = mid + 1`.

5. **If the target is not found:**
   - Return `left` as the index where the target should be inserted.

## Visual Explanation
For example, given the sorted array and target value:

```plaintext
nums = [1, 3, 5, 7, 13] 
      left   mid   right

target = 7
```

1. First iteration:
   - `left = 0`, `right = 4`
   - `mid = Math.floor((0 + 4) / 2) = 2`
   - `nums[2] = 5`, but `5 < 7`, so update `left = mid + 1 = 3`

2. Second iteration:
   - `left = 3`, `right = 4`
   - `mid = Math.floor((3 + 4) / 2) = 3`
   - `nums[3] = 7`, meaning `target` is found! Return `mid = 3`.

## Solution Explanation

To solve this problem, we use the Binary Search method. First, we initialize the starting (`left`) and ending (`right`) indices of the list. Then, we calculate the middle element (`mid`) inside a loop.

If the element at `mid` is equal to `target`, return its index. If `target` is smaller than `mid`, it must be in the left half of the list, so we update `right = mid - 1`. Otherwise, if `target` is greater than `mid`, we update `left = mid + 1`.

If `target` is not found in the list, then `left` is returned, as it represents the index where the target should be inserted.

## Complexity - O(log n)
Since this method follows the Binary Search principle, it has a **O(log n)** time complexity. The search space is reduced by half at each step, making it an efficient approach.