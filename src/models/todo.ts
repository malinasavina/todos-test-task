class Todo {
    id: string;
    text: string;
    isCompleted: boolean;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
        this.isCompleted = false;
    };
}

export default Todo;