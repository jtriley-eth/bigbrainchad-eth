[
    [
        {
            "0000": "CALLDATASIZE"
        },  // [cdsize]
        {
            "0001": "ISZERO"
        },  // [cdsize_iszero]
        {
            "0004": "PUSH2 007d"
        },  // [cdsize_iszero_jump, cdsize_iszero]
        {
            "0005": "JUMPI"
        },  // []
        {
            "0006": "ORIGIN"
        },  // [tx_origin]
        {
            "0007": "CALLER"
        },  // [msg_sender, tx_origin]
        {
            "0008": "EQ"
        },  // [caller_is_origin]
        {
            "000b": "PUSH2 009b"
        },  // [caller_is_origin_jump, caller_is_origin]
        {
            "000c": "JUMPI"
        },  // []
        {
            "0015": "PUSH8 ffffffff00000000"
        },  // [mask_b8]
        {
            "0016": "PUSH0"
        },  // [0, mask_b8]
        {
            "0017": "CALLDATALOAD"
        },  // [cd0, mask_b8]
        {
            "0019": "PUSH1 c0"
        },  // [shift_192, cd0, mask_b8]
        {
            "001a": "SHR"
        },  // [cd_b8, mask_b8]
        {
            "001b": "AND"
        },  // [selector_b8]
        {
            "001c": "DUP1"
        },  // [selector_b8, selector_b8]
        {
            "001d": "SLOAD"
        },  // [selector_store, selector_b8]
        {
            "0020": "PUSH2 ffff"
        },  // []
        {
            "0022": "PUSH1 e0"
        },
        {
            "0023": "DUP3"
        },
        {
            "0024": "DUP2"
        },
        {
            "0025": "SHR"
        },
        {
            "0026": "SWAP2"
        },
        {
            "0027": "SWAP1"
        },
        {
            "0028": "SWAP2"
        },
        {
            "0029": "AND"
        },
        {
            "002b": "PUSH1 01"
        },
        {
            "002c": "SWAP1"
        },
        {
            "002d": "DUP2"
        },
        {
            "002e": "ADD"
        },
        {
            "002f": "SWAP1"
        },
        {
            "0030": "SWAP2"
        },
        {
            "0031": "SHL"
        },
        {
            "0034": "PUSH2 ffff"
        },
        {
            "0036": "PUSH1 e0"
        },
        {
            "0037": "SHL"
        },
        {
            "0038": "NOT"
        },
        {
            "0039": "DUP4"
        },
        {
            "003a": "AND"
        },
        {
            "003b": "OR"
        },
        {
            "003c": "DUP1"
        },
        {
            "003d": "DUP5"
        },
        {
            "003e": "SSTORE"
        },
        {
            "003f": "SWAP3"
        },
        {
            "0040": "SWAP1"
        },
        {
            "0041": "SWAP2"
        },
        {
            "0043": "PUSH1 d0"
        },
        {
            "0044": "SHR"
        },
        {
            "0049": "PUSH4 ffff0000"
        },
        {
            "004a": "AND"
        },
        {
            "004b": "DUP2"
        },
        {
            "004c": "OR"
        },
        {
            "004d": "SWAP1"
        },
        {
            "004e": "DUP2"
        },
        {
            "004f": "SUB"
        },
        {
            "0052": "PUSH2 0092"
        },
        {
            "0053": "JUMPI"
        },
        {
            "0054": "JUMPDEST"
        },
        {
            "0055": "PUSH0"
        },
        {
            "0056": "DUP4"
        },
        {
            "0057": "SWAP1"
        },
        {
            "0058": "MSTORE"
        },
        {
            "005a": "PUSH1 20"
        },
        {
            "005b": "SWAP3"
        },
        {
            "005c": "PUSH0"
        },
        {
            "005d": "NOT"
        },
        {
            "005e": "SWAP3"
        },
        {
            "0060": "PUSH1 f0"
        },
        {
            "0061": "SWAP2"
        },
        {
            "0062": "SWAP1"
        },
        {
            "0063": "SWAP2"
        },
        {
            "0064": "SHR"
        },
        {
            "0065": "DUP4"
        },
        {
            "0066": "ADD"
        },
        {
            "0067": "SWAP2"
        },
        {
            "0068": "DUP5"
        },
        {
            "0069": "SWAP1"
        },
        {
            "006b": "PUSH1 01"
        },
        {
            "006c": "ADD"
        },
        {
            "006d": "JUMPDEST"
        },
        {
            "006e": "PUSH0"
        },
        {
            "006f": "DUP5"
        },
        {
            "0070": "SGT"
        },
        {
            "0073": "PUSH2 007f"
        },
        {
            "0074": "JUMPI"
        },
        {
            "0077": "PUSH2 007d"
        },
        {
            "0078": "DUP7"
        },
        {
            "007b": "PUSH2 042f"
        },
        {
            "007c": "JUMP"
        }
    ],
    [
        {
            "007d": "JUMPDEST"
        },  // []
        {
            "007e": "STOP"
        }   // []
    ],
    [
        {
            "007f": "JUMPDEST"
        },
        {
            "0080": "DUP1"
        },
        {
            "0081": "SLOAD"
        },
        {
            "0082": "DUP7"
        },
        {
            "0083": "MSTORE"
        },
        {
            "0084": "SWAP5"
        },
        {
            "0085": "DUP2"
        },
        {
            "0086": "ADD"
        },
        {
            "0087": "SWAP5"
        },
        {
            "0088": "SWAP3"
        },
        {
            "0089": "DUP5"
        },
        {
            "008a": "ADD"
        },
        {
            "008b": "SWAP3"
        },
        {
            "008c": "DUP3"
        },
        {
            "008d": "ADD"
        },
        {
            "0090": "PUSH2 006d"
        },
        {
            "0091": "JUMP"
        }
    ],
    [
        {
            "0092": "JUMPDEST"
        },
        {
            "0093": "DUP1"
        },
        {
            "0094": "SLOAD"
        },
        {
            "0095": "SWAP3"
        },
        {
            "0096": "POP"
        },
        {
            "0099": "PUSH2 0054"
        },
        {
            "009a": "JUMP"
        }
    ],
    [
        {
            "009b": "JUMPDEST"
        },  // []
        {
            "009d": "PUSH1 06"
        },  // [6]
        {
            "009f": "PUSH1 04"
        },  // [4, 6]
        {
            "00a0": "CALLDATALOAD"
        },  // [cd_word0, 6]
        {
            "00a2": "PUSH1 f0"
        },  // [240, cd_word0, 6]
        {
            "00a3": "SHR"
        },  // [cd_word0_u16, 6]
        {
            "00a6": "PUSH2 ffff"
        },  // [mask_u16, cd_word0_u16, 6]
        {
            "00a7": "TIMESTAMP"
        },  // [time, mask_u16, cd_word0_u16, 6]
        {
            "00a8": "AND"
        },  // [time_u16, cd_word0_u16, 6]
        {
            "00a9": "SUB"
        },  // [time_cd_diff, 6]
        {
            "00ac": "PUSH2 0142"
        },  // [time_cd_diff_zero_dest, time_cd_diff, 6]
        {
            "00ad": "JUMPI"
        },  // [6]
        {
            "00af": "PUSH1 01"
        },  // [1, 6]
        {
            "00b0": "DUP2"
        },  // [6, 1, 6]
        {
            "00b1": "ADD"
        },  // [7, 6]
        {
            "00b2": "SWAP1"
        },  // [6, 7]
        {
            "00b3": "CALLDATALOAD"
        },  // [cd6, 7]
        {
            "00b4": "PUSH0"
        },  // [0, cd6, 7]
        {
            "00b5": "BYTE"
        },  // [cd6_byte0, 7]
        {
            "00b6": "DUP1"
        },  // [cd6_byte0, cd6_byte0, 7]
        {
            "00b7": "JUMPDEST"
        },  // [cd6_byte0, cd6_byte0, 7]
        {
            "00ba": "PUSH2 00cb"
        },  // [cd6_byte0_is_nonzero, cd6_byte0, cd6_byte0, 7]
        {
            "00bb": "JUMPI"
        },  // [cd6_byte0, 7]
        {
            "00be": "PUSH2 007d"
        },  // [125, cd6_byte0, 7]
        {
            "00bf": "DUP3"
        },  // [7, 125, cd6_byte0, 7]
        {
            "00c0": "DUP1"
        },  // [7, 7, 125, cd6_byte0, 7]
        {
            "00c1": "CALLDATASIZE"
        },  // [cdsize, 7, 125, cd6_byte0, 7]
        {
            "00c2": "SUB"
        },  // [cdsize_minus_7, 125, cd6_byte0, 7]
        {
            "00c3": "DUP1"
        },  // [cdsize_minus_7, cdsize_minus_7, 125, cd6_byte0, 7]
        {
            "00c4": "SWAP2"
        },  // [125, cdsize_minus_7, cdsize_minus_7, cd6_byte0, 7]
        {
            "00c5": "PUSH0"
        },  // [0, 125, cdsize_minus_7, cdsize_minus_7, cd6_byte0, 7]
        {
            "00c6": "CALLDATACOPY"
        },  // [cdsize_minus_7, cd6_byte0, 7]
        {
            "00c9": "PUSH2 027d"
        },  // [some_dest, cdsize_minus_7, cd6_byte0, 7]
        {
            "00ca": "JUMP"
        }   // [cdsize_minus_7, cd6_byte0, 7]
    ],
    [
        {
            "00cb": "JUMPDEST"
        },  // [cd6_byte0, 7]
        {
            "00cd": "PUSH1 06"
        },  // [6, cd6_byte0, 7]
        {
            "00ce": "DUP3"
        },  // [7, 6, cd6_byte0, 7]
        {
            "00cf": "ADD"
        },  // [13, cd6_byte0, 7]
        {
            "00d0": "SWAP2"
        },  // [7, cd6_byte0, 13]
        {
            "00d2": "PUSH1 04"
        },  // [4, 7, cd6_byte0, 13]
        {
            "00d3": "DUP2"
        },  // [7, 4, 7, cd6_byte0, 13]
        {
            "00d4": "ADD"
        },  // [11 7, cd6_byte0, 13]
        {
            "00d5": "CALLDATALOAD"
        },  // [cd11, 7, cd6_byte0, 13]
        {
            "00d7": "PUSH1 f0"
        },  // [240, cd11, 7, cd6_byte0, 13]
        {
            "00d8": "SHR"
        },  // [cd11_u16, 7, cd6_byte0, 13]
        {
            "00d9": "SWAP1"
        },  // [7, cd11_u16, cd6_byte0, 13]
        {
            "00da": "PUSH0"
        },  // [0, 7, cd11_u16, cd6_byte0, 13]
        {
            "00db": "SWAP1"
        },  // [7, 0, cd11_u16, cd6_byte0, 13]
        {
            "00dc": "CALLDATALOAD"
        },  // [cd7, 0, cd11_u16, cd6_byte0, 13]
        {
            "00de": "PUSH1 e0"
        },  // [224, cd7, 0, cd11_u16, cd6_byte0, 13]
        {
            "00df": "SHR"
        },  // [cd7_u32, 0, cd11_u16, cd6_byte0, 13]
        {
            "00e0": "JUMPDEST"  // NOTE: `unknown_0` may be from `push0` above or another codepath
        },  // [cd7_u32, unknown_0, cd11_u16, cd6_byte0, 13]
        {
            "00e1": "DUP3"
        },  // [cd11_u16, cd7_u32, unknown_0 cd11_u16, cd6_byte0, 13]
        {
            "00e2": "DUP3"
        },  // [unknown_0, cd11_u16, cd7_u32, unknown_0, cd11_u16, cd6_byte0, 13]
        {
            "00e3": "LT"
        },  // [unknown_0_lt_cd11_u16, cd7_u32, unknown_0, cd11_u16, cd6_byte0, 13]
        {
            "00e6": "PUSH2 00f3"
        },  // [dest, unknown_0_lt_cd11_u16, cd7_u32, unknown_0, cd11_u16, cd6_byte0, 13]
        {
            "00e7": "JUMPI"
        },  // [cd7_u32, unknown_0, cd11_u16, cd6_byte0, 13]
        {
            "00e8": "POP"
        },  // [unknown_0, cd11_u16, cd6_byte0, 13]
        {
            "00e9": "POP"
        },  // [cd11_u16, cd6_byte0, 13]
        {
            "00ea": "POP"
        },  // [cd6_byte0, 13]
        {
            "00eb": "PUSH0"
        },  // [unknown_0, cd6_byte0, 13]
        {
            "00ec": "NOT"
        },  // [u256_max, cd6_byte0, 13]
        {
            "00ed": "ADD"
        },  // [cd6_byte0_sub_1, 13]
        {
            "00ee": "DUP1"
        },  // [cd6_byte0_sub_1, cd6_byte0_sub_1, 13]
        {
            "00f1": "PUSH2 00b7"
        },  // [dest, cd6_byte0_sub_1, cd6_byte0_sub_1, 13]
        {
            "00f2": "JUMP"
        }   // [cd6_byte0_sub_1, cd6_byte0_sub_1, 13]
    ],
    [
        {
            "00f3": "JUMPDEST"
        },  // [cd7_u32, unknown_0, cd11_u16, cd6_byte0, 13]
        {
            "00f4": "SWAP1"
        },  // [unknown_0, cd7_u32, cd11_u16, cd6_byte0, 13]
        {
            "00f5": "SWAP2"
        },  // [cd11_u16, cd7_u32, unknown_0, cd6_byte0, 13]
        {
            "00f6": "SWAP3"
        },  // [cd6_byte0, cd7_u32, unknown_0, cd11_u16, 13]
        {
            "00f7": "SWAP4"
        },  // [13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "00fa": "PUSH2 0107"
        },  // [dest, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "00fb": "DUP2"
        },  // [13, dest, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "00fd": "PUSH1 02"
        },  // [2, 13, dest, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "00fe": "DUP2"
        },  // [13, 2, 13, dest, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "00ff": "CALLDATALOAD"
        },  // [cd13, 2, 13, dest, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0101": "PUSH1 f0"
        },  // [240, cd13, 2, 13, dest, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0102": "SHR"
        },  // [cd13_U16, 2, 13, dest, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0103": "SWAP2"
        },  // [13, 2, cd13_u16, dest, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0104": "ADD"
        },  // [15, cd13_u16, dest, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0105": "SWAP2"
        },  // [dest, cd13_u16, 15, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0106": "JUMP"
        }   // [cd13_u16, 15, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
    ],
    [
        {
            "0107": "JUMPDEST"
        },  // [cd13_u16, 15, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0108": "SWAP1"
        },  // [15, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0109": "POP"
        },  // [cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "010b": "PUSH1 10"
        },  // [16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "010c": "DUP5"
        },  // [unknown_0, 16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "010d": "SWAP1"
        },  // [16, unknown_0, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "010e": "SHL"
        },  // [unknown_0_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0110": "PUSH1 20"
        },  // [32, unknown_0_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0111": "DUP5"
        },  // [cd7_u32, 32, unknown_0_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0112": "SWAP1"
        },  // [32, cd7_u32, unknown_0_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0113": "SHL"
        },  // [cd7_u32_shl32, unknown_0_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0114": "OR"    // NOTE: word layout: | zero_u192 | cd7_u32 | unknown0 | zero_u16 |
        },  // [cd7_unknown_0_or_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0115": "DUP2"
        },  // [cd13_u16, cd7_unknown_0_or_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0116": "JUMPDEST"
        },  // [cd13_u16, cd7_unknown_0_or_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0119": "PUSH2 012a"
        },  // [dest, cd13_u16, cd7_unknown_0_or_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "011a": "JUMPI"
        },  // [cd7_unknown_0_or_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "011b": "POP"
        },  // [cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "011c": "SWAP1"
        },  // [13, cd13_u16, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "011d": "SWAP5"
        },  // [unknown_0, cd13_u16, cd7_u32, 13, cd11_u16, cd6_byte0]
        {
            "011e": "SWAP4"
        },  // [cd11_u16, cd13_u16, cd7_u32, 13, unknown_0, cd6_byte0]
        {
            "011f": "SWAP3"
        },  // [13, cd13_u16, cd7_u32, cd11_u16, unknown_0, cd6_byte0]
        {
            "0121": "PUSH1 01"
        },  // [1, 13, cd13_u16, cd7_u32, cd11_u16, unknown_0, cd6_byte0]
        {
            "0122": "ADD"
        },  // [14, cd13_u16, cd7_u32, cd11_u16, unknown_0, cd6_byte0]
        {
            "0123": "SWAP2"
        },  // [cd7_u32, cd13_u16, 14, cd11_u16, unknown_0, cd6_byte0]
        {
            "0124": "SWAP1"
        },  // [cd13_u16, cd7_u32, 14, cd11_u16, unknown_0, cd6_byte0]
        {
            "0125": "POP"
        },  // [cd7_u32, 14, cd11_u16, unknown_0, cd6_byte0]
        {
            "0128": "PUSH2 00e0"
        },  // [dest, cd7_u32, 14, cd11_u16, unknown_0, cd6_byte0]
        {
            "0129": "JUMP"
        }   // [cd7_u32, 14, cd11_u16, unknown_0, cd6_byte0]
    ],
    [
        {
            "012a": "JUMPDEST"
        },  // [cd7_unknown_0_or_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "012c": "PUSH1 01"
        },  // [1, cd7_unknown_0_or_shl16, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "012d": "SWAP1"
        },  // [cd7_unknown_0_or_shl16, 1, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "012f": "PUSH1 20"
        },  // [32, cd7_unknown_0_or_shl16, 1, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0130": "DUP5"
        },  // [13, 32, cd7_unknown_0_or_shl16, 1, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0131": "CALLDATALOAD"
        },  // [cd13, 32, cd7_unknown_0_or_shl16, 1, cd13_u16, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0132": "SWAP5"
        },  // [cd13_u16, 32, cd7_unknown_0_or_shl16, 1, cd13, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0133": "ADD"
        },  // [cd13_u16_add_32, cd7_unknown_0_or_shl16, 1, cd13, 13, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0134": "SWAP4"
        },  // [13, cd7_unknown_0_or_shl16, 1, cd13_u16_add_32, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0135": "DUP2"
        },  // [cd7_unknown_0_or_shl16, 13, cd7_unknown_0_or_shl16, 1, cd13_u16_add_32, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0136": "SSTORE" // NOTE: what the fuck, this might be wrong
        },  // [cd7_unknown_0_or_shl16, 1, cd13_u16_add_32, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0137": "ADD"
        },  // [cd7_unknown_0_or_shl16_add_1, cd13_u16_add_32, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0138": "SWAP1"
        },  // [cd13_u16_add_32, cd7_unknown_0_or_shl16_add_1, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0139": "PUSH0"
        },  // [0, cd13_u16_add_32, cd7_unknown_0_or_shl16_add_1, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "013a": "NOT"
        },  // [u256_max, cd13_u16_add_32, cd7_unknown_0_or_shl16_add_1, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "013b": "ADD"
        },  // [cd13_u16_add_32_sub_1, cd7_unknown_0_or_shl16_add_1, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "013c": "SWAP1"
        },  // [cd7_unknown_0_or_shl16_add_1, cd13_u16_add_32_sub_1, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "013d": "DUP2"
        },  // [cd7_u32, cd7_unknown_0_or_shl16_add_1, cd13_u16_add_32_sub_1, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0140": "PUSH2 0116"
        },  // [dest, cd7_u32, cd7_unknown_0_or_shl16_add_1, cd13_u16_add_32_sub_1, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
        {
            "0141": "JUMP"
        }   // [cd7_u32, cd7_unknown_0_or_shl16_add_1, cd13_u16_add_32_sub_1, cd7_u32, unknown_0, cd11_u16, cd6_byte0]
    ],
    [
        {
            "0142": "JUMPDEST"
        },  // [6]
        {
            "0146": "PUSH3 461bcd"
        },  // [err_sig, 6]
        {
            "0148": "PUSH1 e5"
        },  // [err_sig_shift, err_sig, 6]
        {
            "0149": "SHL"
        },  // [err_sig, 6]
        {
            "014a": "PUSH0"
        },  // [0, err_sig, 6]
        {
            "014b": "MSTORE"
        },  // [6]
        {
            "014d": "PUSH1 20"
        },  // [str_ptr, 6]
        {
            "014f": "PUSH1 04"
        },  // [str_ptr_ptr, str_ptr, 6]
        {
            "0150": "MSTORE"
        },  // [6]
        {
            "0152": "PUSH1 20"
        },  // [str_len, 6]
        {
            "0154": "PUSH1 24"
        },  // [str_len_ptr, str_len, 6]
        {
            "0155": "MSTORE"
        },  // [6]
        {
            "015a": "PUSH4 74696d65"
        },  // ["time", 6]
        {
            "015c": "PUSH1 e0"
        },  // [time_shift, "time", 6]
        {
            "015d": "SHL"
        },  // ["time", 6]
        {
            "015f": "PUSH1 44"
        },  // [str_ptr, "time", 6]
        {
            "0160": "MSTORE"
        },  // [6]
        {
            "0162": "PUSH1 64"
        },  // [rev_len, 6]
        {
            "0163": "PUSH0"
        },  // [rev_ptr, rev_len, 6]
        {
            "0164": "REVERT"
        }   // []
    ],
    [
        {
            "0165": "JUMPDEST"
        },
        {
            "0169": "PUSH3 461bcd"
        },
        {
            "016b": "PUSH1 e5"
        },
        {
            "016c": "SHL"
        },
        {
            "016d": "PUSH0"
        },
        {
            "016e": "MSTORE"
        },
        {
            "0170": "PUSH1 20"
        },
        {
            "0172": "PUSH1 04"
        },
        {
            "0173": "MSTORE"
        },
        {
            "0175": "PUSH1 20"
        },
        {
            "0177": "PUSH1 24"
        },
        {
            "0178": "MSTORE"
        },
        {
            "018a": "PUSH17 756e6578706563746564206e6f74206571"
        },
        {
            "018c": "PUSH1 78"
        },
        {
            "018d": "SHL"
        },
        {
            "018f": "PUSH1 44"
        },
        {
            "0190": "MSTORE"
        },
        {
            "0192": "PUSH1 64"
        },
        {
            "0193": "PUSH0"
        },
        {
            "0194": "REVERT"
        }
    ],
    [
        {
            "0195": "JUMPDEST"
        },
        {
            "0199": "PUSH3 461bcd"
        },
        {
            "019b": "PUSH1 e5"
        },
        {
            "019c": "SHL"
        },
        {
            "019d": "PUSH0"
        },
        {
            "019e": "MSTORE"
        },
        {
            "01a0": "PUSH1 20"
        },
        {
            "01a2": "PUSH1 04"
        },
        {
            "01a3": "MSTORE"
        },
        {
            "01a5": "PUSH1 20"
        },
        {
            "01a7": "PUSH1 24"
        },
        {
            "01a8": "MSTORE"
        },
        {
            "01ba": "PUSH17 1d5b995e1c1958dd1959081b9bdd0819dd"
        },
        {
            "01bc": "PUSH1 7a"
        },
        {
            "01bd": "SHL"
        },
        {
            "01bf": "PUSH1 44"
        },
        {
            "01c0": "MSTORE"
        },
        {
            "01c2": "PUSH1 64"
        },
        {
            "01c3": "PUSH0"
        },
        {
            "01c4": "REVERT"
        }
    ],
    [
        {
            "01c5": "JUMPDEST"
        },
        {
            "01c9": "PUSH3 461bcd"
        },
        {
            "01cb": "PUSH1 e5"
        },
        {
            "01cc": "SHL"
        },
        {
            "01cd": "PUSH0"
        },
        {
            "01ce": "MSTORE"
        },
        {
            "01d0": "PUSH1 20"
        },
        {
            "01d2": "PUSH1 04"
        },
        {
            "01d3": "MSTORE"
        },
        {
            "01d5": "PUSH1 20"
        },
        {
            "01d7": "PUSH1 24"
        },
        {
            "01d8": "MSTORE"
        },
        {
            "01ea": "PUSH17 1d5b995e1c1958dd1959081b9bdd081b1d"
        },
        {
            "01ec": "PUSH1 7a"
        },
        {
            "01ed": "SHL"
        },
        {
            "01ef": "PUSH1 44"
        },
        {
            "01f0": "MSTORE"
        },
        {
            "01f2": "PUSH1 64"
        },
        {
            "01f3": "PUSH0"
        },
        {
            "01f4": "REVERT"
        }
    ],
    [
        {
            "01f5": "JUMPDEST"
        },
        {
            "01f9": "PUSH3 461bcd"
        },
        {
            "01fb": "PUSH1 e5"
        },
        {
            "01fc": "SHL"
        },
        {
            "01fd": "PUSH0"
        },
        {
            "01fe": "MSTORE"
        },
        {
            "0200": "PUSH1 20"
        },
        {
            "0202": "PUSH1 04"
        },
        {
            "0203": "MSTORE"
        },
        {
            "0205": "PUSH1 20"
        },
        {
            "0207": "PUSH1 24"
        },
        {
            "0208": "MSTORE"
        },
        {
            "0215": "PUSH12 696e76616c69642074797065"
        },
        {
            "0217": "PUSH1 a0"
        },
        {
            "0218": "SHL"
        },
        {
            "021a": "PUSH1 44"
        },
        {
            "021b": "MSTORE"
        },
        {
            "021d": "PUSH1 64"
        },
        {
            "021e": "PUSH0"
        },
        {
            "021f": "REVERT"
        }
    ],
    [
        {
            "0220": "JUMPDEST"
        },
        {
            "0224": "PUSH3 461bcd"
        },
        {
            "0226": "PUSH1 e5"
        },
        {
            "0227": "SHL"
        },
        {
            "0228": "PUSH0"
        },
        {
            "0229": "MSTORE"
        },
        {
            "022b": "PUSH1 20"
        },
        {
            "022d": "PUSH1 04"
        },
        {
            "022e": "MSTORE"
        },
        {
            "0230": "PUSH1 20"
        },
        {
            "0232": "PUSH1 24"
        },
        {
            "0233": "MSTORE"
        },
        {
            "0243": "PUSH15 1a5b9d985b1a590818dbdb5b585b99"
        },
        {
            "0245": "PUSH1 8a"
        },
        {
            "0246": "SHL"
        },
        {
            "0248": "PUSH1 44"
        },
        {
            "0249": "MSTORE"
        },
        {
            "024b": "PUSH1 64"
        },
        {
            "024c": "PUSH0"
        },
        {
            "024d": "REVERT"
        }
    ],
    [
        {
            "024e": "JUMPDEST"
        },
        {
            "024f": "ISZERO"
        },
        {
            "0252": "PUSH2 0255"
        },
        {
            "0253": "JUMPI"
        },
        {
            "0254": "JUMP"
        }
    ],
    [
        {
            "0255": "JUMPDEST"
        },
        {
            "0256": "RETURNDATASIZE"
        },
        {
            "0257": "PUSH0"
        },
        {
            "0258": "DUP1"
        },
        {
            "0259": "RETURNDATACOPY"
        },
        {
            "025a": "RETURNDATASIZE"
        },
        {
            "025b": "PUSH0"
        },
        {
            "025c": "REVERT"
        }
    ],
    [
        {
            "025d": "JUMPDEST"
        },
        {
            "0260": "PUSH2 0279"
        },
        {
            "0261": "SWAP1"
        },
        {
            "0263": "PUSH1 01"
        },
        {
            "0264": "DUP2"
        },
        {
            "0265": "MLOAD"
        },
        {
            "0266": "PUSH0"
        },
        {
            "0267": "BYTE"
        },
        {
            "0268": "SWAP2"
        },
        {
            "0269": "ADD"
        },
        {
            "026a": "SWAP1"
        },
        {
            "026b": "DUP2"
        },
        {
            "026c": "MLOAD"
        },
        {
            "026d": "DUP2"
        },
        {
            "026f": "PUSH1 20"
        },
        {
            "0270": "SUB"
        },
        {
            "0272": "PUSH1 03"
        },
        {
            "0273": "SHL"
        },
        {
            "0274": "SHR"
        },
        {
            "0275": "SWAP2"
        },
        {
            "0276": "ADD"
        },
        {
            "0277": "SWAP2"
        },
        {
            "0278": "JUMP"
        }
    ],
    [
        {
            "0279": "JUMPDEST"
        },
        {
            "027a": "SWAP1"
        },
        {
            "027b": "SWAP2"
        },
        {
            "027c": "JUMP"
        }
    ],
    [
        {
            "027d": "JUMPDEST"
        }, // [cdsize_minus_7, cd6_byte0, 7]
        {
            "027e": "SWAP1"
        },  // [cd6_byte0, cdsize_minus_7, 7]
        {
            "0281": "PUSH2 028b"
        },  // [dest, cd6_byte0, cdsize_minus_7, 7]
        {
            "0282": "PUSH0"
        },  // [0, dest, cd6_byte0, cdsize_minus_7, 7]
        {
            "0283": "MLOAD"
        },  // [mem0, dest, cd6_byte0, cdsize_minus_7, 7]
        {
            "0285": "PUSH1 f0"
        },  // [240, mem0, dest, cd6_byte0, cdsize_minus_7, 7]
        {
            "0286": "SHR"
        },  // [mem0_u16, dest, cd6_byte0, cdsize_minus_7, 7]
        {
            "0288": "PUSH1 02"
        },  // [2, mem0_u16, dest, cd6_byte0, cdsize_minus_7, 7]
        {
            "0289": "SWAP2"
        },  // [dest, mem0_u16, 2, cd6_byte0, cdsize_minus_7, 7]
        {
            "028a": "JUMP"
        }   // [mem0_u16, 2, cd6_byte0, cdsize_minus_7, 7]
    ],
    [
        {
            "028b": "JUMPDEST"
        },  // [mem0_u16, 2, cd6_byte0, cdsize_minus_7, 7]
        {
            "028c": "SWAP1"
        },  // [2, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "028d": "DUP2"
        },  // [mem0_u16, 2, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "028e": "JUMPDEST"
        },  // [mem0_u16, 2, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "0291": "PUSH2 0298"
        },  // [mem0_u16_nonzero_dest, mem0_u16, 2, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "0292": "JUMPI"
        },  // [2, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "0293": "POP"
        },  // [mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "0294": "POP"
        },  // [cd6_byte0, cdsize_minus_7, 7]
        {
            "0295": "SWAP1"
        },  // [cdsize_minus_7, cd6_byte0, 7]
        {
            "0296": "POP"
        },  // [cd6_byte0, 7]
        {
            "0297": "JUMP"
        }   // [7]
    ],
    [
        {
            "0298": "JUMPDEST"
        },  // [2, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "029b": "PUSH2 02a7"
        },  // [dest, 2, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "029c": "SWAP1"
        },  // [2, dest, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "029e": "PUSH1 01"
        },  // [1, 2, dest, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "029f": "DUP2"
        },  // [2, 1, 2, dest, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "02a0": "MLOAD"
        },  // [mem2, 1, 2, dest, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "02a1": "PUSH0"
        },  // [0, mem2, 1, 2, dest, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "02a2": "BYTE"
        },  // [mem2_byte0, 1, 2, dest, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "02a3": "SWAP2"
        },  // [2, 1, mem2_byte0, dest, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "02a4": "ADD"
        },  // [3, mem2_byte0, dest, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "02a5": "SWAP2"
        },  // [dest, mem2_byte0, 3, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "02a6": "JUMP"
        }   // [mem2_byte0, 3, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
    ],
    [
        {
            "02a7": "JUMPDEST"
        },  // [mem2_byte0, 3, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "02a8": "SWAP1"
        },  // [3, mem2_byte0, mem0_u16, cd6_byte0, cdsize_minus_7, 7]
        {
            "02a9": "SWAP3"
        },  // [cd6_byte0, mem2_byte0, mem0_u16, 3, cdsize_minus_7, 7]
        {
            "02aa": "SWAP1"
        },  // [mem2_byte0, cd6_byte0, mem0_u16, 3, cdsize_minus_7, 7]
        {
            "02ab": "SWAP2"
        },  // [mem0_u16, cd6_byte0, mem2_byte0, 3, cdsize_minus_7, 7]
        {
            "02ac": "DUP4"
        },  // [3, mem0_u16, cd6_byte0, mem2_byte0, 3, cdsize_minus_7, 7]
        {
            "02ad": "DUP4"
        },  // [mem2_byte0, 3, mem0_u16, cd6_byte0, mem2_byte0, 3, cdsize_minus_7, 7]
        {
            "02ae": "ISZERO"
        },  // [mem2_byte0_iszero, 3, mem0_u16, cd6_byte0, mem2_byte0, 3, cdsize_minus_7, 7]
        {
            "02b1": "PUSH2 03fb"
        },  // [dest, mem2_byte0_iszero, 3, mem0_u16, cd6_byte0, mem2_byte0, 3, cdsize_minus_7, 7]
        {
            "02b2": "JUMPI"
        },  // [3, mem0_u16, cd6_byte0, mem2_byte0, 3, cdsize_minus_7, 7]
        {
            "02b3": "POP"
        },  // [mem0_u16, cd6_byte0, mem2_byte0, 3, cdsize_minus_7, 7]
        {
            "02b4": "DUP3"
        },  // [mem2_byte0, mem0_u16, cd6_byte0, mem2_byte0, 3, cdsize_minus_7, 7]
        {
            "02b6": "PUSH1 01"
        },  // [1, mem2_byte0, mem0_u16, cd6_byte0, mem2_byte0, 3, cdsize_minus_7, 7]
        {
            "02b7": "EQ"
        },
        {
            "02ba": "PUSH2 036a"
        },
        {
            "02bb": "JUMPI"
        },
        {
            "02bc": "DUP3"
        },
        {
            "02be": "PUSH1 02"
        },
        {
            "02bf": "EQ"
        },
        {
            "02c2": "PUSH2 0337"
        },
        {
            "02c3": "JUMPI"
        },
        {
            "02c4": "DUP3"
        },
        {
            "02c6": "PUSH1 03"
        },
        {
            "02c7": "EQ"
        },
        {
            "02ca": "PUSH2 030a"
        },
        {
            "02cb": "JUMPI"
        },
        {
            "02cc": "POP"
        },
        {
            "02cd": "POP"
        },
        {
            "02cf": "PUSH1 04"
        },
        {
            "02d0": "SUB"
        },
        {
            "02d3": "PUSH2 0220"
        },
        {
            "02d4": "JUMPI"
        },
        {
            "02d7": "PUSH2 02f8"
        },
        {
            "02da": "PUSH2 0300"
        },
        {
            "02dd": "PUSH2 02ea"
        },
        {
            "02de": "DUP5"
        },
        {
            "02df": "SWAP4"
        },
        {
            "02e1": "PUSH1 01"
        },
        {
            "02e2": "DUP2"
        },
        {
            "02e3": "MLOAD"
        },
        {
            "02e4": "PUSH0"
        },
        {
            "02e5": "BYTE"
        },
        {
            "02e6": "SWAP2"
        },
        {
            "02e7": "ADD"
        },
        {
            "02e8": "SWAP2"
        },
        {
            "02e9": "JUMP"
        }
    ],
    [
        {
            "02ea": "JUMPDEST"
        },
        {
            "02eb": "SWAP3"
        },
        {
            "02ec": "SWAP1"
        },
        {
            "02ee": "PUSH1 02"
        },
        {
            "02ef": "DUP2"
        },
        {
            "02f0": "MLOAD"
        },
        {
            "02f2": "PUSH1 f0"
        },
        {
            "02f3": "SHR"
        },
        {
            "02f4": "SWAP2"
        },
        {
            "02f5": "ADD"
        },
        {
            "02f6": "SWAP2"
        },
        {
            "02f7": "JUMP"
        }
    ],
    [
        {
            "02f8": "JUMPDEST"
        },
        {
            "02f9": "DUP1"
        },
        {
            "02fa": "SWAP6"
        },
        {
            "02fb": "SWAP2"
        },
        {
            "02fe": "PUSH2 05c3"
        },
        {
            "02ff": "JUMP"
        }
    ],
    [
        {
            "0300": "JUMPDEST"
        },
        {
            "0301": "POP"
        },
        {
            "0302": "ISZERO"
        },
        {
            "0305": "PUSH2 0308"
        },
        {
            "0306": "JUMPI"
        },
        {
            "0307": "REVERT"
        }
    ],
    [
        {
            "0308": "JUMPDEST"
        },
        {
            "0309": "RETURN"
        }
    ],
    [
        {
            "030a": "JUMPDEST"
        },
        {
            "030b": "SWAP1"
        },
        {
            "030c": "SWAP4"
        },
        {
            "030d": "SWAP3"
        },
        {
            "030e": "PUSH0"
        },
        {
            "030f": "DUP1"
        },
        {
            "0310": "DUP1"
        },
        {
            "0311": "DUP1"
        },
        {
            "0312": "SWAP6"
        },
        {
            "0313": "POP"
        },
        {
            "0316": "PUSH2 031f"
        },
        {
            "0319": "PUSH2 032a"
        },
        {
            "031a": "SWAP5"
        },
        {
            "031d": "PUSH2 025d"
        },
        {
            "031e": "JUMP"
        }
    ],
    [
        {
            "031f": "JUMPDEST"
        },
        {
            "0320": "SWAP7"
        },
        {
            "0321": "SWAP1"
        },
        {
            "0322": "SWAP7"
        },
        {
            "0323": "COINBASE"
        },
        {
            "0324": "GAS"
        },
        {
            "0325": "CALL"
        },
        {
            "0328": "PUSH2 024e"
        },
        {
            "0329": "JUMP"
        }
    ],
    [
        {
            "032a": "JUMPDEST"
        },
        {
            "032b": "SWAP2"
        },
        {
            "032c": "SWAP3"
        },
        {
            "032d": "SWAP2"
        },
        {
            "032e": "PUSH0"
        },
        {
            "032f": "NOT"
        },
        {
            "0330": "ADD"
        },
        {
            "0331": "SWAP1"
        },
        {
            "0332": "DUP2"
        },
        {
            "0335": "PUSH2 028e"
        },
        {
            "0336": "JUMP"
        }
    ],
    [
        {
            "0337": "JUMPDEST"
        },
        {
            "0338": "SWAP1"
        },
        {
            "0339": "SWAP4"
        },
        {
            "033a": "SWAP3"
        },
        {
            "033d": "PUSH2 02ea"
        },
        {
            "033e": "SWAP3"
        },
        {
            "033f": "POP"
        },
        {
            "0340": "PUSH0"
        },
        {
            "0341": "DUP5"
        },
        {
            "0342": "DUP1"
        },
        {
            "0345": "PUSH2 0359"
        },
        {
            "0348": "PUSH2 0361"
        },
        {
            "034b": "PUSH2 0352"
        },
        {
            "034c": "DUP6"
        },
        {
            "034d": "SWAP7"
        },
        {
            "0350": "PUSH2 025d"
        },
        {
            "0351": "JUMP"
        }
    ],
    [
        {
            "0352": "JUMPDEST"
        },
        {
            "0353": "SWAP9"
        },
        {
            "0354": "SWAP1"
        },
        {
            "0357": "PUSH2 025d"
        },
        {
            "0358": "JUMP"
        }
    ],
    [
        {
            "0359": "JUMPDEST"
        },
        {
            "035a": "DUP1"
        },
        {
            "035b": "SWAP6"
        },
        {
            "035c": "SWAP2"
        },
        {
            "035f": "PUSH2 0568"
        },
        {
            "0360": "JUMP"
        }
    ],
    [
        {
            "0361": "JUMPDEST"
        },
        {
            "0362": "SWAP7"
        },
        {
            "0363": "GAS"
        },
        {
            "0364": "CALL"
        },
        {
            "0365": "POP"
        },
        {
            "0368": "PUSH2 032a"
        },
        {
            "0369": "JUMP"
        }
    ],
    [
        {
            "036a": "JUMPDEST"
        },
        {
            "036b": "SWAP1"
        },
        {
            "036c": "SWAP4"
        },
        {
            "036d": "SWAP3"
        },
        {
            "0370": "PUSH2 0396"
        },
        {
            "0371": "SWAP3"
        },
        {
            "0372": "POP"
        },
        {
            "0375": "PUSH2 0359"
        },
        {
            "0378": "PUSH2 03c0"
        },
        {
            "037a": "PUSH1 20"
        },
        {
            "037b": "DUP7"
        },
        {
            "037c": "DUP1"
        },
        {
            "037d": "DUP1"
        },
        {
            "0380": "PUSH2 039d"
        },
        {
            "0383": "PUSH2 03b8"
        },
        {
            "0386": "PUSH2 038f"
        },
        {
            "0389": "PUSH2 03aa"
        },
        {
            "038a": "SWAP10"
        },
        {
            "038d": "PUSH2 025d"
        },
        {
            "038e": "JUMP"
        }
    ],
    [
        {
            "038f": "JUMPDEST"
        },
        {
            "0390": "SWAP12"
        },
        {
            "0391": "SWAP1"
        },
        {
            "0394": "PUSH2 025d"
        },
        {
            "0395": "JUMP"
        }
    ],
    [
        {
            "0396": "JUMPDEST"
        },
        {
            "0397": "SWAP3"
        },
        {
            "0398": "SWAP1"
        },
        {
            "039b": "PUSH2 025d"
        },
        {
            "039c": "JUMP"
        }
    ],
    [
        {
            "039d": "JUMPDEST"
        },
        {
            "039e": "SWAP10"
        },
        {
            "039f": "SWAP1"
        },
        {
            "03a1": "PUSH1 01"
        },
        {
            "03a2": "DUP2"
        },
        {
            "03a3": "MLOAD"
        },
        {
            "03a4": "PUSH0"
        },
        {
            "03a5": "BYTE"
        },
        {
            "03a6": "SWAP2"
        },
        {
            "03a7": "ADD"
        },
        {
            "03a8": "SWAP2"
        },
        {
            "03a9": "JUMP"
        }
    ],
    [
        {
            "03aa": "JUMPDEST"
        },
        {
            "03ab": "SWAP9"
        },
        {
            "03ac": "SWAP1"
        },
        {
            "03ae": "PUSH1 02"
        },
        {
            "03af": "DUP2"
        },
        {
            "03b0": "MLOAD"
        },
        {
            "03b2": "PUSH1 f0"
        },
        {
            "03b3": "SHR"
        },
        {
            "03b4": "SWAP2"
        },
        {
            "03b5": "ADD"
        },
        {
            "03b6": "SWAP2"
        },
        {
            "03b7": "JUMP"
        }
    ],
    [
        {
            "03b8": "JUMPDEST"
        },
        {
            "03b9": "SWAP10"
        },
        {
            "03ba": "GAS"
        },
        {
            "03bb": "CALL"
        },
        {
            "03be": "PUSH2 024e"
        },
        {
            "03bf": "JUMP"
        }
    ],
    [
        {
            "03c0": "JUMPDEST"
        },
        {
            "03c1": "DUP1"
        },
        {
            "03c2": "ISZERO"
        },
        {
            "03c5": "PUSH2 03ee"
        },
        {
            "03c6": "JUMPI"
        },
        {
            "03c7": "DUP1"
        },
        {
            "03c9": "PUSH1 01"
        },
        {
            "03ca": "EQ"
        },
        {
            "03cd": "PUSH2 03e1"
        },
        {
            "03ce": "JUMPI"
        },
        {
            "03d0": "PUSH1 02"
        },
        {
            "03d1": "SUB"
        },
        {
            "03d4": "PUSH2 01f5"
        },
        {
            "03d5": "JUMPI"
        },
        {
            "03d6": "DUP4"
        },
        {
            "03d7": "MLOAD"
        },
        {
            "03d8": "LT"
        },
        {
            "03db": "PUSH2 032a"
        },
        {
            "03dc": "JUMPI"
        },
        {
            "03df": "PUSH2 01c5"
        },
        {
            "03e0": "JUMP"
        }
    ],
    [
        {
            "03e1": "JUMPDEST"
        },
        {
            "03e2": "POP"
        },
        {
            "03e3": "DUP4"
        },
        {
            "03e4": "MLOAD"
        },
        {
            "03e5": "GT"
        },
        {
            "03e8": "PUSH2 032a"
        },
        {
            "03e9": "JUMPI"
        },
        {
            "03ec": "PUSH2 0195"
        },
        {
            "03ed": "JUMP"
        }
    ],
    [
        {
            "03ee": "JUMPDEST"
        },
        {
            "03ef": "POP"
        },
        {
            "03f0": "DUP4"
        },
        {
            "03f1": "MLOAD"
        },
        {
            "03f2": "EQ"
        },
        {
            "03f5": "PUSH2 032a"
        },
        {
            "03f6": "JUMPI"
        },
        {
            "03f9": "PUSH2 0165"
        },
        {
            "03fa": "JUMP"
        }
    ],
    [
        {
            "03fb": "JUMPDEST"
        },
        {
            "03fc": "DUP6"
        },
        {
            "03fd": "SWAP5"
        },
        {
            "03fe": "POP"
        },
        {
            "0401": "PUSH2 02ea"
        },
        {
            "0402": "SWAP4"
        },
        {
            "0403": "POP"
        },
        {
            "0404": "PUSH0"
        },
        {
            "0405": "DUP6"
        },
        {
            "0408": "PUSH2 042a"
        },
        {
            "0409": "SWAP4"
        },
        {
            "040a": "SWAP5"
        },
        {
            "040b": "SWAP8"
        },
        {
            "040e": "PUSH2 0359"
        },
        {
            "0411": "PUSH2 0422"
        },
        {
            "0414": "PUSH2 041b"
        },
        {
            "0415": "DUP6"
        },
        {
            "0416": "SWAP7"
        },
        {
            "0419": "PUSH2 025d"
        },
        {
            "041a": "JUMP"
        }
    ],
    [
        {
            "041b": "JUMPDEST"
        },
        {
            "041c": "SWAP10"
        },
        {
            "041d": "SWAP1"
        },
        {
            "0420": "PUSH2 025d"
        },
        {
            "0421": "JUMP"
        }
    ],
    [
        {
            "0422": "JUMPDEST"
        },
        {
            "0423": "SWAP8"
        },
        {
            "0424": "GAS"
        },
        {
            "0425": "CALL"
        },
        {
            "0428": "PUSH2 024e"
        },
        {
            "0429": "JUMP"
        }
    ],
    [
        {
            "042a": "JUMPDEST"
        },
        {
            "042d": "PUSH2 032a"
        },
        {
            "042e": "JUMP"
        }
    ],
    [
        {
            "042f": "JUMPDEST"
        },
        {
            "0430": "SWAP1"
        },
        {
            "0433": "PUSH2 043e"
        },
        {
            "0435": "PUSH1 04"
        },
        {
            "0436": "MLOAD"
        },
        {
            "0438": "PUSH1 f0"
        },
        {
            "0439": "SHR"
        },
        {
            "043b": "PUSH1 06"
        },
        {
            "043c": "SWAP2"
        },
        {
            "043d": "JUMP"
        }
    ],
    [
        {
            "043e": "JUMPDEST"
        },
        {
            "043f": "SWAP1"
        },
        {
            "0440": "DUP2"
        },
        {
            "0441": "JUMPDEST"
        },
        {
            "0444": "PUSH2 044b"
        },
        {
            "0445": "JUMPI"
        },
        {
            "0446": "POP"
        },
        {
            "0447": "POP"
        },
        {
            "0448": "SWAP1"
        },
        {
            "0449": "POP"
        },
        {
            "044a": "JUMP"
        }
    ],
    [
        {
            "044b": "JUMPDEST"
        },
        {
            "044e": "PUSH2 045a"
        },
        {
            "044f": "SWAP1"
        },
        {
            "0451": "PUSH1 01"
        },
        {
            "0452": "DUP2"
        },
        {
            "0453": "MLOAD"
        },
        {
            "0454": "PUSH0"
        },
        {
            "0455": "BYTE"
        },
        {
            "0456": "SWAP2"
        },
        {
            "0457": "ADD"
        },
        {
            "0458": "SWAP2"
        },
        {
            "0459": "JUMP"
        }
    ],
    [
        {
            "045a": "JUMPDEST"
        },
        {
            "045b": "SWAP1"
        },
        {
            "045c": "SWAP3"
        },
        {
            "045d": "SWAP1"
        },
        {
            "045e": "SWAP2"
        },
        {
            "045f": "DUP4"
        },
        {
            "0460": "DUP4"
        },
        {
            "0461": "ISZERO"
        },
        {
            "0464": "PUSH2 0543"
        },
        {
            "0465": "JUMPI"
        },
        {
            "0466": "POP"
        },
        {
            "0467": "DUP3"
        },
        {
            "0469": "PUSH1 01"
        },
        {
            "046a": "EQ"
        },
        {
            "046d": "PUSH2 04e3"
        },
        {
            "046e": "JUMPI"
        },
        {
            "046f": "DUP3"
        },
        {
            "0471": "PUSH1 02"
        },
        {
            "0472": "EQ"
        },
        {
            "0475": "PUSH2 04bf"
        },
        {
            "0476": "JUMPI"
        },
        {
            "0477": "DUP3"
        },
        {
            "0479": "PUSH1 03"
        },
        {
            "047a": "EQ"
        },
        {
            "047d": "PUSH2 049d"
        },
        {
            "047e": "JUMPI"
        },
        {
            "047f": "POP"
        },
        {
            "0480": "POP"
        },
        {
            "0482": "PUSH1 04"
        },
        {
            "0483": "SUB"
        },
        {
            "0486": "PUSH2 0220"
        },
        {
            "0487": "JUMPI"
        },
        {
            "048a": "PUSH2 02f8"
        },
        {
            "048d": "PUSH2 0300"
        },
        {
            "0490": "PUSH2 02ea"
        },
        {
            "0491": "DUP5"
        },
        {
            "0492": "SWAP4"
        },
        {
            "0494": "PUSH1 01"
        },
        {
            "0495": "DUP2"
        },
        {
            "0496": "MLOAD"
        },
        {
            "0497": "PUSH0"
        },
        {
            "0498": "BYTE"
        },
        {
            "0499": "SWAP2"
        },
        {
            "049a": "ADD"
        },
        {
            "049b": "SWAP2"
        },
        {
            "049c": "JUMP"
        }
    ],
    [
        {
            "049d": "JUMPDEST"
        },
        {
            "049e": "SWAP1"
        },
        {
            "049f": "SWAP4"
        },
        {
            "04a0": "SWAP3"
        },
        {
            "04a1": "PUSH0"
        },
        {
            "04a2": "DUP1"
        },
        {
            "04a3": "DUP1"
        },
        {
            "04a4": "DUP1"
        },
        {
            "04a5": "SWAP6"
        },
        {
            "04a6": "POP"
        },
        {
            "04a9": "PUSH2 031f"
        },
        {
            "04ac": "PUSH2 04b2"
        },
        {
            "04ad": "SWAP5"
        },
        {
            "04b0": "PUSH2 025d"
        },
        {
            "04b1": "JUMP"
        }
    ],
    [
        {
            "04b2": "JUMPDEST"
        },
        {
            "04b3": "SWAP2"
        },
        {
            "04b4": "SWAP3"
        },
        {
            "04b5": "SWAP2"
        },
        {
            "04b6": "PUSH0"
        },
        {
            "04b7": "NOT"
        },
        {
            "04b8": "ADD"
        },
        {
            "04b9": "SWAP1"
        },
        {
            "04ba": "DUP2"
        },
        {
            "04bd": "PUSH2 0441"
        },
        {
            "04be": "JUMP"
        }
    ],
    [
        {
            "04bf": "JUMPDEST"
        },
        {
            "04c0": "SWAP1"
        },
        {
            "04c1": "SWAP4"
        },
        {
            "04c2": "SWAP3"
        },
        {
            "04c5": "PUSH2 02ea"
        },
        {
            "04c6": "SWAP3"
        },
        {
            "04c7": "POP"
        },
        {
            "04c8": "PUSH0"
        },
        {
            "04c9": "DUP5"
        },
        {
            "04ca": "DUP1"
        },
        {
            "04cd": "PUSH2 0359"
        },
        {
            "04d0": "PUSH2 04da"
        },
        {
            "04d3": "PUSH2 0352"
        },
        {
            "04d4": "DUP6"
        },
        {
            "04d5": "SWAP7"
        },
        {
            "04d8": "PUSH2 025d"
        },
        {
            "04d9": "JUMP"
        }
    ],
    [
        {
            "04da": "JUMPDEST"
        },
        {
            "04db": "SWAP7"
        },
        {
            "04dc": "GAS"
        },
        {
            "04dd": "CALL"
        },
        {
            "04de": "POP"
        },
        {
            "04e1": "PUSH2 04b2"
        },
        {
            "04e2": "JUMP"
        }
    ],
    [
        {
            "04e3": "JUMPDEST"
        },
        {
            "04e4": "SWAP1"
        },
        {
            "04e5": "SWAP4"
        },
        {
            "04e6": "SWAP3"
        },
        {
            "04e9": "PUSH2 0396"
        },
        {
            "04ea": "SWAP3"
        },
        {
            "04eb": "POP"
        },
        {
            "04ee": "PUSH2 0359"
        },
        {
            "04f1": "PUSH2 0508"
        },
        {
            "04f3": "PUSH1 20"
        },
        {
            "04f4": "DUP7"
        },
        {
            "04f5": "DUP1"
        },
        {
            "04f6": "DUP1"
        },
        {
            "04f9": "PUSH2 039d"
        },
        {
            "04fc": "PUSH2 03b8"
        },
        {
            "04ff": "PUSH2 038f"
        },
        {
            "0502": "PUSH2 03aa"
        },
        {
            "0503": "SWAP10"
        },
        {
            "0506": "PUSH2 025d"
        },
        {
            "0507": "JUMP"
        }
    ],
    [
        {
            "0508": "JUMPDEST"
        },
        {
            "0509": "DUP1"
        },
        {
            "050a": "ISZERO"
        },
        {
            "050d": "PUSH2 0536"
        },
        {
            "050e": "JUMPI"
        },
        {
            "050f": "DUP1"
        },
        {
            "0511": "PUSH1 01"
        },
        {
            "0512": "EQ"
        },
        {
            "0515": "PUSH2 0529"
        },
        {
            "0516": "JUMPI"
        },
        {
            "0518": "PUSH1 02"
        },
        {
            "0519": "SUB"
        },
        {
            "051c": "PUSH2 01f5"
        },
        {
            "051d": "JUMPI"
        },
        {
            "051e": "DUP4"
        },
        {
            "051f": "MLOAD"
        },
        {
            "0520": "LT"
        },
        {
            "0523": "PUSH2 04b2"
        },
        {
            "0524": "JUMPI"
        },
        {
            "0527": "PUSH2 01c5"
        },
        {
            "0528": "JUMP"
        }
    ],
    [
        {
            "0529": "JUMPDEST"
        },
        {
            "052a": "POP"
        },
        {
            "052b": "DUP4"
        },
        {
            "052c": "MLOAD"
        },
        {
            "052d": "GT"
        },
        {
            "0530": "PUSH2 04b2"
        },
        {
            "0531": "JUMPI"
        },
        {
            "0534": "PUSH2 0195"
        },
        {
            "0535": "JUMP"
        }
    ],
    [
        {
            "0536": "JUMPDEST"
        },
        {
            "0537": "POP"
        },
        {
            "0538": "DUP4"
        },
        {
            "0539": "MLOAD"
        },
        {
            "053a": "EQ"
        },
        {
            "053d": "PUSH2 04b2"
        },
        {
            "053e": "JUMPI"
        },
        {
            "0541": "PUSH2 0165"
        },
        {
            "0542": "JUMP"
        }
    ],
    [
        {
            "0543": "JUMPDEST"
        },
        {
            "0544": "DUP6"
        },
        {
            "0545": "SWAP5"
        },
        {
            "0546": "POP"
        },
        {
            "0549": "PUSH2 02ea"
        },
        {
            "054a": "SWAP4"
        },
        {
            "054b": "POP"
        },
        {
            "054c": "PUSH0"
        },
        {
            "054d": "DUP6"
        },
        {
            "0550": "PUSH2 0563"
        },
        {
            "0551": "SWAP4"
        },
        {
            "0552": "SWAP5"
        },
        {
            "0553": "SWAP8"
        },
        {
            "0556": "PUSH2 0359"
        },
        {
            "0559": "PUSH2 0422"
        },
        {
            "055c": "PUSH2 041b"
        },
        {
            "055d": "DUP6"
        },
        {
            "055e": "SWAP7"
        },
        {
            "0561": "PUSH2 025d"
        },
        {
            "0562": "JUMP"
        }
    ],
    [
        {
            "0563": "JUMPDEST"
        },
        {
            "0566": "PUSH2 04b2"
        },
        {
            "0567": "JUMP"
        }
    ],
    [
        {
            "0568": "JUMPDEST"
        },
        {
            "0569": "SWAP1"
        },
        {
            "056a": "SWAP2"
        },
        {
            "056b": "DUP2"
        },
        {
            "056c": "MLOAD"
        },
        {
            "056d": "DUP2"
        },
        {
            "056e": "MSTORE"
        },
        {
            "0570": "PUSH1 04"
        },
        {
            "0571": "DUP4"
        },
        {
            "0572": "GT"
        },
        {
            "0575": "PUSH2 057b"
        },
        {
            "0576": "JUMPI"
        },
        {
            "0577": "POP"
        },
        {
            "0578": "ADD"
        },
        {
            "0579": "SWAP1"
        },
        {
            "057a": "JUMP"
        }
    ],
    [
        {
            "057b": "JUMPDEST"
        },
        {
            "057d": "PUSH1 04"
        },
        {
            "057e": "SWAP2"
        },
        {
            "057f": "DUP3"
        },
        {
            "0580": "ADD"
        },
        {
            "0581": "SWAP3"
        },
        {
            "0582": "SWAP2"
        },
        {
            "0583": "ADD"
        },
        {
            "0584": "SWAP1"
        },
        {
            "0586": "PUSH1 03"
        },
        {
            "0587": "NOT"
        },
        {
            "0588": "ADD"
        },
        {
            "0589": "JUMPDEST"
        },
        {
            "058a": "PUSH0"
        },
        {
            "058b": "DUP2"
        },
        {
            "058c": "SGT"
        },
        {
            "058f": "PUSH2 0595"
        },
        {
            "0590": "JUMPI"
        },
        {
            "0591": "POP"
        },
        {
            "0592": "POP"
        },
        {
            "0593": "SWAP1"
        },
        {
            "0594": "JUMP"
        }
    ],
    [
        {
            "0595": "JUMPDEST"
        },
        {
            "0596": "SWAP1"
        },
        {
            "0597": "SWAP2"
        },
        {
            "059a": "PUSH2 05b5"
        },
        {
            "059b": "DUP2"
        },
        {
            "059d": "PUSH1 01"
        },
        {
            "059f": "PUSH1 20"
        },
        {
            "05a0": "SWAP4"
        },
        {
            "05a1": "MLOAD"
        },
        {
            "05a2": "PUSH0"
        },
        {
            "05a3": "BYTE"
        },
        {
            "05a4": "SWAP2"
        },
        {
            "05a5": "ADD"
        },
        {
            "05a6": "SWAP1"
        },
        {
            "05a7": "DUP2"
        },
        {
            "05a8": "MLOAD"
        },
        {
            "05a9": "DUP2"
        },
        {
            "05ab": "PUSH1 20"
        },
        {
            "05ac": "SUB"
        },
        {
            "05ae": "PUSH1 03"
        },
        {
            "05af": "SHL"
        },
        {
            "05b0": "SHR"
        },
        {
            "05b1": "SWAP2"
        },
        {
            "05b2": "ADD"
        },
        {
            "05b3": "SWAP2"
        },
        {
            "05b4": "JUMP"
        }
    ],
    [
        {
            "05b5": "JUMPDEST"
        },
        {
            "05b6": "DUP5"
        },
        {
            "05b7": "MSTORE"
        },
        {
            "05b8": "SWAP3"
        },
        {
            "05b9": "ADD"
        },
        {
            "05ba": "SWAP1"
        },
        {
            "05bc": "PUSH1 1f"
        },
        {
            "05bd": "NOT"
        },
        {
            "05be": "ADD"
        },
        {
            "05c1": "PUSH2 0589"
        },
        {
            "05c2": "JUMP"
        }
    ],
    [
        {
            "05c3": "JUMPDEST"
        },
        {
            "05c4": "SWAP2"
        },
        {
            "05c5": "SWAP1"
        },
        {
            "05c6": "JUMPDEST"
        },
        {
            "05c7": "PUSH0"
        },
        {
            "05c8": "DUP2"
        },
        {
            "05c9": "SGT"
        },
        {
            "05cc": "PUSH2 05d2"
        },
        {
            "05cd": "JUMPI"
        },
        {
            "05ce": "POP"
        },
        {
            "05cf": "POP"
        },
        {
            "05d0": "SWAP1"
        },
        {
            "05d1": "JUMP"
        }
    ],
    [
        {
            "05d2": "JUMPDEST"
        },
        {
            "05d3": "SWAP1"
        },
        {
            "05d4": "SWAP2"
        },
        {
            "05d7": "PUSH2 05f2"
        },
        {
            "05d8": "DUP2"
        },
        {
            "05da": "PUSH1 01"
        },
        {
            "05dc": "PUSH1 20"
        },
        {
            "05dd": "SWAP4"
        },
        {
            "05de": "MLOAD"
        },
        {
            "05df": "PUSH0"
        },
        {
            "05e0": "BYTE"
        },
        {
            "05e1": "SWAP2"
        },
        {
            "05e2": "ADD"
        },
        {
            "05e3": "SWAP1"
        },
        {
            "05e4": "DUP2"
        },
        {
            "05e5": "MLOAD"
        },
        {
            "05e6": "DUP2"
        },
        {
            "05e8": "PUSH1 20"
        },
        {
            "05e9": "SUB"
        },
        {
            "05eb": "PUSH1 03"
        },
        {
            "05ec": "SHL"
        },
        {
            "05ed": "SHR"
        },
        {
            "05ee": "SWAP2"
        },
        {
            "05ef": "ADD"
        },
        {
            "05f0": "SWAP2"
        },
        {
            "05f1": "JUMP"
        }
    ],
    [
        {
            "05f2": "JUMPDEST"
        },
        {
            "05f3": "DUP5"
        },
        {
            "05f4": "MSTORE"
        },
        {
            "05f5": "SWAP3"
        },
        {
            "05f6": "ADD"
        },
        {
            "05f7": "SWAP1"
        },
        {
            "05f9": "PUSH1 1f"
        },
        {
            "05fa": "NOT"
        },
        {
            "05fb": "ADD"
        },
        {
            "05fe": "PUSH2 05c6"
        },
        {
            "05ff": "JUMP"
        }
    ]
]