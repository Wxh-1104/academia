# NumPy: the absolute basics for beginners

欢迎来到 NumPy 入门绝对指南！

NumPy (**Num**erical **Py**thon) 是一个开源的 Python 库，广泛用于科学和工程领域。NumPy 库包含多维数组数据结构（例如，同质的 N 维 `ndarray`），以及大量能对这些数据结构进行高效操作的函数。你可以在 [什么是 NumPy？](whatisnumpy.html#whatisnumpy) 中了解更多，如果您有任何意见或建议，请随时[联系我们](https://numpy.org/community/)！

## 如何导入 NumPy

[安装 NumPy](https://numpy.org/install/) 后，可以像这样将其导入到 Python 代码中：

```python
import numpy as np
```

这种广泛使用的惯例允许使用一个简短且易于识别的前缀 (`np.`) 来访问 NumPy 的功能，同时将 NumPy 的功能与其他同名功能区分开来。

## 如何阅读示例代码

在整个 NumPy 文档中，您会看到如下所示的代码块：

```python
>>> a = np.array([[1, 2, 3],
...               [4, 5, 6]])
>>> a.shape
(2, 3)
```

以 `>>>` 或 `...` 开头的文本是**输入**，也就是您需要在脚本或 Python 提示符中输入的代码。其他所有内容都是**输出**，即运行代码的结果。请注意，`>>>` 和 `...` 并不是代码的一部分，如果在 Python 提示符中输入它们，可能会导致错误。

要运行示例中的代码，您可以将其复制并粘贴到 Python 脚本或交互式环境（REPL）中，或者使用文档中多处提供的实验性浏览器内交互式示例。

## 为什么使用 NumPy？

Python 列表是优秀的通用容器。它们可以是“异构”的，意味着它们可以包含多种类型的元素，并且当用于对少量元素执行单个操作时，它们的速度相当快。

然而，根据数据的特性和需要执行的操作类型，其他容器可能更合适。通过利用这些特性，我们可以提高速度、减少内存消耗，并为执行各种常见的处理任务提供高级语法。当需要在 CPU 上处理大量“同质”（相同类型）数据时，NumPy 的优势就显现出来了。

## 什么是“数组”？

在计算机编程中，数组是一种用于存储和检索数据的结构。我们通常把数组看作是空间中的一个网格，每个单元格存储一个数据元素。例如，如果数据的每个元素都是一个数字，我们可以将“一维”数组想象成一个列表：

$$
\begin{array}{|c||c|c|c|}
\hline
1 & 5 & 2 & 0 \\
\hline
\end{array}
$$

一个二维数组就像一个表格：

$$
\begin{array}{|c||c|c|c|}
\hline
1 & 5 & 2 & 0 \\
\hline
8 & 3 & 6 & 1 \\
\hline
1 & 7 & 2 & 9 \\
\hline
\end{array}
$$

一个三维数组就像一组表格，也许像是打印在不同页面上然后堆叠起来一样。在 NumPy 中，这个概念被推广到任意数量的维度，因此，其基础数组类被称为 `ndarray`：它代表一个“N 维数组”。

大多数 NumPy 数组都有一些限制。例如：

*   数组的所有元素必须是相同的数据类型。
*   一旦创建，数组的总大小不能改变。
*   数组的形状必须是“矩形”的，而不是“锯齿状”的；例如，二维数组的每一行必须有相同的列数。

当满足这些条件时，NumPy 会利用这些特性，使数组比那些限制较少的数据结构更快、更节省内存、使用起来也更方便。

在本文档的其余部分，我们将使用“数组”一词来指代 `ndarray` 的实例。

## 数组基础

初始化数组的一种方法是使用 Python 序列，例如列表。示例如下：

```python
>>> a = np.array([1, 2, 3, 4, 5, 6])
>>> a
array([1, 2, 3, 4, 5, 6])
```

数组的元素可以通过[多种方式](quickstart.html#quickstart-indexing-slicing-and-iterating)进行访问。例如，我们可以像访问原始列表中的元素一样访问该数组的单个元素：使用方括号内的整数索引。

```python
>>> a[0]
1
```

> **注意**
>
> 与 Python 内置序列一样，NumPy 数组是“0 索引”的：数组的第一个元素使用索引 `0` 访问，而不是 `1`。

与原始列表一样，数组是可变的。

```python
>>> a[0] = 10
>>> a
array([10,  2,  3,  4,  5,  6])
```

同样地，Python 的切片表示法也可以用于索引。

```python
>>> a[:3]
array([10,  2,  3])
```

一个主要区别是，对列表进行切片索引会将元素复制到一个新列表中，而对数组进行切片则返回一个*视图 (view)*：一个引用原始数组中数据的对象。原始数组可以通过该视图进行修改。

```python
>>> b = a[3:]
>>> b
array([4, 5, 6])
>>> b[0] = 40
>>> a
array([ 10,  2,  3, 40,  5,  6])
```

关于数组操作何时返回视图而非副本的更全面解释，请参阅[副本与视图](basics.copies.html#basics-copies-and-views)。

二维及更高维度的数组可以从嵌套的 Python 序列中初始化：

```python
>>> a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
>>> a
array([[ 1,  2,  3,  4],
       [ 5,  6,  7,  8],
       [ 9, 10, 11, 12]])
```

在 NumPy 中，数组的一个维度有时被称为“轴 (axis)”。这个术语可能有助于区分数组的维度和数组所代表的数据的维度。例如，数组 `a` 可以表示位于四维空间中的三个点，但 `a` 本身只有两个“轴”。

数组和列表的列表之间的另一个区别是，可以通过在*单*对方括号内指定每个轴的索引（用逗号分隔）来访问数组的元素。例如，元素 `8` 位于第 `1` 行和第 `3` 列：

```python
>>> a[1, 3]
8
```

> **注意**
>
> 在数学中，习惯于先用行索引再用列索引来指代矩阵的元素。对于二维数组来说，这恰好是成立的，但一个更好的心智模型是，将列索引视为*最后一个*索引，行索引视为*倒数第二个*索引。这个模型可以推广到*任意*维度的数组。

> **注意**
>
> 您可能听说过 0-D（零维）数组被称为“标量 (scalar)”，1-D（一维）数组被称为“向量 (vector)”，2-D（二维）数组被称为“矩阵 (matrix)”，或者 N-D（N维，其中“N”通常是大于 2 的整数）数组被称为“张量 (tensor)”。为了清晰起见，最好在指代数组时避免使用这些数学术语，因为同名的数学对象的行为与数组不同（例如，“矩阵”乘法与“数组”乘法有根本区别），而且在科学 Python 生态系统中还有其他对象使用这些名称（例如，PyTorch 的基本数据结构是“张量”）。

## 数组属性

*本节涵盖数组的 `ndim`、`shape`、`size` 和 `dtype` 属性。*

---

数组的维度数量包含在 `ndim` 属性中。

```python
>>> a.ndim
2
```

数组的形状 (`shape`) 是一个由非负整数组成的元组，它指定了每个维度上元素的数量。

```python
>>> a.shape
(3, 4)
>>> len(a.shape) == a.ndim
True
```

数组中固定的元素总数包含在 `size` 属性中。

```python
>>> a.size
12
>>> import math
>>> a.size == math.prod(a.shape)
True
```

数组通常是“同质”的，意味着它们只包含一种“数据类型”的元素。数据类型记录在 `dtype` 属性中。

```python
>>> a.dtype
dtype('int64')  # "int" 代表整数，"64" 代表 64 位
```

[在这里阅读更多关于数组属性的信息](../reference/arrays.ndarray.html#arrays-ndarray)，并在[这里了解数组对象](../reference/arrays.html#arrays)。

## 如何创建一个基本数组

*本节涵盖 `np.zeros()`、`np.ones()`、`np.empty()`、`np.arange()`、`np.linspace()`*

---

除了从元素序列创建数组外，你还可以轻松地创建一个填充了 `0` 的数组：

```python
>>> np.zeros(2)
array([0., 0.])
```

或者一个填充了 `1` 的数组：

```python
>>> np.ones(2)
array([1., 1.])
```

甚至可以创建一个空数组！`empty` 函数创建的数组，其初始内容是随机的，取决于内存的状态。使用 `empty` 而不是 `zeros`（或类似函数）的原因是速度更快——只是要确保之后填充每一个元素！

```python
>>> # 创建一个包含 2 个元素的空数组
>>> np.empty(2)
array([3.14, 42.  ])  # 结果可能不同
```

你可以创建一个包含一定范围元素的数组：

```python
>>> np.arange(4)
array([0, 1, 2, 3])
```

甚至可以创建一个包含一系列等间隔元素的数组。为此，你需要指定**起始数字**、**结束数字**和**步长**。

```python
>>> np.arange(2, 9, 2)
array([2, 4, 6, 8])
```

你也可以使用 `np.linspace()` 来创建一个在指定区间内线性间隔的数组：

```python
>>> np.linspace(0, 10, num=5)
array([ 0. ,  2.5,  5. ,  7.5, 10. ])```

**指定你的数据类型**

虽然默认的数据类型是浮点数 (`np.float64`)，但你可以使用 `dtype` 关键字显式指定你想要的数据类型。

```python
>>> x = np.ones(2, dtype=np.int64)
>>> x
array([1, 1])
```

[在这里了解更多关于创建数组的信息](quickstart.html#quickstart-array-creation)

## 添加、删除和排序元素

*本节涵盖 `np.sort()`、`np.concatenate()`*

---

使用 `np.sort()` 对数组进行排序非常简单。你可以在调用函数时指定轴、种类和顺序。

如果你从这个数组开始：

```python
>>> arr = np.array([2, 1, 5, 3, 7, 4, 6, 8])
```

你可以快速地将数字按升序排序：

```python
>>> np.sort(arr)
array([1, 2, 3, 4, 5, 6, 7, 8])
```

除了 `sort`（它返回一个数组的排序副本）之外，你还可以使用：

*   [`argsort`](../reference/generated/numpy.argsort.html#numpy.argsort)，它沿指定轴进行间接排序。
*   [`lexsort`](../reference/generated/numpy.lexsort.html#numpy.lexsort)，它是一种对多个键进行间接稳定排序。
*   [`searchsorted`](../reference/generated/numpy.searchsorted.html#numpy.searchsorted)，它将在一个已排序的数组中查找元素。
*   [`partition`](../reference/generated/numpy.partition.html#numpy.partition)，它是一种部分排序。

要阅读更多关于数组排序的信息，请参阅：[`sort`](../reference/generated/numpy.sort.html#numpy.sort)。

如果你从这些数组开始：

```python
>>> a = np.array([1, 2, 3, 4])
>>> b = np.array([5, 6, 7, 8])
```

你可以用 `np.concatenate()` 将它们连接起来。

```python
>>> np.concatenate((a, b))
array([1, 2, 3, 4, 5, 6, 7, 8])
```

或者，如果你从这些数组开始：

```python
>>> x = np.array([[1, 2], [3, 4]])
>>> y = np.array([[5, 6]])
```

你可以这样连接它们：

```python
>>> np.concatenate((x, y), axis=0)
array([[1, 2],
       [3, 4],
       [5, 6]])
```

要从数组中删除元素，使用索引来选择你想要保留的元素是很简单的。

要阅读更多关于连接的信息，请参阅：[`concatenate`](../reference/generated/numpy.concatenate.html#numpy.concatenate)。

## 你如何知道一个数组的形状和大小？

*本节涵盖 `ndarray.ndim`、`ndarray.size`、`ndarray.shape`*

---

`ndarray.ndim` 会告诉你数组的轴数或维度数。

`ndarray.size` 会告诉你数组中元素的总数。这是数组形状各元素之*积*。

`ndarray.shape` 会显示一个整数元组，表示沿数组每个维度存储的元素数量。例如，如果你有一个 2 行 3 列的二维数组，那么你的数组形状就是 `(2, 3)`。

例如，如果你创建了这个数组：

```python
>>> array_example = np.array([[[0, 1, 2, 3],
...                            [4, 5, 6, 7]],
...
...                           [[0, 1, 2, 3],
...                            [4, 5, 6, 7]],
...
...                           [[0 ,1 ,2, 3],
...                            [4, 5, 6, 7]]])
```

要找到数组的维度数，运行：

```python
>>> array_example.ndim
3
```

要找到数组中元素的总数，运行：

```python
>>> array_example.size
24
```

要找到你的数组的形状，运行：

```python
>>> array_example.shape
(3, 2, 4)
```

## 你可以重塑一个数组吗？

*本节涵盖 `arr.reshape()`*

---

**是的！**

使用 `arr.reshape()` 会在不改变数据的情况下赋予数组一个新的形状。只需记住，当你使用 `reshape` 方法时，你想要生成的数组必须与原始数组具有相同数量的元素。如果你从一个包含 12 个元素的数组开始，你需要确保你的新数组总共也有 12 个元素。

如果你从这个数组开始：

```python
>>> a = np.arange(6)
>>> print(a)
[0 1 2 3 4 5]
```

你可以使用 `reshape()` 来重塑你的数组。例如，你可以将这个数组重塑为一个三行两列的数组：

```python
>>> b = a.reshape(3, 2)
>>> print(b)
[[0 1]
 [2 3]
 [4 5]]
```

使用 `np.reshape`，你可以指定一些可选参数：

```python
>>> np.reshape(a, newshape=(1, 6), order='C')
array([[0, 1, 2, 3, 4, 5]])
```

`a` 是要被重塑的数组。

`shape` 是你想要的新形状。你可以指定一个整数或一个整数元组。如果你指定一个整数，结果将是一个该长度的数组。形状应该与原始形状兼容。

`order:` `C` 表示使用 C-like 索引顺序读/写元素，`F` 表示使用 Fortran-like 索引顺序读/写元素，`A` 表示如果 a 在内存中是 Fortran 连续的，则以 Fortran-like 索引顺序读/写元素，否则以 C-like 顺序。（这是一个可选参数，不需要指定。）

如果你想了解更多关于 C 和 Fortran 顺序的信息，你可以在[这里阅读更多关于 NumPy 数组内部组织的信息](../dev/internals.html#numpy-internals)。本质上，C 和 Fortran 顺序与索引如何对应于数组在内存中的存储顺序有关。在 Fortran 中，当遍历存储在内存中的二维数组元素时，**第一个**索引是变化最快的索引。当第一个索引变化时，它移动到下一行，矩阵是逐列存储的。这就是为什么 Fortran 被认为是一种**列主序语言**。另一方面，在 C 中，**最后一个**索引变化最快。矩阵是逐行存储的，使其成为一种**行主序语言**。你选择 C 还是 Fortran 取决于保留索引约定是否比不重新排序数据更重要。

[在这里了解更多关于形状操作的信息](quickstart.html#quickstart-shape-manipulation)。

## 如何将一维数组转换为二维数组（如何为数组添加新轴）

*本节涵盖 `np.newaxis`、`np.expand_dims`*

---

你可以使用 `np.newaxis` 和 `np.expand_dims` 来增加现有数组的维度。

使用 `np.newaxis` 一次，会使你的数组维度增加一维。这意味着一个**一维**数组将变成一个**二维**数组，一个**二维**数组将变成一个**三维**数组，以此类推。

例如，如果你从这个数组开始：

```python
>>> a = np.array([1, 2, 3, 4, 5, 6])
>>> a.shape
(6,)
```

你可以使用 `np.newaxis` 来添加一个新轴：

```python
>>> a2 = a[np.newaxis, :]
>>> a2.shape
(1, 6)
```

你可以使用 `np.newaxis` 将一维数组显式转换为行向量或列向量。例如，你可以通过在第一个维度上插入一个轴来将一维数组转换为行向量：

```python
>>> row_vector = a[np.newaxis, :]
>>> row_vector.shape
(1, 6)
```

或者，对于列向量，你可以在第二个维度上插入一个轴：

```python
>>> col_vector = a[:, np.newaxis]
>>> col_vector.shape
(6, 1)
```

你也可以通过 `np.expand_dims` 在指定位置插入一个新轴来扩展数组。

例如，如果你从这个数组开始：

```python
>>> a = np.array([1, 2, 3, 4, 5, 6])
>>> a.shape
(6,)
```

你可以使用 `np.expand_dims` 在索引位置 1 添加一个轴：

```python
>>> b = np.expand_dims(a, axis=1)
>>> b.shape
(6, 1)
```

你可以使用以下代码在索引位置 0 添加一个轴：

```python
>>> c = np.expand_dims(a, axis=0)
>>> c.shape
(1, 6)
```

在[这里找到更多关于 `newaxis` 的信息](../reference/routines.indexing.html#arrays-indexing)，在[`expand_dims`](../reference/generated/numpy.expand_dims.html#numpy.expand_dims) 处找到关于 `expand_dims` 的信息。

## 索引和切片

你可以像对 Python 列表进行切片一样对 NumPy 数组进行索引和切片。

```python
>>> data = np.array([1, 2, 3])

>>> data[1]
2
>>> data[0:2]
array([1, 2])
>>> data[1:]
array([2, 3])
>>> data[-2:]
array([2, 3])
```

你可以这样来可视化它：

![../_images/np_indexing.png](../_images/np_indexing.png)

你可能想要提取数组的一部分或特定的数组元素以用于进一步的分析或其他操作。要做到这一点，你需要对数组进行子集划分、切片和/或索引。

如果你想从数组中选择满足特定条件的值，使用 NumPy 会非常直接。

例如，如果你从这个数组开始：

```python
>>> a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

你可以轻松地打印出数组中小于 5 的所有值。

```python
>>> print(a[a < 5])
[1 2 3 4]
```

你也可以选择，例如，大于或等于 5 的数字，并使用该条件来索引一个数组。

```python
>>> five_up = (a >= 5)
>>> print(a[five_up])
[ 5  6  7  8  9 10 11 12]
```

你可以选择能被 2 整除的元素：

```python
>>> divisible_by_2 = a[a%2==0]
>>> print(divisible_by_2)
[ 2  4  6  8 10 12]
```

或者你可以使用 `&` 和 `|` 运算符选择满足两个条件的元素：

```python
>>> c = a[(a > 2) & (a < 11)]
>>> print(c)
[ 3  4  5  6  7  8  9 10]
```

你也可以利用逻辑运算符 **&** 和 **|** 来返回布尔值，这些值指明数组中的值是否满足某个特定条件。这对于包含名称或其他分类值的数组非常有用。

```python
>>> five_up = (a > 5) | (a == 5)
>>> print(five_up)
[[False False False False]
 [ True  True  True  True]
 [ True  True  True  True]]
```

你还可以使用 `np.nonzero()` 从数组中选择元素或索引。

从这个数组开始：

```python
>>> a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

你可以使用 `np.nonzero()` 来打印出，例如，小于 5 的元素的索引：

```python
>>> b = np.nonzero(a < 5)
>>> print(b)
(array([0, 0, 0, 0]), array([0, 1, 2, 3]))
```

在这个例子中，返回了一个数组元组：每个维度对应一个数组。第一个数组表示找到这些值的行索引，第二个数组表示找到这些值的列索引。

如果你想生成一个元素存在的坐标列表，你可以 `zip` 这些数组，遍历坐标列表并打印它们。例如：

```python
>>> list_of_coordinates= list(zip(b[0], b[1]))

>>> for coord in list_of_coordinates:
...     print(coord)
(0, 0)
(0, 1)
(0, 2)
(0, 3)
```

你也可以使用 `np.nonzero()` 打印出数组中小于 5 的元素：

```python
>>> print(a[b])
[1 2 3 4]
```

如果你要查找的元素在数组中不存在，那么返回的索引数组将是空的。例如：

```python
>>> not_there = np.nonzero(a == 42)
>>> print(not_there)
(array([], dtype=int64), array([], dtype=int64))
```

在[这里](quickstart.html#quickstart-indexing-slicing-and-iterating)和[这里](basics.indexing.html#basics-indexing)了解更多关于索引和切片的信息。

在[`nonzero`](../reference/generated/numpy.nonzero.html#numpy.nonzero)阅读更多关于使用 `nonzero` 函数的信息。

## 如何从现有数据创建数组

*本节涵盖 `切片和索引`、`np.vstack()`、`np.hstack()`、`np.hsplit()`、`.view()`、`copy()`*

---

你可以轻松地从现有数组的一部分创建一个新数组。

假设你有这个数组：

```python
>>> a = np.array([1,  2,  3,  4,  5,  6,  7,  8,  9, 10])
```

你可以随时通过指定你想要切片数组的位置，从数组的一部分创建一个新数组。

```python
>>> arr1 = a[3:8]
>>> arr1
array([4, 5, 6, 7, 8])
```

在这里，你获取了数组从索引位置 3 到索引位置 8（但不包括位置 8 本身）的一部分。

*提醒：数组索引从 0 开始。这意味着数组的第一个元素在索引 0，第二个元素在索引 1，依此类推。*

你也可以将两个现有数组垂直和水平地堆叠起来。假设你有两个数组，`a1` 和 `a2`：

```python
>>> a1 = np.array([[1, 1],
...                [2, 2]])

>>> a2 = np.array([[3, 3],
...                [4, 4]])
```

你可以用 `vstack` 垂直堆叠它们：

```python
>>> np.vstack((a1, a2))
array([[1, 1],
       [2, 2],
       [3, 3],
       [4, 4]])
```

或者用 `hstack` 水平堆叠它们：

```python
>>> np.hstack((a1, a2))
array([[1, 1, 3, 3],
       [2, 2, 4, 4]])
```

你可以使用 `hsplit` 将一个数组分割成几个较小的数组。你可以指定要返回的形状相等的数组数量，或者指定分割应该发生在哪几列*之后*。

假设你有这个数组：

```python
>>> x = np.arange(1, 25).reshape(2, 12)
>>> x
array([[ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12],
       [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]])
```

如果你想把这个数组分成三个形状相等的数组，你可以运行：

```python
>>> np.hsplit(x, 3)
[array([[ 1,  2,  3,  4],
       [13, 14, 15, 16]]), array([[ 5,  6,  7,  8],
       [17, 18, 19, 20]]), array([[ 9, 10, 11, 12],
       [21, 22, 23, 24]])]
```

如果你想在第三和第四列之后分割你的数组，你可以运行：

```python
>>> np.hsplit(x, (3, 4))
[array([[ 1,  2,  3],
       [13, 14, 15]]), array([[ 4],
       [16]]), array([[ 5,  6,  7,  8,  9, 10, 11, 12],
       [17, 18, 19, 20, 21, 22, 23, 24]])]
```

在[这里了解更多关于堆叠和分割数组的信息](quickstart.html#quickstart-stacking-arrays)。

你可以使用 `view` 方法创建一个新的数组对象，它查看的是与原始数组相同的数据（一个*浅拷贝*）。

视图是 NumPy 的一个重要概念！NumPy 函数以及像索引和切片这样的操作，会尽可能地返回视图。这节省了内存并且速度更快（因为不需要制作数据的副本）。然而，意识到这一点很重要——修改视图中的数据也会修改原始数组！

假设你创建了这个数组：

```python
>>> a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

现在我们通过切片 `a` 创建一个数组 `b1`，并修改 `b1` 的第一个元素。这也会修改 `a` 中对应的元素！

```python
>>> b1 = a[0, :]
>>> b1
array([1, 2, 3, 4])
>>> b1[0] = 99
>>> b1
array([99,  2,  3,  4])
>>> a
array([[99,  2,  3,  4],
       [ 5,  6,  7,  8],
       [ 9, 10, 11, 12]])
```

使用 `copy` 方法将对数组及其数据进行完整的复制（一个*深拷贝*）。要在你的数组上使用它，你可以运行：

```python
>>> b2 = a.copy()
```

在[这里了解更多关于副本和视图的信息](quickstart.html#quickstart-copies-and-views)。

## 基本数组运算

*本节涵盖加法、减法、乘法、除法等*

---

一旦你创建了数组，你就可以开始使用它们了。比如说，你创建了两个数组，一个叫做“data”，一个叫做“ones”。

![../_images/np_array_dataones.png](../_images/np_array_dataones.png)

你可以用加号将数组相加。

```python
>>> data = np.array([1, 2])
>>> ones = np.ones(2, dtype=int)
>>> data + ones
array([2, 3])
```

![../_images/np_data_plus_ones.png](../_images/np_data_plus_ones.png)

当然，你做的可以不仅仅是加法！

```python
>>> data - ones
array([0, 1])
>>> data * data
array([1, 4])
>>> data / data
array([1., 1.])
```

![../_images/np_sub_mult_divide.png](../_images/np_sub_mult_divide.png)

用 NumPy 进行基本运算很简单。如果你想求一个数组中元素的和，你会使用 `sum()`。这适用于一维数组、二维数组以及更高维度的数组。

```python
>>> a = np.array([1, 2, 3, 4])

>>> a.sum()
10
```

要在一个二维数组中对行或列求和，你需要指定轴。

如果你从这个数组开始：

```python
>>> b = np.array([[1, 1], [2, 2]])
```

你可以对行轴求和：

```python
>>> b.sum(axis=0)
array([3, 3])
```

你可以对列轴求和：

```python
>>> b.sum(axis=1)
array([2, 4])
```

在[这里了解更多关于基本运算的信息](quickstart.html#quickstart-basic-operations)。

## 广播 (Broadcasting)

有时，你可能想在数组和单个数字之间（也称为*向量和标量之间的运算*）或在两个不同大小的数组之间进行运算。例如，你的数组（我们称之为“data”）可能包含以英里为单位的距离信息，但你想将信息转换为公里。你可以通过以下操作完成：

```python
>>> data = np.array([1.0, 2.0])
>>> data * 1.6
array([1.6, 3.2])
```

![../_images/np_multiply_broadcasting.png](../_images/np_multiply_broadcasting.png)

NumPy 明白这个乘法操作应该应用于每个元素。这个概念被称为**广播 (broadcasting)**。广播是一种机制，它允许 NumPy 对不同形状的数组执行操作。数组的维度必须是兼容的，例如，当两个数组的维度相等，或者其中一个数组的维度为 1 时。如果维度不兼容，你将会得到一个 `ValueError`。

[在这里了解更多关于广播的信息](basics.broadcasting.html#basics-broadcasting)。

## 更多有用的数组操作

*本节涵盖最大值、最小值、求和、平均值、乘积、标准差等*

---

NumPy 还能执行聚合函数。除了 `min`、`max` 和 `sum` 之外，你还可以轻松地运行 `mean` 来获得平均值，`prod` 来获得所有元素相乘的结果，`std` 来获得标准差等等。

```python
>>> data.max()
2.0
>>> data.min()
1.0
>>> data.sum()
3.0
```

![../_images/np_aggregation.png](../_images/np_aggregation.png)

让我们从这个名为“a”的数组开始：

```python
>>> a = np.array([[0.45053314, 0.17296777, 0.34376245, 0.5510652 ],
...               [0.54627315, 0.05093587, 0.40067661, 0.55645993],
...               [0.12697628, 0.82485143, 0.26590556, 0.56917101]])
```

通常，我们希望沿着行或列进行聚合。默认情况下，每个 NumPy 聚合函数都会返回整个数组的聚合结果。要找到数组中元素的总和或最小值，请运行：

```python
>>> a.sum()
4.8595784
```

或者：

```python
>>> a.min()
0.05093587
```

你可以指定要在哪个轴上计算聚合函数。例如，你可以通过指定 `axis=0` 来找到每一列中的最小值。

```python
>>> a.min(axis=0)
array([0.12697628, 0.05093587, 0.26590556, 0.5510652 ])
```

上面列出的四个值对应于数组中的列数。对于一个四列的数组，你将得到四个值作为结果。

[在这里阅读更多关于数组方法的信息](../reference/arrays.ndarray.html#array-ndarray-methods)。

## 创建矩阵

你可以传递 Python 的列表的列表来创建一个二维数组（或“矩阵”），以便在 NumPy 中表示它们。

```python
>>> data = np.array([[1, 2], [3, 4], [5, 6]])
>>> data
array([[1, 2],
       [3, 4],
       [5, 6]])
```

![../_images/np_create_matrix.png](../_images/np_create_matrix.png)

当你操作矩阵时，索引和切片操作非常有用：

```python
>>> data[0, 1]
2
>>> data[1:3]
array([[3, 4],
       [5, 6]])
>>> data[0:2, 0]
array([1, 3])
```

![../_images/np_matrix_indexing.png](../_images/np_matrix_indexing.png)

你可以像聚合向量一样聚合矩阵：

```python
>>> data.max()
6
>>> data.min()
1
>>> data.sum()
21
```

![../_images/np_matrix_aggregation.png](../_images/np_matrix_aggregation.png)

你可以聚合矩阵中的所有值，也可以使用 `axis` 参数跨列或行进行聚合。为了说明这一点，让我们看一个稍作修改的数据集：

```python
>>> data = np.array([[1, 2], [5, 3], [4, 6]])
>>> data
array([[1, 2],
       [5, 3],
       [4, 6]])
>>> data.max(axis=0)
array([5, 6])
>>> data.max(axis=1)
array([2, 5, 6])
```

![../_images/np_matrix_aggregation_row.png](../_images/np_matrix_aggregation_row.png)

创建矩阵后，如果两个矩阵大小相同，你可以使用算术运算符对它们进行加法和乘法运算。

```python
>>> data = np.array([[1, 2], [3, 4]])
>>> ones = np.array([[1, 1], [1, 1]])
>>> data + ones
array([[2, 3],
       [4, 5]])
```

![../_images/np_matrix_arithmetic.png](../_images/np_matrix_arithmetic.png)

你可以在不同大小的矩阵上执行这些算术运算，但前提是其中一个矩阵只有一列或一行。在这种情况下，NumPy 将对其操作使用广播规则。

```python
>>> data = np.array([[1, 2], [3, 4], [5, 6]])
>>> ones_row = np.array([[1, 1]])
>>> data + ones_row
array([[2, 3],
       [4, 5],
       [6, 7]])
```

![../_images/np_matrix_broadcasting.png](../_images/np_matrix_broadcasting.png)

请注意，当 NumPy 打印 N 维数组时，最后一个轴的循环速度最快，而第一个轴的速度最慢。例如：

```python
>>> np.ones((4, 3, 2))
array([[[1., 1.],
        [1., 1.],
        [1., 1.]],

       [[1., 1.],
        [1., 1.],
        [1., 1.]],

       [[1., 1.],
        [1., 1.],
        [1., 1.]],

       [[1., 1.],
        [1., 1.],
        [1., 1.]]])
```

我们经常希望 NumPy 初始化数组的值。为此，NumPy 提供了像 `ones()` 和 `zeros()` 这样的函数，以及用于生成随机数的 `random.Generator` 类。你所需要做的就是传入你希望它生成的元素数量：

```python
>>> np.ones(3)
array([1., 1., 1.])
>>> np.zeros(3)
array([0., 0., 0.])
>>> rng = np.random.default_rng()  # 生成随机数最简单的方法
>>> rng.random(3)
array([0.63696169, 0.26978671, 0.04097352]) # 结果可能不同
```

![../_images/np_ones_zeros_random.png](../_images/np_ones_zeros_random.png)

如果你给它们一个描述矩阵维度的元组，你也可以使用 `ones()`、`zeros()` 和 `random()` 来创建一个二维数组：

```python
>>> np.ones((3, 2))
array([[1., 1.],
       [1., 1.],
       [1., 1.]])
>>> np.zeros((3, 2))
array([[0., 0.],
       [0., 0.],
       [0., 0.]])
>>> rng.random((3, 2))
array([[0.01652764, 0.81327024],
       [0.91275558, 0.60663578],
       [0.72949656, 0.54362499]])  # 结果可能不同
```

![../_images/np_ones_zeros_matrix.png](../_images/np_ones_zeros_matrix.png)

在[数组创建例程](../reference/routines.array-creation.html#routines-array-creation)中阅读更多关于创建填充了 `0`、`1`、其他值或未初始化值的数组的信息。

## 生成随机数

随机数的生成是许多数值和机器学习算法配置与评估的重要组成部分。无论你是需要在人工神经网络中随机初始化权重，将数据随机分成集合，还是随机打乱你的数据集，能够生成随机数（实际上是可重复的伪随机数）都是至关重要的。

使用 `Generator.integers`，你可以生成从低（记住在 NumPy 中这是包含的）到高（不包含的）的随机整数。你可以设置 `endpoint=True` 来使高的数字也包含在内。

你可以用以下方式生成一个 2x4 的，介于 0 和 4 之间的随机整数数组：

```python
>>> rng.integers(5, size=(2, 4))
array([[2, 1, 1, 0],
       [0, 0, 0, 4]])  # 结果可能不同
```

[在这里阅读更多关于随机数生成的信息](../reference/random/index.html#numpyrandom)。

## 如何获取唯一项和计数

*本节涵盖 `np.unique()`*

---

你可以使用 `np.unique` 轻松找到数组中的唯一元素。

例如，如果你从这个数组开始：

```python
>>> a = np.array([11, 11, 12, 13, 14, 15, 16, 17, 12, 13, 11, 14, 18, 19, 20])
```

你可以使用 `np.unique` 来打印数组中的唯一值：

```python
>>> unique_values = np.unique(a)
>>> print(unique_values)
[11 12 13 14 15 16 17 18 19 20]
```

要在 NumPy 数组中获取唯一值的索引（数组中唯一值首次出现位置的索引数组），只需在 `np.unique()` 中传递 `return_index` 参数以及你的数组。

```python
>>> unique_values, indices_list = np.unique(a, return_index=True)
>>> print(indices_list)
[ 0  2  3  4  5  6  7 12 13 14]
```

你可以在 `np.unique()` 中传递 `return_counts` 参数以及你的数组，来获取 NumPy 数组中唯一值的频率计数。

```python
>>> unique_values, occurrence_count = np.unique(a, return_counts=True)
>>> print(occurrence_count)
[3 2 2 2 1 1 1 1 1 1]
```

这也适用于二维数组！ 如果你从这个数组开始：

```python
>>> a_2d = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [1, 2, 3, 4]])
```

你可以用以下方式找到唯一值：

```python
>>> unique_values = np.unique(a_2d)
>>> print(unique_values)
[ 1  2  3  4  5  6  7  8  9 10 11 12]
```

如果没有传递 `axis` 参数，你的二维数组将被展平。

如果你想获取唯一的行或列，请确保传递 `axis` 参数。要找到唯一的行，指定 `axis=0`；对于列，指定 `axis=1`。

```python
>>> unique_rows = np.unique(a_2d, axis=0)
>>> print(unique_rows)
[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
```

要获取唯一的行、索引位置和出现次数，你可以使用：

```python
>>> unique_rows, indices, occurrence_count = np.unique(
...      a_2d, axis=0, return_counts=True, return_index=True)
>>> print(unique_rows)
[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
>>> print(indices)
[0 1 2]
>>> print(occurrence_count)
[2 1 1]
```

要了解更多关于查找数组中唯一元素的信息，请参阅 [`unique`](../reference/generated/numpy.unique.html#numpy.unique)。

## 转置和重塑矩阵

*本节涵盖 `arr.reshape()`、`arr.transpose()`、`arr.T`*

---

转置矩阵是常见的需求。NumPy 数组有一个属性 `T`，允许你转置一个矩阵。

![../_images/np_transposing_reshaping.png](../_images/np_transposing_reshaping.png)

你可能还需要切换矩阵的维度。例如，当你的模型期望某种输入形状，而这个形状与你的数据集不同时，就可能发生这种情况。这时 `reshape` 方法就很有用。你只需传入你想要的矩阵的新维度。

```python
>>> data.reshape(2, 3)
array([[1, 2, 3],
       [4, 5, 6]])
>>> data.reshape(3, 2)
array([[1, 2],
       [3, 4],
       [5, 6]])
```

![../_images/np_reshape.png](../_images/np_reshape.png)

你还可以使用 `.transpose()` 来根据你指定的值反转或改变数组的轴。

如果你从这个数组开始：

```python
>>> arr = np.arange(6).reshape((2, 3))
>>> arr
array([[0, 1, 2],
       [3, 4, 5]])
```

你可以用 `arr.transpose()` 来转置你的数组。

```python
>>> arr.transpose()
array([[0, 3],
       [1, 4],
       [2, 5]])
```

你也可以使用 `arr.T`：

```python
>>> arr.T
array([[0, 3],
       [1, 4],
       [2, 5]])```

要了解更多关于转置和重塑数组的信息，请参阅 [`transpose`](../reference/generated/numpy.transpose.html#numpy.transpose) 和 [`reshape`](../reference/generated/numpy.reshape.html#numpy.reshape)。

## 如何反转一个数组

*本节涵盖 `np.flip()`*

---

NumPy 的 `np.flip()` 函数允许你沿着一个轴翻转或反转数组的内容。使用 `np.flip()` 时，指定你想要反转的数组和轴。如果你不指定轴，NumPy 将沿着输入数组的所有轴反转内容。

**反转一维数组**

如果你从这样的一维数组开始：

```python
>>> arr = np.array([1, 2, 3, 4, 5, 6, 7, 8])
```

你可以用以下方式反转它：

```python
>>> reversed_arr = np.flip(arr)
```

如果你想打印你反转后的数组，可以运行：

```python
>>> print('Reversed Array: ', reversed_arr)
Reversed Array:  [8 7 6 5 4 3 2 1]
```

**反转二维数组**

二维数组的工作方式大致相同。

如果你从这个数组开始：

```python
>>> arr_2d = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

你可以用以下方式反转所有行和所有列的内容：

```python
>>> reversed_arr = np.flip(arr_2d)
>>> print(reversed_arr)
[[12 11 10  9]
 [ 8  7  6  5]
 [ 4  3  2  1]]
```

你可以轻松地只反转*行*：

```python
>>> reversed_arr_rows = np.flip(arr_2d, axis=0)
>>> print(reversed_arr_rows)
[[ 9 10 11 12]
 [ 5  6  7  8]
 [ 1  2  3  4]]
```

或者只反转*列*：

```python
>>> reversed_arr_columns = np.flip(arr_2d, axis=1)
>>> print(reversed_arr_columns)
[[ 4  3  2  1]
 [ 8  7  6  5]
 [12 11 10  9]]
```

你也可以只反转一列或一行的内容。例如，你可以反转索引位置为 1 的行（第二行）的内容：

```python
>>> arr_2d[1] = np.flip(arr_2d[1])
>>> print(arr_2d)
[[ 1  2  3  4]
 [ 8  7  6  5]
 [ 9 10 11 12]]
```

你也可以反转索引位置为 1 的列（第二列）：

```python
>>> arr_2d[:,1] = np.flip(arr_2d[:,1])
>>> print(arr_2d)
[[ 1 10  3  4]
 [ 8  7  6  5]
 [ 9  2 11 12]]
```

在[`flip`](../reference/generated/numpy.flip.html#numpy.flip)阅读更多关于反转数组的信息。

## 重塑和展平多维数组

*本节涵盖 `.flatten()`、`ravel()`*

---

展平数组有两种流行的方法：`.flatten()` 和 `.ravel()`。两者之间的主要区别在于，使用 `ravel()` 创建的新数组实际上是父数组的引用（即一个“视图”）。这意味着对新数组的任何更改也会影响父数组。由于 `ravel` 不创建副本，因此它在内存效率方面更高。

如果你从这个数组开始：

```python
>>> x = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

你可以使用 `flatten` 将你的数组展平成一维数组。

```python
>>> x.flatten()
array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12])
```

当你使用 `flatten` 时，对新数组的更改不会改变父数组。

例如：

```python
>>> a1 = x.flatten()
>>> a1[0] = 99
>>> print(x)  # 原始数组
[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
>>> print(a1)  # 新数组
[99  2  3  4  5  6  7  8  9 10 11 12]
```

但是当你使用 `ravel` 时，你对新数组所做的更改会影响父数组。

例如：

```python
>>> a2 = x.ravel()
>>> a2[0] = 98
>>> print(x)  # 原始数组
[[98  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
>>> print(a2)  # 新数组
[98  2  3  4  5  6  7  8  9 10 11 12]
```

在[`ndarray.flatten`](../reference/generated/numpy.ndarray.flatten.html#numpy.ndarray.flatten)和[`ravel`](../reference/generated/numpy.ravel.html#numpy.ravel)阅读更多关于`flatten`和`ravel`的信息。

## 如何访问文档字符串以获取更多信息

*本节涵盖 `help()`、`?`、`??`*

---

在数据科学生态系统中，Python 和 NumPy 的构建都考虑到了用户。最好的例子之一就是对文档的内置访问。每个对象都包含对一个字符串的引用，这个字符串被称为**文档字符串 (docstring)**。在大多数情况下，这个文档字符串包含了对该对象的快速简洁的摘要以及如何使用它。Python 有一个内置的 `help()` 函数，可以帮助你访问这些信息。这意味着几乎任何时候你需要更多信息，你都可以使用 `help()` 快速找到你需要的信息。

例如：

```python
>>> help(max)
Help on built-in function max in module builtins:

max(...)
    max(iterable, *[, default=obj, key=func]) -> value
    max(arg1, arg2, *args, *[, key=func]) -> value

    With a single iterable argument, return its biggest item. The
    default keyword-only argument specifies an object to return if
    the provided iterable is empty.
    With two or more arguments, return the largest argument.
```

因为获取额外信息非常有用，IPython 使用 `?` 字符作为访问此文档以及其他相关信息的快捷方式。IPython 是一个用于多种语言交互式计算的命令 shell。你可以在[这里找到更多关于 IPython 的信息](https://ipython.org/)。

例如：

```ipython
In [0]: max?
max(iterable, *[, default=obj, key=func]) -> value
max(arg1, arg2, *args, *[, key=func]) -> value

With a single iterable argument, return its biggest item. The
default keyword-only argument specifies an object to return if
the provided iterable is empty.
With two or more arguments, return the largest argument.
Type:      builtin_function_or_method
```

你甚至可以对对象方法和对象本身使用这种表示法。

假设你创建了这个数组：

```python
>>> a = np.array([1, 2, 3, 4, 5, 6])
```

然后你可以获得很多有用的信息（首先是关于 `a` 本身的详细信息，然后是 `a` 作为实例的 `ndarray` 的文档字符串）：

```ipython
In [1]: a?
Type:            ndarray
String form:     [1 2 3 4 5 6]
Length:          6
File:            ~/anaconda3/lib/python3.9/site-packages/numpy/__init__.py
Docstring:       <no docstring>
Class docstring:
ndarray(shape, dtype=float, buffer=None, offset=0,
        strides=None, order=None)

An array object represents a multidimensional, homogeneous array
of fixed-size items.  An associated data-type object describes the
format of each element in the array (its byte-order, how many bytes it
occupies in memory, whether it is an integer, a floating point number,
or something else, etc.)

...
```

这也适用于**你**创建的函数和其他对象。只需记住用字符串字面量（在你的文档周围使用 `""" """` 或 `''' '''`）为你的函数包含一个文档字符串。

例如，如果你创建这个函数：

```python
>>> def double(a):
...   '''Return a * 2'''
...   return a * 2
```

你可以获取关于该函数的信息：

```ipython
In [2]: double?
Signature: double(a)
Docstring: Return a * 2
File:      ~/Desktop/<ipython-input-23-b5adf20be596>
Type:      function
```

你可以通过阅读你感兴趣的对象的源代码来达到更高层次的信息。使用双问号 (`??`) 可以让你访问源代码。

例如：

```ipython
In [3]: double??
Signature: double(a)
Source:
def double(a):
    '''Return a * 2'''
    return a * 2
File:      ~/Desktop/<ipython-input-23-b5adf20be596>
Type:      function
```

如果所讨论的对象是用 Python 以外的语言编译的，使用 `??` 将返回与 `?` 相同的信息。你会发现很多内置对象和类型都是这种情况，例如：

```ipython
In [4]: len?
Signature: len(obj, /)
Docstring: Return the number of items in a container.
Type:      builtin_function_or_method
```

和：

```ipython
In [5]: len??
Signature: len(obj, /)
Docstring: Return the number of items in a container.
Type:      builtin_function_or_method
```

有相同的输出，因为它们是用 Python 以外的编程语言编译的。

## 使用数学公式

在处理数组时，实现数学公式的简便性是 NumPy 在科学 Python 社区中被广泛使用的原因之一。

例如，这是均方误差公式（在处理回归问题的监督式机器学习模型中使用的核心公式）：

![../_images/np_MSE_formula.png](../_images/np_MSE_formula.png)

在 NumPy 中实现这个公式简单而直接：

![../_images/np_MSE_implementation.png](../_images/np_MSE_implementation.png)

使其如此有效的原因是 `predictions` 和 `labels` 可以包含一个或一千个值。它们只需要大小相同。

你可以这样来可视化它：

![../_images/np_mse_viz1.png](../_images/np_mse_viz1.png)

在这个例子中，`predictions` 和 `labels` 向量都包含三个值，意味着 `n` 的值为三。在我们执行减法后，向量中的值被平方。然后 NumPy 对这些值求和，你的结果就是该预测的误差值，也是对模型质量的评分。

![../_images/np_mse_viz2.png](../_images/np_mse_viz2.png)![../_images/np_MSE_explanation2.png](../_images/np_MSE_explanation2.png)

## 如何保存和加载 NumPy 对象

*本节涵盖 `np.save`、`np.savez`、`np.savetxt`、`np.load`、`np.loadtxt`*

---

在某些时候，你会想要将你的数组保存到磁盘，并在之后加载它们，而无需重新运行代码。幸运的是，有几种方法可以用 NumPy 保存和加载对象。`ndarray` 对象可以通过 `loadtxt` 和 `savetxt` 函数保存到磁盘文件和从磁盘文件加载，这两个函数处理普通文本文件；`load` 和 `save` 函数处理带有 **.npy** 文件扩展名的 NumPy 二进制文件；以及一个 `savez` 函数，处理带有 **.npz** 文件扩展名的 NumPy 文件。

**.npy** 和 **.npz** 文件存储数据、形状、dtype 和其他重建 ndarray 所需的信息，这种方式允许数组被正确地检索，即使文件在具有不同架构的另一台机器上。

如果你想存储单个 `ndarray` 对象，使用 `np.save` 将其存储为 .npy 文件。如果你想在单个文件中存储多个 `ndarray` 对象，使用 `np.savez` 将其保存为 .npz 文件。你还可以使用 [`savez_compressed`](../reference/generated/numpy.savez_compressed.html#numpy.savez_compressed) 将多个数组以压缩的 npz 格式保存到单个文件中。

使用 `np.save()` 保存和加载数组很容易。只需确保指定要保存的数组和文件名。例如，如果你创建这个数组：

```python
>>> a = np.array([1, 2, 3, 4, 5, 6])
```

你可以用以下方式将其保存为“filename.npy”：

```python
>>> np.save('filename', a)
```

你可以使用 `np.load()` 来重建你的数组。

```python
>>> b = np.load('filename.npy')
```

如果你想检查你的数组，可以运行：

```python
>>> print(b)
[1 2 3 4 5 6]
```

你可以使用 `np.savetxt` 将 NumPy 数组保存为纯文本文件，如 **.csv** 或 **.txt** 文件。

例如，如果你创建这个数组：

```python
>>> csv_arr = np.array([1, 2, 3, 4, 5, 6, 7, 8])```

你可以像这样轻松地将其保存为名为“new_file.csv”的 .csv 文件：

```python
>>> np.savetxt('new_file.csv', csv_arr)
```

你可以使用 `loadtxt()` 快速轻松地加载你保存的文本文件：

```python
>>> np.loadtxt('new_file.csv')
array([1., 2., 3., 4., 5., 6., 7., 8.])
```

`savetxt()` 和 `loadtxt()` 函数接受其他可选参数，如 header、footer 和 delimiter。虽然文本文件可能更容易共享，但 .npy 和 .npz 文件更小，读取速度更快。如果你需要对文本文件进行更复杂的处理（例如，如果你需要处理包含缺失值的行），你会想使用 [`genfromtxt`](../reference/generated/numpy.genfromtxt.html#numpy.genfromtxt) 函数。

使用 [`savetxt`](../reference/generated/numpy.savetxt.html#numpy.savetxt)，你可以指定页眉、页脚、注释等。

在[这里了解更多关于输入和输出例程的信息](../reference/routines.io.html#routines-io)。

## 导入和导出 CSV

读取包含现有信息的 CSV 文件很简单。最好和最简单的方法是使用 [Pandas](https://pandas.pydata.org)。

```python
>>> import pandas as pd

>>> # 如果你所有的列都是相同类型：
>>> x = pd.read_csv('music.csv', header=0).values
>>> print(x)
[['Billie Holiday' 'Jazz' 1300000 27000000]
 ['Jimmie Hendrix' 'Rock' 2700000 70000000]
 ['Miles Davis' 'Jazz' 1500000 48000000]
 ['SIA' 'Pop' 2000000 74000000]]

>>> # 你也可以只选择你需要的列：
>>> x = pd.read_csv('music.csv', usecols=['Artist', 'Plays']).values
>>> print(x)
[['Billie Holiday' 27000000]
 ['Jimmie Hendrix' 70000000]
 ['Miles Davis' 48000000]
 ['SIA' 74000000]]
```

![../_images/np_pandas.png](../_images/np_pandas.png)

使用 Pandas 来导出你的数组也很简单。如果你是 NumPy 新手，你可能想从你的数组中的值创建一个 Pandas DataFrame，然后用 Pandas 将该 DataFrame 写入 CSV 文件。

如果你创建了这个数组“a”

```python
>>> a = np.array([[-2.58289208,  0.43014843, -1.24082018,  1.59572603],
...               [ 0.99027828,  1.17150989,  0.94125714, -0.14692469],
...               [ 0.76989341,  0.81299683, -0.95068423,  0.11769564],
...               [ 0.20484034,  0.34784527,  1.96979195,  0.51992837]])
```

你可以创建一个 Pandas DataFrame

```python
>>> df = pd.DataFrame(a)
>>> print(df)
          0         1         2         3
0 -2.582892  0.430148 -1.240820  1.595726
1  0.990278  1.171510  0.941257 -0.146925
2  0.769893  0.812997 -0.950684  0.117696
3  0.204840  0.347845  1.969792  0.519928
```

你可以轻松地保存你的 DataFrame：

```python
>>> df.to_csv('pd.csv')
```

并用以下方式读取你的 CSV：

```python
>>> data = pd.read_csv('pd.csv')
```

![../_images/np_readcsv.png](../_images/np_readcsv.png)

你也可以用 NumPy 的 `savetxt` 方法保存你的数组。

```python
>>> np.savetxt('np.csv', a, fmt='%.2f', delimiter=',', header='1,  2,  3,  4')
```

如果你正在使用命令行，你可以随时用这样的命令读取你保存的 CSV：

```bash
$ cat np.csv
#  1,  2,  3,  4
-2.58,0.43,-1.24,1.60
0.99,1.17,0.94,-0.15
0.77,0.81,-0.95,0.12
0.20,0.35,1.97,0.52
```

或者你可以随时用文本编辑器打开这个文件！

如果你有兴趣学习更多关于 Pandas 的知识，请查看[官方 Pandas 文档](https://pandas.pydata.org/index.html)。在[官方 Pandas 安装信息](https://pandas.pydata.org/pandas-docs/stable/install.html)中了解如何安装 Pandas。

## 使用 Matplotlib 绘制数组

如果你需要为你的值生成一个图表，使用 [Matplotlib](https://matplotlib.org/) 会非常简单。

例如，你可能有一个像这样的数组：

```python
>>> a = np.array([2, 1, 5, 7, 4, 6, 8, 14, 10, 9, 18, 20, 22])
```

如果你已经安装了 Matplotlib，你可以这样导入它：

```python
>>> import matplotlib.pyplot as plt

# 如果你正在使用 Jupyter Notebook，你可能还想运行以下
# 代码行以在 notebook 中显示你的图表：

%matplotlib inline
```

要绘制你的值，你所需要做的就是运行：

```python
>>> plt.plot(a)

# 如果你是从命令行运行，你可能需要这样做：
# >>> plt.show()
```

<figure class="align-center">
<img alt="../_images/matplotlib1.png" class="plot-directive" src="../_images/matplotlib1.png" />
</figure>

例如，你可以像这样绘制一个一维数组：

```python
>>> x = np.linspace(0, 5, 20)
>>> y = np.linspace(0, 10, 20)
>>> plt.plot(x, y, 'purple') # 线
>>> plt.plot(x, y, 'o')      # 点
```

<figure class="align-center">
<img alt="../_images/matplotlib2.png" class="plot-directive" src="../_images/matplotlib2.png" />
</figure>

使用 Matplotlib，你可以获得大量的可视化选项。

```python
>>> fig = plt.figure()
>>> ax = fig.add_subplot(projection='3d')
>>> X = np.arange(-5, 5, 0.15)
>>> Y = np.arange(-5, 5, 0.15)
>>> X, Y = np.meshgrid(X, Y)
>>> R = np.sqrt(X**2 + Y**2)
>>> Z = np.sin(R)

>>> ax.plot_surface(X, Y, Z, rstride=1, cstride=1, cmap='viridis')
```

<figure class="align-center">
<img alt="../_images/matplotlib3.png" class="plot-directive" src="../_images/matplotlib3.png" />
</figure>

要阅读更多关于 Matplotlib 及其功能的信息，请查看[官方文档](https://matplotlib.org/)。关于安装 Matplotlib 的说明，请参阅官方[安装部分](https://matplotlib.org/users/installing.html)。