/**重置message，防止重复点击重复弹出message弹框 */
import { Message } from "element-ui";
let messageInstance = null;
let mainMessage = function DoneMessage(options) {
  if (messageInstance) {
    messageInstance.close();
  }
  messageInstance = Message(options);
};
let arr = ["success", "warning", "info", "error"];
arr.forEach(function(type) {
  mainMessage[type] = function(options) {
    if (typeof options === "string") {
      options = {
        message: options
      };
    }
    options.type = type;
    return mainMessage(options);
  };
});
export const message = mainMessage;
