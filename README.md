# notes

caller   : 0xd215ffaf0f85fb6f93f11e49bd6175ad58af0dfd
cotnract : 0xd129D8C12f0e7aA51157D9e6cc3F7Ece2dc84ecD

possible stack shuffler obfuscation, no opcode obfuscation

biffed some strings with null bytes

there's absolutely obfuscation. looks like:

- stack shuffler
- filler jumps
- dynamic cycler to stop symexec
- arithmetic obfuscation
- redundant push pops

possible solc without yul-ir optimization (direct dynamic dispatch disallowed)

selector ignored, early tx's were just zero's

## transaction

at transaction: `0xbeef0ad930c2f0052758ce9ce579ad7f83bed913ffedb50046c3c674293d1fe5`

calldata:

```
0xdeadbeef9cf70000020014f19308f923582a6f7c465e5ce7a9dc1bec6665b1000004b
  8b9b5490014d215ffaf0f85fb6f93f11e49bd6175ad58af0dfd06ffdabdbf6f030000
```

calldata breakdown

```
deadbeef                                    // cosmetic
9cf7                                        // (unix_timestamp & 0xffff)
00                                          // control flow
00                                          // unknown
02                                          // probable: call count
00                                          // unknown
14                                          // target address size
f19308f923582a6f7c465e5ce7a9dc1bec6665b1    // target address
00                                          // value length
0004                                        // payload size
b8b9b54900                                  // payload (`distributeETH()`)
14                                          // target address size
d215ffaf0f85fb6f93f11e49bd6175ad58af0dfd    // target address
06                                          // value size
ffdabdbf6f03                                // call value
0000                                        // payload size
```
