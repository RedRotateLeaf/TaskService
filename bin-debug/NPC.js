var NPCs = [
    { id: "npc_0", Name: "NPCA", Pic: "NPC_jpg" },
    { id: "npc_1", Name: "NPCB", Pic: "NPC_jpg" },
];
var emojis = [
    { name: "" },
    { name: "Exclaimation1_png" },
    { name: "Question0_png" },
    { name: "Question1_png" },
    { name: "" },
];
var NPC = (function (_super) {
    __extends(NPC, _super);
    function NPC(i, npcwp) {
        _super.call(this);
        this.Emojiwidth = 100;
        this.Emojiheight = 100;
        this.Panelwidth = 150;
        this.Panelheight = 200;
        this.id = NPCs[i].id;
        this.NPCName = NPCs[i].Name;
        this.NPCPic = this.createBitmapByName(NPCs[i].Pic, 0);
        this.addChild(this.NPCPic);
        this.NPCemoji = this.createBitmapByName(emojis[0].name, 1);
        this.addChild(this.NPCemoji);
        this.NPCemoji.x += this.NPCPic.width / 5;
        this.NPCemoji.y -= this.NPCPic.height / 4;
        this.NPCPanel = npcwp;
    }
    var d = __define,c=NPC,p=c.prototype;
    p.onChange = function (task) {
        if (task.fromNPCid == this.id) {
            if (task.status == 1)
                this.NPCemoji.texture = RES.getRes(emojis[1].name);
            if (task.status == 2)
                this.NPCemoji.texture = RES.getRes(emojis[0].name);
        }
        if (task.toNPCid == this.id && task.status > 1) {
            var i;
            for (i = 0; true; i++) {
                if (TaskStatus[TaskStatus[i]] == task.status) {
                    this.NPCemoji.texture = RES.getRes(emojis[i].name);
                    break;
                }
            }
        }
    };
    p.onNPCClick = function () {
        this.NPCPanel.NPCName = this.NPCName;
        var tas = TaskService.getInstance();
        var ta = tas.getTaskBYCustomRule(this.NPCRule, this);
        if (ta != null) {
            this.NPCPanel.Show(ta);
        }
    };
    p.NPCRule = function (tasks, npc) {
        var ta;
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].toNPCid == npc.id) {
                if (tasks[i].status != 0 && tasks[i].status != 4 && tasks[i].status != 1) {
                    ta = tasks[i];
                    return ta;
                }
            }
            if (tasks[i].fromNPCid == npc.id) {
                if (tasks[i].status == 1) {
                    ta = tasks[i];
                    return ta;
                }
            }
        }
        return null;
    };
    p.createBitmapByName = function (name, i) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        if (i == 0) {
            result.width = this.Panelwidth;
            result.height = this.Panelheight;
        }
        if (i == 1) {
            result.width = this.Emojiwidth;
            result.height = this.Emojiheight;
        }
        return result;
    };
    return NPC;
}(egret.DisplayObjectContainer));
egret.registerClass(NPC,'NPC',["Observer"]);
//# sourceMappingURL=NPC.js.map