let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder } = require('util');

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let WASM_VECTOR_LEN = 0;

let cachegetNodeBufferMemory0 = null;
function getNodeBufferMemory0() {
    if (cachegetNodeBufferMemory0 === null || cachegetNodeBufferMemory0.buffer !== wasm.memory.buffer) {
        cachegetNodeBufferMemory0 = Buffer.from(wasm.memory.buffer);
    }
    return cachegetNodeBufferMemory0;
}

function passStringToWasm0(arg, malloc) {

    const len = Buffer.byteLength(arg);
    const ptr = malloc(len);
    getNodeBufferMemory0().write(arg, ptr, len);
    WASM_VECTOR_LEN = len;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {LegacyDaedalusPrivateKey} key
* @returns {BootstrapWitness}
*/
module.exports.make_daedalus_bootstrap_witness = function(tx_body_hash, addr, key) {
    _assertClass(tx_body_hash, TransactionHash);
    _assertClass(addr, ByronAddress);
    _assertClass(key, LegacyDaedalusPrivateKey);
    var ret = wasm.make_daedalus_bootstrap_witness(tx_body_hash.ptr, addr.ptr, key.ptr);
    return BootstrapWitness.__wrap(ret);
};

/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {Bip32PrivateKey} key
* @returns {BootstrapWitness}
*/
module.exports.make_icarus_bootstrap_witness = function(tx_body_hash, addr, key) {
    _assertClass(tx_body_hash, TransactionHash);
    _assertClass(addr, ByronAddress);
    _assertClass(key, Bip32PrivateKey);
    var ret = wasm.make_icarus_bootstrap_witness(tx_body_hash.ptr, addr.ptr, key.ptr);
    return BootstrapWitness.__wrap(ret);
};

/**
* @param {TransactionHash} tx_body_hash
* @param {PrivateKey} sk
* @returns {Vkeywitness}
*/
module.exports.make_vkey_witness = function(tx_body_hash, sk) {
    _assertClass(tx_body_hash, TransactionHash);
    _assertClass(sk, PrivateKey);
    var ret = wasm.make_vkey_witness(tx_body_hash.ptr, sk.ptr);
    return Vkeywitness.__wrap(ret);
};

/**
* @param {TransactionMetadata} metadata
* @returns {MetadataHash}
*/
module.exports.hash_metadata = function(metadata) {
    _assertClass(metadata, TransactionMetadata);
    var ret = wasm.hash_metadata(metadata.ptr);
    return MetadataHash.__wrap(ret);
};

/**
* @param {TransactionBody} tx_body
* @returns {TransactionHash}
*/
module.exports.hash_transaction = function(tx_body) {
    _assertClass(tx_body, TransactionBody);
    var ret = wasm.hash_transaction(tx_body.ptr);
    return TransactionHash.__wrap(ret);
};

/**
* @param {TransactionBody} txbody
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @returns {Value}
*/
module.exports.get_implicit_input = function(txbody, pool_deposit, key_deposit) {
    _assertClass(txbody, TransactionBody);
    _assertClass(pool_deposit, BigNum);
    _assertClass(key_deposit, BigNum);
    var ret = wasm.get_implicit_input(txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
    return Value.__wrap(ret);
};

/**
* @param {TransactionBody} txbody
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @returns {BigNum}
*/
module.exports.get_deposit = function(txbody, pool_deposit, key_deposit) {
    _assertClass(txbody, TransactionBody);
    _assertClass(pool_deposit, BigNum);
    _assertClass(key_deposit, BigNum);
    var ret = wasm.get_deposit(txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
    return BigNum.__wrap(ret);
};

/**
* @param {Value} assets
* @param {BigNum} minimum_utxo_val
* @returns {BigNum}
*/
module.exports.min_ada_required = function(assets, minimum_utxo_val) {
    _assertClass(assets, Value);
    _assertClass(minimum_utxo_val, BigNum);
    var ret = wasm.min_ada_required(assets.ptr, minimum_utxo_val.ptr);
    return BigNum.__wrap(ret);
};

/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatum}
*/
module.exports.encode_arbitrary_bytes_as_metadatum = function(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.encode_arbitrary_bytes_as_metadatum(ptr0, len0);
    return TransactionMetadatum.__wrap(ret);
};

/**
* @param {TransactionMetadatum} metadata
* @returns {Uint8Array}
*/
module.exports.decode_arbitrary_bytes_from_metadatum = function(metadata) {
    _assertClass(metadata, TransactionMetadatum);
    wasm.decode_arbitrary_bytes_from_metadatum(8, metadata.ptr);
    var r0 = getInt32Memory0()[8 / 4 + 0];
    var r1 = getInt32Memory0()[8 / 4 + 1];
    var v0 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v0;
};

/**
* @param {string} json
* @param {number} schema
* @returns {TransactionMetadatum}
*/
module.exports.encode_json_str_to_metadatum = function(json, schema) {
    var ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.encode_json_str_to_metadatum(ptr0, len0, schema);
    return TransactionMetadatum.__wrap(ret);
};

/**
* @param {TransactionMetadatum} metadatum
* @param {number} schema
* @returns {string}
*/
module.exports.decode_metadatum_to_json_str = function(metadatum, schema) {
    try {
        _assertClass(metadatum, TransactionMetadatum);
        wasm.decode_metadatum_to_json_str(8, metadatum.ptr, schema);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
};

/**
* @param {Transaction} tx
* @param {LinearFee} linear_fee
* @returns {BigNum}
*/
module.exports.min_fee = function(tx, linear_fee) {
    _assertClass(tx, Transaction);
    _assertClass(linear_fee, LinearFee);
    var ret = wasm.min_fee(tx.ptr, linear_fee.ptr);
    return BigNum.__wrap(ret);
};

/**
* @param {string} password
* @param {string} salt
* @param {string} nonce
* @param {string} data
* @returns {string}
*/
module.exports.encrypt_with_password = function(password, salt, nonce, data) {
    try {
        var ptr0 = passStringToWasm0(password, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(salt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = passStringToWasm0(nonce, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        var ptr3 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        wasm.encrypt_with_password(8, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
};

/**
* @param {string} password
* @param {string} data
* @returns {string}
*/
module.exports.decrypt_with_password = function(password, data) {
    try {
        var ptr0 = passStringToWasm0(password, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.decrypt_with_password(8, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
};

/**
*/
module.exports.CertificateKind = Object.freeze({ StakeRegistration:0,StakeDeregistration:1,StakeDelegation:2,PoolRegistration:3,PoolRetirement:4,GenesisKeyDelegation:5,MoveInstantaneousRewardsCert:6, });
/**
*/
module.exports.MIRPot = Object.freeze({ Reserves:0,Treasury:1, });
/**
*/
module.exports.RelayKind = Object.freeze({ SingleHostAddr:0,SingleHostName:1,MultiHostName:2, });
/**
*/
module.exports.NativeScriptKind = Object.freeze({ ScriptPubkey:0,ScriptAll:1,ScriptAny:2,ScriptNOfK:3,TimelockStart:4,TimelockExpiry:5, });
/**
* Each new language uses a different namespace for hashing its script
* This is because you could have a language where the same bytes have different semantics
* So this avoids scripts in different languages mapping to the same hash
* Note that the enum value here is different than the enum value for deciding the cost model of a script
*/
module.exports.ScriptHashNamespace = Object.freeze({ NativeScript:0, });
/**
*/
module.exports.TransactionMetadatumKind = Object.freeze({ MetadataMap:0,MetadataList:1,Int:2,Bytes:3,Text:4, });
/**
*/
module.exports.MetadataJsonSchema = Object.freeze({ NoConversions:0,BasicConversions:1,DetailedSchema:2, });
/**
*/
class Address {

    static __wrap(ptr) {
        const obj = Object.create(Address.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_address_free(ptr);
    }
    /**
    * @param {Uint8Array} data
    * @returns {Address}
    */
    static from_bytes(data) {
        var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.address_from_bytes(ptr0, len0);
        return Address.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.address_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string | undefined} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            var ptr0 = isLikeNone(prefix) ? 0 : passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.address_to_bech32(8, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {Address}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.address_from_bech32(ptr0, len0);
        return Address.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    network_id() {
        var ret = wasm.address_network_id(this.ptr);
        return ret;
    }
}
module.exports.Address = Address;
/**
*/
class AssetName {

    static __wrap(ptr) {
        const obj = Object.create(AssetName.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_assetname_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.assetname_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {AssetName}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.assetname_from_bytes(ptr0, len0);
        return AssetName.__wrap(ret);
    }
    /**
    * @param {Uint8Array} name
    * @returns {AssetName}
    */
    static new(name) {
        var ptr0 = passArray8ToWasm0(name, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.assetname_new(ptr0, len0);
        return AssetName.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    name() {
        wasm.assetname_name(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
}
module.exports.AssetName = AssetName;
/**
*/
class AssetNames {

    static __wrap(ptr) {
        const obj = Object.create(AssetNames.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_assetnames_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.assetnames_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {AssetNames}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.assetnames_from_bytes(ptr0, len0);
        return AssetNames.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */
    static new() {
        var ret = wasm.assetnames_new();
        return AssetNames.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.assetnames_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {AssetName}
    */
    get(index) {
        var ret = wasm.assetnames_get(this.ptr, index);
        return AssetName.__wrap(ret);
    }
    /**
    * @param {AssetName} elem
    */
    add(elem) {
        _assertClass(elem, AssetName);
        wasm.assetnames_add(this.ptr, elem.ptr);
    }
}
module.exports.AssetNames = AssetNames;
/**
*/
class Assets {

    static __wrap(ptr) {
        const obj = Object.create(Assets.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_assets_free(ptr);
    }
    /**
    * @returns {Assets}
    */
    static new() {
        var ret = wasm.assets_new();
        return Assets.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.assets_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {AssetName} key
    * @param {BigNum} value
    * @returns {BigNum | undefined}
    */
    insert(key, value) {
        _assertClass(key, AssetName);
        _assertClass(value, BigNum);
        var ret = wasm.assets_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {AssetName} key
    * @returns {BigNum | undefined}
    */
    get(key) {
        _assertClass(key, AssetName);
        var ret = wasm.assets_get(this.ptr, key.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */
    keys() {
        var ret = wasm.assets_keys(this.ptr);
        return AssetNames.__wrap(ret);
    }
}
module.exports.Assets = Assets;
/**
*/
class BaseAddress {

    static __wrap(ptr) {
        const obj = Object.create(BaseAddress.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_baseaddress_free(ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @param {StakeCredential} stake
    * @returns {BaseAddress}
    */
    static new(network, payment, stake) {
        _assertClass(payment, StakeCredential);
        _assertClass(stake, StakeCredential);
        var ret = wasm.baseaddress_new(network, payment.ptr, stake.ptr);
        return BaseAddress.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    payment_cred() {
        var ret = wasm.baseaddress_payment_cred(this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    stake_cred() {
        var ret = wasm.baseaddress_stake_cred(this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */
    to_address() {
        var ret = wasm.baseaddress_to_address(this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {BaseAddress | undefined}
    */
    static from_address(addr) {
        _assertClass(addr, Address);
        var ret = wasm.baseaddress_from_address(addr.ptr);
        return ret === 0 ? undefined : BaseAddress.__wrap(ret);
    }
}
module.exports.BaseAddress = BaseAddress;
/**
*/
class BigNum {

    static __wrap(ptr) {
        const obj = Object.create(BigNum.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_bignum_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.bignum_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {BigNum}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.bignum_from_bytes(ptr0, len0);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {string} string
    * @returns {BigNum}
    */
    static from_str(string) {
        var ptr0 = passStringToWasm0(string, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.bignum_from_str(ptr0, len0);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_str() {
        try {
            wasm.bignum_to_str(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */
    checked_mul(other) {
        _assertClass(other, BigNum);
        var ret = wasm.bignum_checked_mul(this.ptr, other.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */
    checked_add(other) {
        _assertClass(other, BigNum);
        var ret = wasm.bignum_checked_add(this.ptr, other.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */
    checked_sub(other) {
        _assertClass(other, BigNum);
        var ret = wasm.bignum_checked_sub(this.ptr, other.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * returns 0 if it would otherwise underflow
    * @param {BigNum} other
    * @returns {BigNum}
    */
    clamped_sub(other) {
        _assertClass(other, BigNum);
        var ret = wasm.bignum_clamped_sub(this.ptr, other.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} rhs_value
    * @returns {number}
    */
    compare(rhs_value) {
        _assertClass(rhs_value, BigNum);
        var ret = wasm.bignum_compare(this.ptr, rhs_value.ptr);
        return ret;
    }
}
module.exports.BigNum = BigNum;
/**
*/
class Bip32PrivateKey {

    static __wrap(ptr) {
        const obj = Object.create(Bip32PrivateKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_bip32privatekey_free(ptr);
    }
    /**
    * derive this private key with the given index.
    *
    * # Security considerations
    *
    * * hard derivation index cannot be soft derived with the public key
    *
    * # Hard derivation vs Soft derivation
    *
    * If you pass an index below 0x80000000 then it is a soft derivation.
    * The advantage of soft derivation is that it is possible to derive the
    * public key too. I.e. derivation the private key with a soft derivation
    * index and then retrieving the associated public key is equivalent to
    * deriving the public key associated to the parent private key.
    *
    * Hard derivation index does not allow public key derivation.
    *
    * This is why deriving the private key should not fail while deriving
    * the public key may fail (if the derivation index is invalid).
    * @param {number} index
    * @returns {Bip32PrivateKey}
    */
    derive(index) {
        var ret = wasm.bip32privatekey_derive(this.ptr, index);
        return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * 128-byte xprv a key format in Cardano that some software still uses or requires
    * the traditional 96-byte xprv is simply encoded as
    * prv | chaincode
    * however, because some software may not know how to compute a public key from a private key,
    * the 128-byte inlines the public key in the following format
    * prv | pub | chaincode
    * so be careful if you see the term "xprv" as it could refer to either one
    * our library does not require the pub (instead we compute the pub key when needed)
    * @param {Uint8Array} bytes
    * @returns {Bip32PrivateKey}
    */
    static from_128_xprv(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.bip32privatekey_from_128_xprv(ptr0, len0);
        return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * see from_128_xprv
    * @returns {Uint8Array}
    */
    to_128_xprv() {
        wasm.bip32privatekey_to_128_xprv(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @returns {Bip32PrivateKey}
    */
    static generate_ed25519_bip32() {
        var ret = wasm.bip32privatekey_generate_ed25519_bip32();
        return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * @returns {PrivateKey}
    */
    to_raw_key() {
        var ret = wasm.bip32privatekey_to_raw_key(this.ptr);
        return PrivateKey.__wrap(ret);
    }
    /**
    * @returns {Bip32PublicKey}
    */
    to_public() {
        var ret = wasm.bip32privatekey_to_public(this.ptr);
        return Bip32PublicKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Bip32PrivateKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.bip32privatekey_from_bytes(ptr0, len0);
        return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        wasm.bip32privatekey_as_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} bech32_str
    * @returns {Bip32PrivateKey}
    */
    static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.bip32privatekey_from_bech32(ptr0, len0);
        return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_bech32() {
        try {
            wasm.bip32privatekey_to_bech32(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {Uint8Array} entropy
    * @param {Uint8Array} password
    * @returns {Bip32PrivateKey}
    */
    static from_bip39_entropy(entropy, password) {
        var ptr0 = passArray8ToWasm0(entropy, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(password, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = wasm.bip32privatekey_from_bip39_entropy(ptr0, len0, ptr1, len1);
        return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    chaincode() {
        wasm.bip32privatekey_chaincode(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
}
module.exports.Bip32PrivateKey = Bip32PrivateKey;
/**
*/
class Bip32PublicKey {

    static __wrap(ptr) {
        const obj = Object.create(Bip32PublicKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_bip32publickey_free(ptr);
    }
    /**
    * derive this public key with the given index.
    *
    * # Errors
    *
    * If the index is not a soft derivation index (< 0x80000000) then
    * calling this method will fail.
    *
    * # Security considerations
    *
    * * hard derivation index cannot be soft derived with the public key
    *
    * # Hard derivation vs Soft derivation
    *
    * If you pass an index below 0x80000000 then it is a soft derivation.
    * The advantage of soft derivation is that it is possible to derive the
    * public key too. I.e. derivation the private key with a soft derivation
    * index and then retrieving the associated public key is equivalent to
    * deriving the public key associated to the parent private key.
    *
    * Hard derivation index does not allow public key derivation.
    *
    * This is why deriving the private key should not fail while deriving
    * the public key may fail (if the derivation index is invalid).
    * @param {number} index
    * @returns {Bip32PublicKey}
    */
    derive(index) {
        var ret = wasm.bip32publickey_derive(this.ptr, index);
        return Bip32PublicKey.__wrap(ret);
    }
    /**
    * @returns {PublicKey}
    */
    to_raw_key() {
        var ret = wasm.bip32publickey_to_raw_key(this.ptr);
        return PublicKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Bip32PublicKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.bip32publickey_from_bytes(ptr0, len0);
        return Bip32PublicKey.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        wasm.bip32publickey_as_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} bech32_str
    * @returns {Bip32PublicKey}
    */
    static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.bip32publickey_from_bech32(ptr0, len0);
        return Bip32PublicKey.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_bech32() {
        try {
            wasm.bip32publickey_to_bech32(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    chaincode() {
        wasm.bip32publickey_chaincode(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
}
module.exports.Bip32PublicKey = Bip32PublicKey;
/**
*/
class Block {

    static __wrap(ptr) {
        const obj = Object.create(Block.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_block_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.block_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Block}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.block_from_bytes(ptr0, len0);
        return Block.__wrap(ret);
    }
    /**
    * @returns {Header}
    */
    header() {
        var ret = wasm.block_header(this.ptr);
        return Header.__wrap(ret);
    }
    /**
    * @returns {TransactionBodies}
    */
    transaction_bodies() {
        var ret = wasm.block_transaction_bodies(this.ptr);
        return TransactionBodies.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSets}
    */
    transaction_witness_sets() {
        var ret = wasm.block_transaction_witness_sets(this.ptr);
        return TransactionWitnessSets.__wrap(ret);
    }
    /**
    * @returns {MapTransactionIndexToTransactionMetadata}
    */
    transaction_metadata_set() {
        var ret = wasm.block_transaction_metadata_set(this.ptr);
        return MapTransactionIndexToTransactionMetadata.__wrap(ret);
    }
    /**
    * @param {Header} header
    * @param {TransactionBodies} transaction_bodies
    * @param {TransactionWitnessSets} transaction_witness_sets
    * @param {MapTransactionIndexToTransactionMetadata} transaction_metadata_set
    * @returns {Block}
    */
    static new(header, transaction_bodies, transaction_witness_sets, transaction_metadata_set) {
        _assertClass(header, Header);
        _assertClass(transaction_bodies, TransactionBodies);
        _assertClass(transaction_witness_sets, TransactionWitnessSets);
        _assertClass(transaction_metadata_set, MapTransactionIndexToTransactionMetadata);
        var ret = wasm.block_new(header.ptr, transaction_bodies.ptr, transaction_witness_sets.ptr, transaction_metadata_set.ptr);
        return Block.__wrap(ret);
    }
}
module.exports.Block = Block;
/**
*/
class BlockHash {

    static __wrap(ptr) {
        const obj = Object.create(BlockHash.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_blockhash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.blockhash_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.blockhash_to_bech32(8, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {BlockHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.blockhash_from_bech32(ptr0, len0);
        return BlockHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {BlockHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.blockhash_from_bytes(ptr0, len0);
        return BlockHash.__wrap(ret);
    }
}
module.exports.BlockHash = BlockHash;
/**
*/
class BootstrapWitness {

    static __wrap(ptr) {
        const obj = Object.create(BootstrapWitness.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_bootstrapwitness_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.bootstrapwitness_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {BootstrapWitness}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.bootstrapwitness_from_bytes(ptr0, len0);
        return BootstrapWitness.__wrap(ret);
    }
    /**
    * @returns {Vkey}
    */
    vkey() {
        var ret = wasm.bootstrapwitness_vkey(this.ptr);
        return Vkey.__wrap(ret);
    }
    /**
    * @returns {Ed25519Signature}
    */
    signature() {
        var ret = wasm.bootstrapwitness_signature(this.ptr);
        return Ed25519Signature.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    chain_code() {
        wasm.bootstrapwitness_chain_code(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @returns {Uint8Array}
    */
    attributes() {
        wasm.bootstrapwitness_attributes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Vkey} vkey
    * @param {Ed25519Signature} signature
    * @param {Uint8Array} chain_code
    * @param {Uint8Array} attributes
    * @returns {BootstrapWitness}
    */
    static new(vkey, signature, chain_code, attributes) {
        _assertClass(vkey, Vkey);
        _assertClass(signature, Ed25519Signature);
        var ptr0 = passArray8ToWasm0(chain_code, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(attributes, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = wasm.bootstrapwitness_new(vkey.ptr, signature.ptr, ptr0, len0, ptr1, len1);
        return BootstrapWitness.__wrap(ret);
    }
}
module.exports.BootstrapWitness = BootstrapWitness;
/**
*/
class BootstrapWitnesses {

    static __wrap(ptr) {
        const obj = Object.create(BootstrapWitnesses.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_bootstrapwitnesses_free(ptr);
    }
    /**
    * @returns {BootstrapWitnesses}
    */
    static new() {
        var ret = wasm.bootstrapwitnesses_new();
        return BootstrapWitnesses.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.bootstrapwitnesses_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {BootstrapWitness}
    */
    get(index) {
        var ret = wasm.bootstrapwitnesses_get(this.ptr, index);
        return BootstrapWitness.__wrap(ret);
    }
    /**
    * @param {BootstrapWitness} elem
    */
    add(elem) {
        _assertClass(elem, BootstrapWitness);
        wasm.bootstrapwitnesses_add(this.ptr, elem.ptr);
    }
}
module.exports.BootstrapWitnesses = BootstrapWitnesses;
/**
*/
class ByronAddress {

    static __wrap(ptr) {
        const obj = Object.create(ByronAddress.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_byronaddress_free(ptr);
    }
    /**
    * @returns {string}
    */
    to_base58() {
        try {
            wasm.byronaddress_to_base58(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.byronaddress_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ByronAddress}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.byronaddress_from_bytes(ptr0, len0);
        return ByronAddress.__wrap(ret);
    }
    /**
    * returns the byron protocol magic embedded in the address, or mainnet id if none is present
    * note: for bech32 addresses, you need to use network_id instead
    * @returns {number}
    */
    byron_protocol_magic() {
        var ret = wasm.byronaddress_byron_protocol_magic(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {Uint8Array}
    */
    attributes() {
        wasm.byronaddress_attributes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @returns {number}
    */
    network_id() {
        var ret = wasm.byronaddress_network_id(this.ptr);
        return ret;
    }
    /**
    * @param {string} s
    * @returns {ByronAddress}
    */
    static from_base58(s) {
        var ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.byronaddress_from_base58(ptr0, len0);
        return ByronAddress.__wrap(ret);
    }
    /**
    * @param {Bip32PublicKey} key
    * @param {number} protocol_magic
    * @returns {ByronAddress}
    */
    static icarus_from_key(key, protocol_magic) {
        _assertClass(key, Bip32PublicKey);
        var ret = wasm.byronaddress_icarus_from_key(key.ptr, protocol_magic);
        return ByronAddress.__wrap(ret);
    }
    /**
    * @param {string} s
    * @returns {boolean}
    */
    static is_valid(s) {
        var ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.byronaddress_is_valid(ptr0, len0);
        return ret !== 0;
    }
    /**
    * @returns {Address}
    */
    to_address() {
        var ret = wasm.byronaddress_to_address(this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {ByronAddress | undefined}
    */
    static from_address(addr) {
        _assertClass(addr, Address);
        var ret = wasm.byronaddress_from_address(addr.ptr);
        return ret === 0 ? undefined : ByronAddress.__wrap(ret);
    }
}
module.exports.ByronAddress = ByronAddress;
/**
*/
class Certificate {

    static __wrap(ptr) {
        const obj = Object.create(Certificate.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_certificate_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.certificate_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Certificate}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.certificate_from_bytes(ptr0, len0);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {StakeRegistration} stake_registration
    * @returns {Certificate}
    */
    static new_stake_registration(stake_registration) {
        _assertClass(stake_registration, StakeRegistration);
        var ret = wasm.certificate_new_stake_registration(stake_registration.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {StakeDeregistration} stake_deregistration
    * @returns {Certificate}
    */
    static new_stake_deregistration(stake_deregistration) {
        _assertClass(stake_deregistration, StakeDeregistration);
        var ret = wasm.certificate_new_stake_deregistration(stake_deregistration.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {StakeDelegation} stake_delegation
    * @returns {Certificate}
    */
    static new_stake_delegation(stake_delegation) {
        _assertClass(stake_delegation, StakeDelegation);
        var ret = wasm.certificate_new_stake_delegation(stake_delegation.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {PoolRegistration} pool_registration
    * @returns {Certificate}
    */
    static new_pool_registration(pool_registration) {
        _assertClass(pool_registration, PoolRegistration);
        var ret = wasm.certificate_new_pool_registration(pool_registration.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {PoolRetirement} pool_retirement
    * @returns {Certificate}
    */
    static new_pool_retirement(pool_retirement) {
        _assertClass(pool_retirement, PoolRetirement);
        var ret = wasm.certificate_new_pool_retirement(pool_retirement.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {GenesisKeyDelegation} genesis_key_delegation
    * @returns {Certificate}
    */
    static new_genesis_key_delegation(genesis_key_delegation) {
        _assertClass(genesis_key_delegation, GenesisKeyDelegation);
        var ret = wasm.certificate_new_genesis_key_delegation(genesis_key_delegation.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {MoveInstantaneousRewardsCert} move_instantaneous_rewards_cert
    * @returns {Certificate}
    */
    static new_move_instantaneous_rewards_cert(move_instantaneous_rewards_cert) {
        _assertClass(move_instantaneous_rewards_cert, MoveInstantaneousRewardsCert);
        var ret = wasm.certificate_new_move_instantaneous_rewards_cert(move_instantaneous_rewards_cert.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = wasm.certificate_kind(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {StakeRegistration | undefined}
    */
    as_stake_registration() {
        var ret = wasm.certificate_as_stake_registration(this.ptr);
        return ret === 0 ? undefined : StakeRegistration.__wrap(ret);
    }
    /**
    * @returns {StakeDeregistration | undefined}
    */
    as_stake_deregistration() {
        var ret = wasm.certificate_as_stake_deregistration(this.ptr);
        return ret === 0 ? undefined : StakeDeregistration.__wrap(ret);
    }
    /**
    * @returns {StakeDelegation | undefined}
    */
    as_stake_delegation() {
        var ret = wasm.certificate_as_stake_delegation(this.ptr);
        return ret === 0 ? undefined : StakeDelegation.__wrap(ret);
    }
    /**
    * @returns {PoolRegistration | undefined}
    */
    as_pool_registration() {
        var ret = wasm.certificate_as_pool_registration(this.ptr);
        return ret === 0 ? undefined : PoolRegistration.__wrap(ret);
    }
    /**
    * @returns {PoolRetirement | undefined}
    */
    as_pool_retirement() {
        var ret = wasm.certificate_as_pool_retirement(this.ptr);
        return ret === 0 ? undefined : PoolRetirement.__wrap(ret);
    }
    /**
    * @returns {GenesisKeyDelegation | undefined}
    */
    as_genesis_key_delegation() {
        var ret = wasm.certificate_as_genesis_key_delegation(this.ptr);
        return ret === 0 ? undefined : GenesisKeyDelegation.__wrap(ret);
    }
    /**
    * @returns {MoveInstantaneousRewardsCert | undefined}
    */
    as_move_instantaneous_rewards_cert() {
        var ret = wasm.certificate_as_move_instantaneous_rewards_cert(this.ptr);
        return ret === 0 ? undefined : MoveInstantaneousRewardsCert.__wrap(ret);
    }
}
module.exports.Certificate = Certificate;
/**
*/
class Certificates {

    static __wrap(ptr) {
        const obj = Object.create(Certificates.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_certificates_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.certificates_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Certificates}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.certificates_from_bytes(ptr0, len0);
        return Certificates.__wrap(ret);
    }
    /**
    * @returns {Certificates}
    */
    static new() {
        var ret = wasm.certificates_new();
        return Certificates.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.certificates_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Certificate}
    */
    get(index) {
        var ret = wasm.certificates_get(this.ptr, index);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {Certificate} elem
    */
    add(elem) {
        _assertClass(elem, Certificate);
        wasm.certificates_add(this.ptr, elem.ptr);
    }
}
module.exports.Certificates = Certificates;
/**
*/
class DNSRecordAorAAAA {

    static __wrap(ptr) {
        const obj = Object.create(DNSRecordAorAAAA.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_dnsrecordaoraaaa_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.dnsrecordaoraaaa_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {DNSRecordAorAAAA}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.dnsrecordaoraaaa_from_bytes(ptr0, len0);
        return DNSRecordAorAAAA.__wrap(ret);
    }
    /**
    * @param {string} dns_name
    * @returns {DNSRecordAorAAAA}
    */
    static new(dns_name) {
        var ptr0 = passStringToWasm0(dns_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.dnsrecordaoraaaa_new(ptr0, len0);
        return DNSRecordAorAAAA.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    record() {
        try {
            wasm.dnsrecordaoraaaa_record(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
}
module.exports.DNSRecordAorAAAA = DNSRecordAorAAAA;
/**
*/
class DNSRecordSRV {

    static __wrap(ptr) {
        const obj = Object.create(DNSRecordSRV.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_dnsrecordsrv_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.dnsrecordsrv_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {DNSRecordSRV}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.dnsrecordsrv_from_bytes(ptr0, len0);
        return DNSRecordSRV.__wrap(ret);
    }
    /**
    * @param {string} dns_name
    * @returns {DNSRecordSRV}
    */
    static new(dns_name) {
        var ptr0 = passStringToWasm0(dns_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.dnsrecordsrv_new(ptr0, len0);
        return DNSRecordSRV.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    record() {
        try {
            wasm.dnsrecordsrv_record(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
}
module.exports.DNSRecordSRV = DNSRecordSRV;
/**
*/
class Ed25519KeyHash {

    static __wrap(ptr) {
        const obj = Object.create(Ed25519KeyHash.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_ed25519keyhash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.ed25519keyhash_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.ed25519keyhash_to_bech32(8, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {Ed25519KeyHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.ed25519keyhash_from_bech32(ptr0, len0);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ed25519KeyHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.ed25519keyhash_from_bytes(ptr0, len0);
        return Ed25519KeyHash.__wrap(ret);
    }
}
module.exports.Ed25519KeyHash = Ed25519KeyHash;
/**
*/
class Ed25519KeyHashes {

    static __wrap(ptr) {
        const obj = Object.create(Ed25519KeyHashes.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_ed25519keyhashes_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.ed25519keyhashes_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ed25519KeyHashes}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.ed25519keyhashes_from_bytes(ptr0, len0);
        return Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHashes}
    */
    static new() {
        var ret = wasm.ed25519keyhashes_new();
        return Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.ed25519keyhashes_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Ed25519KeyHash}
    */
    get(index) {
        var ret = wasm.ed25519keyhashes_get(this.ptr, index);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHash} elem
    */
    add(elem) {
        _assertClass(elem, Ed25519KeyHash);
        wasm.ed25519keyhashes_add(this.ptr, elem.ptr);
    }
}
module.exports.Ed25519KeyHashes = Ed25519KeyHashes;
/**
*/
class Ed25519Signature {

    static __wrap(ptr) {
        const obj = Object.create(Ed25519Signature.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_ed25519signature_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.ed25519signature_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @returns {string}
    */
    to_bech32() {
        try {
            wasm.ed25519signature_to_bech32(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {string}
    */
    to_hex() {
        try {
            wasm.ed25519signature_to_hex(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech32_str
    * @returns {Ed25519Signature}
    */
    static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.ed25519signature_from_bech32(ptr0, len0);
        return Ed25519Signature.__wrap(ret);
    }
    /**
    * @param {string} input
    * @returns {Ed25519Signature}
    */
    static from_hex(input) {
        var ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.ed25519signature_from_hex(ptr0, len0);
        return Ed25519Signature.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ed25519Signature}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.ed25519signature_from_bytes(ptr0, len0);
        return Ed25519Signature.__wrap(ret);
    }
}
module.exports.Ed25519Signature = Ed25519Signature;
/**
*/
class EnterpriseAddress {

    static __wrap(ptr) {
        const obj = Object.create(EnterpriseAddress.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_enterpriseaddress_free(ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @returns {EnterpriseAddress}
    */
    static new(network, payment) {
        _assertClass(payment, StakeCredential);
        var ret = wasm.enterpriseaddress_new(network, payment.ptr);
        return EnterpriseAddress.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    payment_cred() {
        var ret = wasm.enterpriseaddress_payment_cred(this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */
    to_address() {
        var ret = wasm.enterpriseaddress_to_address(this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {EnterpriseAddress | undefined}
    */
    static from_address(addr) {
        _assertClass(addr, Address);
        var ret = wasm.enterpriseaddress_from_address(addr.ptr);
        return ret === 0 ? undefined : EnterpriseAddress.__wrap(ret);
    }
}
module.exports.EnterpriseAddress = EnterpriseAddress;
/**
*/
class GeneralTransactionMetadata {

    static __wrap(ptr) {
        const obj = Object.create(GeneralTransactionMetadata.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_generaltransactionmetadata_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.generaltransactionmetadata_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GeneralTransactionMetadata}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.generaltransactionmetadata_from_bytes(ptr0, len0);
        return GeneralTransactionMetadata.__wrap(ret);
    }
    /**
    * @returns {GeneralTransactionMetadata}
    */
    static new() {
        var ret = wasm.generaltransactionmetadata_new();
        return GeneralTransactionMetadata.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.generaltransactionmetadata_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {BigNum} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */
    insert(key, value) {
        _assertClass(key, BigNum);
        _assertClass(value, TransactionMetadatum);
        var ret = wasm.generaltransactionmetadata_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {BigNum} key
    * @returns {TransactionMetadatum | undefined}
    */
    get(key) {
        _assertClass(key, BigNum);
        var ret = wasm.generaltransactionmetadata_get(this.ptr, key.ptr);
        return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @returns {TransactionMetadatumLabels}
    */
    keys() {
        var ret = wasm.generaltransactionmetadata_keys(this.ptr);
        return TransactionMetadatumLabels.__wrap(ret);
    }
}
module.exports.GeneralTransactionMetadata = GeneralTransactionMetadata;
/**
*/
class GenesisDelegateHash {

    static __wrap(ptr) {
        const obj = Object.create(GenesisDelegateHash.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_genesisdelegatehash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.genesisdelegatehash_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.genesisdelegatehash_to_bech32(8, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {GenesisDelegateHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.genesisdelegatehash_from_bech32(ptr0, len0);
        return GenesisDelegateHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisDelegateHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.genesisdelegatehash_from_bytes(ptr0, len0);
        return GenesisDelegateHash.__wrap(ret);
    }
}
module.exports.GenesisDelegateHash = GenesisDelegateHash;
/**
*/
class GenesisHash {

    static __wrap(ptr) {
        const obj = Object.create(GenesisHash.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_genesishash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.genesishash_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.genesishash_to_bech32(8, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {GenesisHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.genesishash_from_bech32(ptr0, len0);
        return GenesisHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.genesishash_from_bytes(ptr0, len0);
        return GenesisHash.__wrap(ret);
    }
}
module.exports.GenesisHash = GenesisHash;
/**
*/
class GenesisHashes {

    static __wrap(ptr) {
        const obj = Object.create(GenesisHashes.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_genesishashes_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.genesishashes_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisHashes}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.genesishashes_from_bytes(ptr0, len0);
        return GenesisHashes.__wrap(ret);
    }
    /**
    * @returns {GenesisHashes}
    */
    static new() {
        var ret = wasm.genesishashes_new();
        return GenesisHashes.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.genesishashes_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {GenesisHash}
    */
    get(index) {
        var ret = wasm.genesishashes_get(this.ptr, index);
        return GenesisHash.__wrap(ret);
    }
    /**
    * @param {GenesisHash} elem
    */
    add(elem) {
        _assertClass(elem, GenesisHash);
        wasm.genesishashes_add(this.ptr, elem.ptr);
    }
}
module.exports.GenesisHashes = GenesisHashes;
/**
*/
class GenesisKeyDelegation {

    static __wrap(ptr) {
        const obj = Object.create(GenesisKeyDelegation.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_genesiskeydelegation_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.genesiskeydelegation_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisKeyDelegation}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.genesiskeydelegation_from_bytes(ptr0, len0);
        return GenesisKeyDelegation.__wrap(ret);
    }
    /**
    * @returns {GenesisHash}
    */
    genesishash() {
        var ret = wasm.genesiskeydelegation_genesishash(this.ptr);
        return GenesisHash.__wrap(ret);
    }
    /**
    * @returns {GenesisDelegateHash}
    */
    genesis_delegate_hash() {
        var ret = wasm.genesiskeydelegation_genesis_delegate_hash(this.ptr);
        return GenesisDelegateHash.__wrap(ret);
    }
    /**
    * @returns {VRFKeyHash}
    */
    vrf_keyhash() {
        var ret = wasm.genesiskeydelegation_vrf_keyhash(this.ptr);
        return VRFKeyHash.__wrap(ret);
    }
    /**
    * @param {GenesisHash} genesishash
    * @param {GenesisDelegateHash} genesis_delegate_hash
    * @param {VRFKeyHash} vrf_keyhash
    * @returns {GenesisKeyDelegation}
    */
    static new(genesishash, genesis_delegate_hash, vrf_keyhash) {
        _assertClass(genesishash, GenesisHash);
        _assertClass(genesis_delegate_hash, GenesisDelegateHash);
        _assertClass(vrf_keyhash, VRFKeyHash);
        var ret = wasm.genesiskeydelegation_new(genesishash.ptr, genesis_delegate_hash.ptr, vrf_keyhash.ptr);
        return GenesisKeyDelegation.__wrap(ret);
    }
}
module.exports.GenesisKeyDelegation = GenesisKeyDelegation;
/**
*/
class Header {

    static __wrap(ptr) {
        const obj = Object.create(Header.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_header_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.header_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Header}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.header_from_bytes(ptr0, len0);
        return Header.__wrap(ret);
    }
    /**
    * @returns {HeaderBody}
    */
    header_body() {
        var ret = wasm.header_header_body(this.ptr);
        return HeaderBody.__wrap(ret);
    }
    /**
    * @returns {KESSignature}
    */
    body_signature() {
        var ret = wasm.header_body_signature(this.ptr);
        return KESSignature.__wrap(ret);
    }
    /**
    * @param {HeaderBody} header_body
    * @param {KESSignature} body_signature
    * @returns {Header}
    */
    static new(header_body, body_signature) {
        _assertClass(header_body, HeaderBody);
        _assertClass(body_signature, KESSignature);
        var ret = wasm.header_new(header_body.ptr, body_signature.ptr);
        return Header.__wrap(ret);
    }
}
module.exports.Header = Header;
/**
*/
class HeaderBody {

    static __wrap(ptr) {
        const obj = Object.create(HeaderBody.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_headerbody_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.headerbody_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {HeaderBody}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.headerbody_from_bytes(ptr0, len0);
        return HeaderBody.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    block_number() {
        var ret = wasm.headerbody_block_number(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    slot() {
        var ret = wasm.headerbody_slot(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {BlockHash | undefined}
    */
    prev_hash() {
        var ret = wasm.headerbody_prev_hash(this.ptr);
        return ret === 0 ? undefined : BlockHash.__wrap(ret);
    }
    /**
    * @returns {Vkey}
    */
    issuer_vkey() {
        var ret = wasm.headerbody_issuer_vkey(this.ptr);
        return Vkey.__wrap(ret);
    }
    /**
    * @returns {VRFVKey}
    */
    vrf_vkey() {
        var ret = wasm.headerbody_vrf_vkey(this.ptr);
        return VRFVKey.__wrap(ret);
    }
    /**
    * @returns {VRFCert}
    */
    nonce_vrf() {
        var ret = wasm.headerbody_nonce_vrf(this.ptr);
        return VRFCert.__wrap(ret);
    }
    /**
    * @returns {VRFCert}
    */
    leader_vrf() {
        var ret = wasm.headerbody_leader_vrf(this.ptr);
        return VRFCert.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    block_body_size() {
        var ret = wasm.headerbody_block_body_size(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {BlockHash}
    */
    block_body_hash() {
        var ret = wasm.headerbody_block_body_hash(this.ptr);
        return BlockHash.__wrap(ret);
    }
    /**
    * @returns {OperationalCert}
    */
    operational_cert() {
        var ret = wasm.headerbody_operational_cert(this.ptr);
        return OperationalCert.__wrap(ret);
    }
    /**
    * @returns {ProtocolVersion}
    */
    protocol_version() {
        var ret = wasm.headerbody_protocol_version(this.ptr);
        return ProtocolVersion.__wrap(ret);
    }
    /**
    * @param {number} block_number
    * @param {number} slot
    * @param {BlockHash | undefined} prev_hash
    * @param {Vkey} issuer_vkey
    * @param {VRFVKey} vrf_vkey
    * @param {VRFCert} nonce_vrf
    * @param {VRFCert} leader_vrf
    * @param {number} block_body_size
    * @param {BlockHash} block_body_hash
    * @param {OperationalCert} operational_cert
    * @param {ProtocolVersion} protocol_version
    * @returns {HeaderBody}
    */
    static new(block_number, slot, prev_hash, issuer_vkey, vrf_vkey, nonce_vrf, leader_vrf, block_body_size, block_body_hash, operational_cert, protocol_version) {
        let ptr0 = 0;
        if (!isLikeNone(prev_hash)) {
            _assertClass(prev_hash, BlockHash);
            ptr0 = prev_hash.ptr;
            prev_hash.ptr = 0;
        }
        _assertClass(issuer_vkey, Vkey);
        _assertClass(vrf_vkey, VRFVKey);
        _assertClass(nonce_vrf, VRFCert);
        _assertClass(leader_vrf, VRFCert);
        _assertClass(block_body_hash, BlockHash);
        _assertClass(operational_cert, OperationalCert);
        _assertClass(protocol_version, ProtocolVersion);
        var ret = wasm.headerbody_new(block_number, slot, ptr0, issuer_vkey.ptr, vrf_vkey.ptr, nonce_vrf.ptr, leader_vrf.ptr, block_body_size, block_body_hash.ptr, operational_cert.ptr, protocol_version.ptr);
        return HeaderBody.__wrap(ret);
    }
}
module.exports.HeaderBody = HeaderBody;
/**
*/
class Int {

    static __wrap(ptr) {
        const obj = Object.create(Int.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_int_free(ptr);
    }
    /**
    * @param {BigNum} x
    * @returns {Int}
    */
    static new(x) {
        _assertClass(x, BigNum);
        var ret = wasm.int_new(x.ptr);
        return Int.__wrap(ret);
    }
    /**
    * @param {BigNum} x
    * @returns {Int}
    */
    static new_negative(x) {
        _assertClass(x, BigNum);
        var ret = wasm.int_new_negative(x.ptr);
        return Int.__wrap(ret);
    }
    /**
    * @param {number} x
    * @returns {Int}
    */
    static new_i32(x) {
        var ret = wasm.int_new_i32(x);
        return Int.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    is_positive() {
        var ret = wasm.int_is_positive(this.ptr);
        return ret !== 0;
    }
    /**
    * @returns {BigNum | undefined}
    */
    as_positive() {
        var ret = wasm.int_as_positive(this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum | undefined}
    */
    as_negative() {
        var ret = wasm.int_as_negative(this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */
    as_i32() {
        wasm.int_as_i32(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1;
    }
}
module.exports.Int = Int;
/**
*/
class Ipv4 {

    static __wrap(ptr) {
        const obj = Object.create(Ipv4.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_ipv4_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.ipv4_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ipv4}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.ipv4_from_bytes(ptr0, len0);
        return Ipv4.__wrap(ret);
    }
    /**
    * @param {Uint8Array} data
    * @returns {Ipv4}
    */
    static new(data) {
        var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.ipv4_new(ptr0, len0);
        return Ipv4.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    ip() {
        wasm.ipv4_ip(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
}
module.exports.Ipv4 = Ipv4;
/**
*/
class Ipv6 {

    static __wrap(ptr) {
        const obj = Object.create(Ipv6.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_ipv6_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.ipv6_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ipv6}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.ipv6_from_bytes(ptr0, len0);
        return Ipv6.__wrap(ret);
    }
    /**
    * @param {Uint8Array} data
    * @returns {Ipv6}
    */
    static new(data) {
        var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.ipv6_new(ptr0, len0);
        return Ipv6.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    ip() {
        wasm.ipv6_ip(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
}
module.exports.Ipv6 = Ipv6;
/**
*/
class KESSignature {

    static __wrap(ptr) {
        const obj = Object.create(KESSignature.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_kessignature_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.kessignature_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {KESSignature}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.kessignature_from_bytes(ptr0, len0);
        return KESSignature.__wrap(ret);
    }
}
module.exports.KESSignature = KESSignature;
/**
*/
class KESVKey {

    static __wrap(ptr) {
        const obj = Object.create(KESVKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_kesvkey_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.kesvkey_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.kesvkey_to_bech32(8, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {KESVKey}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.kesvkey_from_bech32(ptr0, len0);
        return KESVKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {KESVKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.kesvkey_from_bytes(ptr0, len0);
        return KESVKey.__wrap(ret);
    }
}
module.exports.KESVKey = KESVKey;
/**
*/
class LegacyDaedalusPrivateKey {

    static __wrap(ptr) {
        const obj = Object.create(LegacyDaedalusPrivateKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_legacydaedalusprivatekey_free(ptr);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {LegacyDaedalusPrivateKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.legacydaedalusprivatekey_from_bytes(ptr0, len0);
        return LegacyDaedalusPrivateKey.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        wasm.legacydaedalusprivatekey_as_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @returns {Uint8Array}
    */
    chaincode() {
        wasm.legacydaedalusprivatekey_chaincode(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
}
module.exports.LegacyDaedalusPrivateKey = LegacyDaedalusPrivateKey;
/**
*/
class LinearFee {

    static __wrap(ptr) {
        const obj = Object.create(LinearFee.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_linearfee_free(ptr);
    }
    /**
    * @returns {BigNum}
    */
    constant() {
        var ret = wasm.linearfee_constant(this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    coefficient() {
        var ret = wasm.linearfee_coefficient(this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} coefficient
    * @param {BigNum} constant
    * @returns {LinearFee}
    */
    static new(coefficient, constant) {
        _assertClass(coefficient, BigNum);
        _assertClass(constant, BigNum);
        var ret = wasm.linearfee_new(coefficient.ptr, constant.ptr);
        return LinearFee.__wrap(ret);
    }
}
module.exports.LinearFee = LinearFee;
/**
*/
class MapTransactionIndexToTransactionMetadata {

    static __wrap(ptr) {
        const obj = Object.create(MapTransactionIndexToTransactionMetadata.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_maptransactionindextotransactionmetadata_free(ptr);
    }
    /**
    * @returns {MapTransactionIndexToTransactionMetadata}
    */
    static new() {
        var ret = wasm.maptransactionindextotransactionmetadata_new();
        return MapTransactionIndexToTransactionMetadata.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.maptransactionindextotransactionmetadata_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} key
    * @param {TransactionMetadata} value
    * @returns {TransactionMetadata | undefined}
    */
    insert(key, value) {
        _assertClass(value, TransactionMetadata);
        var ret = wasm.maptransactionindextotransactionmetadata_insert(this.ptr, key, value.ptr);
        return ret === 0 ? undefined : TransactionMetadata.__wrap(ret);
    }
    /**
    * @param {number} key
    * @returns {TransactionMetadata | undefined}
    */
    get(key) {
        var ret = wasm.maptransactionindextotransactionmetadata_get(this.ptr, key);
        return ret === 0 ? undefined : TransactionMetadata.__wrap(ret);
    }
    /**
    * @returns {Uint32Array}
    */
    keys() {
        wasm.maptransactionindextotransactionmetadata_keys(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
        return v0;
    }
}
module.exports.MapTransactionIndexToTransactionMetadata = MapTransactionIndexToTransactionMetadata;
/**
*/
class MetadataHash {

    static __wrap(ptr) {
        const obj = Object.create(MetadataHash.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_metadatahash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.metadatahash_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.metadatahash_to_bech32(8, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {MetadataHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.metadatahash_from_bech32(ptr0, len0);
        return MetadataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MetadataHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.metadatahash_from_bytes(ptr0, len0);
        return MetadataHash.__wrap(ret);
    }
}
module.exports.MetadataHash = MetadataHash;
/**
*/
class MetadataList {

    static __wrap(ptr) {
        const obj = Object.create(MetadataList.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_metadatalist_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.metadatalist_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MetadataList}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.metadatalist_from_bytes(ptr0, len0);
        return MetadataList.__wrap(ret);
    }
    /**
    * @returns {MetadataList}
    */
    static new() {
        var ret = wasm.metadatalist_new();
        return MetadataList.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.metadatalist_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionMetadatum}
    */
    get(index) {
        var ret = wasm.metadatalist_get(this.ptr, index);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {TransactionMetadatum} elem
    */
    add(elem) {
        _assertClass(elem, TransactionMetadatum);
        wasm.metadatalist_add(this.ptr, elem.ptr);
    }
}
module.exports.MetadataList = MetadataList;
/**
*/
class MetadataMap {

    static __wrap(ptr) {
        const obj = Object.create(MetadataMap.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_metadatamap_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.metadatamap_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MetadataMap}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.metadatamap_from_bytes(ptr0, len0);
        return MetadataMap.__wrap(ret);
    }
    /**
    * @returns {MetadataMap}
    */
    static new() {
        var ret = wasm.metadatamap_new();
        return MetadataMap.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.metadatamap_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {TransactionMetadatum} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */
    insert(key, value) {
        _assertClass(key, TransactionMetadatum);
        _assertClass(value, TransactionMetadatum);
        var ret = wasm.metadatamap_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {string} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */
    insert_str(key, value) {
        var ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(value, TransactionMetadatum);
        var ret = wasm.metadatamap_insert_str(this.ptr, ptr0, len0, value.ptr);
        return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {number} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */
    insert_i32(key, value) {
        _assertClass(value, TransactionMetadatum);
        var ret = wasm.metadatamap_insert_i32(this.ptr, key, value.ptr);
        return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {TransactionMetadatum} key
    * @returns {TransactionMetadatum}
    */
    get(key) {
        _assertClass(key, TransactionMetadatum);
        var ret = wasm.metadatamap_get(this.ptr, key.ptr);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {string} key
    * @returns {TransactionMetadatum}
    */
    get_str(key) {
        var ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.metadatamap_get_str(this.ptr, ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {number} key
    * @returns {TransactionMetadatum}
    */
    get_i32(key) {
        var ret = wasm.metadatamap_get_i32(this.ptr, key);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {TransactionMetadatum} key
    * @returns {boolean}
    */
    has(key) {
        _assertClass(key, TransactionMetadatum);
        var ret = wasm.metadatamap_has(this.ptr, key.ptr);
        return ret !== 0;
    }
    /**
    * @returns {MetadataList}
    */
    keys() {
        var ret = wasm.metadatamap_keys(this.ptr);
        return MetadataList.__wrap(ret);
    }
}
module.exports.MetadataMap = MetadataMap;
/**
*/
class Mint {

    static __wrap(ptr) {
        const obj = Object.create(Mint.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_mint_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.mint_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Mint}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.mint_from_bytes(ptr0, len0);
        return Mint.__wrap(ret);
    }
    /**
    * @returns {Mint}
    */
    static new() {
        var ret = wasm.mint_new();
        return Mint.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.mint_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {ScriptHash} key
    * @param {MintAssets} value
    * @returns {MintAssets | undefined}
    */
    insert(key, value) {
        _assertClass(key, ScriptHash);
        _assertClass(value, MintAssets);
        var ret = wasm.mint_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : MintAssets.__wrap(ret);
    }
    /**
    * @param {ScriptHash} key
    * @returns {MintAssets | undefined}
    */
    get(key) {
        _assertClass(key, ScriptHash);
        var ret = wasm.mint_get(this.ptr, key.ptr);
        return ret === 0 ? undefined : MintAssets.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */
    keys() {
        var ret = wasm.mint_keys(this.ptr);
        return ScriptHashes.__wrap(ret);
    }
}
module.exports.Mint = Mint;
/**
*/
class MintAssets {

    static __wrap(ptr) {
        const obj = Object.create(MintAssets.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_mintassets_free(ptr);
    }
    /**
    * @returns {MintAssets}
    */
    static new() {
        var ret = wasm.mintassets_new();
        return MintAssets.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.mintassets_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {AssetName} key
    * @param {Int} value
    * @returns {Int | undefined}
    */
    insert(key, value) {
        _assertClass(key, AssetName);
        _assertClass(value, Int);
        var ptr0 = value.ptr;
        value.ptr = 0;
        var ret = wasm.mintassets_insert(this.ptr, key.ptr, ptr0);
        return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @param {AssetName} key
    * @returns {Int | undefined}
    */
    get(key) {
        _assertClass(key, AssetName);
        var ret = wasm.mintassets_get(this.ptr, key.ptr);
        return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */
    keys() {
        var ret = wasm.mintassets_keys(this.ptr);
        return AssetNames.__wrap(ret);
    }
}
module.exports.MintAssets = MintAssets;
/**
*/
class MoveInstantaneousReward {

    static __wrap(ptr) {
        const obj = Object.create(MoveInstantaneousReward.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_moveinstantaneousreward_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.moveinstantaneousreward_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MoveInstantaneousReward}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.moveinstantaneousreward_from_bytes(ptr0, len0);
        return MoveInstantaneousReward.__wrap(ret);
    }
    /**
    * @param {number} pot
    * @returns {MoveInstantaneousReward}
    */
    static new(pot) {
        var ret = wasm.moveinstantaneousreward_new(pot);
        return MoveInstantaneousReward.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.moveinstantaneousreward_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {StakeCredential} key
    * @param {BigNum} value
    * @returns {BigNum | undefined}
    */
    insert(key, value) {
        _assertClass(key, StakeCredential);
        _assertClass(value, BigNum);
        var ret = wasm.moveinstantaneousreward_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {StakeCredential} key
    * @returns {BigNum | undefined}
    */
    get(key) {
        _assertClass(key, StakeCredential);
        var ret = wasm.moveinstantaneousreward_get(this.ptr, key.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {StakeCredentials}
    */
    keys() {
        var ret = wasm.moveinstantaneousreward_keys(this.ptr);
        return StakeCredentials.__wrap(ret);
    }
}
module.exports.MoveInstantaneousReward = MoveInstantaneousReward;
/**
*/
class MoveInstantaneousRewardsCert {

    static __wrap(ptr) {
        const obj = Object.create(MoveInstantaneousRewardsCert.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_moveinstantaneousrewardscert_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.moveinstantaneousrewardscert_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MoveInstantaneousRewardsCert}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.moveinstantaneousrewardscert_from_bytes(ptr0, len0);
        return MoveInstantaneousRewardsCert.__wrap(ret);
    }
    /**
    * @returns {MoveInstantaneousReward}
    */
    move_instantaneous_reward() {
        var ret = wasm.moveinstantaneousrewardscert_move_instantaneous_reward(this.ptr);
        return MoveInstantaneousReward.__wrap(ret);
    }
    /**
    * @param {MoveInstantaneousReward} move_instantaneous_reward
    * @returns {MoveInstantaneousRewardsCert}
    */
    static new(move_instantaneous_reward) {
        _assertClass(move_instantaneous_reward, MoveInstantaneousReward);
        var ret = wasm.moveinstantaneousrewardscert_new(move_instantaneous_reward.ptr);
        return MoveInstantaneousRewardsCert.__wrap(ret);
    }
}
module.exports.MoveInstantaneousRewardsCert = MoveInstantaneousRewardsCert;
/**
*/
class MultiAsset {

    static __wrap(ptr) {
        const obj = Object.create(MultiAsset.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_multiasset_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.multiasset_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MultiAsset}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.multiasset_from_bytes(ptr0, len0);
        return MultiAsset.__wrap(ret);
    }
    /**
    * @returns {MultiAsset}
    */
    static new() {
        var ret = wasm.multiasset_new();
        return MultiAsset.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.multiasset_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {ScriptHash} key
    * @param {Assets} value
    * @returns {Assets | undefined}
    */
    insert(key, value) {
        _assertClass(key, ScriptHash);
        _assertClass(value, Assets);
        var ret = wasm.multiasset_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : Assets.__wrap(ret);
    }
    /**
    * @param {ScriptHash} key
    * @returns {Assets | undefined}
    */
    get(key) {
        _assertClass(key, ScriptHash);
        var ret = wasm.multiasset_get(this.ptr, key.ptr);
        return ret === 0 ? undefined : Assets.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */
    keys() {
        var ret = wasm.multiasset_keys(this.ptr);
        return ScriptHashes.__wrap(ret);
    }
    /**
    * removes an asset from the list if the result is 0 or less
    * @param {MultiAsset} rhs_ma
    * @returns {MultiAsset}
    */
    sub(rhs_ma) {
        _assertClass(rhs_ma, MultiAsset);
        var ret = wasm.multiasset_sub(this.ptr, rhs_ma.ptr);
        return MultiAsset.__wrap(ret);
    }
}
module.exports.MultiAsset = MultiAsset;
/**
*/
class MultiHostName {

    static __wrap(ptr) {
        const obj = Object.create(MultiHostName.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_multihostname_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.multihostname_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MultiHostName}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.multihostname_from_bytes(ptr0, len0);
        return MultiHostName.__wrap(ret);
    }
    /**
    * @returns {DNSRecordSRV}
    */
    dns_name() {
        var ret = wasm.multihostname_dns_name(this.ptr);
        return DNSRecordSRV.__wrap(ret);
    }
    /**
    * @param {DNSRecordSRV} dns_name
    * @returns {MultiHostName}
    */
    static new(dns_name) {
        _assertClass(dns_name, DNSRecordSRV);
        var ret = wasm.multihostname_new(dns_name.ptr);
        return MultiHostName.__wrap(ret);
    }
}
module.exports.MultiHostName = MultiHostName;
/**
*/
class NativeScript {

    static __wrap(ptr) {
        const obj = Object.create(NativeScript.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_nativescript_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.nativescript_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {NativeScript}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.nativescript_from_bytes(ptr0, len0);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {number} namespace
    * @returns {Ed25519KeyHash}
    */
    hash(namespace) {
        var ret = wasm.nativescript_hash(this.ptr, namespace);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {ScriptPubkey} script_pubkey
    * @returns {NativeScript}
    */
    static new_script_pubkey(script_pubkey) {
        _assertClass(script_pubkey, ScriptPubkey);
        var ret = wasm.nativescript_new_script_pubkey(script_pubkey.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {ScriptAll} script_all
    * @returns {NativeScript}
    */
    static new_script_all(script_all) {
        _assertClass(script_all, ScriptAll);
        var ret = wasm.nativescript_new_script_all(script_all.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {ScriptAny} script_any
    * @returns {NativeScript}
    */
    static new_script_any(script_any) {
        _assertClass(script_any, ScriptAny);
        var ret = wasm.nativescript_new_script_any(script_any.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {ScriptNOfK} script_n_of_k
    * @returns {NativeScript}
    */
    static new_script_n_of_k(script_n_of_k) {
        _assertClass(script_n_of_k, ScriptNOfK);
        var ret = wasm.nativescript_new_script_n_of_k(script_n_of_k.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {TimelockStart} timelock_start
    * @returns {NativeScript}
    */
    static new_timelock_start(timelock_start) {
        _assertClass(timelock_start, TimelockStart);
        var ret = wasm.nativescript_new_timelock_start(timelock_start.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {TimelockExpiry} timelock_expiry
    * @returns {NativeScript}
    */
    static new_timelock_expiry(timelock_expiry) {
        _assertClass(timelock_expiry, TimelockExpiry);
        var ret = wasm.nativescript_new_timelock_expiry(timelock_expiry.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = wasm.nativescript_kind(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {ScriptPubkey | undefined}
    */
    as_script_pubkey() {
        var ret = wasm.nativescript_as_script_pubkey(this.ptr);
        return ret === 0 ? undefined : ScriptPubkey.__wrap(ret);
    }
    /**
    * @returns {ScriptAll | undefined}
    */
    as_script_all() {
        var ret = wasm.nativescript_as_script_all(this.ptr);
        return ret === 0 ? undefined : ScriptAll.__wrap(ret);
    }
    /**
    * @returns {ScriptAny | undefined}
    */
    as_script_any() {
        var ret = wasm.nativescript_as_script_any(this.ptr);
        return ret === 0 ? undefined : ScriptAny.__wrap(ret);
    }
    /**
    * @returns {ScriptNOfK | undefined}
    */
    as_script_n_of_k() {
        var ret = wasm.nativescript_as_script_n_of_k(this.ptr);
        return ret === 0 ? undefined : ScriptNOfK.__wrap(ret);
    }
    /**
    * @returns {TimelockStart | undefined}
    */
    as_timelock_start() {
        var ret = wasm.nativescript_as_timelock_start(this.ptr);
        return ret === 0 ? undefined : TimelockStart.__wrap(ret);
    }
    /**
    * @returns {TimelockExpiry | undefined}
    */
    as_timelock_expiry() {
        var ret = wasm.nativescript_as_timelock_expiry(this.ptr);
        return ret === 0 ? undefined : TimelockExpiry.__wrap(ret);
    }
}
module.exports.NativeScript = NativeScript;
/**
*/
class NativeScripts {

    static __wrap(ptr) {
        const obj = Object.create(NativeScripts.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_nativescripts_free(ptr);
    }
    /**
    * @returns {NativeScripts}
    */
    static new() {
        var ret = wasm.nativescripts_new();
        return NativeScripts.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.nativescripts_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {NativeScript}
    */
    get(index) {
        var ret = wasm.nativescripts_get(this.ptr, index);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {NativeScript} elem
    */
    add(elem) {
        _assertClass(elem, NativeScript);
        wasm.nativescripts_add(this.ptr, elem.ptr);
    }
}
module.exports.NativeScripts = NativeScripts;
/**
*/
class NetworkInfo {

    static __wrap(ptr) {
        const obj = Object.create(NetworkInfo.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_networkinfo_free(ptr);
    }
    /**
    * @param {number} network_id
    * @param {number} protocol_magic
    * @returns {NetworkInfo}
    */
    static new(network_id, protocol_magic) {
        var ret = wasm.networkinfo_new(network_id, protocol_magic);
        return NetworkInfo.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    network_id() {
        var ret = wasm.networkinfo_network_id(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    protocol_magic() {
        var ret = wasm.networkinfo_protocol_magic(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {NetworkInfo}
    */
    static testnet() {
        var ret = wasm.networkinfo_testnet();
        return NetworkInfo.__wrap(ret);
    }
    /**
    * @returns {NetworkInfo}
    */
    static mainnet() {
        var ret = wasm.networkinfo_mainnet();
        return NetworkInfo.__wrap(ret);
    }
}
module.exports.NetworkInfo = NetworkInfo;
/**
*/
class Nonce {

    static __wrap(ptr) {
        const obj = Object.create(Nonce.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_nonce_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.nonce_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Nonce}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.nonce_from_bytes(ptr0, len0);
        return Nonce.__wrap(ret);
    }
    /**
    * @returns {Nonce}
    */
    static new_identity() {
        var ret = wasm.nonce_new_identity();
        return Nonce.__wrap(ret);
    }
    /**
    * @param {Uint8Array} hash
    * @returns {Nonce}
    */
    static new_from_hash(hash) {
        var ptr0 = passArray8ToWasm0(hash, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.nonce_new_from_hash(ptr0, len0);
        return Nonce.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    get_hash() {
        wasm.nonce_get_hash(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        let v0;
        if (r0 !== 0) {
            v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
        }
        return v0;
    }
}
module.exports.Nonce = Nonce;
/**
*/
class OperationalCert {

    static __wrap(ptr) {
        const obj = Object.create(OperationalCert.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_operationalcert_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.operationalcert_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {OperationalCert}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.operationalcert_from_bytes(ptr0, len0);
        return OperationalCert.__wrap(ret);
    }
    /**
    * @returns {KESVKey}
    */
    hot_vkey() {
        var ret = wasm.operationalcert_hot_vkey(this.ptr);
        return KESVKey.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    sequence_number() {
        var ret = wasm.operationalcert_sequence_number(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    kes_period() {
        var ret = wasm.operationalcert_kes_period(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {Ed25519Signature}
    */
    sigma() {
        var ret = wasm.operationalcert_sigma(this.ptr);
        return Ed25519Signature.__wrap(ret);
    }
    /**
    * @param {KESVKey} hot_vkey
    * @param {number} sequence_number
    * @param {number} kes_period
    * @param {Ed25519Signature} sigma
    * @returns {OperationalCert}
    */
    static new(hot_vkey, sequence_number, kes_period, sigma) {
        _assertClass(hot_vkey, KESVKey);
        _assertClass(sigma, Ed25519Signature);
        var ret = wasm.operationalcert_new(hot_vkey.ptr, sequence_number, kes_period, sigma.ptr);
        return OperationalCert.__wrap(ret);
    }
}
module.exports.OperationalCert = OperationalCert;
/**
*/
class Pointer {

    static __wrap(ptr) {
        const obj = Object.create(Pointer.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_pointer_free(ptr);
    }
    /**
    * @param {number} slot
    * @param {number} tx_index
    * @param {number} cert_index
    * @returns {Pointer}
    */
    static new(slot, tx_index, cert_index) {
        var ret = wasm.pointer_new(slot, tx_index, cert_index);
        return Pointer.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    slot() {
        var ret = wasm.pointer_slot(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    tx_index() {
        var ret = wasm.pointer_tx_index(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    cert_index() {
        var ret = wasm.pointer_cert_index(this.ptr);
        return ret >>> 0;
    }
}
module.exports.Pointer = Pointer;
/**
*/
class PointerAddress {

    static __wrap(ptr) {
        const obj = Object.create(PointerAddress.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_pointeraddress_free(ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @param {Pointer} stake
    * @returns {PointerAddress}
    */
    static new(network, payment, stake) {
        _assertClass(payment, StakeCredential);
        _assertClass(stake, Pointer);
        var ret = wasm.pointeraddress_new(network, payment.ptr, stake.ptr);
        return PointerAddress.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    payment_cred() {
        var ret = wasm.pointeraddress_payment_cred(this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Pointer}
    */
    stake_pointer() {
        var ret = wasm.pointeraddress_stake_pointer(this.ptr);
        return Pointer.__wrap(ret);
    }
    /**
    * @returns {Address}
    */
    to_address() {
        var ret = wasm.pointeraddress_to_address(this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {PointerAddress | undefined}
    */
    static from_address(addr) {
        _assertClass(addr, Address);
        var ret = wasm.pointeraddress_from_address(addr.ptr);
        return ret === 0 ? undefined : PointerAddress.__wrap(ret);
    }
}
module.exports.PointerAddress = PointerAddress;
/**
*/
class PoolMetadata {

    static __wrap(ptr) {
        const obj = Object.create(PoolMetadata.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_poolmetadata_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.poolmetadata_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PoolMetadata}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.poolmetadata_from_bytes(ptr0, len0);
        return PoolMetadata.__wrap(ret);
    }
    /**
    * @returns {URL}
    */
    url() {
        var ret = wasm.poolmetadata_url(this.ptr);
        return URL.__wrap(ret);
    }
    /**
    * @returns {MetadataHash}
    */
    metadata_hash() {
        var ret = wasm.poolmetadata_metadata_hash(this.ptr);
        return MetadataHash.__wrap(ret);
    }
    /**
    * @param {URL} url
    * @param {MetadataHash} metadata_hash
    * @returns {PoolMetadata}
    */
    static new(url, metadata_hash) {
        _assertClass(url, URL);
        _assertClass(metadata_hash, MetadataHash);
        var ret = wasm.poolmetadata_new(url.ptr, metadata_hash.ptr);
        return PoolMetadata.__wrap(ret);
    }
}
module.exports.PoolMetadata = PoolMetadata;
/**
*/
class PoolParams {

    static __wrap(ptr) {
        const obj = Object.create(PoolParams.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_poolparams_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.poolparams_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PoolParams}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.poolparams_from_bytes(ptr0, len0);
        return PoolParams.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash}
    */
    operator() {
        var ret = wasm.poolparams_operator(this.ptr);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {VRFKeyHash}
    */
    vrf_keyhash() {
        var ret = wasm.poolparams_vrf_keyhash(this.ptr);
        return VRFKeyHash.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    pledge() {
        var ret = wasm.poolparams_pledge(this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    cost() {
        var ret = wasm.poolparams_cost(this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {UnitInterval}
    */
    margin() {
        var ret = wasm.poolparams_margin(this.ptr);
        return UnitInterval.__wrap(ret);
    }
    /**
    * @returns {RewardAddress}
    */
    reward_account() {
        var ret = wasm.poolparams_reward_account(this.ptr);
        return RewardAddress.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHashes}
    */
    pool_owners() {
        var ret = wasm.poolparams_pool_owners(this.ptr);
        return Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @returns {Relays}
    */
    relays() {
        var ret = wasm.poolparams_relays(this.ptr);
        return Relays.__wrap(ret);
    }
    /**
    * @returns {PoolMetadata | undefined}
    */
    pool_metadata() {
        var ret = wasm.poolparams_pool_metadata(this.ptr);
        return ret === 0 ? undefined : PoolMetadata.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHash} operator
    * @param {VRFKeyHash} vrf_keyhash
    * @param {BigNum} pledge
    * @param {BigNum} cost
    * @param {UnitInterval} margin
    * @param {RewardAddress} reward_account
    * @param {Ed25519KeyHashes} pool_owners
    * @param {Relays} relays
    * @param {PoolMetadata | undefined} pool_metadata
    * @returns {PoolParams}
    */
    static new(operator, vrf_keyhash, pledge, cost, margin, reward_account, pool_owners, relays, pool_metadata) {
        _assertClass(operator, Ed25519KeyHash);
        _assertClass(vrf_keyhash, VRFKeyHash);
        _assertClass(pledge, BigNum);
        _assertClass(cost, BigNum);
        _assertClass(margin, UnitInterval);
        _assertClass(reward_account, RewardAddress);
        _assertClass(pool_owners, Ed25519KeyHashes);
        _assertClass(relays, Relays);
        let ptr0 = 0;
        if (!isLikeNone(pool_metadata)) {
            _assertClass(pool_metadata, PoolMetadata);
            ptr0 = pool_metadata.ptr;
            pool_metadata.ptr = 0;
        }
        var ret = wasm.poolparams_new(operator.ptr, vrf_keyhash.ptr, pledge.ptr, cost.ptr, margin.ptr, reward_account.ptr, pool_owners.ptr, relays.ptr, ptr0);
        return PoolParams.__wrap(ret);
    }
}
module.exports.PoolParams = PoolParams;
/**
*/
class PoolRegistration {

    static __wrap(ptr) {
        const obj = Object.create(PoolRegistration.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_poolregistration_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.poolregistration_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PoolRegistration}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.poolregistration_from_bytes(ptr0, len0);
        return PoolRegistration.__wrap(ret);
    }
    /**
    * @returns {PoolParams}
    */
    pool_params() {
        var ret = wasm.poolregistration_pool_params(this.ptr);
        return PoolParams.__wrap(ret);
    }
    /**
    * @param {PoolParams} pool_params
    * @returns {PoolRegistration}
    */
    static new(pool_params) {
        _assertClass(pool_params, PoolParams);
        var ret = wasm.poolregistration_new(pool_params.ptr);
        return PoolRegistration.__wrap(ret);
    }
}
module.exports.PoolRegistration = PoolRegistration;
/**
*/
class PoolRetirement {

    static __wrap(ptr) {
        const obj = Object.create(PoolRetirement.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_poolretirement_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.poolretirement_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PoolRetirement}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.poolretirement_from_bytes(ptr0, len0);
        return PoolRetirement.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash}
    */
    pool_keyhash() {
        var ret = wasm.poolretirement_pool_keyhash(this.ptr);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    epoch() {
        var ret = wasm.poolretirement_epoch(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {Ed25519KeyHash} pool_keyhash
    * @param {number} epoch
    * @returns {PoolRetirement}
    */
    static new(pool_keyhash, epoch) {
        _assertClass(pool_keyhash, Ed25519KeyHash);
        var ret = wasm.poolretirement_new(pool_keyhash.ptr, epoch);
        return PoolRetirement.__wrap(ret);
    }
}
module.exports.PoolRetirement = PoolRetirement;
/**
*/
class PrivateKey {

    static __wrap(ptr) {
        const obj = Object.create(PrivateKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_privatekey_free(ptr);
    }
    /**
    * @returns {PublicKey}
    */
    to_public() {
        var ret = wasm.privatekey_to_public(this.ptr);
        return PublicKey.__wrap(ret);
    }
    /**
    * @returns {PrivateKey}
    */
    static generate_ed25519() {
        var ret = wasm.privatekey_generate_ed25519();
        return PrivateKey.__wrap(ret);
    }
    /**
    * @returns {PrivateKey}
    */
    static generate_ed25519extended() {
        var ret = wasm.privatekey_generate_ed25519extended();
        return PrivateKey.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_bech32() {
        try {
            wasm.privatekey_to_bech32(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        wasm.privatekey_as_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PrivateKey}
    */
    static from_extended_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.privatekey_from_extended_bytes(ptr0, len0);
        return PrivateKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PrivateKey}
    */
    static from_normal_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.privatekey_from_normal_bytes(ptr0, len0);
        return PrivateKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} message
    * @returns {Ed25519Signature}
    */
    sign(message) {
        var ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.privatekey_sign(this.ptr, ptr0, len0);
        return Ed25519Signature.__wrap(ret);
    }
}
module.exports.PrivateKey = PrivateKey;
/**
*/
class ProposedProtocolParameterUpdates {

    static __wrap(ptr) {
        const obj = Object.create(ProposedProtocolParameterUpdates.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_proposedprotocolparameterupdates_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.proposedprotocolparameterupdates_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ProposedProtocolParameterUpdates}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.proposedprotocolparameterupdates_from_bytes(ptr0, len0);
        return ProposedProtocolParameterUpdates.__wrap(ret);
    }
    /**
    * @returns {ProposedProtocolParameterUpdates}
    */
    static new() {
        var ret = wasm.proposedprotocolparameterupdates_new();
        return ProposedProtocolParameterUpdates.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.proposedprotocolparameterupdates_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {GenesisHash} key
    * @param {ProtocolParamUpdate} value
    * @returns {ProtocolParamUpdate | undefined}
    */
    insert(key, value) {
        _assertClass(key, GenesisHash);
        _assertClass(value, ProtocolParamUpdate);
        var ret = wasm.proposedprotocolparameterupdates_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : ProtocolParamUpdate.__wrap(ret);
    }
    /**
    * @param {GenesisHash} key
    * @returns {ProtocolParamUpdate | undefined}
    */
    get(key) {
        _assertClass(key, GenesisHash);
        var ret = wasm.proposedprotocolparameterupdates_get(this.ptr, key.ptr);
        return ret === 0 ? undefined : ProtocolParamUpdate.__wrap(ret);
    }
    /**
    * @returns {GenesisHashes}
    */
    keys() {
        var ret = wasm.proposedprotocolparameterupdates_keys(this.ptr);
        return GenesisHashes.__wrap(ret);
    }
}
module.exports.ProposedProtocolParameterUpdates = ProposedProtocolParameterUpdates;
/**
*/
class ProtocolParamUpdate {

    static __wrap(ptr) {
        const obj = Object.create(ProtocolParamUpdate.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_protocolparamupdate_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.protocolparamupdate_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ProtocolParamUpdate}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.protocolparamupdate_from_bytes(ptr0, len0);
        return ProtocolParamUpdate.__wrap(ret);
    }
    /**
    * @param {BigNum} minfee_a
    */
    set_minfee_a(minfee_a) {
        _assertClass(minfee_a, BigNum);
        wasm.protocolparamupdate_set_minfee_a(this.ptr, minfee_a.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */
    minfee_a() {
        var ret = wasm.protocolparamupdate_minfee_a(this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} minfee_b
    */
    set_minfee_b(minfee_b) {
        _assertClass(minfee_b, BigNum);
        wasm.protocolparamupdate_set_minfee_b(this.ptr, minfee_b.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */
    minfee_b() {
        var ret = wasm.protocolparamupdate_minfee_b(this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {number} max_block_body_size
    */
    set_max_block_body_size(max_block_body_size) {
        wasm.protocolparamupdate_set_max_block_body_size(this.ptr, max_block_body_size);
    }
    /**
    * @returns {number | undefined}
    */
    max_block_body_size() {
        wasm.protocolparamupdate_max_block_body_size(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {number} max_tx_size
    */
    set_max_tx_size(max_tx_size) {
        wasm.protocolparamupdate_set_max_tx_size(this.ptr, max_tx_size);
    }
    /**
    * @returns {number | undefined}
    */
    max_tx_size() {
        wasm.protocolparamupdate_max_tx_size(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {number} max_block_header_size
    */
    set_max_block_header_size(max_block_header_size) {
        wasm.protocolparamupdate_set_max_block_header_size(this.ptr, max_block_header_size);
    }
    /**
    * @returns {number | undefined}
    */
    max_block_header_size() {
        wasm.protocolparamupdate_max_block_header_size(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {BigNum} key_deposit
    */
    set_key_deposit(key_deposit) {
        _assertClass(key_deposit, BigNum);
        wasm.protocolparamupdate_set_key_deposit(this.ptr, key_deposit.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */
    key_deposit() {
        var ret = wasm.protocolparamupdate_key_deposit(this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} pool_deposit
    */
    set_pool_deposit(pool_deposit) {
        _assertClass(pool_deposit, BigNum);
        wasm.protocolparamupdate_set_pool_deposit(this.ptr, pool_deposit.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */
    pool_deposit() {
        var ret = wasm.protocolparamupdate_pool_deposit(this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {number} max_epoch
    */
    set_max_epoch(max_epoch) {
        wasm.protocolparamupdate_set_max_epoch(this.ptr, max_epoch);
    }
    /**
    * @returns {number | undefined}
    */
    max_epoch() {
        wasm.protocolparamupdate_max_epoch(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {number} n_opt
    */
    set_n_opt(n_opt) {
        wasm.protocolparamupdate_set_n_opt(this.ptr, n_opt);
    }
    /**
    * @returns {number | undefined}
    */
    n_opt() {
        wasm.protocolparamupdate_n_opt(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {UnitInterval} pool_pledge_influence
    */
    set_pool_pledge_influence(pool_pledge_influence) {
        _assertClass(pool_pledge_influence, UnitInterval);
        wasm.protocolparamupdate_set_pool_pledge_influence(this.ptr, pool_pledge_influence.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */
    pool_pledge_influence() {
        var ret = wasm.protocolparamupdate_pool_pledge_influence(this.ptr);
        return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} expansion_rate
    */
    set_expansion_rate(expansion_rate) {
        _assertClass(expansion_rate, UnitInterval);
        wasm.protocolparamupdate_set_expansion_rate(this.ptr, expansion_rate.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */
    expansion_rate() {
        var ret = wasm.protocolparamupdate_expansion_rate(this.ptr);
        return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} treasury_growth_rate
    */
    set_treasury_growth_rate(treasury_growth_rate) {
        _assertClass(treasury_growth_rate, UnitInterval);
        wasm.protocolparamupdate_set_treasury_growth_rate(this.ptr, treasury_growth_rate.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */
    treasury_growth_rate() {
        var ret = wasm.protocolparamupdate_treasury_growth_rate(this.ptr);
        return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} d
    */
    set_d(d) {
        _assertClass(d, UnitInterval);
        wasm.protocolparamupdate_set_d(this.ptr, d.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */
    d() {
        var ret = wasm.protocolparamupdate_d(this.ptr);
        return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {Nonce} extra_entropy
    */
    set_extra_entropy(extra_entropy) {
        _assertClass(extra_entropy, Nonce);
        wasm.protocolparamupdate_set_extra_entropy(this.ptr, extra_entropy.ptr);
    }
    /**
    * @returns {Nonce | undefined}
    */
    extra_entropy() {
        var ret = wasm.protocolparamupdate_extra_entropy(this.ptr);
        return ret === 0 ? undefined : Nonce.__wrap(ret);
    }
    /**
    * @param {ProtocolVersions} protocol_version
    */
    set_protocol_version(protocol_version) {
        _assertClass(protocol_version, ProtocolVersions);
        wasm.protocolparamupdate_set_protocol_version(this.ptr, protocol_version.ptr);
    }
    /**
    * @returns {ProtocolVersions | undefined}
    */
    protocol_version() {
        var ret = wasm.protocolparamupdate_protocol_version(this.ptr);
        return ret === 0 ? undefined : ProtocolVersions.__wrap(ret);
    }
    /**
    * @param {BigNum} min_utxo_value
    */
    set_min_utxo_value(min_utxo_value) {
        _assertClass(min_utxo_value, BigNum);
        wasm.protocolparamupdate_set_min_utxo_value(this.ptr, min_utxo_value.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */
    min_utxo_value() {
        var ret = wasm.protocolparamupdate_min_utxo_value(this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {ProtocolParamUpdate}
    */
    static new() {
        var ret = wasm.protocolparamupdate_new();
        return ProtocolParamUpdate.__wrap(ret);
    }
}
module.exports.ProtocolParamUpdate = ProtocolParamUpdate;
/**
*/
class ProtocolVersion {

    static __wrap(ptr) {
        const obj = Object.create(ProtocolVersion.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_protocolversion_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.protocolversion_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ProtocolVersion}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.protocolversion_from_bytes(ptr0, len0);
        return ProtocolVersion.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    major() {
        var ret = wasm.protocolversion_major(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    minor() {
        var ret = wasm.protocolversion_minor(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} major
    * @param {number} minor
    * @returns {ProtocolVersion}
    */
    static new(major, minor) {
        var ret = wasm.protocolversion_new(major, minor);
        return ProtocolVersion.__wrap(ret);
    }
}
module.exports.ProtocolVersion = ProtocolVersion;
/**
*/
class ProtocolVersions {

    static __wrap(ptr) {
        const obj = Object.create(ProtocolVersions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_protocolversions_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.protocolversions_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ProtocolVersions}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.protocolversions_from_bytes(ptr0, len0);
        return ProtocolVersions.__wrap(ret);
    }
    /**
    * @returns {ProtocolVersions}
    */
    static new() {
        var ret = wasm.protocolversions_new();
        return ProtocolVersions.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.protocolversions_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {ProtocolVersion}
    */
    get(index) {
        var ret = wasm.protocolversions_get(this.ptr, index);
        return ProtocolVersion.__wrap(ret);
    }
    /**
    * @param {ProtocolVersion} elem
    */
    add(elem) {
        _assertClass(elem, ProtocolVersion);
        wasm.protocolversions_add(this.ptr, elem.ptr);
    }
}
module.exports.ProtocolVersions = ProtocolVersions;
/**
* ED25519 key used as public key
*/
class PublicKey {

    static __wrap(ptr) {
        const obj = Object.create(PublicKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_publickey_free(ptr);
    }
    /**
    * Get public key from its bech32 representation
    * Example:
    * ```javascript
    * const pkey = PublicKey.from_bech32(&#39;ed25519_pk1dgaagyh470y66p899txcl3r0jaeaxu6yd7z2dxyk55qcycdml8gszkxze2&#39;);
    * ```
    * @param {string} bech32_str
    * @returns {PublicKey}
    */
    static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.publickey_from_bech32(ptr0, len0);
        return PublicKey.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_bech32() {
        try {
            wasm.publickey_to_bech32(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        wasm.publickey_as_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PublicKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.publickey_from_bytes(ptr0, len0);
        return PublicKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} data
    * @param {Ed25519Signature} signature
    * @returns {boolean}
    */
    verify(data, signature) {
        var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(signature, Ed25519Signature);
        var ret = wasm.publickey_verify(this.ptr, ptr0, len0, signature.ptr);
        return ret !== 0;
    }
    /**
    * @returns {Ed25519KeyHash}
    */
    hash() {
        var ret = wasm.publickey_hash(this.ptr);
        return Ed25519KeyHash.__wrap(ret);
    }
}
module.exports.PublicKey = PublicKey;
/**
*/
class PublicKeys {

    static __wrap(ptr) {
        const obj = Object.create(PublicKeys.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_publickeys_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = wasm.publickeys_new();
        return PublicKeys.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    size() {
        var ret = wasm.publickeys_size(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {PublicKey}
    */
    get(index) {
        var ret = wasm.publickeys_get(this.ptr, index);
        return PublicKey.__wrap(ret);
    }
    /**
    * @param {PublicKey} key
    */
    add(key) {
        _assertClass(key, PublicKey);
        wasm.publickeys_add(this.ptr, key.ptr);
    }
}
module.exports.PublicKeys = PublicKeys;
/**
*/
class Relay {

    static __wrap(ptr) {
        const obj = Object.create(Relay.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_relay_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.relay_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Relay}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.relay_from_bytes(ptr0, len0);
        return Relay.__wrap(ret);
    }
    /**
    * @param {SingleHostAddr} single_host_addr
    * @returns {Relay}
    */
    static new_single_host_addr(single_host_addr) {
        _assertClass(single_host_addr, SingleHostAddr);
        var ret = wasm.relay_new_single_host_addr(single_host_addr.ptr);
        return Relay.__wrap(ret);
    }
    /**
    * @param {SingleHostName} single_host_name
    * @returns {Relay}
    */
    static new_single_host_name(single_host_name) {
        _assertClass(single_host_name, SingleHostName);
        var ret = wasm.relay_new_single_host_name(single_host_name.ptr);
        return Relay.__wrap(ret);
    }
    /**
    * @param {MultiHostName} multi_host_name
    * @returns {Relay}
    */
    static new_multi_host_name(multi_host_name) {
        _assertClass(multi_host_name, MultiHostName);
        var ret = wasm.relay_new_multi_host_name(multi_host_name.ptr);
        return Relay.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = wasm.relay_kind(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {SingleHostAddr | undefined}
    */
    as_single_host_addr() {
        var ret = wasm.relay_as_single_host_addr(this.ptr);
        return ret === 0 ? undefined : SingleHostAddr.__wrap(ret);
    }
    /**
    * @returns {SingleHostName | undefined}
    */
    as_single_host_name() {
        var ret = wasm.relay_as_single_host_name(this.ptr);
        return ret === 0 ? undefined : SingleHostName.__wrap(ret);
    }
    /**
    * @returns {MultiHostName | undefined}
    */
    as_multi_host_name() {
        var ret = wasm.relay_as_multi_host_name(this.ptr);
        return ret === 0 ? undefined : MultiHostName.__wrap(ret);
    }
}
module.exports.Relay = Relay;
/**
*/
class Relays {

    static __wrap(ptr) {
        const obj = Object.create(Relays.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_relays_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.relays_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Relays}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.relays_from_bytes(ptr0, len0);
        return Relays.__wrap(ret);
    }
    /**
    * @returns {Relays}
    */
    static new() {
        var ret = wasm.relays_new();
        return Relays.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.relays_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Relay}
    */
    get(index) {
        var ret = wasm.relays_get(this.ptr, index);
        return Relay.__wrap(ret);
    }
    /**
    * @param {Relay} elem
    */
    add(elem) {
        _assertClass(elem, Relay);
        wasm.relays_add(this.ptr, elem.ptr);
    }
}
module.exports.Relays = Relays;
/**
*/
class RewardAddress {

    static __wrap(ptr) {
        const obj = Object.create(RewardAddress.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_rewardaddress_free(ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @returns {RewardAddress}
    */
    static new(network, payment) {
        _assertClass(payment, StakeCredential);
        var ret = wasm.rewardaddress_new(network, payment.ptr);
        return RewardAddress.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    payment_cred() {
        var ret = wasm.rewardaddress_payment_cred(this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */
    to_address() {
        var ret = wasm.rewardaddress_to_address(this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {RewardAddress | undefined}
    */
    static from_address(addr) {
        _assertClass(addr, Address);
        var ret = wasm.rewardaddress_from_address(addr.ptr);
        return ret === 0 ? undefined : RewardAddress.__wrap(ret);
    }
}
module.exports.RewardAddress = RewardAddress;
/**
*/
class RewardAddresses {

    static __wrap(ptr) {
        const obj = Object.create(RewardAddresses.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_rewardaddresses_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.rewardaddresses_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {RewardAddresses}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.rewardaddresses_from_bytes(ptr0, len0);
        return RewardAddresses.__wrap(ret);
    }
    /**
    * @returns {RewardAddresses}
    */
    static new() {
        var ret = wasm.rewardaddresses_new();
        return RewardAddresses.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.rewardaddresses_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {RewardAddress}
    */
    get(index) {
        var ret = wasm.rewardaddresses_get(this.ptr, index);
        return RewardAddress.__wrap(ret);
    }
    /**
    * @param {RewardAddress} elem
    */
    add(elem) {
        _assertClass(elem, RewardAddress);
        wasm.rewardaddresses_add(this.ptr, elem.ptr);
    }
}
module.exports.RewardAddresses = RewardAddresses;
/**
*/
class ScriptAll {

    static __wrap(ptr) {
        const obj = Object.create(ScriptAll.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_scriptall_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.scriptall_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptAll}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.scriptall_from_bytes(ptr0, len0);
        return ScriptAll.__wrap(ret);
    }
    /**
    * @returns {NativeScripts}
    */
    native_scripts() {
        var ret = wasm.scriptall_native_scripts(this.ptr);
        return NativeScripts.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    * @returns {ScriptAll}
    */
    static new(native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        var ret = wasm.scriptall_new(native_scripts.ptr);
        return ScriptAll.__wrap(ret);
    }
}
module.exports.ScriptAll = ScriptAll;
/**
*/
class ScriptAny {

    static __wrap(ptr) {
        const obj = Object.create(ScriptAny.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_scriptany_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.scriptany_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptAny}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.scriptany_from_bytes(ptr0, len0);
        return ScriptAny.__wrap(ret);
    }
    /**
    * @returns {NativeScripts}
    */
    native_scripts() {
        var ret = wasm.scriptany_native_scripts(this.ptr);
        return NativeScripts.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    * @returns {ScriptAny}
    */
    static new(native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        var ret = wasm.scriptany_new(native_scripts.ptr);
        return ScriptAny.__wrap(ret);
    }
}
module.exports.ScriptAny = ScriptAny;
/**
*/
class ScriptHash {

    static __wrap(ptr) {
        const obj = Object.create(ScriptHash.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_scripthash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.scripthash_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.scripthash_to_bech32(8, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {ScriptHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.scripthash_from_bech32(ptr0, len0);
        return ScriptHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.scripthash_from_bytes(ptr0, len0);
        return ScriptHash.__wrap(ret);
    }
}
module.exports.ScriptHash = ScriptHash;
/**
*/
class ScriptHashes {

    static __wrap(ptr) {
        const obj = Object.create(ScriptHashes.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_scripthashes_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.scripthashes_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptHashes}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.scripthashes_from_bytes(ptr0, len0);
        return ScriptHashes.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */
    static new() {
        var ret = wasm.scripthashes_new();
        return ScriptHashes.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.scripthashes_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {ScriptHash}
    */
    get(index) {
        var ret = wasm.scripthashes_get(this.ptr, index);
        return ScriptHash.__wrap(ret);
    }
    /**
    * @param {ScriptHash} elem
    */
    add(elem) {
        _assertClass(elem, ScriptHash);
        wasm.scripthashes_add(this.ptr, elem.ptr);
    }
}
module.exports.ScriptHashes = ScriptHashes;
/**
*/
class ScriptNOfK {

    static __wrap(ptr) {
        const obj = Object.create(ScriptNOfK.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_scriptnofk_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.scriptnofk_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptNOfK}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.scriptnofk_from_bytes(ptr0, len0);
        return ScriptNOfK.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    n() {
        var ret = wasm.scriptnofk_n(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {NativeScripts}
    */
    native_scripts() {
        var ret = wasm.scriptnofk_native_scripts(this.ptr);
        return NativeScripts.__wrap(ret);
    }
    /**
    * @param {number} n
    * @param {NativeScripts} native_scripts
    * @returns {ScriptNOfK}
    */
    static new(n, native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        var ret = wasm.scriptnofk_new(n, native_scripts.ptr);
        return ScriptNOfK.__wrap(ret);
    }
}
module.exports.ScriptNOfK = ScriptNOfK;
/**
*/
class ScriptPubkey {

    static __wrap(ptr) {
        const obj = Object.create(ScriptPubkey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_scriptpubkey_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.scriptpubkey_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptPubkey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.scriptpubkey_from_bytes(ptr0, len0);
        return ScriptPubkey.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash}
    */
    addr_keyhash() {
        var ret = wasm.scriptpubkey_addr_keyhash(this.ptr);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHash} addr_keyhash
    * @returns {ScriptPubkey}
    */
    static new(addr_keyhash) {
        _assertClass(addr_keyhash, Ed25519KeyHash);
        var ret = wasm.scriptpubkey_new(addr_keyhash.ptr);
        return ScriptPubkey.__wrap(ret);
    }
}
module.exports.ScriptPubkey = ScriptPubkey;
/**
*/
class SingleHostAddr {

    static __wrap(ptr) {
        const obj = Object.create(SingleHostAddr.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_singlehostaddr_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.singlehostaddr_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {SingleHostAddr}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.singlehostaddr_from_bytes(ptr0, len0);
        return SingleHostAddr.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */
    port() {
        var ret = wasm.singlehostaddr_port(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret;
    }
    /**
    * @returns {Ipv4 | undefined}
    */
    ipv4() {
        var ret = wasm.singlehostaddr_ipv4(this.ptr);
        return ret === 0 ? undefined : Ipv4.__wrap(ret);
    }
    /**
    * @returns {Ipv6 | undefined}
    */
    ipv6() {
        var ret = wasm.singlehostaddr_ipv6(this.ptr);
        return ret === 0 ? undefined : Ipv6.__wrap(ret);
    }
    /**
    * @param {number | undefined} port
    * @param {Ipv4 | undefined} ipv4
    * @param {Ipv6 | undefined} ipv6
    * @returns {SingleHostAddr}
    */
    static new(port, ipv4, ipv6) {
        let ptr0 = 0;
        if (!isLikeNone(ipv4)) {
            _assertClass(ipv4, Ipv4);
            ptr0 = ipv4.ptr;
            ipv4.ptr = 0;
        }
        let ptr1 = 0;
        if (!isLikeNone(ipv6)) {
            _assertClass(ipv6, Ipv6);
            ptr1 = ipv6.ptr;
            ipv6.ptr = 0;
        }
        var ret = wasm.singlehostaddr_new(isLikeNone(port) ? 0xFFFFFF : port, ptr0, ptr1);
        return SingleHostAddr.__wrap(ret);
    }
}
module.exports.SingleHostAddr = SingleHostAddr;
/**
*/
class SingleHostName {

    static __wrap(ptr) {
        const obj = Object.create(SingleHostName.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_singlehostname_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.singlehostname_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {SingleHostName}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.singlehostname_from_bytes(ptr0, len0);
        return SingleHostName.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */
    port() {
        var ret = wasm.singlehostname_port(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret;
    }
    /**
    * @returns {DNSRecordAorAAAA}
    */
    dns_name() {
        var ret = wasm.singlehostname_dns_name(this.ptr);
        return DNSRecordAorAAAA.__wrap(ret);
    }
    /**
    * @param {number | undefined} port
    * @param {DNSRecordAorAAAA} dns_name
    * @returns {SingleHostName}
    */
    static new(port, dns_name) {
        _assertClass(dns_name, DNSRecordAorAAAA);
        var ret = wasm.singlehostname_new(isLikeNone(port) ? 0xFFFFFF : port, dns_name.ptr);
        return SingleHostName.__wrap(ret);
    }
}
module.exports.SingleHostName = SingleHostName;
/**
*/
class StakeCredential {

    static __wrap(ptr) {
        const obj = Object.create(StakeCredential.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_stakecredential_free(ptr);
    }
    /**
    * @param {Ed25519KeyHash} hash
    * @returns {StakeCredential}
    */
    static from_keyhash(hash) {
        _assertClass(hash, Ed25519KeyHash);
        var ret = wasm.stakecredential_from_keyhash(hash.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @param {ScriptHash} hash
    * @returns {StakeCredential}
    */
    static from_scripthash(hash) {
        _assertClass(hash, ScriptHash);
        var ret = wasm.stakecredential_from_scripthash(hash.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash | undefined}
    */
    to_keyhash() {
        var ret = wasm.stakecredential_to_keyhash(this.ptr);
        return ret === 0 ? undefined : Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {ScriptHash | undefined}
    */
    to_scripthash() {
        var ret = wasm.stakecredential_to_scripthash(this.ptr);
        return ret === 0 ? undefined : ScriptHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = wasm.stakecredential_kind(this.ptr);
        return ret;
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.stakecredential_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {StakeCredential}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.stakecredential_from_bytes(ptr0, len0);
        return StakeCredential.__wrap(ret);
    }
}
module.exports.StakeCredential = StakeCredential;
/**
*/
class StakeCredentials {

    static __wrap(ptr) {
        const obj = Object.create(StakeCredentials.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_stakecredentials_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.stakecredentials_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {StakeCredentials}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.stakecredentials_from_bytes(ptr0, len0);
        return StakeCredentials.__wrap(ret);
    }
    /**
    * @returns {StakeCredentials}
    */
    static new() {
        var ret = wasm.stakecredentials_new();
        return StakeCredentials.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.stakecredentials_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {StakeCredential}
    */
    get(index) {
        var ret = wasm.stakecredentials_get(this.ptr, index);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @param {StakeCredential} elem
    */
    add(elem) {
        _assertClass(elem, StakeCredential);
        wasm.stakecredentials_add(this.ptr, elem.ptr);
    }
}
module.exports.StakeCredentials = StakeCredentials;
/**
*/
class StakeDelegation {

    static __wrap(ptr) {
        const obj = Object.create(StakeDelegation.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_stakedelegation_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.stakedelegation_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {StakeDelegation}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.stakedelegation_from_bytes(ptr0, len0);
        return StakeDelegation.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    stake_credential() {
        var ret = wasm.stakedelegation_stake_credential(this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash}
    */
    pool_keyhash() {
        var ret = wasm.stakedelegation_pool_keyhash(this.ptr);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {StakeCredential} stake_credential
    * @param {Ed25519KeyHash} pool_keyhash
    * @returns {StakeDelegation}
    */
    static new(stake_credential, pool_keyhash) {
        _assertClass(stake_credential, StakeCredential);
        _assertClass(pool_keyhash, Ed25519KeyHash);
        var ret = wasm.stakedelegation_new(stake_credential.ptr, pool_keyhash.ptr);
        return StakeDelegation.__wrap(ret);
    }
}
module.exports.StakeDelegation = StakeDelegation;
/**
*/
class StakeDeregistration {

    static __wrap(ptr) {
        const obj = Object.create(StakeDeregistration.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_stakederegistration_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.stakederegistration_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {StakeDeregistration}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.stakederegistration_from_bytes(ptr0, len0);
        return StakeDeregistration.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    stake_credential() {
        var ret = wasm.stakederegistration_stake_credential(this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @param {StakeCredential} stake_credential
    * @returns {StakeDeregistration}
    */
    static new(stake_credential) {
        _assertClass(stake_credential, StakeCredential);
        var ret = wasm.stakederegistration_new(stake_credential.ptr);
        return StakeDeregistration.__wrap(ret);
    }
}
module.exports.StakeDeregistration = StakeDeregistration;
/**
*/
class StakeRegistration {

    static __wrap(ptr) {
        const obj = Object.create(StakeRegistration.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_stakeregistration_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.stakeregistration_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {StakeRegistration}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.stakeregistration_from_bytes(ptr0, len0);
        return StakeRegistration.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    stake_credential() {
        var ret = wasm.stakeregistration_stake_credential(this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @param {StakeCredential} stake_credential
    * @returns {StakeRegistration}
    */
    static new(stake_credential) {
        _assertClass(stake_credential, StakeCredential);
        var ret = wasm.stakeregistration_new(stake_credential.ptr);
        return StakeRegistration.__wrap(ret);
    }
}
module.exports.StakeRegistration = StakeRegistration;
/**
*/
class TimelockExpiry {

    static __wrap(ptr) {
        const obj = Object.create(TimelockExpiry.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_timelockexpiry_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.timelockexpiry_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TimelockExpiry}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.timelockexpiry_from_bytes(ptr0, len0);
        return TimelockExpiry.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    slot() {
        var ret = wasm.timelockexpiry_slot(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} slot
    * @returns {TimelockExpiry}
    */
    static new(slot) {
        var ret = wasm.timelockexpiry_new(slot);
        return TimelockExpiry.__wrap(ret);
    }
}
module.exports.TimelockExpiry = TimelockExpiry;
/**
*/
class TimelockStart {

    static __wrap(ptr) {
        const obj = Object.create(TimelockStart.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_timelockstart_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.timelockstart_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TimelockStart}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.timelockstart_from_bytes(ptr0, len0);
        return TimelockStart.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    slot() {
        var ret = wasm.timelockstart_slot(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} slot
    * @returns {TimelockStart}
    */
    static new(slot) {
        var ret = wasm.timelockstart_new(slot);
        return TimelockStart.__wrap(ret);
    }
}
module.exports.TimelockStart = TimelockStart;
/**
*/
class Transaction {

    static __wrap(ptr) {
        const obj = Object.create(Transaction.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transaction_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transaction_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Transaction}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transaction_from_bytes(ptr0, len0);
        return Transaction.__wrap(ret);
    }
    /**
    * @returns {TransactionBody}
    */
    body() {
        var ret = wasm.transaction_body(this.ptr);
        return TransactionBody.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSet}
    */
    witness_set() {
        var ret = wasm.transaction_witness_set(this.ptr);
        return TransactionWitnessSet.__wrap(ret);
    }
    /**
    * @returns {TransactionMetadata | undefined}
    */
    metadata() {
        var ret = wasm.transaction_metadata(this.ptr);
        return ret === 0 ? undefined : TransactionMetadata.__wrap(ret);
    }
    /**
    * @param {TransactionBody} body
    * @param {TransactionWitnessSet} witness_set
    * @param {TransactionMetadata | undefined} metadata
    * @returns {Transaction}
    */
    static new(body, witness_set, metadata) {
        _assertClass(body, TransactionBody);
        _assertClass(witness_set, TransactionWitnessSet);
        let ptr0 = 0;
        if (!isLikeNone(metadata)) {
            _assertClass(metadata, TransactionMetadata);
            ptr0 = metadata.ptr;
            metadata.ptr = 0;
        }
        var ret = wasm.transaction_new(body.ptr, witness_set.ptr, ptr0);
        return Transaction.__wrap(ret);
    }
}
module.exports.Transaction = Transaction;
/**
*/
class TransactionBodies {

    static __wrap(ptr) {
        const obj = Object.create(TransactionBodies.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactionbodies_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactionbodies_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionBodies}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionbodies_from_bytes(ptr0, len0);
        return TransactionBodies.__wrap(ret);
    }
    /**
    * @returns {TransactionBodies}
    */
    static new() {
        var ret = wasm.transactionbodies_new();
        return TransactionBodies.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.transactionbodies_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionBody}
    */
    get(index) {
        var ret = wasm.transactionbodies_get(this.ptr, index);
        return TransactionBody.__wrap(ret);
    }
    /**
    * @param {TransactionBody} elem
    */
    add(elem) {
        _assertClass(elem, TransactionBody);
        wasm.transactionbodies_add(this.ptr, elem.ptr);
    }
}
module.exports.TransactionBodies = TransactionBodies;
/**
*/
class TransactionBody {

    static __wrap(ptr) {
        const obj = Object.create(TransactionBody.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactionbody_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactionbody_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionBody}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionbody_from_bytes(ptr0, len0);
        return TransactionBody.__wrap(ret);
    }
    /**
    * @returns {TransactionInputs}
    */
    inputs() {
        var ret = wasm.transactionbody_inputs(this.ptr);
        return TransactionInputs.__wrap(ret);
    }
    /**
    * @returns {TransactionOutputs}
    */
    outputs() {
        var ret = wasm.transactionbody_outputs(this.ptr);
        return TransactionOutputs.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    fee() {
        var ret = wasm.transactionbody_fee(this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */
    ttl() {
        wasm.transactionbody_ttl(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {Certificates} certs
    */
    set_certs(certs) {
        _assertClass(certs, Certificates);
        wasm.transactionbody_set_certs(this.ptr, certs.ptr);
    }
    /**
    * @returns {Certificates | undefined}
    */
    certs() {
        var ret = wasm.transactionbody_certs(this.ptr);
        return ret === 0 ? undefined : Certificates.__wrap(ret);
    }
    /**
    * @param {Withdrawals} withdrawals
    */
    set_withdrawals(withdrawals) {
        _assertClass(withdrawals, Withdrawals);
        wasm.transactionbody_set_withdrawals(this.ptr, withdrawals.ptr);
    }
    /**
    * @returns {Withdrawals | undefined}
    */
    withdrawals() {
        var ret = wasm.transactionbody_withdrawals(this.ptr);
        return ret === 0 ? undefined : Withdrawals.__wrap(ret);
    }
    /**
    * @param {Update} update
    */
    set_update(update) {
        _assertClass(update, Update);
        wasm.transactionbody_set_update(this.ptr, update.ptr);
    }
    /**
    * @returns {Update | undefined}
    */
    update() {
        var ret = wasm.transactionbody_update(this.ptr);
        return ret === 0 ? undefined : Update.__wrap(ret);
    }
    /**
    * @param {MetadataHash} metadata_hash
    */
    set_metadata_hash(metadata_hash) {
        _assertClass(metadata_hash, MetadataHash);
        wasm.transactionbody_set_metadata_hash(this.ptr, metadata_hash.ptr);
    }
    /**
    * @returns {MetadataHash | undefined}
    */
    metadata_hash() {
        var ret = wasm.transactionbody_metadata_hash(this.ptr);
        return ret === 0 ? undefined : MetadataHash.__wrap(ret);
    }
    /**
    * @param {number} validity_start_interval
    */
    set_validity_start_interval(validity_start_interval) {
        wasm.transactionbody_set_validity_start_interval(this.ptr, validity_start_interval);
    }
    /**
    * @returns {number | undefined}
    */
    validity_start_interval() {
        wasm.transactionbody_validity_start_interval(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {Mint} mint
    */
    set_mint(mint) {
        _assertClass(mint, Mint);
        wasm.transactionbody_set_mint(this.ptr, mint.ptr);
    }
    /**
    * @returns {Mint | undefined}
    */
    multiassets() {
        var ret = wasm.transactionbody_multiassets(this.ptr);
        return ret === 0 ? undefined : Mint.__wrap(ret);
    }
    /**
    * @param {TransactionInputs} inputs
    * @param {TransactionOutputs} outputs
    * @param {BigNum} fee
    * @param {number | undefined} ttl
    * @returns {TransactionBody}
    */
    static new(inputs, outputs, fee, ttl) {
        _assertClass(inputs, TransactionInputs);
        _assertClass(outputs, TransactionOutputs);
        _assertClass(fee, BigNum);
        var ret = wasm.transactionbody_new(inputs.ptr, outputs.ptr, fee.ptr, !isLikeNone(ttl), isLikeNone(ttl) ? 0 : ttl);
        return TransactionBody.__wrap(ret);
    }
}
module.exports.TransactionBody = TransactionBody;
/**
*/
class TransactionBuilder {

    static __wrap(ptr) {
        const obj = Object.create(TransactionBuilder.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactionbuilder_free(ptr);
    }
    /**
    * @param {Ed25519KeyHash} hash
    * @param {TransactionInput} input
    * @param {Value} amount
    */
    add_key_input(hash, input, amount) {
        _assertClass(hash, Ed25519KeyHash);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        wasm.transactionbuilder_add_key_input(this.ptr, hash.ptr, input.ptr, amount.ptr);
    }
    /**
    * @param {ScriptHash} hash
    * @param {TransactionInput} input
    * @param {Value} amount
    */
    add_script_input(hash, input, amount) {
        _assertClass(hash, ScriptHash);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        wasm.transactionbuilder_add_script_input(this.ptr, hash.ptr, input.ptr, amount.ptr);
    }
    /**
    * @param {ByronAddress} hash
    * @param {TransactionInput} input
    * @param {Value} amount
    */
    add_bootstrap_input(hash, input, amount) {
        _assertClass(hash, ByronAddress);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        wasm.transactionbuilder_add_bootstrap_input(this.ptr, hash.ptr, input.ptr, amount.ptr);
    }
    /**
    * @param {Address} address
    * @param {TransactionInput} input
    * @param {Value} amount
    */
    add_input(address, input, amount) {
        _assertClass(address, Address);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        wasm.transactionbuilder_add_input(this.ptr, address.ptr, input.ptr, amount.ptr);
    }
    /**
    * calculates how much the fee would increase if you added a given output
    * @param {Address} address
    * @param {TransactionInput} input
    * @param {Value} amount
    * @returns {BigNum}
    */
    fee_for_input(address, input, amount) {
        _assertClass(address, Address);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        var ret = wasm.transactionbuilder_fee_for_input(this.ptr, address.ptr, input.ptr, amount.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {TransactionOutput} output
    */
    add_output(output) {
        _assertClass(output, TransactionOutput);
        wasm.transactionbuilder_add_output(this.ptr, output.ptr);
    }
    /**
    * calculates how much the fee would increase if you added a given output
    * @param {TransactionOutput} output
    * @returns {BigNum}
    */
    fee_for_output(output) {
        _assertClass(output, TransactionOutput);
        var ret = wasm.transactionbuilder_fee_for_output(this.ptr, output.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} fee
    */
    set_fee(fee) {
        _assertClass(fee, BigNum);
        wasm.transactionbuilder_set_fee(this.ptr, fee.ptr);
    }
    /**
    * @param {number} ttl
    */
    set_ttl(ttl) {
        wasm.transactionbuilder_set_ttl(this.ptr, ttl);
    }
    /**
    * @param {number} validity_start_interval
    */
    set_validity_start_interval(validity_start_interval) {
        wasm.transactionbuilder_set_validity_start_interval(this.ptr, validity_start_interval);
    }
    /**
    * @param {Certificates} certs
    */
    set_certs(certs) {
        _assertClass(certs, Certificates);
        wasm.transactionbuilder_set_certs(this.ptr, certs.ptr);
    }
    /**
    * @param {Withdrawals} withdrawals
    */
    set_withdrawals(withdrawals) {
        _assertClass(withdrawals, Withdrawals);
        wasm.transactionbuilder_set_withdrawals(this.ptr, withdrawals.ptr);
    }
    /**
    * @param {TransactionMetadata} metadata
    */
    set_metadata(metadata) {
        _assertClass(metadata, TransactionMetadata);
        wasm.transactionbuilder_set_metadata(this.ptr, metadata.ptr);
    }
    /**
    * @param {LinearFee} linear_fee
    * @param {BigNum} minimum_utxo_val
    * @param {BigNum} pool_deposit
    * @param {BigNum} key_deposit
    * @returns {TransactionBuilder}
    */
    static new(linear_fee, minimum_utxo_val, pool_deposit, key_deposit) {
        _assertClass(linear_fee, LinearFee);
        _assertClass(minimum_utxo_val, BigNum);
        _assertClass(pool_deposit, BigNum);
        _assertClass(key_deposit, BigNum);
        var ret = wasm.transactionbuilder_new(linear_fee.ptr, minimum_utxo_val.ptr, pool_deposit.ptr, key_deposit.ptr);
        return TransactionBuilder.__wrap(ret);
    }
    /**
    * does not include refunds or withdrawals
    * @returns {Value}
    */
    get_explicit_input() {
        var ret = wasm.transactionbuilder_get_explicit_input(this.ptr);
        return Value.__wrap(ret);
    }
    /**
    * withdrawals and refunds
    * @returns {Value}
    */
    get_implicit_input() {
        var ret = wasm.transactionbuilder_get_implicit_input(this.ptr);
        return Value.__wrap(ret);
    }
    /**
    * does not include fee
    * @returns {Value}
    */
    get_explicit_output() {
        var ret = wasm.transactionbuilder_get_explicit_output(this.ptr);
        return Value.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    get_deposit() {
        var ret = wasm.transactionbuilder_get_deposit(this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum | undefined}
    */
    get_fee_if_set() {
        var ret = wasm.transactionbuilder_get_fee_if_set(this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * Warning: this function will mutate the /fee/ field
    * @param {Address} address
    * @returns {boolean}
    */
    add_change_if_needed(address) {
        _assertClass(address, Address);
        var ret = wasm.transactionbuilder_add_change_if_needed(this.ptr, address.ptr);
        return ret !== 0;
    }
    /**
    * @returns {TransactionBody}
    */
    build() {
        var ret = wasm.transactionbuilder_build(this.ptr);
        return TransactionBody.__wrap(ret);
    }
    /**
    * warning: sum of all parts of a transaction must equal 0. You cannot just set the fee to the min value and forget about it
    * warning: min_fee may be slightly larger than the actual minimum fee (ex: a few lovelaces)
    * this is done to simplify the library code, but can be fixed later
    * @returns {BigNum}
    */
    min_fee() {
        var ret = wasm.transactionbuilder_min_fee(this.ptr);
        return BigNum.__wrap(ret);
    }
}
module.exports.TransactionBuilder = TransactionBuilder;
/**
*/
class TransactionHash {

    static __wrap(ptr) {
        const obj = Object.create(TransactionHash.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactionhash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactionhash_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.transactionhash_to_bech32(8, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {TransactionHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionhash_from_bech32(ptr0, len0);
        return TransactionHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionhash_from_bytes(ptr0, len0);
        return TransactionHash.__wrap(ret);
    }
}
module.exports.TransactionHash = TransactionHash;
/**
*/
class TransactionInput {

    static __wrap(ptr) {
        const obj = Object.create(TransactionInput.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactioninput_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactioninput_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionInput}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactioninput_from_bytes(ptr0, len0);
        return TransactionInput.__wrap(ret);
    }
    /**
    * @returns {TransactionHash}
    */
    transaction_id() {
        var ret = wasm.transactioninput_transaction_id(this.ptr);
        return TransactionHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    index() {
        var ret = wasm.transactioninput_index(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {TransactionHash} transaction_id
    * @param {number} index
    * @returns {TransactionInput}
    */
    static new(transaction_id, index) {
        _assertClass(transaction_id, TransactionHash);
        var ret = wasm.transactioninput_new(transaction_id.ptr, index);
        return TransactionInput.__wrap(ret);
    }
}
module.exports.TransactionInput = TransactionInput;
/**
*/
class TransactionInputs {

    static __wrap(ptr) {
        const obj = Object.create(TransactionInputs.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactioninputs_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactioninputs_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionInputs}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactioninputs_from_bytes(ptr0, len0);
        return TransactionInputs.__wrap(ret);
    }
    /**
    * @returns {TransactionInputs}
    */
    static new() {
        var ret = wasm.transactioninputs_new();
        return TransactionInputs.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.transactioninputs_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionInput}
    */
    get(index) {
        var ret = wasm.transactioninputs_get(this.ptr, index);
        return TransactionInput.__wrap(ret);
    }
    /**
    * @param {TransactionInput} elem
    */
    add(elem) {
        _assertClass(elem, TransactionInput);
        wasm.transactioninputs_add(this.ptr, elem.ptr);
    }
}
module.exports.TransactionInputs = TransactionInputs;
/**
*/
class TransactionMetadata {

    static __wrap(ptr) {
        const obj = Object.create(TransactionMetadata.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactionmetadata_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactionmetadata_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionMetadata}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionmetadata_from_bytes(ptr0, len0);
        return TransactionMetadata.__wrap(ret);
    }
    /**
    * @returns {GeneralTransactionMetadata}
    */
    general() {
        var ret = wasm.transactionmetadata_general(this.ptr);
        return GeneralTransactionMetadata.__wrap(ret);
    }
    /**
    * @returns {NativeScripts | undefined}
    */
    native_scripts() {
        var ret = wasm.transactionmetadata_native_scripts(this.ptr);
        return ret === 0 ? undefined : NativeScripts.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    */
    set_native_scripts(native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        wasm.transactionmetadata_set_native_scripts(this.ptr, native_scripts.ptr);
    }
    /**
    * @param {GeneralTransactionMetadata} general
    * @returns {TransactionMetadata}
    */
    static new(general) {
        _assertClass(general, GeneralTransactionMetadata);
        var ret = wasm.transactionmetadata_new(general.ptr);
        return TransactionMetadata.__wrap(ret);
    }
}
module.exports.TransactionMetadata = TransactionMetadata;
/**
*/
class TransactionMetadatum {

    static __wrap(ptr) {
        const obj = Object.create(TransactionMetadatum.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactionmetadatum_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactionmetadatum_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionMetadatum}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionmetadatum_from_bytes(ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {MetadataMap} map
    * @returns {TransactionMetadatum}
    */
    static new_map(map) {
        _assertClass(map, MetadataMap);
        var ret = wasm.transactionmetadatum_new_map(map.ptr);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {MetadataList} list
    * @returns {TransactionMetadatum}
    */
    static new_list(list) {
        _assertClass(list, MetadataList);
        var ret = wasm.transactionmetadatum_new_list(list.ptr);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {Int} int
    * @returns {TransactionMetadatum}
    */
    static new_int(int) {
        _assertClass(int, Int);
        var ret = wasm.transactionmetadatum_new_int(int.ptr);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionMetadatum}
    */
    static new_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionmetadatum_new_bytes(ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {TransactionMetadatum}
    */
    static new_text(text) {
        var ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionmetadatum_new_text(ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = wasm.transactionmetadatum_kind(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {MetadataMap}
    */
    as_map() {
        var ret = wasm.transactionmetadatum_as_map(this.ptr);
        return MetadataMap.__wrap(ret);
    }
    /**
    * @returns {MetadataList}
    */
    as_list() {
        var ret = wasm.transactionmetadatum_as_list(this.ptr);
        return MetadataList.__wrap(ret);
    }
    /**
    * @returns {Int}
    */
    as_int() {
        var ret = wasm.transactionmetadatum_as_int(this.ptr);
        return Int.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        wasm.transactionmetadatum_as_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @returns {string}
    */
    as_text() {
        try {
            wasm.transactionmetadatum_as_text(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
}
module.exports.TransactionMetadatum = TransactionMetadatum;
/**
*/
class TransactionMetadatumLabels {

    static __wrap(ptr) {
        const obj = Object.create(TransactionMetadatumLabels.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactionmetadatumlabels_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactionmetadatumlabels_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionMetadatumLabels}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionmetadatumlabels_from_bytes(ptr0, len0);
        return TransactionMetadatumLabels.__wrap(ret);
    }
    /**
    * @returns {TransactionMetadatumLabels}
    */
    static new() {
        var ret = wasm.transactionmetadatumlabels_new();
        return TransactionMetadatumLabels.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.transactionmetadatumlabels_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {BigNum}
    */
    get(index) {
        var ret = wasm.transactionmetadatumlabels_get(this.ptr, index);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} elem
    */
    add(elem) {
        _assertClass(elem, BigNum);
        wasm.transactionmetadatumlabels_add(this.ptr, elem.ptr);
    }
}
module.exports.TransactionMetadatumLabels = TransactionMetadatumLabels;
/**
*/
class TransactionOutput {

    static __wrap(ptr) {
        const obj = Object.create(TransactionOutput.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactionoutput_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactionoutput_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionOutput}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionoutput_from_bytes(ptr0, len0);
        return TransactionOutput.__wrap(ret);
    }
    /**
    * @returns {Address}
    */
    address() {
        var ret = wasm.transactionoutput_address(this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @returns {Value}
    */
    amount() {
        var ret = wasm.transactionoutput_amount(this.ptr);
        return Value.__wrap(ret);
    }
    /**
    * @param {Address} address
    * @param {Value} amount
    * @returns {TransactionOutput}
    */
    static new(address, amount) {
        _assertClass(address, Address);
        _assertClass(amount, Value);
        var ret = wasm.transactionoutput_new(address.ptr, amount.ptr);
        return TransactionOutput.__wrap(ret);
    }
}
module.exports.TransactionOutput = TransactionOutput;
/**
*/
class TransactionOutputs {

    static __wrap(ptr) {
        const obj = Object.create(TransactionOutputs.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactionoutputs_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactionoutputs_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionOutputs}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionoutputs_from_bytes(ptr0, len0);
        return TransactionOutputs.__wrap(ret);
    }
    /**
    * @returns {TransactionOutputs}
    */
    static new() {
        var ret = wasm.transactionoutputs_new();
        return TransactionOutputs.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.transactionoutputs_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionOutput}
    */
    get(index) {
        var ret = wasm.transactionoutputs_get(this.ptr, index);
        return TransactionOutput.__wrap(ret);
    }
    /**
    * @param {TransactionOutput} elem
    */
    add(elem) {
        _assertClass(elem, TransactionOutput);
        wasm.transactionoutputs_add(this.ptr, elem.ptr);
    }
}
module.exports.TransactionOutputs = TransactionOutputs;
/**
*/
class TransactionWitnessSet {

    static __wrap(ptr) {
        const obj = Object.create(TransactionWitnessSet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactionwitnessset_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactionwitnessset_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionWitnessSet}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionwitnessset_from_bytes(ptr0, len0);
        return TransactionWitnessSet.__wrap(ret);
    }
    /**
    * @param {Vkeywitnesses} vkeys
    */
    set_vkeys(vkeys) {
        _assertClass(vkeys, Vkeywitnesses);
        wasm.transactionwitnessset_set_vkeys(this.ptr, vkeys.ptr);
    }
    /**
    * @returns {Vkeywitnesses | undefined}
    */
    vkeys() {
        var ret = wasm.transactionwitnessset_vkeys(this.ptr);
        return ret === 0 ? undefined : Vkeywitnesses.__wrap(ret);
    }
    /**
    * @param {NativeScripts} scripts
    */
    set_scripts(scripts) {
        _assertClass(scripts, NativeScripts);
        wasm.transactionwitnessset_set_scripts(this.ptr, scripts.ptr);
    }
    /**
    * @returns {NativeScripts | undefined}
    */
    scripts() {
        var ret = wasm.transactionwitnessset_scripts(this.ptr);
        return ret === 0 ? undefined : NativeScripts.__wrap(ret);
    }
    /**
    * @param {BootstrapWitnesses} bootstraps
    */
    set_bootstraps(bootstraps) {
        _assertClass(bootstraps, BootstrapWitnesses);
        wasm.transactionwitnessset_set_bootstraps(this.ptr, bootstraps.ptr);
    }
    /**
    * @returns {BootstrapWitnesses | undefined}
    */
    bootstraps() {
        var ret = wasm.transactionwitnessset_bootstraps(this.ptr);
        return ret === 0 ? undefined : BootstrapWitnesses.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSet}
    */
    static new() {
        var ret = wasm.transactionwitnessset_new();
        return TransactionWitnessSet.__wrap(ret);
    }
}
module.exports.TransactionWitnessSet = TransactionWitnessSet;
/**
*/
class TransactionWitnessSets {

    static __wrap(ptr) {
        const obj = Object.create(TransactionWitnessSets.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_transactionwitnesssets_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.transactionwitnesssets_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionWitnessSets}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.transactionwitnesssets_from_bytes(ptr0, len0);
        return TransactionWitnessSets.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSets}
    */
    static new() {
        var ret = wasm.transactionwitnesssets_new();
        return TransactionWitnessSets.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.transactionwitnesssets_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionWitnessSet}
    */
    get(index) {
        var ret = wasm.transactionwitnesssets_get(this.ptr, index);
        return TransactionWitnessSet.__wrap(ret);
    }
    /**
    * @param {TransactionWitnessSet} elem
    */
    add(elem) {
        _assertClass(elem, TransactionWitnessSet);
        wasm.transactionwitnesssets_add(this.ptr, elem.ptr);
    }
}
module.exports.TransactionWitnessSets = TransactionWitnessSets;
/**
*/
class URL {

    static __wrap(ptr) {
        const obj = Object.create(URL.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_url_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.url_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {URL}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.url_from_bytes(ptr0, len0);
        return URL.__wrap(ret);
    }
    /**
    * @param {string} url
    * @returns {URL}
    */
    static new(url) {
        var ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.url_new(ptr0, len0);
        return URL.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    url() {
        try {
            wasm.url_url(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
}
module.exports.URL = URL;
/**
*/
class UnitInterval {

    static __wrap(ptr) {
        const obj = Object.create(UnitInterval.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_unitinterval_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.unitinterval_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {UnitInterval}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.unitinterval_from_bytes(ptr0, len0);
        return UnitInterval.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    numerator() {
        var ret = wasm.unitinterval_numerator(this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    denominator() {
        var ret = wasm.unitinterval_denominator(this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} numerator
    * @param {BigNum} denominator
    * @returns {UnitInterval}
    */
    static new(numerator, denominator) {
        _assertClass(numerator, BigNum);
        _assertClass(denominator, BigNum);
        var ret = wasm.unitinterval_new(numerator.ptr, denominator.ptr);
        return UnitInterval.__wrap(ret);
    }
}
module.exports.UnitInterval = UnitInterval;
/**
*/
class Update {

    static __wrap(ptr) {
        const obj = Object.create(Update.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_update_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.update_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Update}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.update_from_bytes(ptr0, len0);
        return Update.__wrap(ret);
    }
    /**
    * @returns {ProposedProtocolParameterUpdates}
    */
    proposed_protocol_parameter_updates() {
        var ret = wasm.update_proposed_protocol_parameter_updates(this.ptr);
        return ProposedProtocolParameterUpdates.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    epoch() {
        var ret = wasm.update_epoch(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {ProposedProtocolParameterUpdates} proposed_protocol_parameter_updates
    * @param {number} epoch
    * @returns {Update}
    */
    static new(proposed_protocol_parameter_updates, epoch) {
        _assertClass(proposed_protocol_parameter_updates, ProposedProtocolParameterUpdates);
        var ret = wasm.update_new(proposed_protocol_parameter_updates.ptr, epoch);
        return Update.__wrap(ret);
    }
}
module.exports.Update = Update;
/**
*/
class VRFCert {

    static __wrap(ptr) {
        const obj = Object.create(VRFCert.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_vrfcert_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.vrfcert_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {VRFCert}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.vrfcert_from_bytes(ptr0, len0);
        return VRFCert.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    output() {
        wasm.vrfcert_output(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @returns {Uint8Array}
    */
    proof() {
        wasm.vrfcert_proof(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} output
    * @param {Uint8Array} proof
    * @returns {VRFCert}
    */
    static new(output, proof) {
        var ptr0 = passArray8ToWasm0(output, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(proof, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = wasm.vrfcert_new(ptr0, len0, ptr1, len1);
        return VRFCert.__wrap(ret);
    }
}
module.exports.VRFCert = VRFCert;
/**
*/
class VRFKeyHash {

    static __wrap(ptr) {
        const obj = Object.create(VRFKeyHash.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_vrfkeyhash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.vrfkeyhash_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.vrfkeyhash_to_bech32(8, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {VRFKeyHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.vrfkeyhash_from_bech32(ptr0, len0);
        return VRFKeyHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {VRFKeyHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.vrfkeyhash_from_bytes(ptr0, len0);
        return VRFKeyHash.__wrap(ret);
    }
}
module.exports.VRFKeyHash = VRFKeyHash;
/**
*/
class VRFVKey {

    static __wrap(ptr) {
        const obj = Object.create(VRFVKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_vrfvkey_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.vrfvkey_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.vrfvkey_to_bech32(8, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {VRFVKey}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.vrfvkey_from_bech32(ptr0, len0);
        return VRFVKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {VRFVKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.vrfvkey_from_bytes(ptr0, len0);
        return VRFVKey.__wrap(ret);
    }
}
module.exports.VRFVKey = VRFVKey;
/**
*/
class Value {

    static __wrap(ptr) {
        const obj = Object.create(Value.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_value_free(ptr);
    }
    /**
    * @param {BigNum} coin
    * @returns {Value}
    */
    static new(coin) {
        _assertClass(coin, BigNum);
        var ret = wasm.value_new(coin.ptr);
        return Value.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    coin() {
        var ret = wasm.value_coin(this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} coin
    */
    set_coin(coin) {
        _assertClass(coin, BigNum);
        wasm.value_set_coin(this.ptr, coin.ptr);
    }
    /**
    * @returns {MultiAsset | undefined}
    */
    multiasset() {
        var ret = wasm.value_multiasset(this.ptr);
        return ret === 0 ? undefined : MultiAsset.__wrap(ret);
    }
    /**
    * @param {MultiAsset} multiasset
    */
    set_multiasset(multiasset) {
        _assertClass(multiasset, MultiAsset);
        wasm.value_set_multiasset(this.ptr, multiasset.ptr);
    }
    /**
    * @param {Value} rhs
    * @returns {Value}
    */
    checked_add(rhs) {
        _assertClass(rhs, Value);
        var ret = wasm.value_checked_add(this.ptr, rhs.ptr);
        return Value.__wrap(ret);
    }
    /**
    * @param {Value} rhs_value
    * @returns {Value}
    */
    checked_sub(rhs_value) {
        _assertClass(rhs_value, Value);
        var ret = wasm.value_checked_sub(this.ptr, rhs_value.ptr);
        return Value.__wrap(ret);
    }
    /**
    * @param {Value} rhs_value
    * @returns {Value}
    */
    clamped_sub(rhs_value) {
        _assertClass(rhs_value, Value);
        var ret = wasm.value_clamped_sub(this.ptr, rhs_value.ptr);
        return Value.__wrap(ret);
    }
    /**
    * note: values are only partially comparable
    * @param {Value} rhs_value
    * @returns {number | undefined}
    */
    compare(rhs_value) {
        _assertClass(rhs_value, Value);
        var ret = wasm.value_compare(this.ptr, rhs_value.ptr);
        return ret === 0xFFFFFF ? undefined : ret;
    }
}
module.exports.Value = Value;
/**
*/
class Vkey {

    static __wrap(ptr) {
        const obj = Object.create(Vkey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_vkey_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.vkey_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Vkey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.vkey_from_bytes(ptr0, len0);
        return Vkey.__wrap(ret);
    }
    /**
    * @param {PublicKey} pk
    * @returns {Vkey}
    */
    static new(pk) {
        _assertClass(pk, PublicKey);
        var ret = wasm.vkey_new(pk.ptr);
        return Vkey.__wrap(ret);
    }
    /**
    * @returns {PublicKey}
    */
    public_key() {
        var ret = wasm.vkey_public_key(this.ptr);
        return PublicKey.__wrap(ret);
    }
}
module.exports.Vkey = Vkey;
/**
*/
class Vkeywitness {

    static __wrap(ptr) {
        const obj = Object.create(Vkeywitness.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_vkeywitness_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.vkeywitness_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Vkeywitness}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.vkeywitness_from_bytes(ptr0, len0);
        return Vkeywitness.__wrap(ret);
    }
    /**
    * @param {Vkey} vkey
    * @param {Ed25519Signature} signature
    * @returns {Vkeywitness}
    */
    static new(vkey, signature) {
        _assertClass(vkey, Vkey);
        _assertClass(signature, Ed25519Signature);
        var ret = wasm.vkeywitness_new(vkey.ptr, signature.ptr);
        return Vkeywitness.__wrap(ret);
    }
    /**
    * @returns {Vkey}
    */
    vkey() {
        var ret = wasm.vkeywitness_vkey(this.ptr);
        return Vkey.__wrap(ret);
    }
    /**
    * @returns {Ed25519Signature}
    */
    signature() {
        var ret = wasm.vkeywitness_signature(this.ptr);
        return Ed25519Signature.__wrap(ret);
    }
}
module.exports.Vkeywitness = Vkeywitness;
/**
*/
class Vkeywitnesses {

    static __wrap(ptr) {
        const obj = Object.create(Vkeywitnesses.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_vkeywitnesses_free(ptr);
    }
    /**
    * @returns {Vkeywitnesses}
    */
    static new() {
        var ret = wasm.vkeywitnesses_new();
        return Vkeywitnesses.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.vkeywitnesses_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Vkeywitness}
    */
    get(index) {
        var ret = wasm.vkeywitnesses_get(this.ptr, index);
        return Vkeywitness.__wrap(ret);
    }
    /**
    * @param {Vkeywitness} elem
    */
    add(elem) {
        _assertClass(elem, Vkeywitness);
        wasm.vkeywitnesses_add(this.ptr, elem.ptr);
    }
}
module.exports.Vkeywitnesses = Vkeywitnesses;
/**
*/
class Withdrawals {

    static __wrap(ptr) {
        const obj = Object.create(Withdrawals.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_withdrawals_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        wasm.withdrawals_to_bytes(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Withdrawals}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.withdrawals_from_bytes(ptr0, len0);
        return Withdrawals.__wrap(ret);
    }
    /**
    * @returns {Withdrawals}
    */
    static new() {
        var ret = wasm.withdrawals_new();
        return Withdrawals.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.withdrawals_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {RewardAddress} key
    * @param {BigNum} value
    * @returns {BigNum | undefined}
    */
    insert(key, value) {
        _assertClass(key, RewardAddress);
        _assertClass(value, BigNum);
        var ret = wasm.withdrawals_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {RewardAddress} key
    * @returns {BigNum | undefined}
    */
    get(key) {
        _assertClass(key, RewardAddress);
        var ret = wasm.withdrawals_get(this.ptr, key.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {RewardAddresses}
    */
    keys() {
        var ret = wasm.withdrawals_keys(this.ptr);
        return RewardAddresses.__wrap(ret);
    }
}
module.exports.Withdrawals = Withdrawals;

module.exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

module.exports.__wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

module.exports.__wbg_new_3a746f2619705add = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

module.exports.__wbg_call_f54d3a6dadb199ca = function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
};

module.exports.__wbindgen_jsval_eq = function(arg0, arg1) {
    var ret = getObject(arg0) === getObject(arg1);
    return ret;
};

module.exports.__wbg_self_ac379e780a0d8b94 = function(arg0) {
    var ret = getObject(arg0).self;
    return addHeapObject(ret);
};

module.exports.__wbg_crypto_1e4302b85d4f64a2 = function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

module.exports.__wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

module.exports.__wbg_getRandomValues_1b4ba144162a5c9e = function(arg0) {
    var ret = getObject(arg0).getRandomValues;
    return addHeapObject(ret);
};

module.exports.__wbg_require_6461b1e9a0d7c34a = function(arg0, arg1) {
    var ret = require(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

module.exports.__wbg_getRandomValues_1ef11e888e5228e9 = function(arg0, arg1, arg2) {
    getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
};

module.exports.__wbg_randomFillSync_1b52c8482374c55b = function(arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
};

module.exports.__wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

module.exports.__wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

module.exports.__wbindgen_rethrow = function(arg0) {
    throw takeObject(arg0);
};

const path = require('path').join(__dirname, 'cardano_serialization_lib_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

