/**
 * 纯函数: pure function
 * 1.永远不会试图修改输入的参数;
 * 2.相同的输入一定会产生相同的输出;
 *
 */
function withdraw(account) {
    account.balance -= 100;
}

function sum() {
    return Math.random() + num;
}