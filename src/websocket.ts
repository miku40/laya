
module util {
    export class Socket {
        private socket: Laya.Socket;
        private byte: Laya.Byte;
        constructor() {
            //初始化引擎
            Laya.init(600, 400, Laya.WebGL);
            this.byte = new Laya.Byte();
            //这里我们采用小端
            this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
            this.socket = new Laya.Socket();
            //这里我们采用小端
            this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
            //建立连接
            this.socket.connectByUrl("ws://localhost:8989");
            this.socket.on(Laya.Event.OPEN, this, this.openHandler);
            this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
            this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
            this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
        }
        private openHandler(event: any = null): void {
            //正确建立连接；
            this.byte.writeByte(1);//写入一个字节
            this.byte.writeInt16(20);//写入一个int16的数据
            this.byte.writeFloat32(20.5);//写入一个32位的浮点数据
            this.byte.writeUTFString("hello");// 写入一个字符串；
            var by:Laya.Byte = new Laya.Byte();//这里声明一个临时Byte类型
            by.endian = Laya.Byte.LITTLE_ENDIAN;//设置endian；
            by.writeInt32(5000);//写入一个int32数据
            by.writeUint16(16);//写入一个uint16 数据
            this.byte.writeArrayBuffer(by.buffer);//把临时字节数据的数据写入byte中，这里注意写入的是by.buffer;
            this.socket.send(this.byte.buffer);//这里是把字节数组的数据通过socket发送给服务器。
            this.byte.clear();//清除掉数据;方便下次读写；
        }
        private receiveHandler(msg: any = null): void {
            ///接收到数据触发函数
            //.............这里我们假设收到的是二进制ArrayBuffer
            this.byte.clear();
            this.byte.writeArrayBuffer(msg);//把接收到的二进制数据读进byte数组便于解析。
            this.byte.pos = 0;//设置偏移指针；
            ////下面开始读取数据，按照服务器传递过来的数据，按照顺序读取
            var a:number = this.byte.getByte();
            var b:number = this.byte.getInt16();
            var c:number = this.byte.getFloat32();
            var d:string = this.byte.getString();
            var e:string = this.byte.getUTFString();
        }
        private closeHandler(e: any = null): void {
            //关闭事件
        }
        private errorHandler(e: any = null): void {
            //连接出错
        }
    }
}
   