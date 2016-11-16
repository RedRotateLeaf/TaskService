var tasks= [
    {id:"task_00",name:"交谈1",desc:"和另一个NPC交谈",fromNPCid:"npc_0",toNPCid:"npc_0"},
    {id:"task_01",name:"交谈2",desc:"交谈回复，和之前NPC交谈",fromNPCid:"npc_1",toNPCid:"npc_0"},
]
class Task {
	id: string;
	name: string;
	desc: string;
	status: TaskStatus;
	fromNPCid: string;
	toNPCid: string;


	constructor(id, name, desc, status, fromNPCid, toNPCid) {
		this.id = id;
		this.desc = desc;
		this.name = name;
		this.desc = desc;
		this.status = status;
		this.fromNPCid = fromNPCid;
		this.toNPCid = toNPCid;
	}

}

enum TaskStatus {

    UNACCEPTED,

    ACCEPTED,

    DURING,

    CAN_SUBMIT,

    SUBMITTED

}

