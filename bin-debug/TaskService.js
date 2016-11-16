var TaskService = (function () {
    function TaskService() {
        this.observerList = [];
        this.taskList = [];
        TaskService.count++;
        if (TaskService.count > 1) {
            throw 'singleton';
        }
    }
    var d = __define,c=TaskService,p=c.prototype;
    TaskService.getInstance = function () {
        if (TaskService.instance == null) {
            TaskService.instance = new TaskService();
        }
        return TaskService.instance;
    };
    p.TaskFinish = function (id) {
        for (var _i = 0, _a = this.taskList; _i < _a.length; _i++) {
            var task0 = _a[_i];
            if (task0.id == id) {
                task0.status = TaskStatus.SUBMITTED;
                this.notify(task0);
                this.notifies();
            }
        }
    };
    p.TaskCanSubmit = function (id) {
        for (var _i = 0, _a = this.taskList; _i < _a.length; _i++) {
            var task0 = _a[_i];
            if (task0.id == id) {
                task0.status = TaskStatus.CAN_SUBMIT;
                this.notify(task0);
            }
        }
    };
    //  canAccept (id:String) {
    //     for(let task0 of this.taskList) {
    //         if(task0.id==id) {
    //             task0.status=TaskStatus.ACCEPTED;
    //             this.notify(task0);
    //         }
    //     }
    // }
    p.TaskDuring = function (id) {
        for (var _i = 0, _a = this.taskList; _i < _a.length; _i++) {
            var task0 = _a[_i];
            if (task0.id == id) {
                task0.status = TaskStatus.DURING;
                this.notify(task0);
            }
        }
    };
    p.getTaskBYCustomRule = function (NPCrule, npc) {
        return NPCrule(this.taskList, npc);
    };
    p.notify = function (task0) {
        for (var _i = 0, _a = this.observerList; _i < _a.length; _i++) {
            var observer0 = _a[_i];
            observer0.onChange(task0);
        }
    };
    p.notifies = function () {
        for (var _i = 0, _a = this.observerList; _i < _a.length; _i++) {
            var observer0 = _a[_i];
            for (var _b = 0, _c = this.taskList; _b < _c.length; _b++) {
                var task0 = _c[_b];
                observer0.onChange(task0);
                if (task0.id == tasks[0].id && task0.status == 4) {
                    for (var _d = 0, _e = this.taskList; _d < _e.length; _d++) {
                        var task1 = _e[_d];
                        if (task1.id == tasks[1].id && task1.status == 0) {
                            task1.status = TaskStatus.ACCEPTED;
                            this.notify(task1);
                        }
                    }
                }
            }
        }
    };
    TaskService.count = 0;
    return TaskService;
}());
egret.registerClass(TaskService,'TaskService');
//# sourceMappingURL=TaskService.js.map