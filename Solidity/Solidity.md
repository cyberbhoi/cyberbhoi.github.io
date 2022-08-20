## Solidity Notes

- `abi.decode(bytes memory encodedData, (...)) returns (...)` : ABI-decodes the provided data. The types are given in paranetheses as second argument.

_Example :_ `(uint a, uint[2] ,memory b, bytes memory c) = abi.decode(data, (uint, uint[2], bytes))`

- `abi.encode(...) returns (bytes memory) ` : ABI-encodes the given arguments.
- `abi.encodePacked(...) returns (bytes memory)` : Perfoms packed encoding of the given arguments. Note that this encoding can be amiguous!
- `abi.encodeWithSelector(bytes4 selector, ...) returns (bytes memory)` : ABI-encodes the given arguments starting from the second and prepens the given four-byte selector.
- `abi.encodeCall(function funcitonPointer, (...)) returns (bytes memory)` : ABI-encodes a call to functionPointer with the arguments found in the tuple. Perorms a full type-check, ensuring the types match the function signature. Result equals `abi.encodeWithSelector(functionPointer.selector, (...))`
- `abi.encodeWithSignature(String memory signature, ...) returns (bytes memory)` : Equivalent to `abi.encodeWithSelector(bytes4(keccak256(bytes(signature)), ...))`
- `bytes.concat(...) returns (bytes memory)` : Concatenates varibale number of arguments to one byte array.
- `bytes.concat(...) returns (string memory)` : Concatenates variable number of arguments to one string array.
- `string.concat(...) returns (string memory)` : Concatenates variable number of arguments to one string array.
- `block.basefee(uint)` : current block's base fee (EIP-3198 and EIP-1559)
- `block.chainid(uint)` : current chain id
- `block.coinbase(address payable)` : current block miner's address
- `block.difficulty(uint)` : current block difficulty
- `block.gaslimit(uint)` : current block gaslimit
- `block.number(uint)` : current block number
- `block.timestamp(uint)` : current block timestamp in seconds since Unix epoch
- `gasleft() returns (uint256)` : remaining gas
- `msg.data(bytes)` : complete calldata
- `msg.sender(address)` : sender of the message ( current call)
- `msg.sig(bytes4)` : first four bytes of the calldata(i.e. function identifier)
- `msg.value(uint)` : number of wei send with the message
- `tx.gasprice(uint)` : gas price of the transaction
- `tx.origin(address)` : sender of the transaction(full call chain)
- `assert(bool condition)` : abort execution and revert state changes if condition is false (use for internal error)
- `require(bool condition)` : abort execution and revert state changes if condition is false( use for malformed input or error in external component)
- `require(bool condition, string memory message)` : abort execution and revert state changes if condition is false (use for malformed input or error in external component). Also provide error message.
- `revert()` : abort execution and revert state changes
- `revert(string memory message)` : abort execution and revert state chnages providing an explanatory string
- `blockhash(uint blockNumber) return (bytes32)` : hash of the given block - only works for 256 most recent block
- `keccak256(bytes memory) returns (bytes32)` : compute the Keccak-256 hash of the input
- `sha256(bytes memory) returns (bytes32)` : compute the SHA-256 hash of the input
- `ripemd160(bytes memory) returns (bytes20)` : compute the RIPEMD-160 hash of the input
- `ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address)` : recover address associate with with public key from elliptic curve signature, return zero on error.
- `addmod(uint x, uint y, uint k) returns (uint)` : compute (x+y) % k where the addiotion is performed with arbitary precision and does not wrap around at 2\*\*256. Assert that k != 0 starting from version 0.5.0.
- `this(current contract's type)`: the current contract, explicitly converible to address or address payable
- `super` : the contract on level higher in the inheritance hierarchy.
- `selfdestruct(address payable reipient)` : destroy the current contract, sending its funds to the given address
- `<address>.balance(uint256)` : balance of the Address in Wei
- `<address>.code(bytes memory)` : code at the Address (can be empty)
- `<address>.codehash(bytes32)` : the codehash of the Address
- `<address payable>.send(uint256 amount) return (bool)` : send given amount of Wei to Address, return false on failure.
- `<address payable>.transfer(uint256 amount)` : Send given amount of Wei to Address, throws on failure
- `type(C).name(string)` : the name of the contract
- `type(C).creationCode(bytes memory)` : creation bytecode of the given contract.
- `type(C).runtimeCode(bytes memory)` : runtime bytecode of the given contract.
- `type(I).interfaceId(bytes4)` : Value containing the EIP-165 interface identifier of the given interface.
- `type(T).min(T)` : The minimum value representable by the integer type T.
- `type(T).max(T)` : The maximum value representable by the integer type T.

## Function visibility specifiers

- `public` : visible externally and internally (creates a getter function for storage/state variables)
- `private` : only visible in the current contract
- `external` : Only visible externally (only for functions) - i.e. can only be message-called (via this.func)
- `internal` : Only visible internally

## Modifiers

- `pure` for functions : Disallows modification or access of state.
- `view` for functions : Disallows modification of state.
- `payable` for functions : Allows them to receive Ether together with a call.
- `constant` for state variables : Disallows assignment (except initialisation), does not occupy storage slot.
- `immutable` for state variables : Allow exactly one assignment at construction time and is constatnt afterwards. Is stored in code.
- `anonymous` for events : Does not store event signatures as topic.
- `indexed` for event parameters : Store the parameter as topic.
- `virtual` for functions and modifiers : Allows the function's or modifier's behaviour to be changed in derived contracts.
- `override` : States that this function, modifier or public state variable changes the behaviour of a function or modifier in a base contract.

## Error Types

- `JSONError` : JSON input doesn't conform to the requried format. e.g. input is not a JSON object, the language is not support etc.
- `IOError` : IO and import processing errors, such as unresolvable URL or hash mismatch in supplied sources.
- `ParserError` : Source code doesn't conform to the language rules.
- `DocstringParsingError` : The NatSpec tags in the comment block can not be parsed.
- `SyntaxError` : Syntactical error, such as continue is used outside of a for loop.
- `DeclarationError` : Invalid, unresolvable or clashing identifier names. e.g. Identifier not found
- `TypeError` : Error within the type system, such as invalid type conversions, invalid assignment, etc.
- `UnimplementedFeatureError` : Feature is not supported by the compiler, but is expected to be supported in future versions.
- `InternalCompilerError` : Internal bug triggered in the compiler - this should be reported as an issue.
- `Exception` : Unknown failure during compilation - this should be reported as an issue.
- `CompilerError` : Invalid use of the compiler stack - this should be reported as an issue.
- `FatalError` : Fatal error not processed correctly - this should be reported as an issue.
- `Warning` : A warning, which didn't stop the compilation, but should be addressed if possible.
- `Info` : Information that the compiler thinks the user might find useful, but is not dangerous and does not necessarily need to be addressed.

## Structure of Contract



**State Variables** : State variables are variables whose values are permanently stored in contract storage.

```
//
SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract SimpleStorage{
    uint storedData; // State variable
}

```

**Functions** : Functions are the executable uints of code. Functions are usually defined inside a contract, but they can also defined outside of contract. *Function* *Calls* can happen internally or externally and have different levels of visivility towords other contracts. Functions accept parameters and return varibales to pass *parameters* *and* *values* between them.


**Function Modifiers** : Function modifiers can be used to amend the semantic of functions in a declarative way.

**Event** : Events are convenience interface with the EVM logging facilities.

**Error** : Errors allow you to define descriptive names and data for failure situations. Errors can be used in revert statements. In comparision to string descriptions. Errors are much cheaper and allow you to encode additional data. You can use NatSpec to describe the error to the user.

**Struct Types** : Structs are custom defined types that can group several variables.

**Enum Types** : Enums can be used to create custom  types with a finite set of 'constant value'.



## Types

- Value Types
- Reference Types
- Mapping Types
- Operators
- Conversions between elementary types
- Conversions between Literal and elementary types

Solidity is a statically typed language, which means that the type of each variable ( state and local ) needs to be specified. Solidity provides several elementary types which can be combined to form complex types.

types can interact with each other in expressions containing operators. For a quick reference of the various operators.

**Value Types**

The following types are also called value types because of these types will always passed by value, i.e. they are always copied when they are used as function arguments or in assignments.

*Booleans* : The possible values are constant true and false.

*Integers* : int(signed) and uint(unsigned) integers of various size. Keywords uint8 to uint256 in steps of 8 (unsigned of 8 up to 256 bits ) and int8 to int256. uint and int are aliases for uint256 and int256, respectively.

*Bit operations* : Bit operations are performed on the two's complement representation of the number. This means that, for example ~int256(0) == int256(-1).

*Shift* : The result of a shift operations has the type of the left operand, truncating the result to match the type. The right operand must be unsigned type, trying to shift by a signed type will produce a compilation error.

Shift can be 'simulated' using multiplication by powers of two in the following way. Note that the truncation to the type of the left operand is always performed at the end, but not mentioned explicity.

- x << y is equivalent to the mathematical expression x*2**y
- x >> y is equivalent to the mathematical expression x / 2**y, rounded towords negative infinity.

*Modulo* : The modulo operation a % n yields the remainder r after the division of the operand a by the operand n, where q = int(a / n) and r = a - ( a * q)

*Exponentiation* : Exponentiation is only available for unsigned types in the exponent. The resulting type of an exponentiation is always equal to the type of the base. Plaease take care that it is large enough to hold the result and prepare for potential assertion failure or wrapping behaviour.

In checked mode, exponentiation only use the comparatively cheap exp opcode for small bases. For the cases of x**3, the expression x\*x*x might be cheaper. In any case, gas cost tests and the use of the optimizer are advisable.

Note that 0**0 is defined by EVM is 1.

*Address* : The address type comes in two flavours, which are largely identical.

- address: Holds a 20 byte value (size  of an Ethereum address).
- address payable :  smae as address, but with the additional members **transfer** and **send**.

The idea behind this distinction is that address payable is an address is an address you can send Ether to, while you are not supposed to send Ether to a plain address, for example because it might be a smart contract that was not built to accept Ether.

Implicit conversions from address payable to address are allowed. whereas conversions from address to address payable must be explicit via ```payable(<address>)```.

Explicit conversions to and from address are allowd for uint160, integer literals, bytes20 and contract types.

Only expressions of type address and contract-type can be converted to the type address payable via the explicit conversion payable(...) For contract-type, this conversion is only allowed if the contract can receive Ether. i.e. the contract either has a receive or a payable fallback function. Note that payable(0) is valid and is an exception to this rule.

If you need a variable of type address and plan to send Ether to it, then declare its type ```address payable``` to make this requirement visible. Also, try to make this distinction or conversion as early as possible.

Members of Addresses

- balance and transfer : It is possible to query the balance of an address using the property balance and to send Ether (in uints of wei) to a payable address using the transfer function:

```
address payable x = payable(0x123);
address myAddress = address(this);

if (x.balance < 10 && myAddress.balance >= 10 ) x.transfer(10)

```
The transfer function fails if the balance of the current contract is not large enough or if the Ether transfer is rejected by the receiving account. The transfer function reverts on failure.

If x is a contract address, its code (more specifically: its Receive Ether Function, it present, or otherwise its Fallback Function, it present) will be executed together with the transfer call( this is a feature of the EVM and cannot be prevented). If the execution runs out gas or fails in any way, the Ether transfer will be reverted and the current contract will stop with an exception.

- send : Send is the low-level counterpart of transfer. If the execution fails, the current contract will not stop with an exception, but send will return false. There are some dangers in using send: The transfer fails if the call stack depth is at 1024 (this can always be forced by the caller) and it also fails if the recipient runs out of gas. So in order to make safe Ether transfer, always check return value of send, use transfer or even better: use a pattern where the recipient withdraws the money.
- call, delegatecall and staticcall : In order to interface with contracts that do not adhere to the ABI, or to get more direct control over the encoding, the functions call, delegatecall and staticcall are provided. They all take a single bytes memory parameter and return the success condition (as a bool) and the returned data (bytes memory). The functions ```abi.encode, abi.encodePacked, abi,encodeWithSelector``` and ```abi.encodeWithSignature``` can be used to encode structure data.

Example:

```
bytes memory payload = abi.encodeWithSignature("register(string)" , "MyName");

(bool success, bytes memory returnData) = address(nameReg).call(payload);

require(success);
```
Warning: All these functions are low-level functions and should be used with care. Specifically, any unknown contract might be malicious and if you call it, you hand over control to that contract which could in turn call back into your contract, do be prepared for changes to your state variables when the call returns. The regular way to interact with other contracts is to call a function on a contract object(x.f()).


























## Units and Globally avaolable variables







## Expressions and control structures





## Contracts




## Inline Assembly