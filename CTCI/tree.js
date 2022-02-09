class Node {
    left;
    right;
    data;
    constructor(data){
        this.data = data;
    }

    insert(val){
        if(val <= this.data){
            if(this.left == null){
                this.left = new Node(val);
            } else {
                this.left.insert(val);
            }
        } else {
            if(this.right == null){
                this.right = new Node(val);
            } else this.right.insert(val);
        }
    }

    contains(val){
        if(val == this.data) return true;
        else if(val < this.data){
            if(this.left == null) return false;
            else return this.left.contains(val);
        } else {
            if(this.right == null) return false;
            else return this.right.contains(val)
        }
    }

    printInOrder(){
        if(this.left != null){
            this.left.printInOrder();
        }
        console.log(this.data);
        if(this.right != null){
            this.right.printInOrder();
        }
    }

    prePrint(){
        console.log(this.data);
        if(this.left != null){
            this.left.prePrint();
        }
        if(this.right != null){
            this.right.prePrint();
        }
    }
}

const root = new Node(10);
root.left = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(8);
root.right = new Node(15);

//console.log(root.printInOrder());
console.log(root.prePrint());