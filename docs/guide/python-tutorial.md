好的，收到。这是一个非常典型的教学问题。初学者需要的是“脚手架”，即对概念的清晰定义、对语法的拆解说明，以及对例子背后“为什么这么做”的解释。单纯罗列例子会让学习者只见树木，不见森林。

我将全面改进您提供的教程前半部分，使其更适合零基础的大一新生。改进的原则如下：

1.  **先概念，后语法**：在展示代码前，用通俗的语言和类比解释每个核心概念是什么，为什么需要它。
2.  **拆解示例**：对每一块代码进行逐行或逐部分的注释和讲解，说明代码的意图和执行流程。
3.  **强调关联**：将新知识点与前面学过的内容联系起来，构建知识体系。
4.  **补充“为什么”**：解释为什么某种语法是这样设计的，或者在什么场景下使用它。
5.  **优化结构**：调整标题和内容组织，使逻辑更清晰，更具引导性。

---

### **Python 通识课讲义（面向大一新生）- 改进版**

### **前言：为什么学 Python，以及如何学**

欢迎来到 Python 的世界！在开始编程之旅前，我们先明确两个问题：为什么要选择 Python，以及如何才能学好它。

#### **为什么是 Python？**

*   **极易上手**：Python 的语法设计得非常简洁，读起来就像自然的英语句子。这让你能把精力集中在“解决什么问题”上，而不是“如何跟计算机说话”的复杂规则上。
*   **功能强大，无所不包**：它像一把“瑞士军刀”。无论是处理数据（数据分析）、让电脑自动完成重复工作（自动化脚本）、构建网站的后台服务、制作漂亮的数据图表（可视化），还是探索人工智能（AI/ML）和进行科学计算，Python 都能胜任。
*   **社区庞大，生态丰富**：学习路上你绝不孤单。有无数的开发者已经编写了海量的“第三方库”（预先写好的功能包），你可以直接拿来用，避免重复造轮子。遇到任何问题，也几乎都能在网上找到答案和学习资源。

#### **我们的学习目标**

学完这门课程，你将能够：
1.  **读懂并写出**清晰、正确、符合规范的 Python 代码。
2.  掌握最核心的**数据结构**（如列表、字典）与**控制结构**（如条件、循环）。
3.  学会处理程序中的**错误**、读写**文件**以及组织自己的**代码模块**。
4.  有能力独立完成几个**有趣的小项目**，将所学知识融会贯通。
5.  初步掌握**调试**（找错）、**测试**和编写优美代码的**风格**。

#### **最高效的学习方法**

编程是一门实践技能，就像学游泳或骑自行车，光看书是学不会的。
*   **多动手，别只看**：对每一个例子，不仅要看懂，更要亲手敲一遍，然后试着改动它，看看会发生什么。**以练代学**是关键。
*   **项目驱动**：知识点是零散的珍珠，项目是串起它们的线。尝试做一些小项目（比如一个计算器、一个猜数字游戏），能帮你巩固和理解知识。
*   **拥抱错误**：程序出错是家常便饭！仔细阅读**报错信息**，它是计算机给你的最直接的线索。学会根据提示自己排错，是成长最快的方式。

---

### **环境准备：搭建你的编程工作站**

工欲善其事，必先利其器。我们先花点时间把编程环境配置好。

#### **1. 安装 Python 解释器**

计算机本身不认识我们写的 Python 代码，它需要一个“翻译官”——**Python 解释器**——来把我们的代码翻译成机器能懂的指令。

*   **版本选择**：我们使用 **Python 3.11 或更高版本**。编程语言会不断更新，修复旧问题、增加新功能，使用较新的稳定版本是好的习惯。
*   **下载与安装**：
    *   **Windows / macOS 用户**：直接访问 `python.org` 官方网站下载安装包。
        *   **特别注意 (Windows)**：在安装界面的第一步，务必勾选 **"Add Python to PATH"** 选项！这相当于告诉系统：“嘿，我已经安装了 Python，以后你在任何地方都能找到它。”
    *   **Linux 用户**：通常系统已自带 Python。你可以使用发行版的包管理器（如 `sudo apt install python3`）来安装或更新。

*   **验证安装**：打开你的终端（或 Windows 的 PowerShell/CMD），输入以下命令并回车：

    ```bash
    python --version
    # 如果上面命令没反应或版本是 2.x，请尝试：
    python3 --version
    ```
    如果能看到类似 `Python 3.11.5` 的版本号，说明安装成功！

#### **2. 选择代码编辑器**

代码编辑器就像是程序员的 Word 文档，但功能更强大，能让你更高效地编写代码。

我们强烈推荐 **Visual Studio Code (VS Code)**，它免费、强大且插件丰富。
1.  从其官网 `code.visualstudio.com` 下载并安装。
2.  打开 VS Code，在左侧的扩展商店（图标像四个方块）中搜索并安装 **"Python"** 扩展。这个插件会提供代码高亮、智能提示、调试等核心功能。
3.  在电脑上创建一个文件夹，比如 `python_study`，然后在 VS Code 中通过 `文件 > 打开文件夹` 来打开它。这个文件夹就是你的“工作区”，你所有的代码文件都将保存在这里。

#### **3. （选修）虚拟环境：代码的“隔离舱”**

想象一下，你同时在做两个项目，项目A需要一个旧版的工具包，项目B需要一个新版的。如果都装在系统里，它们可能会冲突。**虚拟环境**就是为了解决这个问题而生的。它会为你的项目创建一个独立的、干净的 Python “隔离舱”。

*   **对初学者的建议**：这个概念可以先了解，**不必立刻就用**。等你开始接触需要安装多个第三方库的项目时，再回来学习它也不迟。
*   **基本用法（了解即可）**：
    ```bash
    # 在你的项目文件夹下，创建一个名为 .venv 的虚拟环境
    python -m venv .venv

    # 激活这个环境，让后续操作都在这个“隔离舱”里进行
    # Windows PowerShell
    .\.venv\Scripts\Activate.ps1
    # macOS/Linux
    source .venv/bin/activate

    # 在激活的环境里，可以自由安装库，不会影响系统
    pip install requests
    ```
    当你不再需要这个环境时，只需输入 `deactivate` 即可退出。

---

### **你的第一个程序："Hello, World!"**

这是编程界的传统仪式。让我们开始吧。

1.  在 VS Code 中，对着左侧文件栏里的工作区点击右键，选择“新建文件”，命名为 `hello.py`。
2.  在文件中输入以下代码：

    ```python
    # print() 是一个内置函数，它的作用是在屏幕上“打印”出括号里的内容。
    # "Hello, world!" 是一个字符串，也就是一段文本，需要用引号括起来。
    print("Hello, world!")
    ```

3.  **运行程序**：
    *   在 VS Code 中，可以直接点击右上角的“运行”按钮（一个三角形）。
    *   或者，在 VS Code 的终端里（`视图 > 终端`），输入命令：
        ```bash
        python hello.py
        ```
    你会在下方的终端窗口看到输出：`Hello, world!`

#### **交互式练习：REPL**

除了写文件，Python 还提供了一个“即时问答”模式，叫做 **REPL** (Read-Eval-Print Loop)。在终端里直接输入 `python` 并回车，你就能进入这个模式。在这里，你输入的每一行代码都会被立即执行并返回结果，非常适合用来测试和探索小的代码片段。

#### **练习：与程序互动**

让我们写一个能和用户打招呼的程序。

```python
# input() 是另一个内置函数，它会在屏幕上显示括号里的提示文字，
# 然后等待用户输入，最后将用户输入的内容作为一段文本（字符串）返回。
# 我们用一个叫做 name 的“变量”来接收 input() 函数返回的结果。
name = input("你的名字是？ ")

# f-string (格式化字符串) 是 Python 中一种非常方便的拼接字符串的方式。
# 在字符串引号前加上 f，然后你就可以在字符串内部用 {变量名} 的形式直接嵌入变量的值。
print(f"你好，{name}！欢迎来到 Python 世界！")
```
现在，运行这个程序。它会先问你的名字，等你输入并回车后，它会向你问好。

---

### **语言基础：数据类型与变量**

程序的核心就是处理数据。但在处理之前，我们需要告诉计算机这些数据是什么“类型”，以及如何“存放”它们。

#### **变量：给数据贴上标签**

**概念**：变量（Variable）可以理解成一个带标签的盒子，你可以在里面存放数据。这个“标签”就是**变量名**，盒子里的“东西”就是**变量的值**。

```python
# 这行代码的意思是：
# 1. 创建一个盒子。
# 2. 在盒子里放入数字 3。
# 3. 给这个盒子贴上标签 "x"。
# 这个过程叫做“赋值”（Assignment）。
x = 3
```

**命名规范**：为了让代码易于阅读，我们约定俗成地使用“蛇形命名法”（Snake Case）：所有字母小写，单词之间用下划线 `_` 分隔。例如：`user_name`, `total_count`。

#### **基本数据类型：数据的种类**

Python 需要知道你要处理的数据是什么类型，以便进行正确的操作。

*   `int` (Integer)：**整数**。就是没有小数部分的数字，比如 `-1`, `0`, `18`。
*   `float` (Floating-Point Number)：**浮点数**。就是我们常说的小数，比如 `3.14`, `-0.5`, `92.5`。
*   `bool` (Boolean)：**布尔值**。它非常特殊，只有两个值：`True` (真) 和 `False` (假)。通常用来表示判断的结果，比如“今天下雨了吗？”的答案。
*   `str` (String)：**字符串**。就是任意的文本，必须用单引号 `'...'` 或双引号 `"..."` 括起来。
*   `NoneType`: **空值**。它也只有一个值 `None`，表示“什么都没有”。它不是 0，也不是空字符串，就是纯粹的“无”或“不存在”。

```python
age = 18            # 这是一个 int 类型的变量
score = 92.5        # 这是一个 float 类型的变量
is_freshman = True  # 这是一个 bool 类型的变量
note = "Python"     # 这是一个 str 类型的变量
nothing = None      # 这是一个 NoneType 类型的变量```

#### **字符串的更多玩法**

*   **转义字符**：如果字符串里本身就包含特殊符号，比如换行，怎么办？可以用 `\` (反斜杠) 来“转义”。
    ```python
    # \n 是一个转义序列，它不表示字母 n，而表示一个“换行符”。
    s = "hello\nworld"
    print(s)
    # 输出会是两行：
    # hello
    # world
    ```

*   **原始字符串**：如果你不希望 `\` 有任何特殊含义（比如在表示 Windows 文件路径时），可以在字符串前面加一个 `r`。
    ```python
    # r"" 告诉 Python，这里面的所有字符都是它本身的样子，无需转义。
    raw_path = r"C:\path\file"
    ```

*   **多行字符串**：用三个单引号或三个双引号可以创建包含多行内容的字符串。
    ```python
    multi_line_text = """这是一个
    可以跨越多行的
    字符串。"""
    ```

#### **类型转换与检查**

*   **转换**：有时候，你需要把一种类型的数据转换成另一种。
    ```python
    # input() 函数返回的永远是字符串 "123"，而不是数字 123。
    # 我们需要用 int() 函数把它转换成整数才能进行数学运算。
    num_str = "123"
    num_int = int(num_str)

    # 同样，可以转换成浮点数或字符串。
    float("3.14")   # 得到浮点数 3.14
    str(3.14)       # 得到字符串 "3.14"
    ```

*   **检查**：如果你不确定一个变量是什么类型，可以用 `isinstance()` 函数来检查。
    ```python
    # 这行代码的意思是：“变量 num_int 是不是 int 类型？”
    isinstance(num_int, int)  # 返回 True
    ```

#### **练习**

1.  编写一个程序，让用户输入两个**数字**（注意 `input` 返回的是字符串！），然后计算并输出它们的和与平均值（平均值要求保留两位小数）。

---

### **表达式与运算符：让数据动起来**

有了数据，我们就要对它们进行计算、比较和组合。**运算符**（Operator）就是执行这些操作的符号。

*   **算术运算符**：进行数学计算。
    *   `+`, `-`, `*`, `/`: 加、减、乘、除。
    *   `//`: **整除**。只保留结果的整数部分，例如 `7 // 2` 结果是 `3`。
    *   `%`: **取模**（求余数）。例如 `7 % 2` 结果是 `1`。
    *   `**`: **乘方**。例如 `2 ** 3` 结果是 `8` (2的3次方)。

*   **比较运算符**：比较两个值，结果永远是一个布尔值 (`True` 或 `False`)。
    *   `==`: 等于（注意是两个等号！）
    *   `!=`: 不等于
    *   `<`, `<=`, `>`, `>=`: 小于、小于等于、大于、大于等于。

*   **逻辑运算符**：对布尔值进行“与、或、非”操作。
    *   `and`: **与**。两边都为 `True` 时，结果才为 `True`。
    *   `or`: **或**。只要有一边为 `True`，结果就为 `True`。
    *   `not`: **非**。把 `True` 变成 `False`，`False` 变成 `True`。

*   **赋值运算符**：简化赋值操作。
    *   `x = 5` 是基础赋值。
    *   `x += 1` 等价于 `x = x + 1`。其他如 `-=`, `*=`, `/=` 类似。

*   **成员运算符**：检查一个元素是否存在于一个序列（如字符串或列表）中。
    *   `in`, `not in`: ` "a" in "apple" ` 的结果是 `True`。

**示例解读**：
```python
x = 7
# 这个表达式分为三部分，从左到右计算：
# 1. (x % 2 == 1): 7 除以 2 的余数是 1，1 == 1，所以这部分是 True。
# 2. (x < 10): 7 小于 10，所以这部分也是 True。
# 3. True and True: 逻辑“与”操作，两边都为真，最终结果是 True。
print(x % 2 == 1 and x < 10)  # 输出 True
```

#### **练习**

*   编写一个程序，让用户输入一个年份，程序判断并输出这是否是一个闰年。
    *   闰年规则：能被4整除但不能被100整除，或者能被400整除。

---

### **控制流程：指挥程序的执行顺序**

默认情况下，代码是从上到下一行行执行的。但我们经常需要根据不同的条件执行不同的代码，或者重复执行某些代码。这就是**控制流程**。

#### **条件语句 `if`：生活中的十字路口**

**概念**：`if` 语句让程序可以做出选择。就像“如果今天下雨，就带伞；否则，就带墨镜”。

**语法结构**：
```python
# 接收用户输入并转换为整数
score = int(input("请输入你的分数："))

# 开始判断
# if 后面跟着一个条件表达式，如果结果为 True，就执行冒号下面的代码块。
# 注意：代码块需要缩进！通常是 4 个空格。
if score >= 90:
    grade = "优秀"
# elif (else if) 是“否则，如果...”，可以有多个。
# 当前一个 if 或 elif 的条件不满足时，才会来检查这个条件。
elif score >= 80:
    grade = "良好"
# else 是“否则”，当前面所有 if 和 elif 的条件都不满足时，执行这里的代码。
else:
    grade = "及格"

print(f"你的等级是：{grade}")
```

#### **循环：让计算机做重复的工作**

**概念**：循环结构让一段代码可以重复执行多次。

*   **`for` 循环：按次数或按成员重复**
    `for` 循环特别适合遍历一个序列（比如一个列表或一个范围）中的每一个元素。

    ```python
    # range(5) 会生成一个从 0 到 4 的数字序列 (0, 1, 2, 3, 4)。
    # for 循环会依次取出这个序列中的每一个数字，赋值给变量 i，然后执行循环体内的代码。
    for i in range(5):
        print(f"这是第 {i+1} 次循环")
    ```

*   **`while` 循环：按条件重复**
    `while` 循环适合在不确定具体要循环多少次，但知道应该在什么条件下停止时使用。

    ```python
    i = 0
    # while 后面也跟着一个条件，只要这个条件为 True，循环就一直继续下去。
    while i < 5:
        print(i)
        i += 1 # 在循环体内必须有改变循环条件的语句，否则会造成“死循环”！
    ```

*   **控制循环：`break` 和 `continue`**
    *   `break`: **立即终止并跳出**整个循环。
    *   `continue`: **跳过本次循环的剩余部分**，直接进入下一次循环。

    ```python
    i = 0
    while True: # True 永远为真，这是一个无限循环，必须依靠 break 来退出。
        i += 1
        # 如果 i 是偶数...
        if i % 2 == 0:
            continue # ...就跳过下面的 print，直接开始下一次循环。

        # 如果 i 大于 7...
        if i > 7:
            break # ...就直接结束整个 while 循环。
        
        # 只有当 i 是奇数且不大于 7 时，才会执行这句 print。
        print(i)
    # 程序最终会打印: 1, 3, 5, 7
    ```

#### **练习**

*   使用 `for` 循环和 `range()` 函数，计算从 1 到 100 之间所有奇数的和。
*   使用 `while` 循环实现一个简单的“猜数字”游戏（程序随机想一个1到100的数，用户输入猜测，程序提示“大了”或“小了”，直到猜对为止）。

---

### **容器类型：存放多个数据的“大盒子”**

之前我们学习的变量一次只能存放一个数据。如果有很多数据，比如一个班所有学生的姓名，怎么办？这就需要**容器**类型。

#### **列表 `list`：有序、可变的购物清单**

*   **概念**：列表是一个可以存放任意多个元素的**有序**集合。
    *   **有序**：元素存放的顺序是固定的，你可以通过位置（索引）来访问它们。索引从 `0` 开始。
    *   **可变** (Mutable)：你可以在创建列表后，随时增加、删除或修改其中的元素。
*   **语法**：用方括号 `[]` 定义，元素间用逗号 `,` 分隔。

```python
# 创建一个列表
nums = [3, 1, 4, 1, 5, 9]

# --- 访问元素 ---
print(nums[0])   # 打印第一个元素，索引为 0，输出 3
print(nums[-1])  # -1 表示最后一个元素，输出 9

# --- 切片 (Slicing) ---
# 获取从索引 1 到索引 3 (不包含 3) 的子列表
print(nums[1:3]) # 输出 [1, 4]

# --- 修改列表 (因为它是可变的) ---
nums.append(2)   # 在列表末尾添加元素 2。现在 nums 是 [3, 1, 4, 1, 5, 9, 2]
nums.sort()      # 对列表进行排序。现在 nums 是 [1, 1, 2, 3, 4, 5, 9]
nums.pop()       # 删除并返回最后一个元素。

# 常用操作: append, extend, insert, pop, remove, sort, reverse, index, count
```

#### **元组 `tuple`：有序、不可变的“契约”**

*   **概念**：元组和列表非常相似，也是**有序**的，但它是**不可变**的 (Immutable)。
    *   **不可变**：一旦创建，你就不能再修改元组中的任何元素。
*   **为什么需要不可变？** 当你希望一份数据不被意外修改时，比如坐标点、函数返回的多个值等，元组更安全。
*   **语法**：用圆括号 `()` 定义。

```python
# 创建一个元组来表示一个点的坐标
point = (3, 4)

# 可以像列表一样访问元素
print(point[0]) # 输出 3

# point[0] = 5  # 这行代码会报错！因为元组是不可变的。

# 元组最常见的用法之一：拆包 (Unpacking)
# 把元组中的元素一次性赋值给多个变量
x, y = point
print(f"x坐标是{x}, y坐标是{y}")
```

#### **字典 `dict`：按名字查找的电话簿**

*   **概念**：字典存储的是**键值对 (key-value pair)** 的集合。它**无序**（在旧版Python中）且**可变**。它不通过位置索引，而是通过唯一的“键”（key）来查找对应的“值”（value）。就像用名字（键）查电话号码（值）。
*   **语法**：用花括号 `{}` 定义，每个元素是 `key: value` 的形式。

```python
# 创建一个字典来存储用户信息
user = {"name": "Li Lei", "age": 18, "city": "Beijing"}

# --- 访问与修改 ---
print(user["name"])   # 通过键 'name' 访问值，输出 "Li Lei"

user["school"] = "PKU" # 添加一个新的键值对
user["age"] = 19      # 修改已存在的键 'age' 对应的值

# --- 安全的访问方式 ---
# 如果键不存在，用 [] 访问会报错。
# 使用 .get() 方法更安全，如果键不存在，它会返回 None (或你指定的默认值)。
print(user.get("phone", "未知")) # 输出 "未知"

# --- 遍历字典 ---
# 遍历所有的键值对
for key, value in user.items():
    print(f"{key} -> {value}")
```

#### **集合 `set`：不重复元素的“标签云”**

*   **概念**：集合是一个**不重复**元素的**无序**集合。
    *   **不重复**：集合最大的特点是自动去重。
    *   **无序**：你不能通过索引来访问集合中的元素。
*   **主要用途**：去重、判断成员是否存在、进行数学上的集合运算（交集、并集等）。
*   **语法**：用花括号 `{}` 定义，或者用 `set()` 函数。

```python
# 集合会自动去除重复的元素
s = {1, 2, 2, 3, 1, 4}
print(s)  # 输出 {1, 2, 3, 4}

s.add(5)  # 添加元素

# 检查元素是否存在（效率非常高）
print(2 in s) # 输出 True
```

#### **推导式：高效创建容器的“魔法”**

**概念**：推导式（Comprehension）是一种非常 Pythonic 的、简洁优雅的创建列表、字典或集合的语法。

*   **列表推导式**：
    假设我们想创建一个包含 0 到 9 的平方数的列表。
    **传统方法 (for 循环)**：
    ```python
    squares = []
    for x in range(10):
        squares.append(x * x)
    ```
    **推导式方法**：
    ```python
    # 这行代码读作：“对于 0 到 9 中的每一个 x，计算 x*x，然后把所有结果收集到一个新列表中。”
    squares = [x * x for x in range(10)]
    print(squares) # 输出 [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
    ```
    推导式不仅代码更短，通常执行效率也更高。

*   **字典和集合推导式**：语法类似。
    ```python
    # 创建一个奇数的平方数的集合
    odd_squares = {x * x for x in range(10) if x % 2 != 0}
    # 创建一个字符到其索引的映射字典
    index_map = {c: i for i, c in enumerate("abc")}
    # -> {'a': 0, 'b': 1, 'c': 2}
    ```

#### **练习**

*   有一个成绩表（字典）：`scores = {"张三": 88, "李四": 92, "王五": 75}`，请编写程序计算并输出平均分，以及最高分的同学和他的分数。
*   给定一段英文文本（一个长字符串），统计其中每个单词出现的次数，并输出出现频率最高的前5个单词及其次数。（提示：可以用字符串的 `.split()` 方法分割单词，字典来存储计数）。

---

### **函数：把“步骤”打包复用**

**概念**：函数（Function）是一段**可重复使用**的、用来执行特定任务的代码块。如果你发现自己在好几个地方都在写同样的代码，那就应该把它封装成一个函数。这遵循了编程中一个重要的原则：**DRY (Don't Repeat Yourself)**。

#### **定义与调用**

*   **定义**：使用 `def` 关键字来创建一个函数。
*   **调用**：使用函数名加上括号 `()` 来执行它。

```python
# --- 定义函数 ---
# def 关键字，后面是函数名 add，然后是括号里的参数列表 (a, b)。
def add(a, b):
    # 函数体第一行可选地使用一个“文档字符串”(docstring)来解释函数的功能。
    """这个函数接收两个数字 a 和 b，并返回它们的和。"""
    # 函数体内的代码需要缩进
    result = a + b
    # return 关键字用来指定函数的返回值。如果一个函数没有 return，它默认返回 None。
    return result

# --- 调用函数 ---
# 调用 add 函数，并把 3 和 5 作为“实际参数”传递进去。
# 函数执行后返回的值被存储在 sum_value 变量中。
sum_value = add(3, 5)
print(sum_value) # 输出 8
```

#### **参数的学问**

函数如何接收输入？这就是参数（Parameter）的职责。

*   **位置参数**：调用时按顺序传入，`add(3, 5)` 中 `a` 得到 `3`，`b` 得到 `5`。
*   **关键字参数**：调用时明确指定参数名，可以不按顺序，`add(b=5, a=3)`。
*   **默认值参数**：定义函数时可以给参数一个默认值。调用时如果不传这个参数，它就会使用默认值。

    ```python
    # title 参数有一个默认值 "同学"
    def greet(name, title="同学"):
        print(f"你好，{title} {name}！")
    
    greet("张三")         # 输出: 你好，同学 张三！
    greet("李四", title="老师") # 输出: 你好，老师 李四！
    ```

*   **可变参数 `*args` 和 `**kwargs`** (初学者了解即可)：
    *   `*args`：允许你传入任意数量的**位置参数**，它们会被收集到一个元组里。
    *   `**kwargs`：允许你传入任意数量的**关键字参数**，它们会被收集到一个字典里。

#### **变量的作用域**

**概念**：作用域（Scope）指的是一个变量能够被访问的区域。
*   **局部变量** (Local Variable)：在函数内部定义的变量，只在该函数内部有效。
*   **全局变量** (Global Variable)：在所有函数外部定义的变量，在整个程序中都有效。

```python
# global_var 是一个全局变量
global_var = 100

def my_function():
    # local_var 是一个局部变量，只在 my_function 内部存在
    local_var = 10
    print(f"在函数内部可以访问局部变量: {local_var}")
    print(f"在函数内部也可以访问全局变量: {global_var}")

my_function()
# print(local_var) # 这行代码会报错！因为在函数外部无法访问局部变量。
```
**最佳实践**：尽量使用函数参数和返回值来传递数据，减少对全局变量的依赖，这样能让你的程序结构更清晰，更不容易出错。

#### **文档字符串与类型标注**

*   **文档字符串 (Docstring)**：函数定义下的第一个字符串，用 `"""..."""` 括起来，用于解释函数的功能、参数和返回值。这是非常好的编程习惯，能让别人（以及未来的你）快速理解你的代码。
*   **类型标注 (Type Hinting)**：在参数名后用 `: type`，在函数名后用 `-> type` 来“建议”这个参数或返回值应该是什么类型。它对程序运行没有强制约束，但能极大地增强代码的可读性，并且编辑器（如 VS Code）可以利用它来提供更好的代码提示和错误检查。

```python
import math

# 这是一个带有良好文档和类型标注的函数
def circle_area(radius: float) -> float:
    """
    计算圆的面积。

    :param radius: 圆的半径 (必须是正数)。
    :return: 计算出的圆的面积。
    """
    return math.pi * radius * radius
```

#### **练习**

*   编写一个函数 `normalize(text: str) -> str`，它接收一个字符串，并完成以下操作后返回新的字符串：
    1.  去掉字符串首尾的空白字符。
    2.  将字符串中连续的多个空白字符（空格、制表符等）合并成一个空格。
    3.  将整个字符串的第一个字母大写，其余字母小写。

---

### **异常与错误处理：为程序装上“安全气囊”**

**概念**：程序在运行时可能会遇到各种错误，比如用户输入了无效的数据、要读取的文件不存在、网络中断等。这些在运行时发生的错误被称为**异常** (Exception)。如果不处理这些异常，程序就会崩溃并退出。**异常处理**机制就是让我们能“捕获”这些错误，并执行预先写好的补救代码，让程序更健壮。

**语法结构 `try...except`**：
这就像是给代码买了一份保险。

```python
# 我们把可能会出错的“危险代码”放在 try 代码块中。
try:
    num_str = input("请输入一个整数：")
    x = int(num_str) # 这行可能因为用户输入非数字而触发 ValueError
    result = 10 / x  # 这行可能因为 x 为 0 而触发 ZeroDivisionError
    
# 如果 try 块中发生了 ValueError 类型的异常...
except ValueError:
    # ...就执行这个 except 块里的代码。
    print("输入无效，请输入一个合法的整数！")

# 如果 try 块中发生了 ZeroDivisionError 类型的异常...
except ZeroDivisionError:
    # ...就执行这个 except 块里的代码。
    print("除数不能为 0！")

# else 块是可选的。如果 try 块中没有发生任何异常，就会执行 else 块。
else:
    print(f"10 除以 {x} 的结果是 {result}")

# finally 块也是可选的。无论是否发生异常，finally 块中的代码总会被执行。
# 通常用于做一些清理工作，比如关闭文件。
finally:
    print("程序执行结束。")
```

#### **其他相关概念**

*   **自定义异常** (进阶)：你可以通过继承 `Exception` 类来创建自己的异常类型，使错误信息更具体。
*   **断言 `assert`** (调试用)：`assert` 语句用来断言某个条件必须为真，否则就抛出异常。它主要用于开发和调试阶段，检查程序的不变量，而不是用于处理用户输入等运行时错误。
    `assert x > 0, "x 的值必须是正数"`

#### **练习**

*   编写一个安全的输入函数 `safe_input_int(prompt: str) -> int`。这个函数会持续提示用户输入，直到用户输入一个有效的整数为止，然后返回这个整数。在函数内部使用 `try...except` 来处理 `ValueError`。

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
