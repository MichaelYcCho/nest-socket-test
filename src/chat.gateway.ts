// chat.gateway.ts
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway() // 안에 port와 namespace를 속성으로 넣어줄 수 있다.
export class ChatGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  // handleMessage(client, data): void {} // client 직접적으로 사용하고 싶거나 decorator 사용 안 원하면 이렇게도 가능
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }
}
