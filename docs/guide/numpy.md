# NumPy 高阶教程：从入门到精通 (修订版)

本教程专为已有 Python 编程基础的大学生设计，旨在系统性地培养数据分析和科学计算的编程能力。我们将深入探讨 NumPy 库，从基础概念到高级应用，并结合必要的数学背景，助你完全掌握这一强大的工具。

## 目录

1.  **准备工作与核心概念**
    *   1.1 安装 NumPy
    *   1.2 为什么选择 NumPy？—— 速度、内存与向量化
    *   1.3 NumPy 的核心：`ndarray` 对象

2.  **创建 NumPy 数组**
    *   2.1 从现有数据创建
    *   2.2 使用内置函数创建（占位符数组）
    *   2.3 从数值范围创建

3.  **数组属性与数据类型 (`dtype`)**
    *   3.1 数组的基本属性
    *   3.2 深入理解数据类型 (`dtype`)
    *   3.3 数据类型转换 (`astype`)

4.  **数组索引与切片 (深入)**
    *   4.1 基础索引与切片
    *   4.2 **核心概念：视图 (View) vs. 副本 (Copy)**
    *   4.3 高级索引：布尔索引与花式索引

5.  **数组操作与变形**
    *   5.1 改变数组形状 (`reshape`, `ravel`)
    *   5.2 数组的转置与轴对换
    *   5.3 数组的合并与拆分

6.  **通用函数 (ufunc) 与向量化**
    *   6.1 向量化思想
    *   6.2 常用通用函数

7.  **广播机制 (Broadcasting)**
    *   7.1 什么是广播？
    *   7.2 广播的规则
    *   7.3 广播的实际应用

8.  **线性代数 (`numpy.linalg`)**
    *   8.1 数学基础回顾：向量与矩阵
    *   8.2 矩阵乘法：`*` vs. `@`
    *   8.3 常用线性代数运算

9.  **随机数生成 (`numpy.random`)**
    *   9.1 伪随机数与种子
    *   9.2 现代的随机数生成方式 (最佳实践)
    *   9.3 从特定分布中抽样

10. **统计分析**
    *   10.1 描述性统计函数
    *   10.2 沿轴计算
    *   10.3 处理 NaN 值

11. **文件输入/输出 (I/O)**
    *   11.1 保存和加载 NumPy 数组 (二进制格式)
    *   11.2 读写文本文件

12. **[高级主题] 结构化数组**

13. **[高级主题] 性能优化技巧**
    *   13.1 向量化：避免 Python 循环
    *   13.2 内存布局：C 顺序 vs. Fortran 顺序

---

## 1. 准备工作与核心概念

### 1.1 安装 NumPy

在开始之前，请确保你的环境中已经安装了 NumPy。如果尚未安装，可以使用 pip 进行安装：
```bash
pip install numpy
```
按照惯例，我们在代码中将 NumPy 导入并简写为 `np`：
```python
import numpy as np
```

### 1.2 为什么选择 NumPy？—— 速度、内存与向量化

对于已有 Python 列表的我们来说，为什么还需要 NumPy 呢？主要原因在于其**极致的性能和效率**。

*   **速度**：NumPy 的核心数组运算是用 C 语言实现的，避免了 Python 解释器的开销，执行速度远超纯 Python 代码。
*   **内存**：NumPy 数组在内存中是连续存储的，相比 Python 列表的分散存储，不仅内存占用更少，也更有利于 CPU 的缓存机制，提高了存取效率。
*   **向量化 (Vectorization)**：NumPy 允许你对整个数组执行操作，而无需编写显式的循环。这使得代码更简洁、可读性更高，同时也极大地提升了计算效率。

**性能对比示例：**
让我们直观地感受一下 NumPy 的速度优势。假设我们要对两个包含一百万个元素的列表（或数组）进行逐元素相乘。

```python
import time

# 使用 Python 列表
size = 1_000_000
list1 = list(range(size))
list2 = list(range(size))

start_time = time.time()
result_list = [list1[i] * list2[i] for i in range(size)]
end_time = time.time()
print(f"Python 列表耗时: {end_time - start_time:.4f} 秒")

# 使用 NumPy 数组
arr1 = np.arange(size)
arr2 = np.arange(size)

start_time = time.time()
result_arr = arr1 * arr2  # 向量化操作
end_time = time.time()
print(f"NumPy 数组耗时: {end_time - start_time:.4f} 秒")
```
你会发现，NumPy 的向量化操作通常比 Python 循环快数十倍甚至更多。

### 1.3 NumPy 的核心：`ndarray` 对象

NumPy 的基石是 `ndarray`（n-dimensional array，即 n 维数组）。它是一个由**相同类型**元素组成的多维网格。数组的维度（dimensions）在 NumPy 中被称为**轴**（axes）。

*   **一维数组**：只有一个轴 (axis 0)，类似于向量。
*   **二维数组**：有两个轴 (axis 0-行, axis 1-列)，类似于矩阵。
*   **三维数组**：有三个轴，可用于表示图像（高、宽、颜色通道）等。

## 2. 创建 NumPy 数组

### 2.1 从现有数据创建

最基础的方法是使用 `np.array()` 函数，将 Python 列表或元组转换为 `ndarray`。

```python
# 创建一维数组
a = np.array([1, 2, 3, 4, 5])

# 创建二维数组 (从列表的列表)
b = np.array([[1.5, 2, 3], [4, 5, 6]])
```

### 2.2 使用内置函数创建（占位符数组）

当数组很大时，NumPy 提供了多种函数来高效地创建具有初始内容的数组。

*   `np.zeros(shape, dtype=float)`: 创建指定形状的全零数组。
*   `np.ones(shape, dtype=float)`: 创建指定形状的全一数组。
*   `np.full(shape, fill_value, dtype=None)`: 创建指定形状并用 `fill_value` 填充的数组。
*   `np.eye(N, M=None, k=0, dtype=float)`: 创建一个 N×M 的单位矩阵（主对角线为1，其余为0）。
*   `np.empty(shape, dtype=float)`: 创建一个指定形状的数组，其初始内容是未初始化的，取决于内存的状态。它比 `zeros` 稍快，适用于后续会立即填充所有元素的情况。

**`_like` 函数**:
这些函数可以根据另一个数组的形状和数据类型创建新数组，非常方便。
*   `np.zeros_like(a)`
*   `np.ones_like(a)`
*   `np.full_like(a, fill_value)`
*   `np.empty_like(a)`

```python
# 创建一个 2x3 的全零数组
e = np.zeros((2, 3))

# 根据数组 b 的形状创建一个全为 7 的数组
b = np.array([[1, 2], [3, 4]])
g = np.full_like(b, 7)
print(g)
# [[7 7]
#  [7 7]]
```

### 2.3 从数值范围创建

*   `np.arange(start, stop, step)`: 创建一个在给定区间内以指定步长生成的数组（类似 Python 的 `range`，但支持浮点数）。
*   `np.linspace(start, stop, num)`: 创建一个包含 `num` 个在 `start` 和 `stop` 之间均匀分布的元素的数组（包含 `stop`）。
*   `np.logspace(start, stop, num)`: 创建一个在对数尺度上均匀分布的数组。

```python
# 创建一个从 0 到 10（不含），步长为 2 的数组
c = np.arange(0, 10, 2)  # -> [0 2 4 6 8]

# 创建一个包含 5 个元素的数组，范围从 0 到 1
d = np.linspace(0, 1, 5) # -> [0.   0.25 0.5  0.75 1.  ]
```

## 3. 数组属性与数据类型 (`dtype`)

### 3.1 数组的基本属性

*   `ndarray.ndim`: 数组的轴（维度）的数量。
*   `ndarray.shape`: 数组的形状。这是一个整数元组，表示每个维度中数组的大小。
*   `ndarray.size`: 数组元素的总数，等于 `shape` 属性中元素的乘积。
*   `ndarray.dtype`: 描述数组中元素类型的对象。
*   `ndarray.itemsize`: 数组中每个元素的字节大小。
*   `ndarray.nbytes`: 整个数组所占的字节数，等于 `itemsize` * `size`。

### 3.2 深入理解数据类型 (`dtype`)

`dtype` 是 NumPy 的一个重要概念。一个明确的数据类型可以帮助 NumPy 优化存储和计算。常见类型包括 `np.int64`, `np.float32`, `np.complex128`, `np.bool_`, `np.string_`, `np.object_` 等。

可以在创建数组时通过 `dtype` 参数明确指定：
```python
arr = np.array([1, 2, 3], dtype=np.float32)
print(arr.dtype) # 输出: float32
```

### 3.3 数据类型转换 (`astype`)

使用 `ndarray.astype()` 方法可以显式地转换数组的数据类型。**注意：这个操作会创建一个新数组（副本），而不是在原地修改。**

```python
int_arr = np.array([1, 2, 3, 4, 5])
float_arr = int_arr.astype(np.float64)

print(int_arr.dtype)  # int64
print(float_arr.dtype) # float64

# 从浮点数转换为整数时，小数部分会被截断
float_data = np.array([3.14, -2.5, 0.99])
int_data = float_data.astype(np.int32)
print(int_data) # -> [ 3 -2  0]
```

## 4. 数组索引与切片 (深入)

### 4.1 基础索引与切片

一维数组的索引和切片与 Python 列表非常相似。多维数组则为每个轴提供索引或切片，用逗号分隔。

```python
arr_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# 获取单个元素 [row, col]
print(arr_2d[1, 2]) # 输出: 6

# 切片：获取一个 2x2 的子数组
sub_arr = arr_2d[:2, 1:]
print(sub_arr)
# [[2 3]
#  [5 6]]
```

### 4.2 **核心概念：视图 (View) vs. 副本 (Copy)**

**这是 NumPy 中最重要也最容易出错的概念之一！**

*   **视图 (View)**: 基础的切片操作 (`:`) 产生的是原始数组的**视图**。视图不拥有自己的数据，它只是指向原始数组内存的一扇“窗户”。对视图的任何修改都会直接反映在原始数组上。
*   **副本 (Copy)**: 副本是一个全新的数组，拥有自己的数据。对副本的修改不会影响原始数组。花式索引、布尔索引以及显式调用 `.copy()` 方法会产生副本。

```python
# 示例：视图的行为
original_arr = np.arange(10)
view_slice = original_arr[5:8] # 创建一个视图

print("视图:", view_slice)     # -> [5 6 7]
view_slice[1] = 999          # 修改视图的第二个元素

print("修改后的视图:", view_slice) # -> [5 999 7]
print("原始数组也被修改了:", original_arr) # -> [  0   1   2   3   4   5 999   7   8   9]

# 示例：副本的行为
original_arr_2 = np.arange(10)
copy_slice = original_arr_2[5:8].copy() # 显式创建副本

copy_slice[1] = 999
print("修改后的副本:", copy_slice)   # -> [5 999 7]
print("原始数组未受影响:", original_arr_2) # -> [0 1 2 3 4 5 6 7 8 9]
```
**最佳实践**：当你需要修改数组的子集但又不想影响原始数据时，请务必使用 `.copy()`。

### 4.3 高级索引：布尔索引与花式索引

*   **布尔索引 (Boolean Indexing)**：使用布尔数组来选择元素。这在数据过滤中非常有用。

```python
names = np.array(['Bob', 'Joe', 'Will', 'Bob'])
data = np.random.randn(4, 3) # 4x3 的随机数据

# 找出所有 'Bob' 对应的数据行
mask = (names == 'Bob')
print(mask)           # -> [ True False False  True]
print(data[mask])     # 使用布尔掩码进行索引
```

*   **花式索引 (Fancy Indexing)**：使用整数数组作为索引。它允许你选择任意顺序的行或列。

```python
arr = np.arange(24).reshape((8, 3))

# 以特定顺序选择行
print(arr[[4, 3, 0, 6]])

# 传递多个索引数组，可以选择特定位置的元素
# 结果是一维数组，包含 (0,0), (2,1), (4,2) 处的元素
print(arr[[0, 2, 4], [0, 1, 2]])
```

## 5. 数组操作与变形

### 5.1 改变数组形状 (`reshape`, `ravel`)

*   `ndarray.reshape(shape)`: 在不改变数据的条件下，返回一个具有新形状的数组。
*   `ndarray.ravel()`: 将多维数组“展平”为一维数组。

```python
arr = np.arange(12)
reshaped_arr = arr.reshape((3, 4))

# `reshape` 的结果通常是视图，但如果无法保证内存连续性，也可能是副本
# -1 是一个占位符，可以自动计算该维度的大小
reshaped_arr_2 = np.arange(15).reshape((3, -1)) # -1 会被自动计算为 5

# 展平数组
flattened_arr = reshaped_arr.ravel()
```

### 5.2 数组的转置与轴对换

*   `ndarray.T` 或 `np.transpose()`: 对数组进行转置（交换行和列）。
*   `ndarray.swapaxes(axis1, axis2)`: 交换任意两个轴。

```python
matrix = np.arange(6).reshape((2, 3))
print(matrix)
# [[0 1 2]
#  [3 4 5]]

print(matrix.T)
# [[0 3]
#  [1 4]
#  [2 5]]
```

### 5.3 数组的合并与拆分

*   `np.concatenate((a, b), axis=0)`: 沿指定轴连接一系列数组。
*   `np.vstack((a, b))` 和 `np.hstack((a, b))`: 分别是沿垂直方向（行）和水平方向（列）堆叠数组的便捷函数。
*   `np.split(arr, indices_or_sections, axis=0)`: 沿指定轴将一个数组拆分为多个子数组。
*   `np.hsplit` 和 `np.vsplit` 是其便捷函数。

```python
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

# 垂直堆叠
print(np.vstack((a, b)))

# 水平堆叠
print(np.hstack((a, b)))
```

## 6. 通用函数 (ufunc) 与向量化

### 6.1 向量化思想

如前所述，向量化是 NumPy 的核心优势。其本质是使用预编译的、高效的 C/Fortran 代码（即通用函数 ufunc）来对整个数组或数组片段执行操作，从而避免了缓慢的 Python 循环。

### 6.2 常用通用函数

NumPy 提供了海量的 ufunc，覆盖了各种数学运算。

*   **一元 ufunc**: `np.sqrt`, `np.exp`, `np.log`, `np.sin`, `np.cos`, `np.abs`, `np.ceil`, `np.floor` 等。
*   **二元 ufunc**: `np.add`, `np.subtract`, `np.multiply`, `np.divide`, `np.maximum`, `np.minimum`, `np.power` 等。这些函数通常与算术运算符（`+`, `-`, `*`, `/` 等）等价。

## 7. 广播机制 (Broadcasting)

### 7.1 什么是广播？

广播是 NumPy 中一个非常强大的机制，它允许在形状不同的数组之间执行算术运算。在某些约束条件下，较小的数组会“广播”到较大的数组，以便它们具有兼容的形状，而无需实际复制数据。

### 7.2 广播的规则

比较两个数组的形状时，从末尾的维度（最右侧）开始逐个比较。两个维度在以下情况下是兼容的：
1.  它们相等。
2.  其中一个为 1。

如果两个数组的维度数不同，系统会在较小形状数组的前面（左侧）补 1，直到维度数相同。

**示例：**
`A (4, 3) + B (3,)`
1.  B 的维度数是 1，A 是 2。在 B 的形状前补 1，变为 `(1, 3)`。
2.  比较末尾维度：A 是 3，B 是 3。兼容。
3.  比较前一个维度：A 是 4，B 是 1。兼容。
4.  两个数组兼容。NumPy 会将 B 的 `(1, 3)` 数组在 axis 0 上“拉伸”4次，使其形状变为 `(4, 3)`，然后进行逐元素相加。

### 7.3 广播的实际应用

一个常见的例子是数据标准化：从一个矩阵的每一列中减去该列的均值。

```python
data = np.random.randn(5, 3) # 5个样本, 3个特征
col_means = data.mean(axis=0) # 计算每列的均值，shape 为 (3,)

# 广播将 (5, 3) 的 data 和 (3,) 的 col_means 进行相减
standardized_data = data - col_means
```

## 8. 线性代数 (`numpy.linalg`)

NumPy 的 `linalg` 模块提供了进行线性代数运算所需的大部分工具。

### 8.1 数学基础回顾：向量与矩阵
（此部分同初版，此处省略）

### 8.2 矩阵乘法：`*` vs. `@`

这是一个非常重要的区别：
*   `*` 运算符在 NumPy 中执行**逐元素**乘法。
*   `@` 运算符 (或 `np.dot` 函数) 执行**矩阵**乘法。

```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

print("逐元素乘法 (*):\n", A * B)
# [[ 5 12]
#  [21 32]]

print("矩阵乘法 (@):\n", A @ B)
# [[19 22]
#  [43 50]]
```

### 8.3 常用线性代数运算

*   `np.linalg.inv(A)`: 计算矩阵 A 的逆。
*   `np.linalg.det(A)`: 计算矩阵 A 的行列式。
*   `np.linalg.solve(A, b)`: 求解线性方程组 `Ax = b`。
*   `np.linalg.eig(A)`: 计算矩阵 A 的特征值和特征向量。
*   `np.linalg.svd(A)`: 执行奇异值分解 (SVD)。

## 9. 随机数生成 (`numpy.random`)

### 9.1 伪随机数与种子

计算机生成的随机数通常是**伪随机数**，它们由一个确定性算法从一个**种子 (seed)** 开始生成。相同的种子总会产生相同的随机数序列，这对于调试和保证实验结果的可复现性至关重要。

### 9.2 现代的随机数生成方式 (最佳实践)

从 NumPy 1.17 版本开始，推荐使用 `np.random.default_rng()` 创建一个生成器实例 (`Generator`)，然后调用该实例的方法来生成随机数。这种新方式比旧的 `np.random.rand()` 等函数提供了更好的统计特性和更清晰的 API。

```python
# 1. 创建一个随机数生成器实例，可以提供一个种子
rng = np.random.default_rng(seed=42)

# 2. 使用生成器的方法
# 生成一个 2x3 的数组，元素为 [0.0, 1.0) 之间的随机浮点数
rand_floats = rng.random((2, 3))

# 生成一个 0 到 9 之间的随机整数
rand_int = rng.integers(0, 10)

# 生成一个形状为 (3, 5) 的 0 到 9 之间的随机整数数组
rand_ints_array = rng.integers(0, 10, size=(3, 5))
```

### 9.3 从特定分布中抽样

`Generator` 对象可以从多种概率分布中生成随机数。

```python
rng = np.random.default_rng()

# 从均值为 0，标准差为 1 的标准正态分布中抽取
normal_samples = rng.standard_normal(size=(2, 4))

# 从泊松分布中抽取
poisson_samples = rng.poisson(lam=5, size=10)

# 随机排列
arr = np.arange(10)
rng.shuffle(arr) # 在原地打乱数组
```

## 10. 统计分析

### 10.1 描述性统计函数
`np.mean`, `np.median`, `np.std` (标准差), `np.var` (方差), `np.min`, `np.max`, `np.sum`, `np.percentile` 等。这些函数既可以作为顶级函数调用，也可以作为 `ndarray` 对象的方法调用。

### 10.2 沿轴计算

对于多维数组，这些函数可以接受一个 `axis` 参数，用于沿着指定的轴进行计算。

```python
matrix = np.array([[1, 2, 3], [4, 5, 6]])

# 沿着列的方向计算均值 (axis=0)
print(matrix.mean(axis=0)) # -> [2.5 3.5 4.5]

# 沿着行的方向计算总和 (axis=1)
print(matrix.sum(axis=1)) # -> [ 6 15]
```

### 10.3 处理 NaN 值
在真实世界的数据中，经常会遇到缺失值 (NaN, Not a Number)。普通的统计函数遇到 NaN 会返回 NaN。NumPy 提供了对 NaN 安全的版本：
*   `np.nanmean`, `np.nanstd`, `np.nansum` 等。

## 11. 文件输入/输出 (I/O)

### 11.1 保存和加载 NumPy 数组 (二进制格式)

使用 `np.save` 和 `np.load` 是在磁盘上高效存取 NumPy 数组的首选方式。它们处理的是以 `.npy` 为扩展名的二进制文件。

```python
arr = np.arange(10)
np.save('some_array.npy', arr)

loaded_arr = np.load('some_array.npy')
```
如果你想将多个数组保存到一个压缩文件中，可以使用 `np.savez_compressed`。

### 11.2 读写文本文件

对于需要与其他程序交换数据的场景，纯文本格式可能更通用。
*   `np.savetxt(filename, array, delimiter=',')`: 将数组保存为文本文件。
*   `np.loadtxt(filename, delimiter=',')`: 从文本文件加载数据。

## 12. [高级主题] 结构化数组

通常，`ndarray` 的所有元素都是相同类型的。但**结构化数组**是一个特例，它允许你将数组的每个元素看作一个 C 语言中的 `struct`，可以包含不同类型和名称的字段。

```python
# 定义一个数据类型，包含一个字符串，一个浮点数和一个整数
my_dtype = [('name', 'U10'), ('height_cm', 'f4'), ('age', 'i4')]

# 创建结构化数组
people = np.array([('Alice', 165.5, 25), ('Bob', 180.2, 30)], dtype=my_dtype)

# 可以通过字段名访问数据
print(people['name'])    # -> ['Alice' 'Bob']
print(people[0]['height_cm']) # -> 165.5
```
结构化数组在处理异构数据时非常有用，是 Pandas `DataFrame` 的底层灵感来源之一。

## 13. [高级主题] 性能优化技巧

### 13.1 向量化：避免 Python 循环

再次强调，尽可能使用 NumPy 的内置函数和向量化操作，避免在 Python 层面写 `for` 循环来遍历数组元素。这是提升 NumPy 代码性能的第一法则。

### 13.2 内存布局：C 顺序 vs. Fortran 顺序

NumPy 数组的元素在内存中可以按两种方式存储：
*   **C order (行主序)**: 默认方式。一行的数据在内存中是连续的。
*   **Fortran order (列主序)**: 一列的数据在内存中是连续的。

当你频繁地对列进行操作时，将数组存储为 Fortran 顺序可能会提高性能，因为这样可以更好地利用 CPU 缓存。

```python
# 创建一个 C 顺序的数组
c_arr = np.zeros((1000, 1000), order='C')

# 创建一个 Fortran 顺序的数组
f_arr = np.zeros((1000, 1000), order='F')

# 在 f_arr 上按列求和通常比在 c_arr 上更快
# %timeit f_arr.sum(axis=0)
# %timeit c_arr.sum(axis=0)
```
虽然这是一个细微的差别，但在处理海量数据和性能攸关的应用中，理解内存布局是很有价值的。

---

通过本教程的学习，你不仅掌握了 NumPy 的核心功能，还深入了解了其背后的重要概念和高级技巧。请务必动手实践每一个代码示例，并在你未来的数据分析项目中积极应用这些知识。