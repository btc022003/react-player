# virtualbox 文件夹共享

```bash
  # 在virtualbox界面上依次选择： 设备-->安装增强功能
  mount /dev/cdrom /mnt
  cd /mnt
  sudo ./VBoxLinuxAdditions.run

 # 安装完成后在virtualbox界面依次选择：设置-->共享文件夹-->添加共享文件夹-->共享文件夹路径选择你需要映射的主机共享路径-->输入共享文件夹名称（downloads这是我写的名称）-->勾选固定分配 （其他两个 自动挂载、只读分配 看情况自己选择）

 # 依次执行以下几个命令：
 sudo umount /mnt (取消之前的挂载）
 sudo mount -t vboxsf /downloads /mnt
```
