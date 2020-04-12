import * as CryptoJS from "crypto-js";

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

  // static method - Block 클래스가 생성되지 않아도 호출할 수 있는 Block 클래스 메소드
  static caculateBlockHash = (
    index: number,
    prevHash: string,
    timestamp: number,
    data: string
  ): string => CryptoJS.SHA256(index + prevHash + timestamp + data).toString();
}
// static 으로 선언되었기 때문에 별도의 인스턴스 생성 없이 바로 사용 가능
// Block.caculateBlockHash(index, prevHash, timestamp, data);

const genesisBlock: Block = new Block(0, "qweqwdwef", "", "hello", 123456);
// Block의 배열
let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

export {};
