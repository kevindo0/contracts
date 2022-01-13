// SPDX-License-Identifier: MGT

pragma solidity ^0.8.7;

contract EventEmit {
    uint256 public value;

    event valueChange(uint256 changeBefor, uint256 changeAfter);

    constructor() {
        value = 99;
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function setValue(uint256 _value) public {
        emit valueChange(value, _value);
        value = _value;
    }
}
