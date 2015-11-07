/**
 * Created by zwhu on 15/10/28.
 * 二分查找,有序数组
 */

let binarySearch = (key, a) => {
  let lo = 0
    , hi = a.length - 1
  while (lo <= hi) {
    let mid = ((lo + hi) / 2) | 0
    if (a[mid] < key)
      hi = mid - 1
    else if (a[mid] > key)
      lo = mid + 1
    else return mid
  }
  return -1
}
