class TaskService {

    public observerList:Observer[]=[];
    public taskList:Task[]=[];
    private static instance;
    private static count =0;
    constructor (){
        TaskService.count++;
        if(TaskService.count >1){
            throw 'singleton';
        }
    }
    public static getInstance() {
        if(TaskService.instance ==null) {
            TaskService.instance =new TaskService();
        }
        return TaskService.instance;
    }

    TaskFinish (id:String) {
        for(let task0 of this.taskList) {
            if(task0.id==id) {
                task0.status=TaskStatus.SUBMITTED;
                this.notify(task0);
                this.notifies();
            }
        }
    }
    TaskCanSubmit (id:String) {
        for(let task0 of this.taskList) {
            if(task0.id==id) {
                task0.status=TaskStatus.CAN_SUBMIT;
                this.notify(task0);
            }
        }
    }
    //  canAccept (id:String) {
    //     for(let task0 of this.taskList) {
    //         if(task0.id==id) {
    //             task0.status=TaskStatus.ACCEPTED;
    //             this.notify(task0);
    //         }
    //     }
    // }
    TaskDuring (id:String) {
         for(let task0 of this.taskList) {
            if(task0.id==id) {
                task0.status=TaskStatus.DURING;
                this.notify(task0);
            }
        }

    }
    public getTaskBYCustomRule(NPCrule:Function,npc:NPC):Task{
        return NPCrule(this.taskList, npc);
    }
    notify(task0: Task) {
        for (let observer0 of this.observerList) {
            observer0.onChange(task0);
        }
    }
    notifies() {

        for (let observer0 of this.observerList) {
            for (let task0 of this.taskList) {
                observer0.onChange(task0);
                if (task0.id == tasks[0].id && task0.status == 4) {
                    for (var task1 of this.taskList) {
                        if (task1.id == tasks[1].id && task1.status == 0) {
                            task1.status = TaskStatus.ACCEPTED;
                            this.notify(task1);
                        }
                    }

                }
            }
        }

    }
}