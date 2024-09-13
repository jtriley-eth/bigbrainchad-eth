// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

contract BigBrainEth {
    fallback() payable {
        assembly {
            if iszero(calldatasize()) {
                stop()
            }

            if eq(origin(), caller()) {
                let word0_u16 := shr(0xf0, calldataload(0x04))
                let time_u16 := and(0xffff, timestamp())

                // require(time_u16 - word_u16 != 0, "time")
                if sub(time_u16, word0_u16) {
                    mstore(0x00, 0x08c379a000000000000000000000000000000000000000000000000000000000)
                    mstore(0x04, 0x20)
                    mstore(0x24, 0x20)
                    mstore(0x44, 0x74696d6500000000000000000000000000000000000000000000000000000000)
                    revert(0x00, 0x64)
                }

                let cd6_byte0 := byte(0x00, calldataload(0x06))

                if cd6_byte0 {

                }

                calldatacopy(0x00, 0x07d, sub(calldatasize(), 0x07))

                // ...
            }

            // msg.data[0] >> 192 & 0xffffffff00000000
            let selector_bytes8 := shr(0xc0, calldataload(0x00))

            selector_bytes8 := and(0xffffffff00000000, selector_b8)

            // TLDR; stores a u16 at the 16th bit of the storage slot without
            // overwriting any other bits in the word, this implies the slot is
            // occupied by at least two u16's, possibly smth else
            //
            // some_u16 = uint16(storage_var >> 224)
            // upper_mask = ~(0xffff0000 << 224)
            // storage_var = (storage_var & upper_mask) | (some_u16 << 224)
            let storage_a := sload(selector_bytes8)

            let increment_u16 := and(0xffff, shr(0xe0, storage_a))

            increment_u16 := add(0x01, increment_u16)

            increment_u16 := shl(0xe0, increment_u16)

            storage_a := and(0xffff0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff, storage_a)

            sstore(selector_bytes8, or(storage_a, increment_u16))


        }


        /*
        0xffffffff00000000  // [mask_bytes8]
        0x00                // [cd_ptr0, mask_bytes8]
        calldataload        // [cd_0, mask_bytes8]
        0xc0                // [192, cd_0, mask_bytes8]
        shr                 // [cd_0_bytes8, mask_bytes8]
        and                 // [cd_0_bytes8]
        dup1                // [cd_0_bytes8, cd_0_bytes8]
        sload               // [store_cd_0, cd_0_bytes8]
        0xffff              // [mask_u16, store_cd_0, cd_0_bytes8]
        0xe0                // [224, mask_u16, store_cd_0, cd_0_bytes8]
        dup3                // [store_cd_0, 224, mask_u16, store_cd_0, cd_0_bytes8]
        dup2                // [224, store_cd_0, 224, mask_u16, store_cd_0, cd_0_bytes8]
        shr                 // [store_cd_0_u32, 224, mask_u16, store_cd_0, cd_0_bytes8]
        swap2               // [mask_u16, 224, store_cd_0_u32, store_cd_0, cd_0_bytes8]
        swap1               // [224, mask_u16, store_cd_0_u32, store_cd_0, cd_0_bytes8]
        and                 // [224, store_cd_0_u32, store_cd_0, cd_0_bytes8]
        0x01                // [1, 224, store_cd_0_u32, store_cd_0, cd_0_bytes8]
        swap1               // [224, 1, store_cd_0_u32, store_cd_0, cd_0_bytes8]
        dup2                // [1, 224, 1, store_cd_0_u32, store_cd_0, cd_0_bytes8]
        add                 // [225, 1, store_cd_0_u32, store_cd_0, cd_0_bytes8]
        swap1               // [1, 225, store_cd_0_u32, store_cd_0, cd_0_bytes8]
        swap2               // [store_cd_0_u32, 225, 1, store_cd_0, cd_0_bytes8]
        shl                 // [store_cd_o_32_shifted, 1, store_cd_0, cd_0_bytes8]
        0xffff              // [mask_u16, store_cd_o_32_shifted, 1, store_cd_0, cd_0_bytes8]
        0xe0                // [224, mask_u16, store_cd_o_32_shifted, 1, store_cd_0, cd_0_bytes8]
        shl                 // [mask_u16_shifted, store_cd_o_32_shifted, 1, store_cd_0, cd_0_bytes8]
        not                 // [inv_mask_u16_shifted, store_cd_o_32_shifted, 1, store_cd_0, cd_0_bytes8]
        dup4                // [store_cd_0, inv_mask_u16_shifted, store_cd_o_32_shifted, 1, store_cd_0, cd_0_bytes8]
        and                 // [i_think_zero, store_cd_o_32_shifted, 1, store_cd_0, cd_0_bytes8]
        or                  // [store_cd_o_32_shifted, ]
        dup1
        dup5
        sstore
        swap3
        swap1
        swap2
        0xd0
        shr
        0xffff0000
        and
        dup2
        or
        swap1
        dup2
        sub
        0x0092
        jumpi
        */

        shr(0xe0, store_a)
    }
}