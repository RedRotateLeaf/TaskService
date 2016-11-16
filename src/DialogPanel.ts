class DialogPanel extends egret.DisplayObjectContainer {
    count = 0;
    NPCName: string;
    TaskNameText = new egret.TextField();
    TaskDescText = new egret.TextField();;
    DialogLogo: egret.Bitmap;
    stageH = 1136; stageW = 640;
    ButtonStatus = 0;
    taskid: string;
    FirstButton: egret.Bitmap;
    CancelButton: egret.Bitmap;
    OKButton: egret.Bitmap;
    constructor() {
        super();
        this.DialogLogo = this.createBitmapByName("Dialog_png", 1);
        this.x = 0;
        this.y = this.stageH - this.DialogLogo.height;
        this.addChild(this.DialogLogo);

        this.FirstButton = this.createBitmapByName("Accept_png", 2);
        this.OKButton = this.createBitmapByName("Submit_png", 2);
        this.FirstButton.x = this.OKButton.x = this.stageW - 300 - this.x; this.FirstButton.y = this.OKButton.y = this.stageH - 100 - this.y;
        this.FirstButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ClickEvent, this);
        // this.FirstButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.FirstClickEnvent_Start, this);

        this.OKButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ClickEvent, this);

        this.CancelButton = this.createBitmapByName("Cancel_png", 2);
        this.CancelButton.x = this.stageW - 150 - this.x; this.CancelButton.y = this.stageH - 100 - this.y;
        this.CancelButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.DialogClose, this);
        this.addChild(this.CancelButton);

        this.TaskNameText.x = 30; this.TaskNameText.y = 50;
        this.addChild(this.TaskNameText);
        this.TaskDescText.x = 30; this.TaskDescText.y = 100;
        this.TaskDescText.text = "";
        this.addChild(this.TaskDescText);


    }
    ClickEvent() {

        if (this.ButtonStatus == 1) {
            var Dialog_task: TaskService = TaskService.getInstance();
            Dialog_task.TaskDuring(this.taskid);
            if (this.taskid == tasks[1].id) {
                Dialog_task.TaskCanSubmit(this.taskid);
            }
        }
        if (this.ButtonStatus == 2) {
            var Dialog_task: TaskService = TaskService.getInstance();
            Dialog_task.TaskFinish(this.taskid);
        }
        this.DialogClose();

    }

    FirstClickEnvent_Start() {
        this.FirstButton.texture = RES.getRes("Accept1_png");
    }
    CancelClickEnvent_Start() {
        this.CancelButton.texture = RES.getRes("Cancel1_png");
    }
    OKClickEnvent_Start() {
        this.OKButton.texture = RES.getRes("Submit1_png");
    }



    public onShow() {
        this.count++;
        this.TaskNameText.text = this.NPCName;
        this.CancelButton.touchEnabled = true;
    }
    public Show(task: Task) {
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
    }
    public DialogClose() {
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
    }
    private createBitmapByName(name: string, i: number): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        if (i == 1) {
            result.width = this.stageW;
        }
        if (i == 2) {
            result.width = 100;
            result.height = 50;
        }
        return result;
    }
}