var DialogPanel = (function (_super) {
    __extends(DialogPanel, _super);
    function DialogPanel() {
        _super.call(this);
        this.count = 0;
        this.TaskNameText = new egret.TextField();
        this.TaskDescText = new egret.TextField();
        this.stageH = 1136;
        this.stageW = 640;
        this.ButtonStatus = 0;
        this.DialogLogo = this.createBitmapByName("Dialog_png", 1);
        this.x = 0;
        this.y = this.stageH - this.DialogLogo.height;
        this.addChild(this.DialogLogo);
        this.FirstButton = this.createBitmapByName("Accept_png", 2);
        this.OKButton = this.createBitmapByName("Submit_png", 2);
        this.FirstButton.x = this.OKButton.x = this.stageW - 300 - this.x;
        this.FirstButton.y = this.OKButton.y = this.stageH - 100 - this.y;
        this.FirstButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ClickEvent, this);
        // this.FirstButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.FirstClickEnvent_Start, this);
        this.OKButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ClickEvent, this);
        this.CancelButton = this.createBitmapByName("Cancel_png", 2);
        this.CancelButton.x = this.stageW - 150 - this.x;
        this.CancelButton.y = this.stageH - 100 - this.y;
        this.CancelButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.DialogClose, this);
        this.addChild(this.CancelButton);
        this.TaskNameText.x = 30;
        this.TaskNameText.y = 50;
        this.addChild(this.TaskNameText);
        this.TaskDescText.x = 30;
        this.TaskDescText.y = 100;
        this.TaskDescText.text = "";
        this.addChild(this.TaskDescText);
    }
    var d = __define,c=DialogPanel,p=c.prototype;
    ;
    p.ClickEvent = function () {
        if (this.ButtonStatus == 1) {
            var Dialog_task = TaskService.getInstance();
            Dialog_task.TaskDuring(this.taskid);
            if (this.taskid == tasks[1].id) {
                Dialog_task.TaskCanSubmit(this.taskid);
            }
        }
        if (this.ButtonStatus == 2) {
            var Dialog_task = TaskService.getInstance();
            Dialog_task.TaskFinish(this.taskid);
        }
        this.DialogClose();
    };
    p.FirstClickEnvent_Start = function () {
        this.FirstButton.texture = RES.getRes("Accept1_png");
    };
    p.CancelClickEnvent_Start = function () {
        this.CancelButton.texture = RES.getRes("Cancel1_png");
    };
    p.OKClickEnvent_Start = function () {
        this.OKButton.texture = RES.getRes("Submit1_png");
    };
    p.onShow = function () {
        this.count++;
        this.TaskNameText.text = this.NPCName;
        this.CancelButton.touchEnabled = true;
    };
    p.Show = function (task) {
        this.taskid = task.id;
        this.TaskDescText.text = task.desc;
        if (task.status == 1) {
            this.addChild(this.FirstButton);
            this.FirstButton.touchEnabled = true;
            this.ButtonStatus = 1;
        }
        if (task.status == 3) {
            this.addChild(this.OKButton);
            this.OKButton.touchEnabled = true;
            this.ButtonStatus = 2;
        }
    };
    p.DialogClose = function () {
        if (this.count != 0) {
            if (this.ButtonStatus == 1) {
                this.removeChild(this.FirstButton);
                this.FirstButton.touchEnabled = false;
                this.ButtonStatus = 0;
            }
            if (this.ButtonStatus == 2) {
                this.removeChild(this.OKButton);
                this.OKButton.touchEnabled = false;
                this.ButtonStatus = 0;
            }
            this.parent.removeChild(this);
            this.count = 0;
            this.NPCName = "";
            this.TaskDescText.text = "";
            this.CancelButton.touchEnabled = false;
        }
    };
    p.createBitmapByName = function (name, i) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        if (i == 1) {
            result.width = this.stageW;
        }
        if (i == 2) {
            result.width = 100;
            result.height = 50;
        }
        return result;
    };
    return DialogPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(DialogPanel,'DialogPanel');
//# sourceMappingURL=DialogPanel.js.map