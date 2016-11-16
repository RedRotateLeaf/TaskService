var TaskPanel = (function (_super) {
    __extends(TaskPanel, _super);
    function TaskPanel() {
        _super.call(this);
        this.stageH = 1136;
        this.stageW = 640;
        this.Tasks = [];
        this.TaskText = [];
        this.TaskPanelBackground = this.createBitmapByName("Background_png");
        this.TaskPanelBackground.width = this.stageW;
        this.TaskPanelBackground.y = 20;
        this.TaskPanelBackground.height = this.stageH - this.TaskPanelBackground.y * 2;
        this.ButtonCancel = this.createBitmapByName("Cancel_png");
        this.ButtonCancel.width = 100;
        this.ButtonCancel.height = 50;
        this.ButtonCancel.touchEnabled = true;
        this.addChild(this.TaskPanelBackground);
        this.addChild(this.ButtonCancel);
        this.ButtonCancel.x = 100;
        this.ButtonCancel.y = 200;
        this.ButtonCancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
    var d = __define,c=TaskPanel,p=c.prototype;
    p.onChange = function (task) {
        if (task.status >= 2 && task.status < 4) {
            var k = 0;
            for (var i = 0; i < this.Tasks.length; i++) {
                if (task.id == this.Tasks[i].id) {
                    this.Tasks.splice(i, 1, task);
                    k++;
                }
            }
            if (k == 0) {
                this.Tasks.push(task);
            }
        }
        if (task.status == 4) {
            for (var i = 0; i < this.Tasks.length; i++) {
                if (task.id == this.Tasks[i].id) {
                    this.Tasks.splice(i, 1);
                }
            }
        }
    };
    p.onButtonClick = function () {
        this.onClose();
    };
    p.onShow = function () {
        var i = 0;
        for (i; i < this.Tasks.length && this.Tasks.length != 0; i++) {
            var tx = new egret.TextField();
            this.TaskText.push(tx);
            this.TaskText[i].text = this.Tasks[i].name + "  " + this.Tasks[i].desc;
            this.addChild(this.TaskText[i]);
            this.TaskText[i].x = 50;
            this.TaskText[i].y = 150 + 100 * i;
        }
    };
    p.onClose = function () {
        for (var i = 0; i < this.TaskText.length; i++) {
            this.removeChild(this.TaskText[i]);
        }
        this.TaskText.splice(0, this.TaskText.length);
        this.parent.removeChild(this);
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return TaskPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(TaskPanel,'TaskPanel',["Observer"]);
//# sourceMappingURL=TaskPanel.js.map