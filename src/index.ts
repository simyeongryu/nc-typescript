class Block {
  // 생성자
  constructor(
    index: number,
    hash: string,
    prevHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timestamp = timestamp;
  }
  // 멤버변수
  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timestamp: number;
}

const genesisBlock: Block = new Block(0, "qweqwdwef", "", "hello", 123456);
// Block의 배열
let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
