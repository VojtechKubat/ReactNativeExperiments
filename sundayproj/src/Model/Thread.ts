export class Thread {
    
    title: string;


    constructor(aTitle: string) {
        this.title = aTitle;
    }

    static createThread(): Thread {
        return new Thread("abc");
    }
}