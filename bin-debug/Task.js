var tasks = [
    { id: "task_00", name: "交谈1", desc: "和另一个NPC交谈", fromNPCid: "npc_0", toNPCid: "npc_0" },
    { id: "task_01", name: "交谈2", desc: "交谈回复，和之前NPC交谈", fromNPCid: "npc_1", toNPCid: "npc_0" },
];
var Task = (function () {
    function Task(id, name, desc, status, fromNPCid, toNPCid) {
        this.id = id;
        this.desc = desc;
        this.name = name;
        this.desc = desc;
        this.status = status;
        this.fromNPCid = fromNPCid;
        this.toNPCid = toNPCid;
    }
    var d = __define,c=Task,p=c.prototype;
    return Task;
}());
egret.registerClass(Task,'Task');
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["UNACCEPTED"] = 0] = "UNACCEPTED";
    TaskStatus[TaskStatus["ACCEPTED"] = 1] = "ACCEPTED";
    TaskStatus[TaskStatus["DURING"] = 2] = "DURING";
    TaskStatus[TaskStatus["CAN_SUBMIT"] = 3] = "CAN_SUBMIT";
    TaskStatus[TaskStatus["SUBMITTED"] = 4] = "SUBMITTED";
})(TaskStatus || (TaskStatus = {}));
//# sourceMappingURL=Task.js.map