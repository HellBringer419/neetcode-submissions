class DynamicArray {
    int[] array = new int[5];
    int length;

    public DynamicArray(int capacity) {
        this.array = new int[capacity];
        this.length = 0;
    }

    public int get(int i) {
        return this.array[i];
    }

    public void set(int i, int n) {
        this.array[i] = n;
    }

    public void pushback(int n) {
        // int currentIdx;
        // for (currentIdx=0; currentIdx < this.array.length; currentIdx++) {
        //     if (array[currentIdx] == n) break;
        // }

        // if (currentIdx == array.length -1) {
        //     // already done or not found
        //     return;
        // }

        // // equivalently resized here
        // int capacity = this.array.length < this.length + 1 ? this.array.length * 2 : this.array.length;
        // int[] newArray = new int[capacity];
        // // make anew array not having older element
        // for(int i=0; i<this.length-1; i++) {
        //     if (i != currentIdx) newArray[i] = this.array[i];
        // }
        // Wromg understanding, I thought to ppush existing ele
        // but this is just append at end

        if (this.array.length < this.length + 1)
            this.resize();
        this.array[this.length] = n;
        this.length++;
    }

    public int popback() {
        int popedOutE = this.array[this.length - 1];

        this.length--;

        return popedOutE;
    }

    private void resize() {
        int[] newArr = new int[this.array.length * 2];
        System.arraycopy(this.array, 0, newArr, 0, this.length);
        this.array = newArr;
    }

    public int getSize() {
        return this.length;
    }

    public int getCapacity() {
        return this.array.length;
    }
}
