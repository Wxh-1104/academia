# Python 通识课讲义（面向大一新生）

## 前言：为什么学 Python

* **易上手**：语法简洁、接近自然语言。
* **应用广**：数据分析、自动化脚本、网页后端、可视化、AI/ML、科学计算等。
* **生态丰富**：丰富的第三方库与学习资源。

学习目标：

1. 能读懂并编写清晰、正确的 Python 脚本；
2. 了解常用数据结构与控制结构；
3. 学会基本的错误处理、文件读写与模块组织；
4. 能完成若干个小型实战项目；
5. 初步掌握调试、测试与代码风格。

学习方法：

* 多动手、勤运行，**以练代学**；
* 做小项目，把知识串起来；
* 读报错、看提示，学会自己排错。

---

## 环境准备

### 选择版本与安装

建议使用 **Python 3.11+**。下载方式：

* **Windows / macOS**：从 python.org 下载官方安装包；安装时勾选 *Add Python to PATH*（Windows）。
* **Linux**：使用发行版包管理器（如 `apt`, `dnf`, `pacman`）。

安装确认：

```bash
python --version
# 或
python3 --version
```

若系统中 `python` 指向 2.x，请使用 `python3` 与 `pip3`。

### 代码编辑器

推荐 **Visual Studio Code (VS Code)**：

* 安装 Python 扩展；
* 打开一个文件夹作为“工作区”；
* 新建 `hello.py`，即可开始。

### （可选）Anaconda 与虚拟环境

* 初学者可暂不安装 Anaconda；
* 学会使用标准库 `venv` 创建隔离环境：

```bash
# 创建虚拟环境
python -m venv .venv
# 激活
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
# macOS/Linux
source .venv/bin/activate
# 安装第三方包
pip install requests
```

停用虚拟环境：`deactivate`。

---

## 你的第一个程序

新建 `hello.py`：

```python
print("Hello, world!")
```

运行：

```bash
python hello.py
```

在交互式 **REPL** 中练习：命令行输入 `python` 回车，即可逐行试验表达式与语句。

**练习**：修改程序，询问用户姓名并问好。

```python
name = input("你的名字是？ ")
print(f"你好，{name}！欢迎来到 Python 世界！")
```

---

## 语言基础：数据类型与变量

### 变量与命名

* 使用小写加下划线：`user_name`, `total_count`
* 赋值语句：`x = 3`

### 基本数据类型

* `int`（整数）、`float`（浮点数）、`bool`（布尔）、`str`（字符串）
* `None` 表示“空值/无值”

```python
age = 18            # int
score = 92.5        # float
is_freshman = True  # bool
note = "Python"      # str
nothing = None      # NoneType
```

### 字符串与转义

```python
s = "hello\nworld"     # 换行
raw = r"C:\\path\\file" # 原始字符串
multi = """多行
字符串"""
```

### 类型转换与检查

```python
int("123")      # 123
float("3.14")   # 3.14
str(3.14)        # "3.14"
isinstance(3, int)  # True
```

**练习**：

1. 写一个程序，让用户输入两个整数，输出它们的和与平均值（保留两位小数）。

---

## 表达式与运算符

* 算术：`+ - * / // % **`
* 比较：`== != < <= > >=`
* 逻辑：`and or not`
* 赋值：`= += -= *= /=` 等
* 成员：`in`, `not in`

```python
x = 7
print(x % 2 == 1 and x < 10)  # True
```

**练习**：

* 输入一个年份，判断是否闰年（能被4整除但不能被100整除，或能被400整除）。

---

## 控制流程：条件与循环

### 条件语句

```python
x = int(input("分数："))
if x >= 90:
    grade = "A"
elif x >= 80:
    grade = "B"
else:
    grade = "C"
print(grade)
```

### 循环

* `while` 适合未知次数、直到条件停止；
* `for` 常与可迭代对象配合；

```python
for i in range(5):  # 0..4
    print(i)

# 提前结束与跳过
i = 0
while True:
    i += 1
    if i % 2 == 0:
        continue
    if i > 7:
        break
    print(i)
```

**练习**：

* 用 `for` 计算 1..100 的奇数和；
* 用 `while` 实现一个简单的“猜数字”游戏（1\~100）。

---

## 容器类型：列表、元组、字典、集合

### 列表 list（有序可变）

```python
nums = [3, 1, 4]
nums.append(1)
nums.sort()
print(nums[0], nums[-1])
print(nums[1:3])  # 切片
```

常用操作：`append, extend, insert, pop, remove, sort, reverse, index, count`。

### 元组 tuple（有序不可变）

```python
pt = (3, 4)
x, y = pt  # 拆包
```

### 字典 dict（键值映射）

```python
user = {"name": "Li", "age": 18}
user["school"] = "XU"
print(user.get("age", 0))
for k, v in user.items():
    print(k, v)
```

### 集合 set（不重复无序）

```python
s = {1, 2, 2, 3}  # {1, 2, 3}
s.add(4)
print(2 in s)
```

### 推导式（重要！）

```python
squares = [x*x for x in range(10)]
odd_squares = {x*x for x in range(10) if x % 2}
index_map = {c: i for i, c in enumerate("abc")}
```

**练习**：

* 成绩表 `scores = {"张三": 88, "李四": 92, "王五": 75}`，输出平均分、最高分的同学；
* 给定一段文本，统计每个单词出现次数，输出出现频率前 5 名。

---

## 函数：把“步骤”打包复用

### 定义与调用

```python
def add(a, b):
    """返回 a 与 b 的和。"""
    return a + b

print(add(3, 5))
```

### 参数类型

* 位置参数、关键字参数、默认值、可变参数 `*args` 与 `**kwargs`

```python
def greet(name, title="同学", *args, **kwargs):
    print(f"{title} {name}")
```

### 作用域与闭包

```python
def make_adder(n):
    def add(x):
        return x + n
    return add

add5 = make_adder(5)
print(add5(10))  # 15
```

### 文档字符串与类型标注

```python
def area(radius: float) -> float:
    """计算圆面积。:param radius: 半径"""
    from math import pi
    return pi * radius * radius
```

**练习**：

* 写一个函数 `normalize(text)`：去掉首尾空白、把多个空白合并为一个空格、并把首字母大写。

---

## 异常与错误处理

```python
try:
    x = int(input("输入整数："))
    print(10 / x)
except ValueError:
    print("不是有效的整数！")
except ZeroDivisionError:
    print("除数不能为 0！")
else:
    print("没有异常时执行")
finally:
    print("总会执行")
```

自定义异常：

```python
class TooSmallError(Exception):
    pass
```

断言（调试期使用）：`assert x > 0, "x 必须大于 0"`

**练习**：

* 写一个安全的输入函数 `safe_int(prompt)`，失败时持续提示直至用户输入有效整数。

---

## 文件与数据读写

### 文本文件

```python
from pathlib import Path
p = Path("notes.txt")
with p.open("w", encoding="utf-8") as f:
    f.write("你好，Python!\n")

with p.open("r", encoding="utf-8") as f:
    content = f.read()
print(content)
```

### CSV 与 JSON

```python
import csv, json
rows = [
    {"name": "Li", "score": 92},
    {"name": "Zhang", "score": 85},
]
# 写 CSV
with open("scores.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=["name", "score"])
    w.writeheader(); w.writerows(rows)
# 写 JSON
with open("scores.json", "w", encoding="utf-8") as f:
    json.dump(rows, f, ensure_ascii=False, indent=2)
```

**练习**：

* 读取 `scores.csv`，计算平均分、最高分，并输出到 `report.txt`。

---

## 模块、包与标准库速览

### 导入与 `__name__ == "__main__"`

```python
# mymath.py
PI = 3.14159

def double(x):
    return 2 * x

if __name__ == "__main__":
    print(double(21))
```

### 常用标准库

* `math`, `random`, `statistics`
* `datetime`, `time`
* `pathlib`, `os`, `shutil`
* `json`, `csv`
* `itertools`, `collections`
* `argparse`（命令行参数）

**练习**：

* 用 `argparse` 写一个命令行工具：`python wordcount.py input.txt` 输出词频 Top 10。

---

## 面向对象编程（OOP）基础

```python
class Student:
    def __init__(self, name: str, score: float):
        self.name = name
        self.score = score

    def is_pass(self) -> bool:
        return self.score >= 60

s = Student("Li", 88)
print(s.is_pass())
```

### 继承与多态

```python
class Person:
    def speak(self):
        return "Hello"

class Chinese(Person):
    def speak(self):
        return "你好"

def say(p: Person):
    print(p.speak())
```

### `@dataclass`（简化样板）

```python
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float

p = Point(3, 4)
```

**练习**：

* 定义 `Course` 类（名称、学分、成绩），实现计算 GPA 的函数。

---

## 实用工具：虚拟环境、依赖与项目结构

### 创建项目骨架

```
myproject/
├─ README.md
├─ requirements.txt
├─ src/
│  └─ mypkg/
│     ├─ __init__.py
│     └─ main.py
└─ tests/
   └─ test_basic.py
```

### 依赖管理

```bash
pip install requests
pip freeze > requirements.txt
pip install -r requirements.txt
```

---

## 调试与测试基础

### 调试

* **打印法**：快速定位；
* **`pdb`**：命令行调试器：`python -m pdb script.py`
* **VS Code** 断点调试：在行号处点红点，F5 运行。

### 测试（以 `pytest` 为例）

```python
# test_math.py
from mymath import double

def test_double():
    assert double(3) == 6
```

运行：

```bash
pip install pytest
pytest -q
```

**练习**：

* 为“词频统计”编写 2\~3 个单元测试。

---

## 小项目实战

### 1. 词频统计器（文本处理）

目标：

* 读取文本文件，清洗标点，统计单词频率，输出 Top 20。

提示：

```python
import re
from collections import Counter

with open("input.txt", encoding="utf-8") as f:
    text = f.read().lower()
words = re.findall(r"[a-zA-Z']+", text)
counts = Counter(words)
for w, c in counts.most_common(20):
    print(w, c)
```

### 2. 成绩分析（CSV）

* 读取 `scores.csv`，生成按分数段分布的直方数据，并导出 `report.txt`。

### 3. 图片批量改名（文件系统）

* 批量把 `img_001.jpg` 改为 `2024-001.jpg` 等：练习 `pathlib`、字符串格式化、异常处理。

### 4. 简易命令行记事本

* `python memo.py add "买牛奶"` 追加到 `memo.txt`；
* `python memo.py list` 列出待办；
* 练习 `argparse` 与文件 I/O。

（可任选两个项目完成并提交代码与 README）

---

## 代码风格与类型标注

### PEP 8 精要

* 4 空格缩进；每行不超过 79 字符；
* 有意义的变量名；
* 模块顶部：导入、常量、函数/类定义；
* 字符串优先使用单一风格（单/双引号均可但要统一）。

### 类型标注与静态检查

```python
from typing import Iterable

def total(xs: Iterable[int]) -> int:
    return sum(xs)
```

* 可用 `mypy` 静态检查：`mypy src/`
* 代码格式化工具：`black`、`ruff`。

---

## 常见坑与最佳实践清单

* **可变默认参数**：`def f(x, arr=[])` ❌，应写 `None` 并在函数内创建；
* **浮点精度**：金额用 `decimal` 或以“分”为单位的整数；
* **拷贝**：`copy.copy`（浅拷贝）与 `copy.deepcopy`（深拷贝）；
* **比较**：字符串/列表用 `==`，身份比较用 `is`；
* **资源释放**：文件、网络连接使用 `with` 上下文管理器；
* **早返回**：减少嵌套层级；
* **小函数**：每个函数只做一件事，便于测试。

---

## Jupyter Notebook 入门

* 适合“边写边跑”的探索式学习与数据分析；
* 安装：`pip install notebook` 或使用 VS Code 的 **Jupyter** 扩展；
* 新建 `*.ipynb`，单元格内写代码并运行；
* 在 Notebook 顶部记录实验目的与结论，注意保存与版本管理。

---

## 下一步学什么

* **数据分析**：`numpy`, `pandas`, `matplotlib`
* **Web 开发**：`Flask`, `FastAPI`
* **自动化与爬虫**：`requests`, `BeautifulSoup`, `selenium`
* **GUI**：`tkinter`, `PyQt`
* **AI/ML**：`scikit-learn`, `PyTorch`（进阶）

建议路线：先“打牢基础 → 做 2\~3 个小项目 → 按兴趣方向纵深学习”。

---

## 附录 A：每章练习参考答案（选读）

> 提示：先独立完成，再对照答案。

### 基础练习示例答案

**平均值（保留两位小数）**

```python
a = int(input("A:"))
b = int(input("B:"))
print("和:", a + b)
print("均值:", round((a + b) / 2, 2))
```

**闰年判断**

```python
y = int(input())
print((y % 4 == 0 and y % 100 != 0) or (y % 400 == 0))
```

**1..100 奇数和**

```python
print(sum(i for i in range(1, 101) if i % 2 == 1))
```

**猜数字（简版）**

```python
import random
secret = random.randint(1, 100)
while True:
    g = int(input("猜："))
    if g == secret:
        print("对了！"); break
    print("大了" if g > secret else "小了")
```

**normalize**

```python
import re

def normalize(text: str) -> str:
    t = text.strip()
    t = re.sub(r"\s+", " ", t)
    return t.capitalize()
```

**safe\_int**

```python
def safe_int(prompt: str = "输入整数：") -> int:
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("请重新输入有效整数！")
```

**CSV 报告**

```python
import csv
from statistics import mean

scores = []
with open("scores.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        scores.append(int(row["score"]))

report = f"平均分: {mean(scores):.2f}\n最高分: {max(scores)}\n"
with open("report.txt", "w", encoding="utf-8") as f:
    f.write(report)
```

**GPA 示例**

```python
from dataclasses import dataclass

@dataclass
class Course:
    name: str
    credit: float
    score: float

    def point(self) -> float:
        # 简化：按百分制换算
        if self.score >= 90: return 4.0
        if self.score >= 80: return 3.0
        if self.score >= 70: return 2.0
        if self.score >= 60: return 1.0
        return 0.0

def gpa(courses: list[Course]) -> float:
    total = sum(c.credit * c.point() for c in courses)
    credits = sum(c.credit for c in courses)
    return total / credits if credits else 0.0
```

---

> 祝学习顺利！持续迭代这份讲义，结合你们的课程安排与作业要求即可。
