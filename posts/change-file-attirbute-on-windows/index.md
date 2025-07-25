---
title: '如何在 Windows 上更改文件属性'
date: '2025-06-17'
category: '系统'
tags: ['windows']
abstract: '使用本指南中的方法，可以调整 Windows 文件的日期和其他元数据。'
---

# 如何在 Windows 上更改文件属性

Windows 会记录文件的创建时间、作者以及上次修改时间。此信息称为文件属性，可用于按日期、作者姓名和其他参数对文件进行排序。

问题在于，共享文件需要共享所有这些信息。为了防止这种情况，你可以修改这些属性。

如果你不希望接收者知道实际的文件属性，请按以下方法删除或修改它们。

## 使用 PowerShell 修改

首先，在 Windows 搜索中输入“PowerShell”，右键单击，并以管理员身份运行。

然后，导航到要更改其属性的文件或文件夹所在的目录。键入 `cd..` 会返回上一个文件夹，键入 `cd file_name` 会移至下一个文件夹。

移至所需目录后，键入以下命令可以修改文件的创建日期：

```sh
$(Get-Item File-name).creationtime=$(Get-Date "mm/dd/yyyy")
```

其中，`File-name` 是需要修改的文件名，`mm/dd/yyyy` 是需要修改的文件创建日期（也可以是 `yyyy-mm-dd` 或 `mm/dd/yyyy hh:MM:ss` 以加上具体时间）。

如果 PowerShell 没有显示任何错误，并再次将你带到同一目录，则确认属性已成功更改。

同样，你可以键入以下两个命令来更改文件的修改日期和访问日期：

```sh
$(Get-Item File-Name).lastwritetime=$(Get-Date "mm/dd/yyyy")
$(Get-Item File-Name).lastaccesstime=$(Get-Date "mm/dd/yyyy")
```

::: warning 注意
Windows 会对文件属性进行实时更改。因此，请勿在更改属性后修改或访问该文件，因为这会再次更改修改和访问日期。
:::

## 使用属性更改器修改

属性更改器应用程序可以让用户更改文件属性，包括创建、修改或访问文件的时间。请按照以下步骤修改：

1. 访问 [PETGES](https://www.petges.lu/) 官方网站。
2. 下载属性更改器的完整安装程序（Full setup），不要下载便携版本（Portable），因为它可能无法正常运行。
3. 下载软件后，运行安装文件并按照屏幕上的说明进行安装。
4. 如果软件要求，重新启动你的设备，否则没有必要。
5. 导航到包含要修改其属性的文件的文件夹。
6. 右键单击该文件，然后从上下文菜单中选择【更改属性】以打开该软件。如果你使用的是 Windows 11，可能需要点击【显示更多选项】才能在菜单中显示此选项。
7. 应用程序打开后，选中【修改日期和时间戳】旁边的框以使日期字段可编辑。
8. 根据你的偏好更改首次创建文件以及上次访问或修改文件的日期和时间。
9. 完成更改后，单击【应用】使更改永久生效。
10. 在弹出的确认窗口中点击【是】，文件属性更改成功。

就像上面更改文件的属性一样，你也可以使用属性更改器更改文件夹的属性。

::: warning 注意
使用第三方工具修改属性需要你授权应用程序访问文件的权限。因此，如果你要修改的文件属于机密文件，请勿使用第三方应用程序，应该使用 Windows 提供的[官方方法](#使用-powershell-修改)。
:::

## 删除其他文件属性

虽然文件资源管理器不允许修改关键信息（例如创建日期、修改日期和访问日期），但它允许用户删除特定属性，例如作者、版权信息、修订号等。请按照以下步骤删除：

1. 导航到要更改属性的文件夹。
2. 右键单击并从菜单中选择【属性】。
3. 导航至窗口顶部的【详细信息】选项卡。
4. 单击【删除属性和个人信息】链接。
5. 要自动删除所有可能的属性，请选中【创建删除所有可能的属性的副本】旁边的圆圈。删除所有可能的属性后，这将在确切位置创建文件的副本。
6. 要删除选定的属性，请选中【从此文件中删除以下属性】旁边的圆圈，选择删除的属性，然后单击【确定】。

---

::: danger 注意
修改文件属性可以隐藏作者信息、修订号和其他详细信息（例如文件创建、修改或访问时间）。

推荐使用 [PowerShell 修改](#使用-powershell-修改)。如果你发现它很复杂或想要更多地控制属性的更改方式，可以使用[属性更改器修改](#使用属性更改器修改)。

请注意所涉及的隐私风险。
:::
