# notes

caller   : 0xd215ffaf0f85fb6f93f11e49bd6175ad58af0dfd
cotnract : 0xd129D8C12f0e7aA51157D9e6cc3F7Ece2dc84ecD

possible stack shuffler obfuscation, no opcode obfuscation

biffed `require(.., "time")` in asm (gg)

there's absolutely obfuscation. looks like:

- stack shuffler
- filler jumps
- dynamic cycler to stop symexec
- arithmetic obfuscation
- redundant push pops

possible solc without yul-ir optimization (direct dynamic dispatch disallowed)

selector ignored, early tx's were just zero's

## calldata

`uint8(msg.data[6]) == 0 && uint16(msg.data[11]) => infinite loop`

```
tx : 0xbeef0ad930c2f0052758ce9ce579ad7f83bed913ffedb50046c3c674293d1fe5

00 : deadbeef                       // decoration
04 : 9cf7                           // (unix_timestamp & 0xffff)
06 : 00                             // should_do_thing
07 : 00020014
0b : f193                           // smth_todo_w_should_do_thing
0d : 08f9                           // possible_jumpdest

23582a6f7c465e5ce7a9dc1bec6665b1000004b8b9b5490014d215ffaf0f85fb6f93f11e49bd6175ad58af0dfd06ffdabdbf6f030000
```
