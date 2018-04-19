class QuickFindUF {
    private id: number[] = [];

    constructor (n: number) {
      for (let i = 0; i < n; i++) {
        this.id.push(i);
      }
    }

    public connected(p: number, q: number): boolean {
      return this.id[p] === this.id[q];
    }

    public union(p: number, q: number): void {
      const pid: number = this[p];
      const qid = this.id[q];
      for (let i = 0; i < this.id.length; i++) {
        if (this.id[i] === pid) {
            this.id[i] = qid;
        }
      }
    }
  }
