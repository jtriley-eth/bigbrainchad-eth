/// @title            Decompiled Contract
/// @author           Jonathan Becker <jonathan@jbecker.dev>
/// @custom:version   heimdall-rs v0.8.4
///
/// @notice           This contract was decompiled using the heimdall-rs decompiler.
///                     It was generated directly by tracing the EVM opcodes from this contract.
///                     As a result, it may not compile or even be valid yul code.
///                     Despite this, it should be obvious what each function does. Overall
///                     logic should have been preserved throughout decompiling.
///
/// @custom:github    You can find the open-source decompiler here:
///                       https://heimdall.rs

object "DecompiledContract" {
    object "runtime" {
        code {
            
            function selector() -> s {
                s := div(calldataload(0), 0x100000000000000000000000000000000000000000000000000000000)
            }
            
            function castToAddress(x) -> a {
                a := and(x, 0xffffffffffffffffffffffffffffffffffffffff)
            }
            
            switch selector()
            default {
                if iszero(calldatasize()) {
                    if eq(caller(), origin()) {
                        sstore(and(shr(0xc0, calldataload(0)), 0xffffffff00000000), or(and(sload(and(shr(0xc0, calldataload(0)), 0xffffffff00000000)), 0xffff0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff), shl(0xe0, add(0x01, and(shr(0xe0, sload(and(shr(0xc0, calldataload(0)), 0xffffffff00000000))), 0xffff)))))
                        if sub(or(and(shr(0xc0, calldataload(0)), 0xffffffff00000000), and(0xffff0000, shr(0xd0, sload(and(shr(0xc0, calldataload(0)), 0xffffffff00000000))))), and(shr(0xc0, calldataload(0)), 0xffffffff00000000)) {
                            mstore(0, sload(or(and(shr(0xc0, calldataload(0)), 0xffffffff00000000), and(0xffff0000, shr(0xd0, sload(and(shr(0xc0, calldataload(0)), 0xffffffff00000000)))))))
                            if sgt(add(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, shr(0xf0, sload(or(and(shr(0xc0, calldataload(0)), 0xffffffff00000000), and(0xffff0000, shr(0xd0, sload(and(shr(0xc0, calldataload(0)), 0xffffffff00000000)))))))), 0) {
                                if shr(0xf0, mload(0x04)) {
                                    if iszero(byte(0, mload(0x06))) {
                                        if eq(0x01, byte(0, mload(0x06))) {
                                            mstore(0x20, mload(add(add(add(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01), byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07))))))))), 0x01), 0x02)))
                                            if gt(shr(0xf0, mload(add(add(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01), byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07))))))))), 0x01))), 0x04) {
                                                if sgt(add(0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc, shr(0xf0, mload(add(add(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01), byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07))))))))), 0x01)))), 0) {
                                                    call(gas(), shr(shl(0x03, sub(0x20, byte(0, mload(0x07)))), mload(0x08)), shr(shl(0x03, sub(0x20, byte(0, mload(add(0x08, byte(0, mload(0x07))))))), mload(add(add(0x08, byte(0, mload(0x07))), 0x01))), 0x20, shr(0xf0, mload(add(add(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01), byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07))))))))), 0x01))), 0x20, 0x20)
                                                    if iszero(call(gas(), shr(shl(0x03, sub(0x20, byte(0, mload(0x07)))), mload(0x08)), shr(shl(0x03, sub(0x20, byte(0, mload(add(0x08, byte(0, mload(0x07))))))), mload(add(add(0x08, byte(0, mload(0x07))), 0x01))), 0x20, shr(0xf0, mload(add(add(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01), byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07))))))))), 0x01))), 0x20, 0x20)) { revert(0, returndatasize()); } else {
                                                        returndatacopy(0, 0, returndatasize())
                                                        if iszero(byte(0, mload(add(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01), byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))))))))) {
                                                            if eq(0x01, byte(0, mload(add(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01), byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))))))))) {
                                                                if gt(mload(0x20), shr(shl(0x03, sub(0x20, byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))))))), mload(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01)))) {
                                                                    if add(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, shr(0xf0, mload(0x04))) { revert(0, 0x64); } else {
                                                                        mstore(0, 0x08c379a000000000000000000000000000000000000000000000000000000000)
                                                                        mstore(0x04, 0x20)
                                                                        mstore(0x24, 0x20)
                                                                        mstore(0x44, 0x756e6578706563746564206e6f74206774000000000000000000000000000000)
                                                                        if sub(0x02, byte(0, mload(add(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01), byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))))))))) {
                                                                            if lt(mload(0x20), shr(shl(0x03, sub(0x20, byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))))))), mload(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01)))) { revert(0, 0x64); } else {
                                                                                mstore(0, 0x08c379a000000000000000000000000000000000000000000000000000000000)
                                                                                mstore(0x04, 0x20)
                                                                                mstore(0x24, 0x20)
                                                                                mstore(0x44, 0x756e6578706563746564206e6f74206c74000000000000000000000000000000)
                                                                                mstore(0, 0x08c379a000000000000000000000000000000000000000000000000000000000)
                                                                                mstore(0x04, 0x20)
                                                                                mstore(0x24, 0x20)
                                                                                mstore(0x44, 0x696e76616c696420747970650000000000000000000000000000000000000000)
                                                                                if eq(mload(0x20), shr(shl(0x03, sub(0x20, byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))))))), mload(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01)))) { revert(0, 0x64); } else {
                                                                                    mstore(0, 0x08c379a000000000000000000000000000000000000000000000000000000000)
                                                                                    mstore(0x04, 0x20)
                                                                                    mstore(0x24, 0x20)
                                                                                    mstore(0x44, 0x756e6578706563746564206e6f74206571000000000000000000000000000000)
                                                                                    call(gas(), shr(shl(0x03, sub(0x20, byte(0, mload(0x07)))), mload(0x08)), shr(shl(0x03, sub(0x20, byte(0, mload(add(0x08, byte(0, mload(0x07))))))), mload(add(add(0x08, byte(0, mload(0x07))), 0x01))), 0x20, shr(0xf0, mload(add(add(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01), byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07))))))))), 0x01))), 0x20, 0x20)
                                                                                    if iszero(call(gas(), shr(shl(0x03, sub(0x20, byte(0, mload(0x07)))), mload(0x08)), shr(shl(0x03, sub(0x20, byte(0, mload(add(0x08, byte(0, mload(0x07))))))), mload(add(add(0x08, byte(0, mload(0x07))), 0x01))), 0x20, shr(0xf0, mload(add(add(add(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07)))))), 0x01), byte(0, mload(add(add(add(0x08, byte(0, mload(0x07))), 0x01), byte(0, mload(add(0x08, byte(0, mload(0x07))))))))), 0x01))), 0x20, 0x20)) { revert(0, returndatasize()); } else {
                                                                                        returndatacopy(0, 0, returndatasize())
                                                                                        if eq(0x02, byte(0, mload(0x06))) {
                                                                                            if eq(0x03, byte(0, mload(0x06))) {
                                                                                                if sub(0x04, byte(0, mload(0x06))) {
                                                                                                    if sgt(shr(0xf0, mload(0x08)), 0) {
                                                                                                        if iszero(byte(0, mload(0x07))) { revert(0, 0x64); } else {
                                                                                                            return(0x20, shr(0xf0, mload(0x08)))
                                                                                                            mstore(0, 0x08c379a000000000000000000000000000000000000000000000000000000000)
                                                                                                            mstore(0x04, 0x20)
                                                                                                            mstore(0x24, 0x20)
                                                                                                            mstore(0x44, 0x696e76616c696420636f6d6d616e640000000000000000000000000000000000)
                                                                                                            if sub(and(timestamp(), 0xffff), shr(0xf0, calldataload(0x04))) { revert(0, 0x64); } else {
                                                                                                                mstore(0, 0x08c379a000000000000000000000000000000000000000000000000000000000)
                                                                                                                mstore(0x04, 0x20)
                                                                                                                mstore(0x24, 0x20)
                                                                                                                mstore(0x44, 0x74696d6500000000000000000000000000000000000000000000000000000000)
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}