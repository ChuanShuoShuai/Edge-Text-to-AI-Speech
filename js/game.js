// ↓ 启用严格模式
"use strict";
$(document).ready(function () {
  // ↓ 定义常量 click_count 为浮点数
  let click_count = 1;
  $("#game_start_button").click(function () {
    click_count++;
  });
  // ↑ 检测按键 id 为 game_start_button 按钮的点击操作并增加常量值
  function checkTimes() {
    // ↓当常量值为 3 时启用以下代码
    if (click_count == 3) {
      // ↓ 定义一个新的 ID 为 gameMadalPre 的对话框
      var gameModal = new bootstrap.Modal(
        document.getElementById("gameModalPre"),
        {
          keyboard: false,
        }
      );
      // ↓ 启动对话框
      gameModal.toggle();
      // ↓ 结束循环判断
      clearInterval(interval);
    }
  }
  // ↑ 判断点击次数的函数
  let interval = setInterval(checkTimes, 200);
  // 定义一个 setInterval 方法无限执行判断
});
